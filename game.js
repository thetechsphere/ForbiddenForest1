Game = {};
Game.Data = {};
Game.Get = {};
Game.ToolLevels = {};

Game.Get.ToolLevels = {};
Game.ToolLevels.PickLevel = 1;
Game.ToolLevels.AxeLevel = 1;
Game.ToolLevels.ShovelLevel = 1;
Game.Data.Iron = 0;
Game.Data.Stone = 0;
Game.Data.Dirt = 0;
Game.Data.Sod = 0;
Game.Data.Wood = 0;
Game.Data.Leaves = 0;

/*
*Probability function is completed as thus:
*if((Math.floor(Math.random() * rangeOfRandom) + 1 == 1){
*	completedGiveFunction;
*}
*/

//Testing for tool levels.
Game.TestFor = function(){
	if(Game.ToolLevels.PickLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
	if(Game.ToolLevels.AxeLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
	if(Game.ToolLevels.ShovelLevel >= 100 && Achievement.Var.MasterUpgrader != 1){ Achievement.Get.MasterUpgrader(); }
};

Game.Update = function(){
	if(Achievement.Time >= 10){
		document.getElementById('StatusBar').innerHTML =  ("<br> ");
	}else{
		Achievement.Time+=1;
	}
	//Gather document ID Data and display correct data.
	document.getElementById('Stone').innerHTML =  ("Stone: " + Game.Data.Stone);
	document.getElementById('Iron').innerHTML =  ("Iron: " + Game.Data.Iron);
	document.getElementById('Dirt').innerHTML =  ("Dirt: " + Game.Data.Dirt);
	document.getElementById('Sod').innerHTML =  ("Sod: " + Game.Data.Sod);
	document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Data.Wood);
	document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Data.Leaves);
	
	Game.ToolLevels.MiningSpeed = Math.round((Game.ToolLevels.PickLevel / 3) + 1);//Divide tool level by 3 
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
	if(Math.floor(Math.random() * 6) + 1 == 1){//Here we create a math floor and start a random chance of 1 to 6.
		Game.Data.Iron = Game.Data.Iron + Math.round((1 * (Game.ToolLevels.PickLevel / 4) + 1));
		if(Achievement.Var.MinedIron != 1){
			Achievement.Get.MinedIron(); 
		}
	}else{
		Game.Data.Stone = Game.Data.Stone + Math.round((1 * (Game.ToolLevels.PickLevel / 2) + 1));
	}
	Game.Update();

};

Game.Axe = function(){
	if(Achievement.Var.ChopTree != 1){
		Achievement.Get.ChoppedTree(); 
	}
	
	if(Math.floor(Math.random() * 25) + 1 == 1){
		Game.Data.Leaves = Game.Data.Leaves + Math.round((1 * (Game.ToolLevels.AxeLevel / 4) + 1));
		if(Achievement.Var.ChoppedLeaves != 1){
			Achievement.Get.ChoppedLeaves(); 
		}
	}else{
		Game.Data.Wood = Game.Data.Wood + Math.round((1 * (Game.ToolLevels.AxeLevel / 2) + 1));
	}
	Game.Update();
};

Game.Dig = function(){
	if(Achievement.Var.DugDirt != 1){
		Achievement.Get.DugDirt(); 
	}
	if(Math.floor(Math.random() * 6) + 1 == 1){
		Game.Data.Sod = Game.Data.Sod + Math.round((1 * (Game.ToolLevels.ShovelLevel / 4) + 1));
		if(Achievement.Var.DugSod != 1){
			Achievement.Get.DugSod(); 
		}
	}else{
		Game.Data.Dirt = Game.Data.Dirt + Math.round((1 * (Game.ToolLevels.ShovelLevel / 2) + 1));
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
	Game.Data.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.PickLevel));
	Game.Data.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.PickLevel));
	Game.ToolLevels.PickLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};

Game.AxeUpgrade = function(){
	Game.Data.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.AxeLevel));
	Game.Data.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.AxeLevel));
	Game.ToolLevels.AxeLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};

Game.ShovelUpgrade = function(){
	Game.Data.Stone -= Math.round(50 * (1 + .15 * Game.ToolLevels.ShovelLevel));
	Game.Data.Wood -= Math.round(10 * (1 + .15 * Game.ToolLevels.ShovelLevel));
	Game.ToolLevels.ShovelLevel += 1;
	if(Achievement.Var.Upgrading != 1){ Achievement.Get.Upgrading(); }
	Game.Update();
};
