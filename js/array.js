const petriukoPazymiai = [2, 10, 7, 5];
console.log(petriukoPazymiai);

// AVERAGE

let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);