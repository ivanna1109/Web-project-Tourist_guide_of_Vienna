function prozorIskace(){
	var x=document.getElementsByClassName("link");
	for(var i=0;i<=x.length;i++){
		x[i].onmouseenter=iskoci;
		x[i].onmouseleave=nestani;
	}
}

function iskoci(){
	var prozor=document.createElement("div");
	this.appendChild(prozor);
	prozor.innerHTML="Ovaj link će Vas odvesti na sajt na kom možete pogledati koje još kulturne lokacije od značaja u Beču obavezno morate posetiti!";
	prozor.style.color="#862d59";
	prozor.setAttribute("class","obaveštenje");
}

function nestani(){
	var y=document.getElementsByClassName("obaveštenje")[0];
	this.removeChild(y);
}