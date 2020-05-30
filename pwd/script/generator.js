const ABC = 'AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz'
const NUMBERS = '0123456789'
const SIGNS = '-_'
const LETTERS = ABC + NUMBERS
const SYMBOLS = ABC + NUMBERS + SIGNS
let password = ''

function getPassword(FIRST, SECOND, THIRD) {
  password += FIRST[Math.floor(Math.random() * FIRST.length)]
  for (let i = 0; i < 6; ++i) {
    password += SECOND[Math.floor(Math.random() * SECOND.length)]
  }
  password += THIRD[Math.floor(Math.random() * THIRD.length)]
  return password
}

getPassword(ABC, SYMBOLS, LETTERS)

function alertPassword() {
  alert('Password: ' + password)
}
