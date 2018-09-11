/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 *//**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
// for...of : lặp qua các phần tử trong 1 mảng 
// for... in : chỉ lặp qua key trong object 
var lists = [
  {name: 'thanh' , age : 18},
  {name: 'chó' , age : 1},
  {name: 'mèo' , age : 2}
];
for(var list of lists )// list sẽ lặp qua từng phần tử trong lists 
{
  console.log(list.name,list.age);// bỏ list.age thì sẽ chỉ ra name 
}

// ===============================================
 console.log('===============================================');
var thanh = {
  name : 'Thanh',
  handsome : true,
  age : 18
}
for(var info in thanh){
  console.log(info);// sẽ chỉ in ra name , handsome và age . đó là key trong thanh object 
  console.log(info , thanh[info]);

}//info là key , có thể đặt tên là key cho dễ nhận biết 
