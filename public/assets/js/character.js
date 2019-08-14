// 108 w 140 h 2 rows 8 columns

const box2 = document.getElementById("box2")


const character = {
  forwardFrames: [
    "0px 0px",
    "108px 0px",
    "216px 0px",
    "324px 0px",
    "432px 0px",
    "540px 0px",
    "648px 0px",
    "756px 0px",
  ],

  backwardFrames: [
    "0px 140px",
    "108px 140px",
    "216px 140px",
    "324px 140px",
    "432px 140px",
    "540px 140px",
    "648px 140px",
    "756px 140px",
  ],

  animationInterval: null,

  makeFowards: function(tester) {
    console.log(tester)
    console.log("running")
    console.log(this.forwardFrames.length)
    let long = 0;
    let which = 0;
    this.animationInterval = setInterval(function() {
      if (long >= 100) {
        clearInterval(this.animationInterval);
      } else {
        if (which < character.forwardFrames.length) {
          console.log("here")
          console.log(which)
          console.log(character.forwardFrames[which])
          tester.style.backgroundPostion = character.forwardFrames[which];
          long++;
          which++
        } else {
          which = 0;
          tester.style.backgroundPosition = character.forwardFrames[which];
          which++;
          long++
        }
      }
    }, 500)
  }
}

// character.makeFowards(box2)

// box2.style.backgroundPosition = "0px 0px";
// box2.style.backgroundPosition = "108px 0px";
// box2.style.backgroundPosition = "216px 0px";
// box2.style.backgroundPosition = "324px 0px";
// box2.style.backgroundPosition = "432px 0px";
// box2.style.backgroundPosition = "540px 0px";
// box2.style.backgroundPosition = "648px 0px";
// box2.style.backgroundPosition = "756px 0px";

const positions = [
  "0px 0px",
  "108px 0px",
  "216px 0px",
  "324px 0px",
  "432px 0px",
  "540px 0px",
  "648px 0px",
  "756px 0px",
];

const positionsRight = [
  "756px 0px",
  "648px 0px",
  "540px 0px",
  "432px 0px",
  "324px 0px",
  "216px 0px",
  "108px 0px",
  "0px 0px",
]

const positionsLeft = [
  "756px 140px",
  "648px 140px",
  "540px 140px",
  "432px 140px",
  "324px 140px",
  "216px 140px",
  "108px 140px",
  "0px 140px",
]

let timer = null;
let setUP = true;
let iterationNumber = 0;
let roundNumber = 0;
let xPOS = 0;

function walkingRight() {
  timer = setInterval(function() {
    if (roundNumber > 240) {
      clearInterval(timer);
      roundNumber = 0;
      iterationNumber = 0;
      document.addEventListener("keydown", walkingCheck, { once: true })
    } else {
      if (iterationNumber >= positionsRight.length) {
        iterationNumber = 0;
      }
      box2.style.backgroundPosition = positionsRight[iterationNumber];
      const moveAni = box2.animate([
        { transform: `translateX(${xPOS}px)` },
        { transform: `translateX(${xPOS + 10}px)` }
      ], {
          duration: 50,
          fill: "forwards"
        })
      moveAni.onfinish = function() {
        xPOS = xPOS + 10;
      }
      iterationNumber++;
      roundNumber++
    }
  }, 50)
}

function walkingLeft() {
  timer = setInterval(function() {
    if (roundNumber > 240) {
      clearInterval(timer);
      roundNumber = 0;
      iterationNumber = 0;
      document.addEventListener("keydown", walkingCheck, { once: true })
    } else {
      if (iterationNumber >= positionsLeft.length) {
        iterationNumber = 0;
      }
      box2.style.backgroundPosition = positionsLeft[iterationNumber];
      const moveAni = box2.animate([
        { transform: `translateX(${xPOS}px)` },
        { transform: `translateX(${xPOS - 10}px)` }
      ], {
          duration: 50,
          fill: "forwards"
        })
      moveAni.onfinish = function() {
        xPOS = xPOS - 10;
      }
      iterationNumber++;
      roundNumber++
    }
  }, 50)
}

document.addEventListener("keydown", walkingCheck, { once: true })

function walkingCheck(e) {
  console.log(e.keyCode)
  if (e.keyCode === 39) {
    walkingRight();
  } else if (e.keyCode === 37) {
    walkingLeft();
  }
}

document.addEventListener("keyup", function() {
  clearInterval(timer);
  document.addEventListener("keydown", walkingCheck, { once: true })
})