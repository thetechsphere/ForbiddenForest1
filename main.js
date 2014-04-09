function id(what) {return document.getElementById(what);};

Game={};
	Game.Launch=function()
	{	
		alert("Launch");
		Game.Loading = "true";
		Game.Init=function()
		{
			alert("INIT");
			Game.StartMe=function()
			{
				alert("StartMe");
			}
		}
	} 
	Game.Launch();
	Game.Init();
	Game.StartMe();
