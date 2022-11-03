
class Background {
    constructor() {
        this.image
        this.x = 0
        this.y = 0
        this.backgroundImages
    }

preload() {
   
    this.backgroundImages = [
        {src: loadImage("background/forest/layer1.png"), x: 0, speed: 1 },
        {src: loadImage("background/forest/layer2.png"), x: 0, speed: 2 },
        {src: loadImage("background/forest/layer3.png"), x: 0, speed: 1 },
        {src: loadImage("background/forest/layer4.png"), x: 0, speed: 1 },
        {src: loadImage("background/forest/layer5.png"), x: 0, speed: 1 },
        {src: loadImage("background/forest/layer6.png"), x: 0, speed: 2 },
        {src: loadImage("background/forest/layer7.png"), x: 0, speed: 1 },
        {src: loadImage("background/forest/layer8.png"), x: 0, speed: 1 },
        // {src: loadImage("background/forest/layer9.png"), x: 0, speed: 1 },
        // {src: loadImage("background/forest/layer10.png"), x: 0, speed: 0 },
        // {src: loadImage("background/forest/layer11.png"), x: 0, speed: 0 },
        // { src: loadImage("background/forest/layer12.png"), x: 0, speed: 0 },
    ]


}

draw() {

    clear()
    this.backgroundImages.forEach((img) => {
        img.x -= img.speed

        image(img.src, img.x, 0, width, height)
        image(img.src, img.x + width, 0, width, height)
        if (img.x <= -width) img.x = 0
    })
    
   

}
}
