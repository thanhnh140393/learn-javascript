 // dùng giống if else nhưng hiệu quả hơn khi các nhánh phụ thược vào 1 biến đơm	
 var memberCard= {
 	lever :'silver'
 };
 function getTotal(price,card){
 	var discountRate;
 	switch(card.lever){
 		case 'bronze':
 		discountRate = 0.02;
 		break;
 		case 'silver':
 		discountRate = 0.05;
 		break;
 		case 'gold':
 		discountRate = 0.8;
 		break;
 		default: // là nhánh cuối cùng . cho là diamon
 		discountRate = 0.1;
 		break;
 	}
 	return price *( 1- discountRate); // 5% = 0.05 . vậy nếu tính số tiền còn lại thì phải dùng 1 - đi số phần trăm khuyến mại nhân với giá thì ra kết quả

 }
 var  total = getTotal(5000000,memberCard);
 console.log(total);

 var giaothong = 'red';
 function vietnam(dengiaothong){
 	switch(dengiaothong){
 		case 'green':
 		console.log('đi');
 		break;
 		case 'orange':
 		console.log('slow');
 		break;
 		default:
 		console.log('dừng');
 		break;
 	}
 }
 vietnam(giaothong); // từ function vietnam lấy giá trị của giao thông để so sánh