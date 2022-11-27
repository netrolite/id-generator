function getID(len) {
    // for measuring how long it took
    const startTime = new Date().getTime();

    // UTF-16 codes of all english letters in capital case (A-Z)
    const charCodes = Array.from(Array(26), (el, index) => index + 65);
    // actual letters from character codes + dash ("-")
    let alphabet = charCodes.map(item => String.fromCharCode(item));
    alphabet.push("-")
    // numbers 0-9
    const numbers = Array.from(Array(10), (el, index) => index);

    let id = ""

    // generate a random letter A-Z. 50% chance of it being lowercase or uppercase
    function randomLetter() {
        if (Math.random() < 0.5) {
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        else {
            return alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
        }
    }

    // generate a random number 0-9
    function randomNumber() {
        return numbers[Math.floor(Math.random() * numbers.length)]
    }

    for (let i = 0; i < len; i++) {
        // if previous character was a number, generate a string
        if (!isNaN(id[id.length - 1])) {
            id += randomLetter();
        }
        // 50% chance of generating either a string or a number
        else if (Math.random() < 0.5) {
            id += randomLetter();
        }
        else {
            id += randomNumber();
        }
    }
    const endTime = new Date().getTime();
    const timeElapsed = endTime - startTime;
    return {id, timeElapsed}
}

function generateID() {
    const input = document.querySelector(".id-length-input")
    // if no integer is provided, default to 16
    const length = input.value.length === 0 ? 16 : input.value;
    const data = getID(length);
    const ID = data.id;
    const timeElapsed = data.timeElapsed;
    document.querySelector(".generated-string").textContent = ID;
    document.querySelector(".time-elapsed").textContent = timeElapsed + " ms";
}