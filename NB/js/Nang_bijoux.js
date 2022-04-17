function montrer(x) {
	x.style.display = "block";
}

function demontrer(x) {
	x.style.display = "none";
	
}

function dim_puis_cacher(id){
	document.getElementById(id).style.display = "block";
	let y = document.getElementById(id).parentNode.clientWidth;
	document.getElementById(id).style.display = "none";
	document.getElementById(id).parentNode.style.width = y + "px";
}


function effets_menu(x) {
	x.style.borderBottom = "var(--main-color) solid 3px";
	// x.childrenNode.style.borderLeft = "yellow solid 4px"
	}

function retirer_em(x) {
	x.style.borderBottom = ""
}

function noter(x) {
	//console.log(x)
}

function afficher() {
	document.getElementById('Cookies').style.display = "flex";
	
}

function fermer_cookies() {
	document.getElementById('Cookies').style.display = "none"
}

function mesurer_photo(){
	let y = document.getElementById('biographie').clientHeight;
	document.getElementById('photoSak').style.height = y + "px";
} // mesure la hauteur du texte de la bio et donne cette hauteur à la photo


function input(id) {
	document.getElementById(id).style.color = "black";
	// console.log(document.getElementById(id).value);
			if (document.getElementById(id).value == "Mon meilleur email") 
				{
					document.getElementById(id).value = ""
				}

} // efface le texte dans l'input et le met en noir

function reveal(id) {
	document.getElementById(id).style.visibility = "visible"
}


function Hover_on(id, type_bijoux, i){
			
			// console.log(id)
			// console.log(type_bijoux)
			// console.log(i)
			// console.log(`images/${type_bijoux}${i}_2.jpg`)

			document.getElementById(id).src=`images/${type_bijoux}${i}_2.jpg`

		}
function Hover_off(id,type_bijoux,i){
			document.getElementById(id).src=`images/${type_bijoux}${i}.jpg`
		}

function HoverchgtPhoto(id1, id2) {
	//console.log(id2)
	//console.log(document.getElementById(id2).src);
	//console.log(document.getElementById(id2).src)
	
	document.getElementById(id1).src = document.getElementById(id2).src

} //si tu hover ou clik sur la photo ça devient la photo du main

function id_collection(type_bijoux,nb_bjx,nom_bijoux, descr, prix) {
	
	
	//console.log('main-collection-'+type_bijoux);

	// ci dessous c'est la création du titre
	var h2 = document.createElement('h2');
	h2.id="titre-"+type_bijoux;
	h2.className="titre-Collection";
	h2.innerHTML="Collection actuelle : " + type_bijoux + "s";

	// ci dessous c'est la création du menu


	var li1 = document.createElement('li');
	li1.innerHTML="Nouveautés"
	li1.className="liMB"

	var li2 = document.createElement('li');
	li2.innerHTML="Colliers"
	li2.className="liMB"
	li2.setAttribute('onclick',"NewMain('main-collection-Collier')")

	var li3 = document.createElement('li');
	li3.innerHTML="Boucles d'oreilles"
	li3.className="liMB"
	//li3.setAttribute('onclick',"NewMain('main-collection-BDO')")

	var li4 = document.createElement('li');
	li4.innerHTML="Bracelets"
	li4.className="liMB"
	li4.setAttribute('onclick',"NewMain('main-collection-Bracelet')")

	var li5 = document.createElement('li');
	li5.innerHTML="Bagues"
	li5.className="liMB"
	//li3.setAttribute('onclick',"NewMain('main-collection-Bagues')")

	var ul = document.createElement('ul');
	ul.id = "ulMB"

	var nav = document.createElement('nav');
	nav.id="menu-bijoux"

	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	ul.appendChild(li4);
	ul.appendChild(li5);
	nav.appendChild(ul);
	



	// ci dessous c'est la création de la section
	var section = document.createElement("section");
		section.id="SA-"+type_bijoux;
		section.className="Section-Article";
	var i=1;
	while (i<=nb_bjx) { 
		
		var fig = document.createElement("figure");
		fig.id=`${type_bijoux}${i}`;
		fig.className="articles";
		fig.setAttribute('onclick',`NewMain('main-PDV-${type_bijoux}${i}')`);
		
		var image = document.createElement("img");
		image.id=`photo-article-${type_bijoux}${i}`;
		image.className="photo-article";
		image.alt=`${type_bijoux} numéro${i}`;
		image.src=`images/${type_bijoux}${i}.jpg`
		var id_image = `photo-article-${type_bijoux}${i}`
		
		image.setAttribute("onmouseover", `Hover_on('${id_image}', '${type_bijoux}', '${i}')`)
		image.setAttribute("onmouseleave", `Hover_off('${id_image}', '${type_bijoux}', '${i}')`)

		
		var span = document.createElement("span");
		span.innerHTML = nom_bijoux;
		span.className="italik"
		var h5 = document.createElement("h5");
		h5.innerHTML = type_bijoux + " ";
		h5.className="titre-article";
		
		var p1 = document.createElement("p");
		p1.className="description p-article";
		p1.innerHTML=descr

		var p2 = document.createElement("p");
		p2.className="prix p-article";
		p2.innerHTML= "Prix : " + prix;



		var div = document.createElement("div");
		div.className="div-article";
		

		


		h5.appendChild(span);
		div.appendChild(h5);
		div.appendChild(p1);
		div.appendChild(p2);
		fig.appendChild(image);
		fig.appendChild(div);
		section.appendChild(fig);
		i++;

	}
	//on ajoute tous les élements au main nommé main-collection-*Bijoux*

	var le_main ='main-collection-'+type_bijoux
	//console.log(le_main)
	
	document.getElementById(le_main).appendChild(h2);
	document.getElementById(le_main).appendChild(nav);
	document.getElementById(le_main).appendChild(section);

	

	}
	


