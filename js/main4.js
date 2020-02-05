var responsive = $(window).width();
if (responsive <= 540) {

    $(window).scroll(function(){ 
    var height = $(this).scrollTop();

    if (height > 5 ) {
        $("header").css({
            "position" : "fixed",
            "top" : "0",
            "left" : "0",
            "width" : "100%",
            "background-color" : "#500d16",
            "z-index" : "1005",
        });
        $(".logo").hide();
        $(".menu a").css("color", "#ffffff")
    } else {
        $("header").css({
            "position": "inherit",
            "background-color" : "#fff",
        });
        $(".logo").show();
        $(".logo a, .menu a").css("color", "#000");
    }
  })
}









