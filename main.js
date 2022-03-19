cann = document.getElementById("myCanvas");
cannreff = cann.getContext("2d");
var mouseevent = ""
var color="violet";
var width=3;
var currentpositionx=0;
var currentpositiony=0;

cann.addEventListener("mousedown", mousedown);

function mousedown(e) {
mouseevent = "mousedown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;
}
cann.addEventListener("mouseup", mouseup);

function mouseup(e) {
mouseevent = "mouseup";
}
cann.addEventListener("mouseleave", mouseleave);

function mouseleave(e) {
mouseevent = "mouseleave";
}
cann.addEventListener("mousemove", mousemove);

function mousemove(e) {
    currentpositionx=e.clientX - cann.offsetLeft;
    currentpositiony=e.clientY - cann.offsetTop;
if (mouseevent == "mousedown") {
    cannreff.beginPath();
    cannreff.strokeStyle=color;
    cannreff.lineWidth=width;

    cannreff.arc(currentpositionx, currentpositiony, 40, 0, 2*Math.PI);
    cannreff.stroke();
    console.log("the mouse down has now started working");
}
}

function clearthething() {
    console.log("The Clearing Function is working");
    cannreff.clearRect(0, 0, 800, 600);
}



