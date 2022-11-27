function generateID(len = 16) {
    // UTF-16 codes of all english letters in capital case (A-Z)
    const charCodes = Array.from(Array(26), (el, index) => index + 65);
    // actual letters from character codes + dash ("-")
    let alphabet = charCodes.map(item => String.fromCharCode(item));
    alphabet.push("-")
    // numbers 0-9
    const numbers = Array.from(Array(10), (el, index) => index);

    let id = ""

    function randomLetter() {
        if (Math.random() < 0.5) {
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        else {
            return alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
        }
    }

    function randomNumber() {
        return numbers[Math.floor(Math.random() * numbers.length)]
    }

    for (let i = 0; i < len; i++) {
        if (!isNaN(id[id.length - 1])) {
            id += randomLetter();
        }
        else if (Math.random() < 0.5) {
            id += randomLetter();
        }
        else {
            id += randomNumber();
        }
    }
    return id
}

console.log(generateID(20));