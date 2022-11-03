class redRidingHood {
    constructor (image) {
        this.redRidingHoodImage = image
        this.x = 1800
        this.y = (Math.random() * 30) + 730
        this.width = 100
        this.height = 200
        this.canvasWidth = 2000;
        this.canvasHeight = 1000;  
        this.speed = Math.random() * 200
        this.randomNum = 1;
    
    }


draw() {
    if (frameCount % 100 === 0) {
        this.randomNum = (Math.floor((Math.random() * 5) + 1));
    }
    this.x = this.x - this.randomNum

    image(this.redRidingHoodImage, this.x, this.y, this.width, this.height)


}


collision(player) {
    console.log("collision")

    // Get the middle of the obstacle

    // Get the middle of the player
    let redRidingHoodX = this.x + this.width / 2
    let redRidingHoodY = this.y + this.height / 2
    let playerX = player.x + player.width / 2
    let playerY = player.y + player.height / 2
    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(redRidingHoodX, redRidingHoodY, playerX, playerY) > 100) {
        return false
    } else {
        
        player.kills++
        document.querySelector("#food span").innerText = player.kills
        // Increment the score
        
        return true
    }
}



}
