$(".menu").hide();
$("#nav-icon").click(function () {

    if ($(this).hasClass("open")) {
        $(".menu").slideUp(200, function() {
            $(".custom-nav-header").css('border-bottom-left-radius', '13.44px');
            $(".custom-nav-header").css('border-bottom-right-radius', '13.44px');
        });
        $(this).removeClass("open");
    } else {
        $(".custom-nav-header").css('border-bottom-left-radius', '0');
        $(".custom-nav-header").css('border-bottom-right-radius', '0');
        $(".menu").slideDown(200);
        $(this).addClass("open")
        
    }
});