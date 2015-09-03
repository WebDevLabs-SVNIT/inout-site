// That is great the thing is working 
var lib = require('./lib.js');


$(window).resize(function(){

    $('.content').css({
        position:'absolute',
        left: ($(window).width() - $('.content').outerWidth())/2,
        top: ($(window).height() - $('.content').outerHeight())/2
    });

});

// To initially run the function:
$(window).resize();