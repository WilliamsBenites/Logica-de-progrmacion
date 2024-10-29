// DECLARACION DE VARIABLES
const numeroClave = 10;
let intento = prompt ("Adivina el numero clave(entre 0 al 20):")

intento = parseInt (intento,10)

while (intento !== numeroClave) {
    alert("NO es el numero, vuelve a intentarlo.");
    intento = parseInt(prompt("Adivina el numero clave(entre 0 y 20):"),10);

} 
 alert ("¡Ganaste, adivinaste el numero")

