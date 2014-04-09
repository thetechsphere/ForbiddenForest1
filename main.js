Game={};

	Game.Init = function()
	{
		Game.Stone = 0;
		Game.Wood = 0;
		Game.Dirt = 0;
		Game.Iron = 0;
		Game.PLvl = 1;
		Game.PickPrice = 15;
		Game.ForestWarning = 0;
		Game.ForestWarning2 = 0;
		Game.ForestAngry = 0;
		Game.RandomNum = 0;
	}
	
	Game.Message = function(Text)
	{
		alert(Text);
	}

	Game.Update = function()
	{
		document.getElementById('Stone').innerHTML = "Stone: " + Game.Stone;
		document.getElementById('Dirt').innerHTML = "Dirt: " + Game.Dirt;
		document.getElementById('Wood').innerHTML = "Wood: " + Game.Wood;
		document.getElementById('Iron').innerHTML = "Iron: " + Game.Iron;
						
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
			Game.Wood = 50;
			
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
			Game.Wood = 50;
			Game.Stone = 50;
			Game.Dirt = 50;
			Game.Iron = 50;
		}
	}
	
	Game.PickLvl = function()
	{
		Game.Stone -= (Game.PickPrice);
		Game.Wood -= 2;
		Game.PickPrice += Math.round(Game.PickPrice * 0.15);
		Game.PLvl += 2;
		Game.Update();
		document.getElementById('upgrades').innerHTML = '';
		if(Acheve.Upgrade == 0){Acheve.get.Upgrade();}
	}

	Game.Mine = function()
	{
		Game.RandomNum = Math.floor(Math.random() * 6) + 1
		if(Game.RandomNum == 1)
		{
		if(Acheve.MineIron == 0){Acheve.get.MineIron();}
		Game.Iron += (1 * Game.PLvl);
		Game.Update();
		}else{
		if(Acheve.Mine == 0){Acheve.get.Mine();}
		Game.Stone += (1 * Game.PLvl);
		Game.Update();
		}
	}
	
	Game.ChopTrees = function()
	{	
		if(Acheve.Chop == 0){Acheve.get.Chop();}
		Game.Wood += 1;
		Game.Update();
	}
	
	Game.Dig = function()
	{	
		if(Acheve.Dig == 0){Acheve.get.Dig();}
		Game.Dirt += 1;
		Game.Update();
	}
	
	Game.Status = function()
	{
		alert("Stone: "+Game.Stone + ", Dirt: " + Game.Dirt +", Wood: "+Game.Wood+", Achievement Count: "+Acheve.get.Number);
		Game.Update();
	}
	
	Game.CheaterCheater = function()
	{
		Game.Stone = 100000;
		Game.Wood = 100000;
		Game.Dirt = 100000;
		Game.PLvl = 100000;
		Game.PickPrice = 1;
		Game.ForestWarning = -1;
		Game.ForestWarning2 = -1;
		Game.ForestAngry = -1;
		Game.Update();
		if(Acheve.Cheater == 0){Acheve.get.Cheater();}
	}
	
Game.Init();
Game.Message("Welcome To My Game, This Game Is Still In Beta. If You Encounter Any Errors Please Email Me.");