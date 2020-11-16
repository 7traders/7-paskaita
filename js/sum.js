function sumavimas(pirmas, antras) {

    const suma = pirmas + antras;
    console.log(`${pirmas} + ${antras} = ${suma}`);

}

sumavimas(2, 5);
sumavimas(22, 55);





console.log("------------------------");




function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list [i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log(`Neturi pazymiu`);
    }  else {
        console.log(`Vidurkis: ${vidurkis}`)
    }
}


pazymiuVidurkis([10, 10, 10, 8]);
pazymiuVidurkis([]);






console.log("------------------------");



function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list [i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log(`Neturi pazymiu`);
    }  else {
        console.log(`Vidurkis: ${vidurkis}`)
    }
}


pazymiuVidurkis([10, 10, 10, 8]);
pazymiuVidurkis([]);


















