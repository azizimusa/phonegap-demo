function captureError(error) {
    var msg = 'Either your device not supported or google this error for code : ' + error.code;
    navigator.notification.alert(msg, null, 'Error!');
    document.getElementById('capture-result').innerHTML = "<strong>Error</strong>";
}

// api-capture
function captureAudioSuccess() {  
    var src = "captureAudio.wav";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}
function captureImageSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        document.getElementById('format-data').innerHTML = 
            "Height: <strong>" + mediaFile.height + "</strong><br/>" +
            "Width: <strong>" + mediaFile.width + "</strong><br/>";
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        document.getElementById('capture-result').innerHTML = "<strong>" + (i+1) + " file(s)</strong>";
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureImageSuccess");
}
function captureVideoSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        document.getElementById('format-data').innerHTML = 
            "Height: <strong>" + mediaFile.height + "</strong><br/>" +
            "Width: <strong>" + mediaFile.width + "</strong><br/>" +
            "Duration: <strong>" + mediaFile.duration/1000 + "s</strong><br/>";
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        document.getElementById('capture-result').innerHTML = "<strong>" + (i+1) + " files</strong>";
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureMediaSuccess");
}

//api-capture   Capture Audio
function captureAudio() {
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureAudio(captureAudioSuccess, captureError, {limit: 1});
}

// api-capture  Capture Image
function captureImage(){
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureImage(captureImageSuccess, captureError, {limit: 1});    
}
// api-capture  Capture Video
function captureVideo(){
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureVideo(captureVideoSuccess, captureError, {limit: 1});    
}