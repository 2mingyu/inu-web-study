let point = {
  x: 3,
  y: 4,
  valueOf: function () {
    return Math.hypot(this.x, this.y);  // hypot은 루트(x제곱 + y제곱) (피타고라스 정리 ㅇㅇ..)
  },
};
console.log(Number(point)); // => 5 --> valueOf() is used for conversions to numbers;
// 비교 할 때 객체가 들어가면 자동으로 valueOf 적용됨
console.log(point > 4); // => true
console.log("😁", point == 5); // => false  // 이거 true 인데 강의자료 잘못된 것 같아요
console.log(point < 6); // => true