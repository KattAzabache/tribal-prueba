// deslis lento//

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
  $('html,body').animate({
     scrollTop: target.offset().top - 0 
    } , 1000);
      return false;
    }
  }
 });
});
/*scroll*/

$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    $("#nav").text(prueba);
    if (prueba > 600) {
      $(".principal").addClass("navegacion");
    }
      else if (prueba < 600) {
      $(".principal").removeClass("navegacion");
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    $("#nav").text(prueba);
    if (prueba > 100) {
      $(".principal").addClass("responsive");
    }
      else if (prueba < 100) {
      $(".principal").removeClass("responsive");
    }
  });
});
