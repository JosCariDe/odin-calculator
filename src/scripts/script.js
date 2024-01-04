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

const btnValores = document.querySelectorAll('.btn-valor');

const pantallaValues = document.querySelector('.pantalla-calculator p');

btnValores.forEach( btnElement => {
    btnElement.addEventListener('click', () => {
        pantallaValues.textContent += btnElement.textContent;
    })
})

const btnIgual = document.querySelector('#btn-igual');
btnIgual.addEventListener('click' , () => {
    pantallaValues.textContent = calcularPantalla(pantallaValues.textContent);
})

const operacionesAritmeticas = ['+','-','/','*'];

const calcularPantalla = cadena => {

    const arr = cadena.split('');

    console.log(arr);

    let flag = false;

    valor1 = 0;
    valor2 = 0;
    operador = '';


    arr.forEach( (x,index, arry) => {
        if (!operacionesAritmeticas.includes(x)) {
            if (!flag) {
                valor1 += x;
            } else {
                valor2 += x;
            }
            
        } else {
            operador = x;
            flag = true;
        }
    })

    return operate( Number(valor1),Number(valor2),operador);

}

console.log(calcularPantalla('16+5'));
console.log(operate(15,5,'+'));


