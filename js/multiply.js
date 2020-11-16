/*
 SKAICIAI gali buti
 - sveikieji
 - desimtainiai
 - teigiami/neigiami
 - NaN
 - infinity
 */



function multiply (a, b) {
    // jeigu a nera skaicius rodom klaida ("undefined", jeigu nenurodyta return)
    if(typeof a !== "number") {
        console.error("ERROR - pirmoji skaiciaus reiksme ne skaicius");
        return false;
    }
    // a = NaN
    if("" + a === "Nan") {
        console.error("ERROR - pirmoji skaiciaus reiksme ne normalus skaicius");
        return false;
    }
    // jeigu b nera skaicius rodom klaida ("undefined", jeigu nenurodyta return)
    if(typeof b !== "number") {
        console.error("ERROR - antroji skaiciaus reiksme ne skaicius");
        return false;
    }
    // b = NaN
    if("" + b === "Nan") {
        console.error("ERROR - pirmoji skaiciaus reiksme ne normalus skaicius");
        return false;
    }
    // function logic
    const rezultatas = a * b;
    // function result
    return rezultatas;
}

console.log(multiply(1, ))
console.log(multiply(2, 2))