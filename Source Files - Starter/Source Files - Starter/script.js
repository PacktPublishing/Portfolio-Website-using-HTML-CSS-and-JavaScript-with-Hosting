


var mouseCircle = document.getElementById("mCircleId");
var mouseDot = document.getElementById("mDotId");

document.addEventListener("DomContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
});

const   mouseCircleFn = (x, y) => {
  //console.log("inside mouseCircleFn");
  //console.log(`X: ${x}, Y: ${y}`);

  try{
        mouseCircle.style.top = `${y}px`;
        mouseCircle.style.left = `${x}px`;
        mouseDot.style.top = `${y}px`;
        mouseDot.style.left = `${x}px`;
    }
    catch(err) {
        console.log(err);
    }
}
document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;

  if (!mouseCircle) {
    console.error("Element with ID 'mCircleId' not found!");
    return;
  }
    if (!mouseDot) {
    console.error("Element with ID 'mDotId' not found!");
    return;
  }

  if (typeof x !== "number" || typeof y !== "number") {
    console.error("Invalid parameters passed to mouseCircleFn!");
    return;
  }

  mouseCircleFn(x,y);
});

document.body.addEventListener('mouseleave',
() => {
  mouseCircle.style.opacity = `0`;
  mouseDot.style.opacity = `0`;}); 

document.body.addEventListener('mouseenter',
() => {
  mouseCircle.style.opacity = `1`;
  mouseDot.style.opacity = `1`;});
