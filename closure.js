function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
        // kuno ekta function er vitor e jodi arekta function thake tahole second function take jodi return kore ba call kore tahole nijeder modde ekta close environment make kore fele vitorer jei function ta return kortese se jodi bairer kuno value ke acces kore tokon sei function take joto bar e call kora hok na kno see nijjosso ekta value rakbe.

        // kuno ekta function er vitor jodi arekta function thake oi vitoer function take jodi amra return kori ba use kori tahole ekta close environment make kore nijera external variable er ekta refernce rekhe dey aitaakei closure bole.
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());



