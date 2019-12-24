/* fade out*/
// (function() {
//   "use strict";
//   function fadeOut(el) {
//     el.style.opacity = 1;
//     (function fade() {
//       if ((el.style.opacity -= 0.1) < 0) {
//         el.style.display = "none";
//       } else {
//         requestAnimationFrame(fade);
//       }
//     })();
//   }

//   window.addEventListener("load", function() {
//     const loaderWrapper = document.querySelector(".loader");
//     fadeOut(loaderWrapper);
//   });
// })();

/*nav-scroll*/
(function() {
  "use strict";

  let preScroll = window.pageYOffset;
  window.addEventListener("scroll", function() {
    let curscorll = window.pageYOffset;
    if (preScroll > curscorll) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
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
