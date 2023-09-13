console.info("JS успешно подключен!");

/* переменные, math, константы
var num1;
num1 = 5;
//const num = 5;  - При изменении константы в консоль дропнет ошибку
console.log("Переменная: " + num1);

var num2 = 5.5, string = "I am String", bool = false;
console.log(num1 + num2 + " " + string + " " + bool);

var str_1 = "5.87231408712";
var res = Number(str_1);
console.log(res + 5);

console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(5, 6, res - 2));
console.log(Math.max(5, 6, res - 2));
console.log(Math.sin(360));


иф элс
var num = 15;
if(num !=5) {
console.log("Ok");
} 
else {
console.log("Fuck");
}


Свитч кейс
var stroke = "word";
switch(stroke) {
  case "4":
    console.log("4");
    break;
  case "45":
    console.log("45");
    break;
  case "word":
    console.log("YES");
    break;
  case "lol":
    console.log("lol");
    break;
  default:
    console.log("def");
}


массивы
var arr = [5, 6, 7, "str", 5.5, false, 8, 8, 99];
console.log(arr);
console.log(arr[0]);
arr[0] = 12;
console.log(arr[0]);
console.log(arr.length);


var matrix = [[5, 6, 7], [2, 100, false], arr];
console.log(matrix [2] [3]);
console.log(matrix);


циклы
var arr = [5, 6, 7, "str", 5.5, false, 8, 8, 99];
for (var i == arr.length; i>=0; i--)
{
console.log(arr[i]);
}


var arr = [5, 6, 7, "str", 5.5, false, 8, 8, 99];
i = arr.length;
console.log("arr length = " + i);
while (i>-1) {
console.log(arr[i]);
i--;   
}


var x = 60;
do {
console.log(x);
x -= 20;
} while (x <= 50 && x > 0);


var arr = [5, 6, 7, "str", 5.5, false, 8, 8, 99];
for (var i = arr.length; i>=0; i--)
{
console.log(arr[i]);
}

for (i = 0; i <= 20; i++) {
  if (i % 2 == 0)
    continue;
  console.log(i);
  //Выводит нечетные числа от 1 до 19
}


//КАЛЬКУЛЯТОР СЛОЖЕНИЯ
function sum(a , b) {
  var c = Number(a) + Number(b);
  return c;
}

if (confirm("Хотите сложить два числа?")) {
  var a = prompt ("Введите 1 число ");
  var b = prompt ("Введите 2 число ");
  alert(sum(a , b));
} 
else {
  alert("Отменено!");
}



function sum (arr) {
var res = 0;
for (var i = 0; i < arr.length; i++) {
  res += arr[i];
}
return res;
//переменная внутри функции становится локальной, только если определена 
//через var или let. если обьявить ее просто так, она будет глобальной 
}

if (confirm ("Ввести количесвто элементов массива для сложения?")) {
var leng = Number (prompt ("Введите размер массива!"));
var i = 0;
let array = [];
for (leng; leng > 0; leng--) {
array [i] = Number (prompt("Элемент " + (i + 1)));
i++;
}
alert ("Сумма чисел: " + sum(array));
} else {
  alert ("Отменено!");
}
*/

