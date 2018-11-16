//canvas
var canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
//variables
var soundStar = document.createElement("audio")
soundStar.src="Audio/Trevor Rabin - Armagedon theme.mp3"
var soundInicio =document.createElement("audio")
soundInicio.src="http://66.90.93.122/ost/mario-kart-64/pgpwymbj/25%20Starting%20Race%203.mp3"
var soundDie = document.createElement('audio')
soundDie.src="http://66.90.93.122/ost/mario-bros/leyqroln/09%20mb%20game%20over.mp3"
var soundColi = document.createElement("audio")
soundColi.src="Audio/Explosion sonido efecto-[AudioTrimmer.com].mp3"



var interval
var frames = 0
var images = {
    fondo: "images/background_01_parallax_01.png",
    bg: "images/background_01_parallax_02.png",
    nubes: "images/background_01_parallax_06.png",
    mundo: "images/earth_combo1000px (5).png",
    mundo2: "images/earth_combo1000px (6).png",
    astronau: "images/caracter/Character Fly (1).png",
    astronau2: "images/caracter/Character Fly (2).png",
    astronau3: "images/caracter/Character Fly (3).png",
    astronau4: "images/caracter/Character Fly (4).png",
    astronau5: "images/caracter/Character Fly (5).png",
    astronau6: "images/caracter/Character Fly (6).png",
    astronau7: "images/caracter/Character Fly (7).png",
    astronauu: "images/Character Fly (1).png",
    bala: "images/caracter/Bullet (1).png",
    balaa: "images/Bullet (1).png",
    logo: "images/Game Logo (1).png",
    obstacle_bottom: "images/asteroid_07.png",
    obstacle_top: "images/asteroid_07.png",
    alien: "images/Alien Fly (1).png",
}
var astes = []


//clases
var puntuacion = 0
function Board(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
   
    this.image.src = images.fondo

    this.draw = function(){
        // this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
    }

    

    this.drawVidamundo = function(){
        ctx.font = "bold 24px Avenir"
        ctx.fillStyle = "white"
        ctx.fillText("Vida del Planeta: " + vidamundo, 50,50)
    }    
    
    this.drawPuntuacion = function(){
      
    
        ctx.font = "bold 24px Avenir"
        ctx.fillText("Puntuacion player 1 : " + puntuacion, 50,75)
        }

    this.drawPuntuacion2 = function(){
      
    
        ctx.font = "bold 24px Avenir"
        ctx.fillText("Puntuacion Player 2 : " + puntuacion2, 50,100)
        }

    
}









function Boardd(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
  
    this.image.src = images.bg

    this.draw = function(){
        this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
    }


}
function Boarddd(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = images.nubes
    this.draw = function(){
        // this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
    }


}




function Astronau() {
    Board.call(this)
    Boardd.call(this)
    Boarddd.call(this)
    // Bala.call(this)
    this.x = 500
    this.y = 270
    this.width = 120
    this.height = 120
    this.image.src = images.astronau
    this.image2 = new Image()
    this.image2.src = images.astronau2
    this.image3 = new Image()
    this.image3.src = images.astronau3
    this.image4 = new Image()
    this.image4.src = images.astronau4
    this.image5 = new Image()
    this.image5.src = images.astronau5
    this.image6 = new Image()
    this.image6.src = images.astronau6
    this.image7 = new Image()
    this.image7.src = images.astronau7
    this.activeImage = 1
    this.imagen = this.image

    this.changeImage = function () {
        if (this.activeImage === 1) {
            this.imagen = this.image2
            this.activeImage = 2
        } else if (this.activeImage === 2) {
            this.imagen = this.image3
            this.activeImage = 3
        } else if (this.activeImage === 3) {
            this.imagen = this.image4
            this.activeImage = 4
        } else if (this.activeImage === 4) {
            this.imagen = this.image5
            this.activeImage = 5
        } else if (this.activeImage === 5) {
            this.imagen = this.image6
            this.activeImage = 6
        } else if (this.activeImage === 6) {
            this.imagen = this.image7
            this.activeImage = 7
        } else {
            this.imagen = this.image
            this.activeImage = 1
        }
    }

    this.draw = function () {
        this.boundaries()
        if (frames % 15 === 0) this.changeImage()
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)

    }
    this.boundaries = function(){
                if(this.y+this.height > canvas.height-10) {
                    this.y = canvas.height-this.height
                }
                else 
                if(this.y < 10 ) {
                    this.y = 10
                }
         
        
            }
        
    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
    }
    
}











