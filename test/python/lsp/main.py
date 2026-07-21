"""Python syntax-highlighting fixture."""

from __future__ import annotations

import asyncio
import math as mathematics
from collections.abc import AsyncIterator, Callable, Iterable
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, ClassVar, Final, Generic, TypeVar


MAX_RETRIES: Final = 3
T = TypeVar("T")


def traced(func: Callable[..., T]) -> Callable[..., T]:
    """Return a tiny logging decorator."""

    def wrapper(*args: Any, **kwargs: Any) -> T:
        # ty: ignore[unresolved-attribute]
        print(f"calling {func.__name__!r} with {args=}, {kwargs=}")
        return func(*args, **kwargs)

    return wrapper


@dataclass(slots=True)
class User(Generic[T]):
    species: ClassVar[str] = "human"

    name: str
    identifier: T
    tags: list[str] = field(default_factory=list)
    active: bool = True

    @property
    def display_name(self) -> str:
        return self.name.title()

    @classmethod
    def anonymous(cls, identifier: T) -> User[T]:
        return cls(name="anonymous", identifier=identifier, active=False)

    def __str__(self) -> str:
        return f"{self.display_name} <{self.identifier}>"


@traced
def summarize(values: Iterable[int], *, prefix: str = "total") -> tuple[int, float]:
    numbers = [value for value in values if value >= 0]
    total = sum(numbers)
    average = total / len(numbers) if numbers else 0.0
    print(f"{prefix}: {total:,} ({average:.2f})")
    return total, average


def classify(value: object) -> str:
    match value:
        case None:
            return "none"
        case bool(enabled):
            return "enabled" if enabled else "disabled"
        case int(number) | float(number) if number < 0:
            return "negative"
        case {"status": "ok", "data": data}:
            return f"success: {data!r}"
        case [first, *rest]:
            return f"sequence: {first=}, {rest=}"
        case _:
            return "unknown"


async def read_lines(path: Path) -> AsyncIterator[str]:
    with path.open(encoding="utf-8") as source:
        for line in source:
            await asyncio.sleep(0)
            yield line.rstrip("\n")


async def main() -> None:
    binary = 0b1010
    octal = 0o755
    hexadecimal = 0xFF_EC
    scientific = 6.022e23
    complex_number = 2 + 3j
    escaped = "tab:\t newline:\n quote:\""
    raw_pattern = r"^[a-z_][a-z0-9_]*$"
    multiline = """A multiline string
with interpolation-like {braces} left untouched."""

    mapping = {"answer": 42, "nested": {"enabled": True}}
    squares = {number: number**2 for number in range(6)}
    unique = {item.lower() for item in ["Python", "PYTHON", "Tera"]}
    head, *middle, tail = [1, 2, 3, 4]

    user = User[int]("ada lovelace", 1, tags=["math", "code"])
    user.tags.append("history")

    try:
        quotient = mapping["answer"] // 0
    except (KeyError, ZeroDivisionError) as error:
        print(f"handled: {error}")
    else:
        print(quotient)
    finally:
        print("cleanup")

    for index, tag in enumerate(user.tags, start=1):
        if tag == "math":
            continue
        print(index, tag)
    else:
        print("loop complete")

    counter = 0
    while counter < MAX_RETRIES:
        counter += 1
        if counter == 2:
            break

    assert mathematics.isfinite(scientific)
    del mapping["nested"]

    examples = (
        binary,
        octal,
        hexadecimal,
        complex_number,
        escaped,
        raw_pattern,
        multiline,
        squares,
        unique,
        head,
        middle,
        tail,
    )
    print(user, classify(examples), summarize(range(-2, 5), prefix="sum"))

    async for line in read_lines(Path(__file__)):
        if line.startswith("class User"):
            print(line)
            break


if __name__ == "__main__":
    asyncio.run(main())
