// logo animation
var logo_animation = bodymovin.loadAnimation({
  container: document.getElementById("logo"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "assets/LogonSound/logo.json"
});

//LOADER animation and loader remove
$("body").append('<div  id="loadingDiv"><div class="loader"></div></div>');
$(window).on("load", function() {
  setTimeout(showPage, 3000); //wait for page load PLUS two seconds.
});

//show main page
function showPage() {
  // $("loadingDiv").fadeOut();
  // $("myDiv").fadeIn();
  document.getElementById("myDiv").style.display = "block";
  $("#loadingDiv").remove();
  document.getElementById("myAudio").play(); //plays audio when page loads
  logo_animation.play();
}
var animation = bodymovin.loadAnimation({
  container: document.getElementById("loadingDiv"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/data.json"
});

// SOUND MUTE BUTTON AND IT's LOGO ANIMATION.

function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  if (myAudio.muted === true) {
    myAudio.muted = !myAudio.muted;
    logo_animation.play();
  } else if (myAudio.muted === false) {
    logo_animation.pause();
    myAudio.muted = !myAudio.muted;
  }
}

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
