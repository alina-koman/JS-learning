/*
 * #1 Класи та Наслідування (Inheritance): Система користувачів
 *
 * 1. Базовий клас: User
 *    — Конструктор приймає: name, email
 *    — Метод: getInfo() -> повертає рядок: "Користувач name (email)"
 *
 * 2. Похідний клас: Admin
 *    — Наслідується від User
 *    — Конструктор приймає: name, email, role
 *    — Метод: getInfo() -> перевизначений рядок: "Адмін name [role] (email)"
 */

// Місце для твого коду:
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    getInfo = () => {return `Користувач ${this.name} (${this.email})`}
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email)
        this.role = role
    }

    getInfo = () => {return `Адмін ${this.name} [${this.role}] (${this.email})`}
}


// Перевірка:
const user = new User('Олена', 'olena@mail.com');
console.log(user.getInfo()); // "Користувач Олена (olena@mail.com)"
const admin = new Admin('Ігор', 'igor@mail.com', 'Супервайзер');
console.log(admin.getInfo()); // "Адмін Ігор [Супервайзер] (igor@mail.com)"


/*
 * #2 Робота з Map: Телефонна книга
 *
 * Клас PhoneBook
 * — Внутрішнє сховище: new Map()
 * — Метод addContact(userObj, phoneNumber) -> зберігає пару об'єкт-номер
 * — Метод getNumber(userObj) -> знаходить номер за об'єктом, або повертає 'Not found'
 */

// Місце для твого коду:
class PhoneBook {
    constructor() {
        this.books = new Map()
    }

    addContact(userObj, phoneNumber) {
        this.books.set(userObj, phoneNumber) 
    } 

    getNumber(userObj) {
        if (!this.books.get(userObj)) return 'Not found'
        return this.books.get(userObj)
    }
}

// Перевірка:
const book = new PhoneBook();
const alex = { id: 1, name: 'Alex' };
book.addContact(alex, '+380931112233');
console.log(book.getNumber(alex)); // '+380931112233'
console.log(book.getNumber({ id: 1, name: 'Alex' })); // 'Not found'

/*
 * #3 Прототипи (Prototypes): Конструктори
 *
 * Реалізація спадковості через функції-конструктори та прототипи (без class).
 * 1. Конструктор Car(brand) -> додає властивість brand.
 *    — Прототип Car.prototype має метод drive() -> рядок `brand їде`
 * 2. Конструктор ElectricCar(brand, battery) -> наслідує brand від Car, додає battery.
 *    — Має доступ до методу drive() через ланцюжок прототипів.
 */

// Місце для твого коду:



// Перевірка:
// const tesla = new ElectricCar('Tesla', '100kWh');
// console.log(tesla.drive()); // "Tesla їде"
