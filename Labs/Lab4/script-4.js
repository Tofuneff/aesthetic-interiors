// Sử dụng đối tượng Date để lấy thời gian hiện tại 
let time = new Date();
let h = time.getHours();
let m = time.getMinutes(); 
let s = time.getSeconds();
// Xuất dữ liệu ra màn hình trang web
document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
/* Gọi phương thức setTimeout của đối tượng window để gọi hàm
theo số giây mình chỉ định tính từ thời điểm trang web được tải thành công */
// Ở đây cứ 1s load lại trang web 1 lần để thời gian cập nhật liên tục
setTimeout(function() {
    /* Trong function setTimeout sử dụng phương thức reload() 
    cho đối tượng location để load lại trang web hiện tại */
    location.reload();
}, 1000);