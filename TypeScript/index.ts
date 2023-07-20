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
            JOKE_ELEMENT.innerHTML = `${jokeObject.value}`;
        } catch (error) {
            console.error(`ERROR ${error}`)
        }
    }
}

//Weather API
weather()
async function weather() {
    const WEATHER_ELEMENT = document.querySelector(`header`) as HTMLElement;
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=195.235.110.69';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7f77d58ba1mshcead7005ecf6564p12fe8fjsnbf38bd45f442',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        WEATHER_ELEMENT.innerHTML =
            `<img id="weatherIcon" src="${result.current.condition.icon}" alt="${result.current.condition.text}">`
            +
            `Avui a ${result.location.name}: ${result.current.temp_c}ºC  `;

    } catch (error) {
        console.error(error);
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
    vote1.className = "display voteIcon";
    let vote2 = document.getElementById("vote2") as HTMLElement;
    vote2.className = "display voteIcon";
    let vote3 = document.getElementById("vote3") as HTMLElement;
    vote3.className = "display voteIcon";
}

//background Image Change
nextJokeButton.addEventListener("click", backgroundImage);

function backgroundImage() {
    let blobContainer = document.getElementById("blobContainer") as HTMLElement;

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

