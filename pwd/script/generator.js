const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
const NUMBERS = "0123456789";
const SIGNS = "-_";
const LETTERS = ABC + NUMBERS;
const SYMBOLS = ABC + NUMBERS + SIGNS;
let password = "";

function getPassword(ABC, LETTERS, SYMBOLS) {
    password += ABC[Math.floor(Math.random() * ABC.length)];
    for (let i = 0; i < 6; ++i) {
        password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    }
    password += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    return password;
}
getPassword(ABC, LETTERS, SYMBOLS);

function alertPassword() {
    alert("Password: " + password);
}
