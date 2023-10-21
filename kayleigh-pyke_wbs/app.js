const coords = { x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

const colors = [
    "#1c2b1c",
    "#1d2d1d",
    "#213321",
    "#273c27",
    "#2e482e",
    "#365436",
    "#3e613e",
    "#466e46",
    "#4d794d",
    "#538353",
    "#578957",
    "#588b58"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 6 + "px";
        circle.style.top = y - 6 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}


animateCircles();