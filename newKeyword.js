//new keyword
// var toDay = new Date();
// console.log(toDay);
//Create a new object
// var mouse = {
//   weight: 0.2,
//   getWeight: function(){
//     return this.weight;
//   }
// };

//contructor function xây dựng 1 hàm nào đấy 
// function Mouse(){
//   this.type = 'mouse';
//   this.Color = 'white';
// }
//  var mouse1 = new Mouse();
// //  tạo ra 1 mouse1 có thuộc tính type = mouse
// var mouse2 = {type: 'mouse'};
// console.log(mouse1);
// console.log(mouse2);
// mouse2 không có thuộc tính giống mouse
var cat ={
  name:'Tom',
  stomach:[],
  eat :  function(mouse){
    this.stomach.push(mouse);
    return this;
  }
};
//   //khởi tạo con mèo tom 
function Mouse(color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
}
// Khởi tạo 1 con chuột
var m1 = new Mouse('White', 1.0);
var m2 = new Mouse('Black', 1.2);
//t tạo thêm 2 con chuột mới cùng type 
console.log(m1);
console.log(m2);
 cat.eat(m1).eat(m2); // mèo ăn chuột


console.log(cat);