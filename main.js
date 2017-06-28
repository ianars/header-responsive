'use strict';

var bigMac = document.getElementById("btn-bigMac");
var btnNavShow = document.getElementById("btn-navShow");

bigMac.addEventListener("click", mobile);
function mobile() {
  btnNavShow.classList.toggle("listShow");
  bigMac.classList.toggle("open");
}

var header = document.querySelector(".header");
var navMenu = document.querySelectorAll(".nav-mobile li a");
for (var i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", mobile);
}

window.addEventListener("scroll", changeOpacity);
function changeOpacity(){
  if(document.body.scrollTop > header.offsetHeight){
    header.classList.add("opacity");
  }else{
    header.classList.remove("opacity");
  }
}
