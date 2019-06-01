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
        //autoPlay: true,
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



    // Initialize and add the map
    window.initMap = function() {
        // The location of Bialowieza
        var bialowieza = slideData[0].coords;
        // The map, centered at Bialowieza
        var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 5, center: bialowieza});
        // The marker, positioned at Bialowieza
        var marker = new google.maps.Marker({position: bialowieza, map: map});

        /*
        var location = slideData[i].coords;

        var marker[i] = new google.maps.Marker({position: location[i], map: map});
        console.log('bialowieza: ', bialowieza); // DEL
*/
    };





})();