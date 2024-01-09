document.addEventListener("DOMContentLoaded", function () {
    // Function to update the background color based on the time of day
    function updateBanner() {
		var month = new Date().getMonth();
		var day = new Date().getDate();
        var content = document.getElementById("banner-event");
		var textval = "Salutations!"
		
		switch (Math.floor(Math.random() * 10)) {
			case 0: textval = "Salutations!"; break;
			case 1: textval = "Greetings!"; break;
			case 2: textval = "Hej!"; break;
			case 3: textval = "Hola!"; break;
			case 4: textval = "yo"; break;
			case 5: textval = "sup"; break;
			case 6: textval = "welcome to mini's page"; break;
			case 7: textval = "that's crazy"; break;
			case 8: textval = "Welcome!"; break;
			case 9: textval = "Snoitatulas!"; break;
		};
		
		switch (month){
		case 0:
				switch (day){
				case 10: textval = "Creator's Birthday!"; break;
				}
		break;
		case 8:
				switch (day){
				case 7:	textval = "Guilt's Excavation Party!";	break;
				case 9:	textval = "Miner's Excavation Party!";	break;
				}
		break;
		}
		content.innerHTML = textval;
	}

    updateBanner();

    setInterval(updateBanner, 360000);
});