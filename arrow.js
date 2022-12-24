// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myfun(num){
//     return num * 3;
// }

const doubleIt = num => num * 5;
const result = doubleIt(4);
console.log(result);
// //////////////////////
const add = (x, y) => x + y;
const total = add(40, 30);
console.log(total);
// 
const giveMe = () => 5;
const totalOne = giveMe();
console.log(totalOne);
// 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const resultTwo = doMath(10, 5);
console.log(resultTwo);