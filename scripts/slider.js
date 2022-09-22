// click events for navigating the content slider
const container = $("#container");
const btnPrev = $("#btn-prev");
const btnNext = $("#btn-next");
let leftMargin = 0;

btnPrev.click(function() {
  if (leftMargin >= 0) return;
  leftMargin += 100;
  newMargin = leftMargin + "%";
  container.css("margin-left", newMargin);
  toggleDisableBtn();
});

btnNext.click(function() {
  if (leftMargin <= -400) return;
  leftMargin -= 100;
  newMargin = leftMargin + "%";
  container.css("margin-left", newMargin);
  toggleDisableBtn();
});

function toggleDisableBtn() {
  btnPrev.prop("disabled", false).css("color", "#fff");
  btnNext.prop("disabled", false).css("color", "#fff");
  if (leftMargin >= 0) {
    btnPrev.prop("disabled", true).css("color", "#aaa");
  }
  if (leftMargin <= -400) {
    btnNext.prop("disabled", true).css("color", "#aaa");
  }
}
toggleDisableBtn();

// switch slides using arrow keys
$(document).keydown(function(e) {
  switch (e.which) {
    case 37: // left
      btnPrev.click();
      break;

    case 39: // right
      btnNext.click();
      break;

    default:
      return; // exit this handler for other keys
  }
});
