Game={};

	Game.Init = function()
	{
		Game.Stone = 0;
		Game.Wood = 0;
		Game.Dirt = 0;
		Game.PLvl = 1;
		Game.PickPrice = 15;
		Game.ForestWarning = 0;
		Game.ForestWarning2 = 0;
		Game.ForestAngry = 0;
	}
	
	Game.Message = function(Text)
	{
		alert(Text);
	}

	Game.UpdateSatus = function()
	{
		document.getElementById('Stone').innerHTML = "Stone: " + Game.Stone;
		document.getElementById('Dirt').innerHTML = "Dirt: " + Game.Dirt;
		document.getElementById('Wood').innerHTML = "Wood: " + Game.Wood;
						
		if(Game.Stone >= Game.PickPrice && Game.Wood >= 2)
		{
			document.getElementById('upgrades').innerHTML = '<button type="button" onClick="Game.PickLvl()">Upgrade Pick</button>';
		}
		
		if(Game.Wood >= 100 && Game.ForestWarning == 0)
		{
			alert("The Forest Is Angry, Beware. It may Retaliate......");
			Game.ForestWarning = 1;
		}
		
		if(Game.ForestAngry == 1)
		{
			Game.Wood -= 5;
			
			if(Game.Wood < 50)
			{
				alert("~Forest:	You Have Appeased Our Wrath, Do not Provoke Us Again.....~");
				Game.ForestWarning2 = 0;
				Game.ForestWarning = 0;
				Game.ForestAngry = 0;
			}
		}
		
		if(Game.Wood >= 150)
		{
			if(Game.ForestWarning2 == 0)
			{
				alert("~Forest:	We Shall Fight Back, You have Defiled Us!~");
				Game.ForestWarning2 = 1;
				Game.ForestAngry = 1;
			}
			Game.Wood -= 5;
		}
	}
	
	Game.PickLvl = function()
	{
		Game.Stone -= (Game.PickPrice);
		Game.Wood -= 2;
		Game.PickPrice += Math.round(Game.PickPrice * 0.15);
		Game.PLvl += .25;
		Game.UpdateSatus();
		document.getElementById('upgrades').innerHTML = '';
	}

	Game.Mine = function(derection)
	{
		Game.Stone += (1 * Game.PLvl);
		Game.UpdateSatus();
	}
	
	Game.ChopTrees = function()
	{	
		Game.Wood += 1;
		Game.UpdateSatus();
	}
	
	Game.Status = function()
	{
		alert("Stone: "+Game.Stone + ", Dirt: " + Game.Dirt +", Wood: "+Game.Wood);
		Game.UpdateSatus();
	}
	
Game.Init();
Game.Message("Welcome To My Game, This Game Is Still In Beta. If You Encounter Any Errors Please Email Me.");