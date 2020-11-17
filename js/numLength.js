function numLength (num) {
    // input validation
    if (typeof num !== "number") {
        return "Pateikta netinkamo tipo reiksme";
    }
    if ("" + num === 'Nan') {
        return "Pateikta netinkamo tipo reiksme";
    } 
    if ("" + num === "Infinity") {
        return "Pateikta netinkamo tipo reiksme";
    } 

    // logic
    const textNum = "" + num;
    const size = textNum.length;

    if (num < 0) {
        console.log("Radau minusa");
        size--;
    }
    if (num % 1 !== 0) {
        size--;
    }

    // return
    return size;
}

console.log(numLength(true));
console.log(numLength("asd"));
console.log(numLength(NaN));
console.log(numLength([5, 43]));

console.log(numLength(2.2));
console.log(numLength(5));
console.log(numLength(-6));
console.log(numLength(Infinity));
// console.log(numLength(8377698750236735467653473792345693274629346239469236y));