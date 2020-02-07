// aadhya logo animation template
var logo_animation = bodymovin.loadAnimation({
  container: document.getElementById("logo"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "assets/LogonSound/logo.json"
});

// sound button animation template
var speaker_anim = bodymovin.loadAnimation({
  container: document.getElementById("audio-btn"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/speaker.json"
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
  //remove loader
  $("#loadingDiv").remove();
}

//loader animation template.
var animation = bodymovin.loadAnimation({
  container: document.getElementById("loadingDiv"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/data.json"
});

// SOUND MUTE BUTTON AND IT's complementing LOGO ANIMATION.
function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  //check if audio is muted or not
  if (myAudio.muted === true) {
    //play speaker button animation
    speaker_anim.play();
    //unmute audio
    myAudio.muted = !myAudio.muted;
    //play aadhya beating animation
    logo_animation.play();
  } else if (myAudio.muted === false) {
    //reset speaker animation
    speaker_anim.goToAndStop(0);
    //pause addhya animation
    logo_animation.pause();
    //unmute audio
    myAudio.muted = !myAudio.muted;
  }
}
//sound button animation

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
