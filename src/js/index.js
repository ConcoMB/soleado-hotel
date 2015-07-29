var iconBase = 'assets/location_placeholder.png';

function initialize() {
  'use strict';
  var myLatlng = new google.maps.LatLng(26.1326813,-80.105671);
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(26.133063, -80.105645),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  map.setOptions({styles: styles});

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: iconBase,
    title: 'Soleado Hotel'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

var styles = [
    {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#6195a0'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#f2f2f2'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#ffffff'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.park',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#e6f3d6'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 45
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#f4d2c5'
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'labels.text',
        'stylers': [
            {
                'color': '#4e4e4e'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#f4f4f4'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#787878'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
            {
                'color': '#eaf6f8'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#eaf6f8'
            }
        ]
    }
];


$('#send').click(function() {
  'use strict';
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('name').value;
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': window.key,
      'message': {
        'from_email': email,
        'from_name': name,
        'to': [
          {
            'email': window.soleado_email,
            'name': window.soleado_name,
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': window.subject,
      'html': message
    }
  }
 }).done(function(response) {
    $("#contact-caption").text("YOUR INFO HAS BEEN SENT")
  });
});


