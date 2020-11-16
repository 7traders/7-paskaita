function kvadratu(num) {
    const rezultatas = num * num;

    return rezultatas;
}

const dukv = kvadratu(2);
console.log(dukv);

console.log(kvadratu(-5));
console.log(kvadratu(4));










console.log("------------------------");
// duoto skaiciaus pakelimas norimu laipsniu

function laipsnis (base, power) {
    // return base ** power;
    let rezultatas = 1;

    for (let i = 0; i < power; i++) {
        rezultatas = rezultatas * base;
    }

    return rezultatas;
}

console.log(laipsnis(4, 4));











console.log("------------------------");

function faktorialas (n) {
    let rezultatas = 1;

    for (let i = 1; i <= n; i++) {
        rezultatas = rezultatas * i;
    }

    return rezultatas;
}

const f5 = faktorialas(5);

console.log(f5)








console.log("------------------------");

function lyginisFaktorialas (n) {
    let rezultatas = 1;
    for (let i = 1; i <= n; i++) {
        if ( i % 2 === 0) {
            rezultatas = rezultatas * i;
        }
    }
    return rezultatas
}

const lf5 = lyginisFaktorialas(5);

console.log(lf5)


































































