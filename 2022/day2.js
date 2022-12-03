import { getDayInput } from './helper.js';

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LOST = "lost";
const DRAW = "draw";
const WON = "won";

const mapChoiceBase = new Map([
    ["A", ROCK],
    ["B", PAPER],
    ["C", SCISSORS],
]);

const mapChoicePart1 = new Map([
    ...mapChoiceBase,
    ["X", ROCK],
    ["Y", PAPER],
    ["Z", SCISSORS],
]);

const mapChoicePart2 = new Map([
    ...mapChoiceBase,
    ["X", LOST],
    ["Y", DRAW],
    ["Z", WON],
]);

const points = new Map([
    [ROCK, 1],
    [PAPER, 2],
    [SCISSORS, 3],
    [LOST, 0],
    [DRAW, 3],
    [WON, 6],
]);

const mechanismPart1 = { // Enemy will be negative. (Format = Enemy + Me)
    "0" : DRAW,  // ROCK(-1) + ROCK(1) = 0. // PAPER(-2) + PAPER(2) = 0. // SCISSORS(-3) + SCISSORS(3) = 0.
    "1" : WON,   // ROCK(-1) + PAPER(2) = 1. ROCK lose to PAPER. // PAPER(-2) + SCISSORS(3) = 1. PAPER lose to SCISSORS.
    "-2" : WON,  // SCISSORS(-3) + ROCK(1) = -2. SCISSORS lose to ROCK.
    "2" : LOST,  // ROCK(-1) + SCISSORS(3) = 2. ROCK wins SCISSORS.
    "-1" : LOST, // PAPER(-2) + ROCK(1) = -1. PAPER wins ROCK. // SCISSORS(-3) + PAPER(2) = -1. SCISSORS wins PAPER.
};

const mechanismPart2 = new Map([
    [WON, new Map ([
            [ROCK, PAPER],
            [SCISSORS, ROCK],
            [PAPER, SCISSORS],
        ])
    ],
    [LOST, new Map ([
            [ROCK, SCISSORS],
            [PAPER, ROCK],
            [SCISSORS, PAPER],
        ])
    ],
]);

const part1 = (input) => {
    const totalScore = input.split("\n").reduce(
        (accumulator, currentValue) => {
            const [enemy, me] = currentValue.split(" ");
            const enemyChoice = mapChoicePart1.get(enemy);
            const myChoice = mapChoicePart1.get(me);
            const play = -points.get(enemyChoice) + points.get(myChoice)
            const result = mechanismPart1[play + ""];
            return accumulator + points.get(result) + points.get(myChoice)
        },
        0
    );
    console.log("day 2 - part 1:", totalScore);
}

const part2 = (input) => {
    const totalScore = input.split("\n").reduce(
        (accumulator, currentValue) => {
            const [enemy, me] = currentValue.split(" ");
            const enemyChoice = mapChoicePart2.get(enemy);
            if(me == "Y"){
                return accumulator + points.get(DRAW) + points.get(enemyChoice)
            } else {
                const myResult = mapChoicePart2.get(me);
                const myChoices = mechanismPart2.get(myResult);
                const myPlay = myChoices.get(enemyChoice);
                
                return accumulator + points.get(myResult) + points.get(myPlay) ;
            }
        },
        0
    );
    console.log("day 2 - part 2:", totalScore);
}

export async function execute(){
    const input = await getDayInput(2)
    part1(input);
    part2(input);
}
