function inapp() {
		alert("Please wait couple of seconds before page finish loading and append to body");
         var ref = window.open('http://phonegap.com', '_parent', 'location=yes,toolbar=yes');
         // close InAppBrowser after 5 seconds
         setTimeout(function() {
             ref.close();
         }, 5000);
    }