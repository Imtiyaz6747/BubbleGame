var timer = 60;
var score = 0;
var numhit = 0;


//bubbles function
function numbobble(){
var clutter ="";

for (var i=1; i<=184; i++){
    var num = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${num}</div>`;
    
}
document.querySelector("#pbottom").innerHTML = clutter;
}

//timer function 
function runtimer(){
    var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML = `<h1 id="htag">Game Over</h2>`;
        }
    },1000);
}

//hit function 
function runhit(){
    numhit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = numhit;
}

//Score funtion
function increasscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbottom").addEventListener ("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum === numhit){
        increasscore();
        runhit();
        numbobble();
    }
});



runhit();
runtimer();
numbobble();
















