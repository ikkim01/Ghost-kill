let body = document.querySelector('body')
let hero = document.querySelector('.hero');
let movePx = 50;
body.addEventListener('keydown',move);
body.addEventListener('keyup',turn);
function turn(){
    hero.style.backgroundPositionX = 0+'px'; 
}
function moveLeft(){
    if(movePx < 89) {
        movePx += 5;
        return hero.style.left = movePx + '%';
    }
}
function moveRight(){
    if(movePx > 6) {
        movePx -= 5;
        return hero.style.left = movePx + '%';
    }
}
function move(event) {
    if(event.key == 'ArrowLeft') {
        hero.style.backgroundPositionX = 100+'px'; 
        moveRight();
    } else if(event.key == 'ArrowRight') {
        hero.style.backgroundPositionX = 50+'px'; 
        moveLeft();
    }
}




