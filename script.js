// Charge page.


document.addEventListener("DOMContentLoaded", function() {
// End Charge

// NAV animation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-70px";
  }

  if (currentScrollPos == 0) {
    document.querySelector("nav").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
}


});
