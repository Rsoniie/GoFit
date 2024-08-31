
const Dish = new Map <string, Map<string, number>>();


// Creating an inner Map for "key1"
const KadaiPaneer = new Map<string, number>();
KadaiPaneer.set("ServingSize", 440);
KadaiPaneer.set("Calorie", 590);
KadaiPaneer.set("Fat", 46);
KadaiPaneer.set("Protein", 23);
KadaiPaneer.set("Carbs", 25);
KadaiPaneer.set("Sugar", 9.2);
KadaiPaneer.set("Fibre", 6.4);
Dish.set("KadaiPaneer", KadaiPaneer);

const Pizza = new Map<string, number>();
Pizza.set("ServingSize", 107);
Pizza.set("Calorie", 285);
Pizza.set("Fat", 10);
Pizza.set("Protein", 12);
Pizza.set("Carbs", 36);
Pizza.set("Sugar", 3.8);
Pizza.set("Fibre", 2.5);
Dish.set("Pizza", Pizza);


const ButterNaan = new Map<string, number>();
ButterNaan.set("ServingSize", 97);
ButterNaan.set("Calorie", 313);
ButterNaan.set("Fat", 11);
ButterNaan.set("Protein", 8.7);
ButterNaan.set("Carbs", 45);
ButterNaan.set("Sugar", 3.2);
ButterNaan.set("Fibre", 2);
Dish.set("ButterNaan", ButterNaan);

const Kulfi = new Map<string, number>();
Kulfi.set("ServingSize", 73);
Kulfi.set("Calorie", 84);
Kulfi.set("Fat", 7.6);
Kulfi.set("Protein", 4.8);
Kulfi.set("Carbs", 25);
Kulfi.set("Sugar", 22);
Kulfi.set("Fibre", 0.2);
Dish.set("Kulfi", Kulfi);

const Pakode = new Map<string, number>();
Pakode.set("ServingSize", 33);
Pakode.set("Calorie", 80);
Pakode.set("Fat", 4.8);
Pakode.set("Protein", 1.1);
Pakode.set("Carbs", 25);
Pakode.set("Sugar", 22);
Pakode.set("Fibre", 0.2);
Dish.set("Pakode", Pakode);

const Burger = new Map<string, number>();
Burger.set("ServingSize", 226);
Burger.set("Calorie", 540);
Burger.set("Fat", 27);
Burger.set("Protein", 34);
Burger.set("Carbs", 40);
Burger.set("Sugar", 0);
Burger.set("Fibre", 0);
Dish.set("Burger", Burger);

const Jalebi = new Map<string, number>();
Jalebi.set("ServingSize", 55);
Jalebi.set("Calorie", 150);
Jalebi.set("Fat", 3.5);
Jalebi.set("Protein", 1.3);
Jalebi.set("Carbs", 29);
Jalebi.set("Sugar", 19);
Jalebi.set("Fibre", 0.4);
Dish.set("Jalebi", Jalebi);

const PavBhaji = new Map<string, number>();
PavBhaji.set("ServingSize", 404);
PavBhaji.set("Calorie", 390);
PavBhaji.set("Fat", 11);
PavBhaji.set("Protein", 12);
PavBhaji.set("Carbs", 63);
PavBhaji.set("Sugar", 11);
PavBhaji.set("Fibre", 9.4);
Dish.set("PavBhaji", PavBhaji);

const MasalaDosa = new Map<string, number>();
MasalaDosa.set("ServingSize", 97);
MasalaDosa.set("Calorie", 168);
MasalaDosa.set("Fat", 3.7);
MasalaDosa.set("Protein", 3.9);
MasalaDosa.set("Carbs", 29);
MasalaDosa.set("Sugar", 0.2);
MasalaDosa.set("Fibre", 0.9);
Dish.set("MasalaDosa", MasalaDosa);

const PaaniPuri = new Map<string, number>();
PaaniPuri.set("ServingSize", 71);
PaaniPuri.set("Calorie", 152);
PaaniPuri.set("Fat", 9.9);
PaaniPuri.set("Protein", 2.5);
PaaniPuri.set("Carbs", 15);
PaaniPuri.set("Sugar", 1.9);
PaaniPuri.set("Fibre", 2.2);
Dish.set("PaaniPuri", PaaniPuri);

const Samosa = new Map<string, number>();
Samosa.set("ServingSize", 100);
Samosa.set("Calorie", 261);
Samosa.set("Fat", 17);
Samosa.set("Protein", 3.5);
Samosa.set("Carbs", 24);
Samosa.set("Sugar", 1.6);
Samosa.set("Fibre", 2.1);
Dish.set("Samosa", Samosa);

const KathiRolls = new Map<string, number>();
KathiRolls.set("ServingSize", 100);
KathiRolls.set("Calorie", 470);
KathiRolls.set("Fat", 23);
KathiRolls.set("Protein", 8);
KathiRolls.set("Carbs", 56);
KathiRolls.set("Sugar", 0);
KathiRolls.set("Fibre", 3);
Dish.set("KathiRolls", KathiRolls);

const Dhokla = new Map<string, number>();
Dhokla.set("ServingSize", 58);
Dhokla.set("Calorie", 152);
Dhokla.set("Fat", 7.4);
Dhokla.set("Protein", 5.7);
Dhokla.set("Carbs", 16);
Dhokla.set("Sugar", 5.7);
Dhokla.set("Fibre", 2.5);
Dish.set("Dhokla", Dhokla);

const Chai = new Map<string, number>();
Chai.set("ServingSize", 238);
Chai.set("Calorie", 4.9);
Chai.set("Fat", 0.1);
Chai.set("Protein", 0.1);
Chai.set("Carbs", 1.4);
Chai.set("Sugar", 0);
Chai.set("Fibre", 0.3);
Dish.set("Chai", Chai);

const Chapati = new Map<string, number>();
Chapati.set("ServingSize", 40);
Chapati.set("Calorie", 120);
Chapati.set("Fat", 3.7);
Chapati.set("Protein", 3.1);
Chapati.set("Carbs", 18);
Chapati.set("Sugar", 1.2);
Chapati.set("Fibre", 3.9);
Dish.set("Chapati", Chapati);

const CholeBhature = new Map<string, number>();
CholeBhature.set("ServingSize", 281);
CholeBhature.set("Calorie", 511);
CholeBhature.set("Fat", 27);
CholeBhature.set("Protein", 13);
CholeBhature.set("Carbs", 59);
CholeBhature.set("Sugar", 8.6);
CholeBhature.set("Fibre", 11);
Dish.set("CholeBhature", CholeBhature);

const DalMakhani = new Map<string, number>();
DalMakhani.set("ServingSize", 253);
DalMakhani.set("Calorie", 427);
DalMakhani.set("Fat", 24);
DalMakhani.set("Protein", 16);
DalMakhani.set("Carbs", 39);
DalMakhani.set("Sugar", 6);
DalMakhani.set("Fibre", 13);
Dish.set("DalMakhani", DalMakhani);

const FriedRice = new Map<string, number>();
FriedRice.set("ServingSize", 137);
FriedRice.set("Calorie", 238);
FriedRice.set("Fat", 4.1);
FriedRice.set("Protein", 5.5);
FriedRice.set("Carbs", 45);
FriedRice.set("Sugar", 0.8);
FriedRice.set("Fibre", 1.5);
Dish.set("FriedRice", FriedRice);