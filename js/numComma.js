function numComma (number, position) {
    return parseFloat(number.toFixed(position));
}

const num = 3.1415;
const rez = numComma(num, 2);

console.log(rez, "->", "3.14");




// tas pats kitaip



function numComma (number, position) {
    let ats = number;

    ats = number * (10**position);
    ats = Math.floor(ats);
    ats /= 10**position;

return ats;
}


