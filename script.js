let startBtn = document.querySelector(".start");
let checkBtn = document.querySelector(".check-out");
let cardEl = document.querySelector(".cardHead");
let sumEl = document.querySelector(".sumHead");
let cards = document.querySelector(".cards");
let sumCnt = document.querySelector(".sum-cnt");

let gamePlayFlag = false;
let competition = Math.floor(Math.random() * 10) + 2;

let Cards = "";
let Sum = 0;
let newCard = Math.floor(Math.random() * 10) + 2;
let nextState = -1;

function finalize() {
    if (gamePlayFlag === false) {
        nextState = -1;
    }
    else if (Sum < 21 && Sum < competition) {
        nextState = 1;
    } else if (Sum === 21 ||  Sum >= competition && Sum < 21) {
        nextState = 2;
    } else {
        nextState = 3;
    }
    // Redirect to the new page with nextState as a query parameter
    window.location.href = `finalize.html?nextState=${nextState}&competition=${competition}&sum=${Sum}`;
}

function gamePlay() {
    if (gamePlayFlag) {
        newCard = Math.floor(Math.random() * 10) + 2;
        Cards += (Cards ? ", " : "") + newCard;
        Sum += newCard;
        if (Sum >= 21) {
            finalize();
        }
    }
    document.getElementsByClassName("ruby")[0].src = "bruh.jpg";
    gamePlayFlag = true;
    cardEl.textContent = "Cards: ";
    cards.textContent = Cards;
    sumEl.textContent = "Sum: ";
    sumCnt.textContent = Sum;
    startBtn.textContent = "New Card";
    checkBtn.textContent = "Finalize";
}

