<!DOCTYPE html>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" type="image/ico" href="favicon.ico">
	<title>
		Epic World
	</title>
</head>

<body>

<div class="titlebar">
Epic World <b><i>~ The Forbidden Forest ~</i></b>. Hosted On: <a href="https://www.chessmenink.tk/">ChessmenInk</a>.
 Written And Scripted By: <a href="mailto:danieljajliardo@gmail.com">Daniel Jajliardo</a>, and Corbin M.
</div>
<script type="text/javascript" src="main.js"></script>
<br>


<table width="100%" style="text-align: center;">
<tr>
<td width="33%">
<button type="button" onClick="Game.Mine('Down')">Mine Down</button><br>
<button type="button" onClick="Game.Mine('Left')">Mine Left</button><br>
<button type="button" onClick="Game.Mine('Right')">Mine Right</button><br>
<button type="button" onClick="Game.ChopTrees()">Chop Nearby Trees</button><br>
<button type="button" onClick="Game.Status()">Status</button>
</td>
<td width="33%">
<h3 id="Stone">Stone: 0</h3>
<h3 id="Dirt">Dirt: 0</h3>
<h3 id="Wood">Wood: 0</h3>
</td>
<td width="33%">
<h1 id="upgrades"></h1>
</td>


</tr>

</body>	
</html>