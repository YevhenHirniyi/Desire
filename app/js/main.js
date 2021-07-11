$(function () {
    $(".header__btn").on("click", function () {
        $(".rightside-menu").removeClass("rightside-menu--close");
    });
    $(".rightside-menu__close").on("click", function () {
        $(".rightside-menu").addClass("rightside-menu--close");
    });

    $(".header__btn-media").on("click", function () {
        $(".menu").toggleClass("menu--open");
    });

    $(".top__slider").slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $(".contact-slider").slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        speed: 1000,
        dots: true,
        arrows: false,
        responsive:[
            {
                breakpoint: 1701,
                settings:{
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1451,
                settings:{
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            }
        ]
    });
    $(".article-slider__box").slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/slider_arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/slider_arrow-right.svg" alt=""></button>'
    });

    var mixer = mixitup(".gallery__inner", {
        load: {
            filter: ".category-living"
        }
    });


})