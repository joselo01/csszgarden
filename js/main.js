// JavaScript Document
$(document).ready(function() {
    $('.page-wrapper').append('<div class="caja1"></div>');
    $(".preamble").prependTo(".supporting");
    $(".caja1").prependTo(".supporting");
    $(".preamble").prependTo(".caja1");
    $(".explanation").prependTo(".caja1");
    $(".participation").append('<div class="caja2"></div>');
    $(".caja2").append('<div class="content-caja2"></div>');
    $(".caja2").append('<div class="img-caja2"></div>');
    $(".img-caja2").append("<img src='images/avengers.png'/>");
    $(".participation h3").appendTo('.content-caja2');
    $(".participation p").appendTo('.content-caja2');
    $(".benefits").append('<div class="caja3"></div>');
    $(".caja3").append('<div class="content-caja3"></div>');
    $(".caja3").append('<div class="img-caja3"></div>');

    $(".img-caja3").append("<img src='images/spiderman.png'/>");
    $(".img-caja3").prependTo(".caja3");
    $(".benefits h3").appendTo('.content-caja3');
    $(".benefits p").appendTo('.content-caja3');

    $(".requirements").append('<div class="caja4"></div>');
    $(".requirements h3").appendTo('.caja4');
    $(".requirements p").appendTo('.caja4');
    $(".caja4").append('<div class="img-caja4"></div>');
    $(".img-caja4").append("<img src='images/tor.png'/>");


});