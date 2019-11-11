$(document).ready(function(){

    //맨뒤 한칸 앞으로 빼두기
  $(".slide-wrapper .slide-wrapper-item li:last").prependTo(".slide-wrapper .slide-wrapper-item");
  $(".slide-wrapper .slide-wrapper-item").css({"marginLeft":"-100%"});
    //다음버튼 클릭시
  $(".ctrol-btn .next").click(function(){
    $(".slide-wrapper .slide-wrapper-item").animate({"marginLeft":"-=100%"} , "fast", function(){
      $(".slide-wrapper .slide-wrapper-item li:first").appendTo(".slide-wrapper .slide-wrapper-item");
      $(".slide-wrapper .slide-wrapper-item").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
    });

  });
    //이전버튼클릭시
  $(".ctrol-btn .prev").click(function(){
    $(".slide-wrapper .slide-wrapper-item").animate({"marginLeft":"+=100%"} , "fast", function(){
      $(".slide-wrapper .slide-wrapper-item li:last").prependTo(".slide-wrapper .slide-wrapper-item");
      $(".slide-wrapper .slide-wrapper-item").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
    });

  });


// My skills
  // $(function(){
  //
  //   var $content2about = $('.content2-about');
  //   var $offset = 1400;
  //   var $content2aboutOST = $content2_about.offset().top - $offset;
  //
  //   $(window).scroll(function(){
  //     if($(this).scrollTop() > $content2aboutOST) {
  //       $content2about.find('.chart-wrap').addClass('animate');
  //     }
  //
  //   });
  //
  // });
  $(function(){
    $(window).scroll(function(){
      $('.root-box').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_object/2){
          $(this).animate({'opacity':'1'},5000);
        }
      });
    });
  });


  // 모바일 내비게이션
  var mb_navH = $("#wrapper").height();

	$("#nav-mbtn").click(function(){
		$(".m-gnb").fadeIn();
		return false;
	});
	$(".close-btn").click(function(){
		$(".m-gnb").fadeOut();
		return false;
	});

});
