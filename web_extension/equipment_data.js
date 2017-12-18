/* ------------------------------------------------------------------------------------------------------------------
   The reference data covering planet and scrap price on all equipment and ships present in a Player Owned Starbase
------------------------------------------------------------------------------------------------------------------ */

const pricing_data = {
//
// Union Equipment
//-------------------
	"ECCM Jammer":{ "rrp":40000, "scrap":20000 },
	"Key of Sheppard":{ "rrp":7000000, "scrap":3500000 },
	"Tiny Shield Generator":{ "rrp":1000, "scrap":500 },
	"Q-Small Shield Generator":{ "rrp":10000, "scrap":5000 },
	"Q-Standard Shield Generator":{ "rrp":180000, "scrap":90000 },
	"Q-Medium Shield Generator":{ "rrp":400000, "scrap":200000 },
	"Q-Large Shield Generator":{ "rrp":860000, "scrap":430000 },
	"Huge Shield Generator":{ "rrp":820000, "scrap":410000 },
	"Q-Huge Shield Generator":{ "rrp":980000, "scrap":490000 },
	"L-Huge Shield Generator":{ "rrp":1100000, "scrap":550000 },
	"LQ-Large Shield Generator":{ "rrp":1160000, "scrap":580000 },
	"LQ-Huge Shield Generator":{ "rrp":1290000, "scrap":645000 },
	"Ebidium Armor":{ "rrp":2990000, "scrap":1495000 },
	"Strong ECM Jammer":{ "rrp":280000, "scrap":140000 },
	"Weak Gas Flux Capacitor":{ "rrp":340000, "scrap":170000 },
	"Weak Energy Flux Capacitor":{ "rrp":460000, "scrap":230000 },
	"Strong Gas Flux Capacitor":{ "rrp":980000, "scrap":490000 },
	"Strong Energy Flux Capacitor":{ "rrp":1400000, "scrap":700000 },
	"Cloaking Device":{ "rrp":200000, "scrap":100000 },
	"Single-Wave Interferometer":{ "rrp":60000, "scrap":30000 },
	"Dual-Wave Interferometer":{ "rrp":160000, "scrap":80000 },
	"Software Upgrade - Gyro Stabilizer I":{ "rrp":860000, "scrap":430000 },
	"Software Upgrade - Gyro Stabilizer II":{ "rrp":2400000, "scrap":1200000 },
	"Small Missile Battery":{ "rrp":750000, "scrap":325000 },
	"Large Missile Battery":{ "rrp":3000000, "scrap":1500000 },
//
// Union Ships
//-------------------
	"Rustfire":{ "rrp":32500, "scrap":16250 },
	"Marauder":{ "rrp":200000, "scrap":100000 },
	"Junker IV":{ "rrp":780000, "scrap":390000 },
	"Slider":{ "rrp":1330000, "scrap":665000 },
	"El Padre":{ "rrp":1650000, "scrap":825000 },
	"Chitin":{ "rrp":2310000, "scrap":1155000 },
	"Horpor":{ "rrp":5050000, "scrap":2525000 },
	"Scorpion":{ "rrp":15125000, "scrap":7562500 },
//
// Federation Equipment
//-------------------
	"Enhanced Fusion Drive":{ "rrp":40000, "scrap":20000 },
	"Enhanced Anti-Matter Drive":{ "rrp":184000, "scrap":92000 },
	"Enhanced Interphased Drive":{ "rrp":800000, "scrap":400000 },
//
// Federation Ships
//-------------------
	"Wasp":{ "rrp":20000, "scrap":10000 },
	"Adder":{ "rrp":35000, "scrap":17500 },
	"Thunderbird":{ "rrp":121000, "scrap":60500 },
	"Viper Defence Craft":{ "rrp":183000, "scrap":91500 },
	"Babel Transporter":{ "rrp":532000, "scrap":266000 },
	"Piranha":{ "rrp":566000, "scrap":283000 },
	"Nighthawk":{ "rrp":2000000, "scrap":1000000 },
	"Nighthawk Deluxe":{ "rrp":3000000, "scrap":1500000 },
	"Mantis":{ "rrp":3300000, "scrap":1650000 },
	"Extender":{ "rrp":4100000, "scrap":2050000 },
	"Gauntlet":{ "rrp":8900000, "scrap":4450000 },
	"Doomstar":{ "rrp":34750000, "scrap":17375000 },
	"War Nova":{ "rrp":105000000, "scrap":52500000 },
//
// Empire Equipment
//-------------------
	"140 MW Particle Laser":{ "rrp":1400000, "scrap":700000 },
	"140 MW Light-weight Particle Laser":{ "rrp":2400000, "scrap":1200000 },
	"4 MW Gatling Laser":{ "rrp":180000, "scrap":90000 },
	"4 MW Light-weight Gatling Laser":{ "rrp":510000, "scrap":255000 },
	"6 MW Gatling Laser":{ "rrp":400000, "scrap":200000 },
	"6 MW Light-weight Gatling Laser":{ "rrp":1200000, "scrap":600000 },
	"10 MW Gatling Laser":{ "rrp":720000, "scrap":360000 },
	"10 MW Light-weight Gatling Laser":{ "rrp":2160000, "scrap":1080000 },
	"35 MW Plasma Laser":{ "rrp":2280000, "scrap":1140000 },
	"40 MW Plasma Laser":{ "rrp":2500000, "scrap":1250000 },
	"60 MW Plasma Laser":{ "rrp":8250000, "scrap":4125000 },
	"20 MW Gatling":{ "rrp":2200000, "scrap":1100000 },
	"20 MW Light-weight Gatling":{ "rrp":6600000, "scrap":3300000 },
	"Imperial MO89 Lord Missile":{ "rrp":17500, "scrap":8750 },
	"Imperial G-7 Smartwinder":{ "rrp":1500, "scrap":750 },
	"Imperial A/50 Pogo":{ "rrp":7000, "scrap":3500 },
	"Imperial D/70 Havar":{ "rrp":18000, "scrap":9000 },
	"Imperial Elite Mk.I":{ "rrp":62500, "scrap":31250 },
	"Imperial Elite Mk.II":{ "rrp":62500, "scrap":31250 },
	"King Relon":{ "rrp":1000000, "scrap":500000 },
	"King Kraak":{ "rrp":1500000, "scrap":750000 },
	"Royal Redeemer":{ "rrp":2500000, "scrap":1250000 },
//
// Empire Ships
//-------------------
	"Ficon":{ "rrp":21000, "scrap":10500 },
	"Tyrant":{ "rrp":38500, "scrap":19250 },
	"Spectre":{ "rrp":190000, "scrap":95000 },
	"Shadow Stealth Craft":{ "rrp":310000, "scrap":155000 },
	"Venom":{ "rrp":964000, "scrap":482000 },
	"Constrictor":{ "rrp":1500000, "scrap":750000 },
	"Phantom Advanced Stealth Craft":{ "rrp":2720000, "scrap":1360000 },
	"Dominator":{ "rrp":3650000, "scrap":1825000 },
	"Boa Ultimate Carrier":{ "rrp":8250000, "scrap":4125000 },
	"Mooncrusher":{ "rrp":37900000, "scrap":18950000 },
//
// Neutral Equipment
//-------------------
	"Fuel Scoop":{ "rrp":1800, "scrap":900 },
	"Bussard Ramscoop":{ "rrp":24000, "scrap":12000 },
	"Auto Refueler":{ "rrp":3000, "scrap":1500 },
	"Escape Pod":{ "rrp":10000, "scrap":5000 },
	"Magnetic Scoop":{ "rrp":20000, "scrap":10000 },
	"Ambush Teleporter":{ "rrp":30000, "scrap":15000 },
	"Class I Teleporter":{ "rrp":25000, "scrap":12500 },
	"Class II Teleporter":{ "rrp":60000, "scrap":30000 },
	"Software Upgrade - Map Pack I":{ "rrp":2000, "scrap":1000 },
	"Software Upgrade - Map Pack II":{ "rrp":7000, "scrap":3500 },
	"Software Upgrade - Bounty Link I":{ "rrp":15000, "scrap":7500 },
	"Software Upgrade - Bounty Link II":{ "rrp":150000, "scrap":75000 },
	"Software Upgrade - Bounty Link III":{ "rrp":375000, "scrap":187500 },
	"Nuclear Drive":{ "rrp":4000, "scrap":2000 },
	"Fusion Drive":{ "rrp":20000, "scrap":10000 },
	"Ion Drive":{ "rrp":48000, "scrap":24000 },
	"Anti-Matter Drive":{ "rrp":92000, "scrap":46000 },
	"Hyper Drive":{ "rrp":220000, "scrap":110000 },
	"Interphased Drive":{ "rrp":400000, "scrap":200000 },
	"10 MW Mining Laser":{ "rrp":1000, "scrap":500 },
	"30 MW Mining Laser":{ "rrp":5000, "scrap":2500 },
	"1 MW Impulse Laser":{ "rrp":12000, "scrap":6000 },
	"5 MW Impulse Laser":{ "rrp":28000, "scrap":14000 },
	"1 MW Particle Laser":{ "rrp":86000, "scrap":43000 },
	"4 MW Particle Laser":{ "rrp":210000, "scrap":105000 },
	"4 MW Light-weight Particle Laser":{ "rrp":510000, "scrap":255000 },
	"20 MW Particle Laser":{ "rrp":550000, "scrap":275000 },
	"20 MW Light-weight Particle Laser":{ "rrp":925000, "scrap":462500 },
	"100 MW Particle Laser":{ "rrp":980000, "scrap":490000 },
	"100 MW Light-weight Particle Laser":{ "rrp":2000000, "scrap":1000000 },
	"P80 Sidewinder":{ "rrp":1000, "scrap":500 },
	"KL760 Homing Missile":{ "rrp":2500, "scrap":1250 },
	"LV111 Intelligent Missile":{ "rrp":6000, "scrap":3000 },
	"NN500 Fleet Missile":{ "rrp":16000, "scrap":8000 },
	"NN550 Fleet Missile":{ "rrp":32000, "scrap":16000 },
	"Small Shield Generator":{ "rrp":8000, "scrap":4000 },
	"Standard Shield Generator":{ "rrp":140000, "scrap":70000 },
	"Medium Shield Generator":{ "rrp":320000, "scrap":160000 },
	"Large Shield Generator":{ "rrp":740000, "scrap":370000 },
	"Titanium Armor":{ "rrp":6500, "scrap":3250 },
	"Tritanium Armor":{ "rrp":56000, "scrap":28000 },
	"Zortrium Armor":{ "rrp":290000, "scrap":145000 },
	"Neutronium Armor":{ "rrp":935000, "scrap":467500 },
	"Adamantium Armor":{ "rrp":2870000, "scrap":1435000 },
	"ECM Jammer":{ "rrp":240000, "scrap":120000 },
	"Software Upgrade - Alliance Combat Uplink":{ "rrp":115000, "scrap":57500 },
	"Software Upgrade - Alliance Trade Uplink":{ "rrp":115000, "scrap":57500 },
//
// Neutral Ships
//----------------						
	"Sabre":{ "rrp":15000, "scrap":7500 },
	"Rustclaw":{ "rrp":21500, "scrap":10750 },
	"Interceptor":{ "rrp":74000, "scrap":37000 },
	"Lanner Mini":{ "rrp":382000, "scrap":191000 },
	"Harrier":{ "rrp":420000, "scrap":210000 },
	"Mercury":{ "rrp":426000, "scrap":213000 },
	"Hercules":{ "rrp":1320000, "scrap":660000 },
	"Lanner":{ "rrp":1575000, "scrap":787500 },
	"Hawk":{ "rrp":1700000, "scrap":850000 },
	"Gargantua":{ "rrp":2950000, "scrap":1475000 },
	"Behemoth":{ "rrp":4995000, "scrap":2497500 },
	"Liberator":{ "rrp":16995000, "scrap":8497500 },
	"Leviathan":{ "rrp":45600000, "scrap":22800000 }
};


