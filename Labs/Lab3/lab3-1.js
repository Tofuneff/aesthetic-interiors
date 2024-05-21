// Bài 1:
// 1. Nhập từ bàn phím 2 toán hạng và một toán tử lưu vào các biến a, b và o
let a = Number(prompt("Toán hạng a:"));
let b = Number(prompt("Toán hạng b:"));
let o = prompt("Toán tử (+, -, *, /):");
// 2.Phân tích toán tử (+, -, x, :) để thực hiện các phép tính số học phù hợp và xuất kết quả
switch(o) {
    case `+`:
        var kq = a + b;
        alert("Tổng: " + kq);
        break;

    case '-':
        var kq = a - b;
        alert("Tổng: " + kq);
        break;

    case '*':
        var kq = a * b;
        alert("Tổng: " + kq);
        break;

    case '/':
        var kq = a / b;
        alert("Tổng: " + kq);
        break;

    default:
        alert(o + " không phải toán tử");
        break;
}

// Bài 2:
// Tạo bảng cửu chương bằng cách sử dụng vòng lặp
for (let i = 1; i <= 10; i++) {
    let row = '';
    let title = `Bảng cửu chương ${i}`;
    for (let j = 1; j <= 10; j++) {
        row += `${i} * ${j} = ${i*j}\n`;
    }
    console.log(title);
    console.log(row);
}