Object.assign(window.search, {"doc_urls":["cover.html#2020-wing-rust-study","cover.html#참여자","ch0/welcome.html#왜-rust를-배워야-할까요","ch0/welcome.html#c와-c이-아직도-현역인-이유","ch0/welcome.html#rust의-탄생","ch0/welcome.html#rust의-장점","ch0/welcome.html#참고문헌","ch0/mdbook.html#책-만들기","ch0/mdbook.html#mdbook","ch0/mdbook.html#mdbook-설치","ch0/mdbook.html#mdbook으로-책-만들기","ch0/mdbook.html#1목차-구성","ch0/mdbook.html#2-책-만들기-및-업데이트","ch1/chapter_1.html#chapter-1","ch1/install_rust.html#러스트-설치하기"],"index":{"documentStore":{"docInfo":{"0":{"body":5,"breadcrumbs":4,"title":4},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":1,"title":1},"11":{"body":10,"breadcrumbs":1,"title":1},"12":{"body":6,"breadcrumbs":1,"title":1},"13":{"body":0,"breadcrumbs":2,"title":2},"14":{"body":0,"breadcrumbs":2,"title":0},"2":{"body":0,"breadcrumbs":1,"title":1},"3":{"body":9,"breadcrumbs":2,"title":2},"4":{"body":10,"breadcrumbs":1,"title":1},"5":{"body":12,"breadcrumbs":1,"title":1},"6":{"body":1,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":7,"breadcrumbs":1,"title":1},"9":{"body":5,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"happy-rust-crab 2020년도 광주과학기술원 전산 동아리 WING에서 진행할 러스트 프로그래밍 공식 가이드(통칭 꽃게책) 스터디를 위한 페이지 입니다.","breadcrumbs":"2020 Wing Rust Study","id":"0","title":"2020 Wing Rust Study"},"1":{"body":"김현서","breadcrumbs":"참여자","id":"1","title":"참여자"},"10":{"body":"","breadcrumbs":"mdbook으로 책 만들기","id":"10","title":"mdbook으로 책 만들기"},"11":{"body":"src/에 마크다운으로 본인이 담당한 파일을 만들면, 이를 목차 정보를 담당하는 SUMMARY.md에도 명시를 해줘야 합니다. 탭으로 하위 챕터를 구별합니다. 예를 들어, Chapter 1의 하위로 러스트 설치하기라는 제목으로 install_rust.md가 담고 있는 정보를 넣고 싶다면 아래와 같이 SUMMARY.md를 구성하면 됩니다. # Summary <!-- 목차를 작성하는 페이지입니다. 목차 작성도 꼭 확인해주세요. --> - [Chapter 1](./chapter_1.md) - [러스트 설치하기](./install_rust.md)","breadcrumbs":"1.목차 구성","id":"11","title":"1.목차 구성"},"12":{"body":"단순히 책을 만들고 싶은 거면, 아래와 같이 입력 후 Push를 해주세요. mdbook build 웹브라우저에서 바로 확인하고 싶다면 아래와 같이 입력하면, 빌드와 동시에 웹브라우저를 열어줍니다. mdbook build --open","breadcrumbs":"2. 책 만들기 및 업데이트","id":"12","title":"2. 책 만들기 및 업데이트"},"13":{"body":"","breadcrumbs":"Chapter 1","id":"13","title":"Chapter 1"},"14":{"body":"","breadcrumbs":"Chapter 1 » 러스트 설치하기","id":"14","title":"러스트 설치하기"},"2":{"body":"","breadcrumbs":"왜 Rust를 배워야 할까요?","id":"2","title":"왜 Rust를 배워야 할까요?"},"3":{"body":"지금까지 정말로 로그래밍 언어가 개발되었습니다. 여러 언어가 나오고, 또 여러 언어가 사라졌습니다. 그렇지만 과거에 만들어져도 현재에도 폭넓게 쓰이는 언어들이 있습니다. C와 C를 발전 시킨 C++ 계열입니다. 이 언어는 거의 모든 일을 할 수 있습니다. 그렇지만 만들어진 시점도 옛날이고, 수동적이고 안전하지 않은 메모리 관리, 느린 컴파일 속도, 복잡한 문법으로 인해 많은 언어들이 나오고 C와 C++의 자리를 가져갔습니다. 그렇지만 메모리 구조 같이 시스템의 밑바닥에서 작업해야하는 부분을 건드릴 수 있는 건 C와 C++ 밖에 없기 때문에, 아직도 시스템 프로그래밍이나 웹 브라우저 같이 복잡한 곳, 혹은 극한까지 성능이 필요한 곳, 하드웨어 성능제약이 매우 심한 곳에서는 C와 C++이 아직도 현역으로 쓰이고 있습니다.","breadcrumbs":"C와 C++이 아직도 현역인 이유","id":"3","title":"C와 C++이 아직도 현역인 이유"},"4":{"body":"Rust는 원래 Mozila 재단의 그레이던 호어의 개인 프로젝트 였습니다. 당시 Mozila 재단은 웹브라우저 성능을 높히기 위해 새로운 돌파구를 찾으려 했습니다. 이 프로젝트에는 파이어폭스 퀀텀이라는 이름이 붙었고, 이 프로젝트를 통해 만들어진 렌더링 엔진에는 Servo 라는 이름이 붙었습니다. 현재는 어느 정도 완성이 되어 파이어폭스에서 직접 써볼 수 있습니다. 웹 브라우저는 기본적으로 매우 복잡합니다. 특히 요즘은 웹에서 할 수 있는 일이 폭발적으로 증가하는 시점에서는 더 복잡합니다. 이런 상황에서 성능을 올리는 것은 힘듭니다. 특히 C++로 짤 때는 어려운 문법 구조로 인해 더 힘듭니다. 거기에 메모리 관리 같이 성능에 직접적으로 영향을 미치고 안전에 중요한 영역 때문에 더 작성이 힘듭니다. 이 때 주목 받은 것이 Rust입니다. 수동적이고 예측가능하면서 안전한 메모리 관리, 현대적 언어 설계를 도입하여 보다 쉬워진 설계 같이 다양한 장점을 가지고 있는 Rust를 Mozila에서 채택하면서 더 진보된 웹 브라우저 엔진을 제작할 수 있게 되었습니다. 현재도 Mozila 재단은 Rust 재단의 가장 큰 스폰서 중 하나입니다.","breadcrumbs":"Rust의 탄생","id":"4","title":"Rust의 탄생"},"5":{"body":"Rust는 C++로 해야하는 일을 보다 편리하고, 안전하기 위해 만들어 졌고, 그에 따라 여러 장점을 가지고 있습니다. 이러한 장점들에 대해 알아봅시다. 빠른 실행속도 : Rust는 컴파일이 된 후, 빠르게 실행하게 위해 여러 최적화를 도입하였습니다. 또한 컴파일 속도도 C++에 비하면 비교적 개선되었습니다. 안전하고 예측가능한 메모리 관리: Rust는 Java같은 언어와 다르게 C++ 처럼 직접 메모리 관리를 합니다. 그렇지만 Rust는 컴파일 단계에서, 잘못된 메모리 접근을 막습니다. 또한 직접 메모리 관리를 하기 때문에 메모리 사용을 보다 직관적으로 이해할 수 있습니다. 여러분이 C 계열에서 포인터를 배워 보셨거나, 자료구조 과목에서 메모리 때문에 고민해보신 적 있다면 좋은 선택이 될 것입니다. 개발도구가 정리되어 있습니다. : 포맷터, 라이브러리 문서 작성 도구, 빌드 도구, 패키지 관리 도구 전부 다 언어 안에 포함되어 있고, 각 OS에서 동일한 실행을 보장합니다. 꾸준히 사용처가 늘고 있습니다. : Rust 사용자는 갈수록 늘어나고 있으며, 성능과 엄격함이 필요한 분야에서 갈수록 Rust 사용이 늘어 나고 있습니다. 작게는 명령쉘에서 사용하는 프로그램에서 시작해, 웹 서버, 웹 앱,웹 브라우저까지 갈수록 사용처가 늘고 있습니다. 커뮤니티가 활발합니다: 가장 활발한 개발 커뮤니티 중 하나인 스택오버플로우에서 선정된 개발자들이 좋아 하는 언어에서 최근 계속 상위권을 유지하고 있고, 많은 개발자들이 러스트를 개선하고 발전하고 확장시켜 나가는 데 기여하고 있습니다.","breadcrumbs":"Rust의 장점","id":"5","title":"Rust의 장점"},"6":{"body":"왜 Rust언어인가? 꽃게책","breadcrumbs":"참고문헌","id":"6","title":"참고문헌"},"7":{"body":"","breadcrumbs":"책 만들기","id":"7","title":"책 만들기"},"8":{"body":"이 프로젝트는 마크다운 형식으로 파일을 공유하고, Marp 같은 툴을 빌려서 현장에서 보여주기도 할 예정입니다. 그렇지만 Github Pages를 통한 배포를 하기 위해 정적인 사이트 형태로도 렌더링할 예정입니다. 저희가 이 렌더링 과정에서 사용할 툴이 mdbook 입니다. 마크다운 파일을 기반으로 책과 비슷한 형태로 제작해줍니다. Gitbook과 같은 책의 형태로 만들어 주는 다른 플랫폼도 있고, Jekyll 같은 다른 정적 사이트 생성기를 통해서 만들 수도 있지만 Rust로 짜여있기 때문에 이 도구를 선택하게 되었습니다.","breadcrumbs":"mdbook","id":"8","title":"mdbook"},"9":{"body":"mdbook은 cargo를 통해서 손쉽게 설치가 가능합니다. cargo install mdbook","breadcrumbs":"mdbook 설치","id":"9","title":"mdbook 설치"}},"length":15,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"]":{"(":{".":{"/":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"11":{"tf":1.4142135623730951},"13":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.0}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}},"df":3,"docs":{"3":{"tf":3.3166247903554},"4":{"tf":1.0},"5":{"tf":2.0}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"13":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"y":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":4,"docs":{"10":{"tf":1.0},"12":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":6,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0},"4":{"tf":2.23606797749979},"5":{"tf":2.6457513110645907},"6":{"tf":1.0},"8":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"breadcrumbs":{"root":{"1":{"]":{"(":{".":{"/":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"11":{"tf":1.7320508075688772},"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}},"df":3,"docs":{"3":{"tf":3.605551275463989},"4":{"tf":1.0},"5":{"tf":2.0}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"11":{"tf":1.4142135623730951},"13":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"y":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":1,"docs":{"8":{"tf":1.0}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":4,"docs":{"10":{"tf":1.4142135623730951},"12":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772},"9":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}},"s":{"df":1,"docs":{"5":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":6,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"4":{"tf":2.449489742783178},"5":{"tf":2.8284271247461903},"6":{"tf":1.0},"8":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}}},"title":{"root":{"1":{"df":2,"docs":{"11":{"tf":1.0},"13":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.0}}},"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});