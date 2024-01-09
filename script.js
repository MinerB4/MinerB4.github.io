document.addEventListener("DOMContentLoaded", function () {
    function updateBackgroundColor() {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
		
		var currentTime = (hours*3600) + (minutes*60) + seconds;
		
        var mainContent = document.getElementById("main-content");
		
		function mixColors(color1, color2, percentage) {
			const r1 = color1 >> 16 & 255;
			const g1 = color1 >> 8 & 255;
			const b1 = color1 & 255;

			const r2 = color2 >> 16 & 255;
			const g2 = color2 >> 8 & 255;
			const b2 = color2 & 255;

			const mixedR = Math.round(r1 + (r2 - r1) * (percentage / 100));
			const mixedG = Math.round(g1 + (g2 - g1) * (percentage / 100));
			const mixedB = Math.round(b1 + (b2 - b1) * (percentage / 100));

			const resultColor = (mixedR << 16) + (mixedG << 8) + mixedB;

			const hexColor = '#' + resultColor.toString(16).padStart(6, '0');

			return hexColor;
}

        if (currentTime >= 0 && currentTime < 21600) {
        mainContent.style.backgroundColor = mixColors(0x000000, 0x996633, (currentTime % 21600)/216);
        } else if (currentTime >= 21600 && currentTime < 43200) {
        mainContent.style.backgroundColor = mixColors(0x996633, 0x151580, (currentTime % 21600)/216);
        } else if (currentTime >= 43200 && currentTime < 64800) {
        mainContent.style.backgroundColor = mixColors(0x151580, 0x330033, (currentTime % 21600)/216);
        } else {
        mainContent.style.backgroundColor = mixColors(0x330033, 0x0A0A0A, (currentTime % 21600)/216);
        }
    }

    updateBackgroundColor();

    setInterval(updateBackgroundColor, 30000);
});