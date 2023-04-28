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


/*** general settings  */
$(document).ready(function() {
    $("nav .toggle-btn").click(function() {
        $(".nav-collapse").toggleClass("show");
    })
})