function Page2Vente(nbArticles,type_bijoux,titre_bijoux, descr, prix){
	for (var i = 1; i <= nbArticles; i++) {
		var main = document.createElement('main');
		main.id=`main-PDV-${type_bijoux}${i}`;
		main.className="page-de-vente";
		main.style.display = "none"

		var h1 = document.createElement('h1');
		h1.className="titre-bijoux-PDV"
		h1.innerHTML=type_bijoux +" "

		var span = document.createElement('span');
		span.className="italik";
		span.innerHTML=titre_bijoux;

		var section = document.createElement('section');
		section.className="section-PDV"

		var div1 = document.createElement('div');
		div1.className="side-div-PDV";

		var fig1 = document.createElement('figure');
		fig1.className = "fig1-PDV fig-lat-PDV figPDV";

		var img1 = document.createElement('img');
		img1.id="photo1_"+i+type_bijoux
		img1.setAttribute('onmouseover',`HoverchgtPhoto('mainPhotoPDV${i}${type_bijoux}', 'photo1_${i}${type_bijoux}')`);
		img1.setAttribute('onclick',`HoverchgtPhoto('mainPhotoPDV${i}${type_bijoux}','photo1_${i}${type_bijoux}')`);
		img1.setAttribute('src',`images/${type_bijoux}${i}.jpg`);
		img1.className ="photo1-PDV photo-lat-PDV photoPDV"

		var fig2 = document.createElement('figure');
		fig2.className = "fig2-PDV fig-lat-PDV figPDV";

		var img2 = document.createElement('img');
		img2.id="photo2_"+i+type_bijoux
		img2.setAttribute('onmouseover',`HoverchgtPhoto('mainPhotoPDV${i}${type_bijoux}','photo2_${i}${type_bijoux}')`);
		img2.setAttribute('onclick',`HoverchgtPhoto('mainPhotoPDV${i}${type_bijoux}','photo2_${i}${type_bijoux}')`);
		img2.setAttribute('src',`images/${type_bijoux}${i}_2.jpg`);
		img2.className ="photo2-PDV photo-lat-PDV photoPDV"



		var div2 = document.createElement('div');
		div2.className="main-div-PDV";

	
		var fig3 = document.createElement('figure');
		fig3.className = "mainfig-PDV figPDV"
		

		var img3 = document.createElement('img');
		img3.setAttribute('src',`images/${type_bijoux}${i}.jpg`);
		img3.className ="mainphoto-PDV photoPDV"
		img3.id="mainPhotoPDV"+i+type_bijoux

		var p1 = document.createElement('p');
		p1.className="description-PDV"
		p1.innerHTML=descr

		var p2 = document.createElement('p');
		p2.className="prix-PDV"
		p2.innerHTML="Prix : "+prix+"euros"

		var btn = document.createElement('button');
		btn.className="AJ-Panier-PDV"
		btn.innerHTML="Ajouter au Panier";

		fig1.appendChild(img1);
		fig2.appendChild(img2);
		fig3.appendChild(img3);
		div1.appendChild(fig1);
		div1.appendChild(fig2);
		div2.appendChild(fig3);
		section.appendChild(div1);
		section.appendChild(div2);
		section.appendChild(p1);
		section.appendChild(p2);
		section.appendChild(btn);
		main.appendChild(h1);
		main.appendChild(section);

		document.getElementById('body').appendChild(main);
		main.after(document.getElementById('Crédits'));


	}
}

function url_check(){

var hash1 = window.location.hash
console.log("le hash de l'adresse url : " + hash1)

if (hash1 !="" ){

var id_main = hash1.slice(4);
console.log("l'id du main : " + id_main);

	if(id_main != "undefined" && id_main != "main-accueil"){

	var main1 = document.getElementById(id_main)
console.log("l'élement main en question :" + main1);
console.log("le display de ce main : " + main1.style.display);

		if(main1.style.display == "none"){	
		
			for (var i = document.getElementsByTagName('main').length - 1; i >= 0; i--) {
			document.getElementsByTagName('main')[i].style.display="none"
			}
			document.getElementById(id_main).style.display = "flex";
		}
	}	
}	
}

function test(){
	console.log("test : " + document.getElementById('main-collection-Collier'))
}



function NewMain(id) {
	
	document.location.hash =`id=${id}`;
	console.log('Newmainactivé')
	
	
	for (var i = document.getElementsByTagName('main').length - 1; i >= 0; i--) {
		document.getElementsByTagName('main')[i].style.display="none"
	}
	document.getElementById(id).style.display = "flex";
	
}// on rend tous les mains invisible et ensuite on rend le main avec le bon id visible


function NewMain_block(id) {
	
	document.location.hash =`id=main-accueil`
	for (var i = document.getElementsByTagName('main').length - 1; i >= 0; i--) {
		document.getElementsByTagName('main')[i].style.display="none"
	}
	document.getElementById(id).style.display = "block";
	
}// on rend tous les mains invisible et ensuite on rend le main avec le bon id visible en block

function url_check_block(){

var hash1 = window.location.hash
console.log("le hash de l'adresse url : " + hash1)

if (hash1 !="" ){

var id_main = hash1.slice(4);
console.log("l'id du main : " + id_main);

	if(id_main != "undefined"){

	var main1 = document.getElementById(id_main)
console.log("l'élement main en question :" + main1);
console.log("le display de ce main : " + main1.style.display);

		if(main1.style.display == "none"){	
		
			for (var i = document.getElementsByTagName('main').length - 1; i >= 0; i--) {
			document.getElementsByTagName('main')[i].style.display="none"
			}
			document.getElementById(id_main).style.display = "flex";
		}
	}	
}	
}
