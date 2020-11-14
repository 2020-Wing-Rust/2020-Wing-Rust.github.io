# 제네릭과 트레이트

## Generic

```rust
fn largest_i32(list: &[i32]) -> i32 {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    return largest;
}
```

→ 여기서 타입(`i32`)와 이름(`largest_i32`)만 바꾸면 다른 타입에서도 쓸 수 있지 않을까?

- 타입 정보를 매개 변수로 전달하여, 개발자가 작성하는 코드의 반복을 줄이자.
- 일반적으로, 타입 정보를 담고있는 변수를 `T`로 표시(`Type`)
- 컴파일러에서 자동으로 각 타입에 해당되는 코드를 만들어서 그 것을 컴파일 한다.
- 함수, 열거자, 구조체, 메서드에서도 사용할 수 있다.

### 제네릭을 적용한 함수

```rust
fn largest<T>(list: &[T]) -> T
{
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    return largest;
}
```

### 제네릭을 이용한 구조체와 메서드

```rust
struct Point<T> {
    x: T,
    y : T,
}

impl<T> Point<T> { //제네릭으로 T 타입 매개변수를 받음을 명시해야 한다.fn
    fn x(&self) -> &T {
        return &self.x;
    }
}

impl Point<f32> { //특정 타입일 때만 적용되는 메서드
    fn distance_from_origin(&self) -> f32 {
        return (self.x.powi(2) + self.y.powi(2)).sqrt();
    }
}

```

### 특정 기능이 없는 타입이 제네릭에 들어가는 경우

- `T`가 구현된 기능을 지원하지 않는 타입일 수도 있다.
- 실제로도 `largest` 함수는 컴파일 에러가 발생한다.

```bash
   Compiling aggregator v0.1.0 (F:\Development\Rust Wing Study\rust-programming-language\ch8\aggregator)
error[E0369]: binary operation `>` cannot be applied to type `T`
  --> src\main.rs:56:17
   |
56 |         if item > largest {
   |            ---- ^ ------- T
   |            |
   |            T
   |
help: consider restricting type parameter `T`
   |
```

특정 기능이 구현되어 있는 지 어떻게 컴파일러에게 알려줄 것인가?

## Trait

- 여러 타입에서 할 수 있는 특정 기능을 추상적으로 정의하기

```bash
$ cargo check
    Checking aggregator v0.1.0 (F:\Development\Rust Wing Study\rust-programming-language\ch8\aggregator)
error[E0308]: mismatched types
  --> src\main.rs:40:16
   |
31 |   fn returns_summarizable(switch: bool) -> impl Summary {
   |                                            ------------ expected because this return type...
32 |       if switch {
33 |           return NewsArticle {
   |  ________________-
34 | |             headline: String::from("대한민국, 독일 이기다"),
35 | |             location: String::from("카잔 아레나, 러시아"),
36 | |             author: String::from("위키백과"),
37 | |             content: String::from("2:0"),
38 | |         };
   | |_________- ...is found to be `NewsArticle` here
39 |       } else {
40 |           return Tweet {
   |  ________________^
41 | |             username: String::from("horse_ebooks"),
42 | |             content: String::from("러스트 공부 시작"),
43 | |             reply: false,
44 | |             retweet: false,
45 | |         };
   | |_________^ expected struct `NewsArticle`, found struct `Tweet`
   |
   = note: to return `impl Trait`, all returned values must be of the same type
   = note: for information on `impl Trait`, see <https://doc.rust-lang.org/book/ch10-02-traits.html#returning-types-that-implement-traits>
   = help: you can instead return a boxed trait object using `Box<dyn Summary>`
   = note: for information on trait objects, see <https://doc.rust-lang.org/book/ch17-02-trait-objects.html#using-trait-objects-that-allow-for-values-of-different-types>
   = help: alternatively, create a new `enum` with a variant for each returned type
```