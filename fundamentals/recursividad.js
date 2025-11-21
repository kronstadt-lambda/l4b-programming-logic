// -- Recursividad --

// Función recursiva para calcular el factorial de un número
function factorial(n) {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial de (n - 1)
    return n * factorial(n - 1);
}

// Ejemplo de uso
const numero = 5;
console.log(`El factorial de ${numero} es ${factorial(numero)}`); // Salida: El factorial de 5 es 120

// calcular el valor  de un elemento en concreto de la serie fibonacci
function fibonacci(n) {
    // Caso base: si n es 0 o 1, el valor de Fibonacci es n
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Llamada recursiva: Fibonacci de (n - 1) + Fibonacci de (n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso
const posicion = 6;
console.log(`El valor en la posición ${posicion} de la serie Fibonacci es ${fibonacci(posicion)}`); // Salida: El valor en la posición 6 de la serie Fibonacci es 8