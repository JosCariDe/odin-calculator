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

total = 0;

const recortarArr = (array,index) => {
    valor1 = 0;
    valor2 = 0;
    operador = '';
    array = array.
}

const calcularPantalla = cadena => {

    const arr = []; 
    arr = cadena.split('');

    console.log(arr);

    valor1 = 0;
    valor2 = 0;
    operador = '';


    arr.forEach( (item, index, array) =>{
        if ( operacionesAritmeticas.includes(item) ) {
            recortarArray(array,index);
        }
    })

    return total;

}


const recortarArray = (array , index) => {
    let val1, val2, operad;

    operad = array[index];

    for (var i = index; !operacionesAritmeticas.includes(array[i]); i++) {
        val1 += i;
    }

    for (var j = index; !operacionesAritmeticas.includes(array[j]); j--) {
        val2 += j;
    }

    val2 = val2.reverse();

    const res = operate(val1,val2,operad);
    const cantidad = i - j;

    array.splice(j,cantidad,res);

    


}