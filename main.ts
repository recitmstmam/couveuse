input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)))
})
let Angle = 35
pins.servoWritePin(AnalogPin.P0, Angle)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    while (Angle < 75) {
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
basic.forever(function () {
    if (Environment.octopus_BME280(Environment.BME280_state.BME280_humidity) >= 44) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
