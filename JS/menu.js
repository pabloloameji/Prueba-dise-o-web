window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  AOS.init();
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menu-navegacion").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("menu-navegacion").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}