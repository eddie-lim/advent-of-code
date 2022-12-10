import { getDayInput } from './helper.js';

const process = (input, markerLength) => {
    const dataStream = input.split("");
    var markerLocation = -1;
    for (let i = 0; i < dataStream.length-markerLength; i++) {
        var packet = dataStream.slice(i, i+markerLength)
        var uniquePacket = packet.filter((v, index, arr) => arr.indexOf(v) === index);
        if(packet.length == uniquePacket.length){
            markerLocation = i+markerLength;
        }
        if(markerLocation != -1){
            break;
        }
    }

    if(markerLocation == -1){
        console.log("not found")
    }
    console.log("day 6 - part 1:", markerLocation);
}

export async function execute(){
    const input = await getDayInput(6)
    // process("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14);
    // process("bvwbjplbgvbhsrlpgdmjqwftvncz", 14);
    // process("nppdvjthqldpwncqszvftbrmjlhg", 14);
    // process("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14);
    // process("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14);
    process(input, 4);
    process(input, 14);
}
