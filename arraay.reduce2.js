//array.reduce
//ví dụ 
//x1 x2 x3 x4 . trong lần chạy đầu nó nhận vào x1 và x2 và trả về 1 giá trị gọi là y1 , lần chạy 2 nó nhận vào y1 và x3 và trả về y2 , lần 3 nhận vào y2 và x4 trả về kết quả .
//giống kiểu vòng lặp
var  oders = [
  {name:'A',quantity:2,unitPrice:100},
  {name:'B',quantity:1,unitPrice:600},
  {name:'C',quantity:4,unitPrice:300}

];
var totalPrice = oders.reduce(function(congdon,oder){
  return congdon + oder.quantity*oder.unitPrice;
} ,0 );// gán giá trị của congdon = 0 . thì sẽ cộng dần với oder , cchú ý dấu phẩy
// oder sẽ tính từng mặt hàng và cộng dồn vào congdon
console.log(totalPrice);