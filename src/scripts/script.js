const suma = (a,b) => {
    return a + b;
}

const resta = (a,b) => {
    return a-b;
}

const multiplicacion = (a,b) => {
    return a * b;
}

const division = (a,b) => {
    return a / b;
}

let valor1 , valor2, operador;

const operate = (valor1,valor2,operador) => {
    switch (operador) {
        case "+":
            return suma(valor1,valor2);
        case "-":
            return resta(valor1,valor2);
        case "*":
            return multiplicacion(valor1,valor2);
        case "/":
            return division(valor1,valor2);
    }
}