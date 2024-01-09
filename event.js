document.addEventListener("DOMContentLoaded", function () {
    // Function to update the background color based on the time of day
    function updateBanner() {
		var month = new Date().getMonth();
		var day = new Date().getDate();
        var content = document.getElementById("banner-event");
		if ((month == 1) && (day == 9)) {
			
		}
	}

    updateBanner();

    setInterval(updateBanner, 360000);
});