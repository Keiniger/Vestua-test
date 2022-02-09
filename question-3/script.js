/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`);

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  const permitidos = "{[()]}";
  const permitidosApertura = permitidos.slice(0, 3);

  // Primero filtro todo lo que no este incluido en '{}[]()'
  str = str
    .toString()
    .split("")
    .filter((x) => permitidos.includes(x))
    .join("");

  // En el caso de que luego de ese filtro no haya quedado nada, puedo devolver true, ya que significa que no había parentesis en el string
  if (str.length === 0) return true;

  // Ahora recorro cada character del string
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];

    if (permitidosApertura.includes(x)) {
      // Si el caracter es un parentesis de apertura lo agrego al stack
      stack.push(x);
    } else {
      // En cambio, si el caracter es un parentesis de clausura, me fijo cual de todos es
      // Al llegar a esta parte, sabemos que todos los parentesis van a ser de clausura
      switch (x) {
        // Si al sacar el último del stack, ese último no cierra el paréntesis, entonces retorno false
        case ")":
          if ("{[".includes(stack.pop())) return false;
          break;

        case "}":
          if ("([".includes(stack.pop())) return false;
          break;

        case "]":
          if ("{(".includes(stack.pop())) return false;
          break;
      }
    }
  }

  // En el caso de que se haya llegado hasta acá, entonces el stack debería estar vacio
  // por eso devuelvo true si el stack está vacio y false si contiene algo
  return stack.length == 0;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
