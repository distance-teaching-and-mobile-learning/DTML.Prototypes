/* globals __DEV__ */
import Phaser from 'phaser'
import lang from '../lang'
import {dtml} from '../dtml-sdk'
import PhaserInput from '../libs/phaser-input'

export default class extends Phaser.State {
  init()
  {
  }

  preload() {
    this.add.plugin(PhaserInput.Plugin);
    this.game.load.tilemap('level1', 'assets/images/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles-1', 'assets/images/tiles-1.png');
	//118,167
    this.game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48);
	//this.game.load.spritesheet('pumpkin', 'assets/images/pumpkin.png', 32, 48);
    this.game.load.spritesheet('droid', 'assets/images/droid.png', 32, 32);
    this.game.load.image('starSmall', 'assets/images/star.png');
    this.game.load.image('starBig', 'assets/images/star2.png');
    this.game.load.image('background', 'assets/images/background2.png', window.innerWidth, window.innerHeight);
	  this.game.load.image('cloud', 'assets/images/cloud.png');
    this.game.load.image('tile', 'assets/images/tile.png');
	
/*	
	this.game.load.image('arrow', 'assets/images/arrow.png');
    this.game.load.image('bullet', 'assets/images/purple_ball.png');
	
	*/
	//this.game.load.image('bat', 'assets/images/bat.gif', 32, 48);
	//this.load.spritesheet('letter', 'assets/images/letters.png',75,85);

}

hitPumpkin(player, pumpkin)
{
    //this.player.animations.play('smash');
    // just open up 1 letter
    /*var p = this.game.add.particles('sprites', 'fire')
    var deathZone = new Phaser.Geom.Rectangle(pumpkin.x - 50, pumpkin.y - 50, 400, 400);

    var emitter = p.createEmitter({
        x: pumpkin.x - 50,
        y: pumpkin.y - 50,
        angle: { min: 30, max: 80 },
        speed: 300,
        gravityY: 200,
        lifespan: { min: 1000, max: 2000 },
        scale: { start: 0.75, end: 0.75 },
        blendMode: 'ADD',
        deathZone: { type: 'onEnter', source: deathZone },
    });
    emitter.killAll();*/

   /* var wordLength = this.currentWord.length;
    pumpkin.kill();

    this.textBox[this.pumpkinHitCount].setText(this.currentWord[this.pumpkinHitCount]);
    if (this.pumpkinHitCount < wordLength - 1)
    {
    	this.pumpkinHitCount++;
    }
    else
    {
        this.reloadPumpkins();
        this.getNewWord();
    } */
}

hitBat()
{
	//player.kill();
	//this.reloadPumpkins();
    //this.getNewWord();
		
}

update() {
  	//this.game.physics.arcade.collide(this.player, this.layer);
	//this.game.physics.arcade.collide(this.image, this.player, this.hitBat, null, this);

	//for(var i = 0; i < this.maxPumpkins; i++)
	//{
	//	this.game.physics.arcade.collide(this.pumpkin[i], this.layer);
	//	this.game.physics.arcade.collide(this.player, this.pumpkin[i], this.hitPumpkin, null, this);

	//	for(var j = 0; j < this.maxPumpkins; j++)
	//	{
	//		if (j != i)
	//		{
	//			this.game.physics.arcade.collide(this.pumpkin[j], this.pumpkin[i]);
	//		}
	//	}
	//}
		    this.game.physics.arcade.collide(this.player, this.tile);

 this.game.add.sprite(200, 50, 'cloud');
this.game.add.text(250, 120, 'Apple', { font: "40px Fontdiner Swanky", fill: "#19de65" });


/*sprite.rotation = game.physics.arcade.angleToPointer(sprite);

    if (game.input.activePointer.isDown)
    {
        fire();
    }
	
	*/
	
   this.player.body.velocity.x = 0;
   //    this.textBox[1].setText(this.currentWord);

   if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();

            if (this.facing == 'left')
            {
                this.player.frame = 0;
            }
            else
            {
                this.player.frame = 5;
            }

            this.facing = 'idle';
        }
    }

    if (this.jumpButton.isDown && this.game.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -250;
        this.jumpTimer = this.game.time.now + 750;
    }
	
	
}

