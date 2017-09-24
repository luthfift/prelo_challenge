function loadMore(){
	var pathArray = window.location.pathname.split( '/' );
	var page = parseInt(pathArray[3])+1;
	var xhr; 
		    xhr = new XMLHttpRequest(); 

		xhr.onreadystatechange = function () {
		    if (xhr.readyState < 4){

		    }    
		    else if (xhr.readyState === 4) {
		        if (xhr.status == 200 && xhr.status < 300) {
		        	var json = JSON.parse(xhr.responseText);
					$.each(json._data, function (i, item) {	
		        	$('#tambah').append('<div class="panel"> <div class="panel-body"> <div class="media">  <div class="media-left"> <img src="'+item.display_picts[0]+'" class="media-object"> </div> <div class="media-body"> <p class="media-heading">'+item.name+' </p> <p class="price"> Rp. '+item.price+' </p> <div class="comment"><span class="fa fa-comment-o">'+item.num_comment+'</span><span class="fa fa-heart-o">'+item.num_lovelist+'</span></div></div></div></div></div>');
					});

		        }else{
		        	alert('An error occurred during your request: ' +  xhr.status + ' ' + xhr.statusText);
		        }
		    }
		}

		xhr.open('GET', 'https://dev.prelo.id/api/me/lovelist/'+page);
		xhr.setRequestHeader('Authorization', 'Token '+pathArray[2]);
		xhr.send();
}