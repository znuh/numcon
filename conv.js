function numconv() {
	var mm_idx = document.getElementById("txtin").value.indexOf("mm");
	var um_idx = document.getElementById("txtin").value.indexOf("um");
	var mil_idx = document.getElementById("txtin").value.indexOf("mil");
	var myNumber = parseInt(document.getElementById("txtin").value);
	var txt = "";
	um_idx += document.getElementById("txtin").value.indexOf("\xB5m");
	if(mm_idx >= 0) {
		myNumber *= 1000;
		um_idx = 1;
	}
    if (isNaN(myNumber) == false) {
	  if(um_idx >= 0) {
		  myNumber /= 25.4;
		  txt = myNumber + " mil";
	  }
	  else if (mil_idx >= 0) {
		  myNumber *= 25.4;
		  txt = myNumber + " &micro;m<br>" +
		  myNumber/1000 + " mm";
	  }
	  else {
		txt = myNumber + " dec<br>" +
		myNumber.toString(16) + " hex<br>" +
		myNumber.toString(8) + " oct<br>" +
		myNumber.toString(2) + " bin";
	}
   }
   document.getElementById("output").innerHTML = txt;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("txtin").addEventListener("keyup",numconv);
});
