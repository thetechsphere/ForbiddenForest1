Game = {};
Game.ToolLevels = {};

Game.ToolLevels.PickLevel = 1;

Game.Iron = 0;
Game.Stone = 0;
Game.Dirt = 0;
Game.Sod = 0;
Game.Wood = 0;
Game.Leaves = 0;

Game.Update = function()
{
	document.getElementById('Stone').innerHTML =  ("Stone: " + Game.Stone);
	document.getElementById('Iron').innerHTML =  ("Iron: " + Game.Iron);
	document.getElementById('Dirt').innerHTML =  ("Dirt: " + Game.Dirt);
	document.getElementById('Sod').innerHTML =  ("Sod: " + Game.Sod);
	document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Wood);
	document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Leaves);
	
	Game.ToolLevels.MiningSpeed = Math.round((Game.ToolLevels.PickLevel / 5) + 1);
}

Game.Pick = function()
{
	if(Achevement.Var.MinedStone != 1){Achevement.Get.MinedStone(); }
	
	if(Math.floor(Math.random() * 6) + 1 == 1)
	{
		Game.Iron = Game.Stone + Math.round((1 * (Game.ToolLevels.PickLevel / 5) + 1));
	}
	else
	{
		Game.Stone = Game.Stone + Math.round((1 * (Game.ToolLevels.PickLevel / 5) + 1));
	}
	
	Game.Update();

}

Game.Axe = function()
{
	if(Achevement.Var.ChopTree != 1){Achevement.Get.ChoppedTree(); }
	
	if(Math.floor(Math.random() * 6) + 1 == 1)
	{
		Game.Leaves+=1;
	}
	else
	{
		Game.Wood+=1;
	}
	
	Game.Update();

}

Game.Dig = function()
{
	if(Achevement.Var.DugDirt != 1){Achevement.Get.DugDirt(); }
	
	if(Math.floor(Math.random() * 6) + 1 == 1)
	{
		Game.Sod+=1;
	}
	else
	{
		Game.Dirt+=1;
	}
	
	Game.Update();

}

Game.PickUpgrade = function()
{
	
}