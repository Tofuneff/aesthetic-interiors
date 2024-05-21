// let text1 = "Hello";
// let text2 = "World";
// let text3 = "My";
// let text4 = "Name";
// let text5 = "Is";
// let text6 = "Hieu";
// let text = text1.concat(" ", text2, " ", text3, " ", text4, " ", text5, " ", text6);

// document.write(text + "<br>");


// let text7 = "Hello World!";
// let text8 = text7.toUpperCase();

// document.write(text8 + "<br>");

// let text9 = "Hello World!"; // String
// let text10 = text9.toLowerCase(); // text10 is text9 converted to lower

// document.write(text10 + "<br>");

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// console.log(arrOfShapes);
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// arr8 = [ 2, 3, 4, 5, 6, 7, 8 ];
// arr8.splice(1, 3);
// console.log(arr8); 

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// for (let i = 1; i <= 10; i++) {
//     let row = '';
//     for (let j = 1; j <= 10; j++) {
//         row += `${i} * ${j} = ${i*j}\n`;
//     }
//     console.log(row);
// }

// window.alert(window.innerWidth + " " + window.innerHeight);
// window.open("https://www.facebook.com/", 
// "trangchu", "menubar = yes, width = 800, height = 600");
// alert("Tong so chieu cao la: " + screen.height); 
// alert("Chieu cao con lai la: " + screen.availHeight); 
// alert("Bang mau la: " + screen.colorDepth);
// console.dir(navigator);
// document.write("version: " + navigator.version + "<br>"); 
// document.write("cookieEnabled: " + navigator.cookieEnabled);
// function goBack() {
//     history.back();
// }
// function goNext() {
//     history.forward();
// }

// let e_click = () => {
//     alert('Auch! Stop!!');
// }
// document.getElementById("one").onclick = e_click;

const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];
const shift = theList.shift();
const pop = theList.pop();
const result2 = theList.shift();
console.log(shift);
console.log(pop);
console.log(theList);