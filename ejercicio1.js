function isDivisible (a,b){
    return a % b === 0;
};

const arreglo = [20,4,6,7,15,5,3];

const numeroDivisible = arreglo.filter(num => isDivisible(num,5));

console.log(numeroDivisible);