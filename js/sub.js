$(document).ready(function(){
  // Other Pages
  $(function(){
    //클릭하기 전 그림
    //클릭했을때 바뀔 그림 두개 겹치기(깜박거리는 이유는 두개 안겹쳐놔서)
    $(".list-btn-box li a ").click(function(){
      $(".slide-tab img").before('<img src="'+ $(this).attr("href") +'" alt=""/>');
      $(".slide-tab img:last").fadeOut(500, function(){
        $(".slide-tab img:not(:first)").remove();
      });
      return false;
    });
  });

});
