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

countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']); // { apple: 3, banana: 2, orange: 1 }
countOccurrences([1, 2, 2, 3, 1, 1]); // { 1: 3, 2: 2, 3: 1 }