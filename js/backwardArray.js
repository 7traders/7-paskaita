const wordList = ["labas", "rytas", "Lietuva"];

for (let w = 0; w < wordList.length; w++) {
    const word = wordList [w];
    let backward = "";
    
    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;
    }
    console.log(backward)
}