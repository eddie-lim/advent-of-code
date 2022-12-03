import { getDayInput } from './helper.js';

const priority = {
    a:1, A:27,
    b:2, B:28,
    c:3, C:29,
    d:4, D:30,
    e:5, E:31,
    f:6, F:32,
    g:7, G:33,
    h:8, H:34,
    i:9, I:35,
    j:10, J:36,
    k:11, K:37,
    l:12, L:38,
    m:13, M:39,
    n:14, N:40,
    o:15, O:41,
    p:16, P:42,
    q:17, Q:43,
    r:18, R:44,
    s:19, S:45,
    t:20, T:46,
    u:22, U:47,
    v:22, V:48,
    w:23, W:49,
    x:24, X:50,
    y:25, Y:51,
    z:26, Z:52,
}

const part1 = (rucksack) => {
    const [sum, groupedRucksack] = rucksack.split("\n").reduce(
        (accumulator, item) => {
            const [sum, groupedRucksack] = accumulator;
            const half = item.length / 2;
            const compartment1 = Array.from(item.slice(0, half));
            const compartment2 = Array.from(item.slice(half));
            const shared = compartment1.filter(element => compartment2.includes(element));
            const itemPriority = priority[shared[0]];
            
            if (groupedRucksack[groupedRucksack.length - 1].length >= 3){
                groupedRucksack.push([]);
            }
            groupedRucksack[groupedRucksack.length - 1].push(Array.from(item));

            return [sum + itemPriority, groupedRucksack];
        },
        [0, [[]]]
    );
    console.log("day 3 - part 1:", sum);
    return groupedRucksack;
}

const part2 = (groupedRucksack) => {
    const sum = groupedRucksack.reduce(
        (accumulator, group) => {
            var shared = group.shift().reduce(function(res, v) {
                if (res.indexOf(v) === -1 && group.every(function(a) {
                    return a.indexOf(v) !== -1;
                })) res.push(v);
                return res;
            }, []);

            const itemPriority = priority[shared[0]];
            return accumulator + itemPriority;
        },
        0
    );
    console.log("day 3 - part 2:", sum);
}

export async function execute(){
    const rucksack = await getDayInput(3)
    const groupedRucksack = part1(rucksack);
    part2(groupedRucksack)
}
