


//Ex1

const DAD_JOKE_API = `https://icanhazdadjoke.com/`

const JOKE_ELEMENT = document.querySelector(`#joke`) as HTMLElement;

function nextJoke(){
fetch(`${DAD_JOKE_API}`, {  //fetch for GET request
    headers: {
        Accept: "application/json"  // to get the infmation in json format
    }
})  //returns a promise
    .then((response => response.json())) // pick up promise && parse it - retuns parsed pormise in JSON
    .then((jokeObject => { //picksup parsed response
        console.log(jokeObject.joke); // to acess the "joke field of the jokeObject in the array (from response)
        JOKE_ELEMENT.innerHTML= `${jokeObject.joke}`;
    }));

}  

//Ex2
const reportAcudits : { 
    joke: string ;
    score: number;
    date : string;}[] = [];


export class Vote {
    joke: string ;
    score: number;
    date : string;
    constructor(joke: string, score: number, date : string){
        this.joke = joke,
        this.score=score,
        this.date = date
    }
    get _joke() {
        return this.joke;
      }
    set _score (newSc: number){
        this.score = newSc;
    }
}


function jokeScore(score: number){
    let jokeP = document.querySelector("#joke") as HTMLElement;
    let joke = jokeP.innerHTML; 
    let nowDate= new Date;
    let date = nowDate.toISOString();
    
    let indexJoke = reportAcudits.map(acudit => acudit.joke).indexOf(joke);
     if(indexJoke===-1){
        let vote = new Vote (joke, score, date);
        reportAcudits.push(vote);
     } else{
        reportAcudits[indexJoke].score = score;
     }

    console.log(reportAcudits);

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


//Ex 3

//Weather

const WEATHER_ELEMENT = document.querySelector(`header`) as HTMLElement;

const WEATHER_API_URL = `https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`
fetch(`${WEATHER_API_URL}`, {  //fetch for GET request
    headers: {
        Accept: "application/json"  // to get the infmation in json format
    }
})  //returns a promise
    .then((response => response.json())) // pick up promise && parse it - retuns parsed pormise in JSON
    .then((weatherObject => { //picksup parsed response
        console.log(weatherObject.stateSky.description); // to acess the "joke field of the jokeObject in the array (from response)
        WEATHER_ELEMENT.innerHTML= 
        `Avui a ${weatherObject.municipio.NOMBRE}: ${weatherObject.temperatura_actual}ºC - ${weatherObject.stateSky.description} `;
    }));


