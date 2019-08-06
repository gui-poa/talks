function netinfo()
{
	var elNetinfo = document.getElementById("netinfo");

	var init = function() {

		writesNetInfo();

		navigator.connection.addEventListener('change', writesNetInfo);
	}

	function writesNetInfo()
	{
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