var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var css = document.querySelector("h3");



function setGradient() {
	body.style.background ="linear-gradient(to right," + color1.value + ","+ color2.value+")";
	css.textContent = body.style.background;

}


// be careful here not to pass function as function

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

