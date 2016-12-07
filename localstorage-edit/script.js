function ecrire() {
//on range les valeurs des champs dans la variable objet
	var objet = [
		nom = document.getElementById('name').value,
		valeur = document.getElementById('valeur').value,
	];
	sessionStorage.setItem('objet', objet); //on stock les variable dans le LocalStorage
	alert("les valeurs: " + objet + " on été stocké dans le Storage"); // on affiche un message de confirmation
}

function lire() {
	//on cible la prevZone dans laquelle on va injecter au click les données du local storage. 
	document.getElementById('readZone').innerHTML = sessionStorage.getItem('objet'); 

}

// zone suppr à travailler (garder une valeur) : 
function eff() {
	 sessionStorage.clear('valeur');
	 document.getElementById('readZone').innerHTML = sessionStorage.getItem('objet');
}


//réïnitialise la page
function init() {
	
	window.location.reload();
}
	 