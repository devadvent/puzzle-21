import { startMetronome, stopMetronome } from '../utils/metronome'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

test('Metronome test #1 (runs at right frequency)', async () => {
    let num = 0
    startMetronome(240, () => num++)
    await wait(1100)
    stopMetronome()
    expect(num).toBe(4)
})

test('Metronome test #2 (runs at right frequency)', async () => {
    let num = 0
    startMetronome(60, () => num++)
    await wait(2100)
    stopMetronome()
    expect(num).toBe(2)
})

test('Metronome test #3 (stop works)', async () => {
    let num = 0
    startMetronome(240, () => num++)
    await wait(1100)
    stopMetronome()
    await wait(1000)
    expect(num).toBe(4)
})
