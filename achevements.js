Achievement = {};
Achievement.Var = {};
Achievement.Get = {};

/*
*Code in this file is pretty self explanatory.
*But for all the idiots out there that don't know JS here you go,
*Achievement.Var is used as the yes or no the player has the achievement. Simple code here folks.
*Achievement.Get is used for (obviously) getting the achievement.
*And then Achievenment is the main superclass for this whole file.
*/
Achievement.Var.MinedStone = 0;
Achievement.Var.MinedIron = 0;
Achievement.Var.DugDirt = 0;
Achievement.Var.DugSod = 0;
Achievement.Var.ChopTree = 0;
Achievement.Var.ChoppedLeaves = 0;
Achievement.Var.PunchedAPig = 0;
Achievement.Var.CheaterCheater = 0;
Achievement.Var.MinedStone = 0;
Achievement.Var.MasterMiner = 0;
Achievement.Var.Upgrading = 0;

/*Achievement.Alert = function(text){ 
	alert("Achievement Get: " + text);
}
Old Alert System
*/

Achievement.Alert = function(text){ 
	Achievement.TEXT = text;
	document.getElementById('StatusBar').innerHTML =  ("<p>Achievement Get: " + Achievement.TEXT + "</p>");
}

Achievement.Get.MinedStone = function(){

	Achievement.Alert("Mined Stone");
	Achievement.Var.MinedStone = 1;
}

Achievement.Get.MinedIron = function(){

	Achievement.Alert("Mined Iron");
	Achievement.Var.MinedIron = 1;
}

Achievement.Get.DugDirt = function(){
	Achievement.Alert("Dug Dirt");
	Achievement.Var.DugDirt = 1;
}

Achievement.Get.DugSod = function(){

	Achievement.Alert("Dug Sod");
	Achievement.Var.DugSod = 1;
}

Achievement.Get.ChoppedTree = function(){
	Achievement.Alert("Chopped A Tree");
	Achievement.Var.ChopTree = 1;
}

Achievement.Get.ChoppedLeaves = function(){

	Achievement.Alert("Chopped Leaves");
	Achievement.Var.ChoppedLeaves = 1;
}

Achievement.Get.PunchedAPig = function(){
	Achievement.Alert("OMG! Pig Killer!");
	Achievement.Var.PunchedAPig = 1;
}

Achievement.Get.CheaterCheater = function(){
	Achievement.Alert("Master Cheater, Epic!");
	Achievement.Var.CheaterCheater = 1;
}

Achievement.Get.MasterMiner = function(){
	Achievement.Alert("You are now the master miner!\nGo forth and claim your land!");
	Achievement.Var.MasterMiner = 1;
}

Achievement.Get.Test = function(){
	Achievement.AlertBar("Testing");
	Achievement.Var.MinedStone = 1;
}

Achievement.Get.Upgrading = function(){
	Achievement.AlertBar("Holy Crud! Major updgrade!");
	Achievement.Var.Upgrade = 1;
}

