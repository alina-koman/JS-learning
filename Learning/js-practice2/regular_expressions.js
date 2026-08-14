function isValidNumber(number) {
    return (/^\+380[0-9]{9}$/).test(number)
}

console.log(isValidNumber('+380971234567'))
console.log(isValidNumber('+3809712345'))
console.log(isValidNumber('380971234567'))
console.log(isValidNumber('+38097abc4567'))

function isValidDate(dateStr) {
    return (/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/).test(dateStr)
}

console.log(isValidDate('24.08.1991'))
console.log(isValidDate('24/08/1991'))
console.log(isValidDate('5.8.2024'))
console.log(isValidDate('24.08.24'))
console.log(isValidDate('24a08b1991'))

function parseHexColor(hex) {
    const regex = /^#([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})$/i
    const match = hex.match(regex)

    if (!match) return null

    return {
        r: match[1],
        g: match[2],
        b: match[3]
    }
}

console.log(parseHexColor("#FF5733")) // { r: 'FF', g: '57', b: '33' }
console.log(parseHexColor("#00abff")) // { r: '00', g: 'ab', b: 'ff' }
console.log(parseHexColor("#123"))    // null (не повний HEX)
console.log(parseHexColor("FF5733"))  // null (немає #)