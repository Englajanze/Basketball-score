


let homeEl = document.getElementById("scoreboard-home-el")
let guestEl = document.getElementById("scoreboard-guest-el")
let newGameEl = document.getElementById("newgame-el")
let countHome = 0
let countGuest = 0

function homeOne() {
    countHome += 1;
    homeEl.textContent = countHome
}

function homeTwo() {
    countHome += 2;
    homeEl.textContent = countHome
}

function homeThree() {
    countHome += 3;
    homeEl.textContent = countHome
}

function guestOne() {
    countGuest += 1;
    guestEl.textContent = countGuest
}

function guestTwo() {
    countGuest += 2;
    guestEl.textContent = countGuest
}

function guestThree() {
    countGuest += 3;
    guestEl.textContent = countGuest
}

function newGame() {
    guestEl.textContent = 0
    homeEl.textContent = 0
    countHome = 0;
    countGuest = 0;
    
}