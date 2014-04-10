Game = {};

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
}

Game.Pick = function()
{
	if(Achevement.Var.MinedStone != 1){Achevement.Get.MinedStone(); }
	
	if((Math.random(1,6) * 6 + 1) == 1)
	{
		Game.Iron+=1;
	}
	else
	{
		Game.Stone+=1;
	}
	
	Game.Update();

}

Game.Axe = function()
{
	if(Achevement.Var.ChopTree != 1){Achevement.Get.ChoppedTree(); }
	
	if((Math.random(1,6) * 6 + 1) == 1)
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
	
	if((Math.random(1,6) * 6 + 1) == 1)
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