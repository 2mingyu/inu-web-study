// 객체의 속성 이름(키)
// 따옴표 없음: 식별자 (=변수명) (영문자, `_`, `$` 로 시작하고, 영문자, 숫자, `_`, `$` 포함 가능)
// 따옴표 있음: 제한 없음 (공백, 하이픈(`-`), 숫자로 시작하는 이름 등 사용 가능)

// 객체의 속성에 접근하는 방법
// 점(`.`) 표기법: 속성 이름이 유효한 JavaScript 식별자인 경우에 사용 가능
// 대괄호(`[]`) 표기법: 속성 이름을 문자열로 지정하므로, 어떤 문자열도 키로 사용할 수 있음. 대괄호 안을 따옴표(' 또는 ")로 감싸야 함.

let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences",
  "asdf": "a",
  // main title: "JavaScript", // 불가능 : main title 이라는 변수명 안되니까 (공백)
  // sub-title: "The Definitive Guide", // 불가능 : sub-title 이라는 변수명 안되니까 (-)
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

console.log(book);

console.log(book["main title"]);
// console.log(book[main title]) // 불가능 : [ ] 안에는 따옴표로 감싸기
// console.log(book.main title); // 불가능 : main title 이라는 변수명 안되니까 (공백)

console.log(book["sub-title"]);
// console.log(book.sub-title); // 불가능 : sub-title 이라는 변수명 안되니까 (-)

console.log(book["for"]);
// console.log(book[for]) // 불가능 : [ ] 안에는 따옴표로 감싸기
console.log(book.for);

console.log(book["author"]);
console.log(book.author);

console.log(book["author"]["firstname"]);
console.log(book.author["firstname"]);
console.log(book["author"].firstname);
console.log(book.author.firstname);

console.log(book.asdf); // 이건 가능 : asdf 라는 변수명 되니까
console.log(book["asdf"]);

book.edition = 7;
console.log(book["edition"]);
console.log(book.edition);

book["edition2"] = 8;
console.log(book["edition2"]);
console.log(book.edition2);

book["edition 3"] = 9;
console.log(book["edition 3"]);
// console.log(book.edition 3); // 불가능 : edition 3 이라는 변수명 안되니까 (공백)