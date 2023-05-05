console.log ("Estoy lista");

//: Iteración 1: Nombres y entradas

let hackers1 = "Chloe";
console.log ("El nombre del conductor es Chloe");
let hackers2 = "Enora";
console.log ("El nombre del navegante es Enora");

//: iteracion 2 : condicionales

if (hackers1.length > hackers2.length) {
    console.log ('El conductor tiene el nombre más largo,tiene ${hackers1.length} caracteres.');
}
  else if (hackers1.length < hackers2.length) {
    console.log ('Parece que el navegante tiene el nombre más largo, tiene ${hackers2.length} characters');
  }
  else {
    console.log ('¡Vaya, ambos tienen nombres igual de largos, ${hackers1.length} caracteres');
  }

  //: Iteracion 3 : loops

  let nombredelconductor = "C H L O E";
  for (let i = 0; i < hackers1.length; i++) {
    nombredelconductor += hackers1[i].toUpperCase() + "C H L O E ";
}
console.log (nombredelconductor.trim());

   let nombredelnavegador = "E N O R A";
   for (let i = hackers2.length -1; i >= 0; i--)
   {
    nombredelnavegador += hackers2[i];
  }
  console.log (nombredelnavegador);

  if (hackers1 > hackers2) {
    console.log("El nombre del conductor va primero.")
  }
  else if (hackers1 > hackers2) {
    console.log("Yo, el navegador va primero definitivamente.")
  }
  else {
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?")
  } 
