// function souligner(x){
// 	document.getElementById(x).style.borderBottom = "black solid 2px"
	
// }

// function desouligner(x){
// 	document.getElementById(x).style.borderBottom = ""
	
// }

function montrer(x) {
	x.style.display = "block"
}

function demontrer(x) {
	x.style.display = "none"
}

function dim_puis_cacher(id){
	document.getElementById(id).style.display = "block";
	let y = document.getElementById(id).parentNode.clientWidth;
	document.getElementById(id).style.display = "none";
	document.getElementById(id).parentNode.style.width = y + "px";
}


function effets_menu(x) {
	x.style.borderBottom = "teal solid 3px";
	// x.childrenNode.style.borderLeft = "yellow solid 4px"
	console.log(x.nextElementSibling.childNodes);


}

function retirer_em(x) {
	x.style.borderBottom = ""
}

function noter(x) {
	console.log(x)
}

 function afficher() {
	document.getElementById('Cookies').style.display = "flex";
	
}

function fermer_cookies() {
	document.getElementById('Cookies').style.display = "none"
}
