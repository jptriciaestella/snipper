$(document).ready(function ($) {
    $('.hamburger-menu').click(function () {
        $('.menu-cont').addClass('active');
    });
    $('.menu-close').click(function () {
        $('.menu-cont').removeClass('active');
    });
  });