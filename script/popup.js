$("#btn__close-popup").click(function () {
  $(".modal").toggle();
});

$("#btn__open-popup").click(function () {
  $("#modal").css("display", "block");
});

$(document).mouseup(function (e) {
  var container = $(".modal");
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});

// $("#modal")
//   .on("mouseenter", function (event) {
//     $("body").css("overflow", "hidden");
//   })
//   .on("mouseleave", function () {
//     $("body").css("overflow", "auto");
//   });
