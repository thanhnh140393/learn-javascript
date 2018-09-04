//array filter 
//là hàm lọc , chỉ qua cho những điều kiện đúng hoặc sai , đúng thì được qua còn sai thì không qua
var numbers =[1, 2, 3 ,4];
var evenNumber = numbers.filter(function(x){
  return x % 2 === 0;

});
evenNumber;

