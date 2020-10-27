

function preload(){
 upload =new Upload();
}


function setup() { 
  createCanvas(windowWidth-20, windowHeight-30);
   
   back =new Backdrop();
   arrangment1= new Arrangments();
  
}

function draw() {
  background(112,115,163);

  // Roation of sprite saw
  saw1.rotation=saw1.rotation+7;


	drawSprites();
	
	
}
