
function recordAudio() {
        var src = "myrecording.wav";
        var mediaRec = new Media(src, onRecord, offRecord);

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            setRecordPosition(recTime + " sec");
            if (recTime >= 10) {
                clearInterval(recInterval);
                mediaRec.stopRecord();	
            }
        }, 1000);
    }

    function onRecord() {
        console.log("recordAudio():Audio Success");		
    }

    // onError Callback
    //
    function offRecord(error) {
        alert("Dont too harsh, press stop and try again");
    }
	
	function setRecordPosition(position) {
		document.getElementById('record_position').innerHTML = "Record audio : " + position;
	}

/* PLAY AUDIO */
function playMedia() {
            //playAudio("/android_asset/www/media/p1rj1s_-_rockGuitar.mp3");
			playAudio("myrecording.wav");
        }

        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            my_media = new Media(src, onJaya, offJaya);

            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        //
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        //
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }						
            clearInterval(mediaTimer);			
            mediaTimer = null;			
        }

        // onJaya Callback
        //
        function onJaya() {
            console.log("playAudio():Audio Success");
        }

        // offJaya Callback
        //
        function offJaya(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = "Play audio : " + position;
        }
		
		function stopAll(){
			stopAudio();
			mediaRec.stopRecord();
		}