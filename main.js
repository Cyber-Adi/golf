var canvas= new fabric.Canvas('myCanvas');

// Create canvas variable

//Set initial positions for ball and hole images.


bih = 5;
bih = 5;

bx=0;
by=0;
hy=0;
hx=0;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		ho=Img;
		ho.scaleToWidth(50);
		ho.scaleToHeight(50);
		ho.set({
        top:hy=0,
		left:hx=0
		});
		canvas.add(ho)
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		bo=Img;
		bo.scaleToWidth(50);
		bo.scaleToHeight(50);
		bo.set({
        top:by=0,
		left:bx=0
		});
		canvas.add(bo)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((bx==hx)&&(by==hy)){
		canvas.remove(bo);
		document.getElementById("hd3").innerHTML="HOLE IN ONE!";
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
	
	function up()
	{
		if(by >5)
		{
			by = by - bih;
		console.log("block image height = " + bih);
		console.log("When Up arrow key is pressed, X =  " + bx + " , Y = "+by);
		canvas.remove(bo);
		new_image();
		}
	}

	function down()
	{
		if(by <=450)
		{
			by = by + bih;
		console.log("block image height = " + bih);
		console.log("When Up arrow key is pressed, X =  " + bx + " , Y = "+by);
		canvas.remove(bo);
		new_image();
		}
		 
	}

	function left()
	{
		if(bx >5)
		{
			bx = bx - bih;
		console.log("block image height = " + bih);
		console.log("When Up arrow key is pressed, X =  " + bx + " , Y = "+by);
		canvas.remove(bo);
		new_image();
		}
	}

	function right()
	{
		if(bx <=1050)
		{
			bx = bx + bih;
		console.log("block image height = " + bih);
		console.log("When Up arrow key is pressed, X =  " + bx + " , Y = "+by);
		canvas.remove(bo);
		new_image();
		}
	}
	
}

