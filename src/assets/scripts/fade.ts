function fadeOut(element){
  element.style.opacity = 1;

  (function fade() {
    if (!((element.style.opacity -= .1) < 0)) {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(element){
  element.style.opacity = 0;

  (function fade() {
    var val = parseFloat(element.style.opacity);
    if (!((val += .1) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