function Astronauu() {
    Board.call(this)
    Boardd.call(this)
    Boarddd.call(this)
    // Bala.call(this)
    this.x = 500
    this.y = 150
    this.width = 120
    this.height = 120
    this.image.src = images.astronauu
    this.activeImage = 1
    this.imagen = this.image

    this.draw = function () {
        this.boundaries()
        // if (frames % 15 === 0) this.changeImage()
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)

    }
    this.boundaries = function(){
                if(this.y+this.height > canvas.height-10) {
                    this.y = canvas.height-this.height
                }
                else 
                if(this.y < 10 ) {
                    this.y = 10
                }
                // else
                //  this.y-=2.01
        
            }
        
    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
    }
    
}



















function Mundo(){
    Board.call(this)
    Boardd.call(this)
    Boarddd.call(this)

    this.x = -280
    this.y = 0
    this.width = (canvas.width)/1.8
    this.height = canvas.height
    this.image.src = images.mundo


    this.image2 = new Image()
    this.image2.src = images.mundo2
    this.imagen = this.image





    this.changeImage = function () {
        if (vidamundo < 50) {
            this.imagen = this.image2
        
        } else {
            this.imagen = this.image
           
        }
    }

    this.draw = function () {
        this.boundaries()
        if (frames % 15 === 0) this.changeImage()
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)

    }
    this.boundaries = function(){
                if(this.y+this.height > canvas.height-10) {
                    this.y = canvas.height-this.height
                }
                else 
                if(this.y < 10 ) {
                    this.y = 10
                }
        
        
            }



    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
    }

}




//asteroide
function Aste(height,y, position){
    this.x = canvas.width + 60
    this.y = Math.floor(Math.random()*500 + 100)
    this.width = 60
    this.height = 60
    this.image = new Image()
    this.image.src = position === "top" ? images.obstacle_top : images.obstacle_bottom
    this.draw = function(){
        this.x-=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }
}


//Alien
function Alien(height,y, position){
    this.x = canvas.width + 60
    this.y = Math.floor(Math.random()*500 + 100)
    this.width = 120
    this.height = 120
    this.image = new Image()
    this.image.src = images.alien
    this.draw = function(){
        this.x-=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }
}

function Bala(x,y){
    this.x = x
    this.y = y
    this.width = 30
    this.height = 20
    this.image = new Image()
    this.image.src = images.bala
    this.draw = function(){
        this.x+=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
    }
   
}








function Balaa(x,y){
    this.x = x
    this.y = y
    this.width = 30
    this.height = 20
    this.image = new Image()
    this.image.src = images.balaa
    this.draw = function(){
        this.x+=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
    }
   
}



//instances
var fondo = new Board()
var bg = new Boardd()
var nubes = new Boarddd()
var mundo = new Mundo()
var astronau = new Astronau()
var astronauu = new Astronauu()
var bala = new Bala
var balaa = new Balaa
var aste = new Aste()
var alien = new Alien()
var s=0


//main functions
function start(){
    astes = []
    aliens = []
    balas = []
    balaas = []
    frames = 0
    astronau = new Astronau()
    astronauu = new Astronauu()
    if(!interval) interval = setInterval(update,1000/60)

    

}
function update(){
    frames++
    s++
    if(s===9) {

        soundStar.play()
    }

    ctx.clearRect(0,0,canvas.width, canvas.height)
    fondo.draw()
    bg.draw()
    nubes.draw()
    mundo.draw()
    astronau.draw()
    astronauu.draw()
    drawAstes()
    drawBalas()
    drawAliens()
    drawBalaas()
    
   
    
    mundo.drawPuntuacion()
    mundo.drawPuntuacion2()
    checkBalaCollition()
    checkBalaaCollition()
    checkMundoCollition()
    checkMundoCollitionAlien()
    checkBalaAlienCollition()
    checkBalaaAlienCollition()
}





function gameOver(){
    
    clearInterval(interval)
    mundo.drawVidamundo()
    interval = null
    ctx.fillStyle = "red"
    ctx.font = "bold 80px Arial"
    ctx.fillText ("Winner!", 500,200)
    ctx.fillStyle = "white"
    ctx.font = "bold 40px Arial"
    if(puntuacion > puntuacion2){
        ctx.fillText("Player 1 Tu Puntuacion es de : " + puntuacion + ", Eres un digno defensor de la Tierra", 40,300)
        ctx.fillText("Tu Premio!  http://bit.ly/2zfvcni ", 40,400)
        
    } else {
        ctx.fillText("Player 2 Tu Puntuacion es de : " + puntuacion2 + ", Eres un digno defensor de la Tierra", 40,300)
        ctx.fillText("Tu Premio!  http://bit.ly/2zfvcni ", 40,400)
    }
    
    ctx.font = "bold 20px Arial"
}






