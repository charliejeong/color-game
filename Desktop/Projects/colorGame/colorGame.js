var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();	
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
			})
		}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
			//add event listeners
			squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			//compare colors
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
				} 
			});
		}
}
 

function reset(){
	colors = generateRandomColors(numSquares);
	// pick new random color
	pickedColor = pickColor();

	//change colorDisplay to match color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"

	//change colors on squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
})



function changeColors(color) {
	//loop through squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []
	//add num random colors to arr
	for (var i = 0; i < num; i++){
	//get random color and push to array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick 'red' 
	var r = Math.floor(Math.random() * 256)
	//pick 'green'
	var g = Math.floor(Math.random() * 256)
	// pick 'blue'
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", "+ g + ", "+ b+")";

}