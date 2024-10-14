const nombres = [
    {nombre : 'Maria', edad : 15},
    {nombre : 'Pedro', edad : 20},
    {nombre : 'Alejandro', edad : 35}
];

const nombreEnMayusculas = nombres.map(persona => persona.nombre.toUpperCase());

console.log(nombreEnMayusculas);