# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Para llegar al escalón numero N , una persona puede estar en el escalón de abajo, y subir un peldaño o estar dos escalones abajo y subir 2, de esta forma, el problema se torna recursivo

```js
let subirPeldanosRec = s =>  formas(s + 1)

let formas = n => n <= 1 ? n : formas(n - 1) + formas(n - 2)
```

Pero esta manera recursiva hace que sea casi infinitamente lento de resolver, por lo que deberíamos resolverlo de una manera más imperativa, como por ejemplo:

```js
let subirPeldanos = n => {
  if (n < 3) return n;
  let primero = 1, segundo = 2;
  
  for (let i = 2; i < n; i++) {
    let aux = primero + segundo;
    primero = segundo;
    
    segundo = aux;
  }
  return segundo;
};
```