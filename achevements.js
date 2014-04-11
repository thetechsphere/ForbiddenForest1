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


Achievement.Alert = function(text){ 
/*  
*This Is used As A Universal Alert File For Achievements, 
*so they always start with "Achievement Get: "  
*Example: Achievement.Alert("Gain 100 Stone!")
*/
	alert("Achievement Get: " + text);
}

Achievement.Get.MinedStone = function(){
/*  
*If Mined Stone For First Time get Achievement
*/
	Achievement.Alert("Mined Stone");
	Achievement.Var.MinedStone = 1;
}

Achievement.Get.DugDirt = function(){
/*  
*If Dug Dit For First Time get Achievement
*/
	Achievement.Alert("Dug Dirt");
	Achievement.Var.DugDirt = 1;
}

Achievement.Get.ChoppedTree = function(){
/*  
*If Chopped Tree For First Time get Achievement
*/
	Achievement.Alert("Chopped A Tree");
	Achievement.Var.ChopTree = 1;
}

Achievement.Get.PunchedAPig = function(){
/*  
*We Dont Have Pigs Yet But Yha.
*/
	Achievement.Alert("OMG! Pig Killer!");
	Achievement.Var.PunchedAPig = 1;
