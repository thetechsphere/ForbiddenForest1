Acheve={};
Acheve.get={};

Acheve.get.Number = 0;
Acheve.Cheater = 0;
Acheve.Mine = 0;
Acheve.Dig = 0;
Acheve.Chop = 0;
Acheve.MineIron = 0;

Acheve.get.Cheater = function(){
	Game.Message("Achievement Get: Cheater Cheater!");
	Acheve.get.number += 1;
	Acheve.Cheater = 1;
}

Acheve.get.Mine = function(){
	Game.Message("Achievement Get: Mined Stone!");
	Acheve.get.Number += 1;
	Acheve.Mine = 1;
}

Acheve.get.MineIron = function(){
	Game.Message("Achievement Get: Mined Iron!!");
	Acheve.get.Number += 1;
	Acheve.MineIron = 1;
}

Acheve.get.Dig = function(){
	Game.Message("Achievement Get: Dug Dirt!");
	Acheve.get.Number += 1;
	Acheve.Dig = 1;
}

Acheve.get.Chop = function(){
	Game.Message("Achievement Get: Chopped Trees!");
	Acheve.get.Number += 1;
	Acheve.Chop = 1;
}

Acheve.get.Upgrade = function(){
	Game.Message("Achievement Get: Upgrade An Object!");
	Acheve.get.Number += 1;
	Acheve.Upgrade = 1;
}