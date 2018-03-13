

//wanneer de gebruiker op de letter "n" drukt dan scrolt het naar bedenen
window.addEventListener ("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "78") {
    window.scrollTo(0, 700);
  }

}
//nav is niet te zien tot de gebruiker naar beneden scrolt
function Scroll(){
  var header = document.getElementById('header');
  var ypos = window.pageYOffset;
  if (ypos > 400) {
    header.style.opacity = "1";
  }
    else {
      header.style.opacity = "0";
    }

  }

  window.addEventListener("scroll",Scroll);
