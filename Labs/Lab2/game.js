 // Máy tính sinh nguyên số ngẫu nhiên (số bí mật) từ 10 đến 15 và lưu vào biến x
 const x = 10 + Math.round(5 * Math.random());

 // Người dùng nhập từ bàn phím một số và lưu vào biến a
 let a = Number(prompt("Số nhập vào"));

 // Máy tính sẽ kiểm tra và đưa ra thông báo
 if (a === x) {
     alert(`Xin chúc mừng, bạn đã đoán đúng đáp án của số bí mật là: ${x}`);
 } else if (a > x) {
     alert("Giá trị của bạn lớn hơn số bí mật");
 } else {
     alert("Giá trị của bạn nhỏ hơn số bí mật");
 }
 alert("Số bí mật: " + x);