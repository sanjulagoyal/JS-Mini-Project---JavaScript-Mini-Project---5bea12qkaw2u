const dino = document.getElementById("dino");
const cactus = document.getElementById("obstacle");

function jump() {
  if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove("jump");
    },300)
  }
}

let isAlive = setInterval(function (){
    
    //get current dino y position
    let dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
    );
    
    //get current cactus x position
    let cactusLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
    );
    
    //detect collision
    if (cactusLeft <50 && cactusLeft >0 && dinoTop >=140){
        //collison
        alert("OOPS....Game over")
    }
    
},10); 
document.addEventListener("keydown",function(event){
    jump();
})