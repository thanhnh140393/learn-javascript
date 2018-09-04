// math object : các hàm toán 
// math.PI : hàm pi 3,14
//math.ceil : làm tròn số về giá trị lớn hơn , vd 9,2 =>10
//math.floor : làm tròn số về giá trị nhỏ hơn ngược lại bên trên
//math.round : 
//math.max , math.min [x,y,z,] : nhận vào 1 tham số và trả về giá trị lớn nhật hoặc nhỏ nhất .
// math.random : trả về giá trị ngẫu nhiên nằm khoảng từ 0-1 .
function rollAdie(){
var random = Math.floor(Math.random()*6+1) ;
return random;

};
rollAdie();