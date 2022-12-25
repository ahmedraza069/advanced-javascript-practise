let numbers = [3, 5, 8, 9, 7, 2, 10];
// let output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);   
// }

// function square(element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
//     // map er modde jokon kuno ekta function ke pass kora hoy tokon 3ta jinis pawa jay ta holo element, index, array.
//     // kuno ekta array er modde jodi map use kora hoy tahole tar out put hisebe ekta array dibe
       // map hocce ekta array er modde element gula ke niye kichu ekta kore kora shes howar pore result hisebe abr ekta array dibe. 
// });


// Details filter

const result = numbers.map(x => x * x);
console.log(result);

const rollNumber = [2, 4, 5, 6, 7, 8, 9];
const bigger = rollNumber.filter(x => x > 5);
const lower = rollNumber.filter(x => x < 5);
const isThere = rollNumber.find(x => x > 5);
console.log(lower);
console.log(bigger);
console.log(isThere);