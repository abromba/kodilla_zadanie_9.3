var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

var animalUpperCased = animal.toUpperCase();

var animalCharsAfter = text.replace('Papugi', animalUpperCased);

var finalCharsAfter = animalCharsAfter.substr(0, animalCharsAfter.length/2)

console.log(finalCharsAfter);