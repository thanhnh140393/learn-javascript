/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
  if(c*c===a*a+b*b || a*a===c*c+b*b || b*b===a*a+c*c){
    return "Yes";
  }
  return "No";
}

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(1, 2, 3); // "No"