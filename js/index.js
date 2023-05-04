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

    //: Hora de la bonificatcion !

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

    Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.
    
    Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`
    
    let words = 1;
    let etCount = 0;
    
    let splittedParagraph = paragraph.split(' ');
    
    for (let i = 0 ; i < splittedParagraph.length; i++) {
      if(splittedParagraph[i].includes('\n')) {
        words++
      } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
        etCount++;
      }
      words++;
     }
    
    console.log('words', words);
    console.log('et count', etCount);
    
    //: bonus 2
    
    const stringToCheck = "step on no pets";
    let reversedString = "";
    for (let i = stringToCheck.length - 1; i >= 0; i--) {
      reversedString += stringToCheck[i].toLowerCase();
    }
    
    console.log(reversedString);
    
    if (stringToCheck === reversedString) {
       console.log('String is a palindrome');
    }
    else {
      console.log('Not a palindrome');
    }