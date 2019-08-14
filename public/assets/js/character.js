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

const positions2 = [
  "756px 0px",
  "648px 0px",
  "540px 0px",
  "432px 0px",
  "324px 0px",
  "216px 0px",
  "108px 0px",
  "0px 0px",
]

let timer = 0;
let setUP = true;

function walking() {
  if (setUP) {
    setUP = false;
    if (timer < positions.length) {
      box2.style.backgroundPosition = positions2[timer];
      timer++
    } else {
      timer = 0;
      box2.style.backgroundPosition = positions2[timer];
      timer++;
    }
    setTimeout(function() { walking() }, 150)
  }
}

// walking();
box2.addEventListener("mouseenter", function() {
  console.log("hit");
  if (setUP) {
    setUP = !setUP;
  } else {
    setUP = !setUP;
    walking();
  }
})

document.addEventListener("keypress", function(e) {
  console.log(e.keyCode)
  if (e.keyCode === 100) {
    // console.log("run to right")
    walking();
  }
})

document.addEventListener("keyup", function(){
  setUP = true;
})
