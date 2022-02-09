# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

## Algoritmo:
1. Primero filtro todo lo que no este incluido en '{}[]()'
1. En el caso de que luego de ese filtro no haya quedado nada, puedo devolver true, ya que significa que no había parentesis en el string
1. Recorro cada character del string
    1. Si el caracter es un parentesis de apertura lo agrego al stack
    1. En cambio, si el caracter es un parentesis de clausura, me fijo cual de todos es
        1. Al llegar a esta parte, sabemos que todos los parentesis van a ser de clausura
        1. Si al sacar el último del stack, ese último no cierra el paréntesis, entonces retorno false
1. En el caso de que se haya recorrido todo el for sin ningún problema, el stack debería estar vacio, 
1. Por eso entonces devuelvo true si el stack está vacio y false si contiene algo(lo que significaría que no se pudo cerrar)

Nota: Creo que el algorimo se podría haber simplificado con expresiones regulares, pero no domino esa parte de javascript, por lo que se me hizo más cómodo de esta manera

