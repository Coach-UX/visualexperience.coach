
// console.clear();

// var width = window.innerWidth;
//     height = window.innerHeight;

/*
___  ____ ____ ____    ___ ____ ____ _  _ ____ _ ___ _ ____ _  _
|__] |__| | __ |___     |  |__/ |__| |\ | [__  |  |  | |  | |\ |
|    |  | |__] |___     |  |  \ |  | | \| ___] |  |  | |__| | \|
*/
// need to make this dynamic
function loadUrl() {
  window.location.href = '/coach/UX-case-study/lifecoach.html';
}

// Page transition for next project button
var nextProjectAnim = gsap.timeline();
function nextProjectBtn() {
  nextProjectAnim.to("#nextProject", .5, {height: "90.3vh", padding: "7vh 0 3vh", ease:Power2.easeInOut, onComplete: loadUrl})
                       .to("#nextProject", .5, {height: "30px", padding: "50px 0", ease:Power2.easeInOut});
  nextProjectAnim.play();
}
document.getElementById("nextProjectBtn").addEventListener("click", nextProjectBtn );

// Page transition for selecting project from menu
var menuBtnAnim = gsap.timeline();
function menuBtn() {
  menuBtnAnim.to("#menu", .1, {width: "100%", backgroundColor: "var(--nextProjectColor)", ease: Power2.easeIn})
                   .to("input", 0, {'checked': false})
                   .to(".menuItems", .5, {autoAlpha: 0, ease: Power2.easeInOut, onComplete: loadUrl})
                   .to("#menu", .5, {width: "60%", backgroundColor: "white", ease: Power2.easeInOut, delay: 1})
                   .to(".menuItems", .5, {autoAlpha: 1, ease: Power2.easeInOut});
  menuBtnAnim.play();
}
document.getElementById("menuBtn").addEventListener("click", menuBtn );




// Reset animations when pressing browser "back" button
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted ||
                         ( typeof window.performance != "undefined" &&
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();  // Handle page restore.
  }
});

















