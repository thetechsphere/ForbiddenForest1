/*
*This is a B64 cypher for game save data.
*Authors: Corbin "Spritsinz" Matschull & Daniel "TNTWZRD" Jajliardo
*I ported this over from Python in a quick and dirty port. 
*I am going to test save data once we get the game up and going.
*/

SaveGame = {};
LoadGame = {};

SaveGame.SaveAll = function(){
	/* Backup in case LocalStorage Breaks! :)
	SaveGame.All = Game.ToolLevels.ShovelLevel + " " + Game.ToolLevels.AxeLevel + " " + Game.ToolLevels.PickLevel + " " + Game.Data.Iron + " " + Game.Data.Stone + " " + Game.Data.Dirt + " " + Game.Data.Sod + " " + Game.Data.Wood + " " + Game.Data.Leaves + " " + Achievement.Var.MinedStone + " " + Achievement.Var.MinedIron + " " + Achievement.Var.DugDirt + " " + Achievement.Var.DugSod + " " + Achievement.Var.ChopTree + " " + Achievement.Var.ChoppedLeaves + " " + Achievement.Var.PunchedAPig + " " + Achievement.Var.CheaterCheater + " " + Achievement.Var.MasterMiner + " " + Achievement.Var.MasterUpgrader + " " + Achievement.Var.Upgrading;

	SaveGame.EncodeText = btoa(SaveGame.All);
	
	//alert("Your Save Game Code: " + SaveGame.EncodeText + ", Write This Code down For Loading Use Later! :)");
	document.getElementById('StatusBar').innerHTML =  ("<p>Save code, copy this and save it somewhere: " + SaveGame.EncodeText + "</p>");
	*/
	
	localStorage.setItem("Game.ToolLevels", btoa(JSON.stringify(Game.ToolLevels)));
	localStorage.setItem("Game.Data", btoa(JSON.stringify(Game.Data)));
	localStorage.setItem("Achievement.Var", btoa(JSON.stringify(Achievement.Var)));
	document.getElementById('StatusBar').innerHTML =  ("<p>Your Game Has Been Saved!</p>")
};

LoadGame.LoadAll = function(){
	/* Backup in case LocalStorage Breaks! :)
	LoadGame.DecodeArray = atob(prompt("Save Code", "Enter Save Code To Load Game.")).split(" ");
	
	Game.ToolLevels.ShovelLevel = parseInt(LoadGame.DecodeArray[0]) || 0;
	Game.ToolLevels.AxeLevel = parseInt(LoadGame.DecodeArray[1]) || 0;
	Game.ToolLevels.PickLevel = parseInt(LoadGame.DecodeArray[2]) || 0;
	Game.Data.Iron = parseInt(LoadGame.DecodeArray[3]) || 0;
	Game.Data.Stone = parseInt(LoadGame.DecodeArray[4]) || 0;
	Game.Data.Dirt = parseInt(LoadGame.DecodeArray[5]) || 0;
	Game.Data.Sod = parseInt(LoadGame.DecodeArray[6]) || 0;
	Game.Data.Wood = parseInt(LoadGame.DecodeArray[7]) || 0;
	Game.Data.Leaves = parseInt(LoadGame.DecodeArray[8]) || 0;
	Achievement.Var.MinedStone = parseInt(LoadGame.DecodeArray[9]) || 0;
	Achievement.Var.MinedIron = parseInt(LoadGame.DecodeArray[10]) || 0;
	Achievement.Var.DugDirt = parseInt(LoadGame.DecodeArray[11]) || 0;
	Achievement.Var.DugSod = parseInt(LoadGame.DecodeArray[12]) || 0;
	Achievement.Var.ChopTree = parseInt(LoadGame.DecodeArray[13]) || 0;
	Achievement.Var.ChoppedLeaves = parseInt(LoadGame.DecodeArray[14]) || 0;
	Achievement.Var.PunchedAPig = parseInt(LoadGame.DecodeArray[15]) || 0;
	Achievement.Var.CheaterCheater = parseInt(LoadGame.DecodeArray[16]) || 0;
	Achievement.Var.MasterMiner = parseInt(LoadGame.DecodeArray[17]) || 0;
	Achievement.Var.MasterUpgrader = parseInt(LoadGame.DecodeArray[18]) || 0;
	Achievement.Var.Upgrading = parseInt(LoadGame.DecodeArray[19]) || 0;
	
	Game.Update();
	//alert("Game Save Successfully Loaded!");
	document.getElementById('StatusBar').innerHTML =  ("<p>Game successfully loaded</p>");
	*/
	
	Game.ToolLevels = JSON.parse(atob(localStorage.getItem("Game.ToolLevels")));
	Game.Data = JSON.parse(atob(localStorage.getItem("Game.Data")));
	Achievement.Var = JSON.parse(atob(localStorage.getItem("Achievement.Var")));
	Game.Update();
	document.getElementById('StatusBar').innerHTML =  ("<p>Your Game Has Been Loaded!</p>")
};

LoadGame.LoadAll();
