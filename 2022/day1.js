import { getDaysInput } from './helper.js';

const part1 = (input) => {
    const elves = input.split("\n\n");
    var highestValue = -1;
    elves.forEach(function(currentValue){
        const elf = currentValue.split("\n");
        const sum = elf.reduce(
            (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue),
            0
        );
        highestValue = highestValue < sum ? sum : highestValue;
    })

    console.log("part1:", highestValue);
}

const part2 = (input) => {
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
    const totalOfTop3 = elves[0] + elves[1] + elves[2];
    console.log("part2:", totalOfTop3);
}

export async function execute(){
    const input = await getDaysInput(1)
    part1(input);
    part2(input);
}
