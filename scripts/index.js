//LOADER
$("body").append('<div  id="loadingDiv"><div class="loader"></div></div>');
$(window).on("load", function() {
  setTimeout(showPage, 3000); //wait for page load PLUS two seconds.
});

function showPage() {
  // $("loadingDiv").fadeOut();
  // $("myDiv").fadeIn();
  document.getElementById("myDiv").style.display = "block";
  $("#loadingDiv").remove();
}
var animation = bodymovin.loadAnimation({
  container: document.getElementById("loadingDiv"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/data.json"
});

//cursor parallax
$(".data-tilt").tilt({
  //enter and edit properties to change 3D effect. -- source tilt.js
});

// NAVBAR ONCLICK BLUE
$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});
