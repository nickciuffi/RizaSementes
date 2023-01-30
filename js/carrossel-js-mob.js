var slideIndexmob = 1;
showSlidesmob(slideIndexmob);

// Next/previous controls
function plusSlidesmob(nmob) {
  showSlidesmob(slideIndexmob += nmob);
}

// Thumbnail image controls
function currentSlidemob(nmob) {
  showSlidesmob(slideIndexmob = nmob);
}

function showSlidesmob(nmob) {
  var imob;
  var slidesmob = document.getElementsByClassName("mySlides-mob");
  var dotsmob = document.getElementsByClassName("pontos-mob");
  if (nmob > slidesmob.length) {slideIndexmob = 1}
  if (nmob < 1) {slideIndexmob = slidesmob.length}
  for (imob = 0; imob < slidesmob.length; imob++) {
      slidesmob[imob].style.display = "none";
  }
  for (imob = 0; imob < dotsmob.length; imob++) {
      dotsmob[imob].className = dotsmob[imob].className.replace(" activemob", "");
  }
  slidesmob[slideIndexmob-1].style.display = "block";
  dotsmob[slideIndexmob-1].className += " activemob";
}