$(document).ready(function(){
	/*---------------------------------------------*\
		Constructeur de base
	\*---------------------------------------------*/
	var creature = function(dresseur, data){
		this.dresseur = dresseur;
		this.nom = data.nom;
		this.categorie = data.categorie;

		//Affichage
		this.iface = data.img_dev+".gif";
		this.idos = data.img_bak+".gif";
		this.position = data.position;

		//Statistiques
		this.vie = data.statistiques.PV;
		this.atk = data.statistiques.Attaque;
		this.Satk = data.statistiques.Att_spe;
		this.defense = data.statistiques.Defense;
		this.Sdefense = data.statistiques.Def_spe;
		this.vitesse = data.statistiques.vitesse;
		// Attaques
		this.listeattaques = data.attaques;
		// Ancrer
		this.vieancrer = data.statistiques.PV;
	}


	
	/*---------------------------------------------*\
		Fonctions du prototype
	\*---------------------------------------------*/
	creature.prototype.attaque = function(cible, refAttaque){
		// Données de l'attaque
		var listeAttaque = this.listeattaques[refAttaque];

		var puissance, effet, categorie;
		
		puissance = listeAttaque.impact;
		effet = listeAttaque.type;
		categorie = listeAttaque.espece;

		
		// Caractéristiques de l'attaque

		var att, def, pui, cm;
		if(effet == "atqP"){
			att = this.atk;
			def = cible.defense;
		}else{
			att = this.Satk;
			def = cible.Sdefense;
		}
			
		pui = puissance;
			
		// On gère le cas où l'attaque peut échouer
		if(Math.random() >= 0.1){
			var power = true;
			if(typeof(listeAttaque.action) == "function"){
				power = listeAttaque.action(this, cible);
			}
			console.log(listeAttaque.nom+":", listeAttaque);
			if(power){
				// Cm (coef multiplicateur) en fonction des coups super efficaces
				cm = coefMultiplicateur(categorie, this, cible);
				if(cm != 0){
					var degats = Math.round(((42*att*pui)/(def*50)+2)*cm) + Math.round(Math.random()*10);
				}else{
					var degats = Math.round(((42*att*pui)/(def*50)+2)*cm);
				}
				cible.vie -= degats;
			}
		}else{
			infoboxEcran(this.nom+ " a raté son attaque !");
		}

		
		// Verifier la vie
		if(cible.vie <= 0){
			cible.vie = 0;
			attaquant = this;
			$('#conteneur').fadeToggle(500, function(){
				var image = $('#gagnant img');
				function vainqueur(creature){
					$('#gagnant .gagnantDresseur').text("Le gagnant est "+creature.dresseur+" avec");
					$('#gagnant .gagnantNom').text(creature.nom+" !");
					image.attr('src', 'styles/css_pict/pokemon/face/'+creature.iface);
					$('#gagnant').css({'background-color': couleurTypes(creature.categorie[0])});
				}
				if(attaquant.vie > cible.vie){
					vainqueur(attaquant);
				}else{
					vainqueur(cible);
				}
				console.log('Jeu terminé !');		
			});
		}


		// Affichage
		statut(this, cible);
		tour();
		statut(cible, this);
		affichageGraphique(cible, this);

		console.log("Puissance: "+puissance);
		console.log("Effet: "+effet);
		console.log("Type de l'attaque: "+categorie);
		console.log("Cm: "+cm);
		console.log(creature1);
		console.log(creature2);
	}

	creature.prototype.affichageAttaques = function(slot, cible){
		var attaquant = this;

		for(var i = 0; i <= 3; i++){
			var attaqueCourante = this.listeattaques[i];
			$(slot+' li:eq('+i+') a').text(attaqueCourante.nom);
			$(slot+' li:eq('+i+') .ppn').text(attaqueCourante.pp);
			$(slot+' li:eq('+i+') .ppt').text(attaqueCourante.pp);
			$(slot+' li:eq('+i+')').css({'background-color': couleurTypes(attaqueCourante.espece)});
			
			// La valeur des attaques
			$(slot+' li:eq('+i+')').attr("data-root", i);
			

			// Evenement lié à l'attaque
			function attaquer(attaquant, defenseur, pp, bouton){
				console.log('Attaquant: '+attaquant.nom);
				console.log('Receveur: '+defenseur.nom);
				var boutonAtk = bouton.getAttribute('data-root');
				if(pp > 0){
					attaquant.attaque(defenseur, boutonAtk);
					// Après l'attaque, inverser le tour
				}else{
					infoboxEcran('Vous n\'avez plus de PP');
				}
			}
			var action = attaqueCourante.action;


			$(slot+' li:eq('+i+')').click(function(){
				// Test des pp en priorité
				pp = parseInt($(this).find($('.ppn')).text());
				if(pp > 0){ pp--; }
				$(this).find($('.ppn')).text(""+pp);

				// This réfère au bouton et non à l'objet
				attaquer(attaquant, cible, pp, this);

				console.log('Fin d\'attaque');
			});
		}
	}

	creature.prototype.soin = function(points){
		this.vie += points;
	}

	/*---------------------------------------------*\
		Mise en route
	\*---------------------------------------------*/
	// Instanciation
	function lancement(placeliste){
		var hasardTour = Math.round(Math.random());
		//hasardTour = 0;
		if(hasardTour == 0){
			creature1 = new creature("J1", pokemons.evo3[placeliste[0]]);
			creature2 = new creature("J2", pokemons.evo3[placeliste[1]]);
		}else{
			creature1 = new creature("J2", pokemons.evo3[placeliste[1]]);
			creature2 = new creature("J1", pokemons.evo3[placeliste[0]]);
		}
	
		pokemons = null; delete pokemons; // Supression de la BDD
		console.log(creature1); console.log(creature2);

		// Affichage des attaques
		creature1.affichageAttaques("#pj1", creature2);
		creature2.affichageAttaques("#pj2", creature1);

		// Affichage du statut et des monstres
		statut(creature1, creature2);
		affichageGraphique(creature1, creature2);
	}
	
	/*---------------------------------------------*\
		Selection
	\*---------------------------------------------*/
	var placeliste = ["?", "?"];
	for (var i = 0; i < pokemons.evo3.length; i++){
		var bete = pokemons.evo3[i];
		var div = $('<div/>');
		div.appendTo('#listePokemons');
		div.attr('class', 'listepkmnsolo');
		div.attr('data-numero', i);
		div.css({'background-color': couleurTypes(bete.categorie[0])});
		var img = $('<img/>');
		img.appendTo(div);
		img.attr('src', 'styles/css_pict/pokemon/miniatures/'+bete.img_min+'.png');
		var texte = $('<p/>');
		texte.appendTo(div);
		texte.text(bete.nom);

		div.click(function(){
			var chemin = this.getAttribute('data-numero');
			if($('#selectionPanel p').text() == "Dresseur 1"){
				$('#selectionPanel p').text('Dresseur 2');
				placeliste[0] = chemin;
			}else{
				placeliste[1] = chemin;
				$('#selectionBox').remove();
				$('#ecrinfos').fadeOut(0);
				lancement(placeliste);
			}
		});
	};

	/*---------------------------------------------*\
		Audio
	\*---------------------------------------------*/
	var audio = new Audio('musique/pkmn.3gp');

	$('#audioControl').click(function(){
		if(!audio.paused){
			audio.pause();
			$(this).find('img').attr('src', 'musique/images/play.png');
		}else{
			audio.play();
			$(this).find('img').attr('src', 'musique/images/pause.png');
		}
	});

});