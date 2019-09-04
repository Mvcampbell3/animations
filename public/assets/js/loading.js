const dots = [].slice.call(document.querySelectorAll(".dot"));
let dotsPack = dots.length;

function rollDots() {
  let startPack = 0;
  dots.forEach((dot, i) => {
    let timeBetween = 250;
    const dotAnimation = dot.animate({
      opacity: ["0", "1", "1", "0"],
      transform: ["translateX(0px) rotateZ(0deg)", "translateX(295px) rotateZ(320deg)"]
    }, {
      easing: "cubic-bezier(0.15, 0.66, 0.96, 0.25)",
      duration: 2500,
      delay: timeBetween * i
    })
    dotAnimation.onfinish = function() {
      startPack++;
      if (startPack >= dotsPack) {
        rollDots();
      }
    };
  })
}

rollDots();