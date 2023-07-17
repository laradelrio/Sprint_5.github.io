
import {Vote} from './Vote';

import {Votes} from './interfaces'

//Ex1

const API_URL = `https://icanhazdadjoke.com/`

const JOKE_ELEMENT = document.querySelector(`#joke`);

function nextJoke(){
fetch(`${API_URL}`, {  //fetch for GET request
    headers: {
        Accept: "application/json"  // to get the infmation in json format
    }
})  //returns a promise
    .then((response => response.json())) // pick up promise && parse it - retuns parsed pormise in JSON
    .then((jokeObject => { //picksup parsed response
        console.log(jokeObject.joke); // to acess the "joke field of the jokeObject in the array (from response)
    }));

}  

//Ex2
const reportAcudits : 
    Votes[] = [];


// let date.toISOString()=


function jokeScore(scoreNumber: number){
    let joke = document.querySelector("#joke") as HTMLElement;
    let nowDate= new Date;
    let date = nowDate.toISOString();
    let score = parseInt("scoreNumber");
    let vote = new Vote (joke, score, date);

    reportAcudits.push(vote)

}

//voting button display
let nextJokeButton = document.querySelector("#nextJoke") as HTMLElement;
nextJokeButton.addEventListener("click", display,{once : true});


function display(){
    let vote1 = document.getElementById("vote1") as HTMLElement;
    vote1.className= "display";
    let vote2 = document.getElementById("vote2") as HTMLElement;
    vote2.className= "display";
    let vote3 = document.getElementById("vote3") as HTMLElement;
    vote3.className= "display";
    console.log('Button clicked!');
}