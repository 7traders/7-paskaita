function bigNum (list) {
    // input validation
    if (typeof list !== "object") {
        return "Netinkamas tipas";
    }

    const size = list.length;

    if (list.length === 0) {
        return "Sarasas yra tuscias";
    }

    // logic
    let biggestNumber = -Infinity;

    for (let i = 0; i < size; i++) {
        const num = list [i];

        // saraso elemento validacija
        if (typeof num !== "number") {
            continue;
        }

        // logic
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    // return
    return biggestNumber;
}

console.log(bigNum([5, 43, 563]));
console.log(bigNum(["labas", 43, 563]));
console.log(bigNum([Infinity, "Nan", 563]));

console.log(bigNum([]));
console.log(bigNum(true));
console.log(bigNum("fsd"));
console.log(bigNum(2.2));
console.log(bigNum(5));
console.log(bigNum(-6));
console.log(bigNum(Infinity));
// console.log(bigNum(8377698750236735467653473792345693274629346239469236y));




