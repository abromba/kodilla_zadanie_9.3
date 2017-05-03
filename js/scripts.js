var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie'.toUpperCase();

var animalCharsAfter = text.replace('Papugi', animal);

var finalCharsAfter = animalCharsAfter.substr(0, animalCharsAfter.length / 2);

console.log(finalCharsAfter);