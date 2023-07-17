"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vote_1 = require("./Vote");
//Ex1
const API_URL = `https://icanhazdadjoke.com/`;
const JOKE_ELEMENT = document.querySelector(`#joke`);
function nextJoke() {
    fetch(`${API_URL}`, {
        headers: {
            Accept: "application/json" // to get the infmation in json format
        }
    }) //returns a promise
        .then((response => response.json())) // pick up promise && parse it - retuns parsed pormise in JSON
        .then((jokeObject => {
        console.log(jokeObject.joke); // to acess the "joke field of the jokeObject in the array (from response)
    }));
}
//Ex2
const reportAcudits = [];
// let date.toISOString()=
function jokeScore(scoreNumber) {
    let joke = document.querySelector("#joke");
    let nowDate = new Date;
    let date = nowDate.toISOString();
    let score = parseInt("scoreNumber");
    let vote = new Vote_1.Vote(joke, score, date);
    reportAcudits.push(vote);
}
//voting button display
let nextJokeButton = document.querySelector("#nextJoke");
nextJokeButton.addEventListener("click", display, { once: true });
function display() {
    let vote1 = document.getElementById("vote1");
    vote1.className = "display";
    let vote2 = document.getElementById("vote2");
    vote2.className = "display";
    let vote3 = document.getElementById("vote3");
    vote3.className = "display";
    console.log('Button clicked!');
}
