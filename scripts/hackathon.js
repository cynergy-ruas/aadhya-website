//other functionalities
$(".data-tilt").tilt({
  scale: 1.2
});
$(function() {
  $('[data-toggle="modal"]').hover(function() {
    var modalId = $(this).data("target");
    $(modalId).modal("show");
  });
});
