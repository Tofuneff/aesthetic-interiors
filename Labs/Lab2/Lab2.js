// Bài 1:

let a = Number(prompt('Input a:'));
let b = Number(prompt('Input b:'));
// nhập từ bàn phím 2 giá trị a và b

const c = Math.sqrt(a*a + b*b);
// áp dụng định lý Pythagorean a^2 + b^2 = c^2
alert('Cạnh huyền của phép tính là: ' + c.toFixed(2));

// Bài 2: Đổi đơn vị đất đai

// Tạo biến chứa giá trị mét vuông nhập từ bàn phím
let m2 = Number(prompt('Đổi đơn vị đất đai từ mét vuông sang các đơn vị khác: '));
// Chuyển đổi giá trị đó sang đơn vị sào, ha (hecta), mẫu
const sao = m2 / 360;
const mau = m2 / 3600;
const ha = m2 / 10000;
// Xuất kết quả
alert(m2 + ' m2 đất tương đương với: ' + sao.toFixed() + ' sào = ' + mau.toFixed() + ' mẫu(Nam Bộ) = ' + ha.toFixed() + 'ha');

// Bài 3: Tính chỉ số BMI (kg/m2)

// Nhập trọng lượng cơ thể (kg) và chiều cao (m)
let weight = Number(prompt("Nhập trọng lượng cơ thể (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));

// Tính chỉ số BMI
const BMI = weight / (height * height);

// Phân loại tình trạng cân nặng
let classification;
if (BMI < 18.5) {
    classification = "Thiếu cân";
} else if (BMI >= 18.5 && BMI <= 24.99) {
    classification = "Bình thường";
} else if (BMI >= 25 && BMI <= 29.99) {
    classification = "Thừa cân";
} else {
    classification = "Béo phì";
}

// Hiển thị kết quả
alert("Chỉ số BMI của bạn là: " + BMI.toFixed(2) + " - Tình trạng cân nặng: " + classification);

// Bài 4: 

// Khởi tạo mảng
const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];

// Xoá phần tử đầu tiên và cuối cùng của mảng
theList.shift();
theList.pop();

// Thêm 'FIRST' vào đầu mảng
theList.unshift('FIRST');

// Thêm 'hello world' vào vị trí thứ 4 của mảng
theList.splice(3, 0, 'hello world');

// Thêm 'middle' vào vị trí thứ 3 của mảng
theList.splice(2, 0, 'middle');

// Thêm 'LAST' vào cuối mảng
theList.push('LAST');

// Xuất kết quả
console.log(theList);