let rollDice = true;

let diceMap = new Map();
diceMap.set(1, 0);
diceMap.set(2, 0);
diceMap.set(3, 0);
diceMap.set(4, 0);
diceMap.set(5, 0);
diceMap.set(6, 0);

while (rollDice) {
    let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    let value = diceMap.get(diceNumber);
    value++;
    diceMap.set(diceNumber, value);
    if (value == 10) {
        rollDice = false;
    }
}

let least = 10;
let leastKey;
let mostKey;

for (let [key, value] of diceMap) {
    if (least > value) {
        leastKey = key;
        least = value;
    }
    if (value == 10) {
        mostKey = key;
    }
    console.log(key + " -> " + value);
}

console.log("Number rolled least number of times = " + leastKey);
console.log("Number rolled most number of times = " + mostKey);