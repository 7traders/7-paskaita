const kiek = 5;

for (let i = 0; i < kiek; i++) {
    console.log("Labas rytas!", i);
}

console.log("pabaiga");





//  ++ arba -- padidina ar sumazinta skaiciu per 1 vieneta

let number = 7;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number--;
console.log(number);

number--;
console.log(number);







console.log("------------------------");
// Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?

const alga = 5000;
const menesiu = 12;
const pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    console.log(`${i}) ${i*alga} pinigu`);
}








console.log("------------------------");
//  Parasyti skaiciu nuo 8 iki 4?

for (let i = 8; i >= 4; i--) {
    console.log(i);
}







console.log("------------------------");
//  isvardinti ciferblato skaicius nuo duotos valandos iki galo?

const valanda = 4;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + " val");
}







console.log("------------------------");
// Duotas miestu sarasas, isvardinti kiekviena aplankyta miesta?
// Spausdiname - "Aplankiau: Miesto pavadinimas."

const miestai = ["Vilnius", "Kaunas", "Klaipeda", "Anyksciai"];

for (let i = 0; i < miestai.length; i++) {
    console.log(`Aplankiau: ${miestai[i]}.`);
}









console.log("------------------------");
// Isvardinti saraso narius is galo?

const abc = ["a", "b", "c", "d", "e", "f"];

for (let i = abc.length -1; i >= 0; i--) {
    console.log(abc[i]);
}










console.log("------------------------");

const text = "dodekahedronas";

console.log(text.length);
console.log(text[0]);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}







console.log("------------------------");
// Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti?
// abcdef -> bdf

const zodis = "abcdef";
let rezultatas = " ";

console.log(zodis.length);

for (let i = 1; i < zodis.length; i = i + 2) {
    const raide = zodis[i];
    rezultatas = rezultatas + raide;
    console.log(raide);
}
console.log(rezultatas);














