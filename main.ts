radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("Hello!")
    }
    if (receivedNumber == 2) {
        basic.showString("Goodbye")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.forever(function () {
    radio.setGroup(5)
})
