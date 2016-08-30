
function calcTime() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var sec = date.getSeconds();

	var meridiem = 'AM';

	if (hour > 12){
		hour = hour - 12;
		meridiem = 'PM';
	}

	var clockDiv = document.getElementById('clock');
	if (hour < 10){
		hour = "0" + hour;
	}
	if (sec < 10){
		sec = "0" + sec;
	}

	if (minute < 10){
		minute = "0" + minute;
	}
	clockDiv.innerText = hour + ":" + minute + ":" + sec + " " + meridiem;
};
	calcTime();
	setInterval(calcTime, 100);


