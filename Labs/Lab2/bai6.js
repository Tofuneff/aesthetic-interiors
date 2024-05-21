let a = Number(prompt('Nhập vào a:'));
let b = Number(prompt('Nhập vào b:'));
let c = Number(prompt('Nhập vào c:'));
// Sử dụng prompt() để nhập các hệ số a, b và c

const delta = Math.pow(b, 2) - 4 * a * c;
// Tính Math.pow(b, 2) – 4 * a * c và lưu vào biến delta
const x = -b/(2*a);
// Nghiệm kép
const x1 = (-b + Math.sqrt(delta))/(2*a);
const x2 = (-b - Math.sqrt(delta))/(2*a);
// 2 nghiệm phân biệt

if(delta < 0) {
    alert('Phương trình vô nghiệm');
} else if(delta == 0) {
    alert('Phương trình có nghiệm kép x1 = x2 = ' + x);
} else {
    alert('Phương trình có hai nghiệm phân biệt: \nx1 = ' + x1.toFixed(2) + ', x2 = ' + x2.toFixed(2));
}