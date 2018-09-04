// array.find 
//chạy qua từng phần tử , đến giá trị true thì dừng lại , giả về 1 phần tử
var numbers = [1,2,3,4];
numbers.find(function(number){
  console.log(number);
  return number %  2===0;
});
// lưu ý : câu lệnh không hề giống bên trên