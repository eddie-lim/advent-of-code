export function day1(input) {
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
    return highestValue;
}