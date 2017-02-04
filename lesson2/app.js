console.log("LALALALALALALA")

$("img").click(function(){
  $(this).css({"background-color": "gainsboro", "border-radius" : "50%"})
})

$("img").click(function(){
  // if ($("div").is(":visible")){
  //   $("div").hide();
  // } else {
  //   $("div").show();
  // }
  $("div").toggle();
})

$("img").dblclick(function(){
  if ($("div").is(":visible")){
    $("div").fadeOut("slow");
  } else {
    $("div").fadeIn("slow");
  }
})