/*var sprite;
var bullets;

var fireRate = 100;
var nextFire = 0;
*/

 create() {
   // this.pumpkinHitCount= 0;
    //this.facing = 'right';
    this.jumpTimer = 0;
    //this.score = 0;
	

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	

/*
    bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(50, 'bullet');
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);
    
    this.sprite = this.game.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.set(0.5);

    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    this.sprite.body.allowRotation = false;
	*/
	
	
	
this.game.physics.arcade.gravity.y = 250;
      this.game.stage.backgroundColor = '#000000';
      this.bg = this.game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');
      this.bg.fixedToCamera = true;
	  
	  this.player = game.add.sprite(32, 48, 'dude');
	       this.tile = this.game.add.tileSprite(0, this.game.height - 167 - 10, window.innerWidth, 167, 'tile');
   // this.title.checkCollision = { none: false, any: true, up: true, down: true, left: true, right: true };

	  this.game.physics.enable([this.player, this.tile], Phaser.Physics.ARCADE);
	  this.player.body.collideWorldBounds = true;
	 // this.tile.collide = true;
	  	 // this.game.physics.enable(this.tile, Phaser.Physics.ARCADE);

	  
	 //sprite1 = this.add.tileSprite(100, 100, 150, 150, 'tile');

	  //    this.matter.add.gameObject(sprite1).setFrictionAir(0.001).setBounce(0.8);
	  
	     this.tile.body.collideWorldBounds = true;
    this.tile.body.immovable = true;
    this.tile.body.allowGravity = false;

	

     this.player.animations.add('turn', [4], 20, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);

     
	 this.player.body.bounce.y = 0.2;
      this.player.body.collideWorldBounds = true;
      this.player.body.setSize(20, 32, 5, 16);


      this.player.animations.add('left', [0, 1, 2, 3], 10, true);
      this.player.animations.add('turn', [4], 20, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);
	  
	  this.cursors =  this.game.input.keyboard.createCursorKeys();
     this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	  
	  
	  
	  

     this.game.camera.follow(this.player);
	 dtml.getWords(1, this.renderwords, this);
     this.scoreText = this.game.add.text(600, 96, 'Score: 0', { fontSize: '16px', fill: '#fff' });
	 
	 

    //  this.map = this.game.add.tilemap('level1');

    //  this.map.addTilesetImage('tiles-1');

    //  this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    //  this.layer = this.map.createLayer('Tile Layer 1');

      //this.layer.debug = true;

    //  this.layer.resizeWorld();

    /*  this.game.physics.arcade.gravity.y = 250;

      this.player = game.add.sprite(32, 32, 'dude');
      this.pumpkin = {};
	  this.letters = {};
	 // this.bats = {};
      this.maxPumpkins = 10;
      this.pumpkinCount = 0;
      this.addPumpkins(this.maxPumpkins);
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      this.player.body.bounce.y = 0.2;
      this.player.body.collideWorldBounds = true;
      this.player.body.setSize(20, 32, 5, 16);


      this.player.animations.add('left', [0, 1, 2, 3], 10, true);
      this.player.animations.add('turn', [4], 20, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);

     this.game.camera.follow(this.player);

     this.cursors =  this.game.input.keyboard.createCursorKeys();
     this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
     dtml.getWords(1, this.renderwords, this);
     this.scoreText = this.game.add.text(600, 96, 'Score: 0', { fontSize: '16px', fill: '#fff' });
	 
	 */
}

enterletter(a)
{

}

submitAnswer(a)
{
 
 /*var fail = false;

 for(var i = 0; i < this.currentWord.length; i++)
  {
	 if  (this.textBox[i].value != this.currentWord[i])
	 {
       fail = true;
       break;
	 }
  }

  this.clearTextBoxs();
  if (!fail)
  {
      this.score += 10 * (this.currentWord.length - this.pumpkinHitCount);
      this.scoreText.text = 'Score: ' + this.score.toString();
  }
  else{
  }
  /*} else {
      this.player.kill();
  }*/

  //this.reloadPumpkins();
  //this.getNewWord();
  
}

clearTextBoxs() {
    for(var i = 0; i < this.currentWord.length; i++)
    {
      this.textBox[i].resetText();
      this.textBox[i].hide;
    }
}

addPumpkins(numberOfPumpkins) {
  /*  for(var i = 0; i < numberOfPumpkins; i++)
    {
        this.pumpkin[this.pumpkinCount] = this.game.add.sprite(32, 32, 'pumpkin');
        var x;
        if (this.pumpkinCount <= 9) {
            x = 160+88*(this.pumpkinCount%10);
        } else {
            x = game.rnd.integerInRange(0, 760);
        }

        this.pumpkin[this.pumpkinCount].x = x;
        this.game.physics.enable(this.pumpkin[this.pumpkinCount], Phaser.Physics.ARCADE);
        this.pumpkin[this.pumpkinCount].body.collideWorldBounds = true;
        this.pumpkin[this.pumpkinCount].body.bounce.y = 0.1;
        this.pumpkin[this.pumpkinCount].body.bounce.x = 0.1;
        this.pumpkinCount++;
    }
	
	*/
}




getNewWord() {

    dtml.getWords(1, this.renderwords, this);
}
removeObsoleteUI(that) {

    if (that.sumbmitbutton)
    {
        that.sumbmitbutton.kill();
    }

    if (that.sumbmitbuttonText)
    {
        that.sumbmitbuttonText.kill();
    }

    // If we can figure out how to update their position,
    // we don't need to kill them, just hide\reposition some components
    if (that.currentWord)
    {
        for(var i = 0; i < that.currentWord.length; i++)
        {
            that.letters[i].kill();
            that.textBox[i].kill();
        }
    }
}

// data is the input word that will display
// letter is the buttons
renderwords(data, that)
{
      that.wordsForLearning = data;
	  //If word length is greater than 6 then generate another word
      var j = 0;
      that.removeObsoleteUI(that);
	  that.textBox = {};
	  that.letters =  {};

	  while(data.words[j].length > 6)
	  {
			j++;
      }

	  that.currentWord = data.words[j];
	  
	  
	 
	 
/*var i=0;
	 //for(var i = 0; i < that.currentWord.length; i++)
	  // {
	  	that.letters[i] = that.game.add.button(80+80*i, 10, 'letter', that.enterletter, that,1,0,0,0);
		that.textBox[i] = that.add.inputField(80++200+80*i+10, 20, {
            font: '40px Arial',
            fontWeight: 'bold',
            width: 40,
            padding: 8,
			fill: '#fff',
			backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            placeHolder: '',
            focusOutOnEnter: false,
        });
	 // }

*/
	  that.sumbmitbutton = that.game.add.button(80*(data.words[j].length+1), 10, 'button', that.submitAnswer, that,1,0,0,0);
	  that.sumbmitbuttonText = that.game.add.text(that.sumbmitbutton.x+30, that.sumbmitbutton.y+20, "Submit", { font: "30px sans-serif", fill: "#ffffff", stroke:"#000000", strokeThickness:"6"      });
}
fire() {

    if (game.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        bullet.reset(sprite.x - 8, sprite.y - 8);

        game.physics.arcade.moveToPointer(bullet, 300);
    }

}


render() {
  }
}
