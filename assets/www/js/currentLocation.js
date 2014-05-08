// The watch id references the current `watchAcceleration`
    var goya = null;


    // Start watching the acceleration
    //
    function gelak() {

        // Update acceleration every 3 seconds
        var options = { frequency: 1000 };

        goya = navigator.accelerometer.watchAcceleration(onAcc, offAcc, options);
    }

    // Stop watching the acceleration
    //
    function stopgelak() {
        if (goya) {
            navigator.accelerometer.clearWatch(goya);
            goya = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onAcc(acceleration) {
        var element = document.getElementById('getAccelerate');
        element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                            'Acceleration Y: ' + acceleration.y         + '<br />' +
                            'Acceleration Z: ' + acceleration.z         + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function offAcc() {
        alert('onError!');
    }