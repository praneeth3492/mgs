document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Set to false to enable pause/play on interaction
    },
    speed: 2000,
    effect: "slides",
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span style="color: white; font-size: 20px; font-weight: regular;" class="' +
          currentClass +
          '"></span>' +
          " of " +
          '<span style="color: white; font-size: 20px; font-weight: regular;" class="' +
          totalClass +
          '"></span>'
        );
      },
    },
  });
});
