jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
    });
    var typed = new Typed('.typed', {
    strings: [" ","<strong>hi, I'm</strong><strong class='secondary'> Ayush..</strong>","<strong>I love</strong><strong class='tertiary'> coding !!</strong>","<strong>I make</strong><strong class='primary'> projects !.</strong>"],
    typeSpeed: 70,
    backSpeed:20,
    loop: true,
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=20){
            $("nav").addClass('secondary1');
        }
        else
            if($("nav").hasClass('secondary1')){
                $("nav").removeClass('secondary1');
            }
    });
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
        enabled: true
        }
    });
    $("#project-lists").owlCarousel({
        items:3,
        responsive : {
            0 : { items : 1  }, // from zero to 480 screen width 4 items
            480: { items : 2  }, // from 480 screen widthto 768 6 items
            768 : { items : 3 }
        },
        autoplay:40000,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true,
    });
    $('.counter').counterUp({
        delay:10,
        time:2000
    });
    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        
        $('html,body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
        });
    $(function(){
    new WOW().init(); 
    });

});
