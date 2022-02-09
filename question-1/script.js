const fs = require('fs');
const path = require('path');
const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);

/*
Para llegar al escalón numero N , una persona puede estar en el escalón de abajo, y 
subir un peldaño o estar dos escalones abajo y subir 2, de esta forma, el problema 
se torna recursivo
*/

let subirPeldanosRec = s =>  formas(s + 1)

let formas = n => n <= 1 ? n : formas(n - 1) + formas(n - 2);

/*
Como se puede ver, es un algorítmo casi idéntico a la sucesion de Fibonacci,
y aunque de una manera recursiva el código termina siendo más declarativo,
también termina siendo más lento ya que para saber el valor de n se tiene que
calcular el valor de n-1, n-2, n-3, ... hasta cero, por lo que incrementa
exponencialmente el tiempo que tomaría en calcularse el resultado.

Por lo tanto, es mejor resolverlo de esta manera imperativa:
*/

let subirPeldanos = n => {
  // para n = 1, n = 2 y n = 3, el resultado será n
  if (n < 3) return n;
  let primero = 1, segundo = 2;
  
  for (let i = 2; i < n; i++) {
    let aux = primero + segundo;
    primero = segundo;
    
    segundo = aux;
  }
  return segundo;
};

fs.writeFile(__dirname + '/output.txt', new Buffer(""+subirPeldanos(args)), err => {
  if (err) {
    console.error(err);
    return;
  }
});