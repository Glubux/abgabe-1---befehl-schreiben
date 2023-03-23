input.onButtonPressed(Button.A, function () {
    led.toggle(1, 3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        . . . . .
        . . . . .
        `)
})
