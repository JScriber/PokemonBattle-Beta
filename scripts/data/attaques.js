var Dtatk = {
	/*------------------------------*\
		EAU
	\*------------------------------*/
	'eau':{
		'hydrocanon':{
			'nom':'Hydrocanon',
			'espece':'eau',
			'pp':5,
			'impact':110,
			'type':'atqS'
		},
		'ecume':{
			'nom':'Écume',
			'espece':'eau',
			'pp':30,
			'impact':40,
			'type':'atqS'
		},
		'hydroblast':{
			'nom':'Hydroblast',
			'espece':'eau',
			'pp':5,
			'impact':150,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		FEU
	\*------------------------------*/
	'feu':{
		'flammeche':{
			'nom':'Flammèche',
			'espece':'feu',
			'pp':40,
			'impact':90,
			'type':'atqS'
		},
		'danseFlammes':{
			'nom':'Danse-flammes',
			'espece':'feu',
			'pp':50,
			'impact':20,
			'type':'atqS',
			action:function(atk, def){
				changementsStats(atk, 'up', 6);
				atk.Sdefense = atk.Sdefense+200;
				atk.defense = atk.defense+140;
				return false
			}
		},
		'lanceFlammes':{
			'nom':'Lance-flammes',
			'espece':'feu',
			'pp':25,
			'impact':40,
			'type':'atqS'
		},
		'crocsFeu':{
			'nom':'Crocs Feu',
			'espece':'feu',
			'pp':15,
			'impact':65,
			'type':'atqP'
		}
	},
	/*------------------------------*\
		PLANTE
	\*------------------------------*/
	'plante':{
		'vampigraine':{
			'nom':'Vampigraine',
			'espece':'plante',
			'pp':40,
			'impact':150,
			'type':'atqS'
		},
		'tempeteVerte':{
			'nom':'Tempête verte',
			'espece':'plante',
			'pp':5,
			'impact':200,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		NORMAL
	\*------------------------------*/
	'normal':{
		'coudKrane':{
			'nom':'Coud\'Krâne',
			'espece':'normal',
			'pp':10,
			'impact':130,
			'type':'atqP'
		},
		'charge':{
			'nom':'Charge',
			'espece':'normal',
			'pp':30,
			'impact':60,
			'type':'atqP'
		},
		'belier':{
			'nom':'Bélier',
			'espece':'normal',
			'pp':20,
			'impact':90,
			'type':'atqP'
		},
		'megaphone':{
			'nom':'Mégaphone',
			'espece':'normal',
			'pp':10,
			'impact':90,
			'type':'atqS'
		},
		'triplattaque':{
			'nom':'Triplattaque',
			'espece':'normal',
			'pp':10,
			'impact':80,
			'type':'atqS'
		},
		'griffe':{
			'nom':'Griffe',
			'espece':'normal',
			'pp':35,
			'impact':40,
			'type':'atqP'
		},
		'mania':{
			'nom':'Mania',
			'espece':'normal',
			'pp':10,
			'impact':120,
			'type':'atqP'
		},
		'vengeance':{
			'nom':'Vengeance',
			'espece':'normal',
			'pp':5,
			'impact':70,
			'type':'atqP'
		},
		'soin':{
			'nom':'Soin',
			'espece':'normal',
			'pp':10,
			'impact':0,
			'type':'autre',
			action:function(atk, def){
				if(atk.vie == atk.vieancrer){
					infoboxEcran('Vos PV sont déjà au max');
				}else{
					changementsStats(atk, 'up', 7);
				}
				var pourcentage = Math.floor(Math.random()*20)+20;
				atk.vie += Math.round(pourcentage*atk.vieancrer/100);
				if(atk.vie > atk.vieancrer){
					atk.vie = atk.vieancrer;
				}
				return false
			}
		}
	},
	/*------------------------------*\
		VOL
	\*------------------------------*/
	'vol':{
		'areopique':{
			'nom':'Aéropique',
			'espece':'vol',
			'pp':20,
			'impact':60,
			'type':'atqP'
		},
		'rapace':{
			'nom':'Rapace',
			'espece':'vol',
			'pp':15,
			'impact':120,
			'type':'atqP',
			action:function(atk, def){
				changementsStats(atk, 'down', 7);
				atk.vie = atk.vie-Math.round(25*atk.vieancrer/100);
				return true
			}
		}
	},
	/*------------------------------*\
		COMBAT
	\*------------------------------*/
	'combat':{
		'casseBrique':{
			'nom':'Casse-brique',
			'espece':'combat',
			'pp':30,
			'impact':60,
			'type':'atqP'
		},
		'plaquage':{
			'nom':'Plaquage',
			'espece':'combat',
			'pp':50,
			'impact':50,
			'type':'atqP'
		},
		'poingKarate':{
			'nom':'Poing-Karaté',
			'espece':'combat',
			'pp':25,
			'impact':50,
			'type':'atqP'
		},
		'coupCroix':{
			'nom':'Coup-Croix',
			'espece':'combat',
			'pp':5,
			'impact':100,
			'type':'atqP'
		},
		'closeCombat':{
			'nom':'Close Combat',
			'espece':'combat',
			'pp':5,
			'impact':120,
			'type':'atqP'
		},
		'martoPoing':{
			'nom':'Marto-Poing',
			'espece':'combat',
			'pp':10,
			'impact':100,
			'type':'atqP'
		}
	},
	/*------------------------------*\
		GLACE
	\*------------------------------*/
	'glace':{
		'stalagtite':{
			'nom':'Stalagtite',
			'espece':'glace',
			'pp':30,
			'impact':25,
			'type':'atqP'
		},
		'ventGlace':{
			'nom':'Vent Glace',
			'espece':'glace',
			'pp':15,
			'impact':55,
			'type':'atqS'
		},
		'laserGlace':{
			'nom':'Laser Glace',
			'espece':'glace',
			'pp':10,
			'impact':90,
			'type':'atqS'
		},
		'blizzard':{
			'nom':'Blizzard',
			'espece':'glace',
			'pp':5,
			'impact':110,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		ELECTRIC
	\*------------------------------*/
	'electric':{
		'eclairFou':{
			'nom':'Éclair Fou',
			'espece':'electric',
			'pp':15,
			'impact':90,
			'type':'atqP'
		},
		'coudJus':{
			'nom':'Coup d\'Jus',
			'espece':'electric',
			'pp':15,
			'impact':80,
			'type':'atqS'
		},
		'crocsEclair':{
			'nom':'Crocs Éclair',
			'espece':'electric',
			'pp':15,
			'impact':65,
			'type':'atqP'
		},
		'fatalFoudre':{
			'nom':'Fatal-Foudre',
			'espece':'electric',
			'pp':10,
			'impact':110,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		PSY
	\*------------------------------*/
	'psy':{
		'chocMental':{
			'nom':'Choc Mental',
			'espece':'psy',
			'pp':25,
			'impact':50,
			'type':'atqS'
		},
		'rafalePsy':{
			'nom':'Rafale Psy',
			'espece':'psy',
			'pp':20,
			'impact':65,
			'type':'atqS'
		},
		'coupePsycho':{
			'nom':'Coupe Psycho',
			'espece':'psy',
			'pp':20,
			'impact':70,
			'type':'atqS'
		},
		'psyko':{
			'nom':'Psyko',
			'espece':'psy',
			'pp':10,
			'impact':90,
			'type':'atqS'
		},
		'psykoudBoul':{
			'nom':'Psykoud\'Boul',
			'espece':'psy',
			'pp':15,
			'impact':80,
			'type':'atqP'
		}
	},
	/*------------------------------*\
		SPECTRE
	\*------------------------------*/
	'spectre':{
		'etonnement':{
			'nom':'Étonnement',
			'espece':'spectre',
			'pp':15,
			'impact':30,
			'type':'atqP'
		},
		'ballombre':{
			'nom':'Ball\'Ombre',
			'espece':'spectre',
			'pp':15,
			'impact':80,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		TENEBRE
	\*------------------------------*/
	'tenebre':{
		'morsure':{
			'nom':'Morsure',
			'espece':'tenebre',
			'pp':25,
			'impact':60,
			'type':'atqP'
		},
		'vibrobscur':{
			'nom':'Vibrobscur',
			'espece':'tenebre',
			'pp':15,
			'impact':80,
			'type':'atqS'
		}
	},
	/*------------------------------*\
		SOL
	\*------------------------------*/
	'sol':{
		'pietisol':{
			'nom':'Piétisol',
			'espece':'sol',
			'pp':20,
			'impact':60,
			'type':'atqP'
		},
		'seisme':{
			'nom':'Séisme',
			'espece':'sol',
			'pp':10,
			'impact':100,
			'type':'atqP'
		}
	},
	/*------------------------------*\
		ROCHE
	\*------------------------------*/
	'roche':{
		'pouvoirAntique':{
			'nom':'Pouvoir Antique',
			'espece':'roche',
			'pp':5,
			'impact':60,
			'type':'atqS'
		},
		'fracassTete':{
			'nom':'Fracass\'Tête',
			'espece':'roche',
			'pp':5,
			'impact':150,
			'type':'atqP',
			action:function(atk, def){
				changementsStats(atk, 'down', 7);
				atk.vie -= Math.round(35*atk.vieancrer/100);
				return true
			}
		}
	},
	/*------------------------------*\
		ACIER
	\*------------------------------*/
	'acier':{
		'luminocanon':{
			'nom':'Luminocanon',
			'espece':'acier',
			'pp':10,
			'impact':80,
			'type':'atqS',
			action:function(atk, def){
				if(Math.random() <= 0.4){
					def.Sdefense -= Math.round(10*def.Sdefense/100);
					changementsStats(def, 'down', 4);
				}
				return true
			}
		}
	},
	/*------------------------------*\
		DRAGON
	\*------------------------------*/
	'dragon':{
		'dracogriffe':{
			'nom':'Dracogriffe',
			'espece':'dragon',
			'pp':15,
			'impact':80,
			'type':'atqP'
		},
		'dracochoc':{
			'nom':'Dracochoc',
			'espece':'dragon',
			'pp':10,
			'impact':85,
			'type':'atqS'
		},
		'dracosouffle':{
			'nom':'Dracosouffle',
			'espece':'dragon',
			'pp':20,
			'impact':60,
			'type':'atqS'
		},
		'dracometeor':{
			'nom':'Draco Météor',
			'espece':'dragon',
			'pp':5,
			'impact':130,
			'type':'atqS',
			action:function(atk, def){
				changementsStats(atk, 'down', 3);
				atk.Satk = atk.Satk-(30*atk.Satk/100);
				return true
			}
		}
	}
}