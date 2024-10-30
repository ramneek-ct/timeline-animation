$(document).ready(function() {
    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $line = $("line");
    pathPrepare($line);

    var controller = new ScrollMagic.Controller();

    $('.circle').each(function(index) {
        var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1", 
            offset: (index + 1) * 100, 
            duration: 0
        })
        .setClassToggle(this, 'display') 
        .addIndicators() 
        .addTo(controller);
    });

    var tween = TweenMax.to($line, 0.8, {strokeDashoffset: 0, ease: Linear.easeNone});

    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500,
        triggerHook: 0.5
    })
    .setTween(tween)
    .setPin('.svg-container')
    .addIndicators() 
    .addTo(controller);
});
