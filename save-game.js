/*
*This is a rot13 cypher for game save data.
*Author: Corbin "Spritsinz" Matschull & Daniel "TNTWZRD" Jajliardo
*I ported this over from Python in a quick and dirty port. 
*I am going to test save data once we get the game up and going.
*/

SaveGame = {};
LoadGame = {};

SaveGame.SaveAll = function(){
	SaveGame.All = Game.ToolLevels.PickLevel + " " + Game.Iron + " " + Game.Stone + " " + Game.Dirt + " " + Game.Sod + " " + Game.Wood + " " + Game.Leaves;
	
	SaveGame.EncodeText = btoa(SaveGame.All);
	
	alert("Your Save Game Code: " + SaveGame.EncodeText + ", Write This Code down For Loading Use Later! :)");

}

LoadGame.LoadAll = function(){
	LoadGame.DecodeArray = atob(prompt("Save Code", "Enter Save Code To Load Game.")).split(" ");

	Game.ToolLevels.PickLevel = parseInt(LoadGame.DecodeArray[0]) || 0;
	Game.Iron = parseInt(LoadGame.DecodeArray[1]) || 0;
	Game.Stone = parseInt(LoadGame.DecodeArray[2]) || 0;
	Game.Dirt = parseInt(LoadGame.DecodeArray[3]) || 0;
	Game.Sod = parseInt(LoadGame.DecodeArray[4]) || 0;
	Game.Wood = parseInt(LoadGame.DecodeArray[5]) || 0;
	Game.Leaves = parseInt(LoadGame.DecodeArray[6]) || 0;
	
	Game.Update();
	alert("Game Save Successfully Loaded!");
}
