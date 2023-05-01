/**** 
 * slack slider  
 * events slider 
 */
$('.view-slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='static/images/general/arr-l.svg'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='static/images/general/arr-r.svg'></button>",
    responsive: [{
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '20%',
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,

            }
        }
    ]
});
/* story slider */
$('.story-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.about-slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1.1,
});
/*** general settings  */
$(document).ready(function() {
    $("nav .toggle-btn").click(function() {
        $(".nav-collapse").toggleClass("show");
    });
    $(".search-btn").click(function() {
        $(".NM-search-block").addClass("show");
    });
    $(".toggle-search").click(function() {
        $(".NM-search-block").removeClass("show");
    });
    $(".toggle-search").click(function() {
        $(".NM-search-block").removeClass("show");
    });
    /*
     * make slick slider container padding left as other content
     */
    let Screenwidth = $(window).width();
    let padding = Screenwidth - 1140;
    if (Screenwidth > 1140) {
        $(".NM-about-hotel .container-fluid").css("padding-left", padding / 2);
    }
})