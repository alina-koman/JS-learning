// Написати функцію countOccurrences(arr), яка приймає масив значень та повертає об'єкт із кількістю входжень кожного елемента.

const countOccurrences = (arr) => {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] !== undefined) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    return obj
}

countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']) // { apple: 3, banana: 2, orange: 1 }
countOccurrences([1, 2, 2, 3, 1, 1]) // { 1: 3, 2: 2, 3: 1 }

//Написати функцію findUnique(arr), яка приймає масив із числами/стрічками та повертає новий масив,
//у якому залишені тільки унікальні значення (без дублікатів).

const findUnique = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

findUnique(['apple', 'banana', 'apple', 'orange', 'banana']) // ['apple', 'banana', 'orange']

//Написати функцію capitalizeWords(str), яка приймає рядок і повертає новий рядок,
//у якому кожне слово починається з великої (заглавної) літери.

const capitalizeWords = (str) => {
    const words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(' ')
}

capitalizeWords('hello world from javascript') // 'Hello World From Javascript'
capitalizeWords('functional programming is cool') // 'Functional Programming Is Cool'