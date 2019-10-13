
var cars=['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n','A','B','C','D','E','F','G','H','J','K','L','M','W','X','C','V','B','N','1','2','3','4','5','6','7','8','9','0',' '];
var nbc=100;
var nn=55655;

function gsfn(n){
	var s="";
	var q=n;
	while(q>0){
		qi=parseInt(q%cars.length);
		s=s+cars[qi];
		q=parseInt(q/cars.length);
	}
	if(s=='') s=' ';
	return s
}

function generatePage(){
	var liste=[];
	var page_actuelle=parseInt(document.getElementById("npage").value);
	var txtpage="";
	nrg=new Math.seedrandom( gsfn(page_actuelle) );
	var n=nrg()*nn;
	while(txtpage.length<nbc){
		txt=gsfn(n);
		while(txt in liste){
			n=n+1;
			txt=gsfn(n);
		}
		liste.push(txt);
		txtpage+=txt;
		nrg=new Math.seedrandom(txt);
		n=nrg()*nn;
	}
	titrepage="Page n°"+page_actuelle+" du livre de l'infini";
	document.getElementById("titre").innerHTML=titrepage;
	document.getElementById("texte").innerHTML=txtpage;
}

generatePage();

