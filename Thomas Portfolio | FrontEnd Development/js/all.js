/* Swiper*/

(function() {
  "use strict";
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();

/* fade out*/
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

(function() {
  AOS.init();
})();

/*nav-click*/
(function() {
  "use strict";

  const main = document.getElementsByClassName("main")[0];

  const checkbox = document.getElementsByName("checkbox")[0];

  main.addEventListener("click", function(event) {
    // console.log(event.target.tagName)
    if (checkbox.checked && event.target.matches(".nav-wraper")) {
      checkbox.checked = false;
    } else if (event.target.tagName === "A") {
      checkbox.checked = false;
    }
  });
})();

(function() {
  "use strict";

  let preScroll = window.pageYOffset;
  window.addEventListener("scroll", function() {
    let curscorll = window.pageYOffset;
    if (preScroll > curscorll) {
      document.getElementById("aside").style.top = "0";
    } else {
      document.getElementById("aside").style.top = "-100px";
    }
    preScroll = curscorll;
  });
})();

// // Scroll to specific values
// (function() {
//   function behavior(el){
//     'use strict';
//       window.scroll({
//         top: 2500,
//         left: 0,
//         behavior: "smooth"
//       });
//       window.scrollBy({
//         top: 100,
//         left: 0,
//         behavior: "smooth"
//       });

//       document.getElementById(el).scrollIntoView({ behavior: "smooth" });
// }
// behavior(about);

// })();
