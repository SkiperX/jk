export default function () {
    if ($('.b-location').length) {
        $(window).scroll(function() {
            if ($('.b-location_init').length) {
                return
            }

            let distantantion = $(window).scrollTop() +$(window).height();
            let position = $('.b-location').offset().top;
            if (distantantion > position) {
                $('.b-location').addClass('b-location_init');
                initMap()
            }
        })
    }
    function addScript(src) {
        var script = document.createElement('script');
        script.src = src
        document.body.appendChild(script);
    }
    function initMap() {




        /*script.onload = function () {
            //initMap2()
        }*/
    }
    window.initMap2 = initMap2;
    initMap2()
    function initMap2() {


        var centerinit = {
            lat: 57.15763652011692,
            lng: 65.54946264359432
        };

        let jk = {
            lat: 57.15936202584249,
            lng: 65.5561530067805
        }


        let map = new google.maps.Map(document.getElementById('location-map'), {
            zoom: 15,

            center: centerinit,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        });


        var image = 'static/img/general/pin.svg';
        var marker = new google.maps.Marker({
            position: jk,
            icon: image,
            map: map,

        });
        marker.setMap(map);


        /**/

        if (window.ExtendedMarkers && ExtendedMarkers.markers && ExtendedMarkers.markers.length) {
            var markers = [];
            var centeredMarker = true;
            $.each(ExtendedMarkers.markers, function (index, ExtendedMarker) {

                // Set lat and lng
                var myLatLng = new google.maps.LatLng(
                    ExtendedMarker.lat,
                    ExtendedMarker.lng
                );

                // Rich Marker options
                var options = {
                    map: map,
                    flat: true,
                    defaultZI: (Math.round(myLatLng.lat() * -100000) << 5) * 10,
                    position: myLatLng,
                    content: '<span class="dot"></span>' + ExtendedMarker.html
                };

                // Add marker on map
                var marker = new RichMarker(options);

                // Cluster Markers
                markers.push(marker);

            });

            // Cluster instance
            var clusterStyles = [
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                },
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                },
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                }
            ];

            var clusterOptions = {
                gridSize: 50,
                styles: clusterStyles,
                maxZoom: 13,
                averageCenter: true,
            };

            var markerCluster = new MarkerClusterer(map, markers, clusterOptions);

            // Center map on markers
            setTimeout(function () {
                // Get bounds
                var bounds = new google.maps.LatLngBounds();

                $.each(markers, function (index, marker) {
                    if (marker.iwOpened) {
                        var test = setInterval(function () {
                            var clusters = markerCluster.getClusters(); // use the get clusters method which returns an array of objects
                            if (clusters.length) {
                                clearInterval(test);
                                for (var i = 0, l = clusters.length; i < l; i++) {
                                    for (var j = 0, le = clusters[i].markers_.length; j < le; j++) {
                                        var marker_found = clusters[i].markers_[j]; // <-- Here's your clustered marker
                                        if (marker.getPosition() === marker_found.getPosition()) {
                                            centeredMarker = marker;
                                        }
                                    }
                                }
                                if (!centeredMarker) {
                                    var bounds2 = new google.maps.LatLngBounds();
                                    bounds2.extend(centeredMarker.getPosition());
                                    map.fitBounds(bounds2);
                                } else {
                                    map.fitBounds(bounds);
                                }
                            }
                        }, 500);
                    }
                    if (marker.getVisible()) {
                        bounds.extend(marker.getPosition());
                    }
                });
                setActiveMarker()
                if (!centeredMarker) {
                    //map.setCenter(centeredMarker.getPosition());
                } else {
                    //map.fitBounds(bounds);
                }
            }, 1000);
        }
        /**/

        marker.addListener('click', function () {
           // $('[data-map="1"]').trigger('click');
        });





        map.addListener('click', function(event) {
            var latitude = event.latLng.lat();
            var longitude = event.latLng.lng();
            console.log( latitude + ', ' + longitude );
        });

    }
    $('.b-location__link').on('click', function(e) {
        $('.b-location__link').removeClass('b-location__link_active');
        $(this).addClass('b-location__link_active');
        setActiveMarker()
        return false
    })

    function setActiveMarker() {
        $('.b-location__marker_active').removeClass('b-location__marker_active');
        var currentIndex = $('.b-location__link_active').attr('data-map');
        $(`.b-location__marker[data-marker='${currentIndex}']`).addClass('b-location__marker_active');
        console.log(currentIndex)
    }

}
