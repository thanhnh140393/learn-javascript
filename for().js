/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  var x = 1;
  for(let i = start ; i < end  ; i++){
    x*=i;
    // ví dụ cho start = 2  | 1 *= 2 : x lại bằng 2 , i = start++ = 3 > x(2) *= start(3) = 6 : x lại = 6 >........
  }
  return x;
};
console.log(calculate(2, 5));
