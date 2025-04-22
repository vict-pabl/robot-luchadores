radio.setGroup(6)
basic.forever(function () {
    radio.sendNumber(input.rotation(Rotation.Roll) + 0)
})
