// undefined = undefined mane kuno ekta jinis ke define na kora ba define korte vule jawa.
// mutamuti 7,8 rokom vabe undefined ta pawa jay
// For Example

// Example-1
let name;
console.log(name);

// Example-2
function add(num1, num2){
    console.log(num1 + num2);
    // kuno function ke return na korle undefined asbe abr sudu return lekheleo undefined asbe karon return kake korbo seti ke ullek kore dite hobe.
    return;
}
const result = add(12, 45);
console.log(result);

// Example-3
function addOne(num3, num4){
    // kuno ekta parameter ke pass korte vule gele undefined asbe.
    console.log(num3, num4);
}
const resultOne = addOne(12);
console.log(result);

// Example-4
const student = {name: 'Raza', phone:3347}
// kuno variable er object gula vitor er sathe na mille tokon undefined asbe
// kuno ekta value ke acces korte chaiteso jeita eikane nai tokon undefined asbe 
console.log(student.gf);

// Example-5
let fun = undefined;
// recommened na amn jinis variable lekhle undefined asbe 
console.log(fun);



// null - not existend mane khali aikane kichu nai.