$('#back').click(function() {
  window.location.href = "inet&tv.html";
});

$('.okeh').click(function() {
  window.location.href = "daftar.html";
});

$("#navigasi").load("./nav.html");
$("#foot").load("./footer.html");

$(document).ready(function() {
  function ceksize(){
    if($(window).width() < 768){
      
      var position = $(window).scrollTop(); 
      
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position) {
            $('.support').css('opacity','0');
        } else {
            $('.support').css('opacity','1');
        }
        position = scroll;
      });
      
    } else if ($(window).width() > 768){
      var position = $(window).scrollTop(); 
      
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position) {
            $('.support').css('opacity','1');
        } else {
            $('.support').css('opacity','1');
        }
        position = scroll;
      });
      $('.support').css('opacity','1');
    }
  }

ceksize();
  
$(window).resize(ceksize);
});

if (screen.width > 1000) {

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('#w-control').removeClass('container-fluid');$('#w-control').addClass('container');
          $('.navbar-fixed-top').css('height','55px');
          $('.logo').css('height','35px');
          $('.logo').css('animation-name','kiri');
          $('.ml-auto').css('animation-name','kanan');
    }

    else {
          $('#w-control').removeClass('container');$('#w-control').addClass('container-fluid');
          $('.navbar-fixed-top').css('height','80px');
          $('.logo').css('height','45px');
          $('.logo').css('animation-name','none');
          $('.ml-auto').css('animation-name','none');
    }
  });
}

$('.dropdown').hover(
   function(){ $('.dropdown-menu').addClass('show') },
   function(){ $('.dropdown-menu').removeClass('show') }
)