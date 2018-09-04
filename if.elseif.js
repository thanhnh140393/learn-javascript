//example 1 : tính vé lên xe bus , calculate bus ticket fee
//if age <15 , discount 20% 
// if age >60 discount 10%
function getTicketFee(person){
 	var basePrice = 10000;//giá gốc 
 	if (person.age <15 ) {
 		return basePrice*0.8;
 	}
 	else if (person.age>60) {
 		return basePrice*0.9;
 	}else
 	{return basePrice ;}
}
//B1 : khai báo ojbect

var person = {
 age : 16 
};
var fee = getTicketFee(person);
console.log(fee);