console.info("JS успешно подключен!");

document.getElementsByClassName("headerContent").onclick = function(event) {
  var target = event.target;
  if (target.className == "genreMenu") {
    var s = target.getElementByClassName ("subMenu");
    closeMenu();
    s[0].style.display = "block";
  }
}

document.onclick = function (event) {
  var target = event.target;
  console.log (event.target);
  if (target.className != "genreMenu" && target.className != "subMenu") {
    closeMenu();
  } 
}

function closeMenu() {
  var menu = document.getElementsByClassName ("headerContent");
  var subm = document.getElementsByClassName("subMenu");
  for (var i=0; i<subm.length; i++) {
    subm[i].style.display = "none";
  }
}


/*
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

