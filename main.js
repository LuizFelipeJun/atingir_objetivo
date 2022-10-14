var canvas=new fabric.Canvas("myCanvas");

var bolaX=0;
var bolaY=0;

var buracoX=850;
var buracoY=550;

var blockImageWidth = 5;
var blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(img) {
		objetoDoBuraco = img;
		objetoDoBuraco.scaleToWidth(50);
		objetoDoBuraco.scaleToHeight(50);
		objetoDoBuraco.set({
			top: buracoY, 
			left: buracoX
		});
		canvas.add(objetoDoBuraco);
	});
	newImage();
}

function newImage() {
	fabric.Image.fromURL("ball.png", function(img) {
		objetoDaBola = img;
		objetoDaBola.scaleToWidth(50);
		objetoDaBola.scaleToHeight(50);
		objetoDaBola.set({
			top: bolaY, 
			left: bolaX
		});
		canvas.add(objetoDaBola);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(bolaX == buracoX && bolaY == buracoY) {
		canvas.remove(objetoDaBola);
		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!1!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	} 
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up() {
		if(bolaY >= 5) {
			bolaY = bolaY - blockImageHeight;
			console.log("altura da imagem do bloco: " + blockImageHeight);
			canvas.remove(objetoDaBola);
			newImage();
		}
	}

	function down() {
		if(bolaY <= 550) {
			bolaY = bolaY + blockImageHeight;
			console.log("altura da imagem do bloco: " + blockImageHeight);
			canvas.remove(objetoDaBola);
			newImage();
		}
	}

	function left() {
		if(bolaX >= 5) {
			bolaX = bolaX - blockImageWidth;
			console.log("largura da imagem do bloco: " + blockImageWidth);
			canvas.remove(objetoDaBola);
			newImage();
		}
	}

	function right() {
		if(bolaX <=850) {
				bolaX = bolaX + blockImageWidth;
				console.log("largura da imagem do bloco: " + blockImageWidth);
				canvas.remove(objetoDaBola);
				newImage();
		}
	}
}