//aux functions
function drawCover(){
    var img = new Image()
    img.src = images.logo
    // videointro.play()
    img.onload = function(){
        fondo.draw()
        bg.draw()
        fondo.draw()
        // bala.draw()
        ctx.drawImage(img, 50,100,1200,600)
        ctx.font = "bold 24px Avenir"
        
    }

}



function generateAstes(){
    if(frames%70===0) {
        var height = Math.floor(Math.random()*200 + 50)
        var width = height
        var h = canvas.height-height-100
        var y = canvas.height - h
        astes.push(new Aste(h,y))
    }
    
}

//generando aliens
function generateAliens(){
    if(frames%1200===0) {
        var height = Math.floor(Math.random()*200 + 50)
        var width = height
        var h = canvas.height-height-100
        var y = canvas.height - h
        aliens.push(new Alien(h,y))
    }
    
}




function generateBalas(){
    if(frames%75===0) {
        var x = astronau.x + 100
        var y = astronau.y + 60
        balas.push(new Bala(x,y))
     }
    
}



function generateBalaas(){
    if(frames%75===0) {
    
        var x = astronauu.x + 100
        var y = astronauu.y + 60
        balaas.push(new Balaa(x,y))
     }
    
}




function drawAstes(){
    generateAstes()
    astes.forEach(function(aste){
        aste.draw()
    })
}


function drawAliens(){
    generateAliens()
    aliens.forEach(function(alien){
        alien.draw()
    })
}

function drawBalas(){
    generateBalas()
    console.log(balas);
    balas.forEach(function(bala){
        bala.draw()
    })

}







function drawBalaas(){
    generateBalaas()
    console.log(balaas);
    balaas.forEach(function(balaa){
        balaa.draw()
    })

}









var puntuacion = 0


function checkBalaCollition(){
    for(var aste of astes){
        for (var bala of balas ){
        if(bala.isTouching(aste)){
            astes.splice(astes.indexOf(aste),1)
            balas.splice(balas.indexOf(bala),1)
            puntuacion = puntuacion + 10 
            soundColi.play()
        }
        }
    }
}



var puntuacion2 = 0

//bala roja
function checkBalaaCollition(){
    for(var aste of astes){
        for (var balaa of balaas ){
        if(balaa.isTouching(aste)){
            astes.splice(astes.indexOf(aste),1)
            balaas.splice(balaas.indexOf(balaa),1)
            puntuacion2 = puntuacion2 + 10 
            soundColi.play()
        }
        }
    }
}








function checkBalaAlienCollition(){
    for(var alien of aliens){
        for (var bala of balas ){
        if(bala.isTouching(alien)){
            aliens.splice(aliens.indexOf(alien),1)
            balas.splice(balas.indexOf(bala),1)
            puntuacion = puntuacion - 5 
            soundColi.play()
        }
        }
    }
}



function checkBalaaAlienCollition(){
    for(var alien of aliens){
        for (var balaa of balaas ){
        if(balaa.isTouching(alien)){
            aliens.splice(aliens.indexOf(alien),1)
            balaas.splice(balaas.indexOf(balaa),1)
            puntuacion = puntuacion - 5 
            soundColi.play()
        }
        }
    }
}



var vidamundo = 100

function checkMundoCollition(){

    astes.map((aste, i) => {
       
        if (mundo.isTouching(aste)) {
            console.log('toco')
            astes.splice(i, 1)
            vidamundo = vidamundo - 10
            
        } 
       
    })
    mundo.drawVidamundo()

    if (vidamundo === 0 ){
        
        return gameOver()


    }
}
function checkMundoCollitionAlien(){

    aliens.map((alien, i) => {
       
        if (mundo.isTouching(alien)) {
            console.log('tocoooooooooooooo')
            aliens.splice(i, 1)
            vidamundo = vidamundo  + 30
            
        } 
       
    })
    mundo.drawVidamundo()

    if (vidamundo === 0 ){
        
        return gameOver()


    }
}




//listeners
addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 13:
            return start() 
        default:
            return
    }
} )


addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 38:
            astronau.y -=20;
        break
        case 40:
            astronau.y +=20;
        break
        case 39:
            astronau.x +=20;
        break
        case 37:
            astronau.x -=20;
        break
   
        default:
            return
    }
} )




addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 87:
            astronauu.y -=20;
        break
        case 83:
            astronauu.y +=20;
        break
        case 68:
            astronauu.x +=20;
        break
        case 65:
            astronauu.x -=20;
        break
 
        default:
            return
    }
} )





drawCover()