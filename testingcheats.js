TestingCheats = {};

TestingCheats.AcheveAll = function(password)
{
	if(password != "chessmenink"){ 
		alert("Password Incorrect!\nNo hax0r for you!"); 
	}else{
	if(Achievement.Var.CheaterCheater != 1){
		Achievement.Get.CheaterCheater(); 
	}
	for(var i in Achievement.Var){
		Achievement.Var[i] = 1;
		}
	}
}