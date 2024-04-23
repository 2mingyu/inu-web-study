let b = [2, 3, 4];

c = b.reduceRight((acc, val) => Math.pow(val, acc)); // => 2.4178516392292583e+24
console.log(c);
// [2, 3, 4]에서 오른쪽부터 시작 
// (4, 3) 들어감.
// 3^4 = 81
// (81, 2) 들어감.
// 2^81 = 2.4178516392292583e+24

d = b.reduce((acc, val) => {
  console.log(acc, val);
  return Math.pow(val, acc);
});
console.log(d); // => 262144
// [2, 3, 4]에서 왼쪽부터 시작
// (2, 3) 들어감.
// 3^2 = 9
// (9, 4) 들어감. 
// 4^9 = 262144