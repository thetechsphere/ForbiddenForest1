Game = {};
Game.Get = {};
Game.ToolLevels = {};

Game.Get.ToolLevels = {};
Game.ToolLevels.PickLevel = 1;
Game.ToolLevels.AxeLevel = 1;
Game.ToolLevels.ShovelLevel = 1;
Game.Iron = 0;
Game.Stone = 0;
Game.Dirt = 0;
Game.Sod = 0;
Game.Wood = 0;
Game.Leaves = 0;

/*
*Probability function is completed as thus:
*if((Math.floor(Math.random() * rangeOfRandom) + 1 == 1){
*	completedGiveFunction;
*}
*/

Game.TestFor = function(){
	if(Game.ToolLevels.PickLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
	if(Game.ToolLevels.AxeLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
	if(Game.ToolLevels.ShovelLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
};

Game.Update = function(){

	if(Achievement.Time >= 10){
		document.getElementById('StatusBar').innerHTML =  ("<br> ");
		document.getElementById('save-code').innerHTML =  ("");
		document.getElementById('load-code').innerHTML =  ("");
	}else{
		Achievement.Time+=1;
	}
	
	document.getElementById('Stone').innerHTML =  ("Stone: " + Game.Stone);
	document.getElementById('Iron').innerHTML =  ("Iron: " + Game.Iron);
	document.getElementById('Dirt').innerHTML =  ("Dirt: " + Game.Dirt);
	document.getElementById('Sod').innerHTML =  ("Sod: " + Game.Sod);
	document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Wood);
	document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Leaves);
	
	Game.ToolLevels.MiningSpeed = Math.round((Game.ToolLevels.PickLevel / 3) + 1);
	Game.MasterMiner();
	
	Game.TestFor();
};

Game.Pick = function(){
	if(Achievement.Var.MinedStone != 1){
		Achievement.Get.MinedStone(); 
	}
	/*
	*Get math floor and create a random chance(1-6)
	*If it equals 1, get iron
	*/
	if(Math.floor(Math.random() * 6) + 1 == 1){
		Game.Iron = Game.Iron + Math.round((1 * (Game.ToolLevels.PickLevel / 4) + 1));
		if(Achievement.Var.MinedIron != 1){
			Achievement.Get.MinedIron(); 
		}
	} else{
		Game.Stone = Game.Stone + Math.round((1 * (Game.ToolLevels.PickLevel / 2) + 1));
	}
	Game.Update();

};

Game.Axe = function(){
	if(Achievement.Var.ChopTree != 1){
		Achievement.Get.ChoppedTree(); 
	}
	
	if(Math.floor(Math.random() * 25) + 1 == 1){
		Game.Leaves = Game.Leaves + Math.round((1 * (Game.ToolLevels.AxeLevel / 4) + 1));
		if(Achievement.Var.ChoppedLeaves != 1){
			Achievement.Get.ChoppedLeaves(); 
		}
	}else{
		Game.Wood = Game.Wood + Math.round((1 * (Game.ToolLevels.AxeLevel / 2) + 1));
	}
	Game.Update();
};

Game.Dig = function(){
	if(Achievement.Var.DugDirt != 1){
		Achievement.Get.DugDirt(); 
	}
	if(Math.floor(Math.random() * 6) + 1 == 1){
		Game.Sod = Game.Sod + Math.round((1 * (Game.ToolLevels.ShovelLevel / 4) + 1));
		if(Achievement.Var.DugSod != 1){
			Achievement.Get.DugSod(); 
		}
	}else{
		Game.Dirt = Game.Dirt + Math.round((1 * (Game.ToolLevels.ShovelLevel / 2) + 1));
	}
	Game.Update();
};


Game.MasterMiner = function(){
	if(Achievement.Var.MinedStone >= 1 && Achievement.Var.MinedIron >= 1 && Achievement.Var.ChopTree >= 1 && 
		Achievement.Var.ChoppedLeaves >= 1 && Achievement.Var.DugDirt >= 1 && Achievement.Var.DugSod >= 1){
		if(Achievement.Var.MasterMiner != 1 && Achievement.Time >= 2){
			Achievement.Get.MasterMiner();
		}
	}
};

Game.PickUpgrade = function(){
	Game.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.PickLevel));
	Game.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.PickLevel));
	Game.ToolLevels.PickLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};

Game.AxeUpgrade = function(){
	Game.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.AxeLevel));
	Game.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.AxeLevel));
	Game.ToolLevels.AxeLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};

Game.ShovelUpgrade = function(){
	Game.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.ShovelLevel));
	Game.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.ShovelLevel));
	Game.ToolLevels.ShovelLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};
