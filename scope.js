function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
    // kuno ekta function declear kora hoy tahole oitar area oi function er shima function er vitorei ai function ke bahir teke call kora jabe na r aitake bola hoy scope.

    // common ques...*** Hoisting = kuno ekta scoper vitor jodi var likhe declear kore tokon oi variable er decleartion ta tar scoper baire gie tar parent je scope ache seikane niye nibe tar por jodi function er value ta kothao set kora hoy tahole oi function er value ta baire thekeo accesable hobe. kinto jodi let ba const die kora hoy tahole function er value ta baire teke acces able hoba na.
    return result;
}
const output = sum(3, 7);
console.log(output);