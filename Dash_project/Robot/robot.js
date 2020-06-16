$('.blink').on('click', function() {
   $('.brain').toggleClass('laser');
});

$('.color').on('click', function() {
    
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rGBA = (`rgba(${red},${green},${blue},1)`);

    $("body").css("background", rGBA);
})

$('.break_dance').on('click', function() {
    $('img').toggle();
});