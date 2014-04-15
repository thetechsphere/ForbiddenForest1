/*
*This is a B64 cypher for game save data.
*Author: Corbin "Spritsinz" Matschull & Daniel "TNTWZRD" Jajliardo
*I ported this over from Python in a quick and dirty port. 
*I am going to test save data once we get the game up and going.
*/

SaveGame = {};
LoadGame = {};

SaveGame.SaveAll = function(){
	SaveGame.All = Game.ToolLevels.ShovelLevel + " " + Game.ToolLevels.AxeLevel + " " + Game.ToolLevels.PickLevel + " " + Game.Iron + " " + Game.Stone + " " + Game.Dirt + " " + Game.Sod + " " + Game.Wood + " " + Game.Leaves + " " + Achievement.Var.MinedStone + " " + Achievement.Var.MinedIron + " " + Achievement.Var.DugDirt + " " + Achievement.Var.DugSod + " " + Achievement.Var.ChopTree + " " + Achievement.Var.ChoppedLeaves + " " + Achievement.Var.PunchedAPig + " " + Achievement.Var.CheaterCheater + " " + Achievement.Var.MasterMiner + " " + Achievement.Var.MasterUpgrader + " " + Achievement.Var.Upgrading;

	SaveGame.EncodeText = btoa(SaveGame.All);
	
	//alert("Your Save Game Code: " + SaveGame.EncodeText + ", Write This Code down For Loading Use Later! :)");
	document.getElementById('save-code').innerHTML =  ("<p>Save code, copy this and save it somewhere: " + SaveGame.EncodeText + "</p>");

}

LoadGame.LoadAll = function(){

	LoadGame.DecodeArray = atob(prompt("Save Code", "Enter Save Code To Load Game.")).split(" ");
	
	Game.ToolLevels.ShovelLevel = parseInt(LoadGame.DecodeArray[0]) || 0;
	Game.ToolLevels.AxeLevel = parseInt(LoadGame.DecodeArray[1]) || 0;
	Game.ToolLevels.PickLevel = parseInt(LoadGame.DecodeArray[2]) || 0;
	Game.Iron = parseInt(LoadGame.DecodeArray[3]) || 0;
	Game.Stone = parseInt(LoadGame.DecodeArray[4]) || 0;
	Game.Dirt = parseInt(LoadGame.DecodeArray[5]) || 0;
	Game.Sod = parseInt(LoadGame.DecodeArray[6]) || 0;
	Game.Wood = parseInt(LoadGame.DecodeArray[7]) || 0;
	Game.Leaves = parseInt(LoadGame.DecodeArray[8]) || 0;
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
	document.getElementById('load-code').innerHTML =  ("<p>Game successfully loaded</p>");
}

