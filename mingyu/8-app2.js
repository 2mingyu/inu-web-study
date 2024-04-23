console.log(square2(15)); // 225
console.log(square(15));  // ReferenceError

function square2(x) { // 함수를 선언하면서 정의하는 것은 호이스팅 됨
  return x * x;
}

const square = function(x) {  // square 라는 변수를 선언하는 것은 호이스팅 되지만, `=` 뒤의 할당은 호이스팅되지 않음
  return x * x;
};