var audio = document.getElementById('audio1');

		$(document).ready(function(){
			$("#sea").mouseenter(function(){
				$("#audio1")[0].play();
				// console.log(audio.currentTime)
			});

			$("#sea").mouseout(function(){
				$("#audio1")[0].pause();
				// console.log(audio.currentTime)
			});
			
			function updatestamp() {
			    timestamp = audio.currentTime;
			    $("#texts").html(timestamp)
			    // $("#sea").animate({width:timestamp*100}, "fast");
			    $("#sea").css("width", timestamp*100);

			    if (timestamp>5)
			    {
			    	$("#DarkSea").css("width", timestamp*20);
	   			    // $("#sea").css({"background": "red" }, 5000)

			    }
			}

			$(function() {
			    updatestamp();
			    setInterval(updatestamp, 1);
			});

		});