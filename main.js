Main = {};
//Instantiate main game function

	$(function(){
		$("#Quests").click(function(event) {
			event.preventDefault();
			document.getElementById('StatusBar').innerHTML =  ("<p>Current Quest: " + Quest.CurrentQuest+"</p>");
			Achievement.Time = 0;
		});
	}
);

	$(function(){
		//Pickaxe waits for click here. Calls event.
		$("#Pick").click(function(event) {
			event.preventDefault();
		if(true){
			Game.Pick();
			}
		});
	}
);
	
	$(function(){
			//Wood Axe waits for click here. Calls Event
			$("#Axe").click(function(event) {
				event.preventDefault();
				if(true){
					Game.Axe();
			}
		});
	}
);
	
	$(function(){
			//Shovel waits for click here. Calls Event
			$("#Shovel").click(function(event) {
				event.preventDefault();
				if(true){
					Game.Dig();
			}
		});
	}
);
	
	$(function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#PUpgrade").click(function(event){
				event.preventDefault();
				if(Game.Stone >= Math.round(50 * (1 + .15 * Game.ToolLevels.PickLevel))&& Game.Wood >= Math.round(10 *(1 + .15 * Game.ToolLevels.PickLevel))){
					Game.PickUpgrade();
				}else{
					alert(Math.round(50 * (1 + .15 * Game.ToolLevels.PickLevel)) + " Stone and "+ Math.round(10 *(1 + .15 * Game.ToolLevels.PickLevel)) + " Wood Required To Upgrade Pickaxe!");
			}
		});
	}
);
	
		$(function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#AUpgrade").click(function(event){
				event.preventDefault();
				if(Game.Stone >= Math.round(50 * (1 + .15 * Game.ToolLevels.AxeLevel))&& Game.Wood >= Math.round(10 *(1 + .15 * Game.ToolLevels.AxeLevel))){
					Game.AxeUpgrade();
				}else{
					alert(Math.round(50 * (1 + .15 * Game.ToolLevels.AxeLevel)) + " Stone and "+ Math.round(10 *(1 + .15 * Game.ToolLevels.AxeLevel)) + " Wood Required To Upgrade Axe!");
			}
		});
	}
);
	
		$(function(){
			//This is a part upgrade, waits for the click, calls event.
			$("#SUpgrade").click(function(event) {
				event.preventDefault();
				if(Game.Stone >= Math.round(50 * (1 + .15 * Game.ToolLevels.ShovelLevel))&& Game.Wood >= Math.round(10 *(1 + .15 * Game.ToolLevels.ShovelLevel))){
					Game.ShovelUpgrade();
				}else{
					alert(Math.round(50 * (1 + .15 * Game.ToolLevels.ShovelLevel)) + " Stone and "+ Math.round(10 *(1 + .15 * Game.ToolLevels.ShovelLevel)) + " Wood Required To Upgrade Shovel!");
			}
		});
	}
);
	
		$(function(){
			//This Is For Saving The Game
			$("#SaveGame").click(function(event){
				event.preventDefault();
				SaveGame.SaveAll();
		});
	}
);
	
	$(function(){
			//This Is For Laoding The Game
			$("#LoadGame").click(function(event) {
				event.preventDefault();
				LoadGame.LoadAll();
		});
	}
);