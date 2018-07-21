
$(function () {
    'use strict';
    
    /* adjust header height */
    var myHeader = $('header'), mySlider = $('.bxslider');

    myHeader.height($(window).height());
    
    $(window).resize(function () {
        myHeader.height($(window).height());
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2); /* we can't use a var for padding because we need to calculate it everytime we resize the window */
        });
    });
    
    /* links add active class */
    $('nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    mySlider.bxSlider({pager: false});
    
    /* adjust bxslider li center */
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    /* smooth scroll */
    $('nav li a').click(function () {
        
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    /* Our auto Slider */ //self invoke function
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    /* MixItUp */
    window.mixitup('#Container');
    
    $('.shuffle li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    /* Nice Scroll */
    $('html').niceScroll({
        cursorcolor: '#1BBC9B',
        cursorwidth: '10px',
        cursorborder: '#1BBC9B'
    });
    
});