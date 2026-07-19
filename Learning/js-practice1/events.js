/*
*
* Задача: Динамічна зміна колірної теми сторінки за допомогою події `change`
* Мета: Створити функцію setupThemeSwitcher, яка відстежує зміну значення елемента `<select>` і змінює фоновий колір сторінки (`document.body`) відповідно до вибраного значення.
* Вимоги до реалізації:
* 1. Функція приймає один параметр: selectId (рядок) — ID елемента `<select>` на сторінці.

* 2. Функція знаходить елемент `<select>` за вказаним selectId. Якщо елемент існує, додає на нього обробник події `change`.

* 3. При зміні значення у списку `<select>`, функція змінює колір фону сторінки (`document.body.style.backgroundColor`) на значення вибраної опції (`event.target.value`).

* 4. При зміні теми функція виводить у консоль повідомлення у форматі:

* "Theme changed to: [значення_кольору]".
*/

// Демонстраційна верстка (для тестування):
function createTestSelect() {
    document.body.innerHTML = `<select id="themeSelect"> <option value="white">White</option> <option value="dark">Dark</option> <option value="blue">Blue</option> </select>`
}

createTestSelect()

function setupThemeSwitcher(selectId) {
    const select = document.getElementById(selectId)
    if (select) select.addEventListener('change', (e) => {
        document.body.style.backgroundColor = e.target.value
        console.log(`Theme changed to: ${e.target.value}`)
    })
}

setupThemeSwitcher('themeSelect')