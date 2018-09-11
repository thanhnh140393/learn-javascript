/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
function show(object){
  for(var key in object){
    if(typeof object[key] === 'object') // kiểm tra , nếu 'apart' có kiểu dữ liệu là apart[key ]
    {
      show(object[key]); // thì sẽ in ra function show 
    }
    console.log(key)

  }
}
show(apartment);

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */
