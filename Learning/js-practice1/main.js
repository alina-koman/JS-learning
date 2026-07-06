/*
 * #1 Замикання: Secret Box
 *
 * Створіть функцію secretBox(code), яка приймає секретний пароль.
 * Повертає функцію box(attempt):
 * — attempt збігається з code -> 'Access granted', лічильник спроб скидається в 0.
 * — не збігається -> 'Access denied', лічильник збільшується на 1.
 * — викликано без аргументів box() -> повертає поточну кількість невдалих спроб.
 */

const secretBox = function(code) {
    let counter = 0
    return function box(attempt) {
        if (attempt === undefined) return counter
        if (attempt === code) {
            counter = 0
            return 'Access granted'
        } else {
            counter++
            return  'Access denied'
        }
    }
}

// Приклади для перевірки:
const box = secretBox('open');
console.log(box('work')); // 'Access denied'
console.log(box('lalala'));
console.log(box('bababa'));
console.log(box());        // 1


/*
 * #2 Рекурсія та колбек: Факторіал
 *
 * Створіть функцію myFactorial(n, myFormatPrint), яка рекурсивно рахує факторіал числа n.
 * — myFormatPrint(n, res) — callback, повертає рядок 'Factorial of n is res'.
 * — myFactorial() повертає результат виклику callback-функції.
 */

const myFormatPrint = (n, res) => {
    return `Factorial of ${n} is ${res}`
}

const myFactorial = (n, callback) => {
    function factorial(n) {
        if (n === 0) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }
    const res = factorial(n)
    return callback(n, res)
}

// Приклади для перевірки:
console.log(myFactorial(5, myFormatPrint)); // 'Factorial of 5 is 120'
console.log(myFactorial(0, myFormatPrint)); // 'Factorial of 0 is 1'


/*
 * #3 Метод bind(): Знижки
 *
 * Створіть функцію calculatePrice(discount, price), яка повертає ціну зі знижкою.
 * Формула: price - (price * discount / 100)
 * За допомогою bind() та calculatePrice створіть дві функції:
 * — blackFridayPrice(price) — фіксована знижка 50%
 * — memberPrice(price) — фіксована знижка 10%
 */

const calculatePrice = (discount, price) => {
    // Твій код
}

// const blackFridayPrice =
// const memberPrice =

// Приклади для перевірки:
// console.log(blackFridayPrice(1000)); // 500
// console.log(memberPrice(1000));      // 900