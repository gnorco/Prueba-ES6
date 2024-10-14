function chequeo(palabra){
    const palabraReverse = palabra.split('').reverse().join('');
    if (palabraReverse === palabra){
        return palabra
    }
};


const arregloPalabras = ["neuquen", "casino","reconocer"];
const palabrasCapicuas = arregloPalabras.filter(palabra => chequeo(palabra)).reduce((acc,palabra)=>{
    return acc + palabra.length;
},0);

console.log(`La cantidad de caracteres de las palabras capicuas son ${palabrasCapicuas}`);