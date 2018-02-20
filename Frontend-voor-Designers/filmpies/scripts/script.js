var content = document.getElementById("content");
var button = document.getElementById("meerInfo");
var toevoegen = document.getElementById("toevoegen");
var blackPanther = document.getElementById("blackPanther")
var meerInfoBlack = document.getElementById("meerInfoBlack")

button.onclick = function () {

  if (content.className == "open") {
    content.className = "";
    button.innerHTML = "Meer Info";

  } else{
      content.className = "open";
      button.innerHTML = "Minder Info";
  }
};

toevoegen.onclick = function () {

  if (blackPanther.className == "open") {

  } else {
    blackPanther.className = "open";
    meerInfoBlack.className ="open";
  }




}
