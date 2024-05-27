use std::rc::Rc;

fn immutable_reference() {
    let x = 10;
    let y = &x;
    println!("The value of y is: {}", y);
}

fn mutable_reference() {
    let mut x = 10;
    {
        let y = &mut x;
        *y += 5; 
    }
    println!("The value of x is: {}", x);
}

fn raw_pointers() {
    let x = 10;
    let r1 = &x as *const i32;
    let r2 = &x as *mut i32; 

    unsafe {
        println!("r1 points to: {}", *r1);
        println!("r2 points to: {}", *r2);
    }
}

fn heap_allocation() {
    let x = Box::new(42); 
    println!("Heap value: {}", *x);
}

fn rc_example() {
    let a = Rc::new(10);
    let b = Rc::clone(&a); 
    println!("Rc value: {}", *a);
    println!("Reference count: {}", Rc::strong_count(&a));
}

fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() {
        a
    } else {
        b
    }
}

fn lifetime_example() {
    let s1 = "short";
    let s2 = "longer";
    let result = longest(s1, s2);
    println!("Longest string: {}", result);
}

struct RefStruct<'a> {
    part: &'a str,
}

fn struct_with_references() {
    let text = String::from("Hello, world!");
    let first_word = RefStruct { part: &text[0..5] };
    println!("Struct part: {}", first_word.part);
}
