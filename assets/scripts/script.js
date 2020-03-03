$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('.hamburger-nav').addClass('open');
    });
    $('.nav-close').click(function() {
        $('.hamburger-nav').removeClass('open');
    });
});