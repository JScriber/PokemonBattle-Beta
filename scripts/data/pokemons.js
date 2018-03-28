var pokemons = {
	'evo3':[
		// Tortank
		{
				'nom':'Tortank',
				'img_dev':'tortank',
				'img_bak':'tortank_dos',
				'img_min': 'tortank_min',
				'position':[
					{
						'bottom':'-42px',
						'left':'9px',
						'height':'220px',
						'width':'295px'
					},
					{
						'top':'64px',
						'right':'26px',
						'height':'180px',
						'width':'159px'
					}
				],
				'categorie':['eau'],
				'poid':'85,5kg',
				'taille':'1m60',
				'statistiques': {
					'PV':362,
					'Attaque':291,
					'Defense':328,
					'Att_spe':295,
					'Def_spe':339,
					'vitesse':280
				},
				'attaques':[
					Dtatk.normal.coudKrane,
					Dtatk.eau.hydrocanon,
					Dtatk.eau.ecume,
					Dtatk.acier.luminocanon
				]
		},
		// Dracaufeu
		{
				'nom':'Dracaufeu',
				'img_dev':'dracaufeu',
				'img_bak':'dracaufeu_dos',
				'img_min': 'dracaufeu_min',
				'position':[
					{
						'bottom':'0px',
						'left':'-100px',
						'height':'350px',
						'width':'520px'
					},
					{
						'top':'2px',
						'right':'-10px',
						'height':'180px',
						'width':'230px'
					}
				],
				'categorie':['feu', 'vol'],
				'poid':'90,5kg',
				'taille':'1m70',
				'statistiques': {
					'PV':360,
					'Attaque':293,
					'Defense':280,
					'Att_spe':348,
					'Def_spe':295,
					'vitesse':328
				},
				'attaques':[
					Dtatk.feu.flammeche,
					Dtatk.feu.danseFlammes,
					Dtatk.feu.lanceFlammes,
					Dtatk.combat.casseBrique
				]
		},
		// Florizarre
		{
				'nom':'Florizarre',
				'img_dev':'florizarre',
				'img_bak':'florizarre_dos',
				'img_min': 'florizarre_min',
				'position':[
					{
						'bottom':'-42px',
						'left':'9px',
						'height':'220px',
						'width':'295px'
					},
					{
						'top':'80px',
						'right':'5px',
						'height':'150px',
						'width':'185px'
					}
				],
				'categorie':['plante'],
				'poid':'100kg',
				'taille':'2m',
				'statistiques': {
					'PV':364,
					'Attaque':289,
					'Defense':291,
					'Att_spe':328,
					'Def_spe':328,
					'vitesse':284
				},
				'attaques':[
					Dtatk.plante.vampigraine,
					Dtatk.combat.plaquage,
					Dtatk.plante.tempeteVerte,
					Dtatk.normal.charge
				]
		},
		// Carchacrok
		{
				'nom':'Carchacrok',
				'img_dev':'carchacrok',
				'img_bak':'carchacrok_dos',
				'img_min':'carchacrok_min',
				'position':[
					{
						'bottom':'0px',
						'left':'-10px',
						'height':'200px',
						'width':'330px'
					},
					{
						'top':'45px',
						'right':'-5px',
						'height':'180px',
						'width':'190px'
					}
				],
				'categorie':['dragon', 'sol'],
				'poid':'95kg',
				'taille':'1m90',
				'statistiques': {
					'PV':420,
					'Attaque':394,
					'Defense':317,
					'Att_spe':284,
					'Def_spe':295,
					'vitesse':333
				},
				'attaques':[
					Dtatk.dragon.dracogriffe,
					Dtatk.normal.belier,
					Dtatk.sol.seisme,
					Dtatk.dragon.dracometeor
				]
		},
		// Luxray
		{
				'nom':'Luxray',
				'img_dev':'luxray',
				'img_bak':'luxray_dos',
				'img_min':'luxray_min',
				'position':[
					{
						'bottom':'0px',
						'left':'-10px',
						'height':'200px',
						'width':'330px'
					},
					{
						'top':'55px',
						'right':'30px',
						'height':'180px',
						'width':'140px'
					}
				],
				'categorie':['electric'],
				'poid':'42kg',
				'taille':'1m40',
				'statistiques': {
					'PV':364,
					'Attaque':372,
					'Defense':282,
					'Att_spe':317,
					'Def_spe':282,
					'vitesse':262
				},
				'attaques':[
					Dtatk.electric.eclairFou,
					Dtatk.electric.coudJus,
					Dtatk.electric.crocsEclair,
					Dtatk.tenebre.morsure
				]
		},
		// Alakazam
		{
				'nom':'Alakazam',
				'img_dev':'alakazam',
				'img_bak':'alakazam_dos',
				'img_min':'alakazam_min',
				'position':[
					{
						'bottom':'-34px',
						'left':'25px',
						'height':'250px',
						'width':'265px'
					},
					{
						'top':'55px',
						'right':'30px',
						'height':'180px',
						'width':'155px'
					}
				],
				'categorie':['psy'],
				'poid':'48kg',
				'taille':'1m50',
				'statistiques': {
					'PV':314,
					'Attaque':218,
					'Defense':207,
					'Att_spe':405,
					'Def_spe':317,
					'vitesse':372
				},
				'attaques':[
					Dtatk.normal.soin,
					Dtatk.psy.rafalePsy,
					Dtatk.psy.coupePsycho,
					Dtatk.psy.psyko
				]
		},
		// Trioxhydre
		{
				'nom':'Trioxhydre',
				'img_dev':'trioxhydre',
				'img_bak':'trioxhydre_dos',
				'img_min':'trioxhydre_min',
				'position':[
					{
						'bottom':'0px',
						'left':'-15px',
						'height':'310px',
						'width':'390px'
					},
					{
						'top':'10px',
						'right':'-15px',
						'height':'180px',
						'width':'220px'
					}
				],
				'categorie':['tenebre', 'dragon'],
				'poid':'160kg',
				'taille':'1m80',
				'statistiques': {
					'PV':388,
					'Attaque':339,
					'Defense':306,
					'Att_spe':383,
					'Def_spe':306,
					'vitesse':324
				},
				'attaques':[
					Dtatk.normal.megaphone,
					Dtatk.dragon.dracosouffle,
					Dtatk.dragon.dracochoc,
					Dtatk.dragon.dracometeor
				]
		},
		// Sorbouboul
		{
				'nom':'Sorbouboul',
				'img_dev':'sorbouboul',
				'img_bak':'sorbouboul_dos',
				'img_min':'sorbouboul_min',
				'position':[
					{
						'bottom':'-5px',
						'left':'23px',
						'height':'200px',
						'width':'210px'
					},
					{
						'top':'58px',
						'right':'40px',
						'height':'180px',
						'width':'120px'
					}
				],
				'categorie':['glace'],
				'poid':'57.5kg',
				'taille':'1m30',
				'statistiques': {
					'PV':346,
					'Attaque':317,
					'Defense':295,
					'Att_spe':350,
					'Def_spe':317,
					'vitesse':282
				},
				'attaques':[
					Dtatk.glace.stalagtite,
					Dtatk.glace.ventGlace,
					Dtatk.glace.laserGlace,
					Dtatk.acier.luminocanon
				]
		},
		// Charkos
		{
				'nom':'Charkos',
				'img_dev':'charkos',
				'img_bak':'charkos_dos',
				'img_min':'charkos_min',
				'position':[
					{
						'bottom':'-5px',
						'left':'8px',
						'height':'200px',
						'width':'285px'
					},
					{
						'top':'65px',
						'right':'48px',
						'height':'180px',
						'width':'125px'
					}
				],
				'categorie':['roche'],
				'poid':'102.5kg',
				'taille':'1m60',
				'statistiques': {
					'PV':398,
					'Attaque':471,
					'Defense':240,
					'Att_spe':250,
					'Def_spe':218,
					'vitesse':236
				},
				'attaques':[
					Dtatk.normal.belier,
					Dtatk.roche.pouvoirAntique,
					Dtatk.psy.psykoudBoul,
					Dtatk.roche.fracassTete
				]
		},
		// Triopikeur
		{
				'nom':'Triopikeur',
				'img_dev':'triopikeur',
				'img_bak':'triopikeur_dos',
				'img_min':'triopikeur_min',
				'position':[
					{
						'bottom':'-5px',
						'left':'45px',
						'height':'120px',
						'width':'210px'
					},
					{
						'top':'106px',
						'right':'48px',
						'height':'180px',
						'width':'115px'
					}
				],
				'categorie':['sol'],
				'poid':'33.3kg',
				'taille':'0m70',
				'statistiques': {
					'PV':274,
					'Attaque':284,
					'Defense':218,
					'Att_spe':218,
					'Def_spe':262,
					'vitesse':372
				},
				'attaques':[
					Dtatk.normal.triplattaque,
					Dtatk.spectre.etonnement,
					Dtatk.sol.pietisol,
					Dtatk.sol.seisme
				]
		},
		// Colossinge
		{
				'nom':'Colossinge',
				'img_dev':'colossinge',
				'img_bak':'colossinge_dos',
				'img_min':'colossinge_min',
				'position':[
					{
						'bottom':'-5px',
						'left':'45px',
						'height':'180px',
						'width':'260px'
					},
					{
						'top':'80px',
						'right':'40px',
						'height':'180px',
						'width':'140px'
					}
				],
				'categorie':['combat'],
				'poid':'32kg',
				'taille':'1m00',
				'statistiques': {
					'PV':334,
					'Attaque':339,
					'Defense':240,
					'Att_spe':240,
					'Def_spe':262,
					'vitesse':317
				},
				'attaques':[
					Dtatk.normal.griffe,
					Dtatk.combat.poingKarate,
					Dtatk.combat.coupCroix,
					Dtatk.normal.mania
				]
		},
		// Étouraptor
		{
				'nom':'Étouraptor',
				'img_dev':'etouraptor',
				'img_bak':'etouraptor_dos',
				'img_min':'etouraptor_min',
				'position':[
					{
						'bottom':'0px',
						'left':'-25px',
						'height':'340px',
						'width':'520px'
					},
					{
						'top':'-30px',
						'right':'-70px',
						'height':'300px',
						'width':'320px'
					}
				],
				'categorie':['normal','vol'],
				'poid':'24.9kg',
				'taille':'1m20',
				'statistiques': {
					'PV':374,
					'Attaque':372,
					'Defense':262,
					'Att_spe':218,
					'Def_spe':240,
					'vitesse':328
				},
				'attaques':[
					Dtatk.vol.areopique,
					Dtatk.combat.closeCombat,
					Dtatk.vol.rapace,
					Dtatk.normal.vengeance
				]
		},
		// Ectoplasma
		{
				'nom':'Ectoplasma',
				'img_dev':'ectoplasma',
				'img_bak':'ectoplasma_dos',
				'img_min':'ectoplasma_min',
				'position':[
					{
						'bottom':'-60px',
						'left':'35px',
						'height':'210px',
						'width':'200px'
					},
					{
						'top':'84px',
						'right':'36px',
						'height':'300px',
						'width':'130px'
					}
				],
				'categorie':['spectre','poison'],
				'poid':'40.5kg',
				'taille':'1m50',
				'statistiques': {
					'PV':324,
					'Attaque':251,
					'Defense':240,
					'Att_spe':394,
					'Def_spe':273,
					'vitesse':350
				},
				'attaques':[
					Dtatk.psy.psyko,
					Dtatk.spectre.ballombre,
					Dtatk.tenebre.vibrobscur,
					Dtatk.electric.fatalFoudre
				]
		},
		// Laggron
		{
				'nom':'Laggron',
				'img_dev':'laggron',
				'img_bak':'laggron_dos',
				'img_min':'laggron_min',
				'position':[
					{
						'bottom':'-30px',
						'left':'30px',
						'height':'210px',
						'width':'300px'
					},
					{
						'top':'60px',
						'right':'26px',
						'height':'300px',
						'width':'170px'
					}
				],
				'categorie':['eau','sol'],
				'poid':'81kg',
				'taille':'1m50',
				'statistiques': {
					'PV':404,
					'Attaque':350,
					'Defense':306,
					'Att_spe':295,
					'Def_spe':306,
					'vitesse':240
				},
				'attaques':[
					Dtatk.sol.seisme,
					Dtatk.eau.hydrocanon,
					Dtatk.glace.blizzard,
					Dtatk.eau.hydroblast
				]
		},
		// Métalosse
		{
				'nom':'Métalosse',
				'img_dev':'metalosse',
				'img_bak':'metalosse_dos',
				'img_min':'metalosse_min',
				'position':[
					{
						'bottom':'-75px',
						'left':'-24px',
						'height':'210px',
						'width':'400px'
					},
					{
						'top':'90px',
						'right':'0px',
						'height':'300px',
						'width':'215px'
					}
				],
				'categorie':['acier','psy'],
				'poid':'550kg',
				'taille':'1m60',
				'statistiques': {
					'PV':364,
					'Attaque':405,
					'Defense':394,
					'Att_spe':317,
					'Def_spe':306,
					'vitesse':262
				},
				'attaques':[
					Dtatk.psy.psykoudBoul,
					Dtatk.combat.martoPoing,
					Dtatk.sol.seisme,
					Dtatk.psy.psyko
				]
		}
	],
	'legendaire':[

	]
}
Dtatk = null;
delete Dtatk;
