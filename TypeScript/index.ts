//API CALLS

//JOKE APIS
const JOKE_ELEMENT = document.querySelector(`#joke`) as HTMLElement;
let counter = 0

async function nextJoke() {

    counter++

    const DAD_JOKE_API = `https://icanhazdadjoke.com/`
    const CHUCK_NORRIS_API = `https://api.chucknorris.io/jokes/random`

    if (counter % 2 === 0) {
        try {
            let response = await fetch(`${DAD_JOKE_API}`, {
                headers: {
                    Accept: "application/json"  // to get the infmation in json format
                }
            }) // wait for API response

            let jokeObject = await response.json() // wait for parsed response
            console.log(jokeObject.joke);
            JOKE_ELEMENT.innerHTML = `${jokeObject.joke}`;
        } catch (error) {
            console.error(`ERROR ${error}`)
        }
    } else {
        try {
            let response = await fetch(`${CHUCK_NORRIS_API}`, {
                headers: {
                    Accept: "application/json"  // to get the infmation in json format
                }
            })

            let jokeObject = await response.json() // wait for parsed response
            console.log(jokeObject.value)
            JOKE_ELEMENT.innerHTML = `${jokeObject.value}`
        } catch (error) {
            console.error(`ERROR ${error}`)
        }
    }
}


//Weather API

const WEATHER_ELEMENT = document.querySelector(`header`) as HTMLElement;
const WEATHER_API_URL = `https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`

weather()
async function weather() {
    try {
        let response = await fetch(`${WEATHER_API_URL}`); //wait for response from API
        const weatherObject = await response.json();
        WEATHER_ELEMENT.innerHTML =
            `Avui a ${weatherObject.municipio.NOMBRE}: ${weatherObject.temperatura_actual}ºC - ${weatherObject.stateSky.description} `;
        console.log(`${weatherObject.municipio.NOMBRE}: ${weatherObject.temperatura_actual}ºC - ${weatherObject.stateSky.description} `)
    } catch (error) {
        console.error(`ERROR ${error}`)
    }
}

//JOKE VOTES

const reportAcudits: {
    joke: string;
    score: number;
    date: string;
}[] = [];

class Vote {
    joke: string;
    score: number;
    date: string;
    constructor(joke: string, score: number, date: string) {
        this.joke = joke,
            this.score = score,
            this.date = date
    }
    get _joke() {
        return this.joke;
    }
    set _score(newSc: number) {
        this.score = newSc;
    }
}

//create or update joke object in array
function jokeScore(score: number) {
    let jokeP = document.querySelector("#joke") as HTMLElement;
    let joke = jokeP.innerHTML;
    let nowDate = new Date;
    let date = nowDate.toISOString();

    let indexJoke = reportAcudits.map(acudit => acudit.joke).indexOf(joke);
    if (indexJoke === -1) {
        let vote = new Vote(joke, score, date);
        reportAcudits.push(vote);
    } else {
        reportAcudits[indexJoke].score = score;
    }

    console.log(reportAcudits);

}

//voting button display
let nextJokeButton = document.querySelector("#nextJoke") as HTMLElement;
nextJokeButton.addEventListener("click", display, { once: true });


function display() {
    let vote1 = document.getElementById("vote1") as HTMLElement;
    vote1.className = "display";
    let vote2 = document.getElementById("vote2") as HTMLElement;
    vote2.className = "display";
    let vote3 = document.getElementById("vote3") as HTMLElement;
    vote3.className = "display";
    console.log('Button clicked!');
}


//Ex 3


