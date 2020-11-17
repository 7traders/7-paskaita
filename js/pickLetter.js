// i = i + 1
// tas pats kaip
// i++
// arba
// ++i
// gali buti ir i--

// a = a + b
// gali buti a+=b
// tas pats su kitais matematiniais operatoriais
// + - * / %

function pickLetters(text, step) {
    // input validation
    if (typeof text !== "string" ) {
        return "ERROR: pirmoji reiksme ne teksto tipo"
    }
    if (text === "" ) {
        return "ERROR: tekstas negali buti tuscias"
    }
    if (typeof step !== "number" ) {
        return "ERROR: antroji reiksme ne skaiciaus tipo"
    }
    // if (step % 1 !== 0) {
    //     return "ERROR: zingsis turi buti sveikasis skaicius"
    // }
    if (step !== Math.round(step)) {
        return "ERROR: zingsis turi buti sveikasis skaicius"
    }
    const size = text.length;
    if (step > size) {
        return "ERROR: zingsnis per didelis, nera tiek raidziu"
    }
    if (step === 0) {
        return "ERROR: zingsnis negali buti 0"
    }
    // logic
    let rez = "";

    // for (let i = 0; i < size; i++) {
    //     if (i % step === step -1) {
    //     rez += text[i];
    //     }
    // }

    for (let i = step-1; i < size; i+=step) {
        // if (i % step === step -1) {
        rez += text[i];
        // }
    }

    // post logic validation

    // return
    return rez;
}




console.log(pickLetters("sfghdsfds", 3))












