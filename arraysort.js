//array.sort 
// dùng để sắp xếp các phần tử trong mảng theo 1 thứ tự nào đấy 
//array.sort(fuction(a,b){})
//- nếu trả về 1 giá trị nhỏ hơn 0 thì a xếp trước b( returns a value <0 a will come before b) ( return a sorted array : trả về 1 cái mảng đc xắp xếp)
//- nếu giá trị trả về lớn hơn 0 thì a xếp sau b ( returns a value >0 a will come after b )
//nếu trả về 0 thì a và b không hoán đổi , giữ nguyên vị trí (returns 0 , a and b will stay unchanged)
var numbers = [1,3,4,5,2,8,9];
// ascending order : thứ tự tăng dần
var ascendingNumbers = numbers.sort(function(a,b){
return a - b ;
// b-a thì ngược lại 
});
ascendingNumbers;

var employ = [
  {name : 'tèo' , age :20},
  {name : 'Hương' , age :19},
  {name : 'Thanhdzz' , age :18},
  {name : 'Chó' , age :66},
  {name : 'Mèo' , age :100},
  {name : 'chuột' , age :93},
  {name : 'việt' , age :1},
  {name : 'maria' , age :15}
];
var ascendingEmploy = employ.sort(function(a,b){
return a.age - b.age;
});
ascendingEmploy;