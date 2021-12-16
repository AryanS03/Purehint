$(function () {
    $("#panel").on('click', function (e) {
        $("#flip").stop(true, true).slideToggle();
        if($("#span").html() == 'Show') {
            $("#span").html('Hide');
        } else {
            $("#span").html('Show');
        }
    });
});

$(document).ready(function(){
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        arrows: false
      });
});