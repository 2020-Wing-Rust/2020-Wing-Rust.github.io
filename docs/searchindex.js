Object.assign(window.search, {"doc_urls":["cover.html#2020-wing-rust-study","ch0/mdbook.html#책-만들기","ch0/mdbook.html#mdbook","ch0/mdbook.html#mdbook-설치","ch0/mdbook.html#mdbook으로-책-만들기","ch0/mdbook.html#1목차-구성","ch0/mdbook.html#2-책-만들기-및-업데이트","ch1/chapter_1.html#chapter-1","ch1/install_rust.html#러스트-설치하기"],"index":{"documentStore":{"docInfo":{"0":{"body":3,"breadcrumbs":4,"title":4},"1":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":7,"breadcrumbs":1,"title":1},"3":{"body":5,"breadcrumbs":1,"title":1},"4":{"body":0,"breadcrumbs":1,"title":1},"5":{"body":10,"breadcrumbs":1,"title":1},"6":{"body":6,"breadcrumbs":1,"title":1},"7":{"body":0,"breadcrumbs":2,"title":2},"8":{"body":0,"breadcrumbs":2,"title":0}},"docs":{"0":{"body":"happy-rust-crab","breadcrumbs":"2020 Wing Rust Study","id":"0","title":"2020 Wing Rust Study"},"1":{"body":"","breadcrumbs":"책 만들기","id":"1","title":"책 만들기"},"2":{"body":"이 프로젝트는 마크다운 형식으로 파일을 공유하고, Marp 같은 툴을 빌려서 현장에서 보여주기도 할 예정입니다. 그렇지만 Github Pages를 통한 배포를 하기 위해 정적인 사이트 형태로도 렌더링할 예정입니다. 저희가 이 렌더링 과정에서 사용할 툴이 mdbook 입니다. 마크다운 파일을 기반으로 책과 비슷한 형태로 제작해줍니다. Gitbook과 같은 책의 형태로 만들어 주는 다른 플랫폼도 있고, Jekyll 같은 다른 정적 사이트 생성기를 통해서 만들 수도 있지만 Rust로 짜여있기 때문에 이 도구를 선택하게 되었습니다.","breadcrumbs":"mdbook","id":"2","title":"mdbook"},"3":{"body":"mdbook은 cargo를 통해서 손쉽게 설치가 가능합니다. cargo install mdbook","breadcrumbs":"mdbook 설치","id":"3","title":"mdbook 설치"},"4":{"body":"","breadcrumbs":"mdbook으로 책 만들기","id":"4","title":"mdbook으로 책 만들기"},"5":{"body":"src/에 마크다운으로 본인이 담당한 파일을 만들면, 이를 목차 정보를 담당하는 SUMMARY.md에도 명시를 해줘야 합니다. 탭으로 하위 챕터를 구별합니다. 예를 들어, Chapter 1의 하위로 러스트 설치하기라는 제목으로 install_rust.md가 담고 있는 정보를 넣고 싶다면 아래와 같이 SUMMARY.md를 구성하면 됩니다. # Summary <!-- 목차를 작성하는 페이지입니다. 목차 작성도 꼭 확인해주세요. --> - [Chapter 1](./chapter_1.md) - [러스트 설치하기](./install_rust.md)","breadcrumbs":"1.목차 구성","id":"5","title":"1.목차 구성"},"6":{"body":"단순히 책을 만들고 싶은 거면, 아래와 같이 입력 후 Push를 해주세요. mdbook build 웹브라우저에서 바로 확인하고 싶다면 아래와 같이 입력하면, 빌드와 동시에 웹브라우저를 열어줍니다. mdbook build --open","breadcrumbs":"2. 책 만들기 및 업데이트","id":"6","title":"2. 책 만들기 및 업데이트"},"7":{"body":"","breadcrumbs":"Chapter 1","id":"7","title":"Chapter 1"},"8":{"body":"","breadcrumbs":"Chapter 1 » 러스트 설치하기","id":"8","title":"러스트 설치하기"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"]":{"(":{".":{"/":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"y":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"1":{"]":{"(":{".":{"/":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"1":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"5":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"y":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":2.0},"4":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}},"y":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"title":{"root":{"1":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}},"2":{"0":{"2":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});