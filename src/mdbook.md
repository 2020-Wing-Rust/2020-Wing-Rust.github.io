# 책 만들기

## mdbook

이 프로젝트는 마크다운 형식으로 파일을 공유하고, Marp 같은 툴을 빌려서 현장에서 보여주기도 할 예정입니다. 그렇지만 Github Pages를 통한 배포를 하기 위해 정적인 사이트 형태로도 렌더링할 예정입니다. 저희가 이 렌더링 과정에서 사용할 툴을 [mdbook](https://github.com/rust-lang/mdBook)입니다. 마크다운 파일을 기반으로 책과 비슷한 형태로 제작해줍니다. Gitbook과 같은 책의 형태로 만들어 주는 다른 플랫폼도 있고, Jekyll 같은 다른 정적 사이트 생성기를 통해서 만들 수도 있지만 Rust로 짜여있기 때문에 이 도구를 선택하게 되었습니다.

## mdbook 설치

mdbook은 cargo를 통해서 손쉽게 설치가 가능합니다.

```shell
car install mdbook
```

## mdbook으로 책 만들기

### 1.목차 구성

`src/`에 마크다운으로 본인이 담당한 파일을 만들면, 이를 목차 정보를 담당하는 `SUMMARY.md`에도 명시를 해줘야 합니다. 탭으로 하위 챕터를 구별합니다.
예를 들어, Chapter1의 하위로 `러스트 설치하기`라는 제목으로 `install_rust.md`가 담고 있는 정보를 넣고 싶다면 아래와 같이 `SUMMARY.md`를 구성하면 됩니다.

```makrdown
# Summary

<!-- 목차를 작성하는 페이지입니다. 목차 작성도 꼭 확인해주세요. -->

- [Chapter 1](./chapter_1.md)
  - [러스트 설치하기](./install_rust.md)
```

### 2. 책 만들기 및 업데이트

단순히 책을 만들고 싶은 거면, 아래와 같이 입력 후 Push를 해주세요.

```shell
mdbook build
```

바로 웹브라우저에서 열고 싶다면 아래와 같이 입력하면, 빌드와 동시에 웹브라우저를 열어줍니다.

```shell
mdbook build --open
```
