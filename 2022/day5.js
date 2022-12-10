import { getDayInput } from './helper.js';

const process = (input, isPart1) => {
    const list = input.split("\n")
    var stacks = [];
    list.forEach((row) => {
        if(row.trim().startsWith("[")){
            stacks = getStack(row, stacks)
        }
        if(row.startsWith("move")){
            stacks = rearrange(row, stacks, isPart1);
        }
    });

    var topLevel = "";
    stacks.forEach(stack => {
        topLevel += stack[stack.length-1];
    });

    console.log("day 5 - part "+ isPart1 == true ? 1 : 2 +":", topLevel);
}

const getStack = (row, stacks) => {
    const stackLevel = row.split(" ");
    var emptyItemCount = 0;
    var stackColumn = 1;
    for (let i = 0; i < stackLevel.length; i++) {
        const item = stackLevel[i];
        if(stacks[stackColumn] == null){
            stacks[stackColumn] = [];
        }
        if(item == ""){
            emptyItemCount++;
            if(emptyItemCount == 4){
                emptyItemCount = 0;
                stackColumn++;
            }
        } else {
            if(item.replace(/[^a-zA-Z ]/g, "") != ""){
                stacks[stackColumn].unshift(item.replace(/[^a-zA-Z ]/g, ""))
                stackColumn++;
            }
        }
    }
    return stacks;
}

const rearrange = (row, stacks, isPart1) => {
    var proceduces = [];
    var proceduce = row.replace(/\D+/, '');
    // move
    proceduces.push(proceduce.match(/\d+/)[0]);
    proceduce = proceduce.replace(/\d+/, '');
    proceduce = proceduce.replace(/\D+/, '');
    // from
    proceduces.push(proceduce.match(/\d+/)[0]);
    proceduce = proceduce.replace(/\d+/, '');
    proceduce = proceduce.replace(/\D+/, '');
    // to
    proceduces.push(proceduce.match(/\d+/)[0]);
    proceduce = proceduce.replace(/\d+/, '');
    proceduce = proceduce.replace(/\D+/, '');

    var removedCrate = []
    for (let index = 0; index < proceduces[0]; index++) {
        if(isPart1){
            removedCrate.unshift(stacks[proceduces[1]].pop());
        } else {
            removedCrate.push(stacks[proceduces[1]].pop());
        }
    }
    for (let index = 0; index < proceduces[0]; index++) {
        stacks[proceduces[2]].push(removedCrate.pop());
    }
    return stacks
}


const test = "     [D]\n"+
"[N] [C]    \n"+
"[Z] [M] [P]\n"+
 "1   2   3 \n"+
"\n"+
"move 1 from 2 to 1\n"+
"move 3 from 1 to 3\n"+
"move 2 from 2 to 1\n"+
"move 1 from 1 to 2\n";
 

export async function execute(){
    const input = await getDayInput(5);
    var isPart1 = true
    process(input, isPart1);
    process(input, !isPart1);
}
