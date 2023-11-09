/*Operadores logicos.
Menores de 18 -> Menor de idade (meia).
Maiores de 60 anos -> Idosos (meia)
Entre 18 e 60 -> Adultos (meia apenas com carteirinha).

INTEIRA: Adulto e NÃO tem carteirinha.
MEIA: todo o resto.
*/

let age = prompt("Informe uma idade: ");
let isCarteirinha = prompt("Tem carteirinha: ");
if (age < 18 || age > 60 || isCarteirinha == "SIM") {
  console.log("meia");
} else {
  console.log("inteira")
}