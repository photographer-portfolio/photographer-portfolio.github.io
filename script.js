$(function () {
    console.log(location.pathname);
    if (location.pathname == "/" || location.pathname.indexOf("index.html") > 0) {
        
        $('.button-scroll-top').hide();
        $('.button-scroll').show();


        $("img").click(function () {
            location.href = "image.html";
        });
        $('.button-scroll a').on('click', function (e) {
            var scrollValue = $(document).scrollTop();
            console.log(scrollValue);
            e.preventDefault();
            $('html, body').animate({ scrollTop: scrollValue + 450 }, 500, 'linear');
        });
        $('.button-scroll-top a').on('click', function (e) {
            var scrollValue = $(document).scrollTop();
            console.log(scrollValue);
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() + 200 >= $(document).height() - $(window).height()) {
                $('.button-scroll-top').show();
                $('.button-scroll').hide();
            }else{
                $('.button-scroll-top').hide();
                $('.button-scroll').show();
            }

        });
    } else if (location.pathname.indexOf("image.html") > 0) {
    }


});
