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