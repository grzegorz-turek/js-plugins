'use strict';
(function(){
    // ********** Mustache.js slide generator **********
    var templateSlide = document.getElementById('template-single-slide').innerHTML;
    Mustache.parse(templateSlide);

    var slideList = '';
    for(var i = 0; i < slideData.length; i++){
        slideList += Mustache.render(templateSlide, slideData[i]);
    }

    results.insertAdjacentHTML('beforeend', slideList);

    // ********** Carousel Settings **********
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
        hash: true,
        pageDots: false
    });

    // element argument can be a selector string for an individual element
    var flkty = new Flickity( '.main-carousel', {
        // options
    });

    // ********** Carousel restart button **********
    var flkty = new Flickity('.main-carousel');
    var buttonGroup = document.querySelector('.button-group');
    var buttons = buttonGroup.querySelectorAll('.button');
    buttons = fizzyUIUtils.makeArray( buttons );

    buttonGroup.addEventListener( 'click', function( event ) {
    // filter for button clicks
    if ( !matchesSelector( event.target, '.button' ) ) {
        return;
    }

    var index = buttons.indexOf( event.target );
    flkty.select( index );
    });

    // ********** Carousel scroll-bar **********
    //var flkty = new Flickity('.main-carousel');
    var progressBar = document.querySelector('.progress-bar');

    flkty.on( 'scroll', function( progress ) {
        progress = Math.max( 0, Math.min( 1, progress ) );
        progressBar.style.width = progress * 100 + '%';
    });
})();