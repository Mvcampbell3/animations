const Line = function(id, height, start, end) {
  this.id = id;
  this.height = height;
  this.start = start;
  this.end = end;
  this.distance = end * 50;

  this.checkTop = function(scrollHeight) {
    const elem = document.getElementById(this.id);
    if (scrollHeight >= this.start - this.distance) {
      elem.style.position = "fixed";
      elem.style.top = this.distance + "px";
    } else {
      elem.style.position = "absolute";
      elem.style.top = this.start + "px";
    }
  }
}

const line1 = new Line("line1", 50, 200, 2);
const line2 = new Line("line2", 50, 300, 1);
const line3 = new Line("line3", 50, 400, 0);

const lines = [line1, line2, line3];


function getTop() {
  const scrollHeight = window.pageYOffset;
  lines.forEach(line => line.checkTop(scrollHeight));
}

document.addEventListener("scroll", getTop);
