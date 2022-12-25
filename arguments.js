function add(num1, num2){
    console.log([...arguments])
    return num1 + num2 + arguments[2];
    // argument holo array like object. nidristo para meter er baire jodi jodi aro parameter dewa hoy tokon argument use korte hoy.
}
const result = add(2, 4, 5, 7);
console.log(result);