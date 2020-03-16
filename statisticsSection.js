$(document).ready(function() {

    //Init Scroll Magic
    var controller = new ScrollMagic.Controller();

    var firstSection = new ScrollMagic.Scene({
        triggerElement: '#statistics-section-s1',
        offset: 400,
        duration: 500
    })
    .setPin("#statistics-section-s1")
    .setClassToggle('.statistics-section-s1-container', 'triggered')
    .addIndicators({
        name: 'Section 1',
        colorTrigger: 'white',
        colorStart: 'green',
        colorEnd: 'red'
    })
    .addTo(controller);

    var seccondSection = new ScrollMagic.Scene({
        triggerElement: '#statistics-section-s2',
        offset: 400,
        duration: 500
    })
    .setPin("#statistics-section-s2")
    .addIndicators({
        name: 'Section 2',
        colorTrigger: 'white',
        colorStart: 'green',
        colorEnd: 'red'
    })
    .addTo(controller);

});