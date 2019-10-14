
var cars=['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n','1','2','3','4','5','6','7','8','9','0'];
var nbc=1500;
var nn=556545;

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
	//alert("page : "+page_actuelle);
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
	return txtpage;
}

function rechercher(){
	var pag1=parseInt( document.getElementById("pag1").value );
	var pag2=parseInt( document.getElementById("pag2").value );
	var car=document.getElementById("car").value;
	alert("recherche du caractere '"+car+"' dans le livre de l'infini");
	for(x=pag1;x<pag2;x++){
		document.getElementById("npage").value=x;
		txtp="  "+generatePage()+"   ";
		kk=txtp.split(car).length;
		if(kk>=2){
			alert("Le texte '"+car+"' se trouve sur la page "+x);
			x=pag2;
			ttt="" ;
			n=0;
			for(k of txtp.split(car)){
				ttt+=k;
				n=n+1;
				if(n<kk) ttt+="_[_"+car+"_]_";
			}
			document.getElementById("texte").innerHTML=ttt;
		}
	}
}

generatePage();

