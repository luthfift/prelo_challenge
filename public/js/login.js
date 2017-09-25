function validate() {

	var username_or_email= document.login.username_or_email.value;
	var password= document.login.password.value;

	if (username_or_email.length < 4) {
		alert("‘Email atau Username’ tidak boleh kosong dan minimal 4 karakter");
	} else if (password.length < 6) {
		alert("‘Password’ minimal 6 karakter");
	} else {
		var xhr; 
		    xhr = new XMLHttpRequest(); 

		xhr.onreadystatechange = function () {
		    if (xhr.readyState < 4){

		    }    
		    else if (xhr.readyState === 4) {
		        if (xhr.status == 200 && xhr.status < 300) {
		        	var json = JSON.parse(xhr.responseText);
		        	localStorage.setItem('Token',json._data.token);
		        	window.location = "/lovelist/";
		        }else{
		        	alert('An error occurred during your request: ' +  xhr.status + ' ' + xhr.statusText);
		        }
		    }
		}

		xhr.open('POST', 'https://dev.prelo.id/api/auth/login');
		xhr.setRequestHeader("Content-Type", "application/json");
		var data = JSON.stringify({
				username_or_email: username_or_email,
		  		password: password
		});
		xhr.send(data);
		}
};

function coba() {
	alert(title + "hai");
}
