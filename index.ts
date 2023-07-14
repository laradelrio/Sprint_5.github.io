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