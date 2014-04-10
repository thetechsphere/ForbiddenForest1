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

Achevement.Get.DugDirt = function()
{
	Achevement.Alert("Dug Dirt");
	Achevement.Var.DugDirt = 1;
}

Achevement.Get.ChoppedTree = function()
{
	Achevement.Alert("Chopped A Tree");
	Achevement.Var.ChopTree = 1;
}