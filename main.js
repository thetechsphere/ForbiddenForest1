
function id(what) {return document.getElementById(what);};

Game={};
	Game.Launch=function()
	{	
		Game.Loading = "true";
		Game.Init=function()
		{
			alert("No I Am Not!");
			Game.StartMe=function(what)
			{
				if(what == "JERK"){
					alert("No I Am Not!");
				}
				alert("You Ran The StartMe Function");
				message: "I was Run";
			}
		}
	} 