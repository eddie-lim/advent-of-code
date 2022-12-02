import { getDayInput } from './helper.js';

const part1 = (elves) => {
    console.log("day 1 - part 1:", elves[0]);
}

const part2 = (elves) => {
    console.log("day 1 - part 2:", elves[0] + elves[1] + elves[2]);
}

const calculateCaloriesPerElf = (input) => {
    var elves = input.split("\n\n");
    elves.forEach(function(currentValue, i){
        const elf = currentValue.split("\n");
        const sum = elf.reduce(
            (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue),
            0
        );
        elves[i] = sum
    })
    elves.sort((a,b)=>{
        return b-a;
    });
    return elves;
}

export async function execute(){
    const input = await getDayInput(1)
    const elves = calculateCaloriesPerElf(input)
    part1(elves);
    part2(elves);
}
