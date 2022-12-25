const manyNumber = [12, 42, 42, 56, 63, 73, 59, 26];
const cutPart = manyNumber.slice(3, 6);
console.log(cutPart);

const numbers = [12, 2, 24, 542, 52, 85, 09, 93];
const part = numbers.splice(1, 3);
console.log(part);

const number = [27, 37, 74, 82, 93];
const join = number.join(' hello ');
console.log(join);