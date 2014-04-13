Main = {};
//Instantiate main game function
	$(
	function(){
	//Pickaxe waits for click here. Calls event.
	$("#Pick").click(function(event) {
		event.preventDefault();
	if(true){
		Game.Pick();
			}
		});
}
);
	
	$(
		function(){
			//Wood Axe waits for click here. Calls Event
			$("#Axe").click(function(event) 
			{
				event.preventDefault();
				if(true)
				{
					Game.Axe();
				}
			});
		}
	);
	
	$(
		function(){
			//Shovel waits for click here. Calls Event
			$("#Shovel").click(function(event) 
			{
				event.preventDefault();
				if(true)
				{
					Game.Dig();
				}
			});
		}
	);
	
	$(
		function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#PUpgrade").click(function(event) 
			{
				event.preventDefault();
				if(Game.Stone >= 50 && Game.Wood >= 10)
				{
					Game.PickUpgrade();
				}
				else
				{
					alert("50 Stone and 10 Wood Required To Upgrade Pick!");
				}
			});
		}
	);
	
		$(
		function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#AUpgrade").click(function(event) 
			{
				event.preventDefault();
				if(Game.Stone >= 50 && Game.Wood >= 10)
				{
					Game.AxeUpgrade();
				}
				else
				{
					alert("50 Stone and 10 Wood Required To Upgrade Axe!");
				}
			});
		}
	);
	
		$(
		function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#SUpgrade").click(function(event) 
			{
				event.preventDefault();
				if(Game.Stone >= 50 && Game.Wood >= 10)
				{
					Game.ShovelUpgrade();
				}
				else
				{
					alert("50 Stone and 10 Wood Required To Upgrade Shovel!");
				}
			});
		}
	);
	
		$(
		function(){
			//This Is For Saving The Game
			$("#SaveGame").click(function(event) 
			{
				event.preventDefault();
				SaveGame.SaveAll();
			});
		}
	);
	
	$(
		function(){
			//This Is For Laoding The Game
			$("#LoadGame").click(function(event) 
			{
				event.preventDefault();
				LoadGame.LoadAll();
			});
		}
	);
