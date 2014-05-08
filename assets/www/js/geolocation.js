function getgeolocation() {
        navigator.geolocation.getCurrentPosition(ongeo, offgeo);
    }

function ongeo(position) {
        var element = document.getElementById('displaylocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function offgeo(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
/* ================================================= */

var kacak = null;

    // device APIs are available
    //
    function watchgeo() {
        // Throw an error if no update is received every 30 seconds
        //var options = { timeout: 30000 };
        kacak = navigator.geolocation.watchPosition(onwatch, offwatch);
    }

    // onSuccess Geolocation
    //
    function onwatch(position) {
        var element = document.getElementById('watchlivegeo');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

        // onError Callback receives a PositionError object
        //
        function offwatch(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }