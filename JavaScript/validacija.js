var pol;
var cekiranPol = false;
function inicijalizuj(){
	pol=document.getElementsByClassName("pol");
	console.log(pol);
	for ( var i = 0; i < pol.length; i++){
		pol[i].oninvalid=proveriPol;
		pol[i].oninput=proveriPol;
	}

	var ime1=document.getElementById("ime");
	ime1.oninvalid=ispravnoIme;
	ime1.oninput=ispravnoIme;

	var prezime1=document.getElementById("prezime");
	prezime1.oninvalid=ispravnoPrezime;
	prezime1.oninput=ispravnoPrezime;

	var mail1=document.getElementById("email");
	mail1.oninvalid=ispravanEmail;
	mail1.oninput=ispravanEmail;
}
function proveriPol(){
	this.setCustomValidity("");
	var polovi = pol;
		for ( var i = 0; i < polovi.length; i++) {
    	if(polovi[i].checked){
    		cekiranPol=true;
    		break;
		}
	}
	console.log(cekiranPol);
	if(cekiranPol==false)
    	this.setCustomValidity("Morate označiti Vaš pol!");
}

function ispravnoIme(){
	this.setCustomValidity("");
	if (this.validity.valueMissing){
		this.setCustomValidity("Morate uneti svoje ime!");
	}
	else {
		var ime=this.value;
		var drugiZnakovi = false;
		for ( var i=0; i<=ime.length && drugiZnakovi == false; i++){
			if (!((ime.charAt(0) >= "A" && ime.charAt(0) <= "Z") || (ime.charAt(0) >= '0' && ime.charAt(0) <= '9'))){
				this.setCustomValidity("Prvo slovo mora biti veliko!")
				return;
			}
			if (ime.charAt(i) >= "0" && ime.charAt(i) <= "9"){
				drugiZnakovi = true;
				this.setCustomValidity("Dozvoljeno je koristiti samo slova!");
				return;
			}
		}
	 }
}
function ispravnoPrezime(){
	this.setCustomValidity("");
	if (this.validity.valueMissing)
		this.setCustomValidity("Morate uneti svoje prezime!");
	else {
		var prezime=this.value;
		var drugiZnakovi = false;
		for ( var i = 0; i <= prezime.length && drugiZnakovi == false; i++){
			if (!((prezime.charAt(0) >= "A" && prezime.charAt(0) <= "Z") || (prezime.charAt(0) >= '0' && prezime.charAt(0) <= '9'))){
				this.setCustomValidity("Prvo slovo mora biti veliko!");
				return;
			}
			if (prezime.charAt(i) >= "0" && prezime.charAt(i) <= "9"){
				drugiZnakovi = true;
				this.setCustomValidity("Dozvoljeno je koristiti samo slova!");
				return;
			}

		}
	}
}
function ispravanEmail(){

	this.setCustomValidity("");
	if (this.validity.valueMissing) 
		this.setCustomValidity("Morate uneti svoju e-mail adresu!");
	else{
		var mail=document.getElementById("email").value;
		var ime=false;
		var majmunskoSlovo=false;
		var server=false;
		var domen=false;
		for(var i=0;i<mail.length;i++){
			if(mail[i]=='@' && i!=0){
				ime=true;
				majmunskoSlovo=true;
			}
			else if(mail[i]>='.' && mail[i-1]!='@' && majmunskoSlovo==true && i+1 < mail.length){
				server=true;
				domen=true;
			}	
		}
		if(!(ime && majmunskoSlovo && server && domen))
			this.setCustomValidity("Vasa e-mail adresa je neispravna! Pokusajte ponovo.");
	}
}