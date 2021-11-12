basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 335) {
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
