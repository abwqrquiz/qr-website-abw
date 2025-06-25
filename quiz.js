var questionNumber = "Test";

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function getCookie(name) {
    var cVal = document.cookie.match('(?:^|;) ?' + name + '=([^;]*)(?:;|$)');
    if (!cVal) {
      return "";
    } else {
      return cVal[1];
    }
  }


function eraseCookie(name) {
	createCookie(name,"",-1);
}

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}
	
function resultSubmitted() {
	document.getElementById("result").style.visibility = "visible";
		
	var correct = document.querySelector('input[name=options]:checked').value;
		
	var cookie = getCookie("Test");
	
	
	if (!cookie){
		if (correct == 1) {
			document.getElementById("correct").style.Color = "Green";
			document.getElementById("correct").style.display = "block";
			document.getElementById("false").style.display = "none";
			document.getElementById("2ndTry").style.display = "none";
			
			createCookie(questionNumber, 1, 5);
		} else if (correct == 0) {
			document.getElementById("false").style.Color = "Red";
			document.getElementById("false").style.display = "block";
			document.getElementById("correct").style.display = "none";
			document.getElementById("2ndTry").style.display = "none";
			
			createCookie(questionNumber, 0, 5);
		}
	} else if (cookie == 1) {
		document.getElementById("2ndTry").style.display = "block";
	}
}
