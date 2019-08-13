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
      box2.addEventListener("click", playAnimation, { once: true })
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

box2.addEventListener("click", playAnimation, { once: true })
