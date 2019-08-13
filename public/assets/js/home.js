const box2 = document.getElementById("box2");
let paused = false;

const box2Animation = box2.animate({
  transform: ["translate(0px,0px) rotateZ(0deg)", "translate(100px, 0px) rotateZ(45deg)"],
  // opacity: [0, 1],
  boxShadow: ["0px 0px 0px black", "4px 4px 4px black", "12px 12px 12px #333"],
  borderRadius: ["0px", "1%","50%"]
}, {
    easing: "linear",
    duration: 1000,
    iterations: "Infinity",
    direction: "alternate"
  })

box2.addEventListener("click", () => {
  if (!paused) {
    box2Animation.pause();
    return paused = true;
  }
  box2Animation.play();
  paused = false;
})