const box2 = document.getElementById("box2");
let box2Animation;
went = false;
let turn = 0;

function playAnimation() {
  const moveArr = settleP();

  box2Animation = box2.animate({
    transform: [`translate(${moveArr[0]}px, ${moveArr[2]}px)`, `translate(${moveArr[1]}px, ${moveArr[3]}px)`]
  }, {
      easing: "linear",
      duration: moveArr[4],
      fill: "forwards"
    })
  box2Animation.onfinish = function() {
    if (turn <= 4) {
      // box2.addEventListener("click", playAnimation, { once: true })
      playAnimation();
    } else {
      console.log("no more")
    }
  }
}

function settleP() {
  let xp1, xp2, yp1, yp2, times;
  switch (turn) {
    case 0:
      xp1 = -110;
      xp2 = -110;
      yp1 = 0;
      yp2 = 300;
      times = 1000;
      turn++;
      break;
    case 1:
      xp1 = -110;
      xp2 = -55;
      yp1 = 300;
      yp2 = 300;
      times = 333;
      turn++;
      break;
    case 2:
      xp1 = -55;
      xp2 = -55;
      yp1 = 300;
      yp2 = 0;
      times = 1000;
      turn++;
      break;
    case 3:
      xp1 = -55;
      xp2 = -0;
      yp1 = 0;
      yp2 = 0;
      times = 333;
      turn++;
      break;
    case 4:
      xp1 = 0;
      xp2 = 0;
      yp1 = 0;
      yp2 = 300;
      times = 1000;
      turn++;
      break;
    default:
      console.log("switch did not work");
  }
  return [xp1, xp2, yp1, yp2, times];
}

box2.addEventListener("click", function() {
  playAnimation();
  switchBackgrounds();
}, { once: true })

function switchBackgrounds() {
  console.log("started switchback")
  let howLong = 0;
  const background1 = "-10px -10px";
  const background2 = "-10px -115px";
  const background3 = "-115px -10px"
  // const background1 = "green";
  // const background2 = "blue";
  let flipper = 0;
  const backs = [background1, background2, background3];
  const timer = setInterval(function() {
    console.log("inside of timer")
    if (howLong >= 15) {
      clearInterval(timer);
      // switchBackgrounds();
    } else {
      switch (flipper){
        case 0:
          box2.style.backgroundPosition = background1;
          break;
        case 1:
          box2.style.backgroundPosition = background2;
          break;
        default:
          box2.style.backgroundPosition = background3;
          flipper = -1;
      }
      flipper++;
      howLong++;
    }
  }, 250)
}
