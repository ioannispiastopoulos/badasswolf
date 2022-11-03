class Player {
    constructor() {
        this.width = 300
        this.height = 150
        this.x = 0
        this.y = 940 - this.height
        this.gravity = 0.2
        this.velocity = 0
        this.kills = 0
        this.score = 3
        this.Image
        this.ImageUp
        this.ImageLeft 
        this.ImageDefault
        this.lifes 


    }

   preload(){
    this.Image = loadImage("player/wolf.gif")
    this.ImageUp = loadImage("player/wolfUp.gif")
    this.ImageDefault = loadImage("player/wolf.gif")
    this.ImageLeft = loadImage("player/wolfBack.gif")
    this.ImageLeftUp = loadImage("player/wolfBackUp.gif")
    this.ImageDown = loadImage("player/wolfDown.gif")
    this.ImageBackDown = loadImage("player/wolfBackDown.gif")
    
   }
    
    draw() {
        image(this.Image, this.x, this.y, this.width, this.height)

        this.velocity += this.gravity
        
        this.y += this.velocity

        if (this.y >= 940 - this.height) {
			this.y = 940 - this.height
		}
// If he goes up, and he looks to the right, he goes up
        if (this.velocity < 0 && this.Image === this.ImageDefault) {
            this.Image = this.ImageUp
            
        }

        if (this.velocity > 0 && this.Image === this.ImageUp) {
            this.Image = this.ImageDefault
            // this.width = 1400
            // this.height = 250
            }
        
        if (this.velocity < 0 && this.Image == this.ImageLeft) {
            this.Image = this.ImageLeftUp
        }

        if (this.velocity > 0 && this.Image === this.ImageLeftUp) {
            this.Image = this.ImageLeft
            }
        //    this.Image = this.ImageLeft

        if (this.score == 0) {
            ellipse(450, 400, 500, 500)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
            // strokeWeight(33)
        // noLoop()
        }

        if (this.kills == 1) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('BRO,', 280, 370);
            text("I AM FULL,", 280, 450)
            text("THX", 280, 540);
            text()
        }

        if (this.kills == 5) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('OH,', 280, 370);
            text("STOP IT,", 280, 450)
            text("PLZ", 280, 540);
            text()
        }

        if (this.kills == 5) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('OH,', 285, 370);
            text("NOOO,", 280, 450)
            text(":'(", 285, 540);
            text()
        }

        if (this.kills == 10) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('ARE,', 285, 370);
            text("U,", 290, 450)
            text("StUpID?", 280, 540);
            text()
        }

        if (this.kills == 12) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('I am', 285, 370);
            text("fed UP,", 280, 450)
            text("with this shit", 275, 540);
            text()
            
        }
        if (this.kills == 13) {
            ellipse(450, 400, 500, 500)
            textSize(75);
            textFont('Georgia');
            text('Fuck', 275, 420);
            text("it", 285, 500)
            text()
            noLoop()
        }
       
        
    }

  
    jump() {
        if (this.y <= 0) {
            this.y = 0
        }

        
        this.velocity = -9

    }
    
    moveLeft() {
        if (this.x > 0) {


            this.Image = this.ImageLeft
            this.x -= 150
        }
    }

    moveRight() {
        this.Image = this.ImageDefault
        if (this.x < 2000) {
            this.x += 150
        }
    }

    moveDown() {
        if (this.y > 0) {
            this.Image = this.ImageDown
            this.y += 150
        }
    }

   

    
}