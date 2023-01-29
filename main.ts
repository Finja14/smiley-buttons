basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
    } else {
        basic.clearScreen()
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.clearScreen()
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . . . .
                    . . . . .
                    . # # # .
                    `)
            } else {
                basic.clearScreen()
            }
        }
    }
})
