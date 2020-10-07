$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 4,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots:false,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        1024:{
            items:1,
            nav:true,
            loop:false
        }
    }
    })
})
