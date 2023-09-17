console.info("JS успешно подключен!");

function checkEvent () {
  var target = document.querySelector(".headerContent");
  var s = target.querySelector (".subMenu");
  s.style.display = "block";
}

const genreMenu = document.querySelector(".genreMenu");
genreMenu.addEventListener('click', checkEvent);



document.onclick = function (event) {
  var target = event.target;
  if (target.className != "genreMenu" && target.className != "subMenu") {
    closeMenu();
  } 
}

function closeMenu() {
  var subm = document.getElementsByClassName("subMenu");
  for (var i=0; i<subm.length; i++) {
    subm[i].style.display = "none";
  }
}




