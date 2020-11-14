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

### Trait 선언하기

트레이트 선언, 이름 , 그리고 타입의 행위를 정의할 메서드로 이루어짐

```rust
pub trait Summary {
    fn summarize(&self) -> String; //{} 를 붙이는 것이 아닌 ;을 붙인다.
}
```

```rust
pub trait Summary {
    fn summarize(&self) -> String {
        return String::from("대충 요약"); //미리 기본 구현을 할 수도 있다.
    }
}
```

### Trait 구현하기

이미 선언된 트레이트를 가져와서 구현할 수도 있습니다.  단, 외부에서 정의된 타입에 외부에서 정의된 트레이트를 구현하는 건 불가능합니다. (같은 타입에 다른 트레이트가 같은 이름으로 구현될 수 있음.)

```rust
impl 트레이트_이름 for 타입이름 {
    fn 메서드_이름(&self) -> String {
        //세부 구현
    }
}
```

### Trait와 Generic으로 함수 만들어 보기: 트레이트 매개변수

특정 트레이트를 구현한 타입만 제네릭의 인자로 받을 수가 있다. → 컴파일러한테 이 타입이 가능한 행위를 알려줄 수 있다.

```rust
fn notify(item: impl Summary) {}

fn notify<T: Summary>(item: T) {}

fn notify<T: Summary + Clone>(item: T){}

fn notify<T>(item: T)
    where T: Summary + Clone
{}
```

트레이트를 구현하는 타입을 리턴하는 함수를 만들 때에도 트레이트 매개변수를 활용한다. 이 때 트레이트를 구현하는 타입은 한가지만 반환이 가능하다.

```rust
fn returns_trait(switch: bool) -> impl Summary {
    if switch {
        NewsArticle
    }
    else {
        Tweet
    }
}
```

```bash
   = note: to return `impl Trait`, all returned values must be of the same type
```