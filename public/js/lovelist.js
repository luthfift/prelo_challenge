function loadMore(){
	var xhr; 
		    xhr = new XMLHttpRequest(); 

		xhr.onreadystatechange = function () {
		    if (xhr.readyState < 4){

		    }    
		    else if (xhr.readyState === 4) {
		        if (xhr.status == 200 && xhr.status < 300) {
		        	var json = JSON.parse(xhr.responseText);
		        }else{
		        	alert('An error occurred during your request: ' +  xhr.status + ' ' + xhr.statusText);
		        }
		    }
		}

		xhr.open('GET', 'https://dev.prelo.id/api/me/lovelist/2');
		xhr.setRequestHeader('Authorization', 'Token 36bc9128fc25aa7e19835c65ac50fe35c1015913');
		xhr.send();
}