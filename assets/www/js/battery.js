
    function onbattery() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
		document.getElementById('batlog').innerHTML+="clicked/n";
		//document.getElementById('getBat').onclick("getAgainStatus()");
    }

    // Handle the batterystatus event
    //
    function onBatteryStatus(info) {
        //alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
		document.getElementById('log2').innerHTML+="get/n";
		document.getElementById('getbatstatus').innerHTML+="Level : " + info.level + "/nPlugged : " + info.isPlugged;		
    }
	
	function getAgainStatus(){
		alert("Level : ");
	}
	