//! Rust syntax-highlighting fixture.

#![allow(dead_code, unused_variables)]

use std::{
    collections::{BTreeMap, HashMap},
    fmt::{self, Display},
    rc::Rc,
    sync::{Arc, Mutex},
};

const MAX_RETRIES: usize = 3;
static APPLICATION: &str = "sophia";

type Result<T> = std::result::Result<T, AppError>;

#[derive(Debug, Clone, PartialEq, Eq, Hash)]
enum Status {
    Pending,
    Active { since: u64 },
    Disabled(String),
}

#[derive(Debug, Default)]
struct User<'a, T = u64>
where
    T: Copy + Display,
{
    id: T,
    name: &'a str,
    tags: Vec<String>,
    status: Option<Status>,
}

#[derive(Debug)]
struct AppError {
    message: String,
}

impl Display for AppError {
    fn fmt(&self, formatter: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(formatter, "application error: {}", self.message)
    }
}

impl std::error::Error for AppError {}

trait Identified {
    type Id: Copy + Display;

    const KIND: &'static str;

    fn id(&self) -> Self::Id;

    fn label(&self) -> String {
        format!("{}#{}", Self::KIND, self.id())
    }
}

impl<T> Identified for User<'_, T>
where
    T: Copy + Display,
{
    type Id = T;

    const KIND: &'static str = "user";

    fn id(&self) -> Self::Id {
        self.id
    }
}

impl<'a, T: Copy + Display> User<'a, T> {
    pub fn new(id: T, name: &'a str) -> Self {
        Self {
            id,
            name,
            tags: vec!["rust".to_owned()],
            status: Some(Status::Pending),
        }
    }

    pub fn is_active(&self) -> bool {
        matches!(self.status, Some(Status::Active { .. }))
    }
}

fn immutable_reference() {
    let value = 10;
    let reference = &value;
    println!("reference = {reference}");
}

fn mutable_reference() {
    let mut value = 10;
    let reference = &mut value;
    *reference += 5;
    println!("value = {value}");
}

fn raw_pointers() {
    let mut value = 10;
    let immutable = &raw const value;
    let mutable = &raw mut value;

    // SAFETY: both pointers remain valid and properly aligned in this scope.
    unsafe {
        println!("immutable = {}", *immutable);
        *mutable += 1;
    }
}

fn smart_pointers() {
    let boxed = Box::new(42);
    let shared = Rc::new(String::from("shared"));
    let cloned = Rc::clone(&shared);
    let synchronized = Arc::new(Mutex::new(vec![1, 2, 3]));

    synchronized.lock().expect("mutex poisoned").push(*boxed);
    println!("{shared}, count={}", Rc::strong_count(&cloned));
}

fn longest<'a>(left: &'a str, right: &'a str) -> &'a str {
    if left.len() > right.len() { left } else { right }
}

fn parse_identifier(input: &str) -> Result<u64> {
    let trimmed = input.trim();

    if trimmed.is_empty() {
        return Err(AppError {
            message: "identifier is empty".into(),
        });
    }

    trimmed.parse::<u64>().map_err(|error| AppError {
        message: format!("invalid identifier {trimmed:?}: {error}"),
    })
}

fn describe(status: &Status) -> &'static str {
    match status {
        Status::Pending => "pending",
        Status::Active { since: 0..=999 } => "recently active",
        Status::Active { since } if *since > 10_000 => "active for a long time",
        Status::Active { .. } => "active",
        Status::Disabled(reason) if reason.is_empty() => "disabled",
        Status::Disabled(_) => "disabled with reason",
    }
}

fn collections_and_iterators() {
    let numbers = [1_i32, 2, 3, 4, 5];
    let squares: Vec<_> = numbers
        .iter()
        .copied()
        .filter(|number| number % 2 != 0)
        .map(|number| number.pow(2))
        .collect();

    let mut scores = HashMap::from([("Ada", 100), ("Grace", 98)]);
    scores.entry("Linus").or_insert(95);

    let ordered: BTreeMap<_, _> = scores.into_iter().collect();
    for (index, (name, score)) in ordered.iter().enumerate() {
        println!("{index}: {name} => {score:#04x}");
    }

    let [first, middle @ .., last] = numbers;
    assert_eq!((first, middle, last), (1, [2, 3, 4], 5));
}

fn literals() {
    let decimal = 1_000_000_u64;
    let hexadecimal = 0xff_ec_de_5e_u32;
    let octal = 0o755;
    let binary = 0b1010_0110;
    let float = 6.022_140_76e23_f64;
    let character = '\u{1F980}';
    let bytes = b"bytes\x20string";
    let raw = r#"raw string with "quotes" and # symbols"#;
    let multiline = "first line\
                     second line";

    println!("{decimal} {hexadecimal:x} {octal:o} {binary:b} {float:e}");
    println!("{character} {bytes:?} {raw} {multiline}");
}

macro_rules! hashmap {
    ($($key:expr => $value:expr),* $(,)?) => {{
        let mut map = ::std::collections::HashMap::new();
        $(map.insert($key, $value);)*
        map
    }};
}

async fn fetch_name(id: u64) -> Result<String> {
    Ok(format!("user-{id}"))
}

fn control_flow(mut value: i32) -> i32 {
    let sign = if value >= 0 { 1 } else { -1 };

    let loop_value = 'outer: loop {
        for index in 0..=MAX_RETRIES {
            value += index as i32;
            if value > 10 {
                break 'outer value;
            }
            if index == 1 {
                continue;
            }
        }
        break value;
    };
    value = loop_value;

    while value < 20 {
        value += 2;
    }

    sign * value
}

fn main() -> Result<()> {
    let mut user = User::new(parse_identifier(" 42 ")?, "Ada Lovelace");
    user.status = Some(Status::Active { since: 1843 });

    let status = user.status.as_ref().map(describe).unwrap_or("unknown");
    let attributes = hashmap! {
        "language" => "Rust",
        "status" => status,
    };

    immutable_reference();
    mutable_reference();
    raw_pointers();
    smart_pointers();
    collections_and_iterators();
    literals();

    println!("{}: {} ({attributes:?})", user.label(), user.name);
    println!("longest = {}", longest("short", "a little longer"));
    println!("control = {}", control_flow(-2));

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_identifier() -> Result<()> {
        assert_eq!(parse_identifier("7")?, 7);
        assert!(parse_identifier("").is_err());
        Ok(())
    }
}
