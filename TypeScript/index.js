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
                console.log(jokeObject.joke);
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
                console.log(jokeObject.value);
                JOKE_ELEMENT.innerHTML = `${jokeObject.value}`;
            }
            catch (error) {
                console.error(`ERROR ${error}`);
            }
        }
    });
}
//Weather API
const WEATHER_ELEMENT = document.querySelector(`header`);
const WEATHER_API_URL = `https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`;
weather();
function weather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(`${WEATHER_API_URL}`); //wait for response from API
            const weatherObject = yield response.json();
            WEATHER_ELEMENT.innerHTML =
                `Avui a ${weatherObject.municipio.NOMBRE}: ${weatherObject.temperatura_actual}ºC - ${weatherObject.stateSky.description} `;
            console.log(`${weatherObject.municipio.NOMBRE}: ${weatherObject.temperatura_actual}ºC - ${weatherObject.stateSky.description} `);
        }
        catch (error) {
            console.error(`ERROR ${error}`);
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
    vote1.className = "display";
    let vote2 = document.getElementById("vote2");
    vote2.className = "display";
    let vote3 = document.getElementById("vote3");
    vote3.className = "display";
    console.log('Button clicked!');
}
//Ex 3
