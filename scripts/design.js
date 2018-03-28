/*---------------------------------------------*\
		Les types et répertoriation
\*---------------------------------------------*/
var couleurTypes = function(couleurText){
	var couleur;
	switch(couleurText){
		case "plante": couleur = "#009d15"; break;
		case "feu": couleur = "#e35800"; break;
		case "eau": couleur = "#09abff"; break;
		case "normal": couleur = "#cdcdcd"; break;
		case "electric": couleur = "#edff03"; break;
		case "glace": couleur = "#87c3ff"; break;	
		case "spectre": couleur = "#3e0058"; break;
		case "tenebre": couleur = "#232323"; break;
		case "psy": couleur = "#ff1bdb"; break;
		case "sol": couleur = "#712b00"; break;
		case "vol": couleur = "#03fffb"; break;
		case "roche": couleur = "#ff965b"; break;
		case "combat": couleur = "#aa2100"; break;
		case "acier": couleur = "#818181"; break;
		case "poison": couleur = "#7e003c"; break;
		case "fee": couleur = "#ff0938"; break;
		case "insecte": couleur = "#5dff4f"; break;
		case "dragon": couleur = "#000c5e"; break;
		default: couleur = "#68a090";
	}
	return couleur
}

// Coef Multiplicateur
function coefMultiplicateur(categorie, attaquant, cible)
{
	attaquantCategorie = attaquant.categorie;
	cibleCategorie = cible.categorie;
	cm = 1;

	for(var i = 0; i <= cibleCategorie.length; i++) {
		// Partie efficace
		function efficace(attaqueType, cibleType, coef){
			if(coef == undefined || coef == null){ coef = 2; }
			if(categorie == attaqueType && cibleCategorie[i] == cibleType){
				cm *= coef;
			}
		}
		efficace('plante', 'eau');

		efficace('eau', 'feu');
		efficace('eau', 'roche');
		efficace('eau', 'sol');

		efficace('feu', 'glace');
		efficace('feu', 'plante');
		efficace('feu', 'acier');

		efficace('sol', 'electric');
		efficace('sol', 'roche');
		efficace('sol', 'sol');
		efficace('sol', 'acier');

		efficace('vol', 'insecte');
		efficace('vol', 'combat');
		efficace('vol', 'plante');

		efficace('electric', 'vol');

		efficace('roche', 'insecte');
		efficace('roche', 'vol');

		efficace('combat', 'normal');
		efficace('combat', 'roche');
		efficace('combat', 'glace');
		efficace('combat', 'tenebre');

		efficace('psy', 'spectre');

		efficace('tenebre', 'spectre');
		efficace('tenebre', 'psy');

		efficace('glace', 'plante');
		efficace('glace', 'dragon');
		efficace('glace', 'vol');

		efficace('acier', 'glace');

		efficace('dragon', 'dragon');

		efficace('spectre', 'psy');
		efficace('spectre', 'spectre');

		efficace('fee', 'combat');
		// Partie non efficace
		function nonEfficace(attaqueType, cibleType, coef){
			if(coef == undefined || coef == null){ coef = 2; }
			if(categorie == attaqueType && cibleCategorie[i] == cibleType){
				cm /= coef;
				if(coef == 0){
					cm = 0;
				}
			}
		}
		nonEfficace('eau', 'plante');
		nonEfficace('eau', 'eau');

		nonEfficace('feu', 'feu');
		nonEfficace('feu', 'eau');

		nonEfficace('plante', 'feu');
		nonEfficace('plante', 'plante');

		nonEfficace('electric', 'electric');
		nonEfficace('electric', 'sol', 0);

		nonEfficace('normal', 'spectre', 0);
		nonEfficace('combat', 'spectre', 0);
		nonEfficace('normal', 'roche');

		nonEfficace('normal', 'spectre', 0);
		nonEfficace('spectre', 'normal', 0);
		nonEfficace('spectre', 'tenebre');

		nonEfficace('psy', 'tenebre', 0);

		nonEfficace('glace', 'eau');

		nonEfficace('tenebre', 'combat');

		nonEfficace('insecte', 'combat');

		nonEfficace('roche', 'combat');

		nonEfficace('combat', 'vol');

		nonEfficace('spectre', 'tenebre');

		nonEfficace('acier', 'acier');

		nonEfficace('sol', 'vol', 0);
	}
	if(cm < 1){	
		if(cm == 0){
			infoboxEcran('C\'est sans effet sur '+cible.nom, "rgba(150, 150, 150,.9)");
		}else{
			infoboxEcran('C\'est peu efficace sur '+cible.nom);
		}
	}
	if(cm > 1){
		if(cm > 2){
			infoboxEcran('C\'est hyper efficace sur '+cible.nom+" !!!");
		}else{
			infoboxEcran('C\'est super efficace sur '+cible.nom+" !");
		}
	}
	return cm
}

