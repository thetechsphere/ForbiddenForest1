/*
*This is a B64 cypher for game save data.
*Author: Corbin "Spritsinz" Matschull & Daniel "TNTWZRD" Jajliardo
*I ported this over from Python in a quick and dirty port. 
*I am going to test save data once we get the game up and going.
*/

SaveGame = {};
LoadGame = {};

SaveGame.SaveAll = function(){
	SaveGame.All = Game.ToolLevels.ShovelLevel + " " + Game.ToolLevels.AxeLevel + " " + Game.ToolLevels.PickLevel + " " + Game.Iron + " " + Game.Stone + " " + Game.Dirt + " " + Game.Sod + " " + Game.Wood + " " + Game.Leaves;
	
	SaveGame.EncodeText = btoa(SaveGame.All);
	
	//alert("Your Save Game Code: " + SaveGame.EncodeText + ", Write This Code down For Loading Use Later! :)");
	document.getElementById('save-code').innerHTML =  ("<p>Save code, copy this and save it somewhere: " + SaveGame.EncodeText + "</p>");
	document.getElementByID('save-code').innerHTML = ('');
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
	
	Game.Update();
	alert("Game Save Successfully Loaded!");
}
