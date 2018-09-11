/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  var a = 1 ;
 for(var x of arr ) {
   a *= x;
 }
 return a;
};

console.log(multiply([2, 3, 4])); // expect: 24