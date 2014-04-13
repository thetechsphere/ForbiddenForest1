TestingCheats = {};

TestingCheats.AcheveAll = function(password)
{
	if(password != "chessmenink")
	{ 
		alert("Testing Password Incorrect"); 
	}
	else
	{
	if(Achievement.Var.CheaterCheater != 1){
		Achievement.Get.CheaterCheater(); 
	}
	for(var i in Achievement.Var)
	{
    	Achievement.Var[i] = 1;
	}
	}
}