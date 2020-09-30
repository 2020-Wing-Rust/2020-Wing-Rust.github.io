---
marp: true
date: 2020-10-06
---

# 구조체(Struct)

2020년 10월 6일

---

## 구조체란?

- Object Composition의 일종 [1]
  - 원시 데이터 타입을 묶어서 새로운 데이터 타입으로 라벨링 하는 것
  - 여기서 상속과 함수(메쏘드)를 포함하도록 만들어서 객체 지향 언어의 객체라는 개념을 만듬
- Rust의 구조체는 상속은 없지만 메쏘드를 선언할 수 있고, 생성자를 만들 수 있는 것과 같이 객체 지향 언어의 객체와 굉장히 비슷한 특징을 가짐.

---

## 구조체의 정의

- 구조체의 선언에는 구조체의 이름, 필드의 이름과 타입을 나열해야 한다.

```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool
}
```

- Tuple struct : 필드의 이름이 없는 튜플을 통해서도 구조체를 만들 수 있다.

```rust
struct Color(i32, i32, i32);
```

---

## 구조체 인스턴스의 생성과 이용

- 인스턴스 : 어떤 설계도(클래스, 생성자, 구조체 등)을 통해 만들어지는 대상

```rust
let some_color = Color(0, 0, 0);
let user_1 = User{
    username: String::from("hello"),
    email:String::from("hello"),
    sign_in_count: 0,
    active: false
};

println!("{}", some_clor.1); // 0
println!("{}", user_1.username) // hello
```

---

## 구조체 인스턴스를 반환하는 함수

- 구조체를 반환하는 함수를 만들 수 있다.

```rust
fn make_user(email: String, username: String) -> User {
    return User {
      username,
      email,
      sign_in_count: 0,
      active: false
    }
}
```

---

## derive 어노테이션으로 디버깅 하기

- `#[derive]` attribute를 통해, 우리는 이미 기본적으로 구현된 몇몇 trait을 사용할 수 있게 해줌.
- 그 중 하나가 `{:?}`를 통해 값을 포맷팅 할 수 있게 해주는 Debug [2]
- 기본적으로 Display를 구현하지 않더라도 출력할 수 있게 해줌

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

let rect1 = Rectangle {
    width: 30,
    height: 50,
};

println!("rect1: {:#?}", rect1);
```

---

## 메쏘드

- 그 객체 인스턴스와 그 데이터에 접근 가능한 서브루틴 : 함수와 유사하다.
- `&self`인자를 통해 접근 가능하며, 이 외에도 다른 매개변수를 받을 수 있다.
- 위의 `Rectangle` 구조체의 넓이를 구하는 메쏘드를 구현해보자.

```rust
impl Rectangle {
    fn get_area(&self) -> u32{ //&self를 인자로 인스턴스와 그 데이터에 접근한다.
      self.width * self.height
    }
}
```

---

## 연관 함수

- 메쏘드와 유사하나, 인스턴스와 데이터에 접근하지 않는 함수(== `&self`를 인자로 가지지 않는 함수)
- 생성자(새로운 인스턴스를 리턴하는 함수)를 만드는 데 주로 사용됨.
- 객체 지향 언어의 정적 메소드와 비슷한 개념(단, 일반적으로 생성자는 정적 메소드가 아님.) [3]

```rust
impl Rectangle {
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}
```

---

## 참고문헌

[1] “Object composition,” Wikipedia. Sep. 21, 2020, Accessed: Sep. 28, 2020. [Online]. Available: <https://en.wikipedia.org/w/index.php?title=Object_composition&oldid=979633822>.
[2] “Derive - Rust By Example.” <https://doc.rust-lang.org/stable/rust-by-example/trait/derive.html> (accessed Sep. 29, 2020).
[3] Aron and K. Tugay, “java - Constructor is static or non static,” Stack Overflow, 27 2019. <https://stackoverflow.com/questions/12940421/constructor-is-static-or-non-static> (accessed Sep. 30, 2020).
