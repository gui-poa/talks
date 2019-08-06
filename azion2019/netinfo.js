function netinfo()
{
	var elNetinfo = document.getElementById("netinfo");

	var init = function() {

		writesNetInfo(false);

		navigator.connection.addEventListener('change', function () { writesNetInfo(true) });
	}

	function writesNetInfo(vibrate)
	{
		if (vibrate) {
			window.navigator.vibrate(200);
		}
		
		var connection = navigator.connection;

		var text="";

		text = "Effective Type: "+connection.effectiveType+"<br />";
		text += "Download: "+connection.downlink+"Mbps <br />";
		text += "RTT: "+connection.rtt+"ms <br />";
		text += "Type: "+connection.type;

		elNetinfo.innerHTML = text;
	}

	init();
}