//Here i need to make Cavas that will dissapear
const background1 = new Background()
const player = new Player()
let obstacles = []
let redRidingHoods = []

// const redRidingHood = new redRidingHood()



let WIDTH = 2000;
let HEIGHT = 1000;

function preload() {
    background1.preload()
    player.preload()
   
    ObstacleImage = loadImage("obstacle/hunter.gif")
    redRidingHoodImage = loadImage("redridinghood/girl.gif")


}

function setup() {
    let canvas = createCanvas(2000, 1000)   
    canvas.parent('canvas')
    // willReadFrequently = true
}



function draw() {
    background1.draw()
    player.draw()
    //Creating conditions for hunters
    if (frameCount % 500 === 0) {
        obstacles.push(new Obstacle(ObstacleImage))
    }
    obstacles.forEach(function (obstacle) {
        obstacle.draw()
        // if (obstacle.collision(player)){player.score--}
    })
    obstacles = obstacles.filter(obstacle => {
        return !obstacle.collision(player)
    })
    //Creating contitions for redridinghoods
    if (frameCount % ((Math.floor(Math.random() * 100))+ 100) === 0) {
        console.log('creating')
        redRidingHoods.push(new redRidingHood(redRidingHoodImage))
    }
    redRidingHoods.forEach(function (redRidingHood) {
        redRidingHood.draw()
    })
    redRidingHoods = redRidingHoods.filter(redRidingHood => {
        return !redRidingHood.collision(player)
    })

  

    // document.querySelector("#lifeScore span").innerText = player.score
}

// player.score += 1


function keyPressed() {
    if (keyCode == 39) {
        clear()
      player.moveRight();
    }
  
    if (keyCode == 37) {
        clear()
      player.moveLeft();
    }
  
    // if (keyCode === 38) {
    //   game.player.moveUp();
    // }
  
    if (keyCode == 40) {
      player.moveDown();
    }

    if (keyCode == 32) {
      player.jump();
    }




    
  }