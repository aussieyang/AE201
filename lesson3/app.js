console.log("YO IT WORKS")

for (var i=0; i<16; i++) {
  var wilson = document.createElement("img");
  wilson.setAttribute("src","http://vignette3.wikia.nocookie.net/dont-starve-game/images/7/78/Wilson.png/revision/20131129230748");
  wilson.className = "wilson " + i;
  var box = document.createElement("div");
  box.className = "box " + i;
  box.appendChild(wilson);
  document.getElementById("map").appendChild(box);
}

// Create a random number and keep track of guesses
var position = Math.floor(Math.random() * 16)
var guesses = 0;
// When a box is clicked,
// we check whether number matches position
$(".box").click(function(){
  guesses++;
  $("#score").text("Guesses: " + guesses);
  // Checking to see if position matches the class of clicked box
  if ($(this).hasClass(position)) {
    $(this).children().fadeIn()
  }
})

// Create event for "HIDE AGAIN" button
$("button").click(function(){
  $("img").fadeOut();
  position = Math.floor(Math.random() * 16);
  guesses = 0;
  $("#score").text("Guesses: " + guesses);
})

// Haven't set up Github yet




// When "HIDE AGAIN" button clicked, hide Wilson again
