function naTekstu(obj){
	obj.style.backgroundColor="#ff9999";
	obj.style.color="#e6e6e6";
	obj.style.textDecoration="underline";
	obj.style.border="3px solid black";
}
function vanTeksta(obj){
	obj.style.border="none";
	obj.style.backgroundColor="rgb(255, 204, 242)";
}

function istorija(obj){
	obj.style.backgroundColor="#cccccc";
	obj.style.color="#4d4d4d";
	obj.style.textDecoration="underline";
	obj.style.textAlign="justify";
	obj.style.textShadow="2px 2px";
}

function izbrisiElement(){
	var roditelj=document.getElementsByClassName("form")[0];
	var dete=document.getElementById("forma");
	roditelj.removeChild(dete);
}
