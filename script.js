var character = document.querySelector('.character');
var block = document.querySelector('.block');
var score = document.querySelector('.score');
var intScore = 0;
inair = false;

function jump() {
    character.classList.add('animation');

    setTimeout(function () {
        character.classList.remove('animation');
    }, 500)

}

document.body.onkeydown = function (event) {
    if (inair == false){
        if (event.keyCode == 32) {
            jump();
        }
    }
    inair = true;
}

document.body.onkeyup = function (event) {
    if (event.keyCode == 32){
        inair = false;
    }
}

setInterval(function () {
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft<40 && blockLeft>0 && charTop > 310){
        alert('U lose!');
        block.style.animation = "none";
        block.style.display = "none";
        increaseScore = "none"
        location.reload()
    }
}, 1)

function increaseScore(){
    score.innerHTML = "Score: " + intScore
    intScore += 1
}

setInterval(function(){
    increaseScore()
}, 1)