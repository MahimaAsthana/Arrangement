//Declaring variables for objects in background
var redbarrel, greenbarrel, box, saw;
var doorlock, doorunlock, dooropen, correctswitch, wrongswitch;

// Declaring Tiles variables
var acidhalf, acidfull, fenceright, fenceleft, fencecenter, spikes;
var bgt1,bgt2,bgt3,bgt4,bgt5,bgt6,bgt7,bgt8;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15;


class Upload{
    constructor(){
 // Loading objects images
 redbarrel =loadImage("images/objects/Barrel1.png");
 greenbarrel =loadImage("images/objects/Barrel2.png");
 box =loadImage("images/objects/Box.png");
 saw= loadImage("images/objects/Saw.png");
 doorlock =loadImage("images/objects/DoorLocked.png");
 doorunlock =loadImage("images/objects/Doorunlocked.png");
 dooropen =loadImage("images/objects/DoorOpen.png");
 correctswitch =loadImage("images/objects/Switch (1).png");
 wrongswitch =loadImage("images/objects/Switch (2).png");

 //Load Background objects
 bgt1 =loadImage("images/tiles/BGTile1.png");
 bgt2 =loadImage("images/tiles/BGTile2.png");
 bgt3 =loadImage("images/tiles/BGTile3.png");
 
 bgt4 =loadImage("images/tiles/BGTileL.png");
 bgt5 =loadImage("images/tiles/BGTileR.png");

 acidhalf =loadImage("images/tiles/Acid1.png");
 acidfull=loadImage("images/tiles/Acid2.png");

 bgt6=loadImage("images/tiles/LTL.png");
 bgt7=loadImage("images/tiles/LTM.png");
 bgt8=loadImage("images/tiles/LTR.png");

  t1 =loadImage("images/tiles/HTBC.png");
  t2 =loadImage("images/tiles/HTBL.png");
  t3 =loadImage("images/tiles/HTBR.png");
  t4 =loadImage("images/tiles/HTBS.png");
  t5 =loadImage("images/tiles/HTC.png");

  t6 =loadImage("images/tiles/HTL.png");
  t7=loadImage("images/tiles/HTR.png");

  t8 =loadImage("images/tiles/BTC.png");
  t9 =loadImage("images/tiles/BTcrL.png");
  t10=loadImage("images/tiles/BTcrR.png");
  t11 =loadImage("images/tiles/BTL.png");
  t12 =loadImage("images/tiles/BTR.png");

  fenceleft= loadImage("images/tiles/Fence1.png");
  fenceright= loadImage("images/tiles/Fence3.png");
  fencecenter= loadImage("images/tiles/Fence2.png");
  spikes = loadImage("images/tiles/Spike.png");


    }
}