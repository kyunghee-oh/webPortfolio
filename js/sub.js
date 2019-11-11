$(document).ready(function(){
  // Other Pages
  $(function(){
    $(".list-btn-box li a ").click(function(){
      $(".slide-tab img").before('<img src="'+ $(this).attr("href") +'" alt=""/>');
      $(".slide-tab img:last").fadeOut(500, function(){
        $(".slide-tab img:not(:first)").remove();
      });
      return false;
    });
  });

});
