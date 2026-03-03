let str = "abciiidef";
let p = 'abc';

let firststr = "";

for (let i = 0; i < p.length; i++) {
    firststr += str[i];
}

let pairs = [];
let map = new Map();
for (let j = p.length; j < str.length; j++) {
    pairs.push(firststr);
    firststr = firststr.slice(1) + str[j];
}

console.log(pairs);