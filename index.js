let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let firstTime = true;
let player = {
  name: "Snehasish Bhakat",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
// ----------------------------------------------------------

function startGame() {
  if (firstTime) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    isAlive = true;
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    hasBlackJack = false;
    firstTime = false;
  }
  renderGame();
}
// ------------------------------------------------------------

function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num == 1) {
    return 11;
  }
  if (num > 10) {
    return 10;
  }
  return num;
}
// -----------------------------------------------------------------

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let Card = getRandomCard();

    cards.push(Card);
    sum += Card;
    renderGame();
  }
}
// ----------------------------------------------------------------------------

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want a draw a new card?";
  } else if (sum === 21) {
    message = "Wooo! You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}
// -------------------------------------------------------------------------------

function reset() {
  sumEl.textContent = "Sum: " + 0;
  sum = 0;
  cards.length = 0;
  cardsEl.textContent = "Cards: ";
  firstTime = true;
  messageEl.textContent = "Want to play a round?";
}
// ------------------------------------------------------------------------
