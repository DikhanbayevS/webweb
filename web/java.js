//LearnMore
function bookFunc (){
  var x = document.getElementById("bookInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function audioFunc (){
  var x = document.getElementById("audioInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function presFunc (){
  var x = document.getElementById("presInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Sound
var numberOfButtons = document.querySelectorAll(".cart").length;
  var audio = new Audio ('sound.mp3 ');
for (var i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".cart")[i].addEventListener("click", function(){
    
    audio.play();

  });
};
