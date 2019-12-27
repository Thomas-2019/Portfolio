/* loading*/
(function() {
  "use strict";
  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  window.addEventListener("load", function() {
    const loaderWrapper = document.querySelector(".loader");
    fadeOut(loaderWrapper);
  });
})();

/* go-to-top-icon*/
(function() {
  "use strict";
  const topIcon = document.querySelector(".go-to-top-icon");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      topIcon.classList.replace("d-none", "d-block");
    } else {
      topIcon.classList.replace("d-block", "d-none");
    }
  });
})();
