$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'feature', 'client', 'contact'],
    menu: '#menu',
    controlArrows: false, // Disables left and right arrow navigation button in horizontal slides.
    slidesNavigation: true, // To enable the slide navigation bar.
    css3:false  // To make the parallax scroll effect supported by the browser.
  });
});
