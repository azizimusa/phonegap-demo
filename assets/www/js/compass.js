// The watch id references the current `watchHeading`
    var bergaya = null;
    
	
    function helah() {
		
        // Update compass every 3 seconds
        var options = { frequency: 1000 };

        bergaya = navigator.compass.watchHeading(onCompass, offCompass, options);
    }

    // Stop watching the compass
    //
    function stophelah() {
        if (bergaya) {
            navigator.compass.clearWatch(bergaya);
            bergaya = null;
        }
    }

    // onSuccess: Get the current heading
    //
    function onCompass(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }

    // onError: Failed to get the heading
    //
    function offCompass(compassError) {
        alert('Compass error: ' + compassError.code);
    }