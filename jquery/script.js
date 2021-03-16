$(function(){
//モーダルウィンドウ
  $('#contact').click(function(){
      $('.contact-modal').fadeIn();
  });
  $('.btn').click(function(){
    $('.contact-modal').fadeIn();
});
  
  $('.close-modal').click(function(){
    $('.contact-modal').fadeOut();
    
  });

 //ハンバーガーの時はスクロールしない
  $('.burger-btn').click(function(){
     $('.burger-btn').toggleClass('close');
     $('#nav').fadeToggle();
    // $('body').toggleClass('noscroll');
  });

//スムーススクロール
$('a[href^="#"]').click(function(){
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html': href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position},800,'swing');
  return false;
});


});
