window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// var start = null;
// var ele = document.getElementById("test");
// var progress = 0;

// function step(timestamp) {
//     progress += 1;
//     ele.style.width = progress + "%";
//     ele.innerHTML=progress + "%";
//     if (progress < 100) {
//         requestAnimationFrame(step);
//     }
// }
// requestAnimationFrame(step);
// document.getElementById("run").addEventListener("click", function() {
//     ele.style.width = "1px";
//     progress = 0;
//     requestAnimationFrame(step);
// }, false);

var dur = 2000;
var p = 0;
var startTime = Date.now();
var start = null;
var easing = function(p){return p*p};


function slide(timestamp){
	var square = document.getElementById("square");
	p = (Date.now()-startTime)/dur;

	if(p >= 1){
		square.style.top = 300 + "px";
	} else{
		square.style.top = 100 + p*200 + "px";//ease p*p*200
		requestAnimationFrame(slide);
	}
}
requestAnimationFrame(slide)
