Achevement = {};
Achevement.Var = {};
Achevement.Get = {};

Achevement.Alert = function(text)
{
	alert("Achievement Get: " + text);
}

Achevement.Get.MinedStone = function()
{
	Achevement.Alert("Mined Stone");
	Achevement.Var.MinedStone = 1;
}

Achevement.Get.DigDirt = function()
{
	Achevement.Alert("Dug Dirt");
	Achevement.Var.DigDirt = 1;
}

Achevement.Get.ChoppedTree = function()
{
	Achevement.Alert("Chopped A Tree");
	Achevement.Var.ChoppTree = 1;
}