// var timeInterval = setTimeInterval();
 var timeInterval = 100;
 var appearTime = 0;
 var clickTime = 0;
 var reactionTime = 0;
 var totalTime = 0;
 var c = 0;
 var box = document.getElementById("box");
 
 // function setTimeInterval(){
	 // if(document.getElementById("easy").selected == "true") return 1000;
	 // else if(document.getElementById("medium").selected == "true") return 500;
	 // else if(document.getElementById("hard").selected == "true") return 100;
 // }
 
 function appear() {
	 appearTime = new Date().getTime();
	 box.style.display="block";
	 getRandomColor();
	 getRandomSahpe();
	 getRandomPosition();
 }
 
 function getRandomColor() {
	var color="#";
	var arr="0123456789ABCDEF";
	var colorGroup = arr.split("");
	for(var i=0; i<6; i++){
		color += colorGroup[Math.floor(Math.random()*16)];
	}
	box.style.backgroundColor = color;
	if(color=="#BCF5A9"){
		box.style.border="1px solid black";
	}
 }
 
 function getRandomSahpe(){
	var borderRad = 0;
	if(Math.random()>0.5)	borderRad = 0;
	else borderRad = "50%";
	box.style.borderRadius = borderRad;
}

function getRandomPosition(){
	box.style.top = Math.random()*300 + "px";
	box.style.left = Math.random()*800 + "px";	
} 

box.onclick = function(){
//	clicked = true;
	clickTime = new Date().getTime();
	reactionTime = clickTime -  appearTime;
	totalTime += reactionTime;
	box.style.display = "none";
	if(c<9) {
		c++;
		setTimeout(appear(), timeInterval);	
	}
	else {
		document.getElementById("result").innerHTML = "Good job! Your total reaction time in this roud is: " + totalTime/1000 + " seconds";
		totalTime = 0;
		c = 0;
	}
}
		

document.getElementById("start").onclick = function(){
	document.getElementById("result").innerHTML = "";
	setTimeout(appear(), 1000);
}
	
