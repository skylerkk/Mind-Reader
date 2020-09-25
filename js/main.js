//Change states pseudocode

//Defines globals probably just state and elements that will be changed with the state
//probably starting state at 1 or 0.
//defining an <h1> for the title and instructions
//buttons to go next
//button to start taht also resets
//textbox below the button to go next

//state 1 has H1 with the title and only the button to start nothing else

//state 2 has H1 with instructions, button saying next, text below button, and reset where the go button was

//repeat for state 3-4 with different text

//state 5 H1 has all numbers and symbols, button saying reveal, text below button, and reset button

//state 6 H1 shows symbol, text below where button was in previous states, and reset button


//Define all the element variables
const mainBtn = document.getElementById("mainButton");
const resetBtn = document.getElementById("resetButton");
const header1 = document.getElementById("header");
const answer1 = document.getElementById("answer");
const img1 = document.getElementById("image1")
const img2 = document.getElementById("image2")
const infoP = document.getElementById("info");

//Define state to 1
var state = 1;

//Define array with symbols and a correctSymbol
let symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var correctSymbol = "";

//Styling for images 1 and 2
img1.style.width = "300px";
img1.style.height = "300px";
img1.style.marginTop = "-100px";
img1.style.marginBottom = "20px";
img2.style.marginTop = "-40px";
img2.style.width = "300px";
img2.style.height = "200px";

//Styleing display intalizeing hiding
img1.style.display = "none";
img2.style.display = "none";
infoP.style.display = "none";
mainBtn.style.display = "none";
answer1.style.display = "none";

//function to get an array of randoms symbols that is 100 elements long
function randomSymbols() {
    //correct symbol is w/e the symbol we choose randomly is
    correctSymbol = symbolArr[Math.floor(Math.random() * 10)];
    //define is initalized
    var text = "";
    //for loop that iterates 100 times
    for (let i = 0; i <= 99; i++) {
        //if i is not a factor of 9 run this
        if (i % 9) {
            //add a random symbol to the text string
            text += i + " - " + symbolArr[Math.floor(Math.random() * 10)] + "<br>";
        }
        else {
            // if i is a factor of 9 put the correct symbol at i
            text += i + " - " + correctSymbol + "<br>";
        }
    }
    return text;
}

//define style hider that just hides the style based upon if it gets 1 or -1
function styleHider(mainButton, image1, image2, info, answer) {
    if (mainButton === 1) {
        mainBtn.style.display = "block";
    }
    else {
        mainBtn.style.display = "none";
    }
    if (image1 === 1) {
        img1.style.display = "block";
    }
    else {
        img1.style.display = "none";
    }
    if (image2 === 1) {
        img2.style.display = "block";
    }
    else {
        img2.style.display = "none";
    }
    if (info === 1) {
        infoP.style.display = "block";
    }
    else {
        infoP.style.display = "none";
    }

    if (answer === 1) {
        answer1.style.display = "block";
    }
    else {
        answer1.style.display = "none";
    }

}

//switches event listener from switchAdd or switchReset
function switchEvent() {
    if (state === 1) {
        resetBtn.addEventListener("click", switchAdd);
        resetBtn.removeEventListener("click", switchReset);
    }
    else {
        resetBtn.addEventListener("click", switchReset);
        resetBtn.removeEventListener("click", switchAdd);
    }
}

//Just adds to state 1 and calls switchState()
function switchAdd() {
    state++;
    switchState();
}

//switchReset removes the button and hides styles with styleHider before switchState
function switchReset() {
    state = 1;
    resetBtn.removeEventListener("click", switchReset);
    styleHider(-1, -1, -1, -1, -1);
    switchState();
}

//switchState
function switchState() {
    switch (state) {
        //First case that should load a Go button and a header that calls a switchEvent
        case 1:
            resetButtonText = "Go";
            headerText = "I can read your mind!";
            header1.innerHTML = headerText;
            resetBtn.innerHTML = resetButtonText;
            switchEvent();
            break;
        //calls stylehider to show mainButton and info changes text
        case 2:
            styleHider(1,-1,-1,1,-1);
            header1.innerHTML = "Pick a number from 01-99";
            mainBtn.innerHTML = "Continue";
            infoP.innerHTML = "When you have your number click continue";;
            resetBtn.innerHTML = "Reset";
            switchEvent();
            break;
        //calls style hider shows mainButton nad info and changes text
        case 3:
            styleHider(1,-1,-1,1,-1);
            header1.innerHTML = "Add both digits together to get a new number";
            infoP.innerHTML = "Ex: 14 is 1 + 4 = 5 <br> click continue to proceed";
            resetBtn.innerHTML = "Reset";
            break;
        //calls style hider shows mainButton and info and changes text 
        case 4:
            styleHider(1,-1,-1,1,-1);
            header1.innerHTML = "Subtract your new number from the original number";
            infoP.innerHTML = "Ex: 14 -  5 = 9 <br> click next to proceed";
            break;
        //calls styleHider shows mainButton and calls randomsymbols and put it in the header element
        case 5:
            styleHider(1,-1,-1,1,-1);
            header1.innerHTML = randomSymbols();
            infoP.innerHTML = "Find your new number. <br> Note the symbol beside the number";
            break;
        //calls styleHider shows mainButon, image1, and info and changes text
        case 6:
            styleHider(1,1,-1,1,-1);
            header1.innerHTML = "Please wait!";
            infoP.innerHTML = "Your symbol is loading";
            break;
        //calls styleHider show image2, info, and answer and changes text
        case 7:
            styleHider(-1,-1,1,1,1);
            header1.innerHTML = "Your symbol is";
            answer1.innerHTML = correctSymbol;
            infoP.innerHTML = "Would you like to go again? <br> Click the reset button below to play again!";
            break;
    }
}

mainBtn.addEventListener("click", switchAdd);
switchState();
