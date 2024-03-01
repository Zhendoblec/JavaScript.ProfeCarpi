function pedirnumero(mensaje) {
    let input;
    do{
        input = parseFloat(promt(mensaje))
        if (isNaN(input)) {
            alert("Ingrese un número correcto!");
        }
    } while(isNaN(input));
    return input;
}

let num1 = parseFloat(prompt("Ingrese un número:"));
let operacion = parseFloat(prompt("Ingrese el porcentaje:"));

function calcularporcentaje (numeroParam, porcentajeParam) {
    return numeroParam / 100 * porcentajeParam;
}

let resultado = calcularporcentaje(num1, operacion);
console.log(resultado);