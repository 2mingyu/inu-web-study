// 예제 1
function constfunc(v) {
  return () => v;
}

let funcs1 = [];
for (var i = 0; i < 10; i++) funcs1[i] = constfunc(i);
// funcs1[0] 에는 'constfunc(0)' 들어감. '() => 0' 들어감
// funcs1[5] 에는 'constfunc(5)' 들어감. '() => 5' 들어감
// funcs1[9] 에는 'constfunc(9)' 들어감. '() => 9' 들어감
console.log(funcs1[0]()); // => 0
console.log(funcs1[5]()); // => 5
console.log(funcs1[9]()); // => 9

// 예제 2
function constfuncs() {
  let funcs2 = [];
  for (var i = 0; i < 10; i++) {
    funcs2[i] = () => i;
    // var i는 반복문이 시작할 때부터 끝날 때 까지 같은 참조로 유지됨
    // funcs2[0] 에는 '() => i' 가 들어가는데, i는 반복문 끝날 때 10 이라서 10으로 나옴
    // funcs2[5] 에는 '() => i' 가 들어가는데, i는 반복문 끝날 때 10 이라서 10으로 나옴
    // funcs2[9] 에는 '() => i' 가 들어가는데, i는 반복문 끝날 때 10 이라서 10으로 나옴
  }
  return funcs2;
}
let funcs2 = constfuncs();
console.log(funcs2[0]());  // => 10
console.log(funcs2[5]());  // => 10
console.log(funcs2[9]());  // => 10

// + 예제 3
function constfuncs3() {
  let funcs3 = [];
  for (let i = 0; i < 10; i++) {
    funcs3[i] = () => i;
    // let i는 각 반복마다 다시 선언됨.
    // funcs3[0] 에는 '() => i' 가 들어가는데, i는 0 (다음 반복의 i는 새로운 i)
    // funcs3[5] 에는 '() => i' 가 들어가는데, i는 5 (다음 반복의 i는 새로운 i)
    // funcs3[9] 에는 '() => i' 가 들어가는데, i는 9 (다음 반복의 i는 새로운 i)
  }
  return funcs3;
}
let funcs3 = constfuncs3();
console.log(funcs3[0]());  // => 0
console.log(funcs3[5]());  // => 5
console.log(funcs3[9]());  // => 9

// + 예제 4
function constfuncs4() {
  let funcs4 = [];
  for (var i = 0; i < 10; i++) {
    funcs4[i] = constfunc(i);
    // var i로 선언해도 constfunc을 통해 넘기는 건 i 참조가 아닌 i 값을 넘기는거라서 () => i 가 들어가는 대신
    // funcs4[0] 에는 '() => 0' 들어감
    // funcs4[5] 에는 '() => 5' 들어감
    // funcs4[9] 에는 '() => 9' 들어감
  }
  return funcs4;
}
let funcs4 = constfuncs4();
console.log(funcs4[0]());  // => 0
console.log(funcs4[5]());  // => 5
console.log(funcs4[9]());  // => 9


/*
ChatGPT
예제 1: constfunc 함수는 입력된 값 v를 사용하여 새로운 함수를 반환합니다. 반환된 각 함수는 자신이 생성될 때의 v 값을 "캡처"하고, 그 값을 반환하는 클로저입니다. 따라서, 각 함수는 각각 다른 v 값을 가지고 있습니다.
예제 2: var 키워드로 선언된 i는 함수 전체에서 하나의 변수로 취급됩니다. 따라서 모든 함수는 같은 i의 최종 값을 참조합니다. 반복문이 완료된 후 i의 값은 10이므로, 모든 함수는 10을 반환합니다.
예제 3: let 키워드로 선언된 i는 각 반복마다 새로운 바인딩을 가집니다. 각 함수는 해당 반복에서의 i의 값을 "캡처"하므로, 각각 다른 값을 반환합니다.
예제 4: 여기서는 var 키워드로 i를 선언했지만, constfunc(i)를 호출함으로써 각 함수가 생성될 때의 i의 값을 캡처합니다. 따라서 각 함수는 해당 순간의 i 값을 반환하므로, 예상대로 각기 다른 값이 출력됩니다.
*/