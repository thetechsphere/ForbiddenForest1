Game = {};

Game.Iron = 0;
Game.Stone = 0;
Game.Dirt = 0;
Game.Sod = 0;
Game.Wood = 0;
Game.Leaves = 0;

Game.Update = function()
{
	document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Wood);
	document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Leaves);
}

Game.Pick = function()
{
	if(Achevement.Var.MinedStone != 1){Achevement.Get.MinedStone(); }
	
	if((Math.random(1,6) * 6 + 1) == 1)
	{
		Game.Iron++;
		document.getElementById('Iron').innerHTML =  ("Iron: " + Game.Iron);
	}
	else
	{
		Game.Stone++;
		document.getElementById('Stone').innerHTML =  ("Stone: " + Game.Stone);
		
	}

}

Game.Dig = function()
{
	if(Achevement.Var.DugDirt != 1){Achevement.Get.DugDirt(); }
	
	if((Math.random(1,6) * 6 + 1) == 1)
	{
		Game.Sod++;
		document.getElementById('Sod').innerHTML =  ("Sod: " + Game.Sod);
	}
	else
	{
		Game.Dirt++;
		document.getElementById('Dirt').innerHTML =  ("Dirt: " + Game.Dirt);
	}

}

Game.Axe = function()
{
	if(Achevement.Var.ChoppedTree != 1){Achevement.Get.ChoppedTree(); }
	
	if((Math.random(1,6) * 6 + 1) == 1)
	{
		Game.Leaves++;
		document.getElementById('Leaves').innerHTML =  ("Leaves: " + Game.Leaves);
	}
	else
	{
		Game.Wood++;
		document.getElementById('Wood').innerHTML =  ("Wood: " + Game.Wood);
	}

}