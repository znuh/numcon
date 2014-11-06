function numconv() {
    var myNumber = parseInt(document.getElementById("txtin").value);
    var txt = ""
    if (isNaN(myNumber) == false) {
      txt = myNumber + " dec<br>" +
      myNumber.toString(16) + " hex<br>" +
      myNumber.toString(8) + " oct<br>" +
      myNumber.toString(2) + " bin";
   }
   document.getElementById("output").innerHTML = txt;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("txtin").addEventListener("keyup",numconv);
});
