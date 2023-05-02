$(".cross").hide();
$(".menu").hide();
$("#nav-icon").click(function () {
    $(".menu").slideToggle("slow");
});

$(".cross").click(function () {
    $(".menu").slideToggle("slow");
});

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});