$(".data-tilt").tilt({
  scale: 0.8
});
$(function() {
  $('[data-toggle="modal"]').hover(function() {
    var modalId = $(this).data("target");
    $(modalId).modal("show");
  });
});
