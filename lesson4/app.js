console.log("YANG IS SO AWESOME")

$("#macBar img").hover(
  function(){
    $(this).animate({top: "-20"});
    $(this).animate({top: "0"});
    $("#macScreen").fadeIn("slow");
  }
)

$("#macScreen").click(
  function(){
    $(this).fadeOut("slow");
  }
)

$("#btn").click(
  function(){
    $("#five").animate({left: "0px"})
    $("#four").animate({left: "100px"})
    $("#two").animate({left: "300px"})
    $("#one").animate({left: "400px"})
  }
)
