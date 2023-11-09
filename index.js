/*Operadores logicos.
Menores de 18 -> Menor de idade (meia).
Entre 18 e 60 -> Adultos (meia apenas com carteirinha).
Maiores de 60 anos -> Idosos (meia).

INTEIRA: Adulto e NÃO tem carteirinha.
MEIA: todo o resto.
*/

let age = 19;
let isCarteirinha = false;

  if (age < 18 && age >= 60 && isCarteirinha) {
    console.log('meia')
  } else if (age >= 18 && age <= 60 && isCarteirinha) {
    console.log('meia')
  } else {
    console.log('inteira')
  }
