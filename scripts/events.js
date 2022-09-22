// double click event for displaying error message
$("#btn-error").dblclick(function() {
  $("#modal-error").css("transform", "translateX(0)");
});
$("#btn-dismiss").click(function() {
  $("#modal-error").css("transform", "translateX(150%)");
});

// mouseenter event for images
$("#section-2 div img").mouseenter(function() {
  $(this).css("width", "150px");
});
$("#section-2 div img").click(function() {
  $(this).css("width", "100px");
});

// hover event for menu items
$("#section-3 nav ul li").hover(function() {
  const menuID = $(this).prop("id");
  const body = $("body");

  if (menuID === "menu-orange") {
    body.css("background-color", "rgb(53, 0, 88)");
  } else {
    body.css("background-color", "rgb(0, 104, 107)");
  }
});
$("#section-3 nav ul li").mouseleave(function() {
  $("body").css("background-color", "rgb(17, 18, 37)");
});

// submit event for form
$("form").submit(function(e) {
  e.preventDefault();
  const name = $("#txt-name");
  if (name.val() === "") {
    alert("Please provide your name in the text input field.");
  } else {
    alert(
      `You have successfully submitted the form.\n \nFull Name: ${name.val()}`
    );
    name.val("");
  }
});

// keydown and click event for showing elements
$("#label-dev").click(function() {
  const info = $(".info-dev");

  if (info.css("opacity") === "0") {
    info.css("opacity", "1");
  } else {
    info.css("opacity", "0");
  }
});

$(document).keypress(function(e) {
  const code = e.which;
  if (code === 13 && leftMargin === -400) {
    $("#label-dev").click();
  }
});
