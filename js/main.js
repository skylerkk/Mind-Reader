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

const mainBtn = document.getElementById("mainButton");
const resetBtn = document.getElementById("resetButton");
const header1 = document.getElementById("header");
const answer1 = document.getElementById("answer");
const infoP = document.getElementById("info");
var state = 1;
let buttonText = "";
let headerText = "";
let answerText = "";
mainBtn.addEventListener("click", switchAdd);
let symbolArr = ["!","@","#","$","%","^","&","*","(",")"];
var correctSymbol = "";

function randomSymbols(){
    correctSymbol = symbolArr[Math.floor(Math.random()*10)];
    var text = "";
    for (let i = 1; i <= 99; i++){
        if (i % 9) {
            let randomSymbol = symbolArr[Math.floor(Math.random() * 10)];
            text += i + " - " + randomSymbol + "<br>";
        }
        else {
            text += i + " - " + correctSymbol + "<br>";
        }
    }
    return text;
}

function switchAdd(){
    state++;
    switchState();
}

function switchReset(){
    state = 1;
    resetBtn.removeEventListener("click", switchReset);
    switchState();
}
function switchState(){
    switch (state) {
        case 1:
            resetButtonText = "Go";
            headerText = "I can read your mind!";
            infoP.style.display = "none";
            mainBtn.style.display = "none";
            answer1.style.display = "none";
            header1.innerHTML = headerText;
            resetBtn.innerHTML = resetButtonText;
            resetBtn.addEventListener("click", switchAdd);
            break;
        case 2:
            resetButtonText = "Reset";
            headerText = "Pick a number from 01-99";
            mainButtonText = "Continue";
            infoText = "When you have your number click continue";
            infoP.style.display = "block";
            mainBtn.style.display = "block";
            header1.innerHTML = headerText;
            mainBtn.innerHTML = mainButtonText;
            infoP.innerHTML = infoText;
            resetBtn.innerHTML = resetButtonText;
            resetBtn.removeEventListener("click", switchAdd);
            resetBtn.addEventListener("click", switchReset);
            break;
        case 3:
            resetButtonText = "Reset";
            headerText = "Add both digits together to get a new number";
            infoText = "Ex: 14 is 1 + 4 = 5 <br> click continue to proceed";
            mainButtonText = "Continue";
            header1.innerHTML = headerText;
            mainBtn.innerHTML = mainButtonText;
            infoP.innerHTML = infoText;
            resetBtn.innerHTML = resetButtonText;
            break;
        case 4:
            resetButtonText = "Reset";
            headerText = "Subtract your new number from the original number";
            infoText = "Ex: 14 -  5 = 9 <br> click next to proceed";
            mainButtonText = "Continue";
            header1.innerHTML = headerText;
            mainBtn.innerHTML = mainButtonText;
            infoP.innerHTML = infoText;
            resetBtn.innerHTML = resetButtonText;
            break;
        case 5:
            resetButtonText = "Reset";
            mainButtonText = "Continue";
            headerText = randomSymbols();
            infoText = "Find your new number. <br> Note the symbol beside the number";
            header1.innerHTML = headerText;
            mainBtn.innerHTML = mainButtonText;
            infoP.innerHTML = infoText;
            resetBtn.innerHTML = resetButtonText;
            break;
        case 6:
            mainBtn.style.display = "none";
            answer1.style.display = "block";
            resetButtonText = "Reset";
            headerText = "Your symbol is";
            header1.innerHTML = headerText;
            answer1.innerHTML = correctSymbol;
            resetBtn.innerHTML = resetButtonText;
            break;
    }
}

mainBtn.addEventListener("click", switchAdd);
switchState();
