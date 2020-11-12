// palyginimas if
// galimi operatoriai: >, <, >=, <=, ===, !==
// nenaudotini: == (ar lygu), != (nelygu)     <- gali palyginti string + integer TRUE

// galimos strukturos
// if () {}
// if () {} else {}
// if () {} else if {} ... else if {}
// if () {} else if {} ... else if {} ... else {}





const accountBalance = 100;
const transfer = 200;

// keyword () {
// 
// }

if (accountBalance < transfer) {
    console.log("Banko zinute: saskaitoje truksta pinigu.");
}

if (accountBalance >= transfer) {
    console.log("Banko zinute: pavedimas padarytas.");
}


if (accountBalance >= transfer) {
    console.log("Banko zinute: pavedimas padarytas.");
}   else {
    console.log("Banko zinute: saskaitoje truksta pinigu.");
}



const akys = "raudonos";

if (akys == "melynos") {
    console.log("Grazios sirdies zmogus");
} else if (akys == "zalios") {
    console.log("Melagiai");
} else if (akys == "raudonos") {
    console.log("Programuotoas");
} else {
    console.log("Ar tu turi akis?");
}

console.log("Pirmas bandymas baigtas. Kas toliau?")





const akys2 = "raudonos";


if (akys2 == "melynos") {
    console.log("Grazios sirdies zmogus");
} else {
    if (akys2 == "zalios") {
    console.log("Melagiai");
    } else {
        if (akys2 == "raudonos") {
        console.log("Programuotoas");
        } else {
        console.log("Ar tu turi akis?");
        }
    }
}





const pirmas = 8;
const antras = 8;

if(pirmas == antras) {
    console.log(true);
} else {
    console.log(false);
}




const zodis1 = "labas";
const zodis2 = "rytas";

if(zodis1 !== zodis2) {
    console.log(true);
} else {
    console.log(false);
}

// string lygina pagal ASCII table raidem priskirta dec skaiciu value