/* ------------------------------------------------------------------------------------------------------------------
   Breakdown of the resources and quantities required for the equipment
------------------------------------------------------------------------------------------------------------------ */

const item_build_data = {
//
// Union Equipment
//-------------------
	"ECCM Jammer":{"ticks":4,"pertick":[{"qty":2000, "rsrc":"credits"},{"qty":1, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":1, "rsrc":"radioactive_cells"}]},
	"Key of Sheppard":{"ticks":120,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":6, "rsrc":"heavy-plastics"},{"qty":6, "rsrc":"gem-stones"},{"qty":6, "rsrc":"exotic_matter"},{"qty":6, "rsrc":"optical_components"},{"qty":4, "rsrc":"radioactive_cells"}]},
	"Strong ECM Jammer":{"ticks":12,"pertick":[{"qty":10000, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"radioactive_cells"}]},
	"Software Upgrade - Gyro Stabilizer I":{"ticks":24,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":20, "rsrc":"electronics"}]},
	"Software Upgrade - Gyro Stabilizer II":{"ticks":36,"pertick":[{"qty":10000, "rsrc":"credits"},{"qty":12, "rsrc":"energy"},{"qty":40, "rsrc":"electronics"}]},
	"Weak Gas Flux Capacitor":{"ticks":12,"pertick":[{"qty":10000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":6, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"exotic_matter"}]},
	"Weak Energy Flux Capacitor":{"ticks":14,"pertick":[{"qty":10000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":6, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"exotic_matter"}]},
	"Strong Gas Flux Capacitor":{"ticks":20,"pertick":[{"qty":20000, "rsrc":"credits"},{"qty":6, "rsrc":"energy"},{"qty":6, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":3, "rsrc":"exotic_matter"}]},
	"Strong Energy Flux Capacitor":{"ticks":26,"pertick":[{"qty":20000, "rsrc":"credits"},{"qty":6, "rsrc":"energy"},{"qty":6, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":3, "rsrc":"exotic_matter"}]},
	"Cloaking Device":{"ticks":10,"pertick":[{"qty":7500, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":4, "rsrc":"electronics"},{"qty":4, "rsrc":"optical_components"},{"qty":4, "rsrc":"radioactive_cells"}]},
	"Single-Wave Interferometer":{"ticks":6,"pertick":[{"qty":2000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Dual-Wave Interferometer":{"ticks":8,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":5, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":5, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Tiny Shield Generator":{"ticks":1,"pertick":[{"qty":100, "rsrc":"credits"},{"qty":1, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":1, "rsrc":"radioactive_cells"}]},
	"Q-Small Shield Generator":{"ticks":2,"pertick":[{"qty":500, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":1, "rsrc":"electronics"},{"qty":2, "rsrc":"radioactive_cells"}]},
	"Q-Standard Shield Generator":{"ticks":8,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":40, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":14, "rsrc":"radioactive_cells"}]},
	"Q-Medium Shield Generator":{"ticks":14,"pertick":[{"qty":7500, "rsrc":"credits"},{"qty":50, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":20, "rsrc":"radioactive_cells"}]},
	"Q-Large Shield Generator":{"ticks":24,"pertick":[{"qty":12500, "rsrc":"credits"},{"qty":60, "rsrc":"energy"},{"qty":2, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":22, "rsrc":"radioactive_cells"}]},
	"Huge Shield Generator":{"ticks":28,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":70, "rsrc":"energy"},{"qty":3, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":20, "rsrc":"radioactive_cells"}]},
	"Q-Huge Shield Generator":{"ticks":28,"pertick":[{"qty":6000, "rsrc":"credits"},{"qty":70, "rsrc":"energy"},{"qty":3, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":28, "rsrc":"radioactive_cells"}]},
	"L-Huge Shield Generator":{"ticks":32,"pertick":[{"qty":6000, "rsrc":"credits"},{"qty":70, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"},{"qty":20, "rsrc":"radioactive_cells"}]},
	"LQ-Large Shield Generator":{"ticks":26,"pertick":[{"qty":14000, "rsrc":"credits"},{"qty":60, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"},{"qty":22, "rsrc":"radioactive_cells"}]},
	"LQ-Huge Shield Generator":{"ticks":32,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":70, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"},{"qty":28, "rsrc":"radioactive_cells"}]},
	"Ebidium Armor":{"ticks":32,"pertick":[{"qty":65000, "rsrc":"credits"},{"qty":20, "rsrc":"energy"},{"qty":24, "rsrc":"metal"},{"qty":18, "rsrc":"chemical-supplies"},{"qty":20, "rsrc":"gem-stones"}]},
	"Small Missile Battery":{"ticks":20,"pertick":[{"qty":5000, "rsrc":"credits"},{"qty":6, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":6, "rsrc":"electronics"},{"qty":20, "rsrc":"heavy-plastics"}]},
	"Large Missile Battery":{"ticks":40,"pertick":[{"qty":15000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":12, "rsrc":"electronics"},{"qty":40, "rsrc":"heavy-plastics"}]},
//
// Federation Equipment
//-------------------
	"Enhanced Fusion Drive":{"ticks":5,"pertick":[{"qty":1250, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":3, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":2, "rsrc":"radioactive_cells"}]},
	"Enhanced Anti-Matter Drive":{"ticks":20,"pertick":[{"qty":2500, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":3, "rsrc":"metal"},{"qty":1, "rsrc":"electronics"},{"qty":3, "rsrc":"radioactive_cells"}]},
	"Enhanced Interphased Drive":{"ticks":42,"pertick":[{"qty":4000, "rsrc":"credits"},{"qty":5, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":6, "rsrc":"radioactive_cells"}]},
//
// Empire Equipment
//-------------------
	'140 MW Particle Laser':{'ticks':34,'pertick':[{'qty':8500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'140 MW Light-weight Particle Laser':{'ticks':50,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'4 MW Gatling Laser':{'ticks':8,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'battleweapon_parts'}]},
	'4 MW Light-weight Gatling Laser':{'ticks':20,'pertick':[{'qty':15000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'battleweapon_parts'}]},
	'6 MW Gatling Laser':{'ticks':16,'pertick':[{'qty':8500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'6 MW Light-weight Gatling Laser':{'ticks':40,'pertick':[{'qty':10000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'10 MW Gatling Laser':{'ticks':24,'pertick':[{'qty':7500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'10 MW Light-weight Gatling Laser':{'ticks':56,'pertick':[{'qty':9000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'35 MW Plasma Laser':{'ticks':60,'pertick':[{'qty':9000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'40 MW Plasma Laser':{'ticks':62,'pertick':[{'qty':9000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'60 MW Plasma Laser':{'ticks':120,'pertick':[{'qty':20000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':4, 'rsrc':'battleweapon_parts'}]},
	'20 MW Gatling':{'ticks':40,'pertick':[{'qty':15000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':4, 'rsrc':'battleweapon_parts'}]},
	'20 MW Light-weight Gatling':{'ticks':90,'pertick':[{'qty':25000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':4, 'rsrc':'battleweapon_parts'}]},
	'Imperial MO89 Lord Missile':{'ticks':3,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'}]},
	'Imperial G-7 Smartwinder':{'ticks':1,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'}]},
	'Imperial A/50 Pogo':{'ticks':2,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'}]},
	'Imperial D/70 Havar':{'ticks':3,'pertick':[{'qty':750, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':4, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'}]},
	'Imperial Elite Mk.I':{'ticks':6,'pertick':[{'qty':3000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':3, 'rsrc':'electronics'}]},
	'Imperial Elite Mk.II':{'ticks':6,'pertick':[{'qty':2500, 'rsrc':'credits'},{'qty':3, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':3, 'rsrc':'electronics'}]},
	'King Relon':{'ticks':20,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':6, 'rsrc':'energy'},{'qty':10, 'rsrc':'metal'},{'qty':14, 'rsrc':'electronics'}]},
	'King Kraak':{'ticks':24,'pertick':[{'qty':18000, 'rsrc':'credits'},{'qty':6, 'rsrc':'energy'},{'qty':14, 'rsrc':'metal'},{'qty':16, 'rsrc':'electronics'}]},
	'Royal Redeemer':{'ticks':36,'pertick':[{'qty':15000, 'rsrc':'credits'},{'qty':8, 'rsrc':'energy'},{'qty':16, 'rsrc':'metal'},{'qty':16, 'rsrc':'electronics'}]},
//
// Neutral Equipment
//----------------
	'10 MW Mining Laser':{'ticks':1,'pertick':[{'qty':150, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':1, 'rsrc':'optical_components'}]},
	'30 MW Mining Laser':{'ticks':1,'pertick':[{'qty':2000, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':1, 'rsrc':'optical_components'}]},
	'1 MW Impulse Laser':{'ticks':2,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':1, 'rsrc':'battleweapon_parts'}]},
	'5 MW Impulse Laser':{'ticks':4,'pertick':[{'qty':1500, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':1, 'rsrc':'battleweapon_parts'}]},
	'1 MW Particle Laser':{'ticks':8,'pertick':[{'qty':4500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'battleweapon_parts'}]},
	'4 MW Particle Laser':{'ticks':14,'pertick':[{'qty':3000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'4 MW Light-weight Particle Laser':{'ticks':20,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'20 MW Particle Laser':{'ticks':20,'pertick':[{'qty':7500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'20 MW Light-weight Particle Laser':{'ticks':32,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'100 MW Particle Laser':{'ticks':32,'pertick':[{'qty':9250, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'battleweapon_parts'}]},
	'100 MW Light-weight Particle Laser':{'ticks':48,'pertick':[{'qty':22500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'battleweapon_parts'}]},
	'P80 Sidewinder':{'ticks':1,'pertick':[{'qty':250, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'}]},
	'KL760 Homing Missile':{'ticks':2,'pertick':[{'qty':250, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'}]},
	'LV111 Intelligent Missile':{'ticks':2,'pertick':[{'qty':750, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'}]},
	'NN500 Fleet Missile':{'ticks':3,'pertick':[{'qty':1500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'}]},
	'NN550 Fleet Missile':{'ticks':5,'pertick':[{'qty':1500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':3, 'rsrc':'electronics'}]},
	'Fuel Scoop':{'ticks':1,'pertick':[{'qty':250, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':1, 'rsrc':'electronics'}]},
	'Bussard Ramscoop':{'ticks':2,'pertick':[{'qty':3000, 'rsrc':'credits'},{'qty':16, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':6, 'rsrc':'radioactive_cells'}]},
	'Auto Refueler':{'ticks':1,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':1, 'rsrc':'heavy-plastics'}]},
	'Escape Pod':{'ticks':2,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':1, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':1, 'rsrc':'heavy-plastics'},{'qty':1, 'rsrc':'radioactive_cells'}]},
	'Magnetic Scoop':{'ticks':2,'pertick':[{'qty':3500, 'rsrc':'credits'},{'qty':12, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':4, 'rsrc':'radioactive_cells'}]},
	'Ambush Teleporter':{'ticks':3,'pertick':[{'qty':3000, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':3, 'rsrc':'electronics'},{'qty':1, 'rsrc':'heavy-plastics'},{'qty':4, 'rsrc':'optical_components'}]},
	'ECM Jammer':{'ticks':10,'pertick':[{'qty':10000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':9, 'rsrc':'electronics'},{'qty':1, 'rsrc':'radioactive_cells'}]},
	'Class I Teleporter':{'ticks':2,'pertick':[{'qty':2000, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':5, 'rsrc':'electronics'},{'qty':1, 'rsrc':'heavy-plastics'},{'qty':1, 'rsrc':'optical_components'}]},
	'Class II Teleporter':{'ticks':4,'pertick':[{'qty':4000, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':5, 'rsrc':'electronics'},{'qty':1, 'rsrc':'heavy-plastics'},{'qty':2, 'rsrc':'optical_components'}]},
	'Software Upgrade - Map Pack I':{'ticks':1,'pertick':[{'qty':250, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'electronics'}]},
	'Software Upgrade - Map Pack II':{'ticks':2,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':2, 'rsrc':'electronics'}]},
	'Software Upgrade - Bounty Link I':{'ticks':2,'pertick':[{'qty':2500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'electronics'}]},
	'Software Upgrade - Bounty Link II':{'ticks':8,'pertick':[{'qty':8500, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':6, 'rsrc':'electronics'}]},
	'Software Upgrade - Bounty Link III':{'ticks':14,'pertick':[{'qty':11500, 'rsrc':'credits'},{'qty':6, 'rsrc':'energy'},{'qty':10, 'rsrc':'electronics'}]},
	'Small Shield Generator':{'ticks':2,'pertick':[{'qty':500, 'rsrc':'credits'},{'qty':10, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':1, 'rsrc':'radioactive_cells'}]},
	'Standard Shield Generator':{'ticks':8,'pertick':[{'qty':5000, 'rsrc':'credits'},{'qty':40, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':10, 'rsrc':'radioactive_cells'}]},
	'Medium Shield Generator':{'ticks':14,'pertick':[{'qty':7500, 'rsrc':'credits'},{'qty':50, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':14, 'rsrc':'radioactive_cells'}]},
	'Large Shield Generator':{'ticks':24,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':60, 'rsrc':'energy'},{'qty':2, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':16, 'rsrc':'radioactive_cells'}]},
	'Nuclear Drive':{'ticks':1,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':1, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':1, 'rsrc':'radioactive_cells'}]},
	'Fusion Drive':{'ticks':3,'pertick':[{'qty':1250, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':2, 'rsrc':'radioactive_cells'}]},
	'Ion Drive':{'ticks':8,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':3, 'rsrc':'radioactive_cells'}]},
	'Anti-Matter Drive':{'ticks':12,'pertick':[{'qty':2500, 'rsrc':'credits'},{'qty':2, 'rsrc':'energy'},{'qty':3, 'rsrc':'metal'},{'qty':1, 'rsrc':'electronics'},{'qty':3, 'rsrc':'radioactive_cells'}]},
	'Hyper Drive':{'ticks':16,'pertick':[{'qty':3500, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':6, 'rsrc':'metal'},{'qty':2, 'rsrc':'electronics'},{'qty':6, 'rsrc':'radioactive_cells'}]},
	'Interphased Drive':{'ticks':24,'pertick':[{'qty':4000, 'rsrc':'credits'},{'qty':5, 'rsrc':'energy'},{'qty':8, 'rsrc':'metal'},{'qty':3, 'rsrc':'electronics'},{'qty':6, 'rsrc':'radioactive_cells'}]},
	'Titanium Armor':{'ticks':1,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':4, 'rsrc':'energy'},{'qty':6, 'rsrc':'metal'},{'qty':2, 'rsrc':'chemical-supplies'},{'qty':2, 'rsrc':'gem-stones'}]},
	'Tritanium Armor':{'ticks':6,'pertick':[{'qty':1000, 'rsrc':'credits'},{'qty':6, 'rsrc':'energy'},{'qty':10, 'rsrc':'metal'},{'qty':4, 'rsrc':'chemical-supplies'},{'qty':2, 'rsrc':'gem-stones'}]},
	'Zortrium Armor':{'ticks':12,'pertick':[{'qty':12500, 'rsrc':'credits'},{'qty':10, 'rsrc':'energy'},{'qty':12, 'rsrc':'metal'},{'qty':6, 'rsrc':'chemical-supplies'},{'qty':4, 'rsrc':'gem-stones'}]},
	'Neutronium Armor':{'ticks':20,'pertick':[{'qty':27500, 'rsrc':'credits'},{'qty':14, 'rsrc':'energy'},{'qty':18, 'rsrc':'metal'},{'qty':14, 'rsrc':'chemical-supplies'},{'qty':12, 'rsrc':'gem-stones'}]},
	'Adamantium Armor':{'ticks':32,'pertick':[{'qty':65000, 'rsrc':'credits'},{'qty':20, 'rsrc':'energy'},{'qty':22, 'rsrc':'metal'},{'qty':16, 'rsrc':'chemical-supplies'},{'qty':14, 'rsrc':'gem-stones'}]},
	'Software Upgrade - Alliance Combat Uplink':{'ticks':6,'pertick':[{'qty':4500, 'rsrc':'credits'},{'qty':10, 'rsrc':'energy'},{'qty':10, 'rsrc':'electronics'}]},
	'Software Upgrade - Alliance Trade Uplink':{'ticks':6,'pertick':[{'qty':4500, 'rsrc':'credits'},{'qty':10, 'rsrc':'energy'},{'qty':10, 'rsrc':'electronics'}]}
};

/* ------------------------------------------------------------------------------------------------------------------
   Breakdown of the resources and quantities required for the ships
------------------------------------------------------------------------------------------------------------------ */

const ship_build_data = {
//
// Neutral Ships
//----------------
	"Sabre":{"ticks":2,"pertick":[{"qty":1000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":3, "rsrc":"heavy-plastics"}]},
	"Interceptor":{"ticks":4,"pertick":[{"qty":4000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":2, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":3, "rsrc":"heavy-plastics"}]},
	"Mercury":{"ticks":6,"pertick":[{"qty":50000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":14, "rsrc":"electronics"},{"qty":5, "rsrc":"heavy-plastics"}]},
	"Rustclaw":{"ticks":3,"pertick":[{"qty":1000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":9, "rsrc":"metal"},{"qty":1, "rsrc":"electronics"}]},
	"Lanner Mini":{"ticks":10,"pertick":[{"qty":25000, "rsrc":"credits"},{"qty":5, "rsrc":"energy"},{"qty":5, "rsrc":"metal"},{"qty":5, "rsrc":"electronics"},{"qty":6, "rsrc":"heavy-plastics"}]},
	"Harrier":{"ticks":8,"pertick":[{"qty":40000, "rsrc":"credits"},{"qty":5, "rsrc":"energy"},{"qty":10, "rsrc":"metal"},{"qty":5, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Hercules":{"ticks":24,"pertick":[{"qty":35000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":14, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"}]},
	"Hawk":{"ticks":32,"pertick":[{"qty":35000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":4, "rsrc":"heavy-plastics"}]},
	"Gargantua":{"ticks":48,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":12, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"robots"},{"qty":6, "rsrc":"heavy-plastics"}]},
	"Lanner":{"ticks":36,"pertick":[{"qty":25000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":6, "rsrc":"heavy-plastics"}]},
	"Behemoth":{"ticks":60,"pertick":[{"qty":40000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":2, "rsrc":"ore"},{"qty":20, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":2, "rsrc":"robots"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Liberator":{"ticks":80,"pertick":[{"qty":125000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":10, "rsrc":"metal"},{"qty":12, "rsrc":"electronics"},{"qty":4, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":4, "rsrc":"radioactive_cells"}]},
	"Leviathan":{"ticks":120,"pertick":[{"qty":250000, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":40, "rsrc":"metal"},{"qty":18, "rsrc":"electronics"},{"qty":4, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":6, "rsrc":"radioactive_cells"}]},
//
// Empire Ships
//-------------------
	"Ficon":{"ticks":3,"pertick":[{"qty":1000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":2, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":3, "rsrc":"heavy-plastics"}]},
	"Tyrant":{"ticks":5,"pertick":[{"qty":1250, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":11, "rsrc":"metal"}]},
	"Spectre":{"ticks":8,"pertick":[{"qty":15000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":2, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"}]},
	"Shadow Stealth Craft":{"ticks":12,"pertick":[{"qty":15000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":7, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Venom":{"ticks":20,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":6, "rsrc":"energy"},{"qty":10, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Constrictor":{"ticks":32,"pertick":[{"qty":25000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":16, "rsrc":"metal"},{"qty":4, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"}]},
	"Phantom Advanced Stealth Craft":{"ticks":48,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":14, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"}]},
	"Dominator":{"ticks":52,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":14, "rsrc":"electronics"},{"qty":1, "rsrc":"robots"},{"qty":3, "rsrc":"heavy-plastics"},{"qty":2, "rsrc":"radioactive_cells"}]},
	"Boa Ultimate Carrier":{"ticks":68,"pertick":[{"qty":60000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":14, "rsrc":"metal"},{"qty":12, "rsrc":"electronics"},{"qty":2, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":2, "rsrc":"radioactive_cells"}]},
	"Mooncrusher":{"ticks":84,"pertick":[{"qty":300000, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":64, "rsrc":"metal"},{"qty":20, "rsrc":"electronics"},{"qty":4, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":6, "rsrc":"radioactive_cells"}]},
//
// Union Ships
//-------------------
	"Rustfire":{"ticks":5,"pertick":[{"qty":2000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":5, "rsrc":"metal"},{"qty":1, "rsrc":"electronics"}]},
	"Marauder":{"ticks":12,"pertick":[{"qty":10000, "rsrc":"credits"},{"qty":2, "rsrc":"energy"},{"qty":1, "rsrc":"metal"},{"qty":4, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Junker IV":{"ticks":20,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":10, "rsrc":"metal"}]},
	"Slider":{"ticks":26,"pertick":[{"qty":35000, "rsrc":"credits"},{"qty":3, "rsrc":"energy"},{"qty":2, "rsrc":"metal"},{"qty":7, "rsrc":"electronics"},{"qty":3, "rsrc":"heavy-plastics"}]},
	"El Padre":{"ticks":34,"pertick":[{"qty":25000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":20, "rsrc":"metal"},{"qty":3, "rsrc":"electronics"},{"qty":1, "rsrc":"heavy-plastics"}]},
	"Chitin":{"ticks":40,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":8, "rsrc":"heavy-plastics"}]},
	"Horpor":{"ticks":60,"pertick":[{"qty":30000, "rsrc":"credits"},{"qty":6, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":1, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":4, "rsrc":"radioactive_cells"}]},
	"Scorpion":{"ticks":76,"pertick":[{"qty":90000, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":32, "rsrc":"metal"},{"qty":16, "rsrc":"electronics"},{"qty":3, "rsrc":"robots"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":4, "rsrc":"radioactive_cells"}]},
//
// Federation Ships
//-------------------
	"Wasp":{"ticks":1,"pertick":[{"qty":2500, "rsrc":"credits"},{"qty":10, "rsrc":"energy"},{"qty":8, "rsrc":"metal"},{"qty":6, "rsrc":"electronics"},{"qty":8, "rsrc":"heavy-plastics"} ]},
	"Adder":{"ticks":2,"pertick":[{"qty":2500, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":6, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":3, "rsrc":"heavy-plastics"} ]},
	"Thunderbird":{"ticks":4,"pertick":[{"qty":12500, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":10, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":4, "rsrc":"heavy-plastics"} ]},
	"Viper Defence Craft":{"ticks":4,"pertick":[{"qty":22500, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":3, "rsrc":"metal"},{"qty":16, "rsrc":"electronics"},{"qty":4, "rsrc":"heavy-plastics"} ]},
	"Babel Transporter":{"ticks":8,"pertick":[{"qty":42500, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":20, "rsrc":"metal"},{"qty":8, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"} ]},
	"Piranha":{"ticks":6,"pertick":[{"qty":60000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":20, "rsrc":"electronics"},{"qty":12, "rsrc":"heavy-plastics"} ]},
	"Nighthawk":{"ticks":20,"pertick":[{"qty":55000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":22, "rsrc":"electronics"},{"qty":8, "rsrc":"heavy-plastics"} ]},
	"Nighthawk Deluxe":{"ticks":24,"pertick":[{"qty":70000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":4, "rsrc":"metal"},{"qty":26, "rsrc":"electronics"},{"qty":10, "rsrc":"heavy-plastics"} ]},
	"Mantis":{"ticks":32,"pertick":[{"qty":55000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":12, "rsrc":"metal"},{"qty":14, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"},{"qty":1, "rsrc":"robots"} ]},
	"Extender":{"ticks":40,"pertick":[{"qty":50000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":16, "rsrc":"metal"},{"qty":10, "rsrc":"electronics"},{"qty":2, "rsrc":"heavy-plastics"},{"qty":2, "rsrc":"robots"} ]},
	"Gauntlet":{"ticks":56,"pertick":[{"qty":75000, "rsrc":"credits"},{"qty":4, "rsrc":"energy"},{"qty":18, "rsrc":"metal"},{"qty":14, "rsrc":"electronics"},{"qty":4, "rsrc":"heavy-plastics"},{"qty":2, "rsrc":"robots"},{"qty":4, "rsrc":"radioactive_cells"} ]},
	"Doomstar":{"ticks":80,"pertick":[{"qty":275000, "rsrc":"credits"},{"qty":8, "rsrc":"energy"},{"qty":30, "rsrc":"metal"},{"qty":34, "rsrc":"electronics"},{"qty":6, "rsrc":"heavy-plastics"},{"qty":2, "rsrc":"robots"},{"qty":6, "rsrc":"radioactive_cells"} ]},
	"War Nova":{"ticks":150,"pertick":[{"qty":500000, "rsrc":"credits"},{"qty":12, "rsrc":"energy"},{"qty":40, "rsrc":"metal"},{"qty":50, "rsrc":"electronics"},{"qty":8, "rsrc":"heavy-plastics"},{"qty":4, "rsrc":"robots"},{"qty":8, "rsrc":"radioactive_cells"} ]}
};
