let censoPadron = [
    {categoria: "Mujer", monto: 1},
    {categoria: "Hombre", monto: 1}
];
let categoriacontador = [
    {categoria: "Mujer", monto: 1},
    {categoria: "Hombre", monto: 1}
]

let padronGenero;
let padronEdad;

do {
padronGenero = prompt ("Ingresá tu genero. Para continuar escriba \"Siguiente\"");

if (padronGenero.toUpperCase() !== "siguiente") {
    padronEdad = parseInt (prompt ("Ingresá tu edad."));

let censo = {
    genero: padronGenero,
    edad: padronEdad
}

censoPadron. push(censo);
console.log(censoPadron);

if (categoriacontador[padronGenero]){
categoriacontador[padronGenero]++;
} else { categoriacontador[padronGenero] = 1;

}
}

} while(padronGenero.toUpperCase !== "siguiente");

function calcularCantidadGenero () {
    
let total = 0;
    for (let i = 0; i < padronGenero.length; i++) {
        total = total + censoPadron,{i}.monto;
    return total;
}

}

function calcularPromedioGenero() {
    let total = calcularTotalGenero
    let promedio = total / censoPadron.length;
}



