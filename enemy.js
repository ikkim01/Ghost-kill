let gameStart = document.getElementsByClassName('gamestart')[0];
let ghost = document.querySelectorAll('.ghost');
let gameover = document.querySelector('.gameover');
let bg = document.querySelector('#bg');
let count = 0

let check = true;
function randomGhost () {
    if(!check){
        return;
    }
    let newGhost = document.createElement('div');
    newGhost.className = 'ghost';
    bg.appendChild(newGhost);
    let random = Math.floor((Math.random()* 18) + 1) * 5 + '%';
    newGhost.style.left = random;
    newGhost.style.display = 'block';
    let downHeight = 0;
    let interval = setInterval(() => {
        newGhost.style.top = downHeight + '%';
        downHeight += 1;
        if (newGhost.style.top > '85%') {
           if(hero.style.left === newGhost.style.left) {
               let audio = new Audio();
               audio.src = "./audio/dying.wav";
               audio.play();
            newGhost.style.backgroundPositionX = 50+'px';
            count++;
            document.querySelector('.count').innerText=count;
            clearInterval(interval);  
            setTimeout(() => {return newGhost.style.display = 'none';},1000)
           } 
        } 
        if(newGhost.style.top === '90%'){
            gameover.style.display = 'block';
            clearInterval(interval);
            check = false;
            newGhost.style.display = "none";    
            body.removeEventListener('keydown',move);
            body.removeEventListener('keyup',turn);
        }    
    }, 80);
}

gameStart.addEventListener('click',function gameBegin(){
    gameStart.removeEventListener('click',gameBegin);
    gameStart.style.backgroundColor = 'red';    
    gameStart.style.border = '3px solid #80abf9';
    setInterval(() => {
        randomGhost();
    }, 2000)
});




