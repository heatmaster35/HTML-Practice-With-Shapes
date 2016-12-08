//*******************************
//*Name: Leo Gomez              *
//*Login: legomez               *
//*SID: 1360609                 *
//*Lab#: 1                      *
//*file: TenOfMyFavoriteShape.js*
//*class: CMPS - 160L           *
//*******************************

//initializes the canvas and sizes
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var i = 0;
var x1 = c.width;
var y1 = c.height;

//calls 10 happy faces
for(;i < 10;i++)
{
	Happyface();
}//for()

//function that makes the smiley face
function Happyface()
{
	//sets the location somewhere random
	//on the canvas
	var x = Math.random()*x1;
	var y = Math.random()*y1;
	
	//creates the face
	ctx.beginPath();
	ctx.fillStyle = "yellow";
	ctx.arc(x,y,50,0,2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	
	//creates the left eye
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(x-15,y-10,8,0,2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	
	//creates the right eye
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(x+15,y-10,8,0,2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	
	//creates the mouth
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(x,y,40,0+0.2,Math.PI-0.2);
	ctx.closePath()
	ctx.stroke();
	ctx.fill();
}//HappyFace()