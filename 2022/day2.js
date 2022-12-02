import { getDayInput } from './helper.js';

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LOST = "lost";
const DRAW = "draw";
const WON = "won";

const mapChoice = new Map([
    ["A", ROCK],
    ["B", PAPER],
    ["C", SCISSORS],
    ["X", ROCK],
    ["Y", PAPER],
    ["Z", SCISSORS],
]);

var points = new Map([
    [ROCK, 1],
    [PAPER, 2],
    [SCISSORS, 3],
    [LOST, 0],
    [DRAW, 3],
    [WON, 6],
]);

const mechanism = { // Enemy will be negative. (Format = Enemy + Me)
    "0" : DRAW,  // ROCK(-1) + ROCK(1) = 0. // PAPER(-2) + PAPER(2) = 0. // SCISSORS(-3) + SCISSORS(3) = 0.
    "1" : WON,   // ROCK(-1) + PAPER(2) = 1. ROCK lose to PAPER. // PAPER(-2) + SCISSORS(3) = 1. PAPER lose to SCISSORS.
    "-2" : WON,  // SCISSORS(-3) + ROCK(1) = -2. SCISSORS lose to ROCK.
    "2" : LOST,  // ROCK(-1) + SCISSORS(3) = 2. ROCK wins SCISSORS.
    "-1" : LOST, // PAPER(-2) + ROCK(1) = -1. PAPER wins ROCK. // SCISSORS(-3) + PAPER(2) = -1. SCISSORS wins PAPER.
};

const part1 = (input) => {
    const round = input.split("\n");
    var totalScore = 0
    round.forEach(function(currentValue, i){
        const [enemy, me] = currentValue.split(" ");
        const enemyChoice = mapChoice.get(enemy);
        const myChoice = mapChoice.get(me);
        const play = (-points.get(enemyChoice)) + (points.get(myChoice)) + ""
        const result = mechanism[play];
        totalScore += points.get(result) + points.get(myChoice);
    });
    console.log("day 2 - part 1:", totalScore);
}

export async function execute(){
    const input = await getDayInput(2)
    part1(input);
}
