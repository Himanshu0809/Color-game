var numberofsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easybtn=document.querySelector("#easybtn");
// var hardbtn=document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //modeButtons event Listeners
    setupMode();
    setupSquare();
    reset();
}
function setupMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy")
                numberofsquares = 3;
            else
                numberofsquares = 6;
            reset();
        });
    }

}

function setupSquare() {
    for (var i = 0; i < squares.length; i++) {

        //add click listeners to sqaures
        squares[i].addEventListener("click", function () {
            //grab the color of the clicked sqaure
            //compare the color with pickedColor
            var clickedColor = this.style.background;
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.background = pickedColor;
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }

        });
    }
}

function reset() {
    colors = generateRandomColors(numberofsquares);
    //pick a new random color from ar
    pickedColor = pickColor();
    //change colorDisplaay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}

// easybtn.addEventListener("click",function()
// {
//     easybtn.classList.add("selected");
//     hardbtn.classList.remove("selected");
//     numberofsquares=3;
//     colors=generateRandomColors(numberofsquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
//         if(colors[i]){
//             squares[i].style.background=colors[i];
//         }
//         else
//         {
//             squares[i].style.display="none";
//         }

//     }
// });
// hardbtn.addEventListener("click",function()
// {
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numberofsquares=6;
//     colors=generateRandomColors(numberofsquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
//         squares[i].style.background=colors[i];
//         squares[i].style.display="block";


//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    //pick red, green and blue from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
