TestingCheats = {};

TestingCheats.Alert = function(text){
	TestingCheats.TEXT = text;
	document.getElementById('lucky-popup').innerHTML = (TestingCheats.TEXT + "<p>Man are you lucky you didn\n't type the wrong password!</p>");
};



TestingCheats.AcheveAll = function(password){
	if(password != "chessmenink"){ 
		alert("Oh man, you blew it. Now this window is gonna close and you are gonna lose all your stuff. Bye bye!");
		close();
	}else{
	if(Achievement.Var.CheaterCheater != 1){
		Achievement.Get.CheaterCheater(); 
	}
	for(var i in Achievement.Var){
		Achievement.Var[i] = 1;
		}
	}
};

TestingCheats.HaxRFun = function(password){
	if(password != "chessmenink"){ 
			alert("Oh man, you blew it. Now this window is gonna close and you are gonna lose all your stuff. Bye bye!");
			close();
		}else{
		Game.ToolLevels.PickLevel = 1000;
		Game.ToolLevels.AxeLevel = 1000;
		Game.ToolLevels.ShovelLevel = 1000;
		Game.Iron = 1000;
		Game.Stone = 1000;
		Game.Dirt = 1000;
		Game.Sod = 1000;
		Game.Wood = 1000;
		Game.Leaves = 1000;
		Game.Update();
		for(var i in Achievement.Var){
			Achievement.Var[i] = 1;
		}
		Game.Update();
		Achievement.Get.CheaterCheater();
	};
};

TestingCheats.AwesomeCheat = function(password){
	if(password != "chessmenink"){
		alert("Oh man, you blew it. Now this window is gonna close and you are gonna lose all your stuff. Bye bye!");
		close();
	}else{
		TestingCheats.Alert("Oh you\n're lucky!");
	}
	
};
