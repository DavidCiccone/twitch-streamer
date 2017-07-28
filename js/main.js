var channelArray = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var mainURL = 'https://wind-bow.gomix.me/twitch-api/streams/';
var urlChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
var twitchLink = 'https://www.twitch.tv/';
var twitchCont = document.getElementById('twitch-content'); 




for(var i = 0; i < channelArray.length; i++) {
	
function dataRetrieve(i){
	$.ajax({
		url: urlChannels + channelArray[i],
		type: 'GET',
		dataType: 'jsonp',
        success: function(data){
        	
        	console.log(data);
        	
            //creates the content div
        	var newDiv = document.createElement('div');
	    		    newDiv.id = 'content' + i;
	    		    newDiv.className = 'styles';
	    	
	    	//creates the user link	    
			var newLi = document.createElement('a');
			    newLi.href = twitchLink + channelArray[i];
			    newLi.id = 'link' + i;
			    newLi.className = 'link-style';

			var logo = document.createElement('img');		
				logo.src = data.logo;
			

			var statusInfo = document.createElement('p');
			    statusInfo.className = 'info-status' + i + ' info-status-styles';

			
			
			//appends each new channel    
            twitchCont.append(newDiv);
            document.getElementById('content' + i).append(newLi);
	    	document.getElementById('link' + i).append(logo);
	    	newDiv.append(statusInfo);
	    	document.getElementById('link' + i).innerHTML += channelArray[i];
            
            //changes the background color if the user is streaming or not
			
	    	//checks the status of the stream (live or not)

		$.ajax({
				url: mainURL + channelArray[i],
				type: 'GET',
				dataType: 'jsonp',
		        success: function(data){
					console.log(data);
					
					if(data.stream == null){
						newDiv.className = 'styles no-stream';
		                $(".info-status" + i).append("Offline");	
					} else {
						newDiv.className = 'styles live-stream';					
						$(".info-status" + i).append(data.stream.channel.status);	   
					};
		        },
		        error: function(data){
		        	console.log('Not available :(');
		        }
		})
    



        
        },
        error: function(data){
        	console.log('not working :(');
        	alert('Twitch API not available');
        }
	});
	
	

}

dataRetrieve(i);

}


//TODO: Write add user feature

//TODO: Write search function

//Animation for selector buttons
$( document ).ready(function(){
	$(".show-text").click(function(){
		$(".tab-style1").addClass("click-width");
		$(".tab-style2").removeClass("click-width");
		$(".tab-style3").removeClass("click-width");

		$(".no-stream").removeClass("hidden");
		$(".live-stream").removeClass("hidden");
	});

	$(".show-text2").click(function(){
		$(".tab-style1").removeClass("click-width");
		$(".tab-style2").addClass("click-width");
		$(".tab-style3").removeClass("click-width");

		$(".no-stream").addClass("hidden");
		$(".live-stream").removeClass("hidden");
	});

	$(".show-text3").click(function(){
        $(".tab-style1").removeClass("click-width");
		$(".tab-style2").removeClass("click-width");
		$(".tab-style3").addClass("click-width");
		
		$(".live-stream").addClass("hidden");
		$(".no-stream").removeClass("hidden");
		});
});



    