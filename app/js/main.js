// That is great the thing is working 
var lib = require('./lib.js');


$(window).resize(function(){

    $('.className').css({
        position:'absolute',
        left: ($(window).width() - $('.section__main .content').outerWidth())/2,
        top: ($(window).height() - $('.section__main .content').outerHeight())/2
    });

});

// To initially run the function:
$(window).resize();