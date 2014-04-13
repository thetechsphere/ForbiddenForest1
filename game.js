Game = {};
Game.Get = {};
Game.ToolLevels = {};

Game.Get.ToolLevels = {};
Game.ToolLevels.PickLevel = 1;
Game.Iron = 0;
Game.Stone = 0;
Game.Dirt = 0;
Game.Sod = 0;
Game.Wood = 0;
Game.Leaves = 0;

/*
*Probabiility function is completed as thus:
*if(Math.floor(Math.random() * rangeOfRandom == 1){
*	completedGiveFunction;
*}
*/

Game.Update = function(){
	document.getElementById('Stone').innerHTML =  ("Stone: " + Game.Stone);
	document.getElementById('Iron').innerHTML =  ("Iron: " + Game.Iron);
	document.getElementById('Dirt').innerHTML =  ("Dirt: " + Game.Dirt);
	document.getElementById('Sod').innerHTML =  ("Sod: " + Game.Sod);
	document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Wood);
	document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Leaves);
	
	Game.ToolLevels.MiningSpeed = Math.round((Game.ToolLevels.PickLevel / 5) + 1);
	Game.ToolLevels.RawMiningSpeed = ((Game.ToolLevels.Picklevel / 5) + 1);
}

Game.Pick = function(){
	if(Achievement.Var.MinedStone != 1){
		Achievement.Get.MinedStone(); 
	}
	/*
	*Get math floor and create a random chance(1-6)
	*If it equals 1, get iron
	*/
	if(Math.floor(Math.random() * 6) + 1 == 1){
		Game.Iron = Game.Iron + Math.round((1 * (Game.ToolLevels.PickLevel / 3) + 1));
		if(Achievement.Var.MinedIron != 1){
			Achievement.Get.MinedIron(); 
		}
	} else{
		Game.Stone = Game.Stone + Math.round((1 * (Game.ToolLevels.PickLevel / 3) + 1));
	}
	Game.Update();

}

Game.Axe = function(){
	if(Achievement.Var.ChopTree != 1){
		Achievement.Get.ChoppedTree(); 
	}
	
	if(Math.floor(Math.random() * 20) + 1 == 1){
		Game.Leaves+=1;
		if(Achievement.Var.ChoppedLeaves != 1){
			Achievement.Get.ChoppedLeaves(); 
		}
	}else{
		Game.Wood+=1;
	}
	Game.Update();
}

Game.Dig = function(){
	if(Achievement.Var.DugDirt != 1){
		Achievement.Get.DugDirt(); 
	}
	if(Math.floor(Math.random() * 6) + 1 == 1){
		Game.Sod+=1;
		if(Achievement.Var.DugSod != 1){
			Achievement.Get.DugSod(); 
		}
	}else{
		Game.Dirt+=1;
	}
	Game.Update();
}

Game.MasterMiner = function(){
	if(Achievement.Var.MinedStone >= 1 && Achievement.Var.MinedIron >= 1 && Achievement.Var.ChopTree >= 1 && 
	Achievement.Var.ChoppedLeaves >= 1 && Achievement.Var.DugDirt >= 1 && Achievement.Var.DugSod >= 1){
		Achievement.Get.MasterMiner();
	}
}

Game.PickUpgrade = function(){
		Game.Stone -= 50;
		Game.Wood -= 10;
		Game.ToolLevels.PickLevel += 1;
		Game.Update();
}
