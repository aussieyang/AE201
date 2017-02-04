console.log("WORKING!!!!")

// Declaring DOM objects at the top
var para1 = document.getElementById('p1');
var para2 = document.getElementById('p2');
var batman = para1.nextElementSibling;
var superman = para2.previousElementSibling;

// Click to change to light grey background-color
para1.onclick = function() {
  if (para1.style.backgroundColor != 'gainsboro'){
    para1.style.backgroundColor = 'gainsboro';
  } else {
    para1.style.backgroundColor = 'linen';
  }
}

// Change "Rename Me" to switch between two different strings
para2.onclick = function() {
  if(para2.innerHTML != "Clark Kent"){
    para2.innerHTML = "Clark Kent";
  } else {
    para2.innerHTML = "Superman"
  }
}

// Change the background image on click
var batmanToggle = 1;
batman.onclick = function() {
  if (batmanToggle == 1){
    batman.style.backgroundImage = "url('http://vignette1.wikia.nocookie.net/batman/images/7/7c/Gotham-city-dark-knight.jpg/revision/latest?cb=20090408035729')";
    batmanToggle = 0;
  } else if (batmanToggle == 0) {
    batman.style.backgroundImage = "url('http://vignette1.wikia.nocookie.net/injusticefanon/images/1/17/Batcave_(DoI).jpg/revision/latest?cb=20150318035818')";
    batmanToggle = 1;
  }
}


//
