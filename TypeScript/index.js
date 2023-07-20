"use strict";
//API CALLS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//JOKE APIS
const JOKE_ELEMENT = document.querySelector(`#joke`);
let counter = 0;
function nextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        counter++;
        const DAD_JOKE_API = `https://icanhazdadjoke.com/`;
        const CHUCK_NORRIS_API = `https://api.chucknorris.io/jokes/random`;
        if (counter % 2 === 0) {
            try {
                let response = yield fetch(`${DAD_JOKE_API}`, {
                    headers: {
                        Accept: "application/json" // to get the infmation in json format
                    }
                }); // wait for API response
                let jokeObject = yield response.json(); // wait for parsed response
                JOKE_ELEMENT.innerHTML = `${jokeObject.joke}`;
            }
            catch (error) {
                console.error(`ERROR ${error}`);
            }
        }
        else {
            try {
                let response = yield fetch(`${CHUCK_NORRIS_API}`, {
                    headers: {
                        Accept: "application/json" // to get the infmation in json format
                    }
                });
                let jokeObject = yield response.json(); // wait for parsed response
                JOKE_ELEMENT.innerHTML = `${jokeObject.value}`;
            }
            catch (error) {
                console.error(`ERROR ${error}`);
            }
        }
    });
}
//Weather API
weather();
function weather() {
    return __awaiter(this, void 0, void 0, function* () {
        const WEATHER_ELEMENT = document.querySelector(`header`);
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=195.235.110.69';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7f77d58ba1mshcead7005ecf6564p12fe8fjsnbf38bd45f442',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        try {
            const response = yield fetch(url, options);
            const result = yield response.json();
            WEATHER_ELEMENT.innerHTML =
                `<img id="weatherIcon" src="${result.current.condition.icon}" alt="${result.current.condition.text}">`
                    +
                        `Avui a ${result.location.name}: ${result.current.temp_c}ºC  `;
        }
        catch (error) {
            console.error(error);
        }
    });
}
//JOKE VOTES
const reportAcudits = [];
class Vote {
    constructor(joke, score, date) {
        this.joke = joke,
            this.score = score,
            this.date = date;
    }
    get _joke() {
        return this.joke;
    }
    set _score(newSc) {
        this.score = newSc;
    }
}
//create or update joke object in array
function jokeScore(score) {
    let jokeP = document.querySelector("#joke");
    let joke = jokeP.innerHTML;
    let nowDate = new Date;
    let date = nowDate.toISOString();
    let indexJoke = reportAcudits.map(acudit => acudit.joke).indexOf(joke);
    if (indexJoke === -1) {
        let vote = new Vote(joke, score, date);
        reportAcudits.push(vote);
    }
    else {
        reportAcudits[indexJoke].score = score;
    }
    console.log(reportAcudits);
}
//voting button display
let nextJokeButton = document.querySelector("#nextJoke");
nextJokeButton.addEventListener("click", display, { once: true });
function display() {
    let vote1 = document.getElementById("vote1");
    vote1.className = "display voteIcon";
    let vote2 = document.getElementById("vote2");
    vote2.className = "display voteIcon";
    let vote3 = document.getElementById("vote3");
    vote3.className = "display voteIcon";
}
//background Image Change
nextJokeButton.addEventListener("click", backgroundImage);
function backgroundImage() {
    let blobContainer = document.getElementById("blobContainer");
    let source = "";
    let num = Math.floor(Math.random() * 6) + 1;
    switch (num) {
        case 1:
            source = "blobImages/blobBlue.svg";
            break;
        case 2:
            source = "blobImages/blobGreen.svg";
            break;
        case 3:
            source = "blobImages/blobLightBlue.svg";
            break;
        case 4:
            source = "blobImages/blobPink.svg";
            break;
        case 5:
            source = "blobImages/blobPurple.svg";
            break;
        case 6:
            source = "blobImages/blobTurquoise.svg";
            break;
    }
    blobContainer.style.backgroundImage = `url("${source}")`;
}
