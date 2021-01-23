var mozart1,mozart2;
var audio = document.getElementById("Audio"); 

function pustiAudio() { 
  audio.play(); 
} 

function pauzirajAudio() { 
  audio.pause(); 
}

function animacija(){
	mozart1=document.getElementById("mozart1");
	mozart1.onclick=putujeMozart1;
	mozart2=document.getElementById("mozart2");
	mozart2.onclick=putujeMozart2;
}
function putujeMozart1(){
	var pozicija=0;
	var interval1=setInterval(padaj,5);

	function padaj(){
		pozicija++;
		mozart1.style.top=pozicija+"px";
		var trenutno=parseInt(mozart1.style.top);
		if(trenutno>=window.innerHeight){
			var interval2=setInterval(podigni,5);
			clearInterval(interval1);
			return;
		}
	}
	function podigni(){
		pozicija--;
		mozart1.style.top=pozicija+"px";
		if(pozicija<0){
			mozart1.style.top="0px";
			clearInterval(interval2);
			return;
		}
	}
}
function putujeMozart2(){
	var pozicija=0;
	var interval1=setInterval(padaj,5);
	function padaj(){
		pozicija++;
		mozart2.style.top=pozicija+"px";
		var trenutno=parseInt(mozart2.style.top);
		if(trenutno>=window.innerHeight){
			var interval2=setInterval(podigni,5);
			clearInterval(interval1);
			return;
		}
	}
	function podigni(){
		pozicija--;
		mozart2.style.top=pozicija+"px";
		if(pozicija<0){
			mozart2.style.top="0px";
			clearInterval(interval2);
			return;
		}
	}
}