/*---------------------------------------------*\
		Affichage graphiques des créatures
\*---------------------------------------------*/
function affichageGraphique(lanceur, cible){
	var position;
	// Le lanceur
	position = lanceur.position[0];
	$('#ecr1').css({
		'background-image':'url("styles/css_pict/pokemon/dos/'+lanceur.idos+'")',
		'bottom': position.bottom,
		'left':position.left,
		'height':position.height,
		'width':position.width
	});

	// Le receveur
	position = cible.position[1];
	$('#ecr2').css({
		'background-image':'url("styles/css_pict/pokemon/face/'+cible.iface+'")',
		'top': position.top,
		'right':position.right,
		'height':position.height,
		'width':position.width
	});

	console.log('Affichage réussi');
}
/*---------------------------------------------*\
		Le tour à tour
\*---------------------------------------------*/
function tour(){
	if($('#pj1').css('height') == "0px"){
		$('#pj1').css({'height':'100%'});
	}else{
		$('#pj1').css({'height':'0%'});
	}
	console.log('Attaques permutées avec succès');
}
/*---------------------------------------------*\
		Le statut, en fonction du pokemon 
		attaquant l'autre
\*---------------------------------------------*/
function statut(lanceur, cible){
	$('#infobox').find('p').text('A '+lanceur.nom+" d'attaquer "+cible.nom);
	$('#stt1').find('.sttName').text(lanceur.dresseur+": "+lanceur.nom);
	$('#stt2').find('.sttName').text(cible.dresseur+": "+cible.nom);
		
	function barreProgression(barre, creature){
		var attaquantVie = creature.vie;
		var attaquantVieAncrer = creature.vieancrer;
		var taille = ((attaquantVie * 100)/attaquantVieAncrer)+"%";
		$(barre).find('span').css({'width':taille});
	}

	barreProgression('#stt1', lanceur);
	barreProgression('#stt2', cible);
	$('#stt1').find('.sttVie').text(lanceur.vie+" / "+lanceur.vieancrer);
	$('#stt2').find('.sttVie').text(cible.vie+" / "+cible.vieancrer);
}




/*---------------------------------------------*\
		Box d'information sur l'écran de jeu
\*---------------------------------------------*/
function infoboxEcran(texte, couleur){
	if(couleur == undefined){
		couleur = "rgba(0, 0, 0,.9)";
	}
	$('#ecrinfos').fadeOut(0, function(){
		$('#ecrinfos').fadeIn(900);
		$('#ecrinfos').css({'background-color':couleur});
		$('#ecrinfos p').text(texte);
		$('#ecrinfos').fadeOut(1460);
	});

	console.log(texte);
}

function changementsStats(attaquant, direction, stat){
	/*
		1 = attaque
		2 = defense
		3 = attaque spéciale
		4 = defense spéciale
		5 = attaque + attaque spé
		6 = défense + défense spé
		7 = PV
	*/
	var couleur;
	var text;
	if(direction == "up"){
		couleur = "rgba(6, 82, 14, .9)";
		switch(stat){
			case 1: text = "son attaque"; break;
			case 2: text = "sa défense"; break;
			case 3: text = "son attaque spé."; break;
			case 4: text = "sa défense spé."; break;
			case 5: text = "son attaque et son attaque spé."; break;
			case 6: text = "sa défense et sa défense spé."; break;
			case 7: text = "ses PV"; couleur = "rgba(239, 44, 228, .9)";break;
		}
		infoboxEcran(attaquant.nom+" augmente "+text, couleur);
	}else{
		couleur = "rgba(19, 9, 123, .9)";
		switch(stat){
			case 1: text = "en attaque"; break;
			case 2: text = "en défense"; break;
			case 3: text = "en attaque spé."; break;
			case 4: text = "en défense spé."; break;
			case 5: text = "en attaque et en attaque spé."; break;
			case 6: text = "en défense et en défense spé."; break;
			case 7: text = "des PV"; break;
		}
		infoboxEcran(attaquant.nom+" perd "+text, couleur);
	}
}