import { getDayInput } from './helper.js';

const part1 = (input) => {
    const sum = input.split("\n").reduce(
        (accumulator, assignment) => {
            const pair = assignment.split(",");
            const pair1 = pair[0].split("-");
            const pair2 = pair[1].split("-");
            const pair1Start = parseInt(pair1[0]);
            const pair1End = parseInt(pair1[1]);
            const pair2Start = parseInt(pair2[0]);
            const pair2End = parseInt(pair2[1]);
            if(pair1Start >= pair2Start && pair1End <= pair2End){
                return accumulator+1;
            }
            if(pair2Start >= pair1Start && pair2End <= pair1End){
                return accumulator+1;
            }
            return accumulator;
        },
        0
    );

    console.log("day 4 - part 1:", sum);
}


const part2 = (input) => {
    const sum = input.split("\n").reduce(
        (accumulator, assignment) => {
            const pair = assignment.split(",");
            const pair1 = pair[0].split("-");
            const pair2 = pair[1].split("-");
            const pair1Start = parseInt(pair1[0]);
            const pair1End = parseInt(pair1[1]);
            const pair2Start = parseInt(pair2[0]);
            const pair2End = parseInt(pair2[1]);
            if(pair1Start >= pair2Start && pair1Start <= pair2End){
                return accumulator+1;
            }
            if(pair2Start >= pair1Start && pair2Start <= pair1End){
                return accumulator+1;
            }
            if(pair1End >= pair2Start && pair1End <= pair2End){
                return accumulator+1;
            }
            if(pair2End >= pair1Start && pair2End <= pair1End){
                return accumulator+1;
            }
            return accumulator;
        },
        0
    );

    console.log("day 4 - part 2:", sum);
}

export async function execute(){
    const input = await getDayInput(4);
    part1(input);
    part2(input);
}
