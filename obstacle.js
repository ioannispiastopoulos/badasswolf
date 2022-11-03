class Obstacle {
    constructor (image) {
        this.ObstacleImage = image
        this.x = 1800
        this.y = (Math.random() * 200) + 220
        this.width = 250
        this.height = 250
        this.canvasWidth = 2000;
        this.canvasHeight = 1000;  
        this.speed = (Math.random() * 10) + 100

    
    }


draw() {

    this.x--
    image(this.ObstacleImage, this.x, this.y, this.width, this.height)
    



    // for(let i =0; i < this.obstacleArray.length; i++) {
    //     let currentHunter = this.obstacleArray[i];
        // if (dist(playerX, playerY, this.x, this.y) < 150) {
        //     player.score--;
        //     document.querySelector("#lifeScore span").innerText = player.score;
        //     // this.obstacleArray.splice(currentHunter, 1)
        // }

        
        
            
 
    //     return true;
    // }   else {
    //     return false;

    }

      
    // }

collision(player) {
    console.log("collision")

    // Get the middle of the obstacle

    // Get the middle of the player
    let obstacleX = this.x + this.width / 2
    let obstacleY = this.y + this.height / 2
    let playerX = player.x + player.width / 2
    let playerY = player.y + player.height / 2
    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(obstacleX, obstacleY, playerX, playerY) > 100) {
        return false
    } else {
        player.score--
        document.querySelector("#lifeScore span").innerText = player.score
        // Increment the score
        
        return true
    }
}
}