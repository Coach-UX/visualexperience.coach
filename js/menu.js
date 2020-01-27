
(function($) {
  // open/close menu with hamburger button
  $(".menuBtn").click(function(){
      $("#menu").animate({ width: "toggle" });
      $(".menuOverlay").fadeToggle(500);
      $(".menuItems").children().fadeToggle(500);
      $("#menu").css('transition', 'width 0s ease');
  });
  // close menu by clicking outside of menu
  $(".menuOverlay").click(function(){
      $("#menu").animate({ width: "toggle" });
      $(".menuOverlay").fadeToggle(500);
      $(".menuItems").children().fadeToggle(500);
      $("#menu").css('transition', 'width 0s ease');
      $('input[name=menuBtn]').attr('checked', false);
  });
  // when menu item is hovered, open child menu
  $(".menuYear").hover(function() {
    $(this).children(".menuProject").slideDown(0);
    $("#menu").css('transition', 'width .3s ease');
    $("#menu").css('width', '60%');
  }, function() {
    $(this).children(".menuProject").slideUp(0);
    $("#menu").css('width', '17%');
  });
}(jQuery));
