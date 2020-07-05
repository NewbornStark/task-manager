const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if (total != 13) {
    //     throw new Error('Total tip should be 13. got ' + total)
    // }
})


test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(11)
})

test('Should convert 32 F to 0 C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})