let Angle = 35
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, Angle)
    while (Angle < 80) {
        Angle += 1
        pins.servoWritePin(AnalogPin.P0, Angle)
        basic.pause(100)
    }
    basic.pause(43200000)
    while (Angle > 35) {
        Angle += -1
        pins.servoWritePin(AnalogPin.P0, Angle)
        basic.pause(100)
    }
    basic.pause(43200000)
})
