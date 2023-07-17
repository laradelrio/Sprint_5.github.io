import {Votes} from './interfaces'

export class Vote implements Votes{
    joke: HTMLElement ;
    score: number
    date : string
    constructor(joke: HTMLElement, score: number, date : string){
        this.joke = joke,
        this.score = score,
        this.date = date
    }
}


