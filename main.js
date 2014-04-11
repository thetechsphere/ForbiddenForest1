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
				if(true)
				{
					Game.ToolLevels.PickLevel++;
				}
			});
		}
	);
	
	
