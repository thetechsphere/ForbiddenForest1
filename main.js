Main = {};


	$(
		function(){
			$("#Pick").click(function(event) 
			{
				event.preventDefault();
				if(true)
				{
					Game.Pick();
				}
			});
		}
	);
	
	$(
		function(){
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
