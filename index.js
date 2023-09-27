let timer = 60;
let score = 0;
let random = 0;
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 75; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#Time").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over. Now Fuck Off</h1>`
    }
  }, 1000);
}
function hitIt() {
  random = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = random;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent)
    if (clickedNum === random) {
     increaseScore();
     makeBubble();
     hitIt();  
} 
});

hitIt();
makeBubble();
runTimer();
