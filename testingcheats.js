TestingCheats = {};

TestingCheats.AcheveAll = function(password)
{
	if(password != "chessmenink"){ alert("Testing Password Incorrect"); break;}
	if(Achievement.Var.CheaterCheater != 1){
		Achievement.Get.CheaterCheater(); 
	}
}