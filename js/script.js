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

/*
    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {zoom: 5, center: slideData[0].coords});
        for (var i = 0; i < slideData.length; i++) {
            var marker = new google.maps.Marker({position: slideData[i].coords, map: map});
            marker.addListener('click', function() {
                console.log('clickindex', i);
            });
        }
    };
*/

/*
    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {zoom: 5, center: slideData[0].coords});

        var locations = [];
        for (var i = 0; i < slideData.length; i++) {
            locations.push(slideData[i].coords);
        }

        locations.forEach(function(value, index) {
            var marker = new google.maps.Marker({position: value, map: map});
            marker.addListener('click', function() {
                console.log('index', index); // DEL
                flkty.select( index );
            });
        });
    }
*/

    window.initMap = function() {
        var index = 0;
        var map ='';
        var locations = [];
        for (var i = 0; i < slideData.length; i++) {
            locations.push(slideData[i].coords);
        }
        
        //map = mapNavigation(map, locations, index, flkty);
        mapNavigation(map, locations, index);
        
        flkty.on( 'change', function( index ) {
            //map = mapNavigation(map, locations, index, flkty);
            mapNavigation(map, locations, index);

        });
    }

    //function mapNavigation(map, locations, index, flkty) {
    function mapNavigation(map, locations, index) {
        map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: locations[index] });
        locations.forEach(function (value, index) {
            var marker = new google.maps.Marker({ position: value, map: map });
            marker.addListener('click', function () {
                flkty.select(index);
            });
        });
//        return map;
    }
    
})();

