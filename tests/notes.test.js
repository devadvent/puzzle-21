import { getFrequency } from '../utils/notes'

const frequencies = [
    ['C', 261.6],
    ['D', 293.7],
    ['E', 329.6],
    ['F', 349.2],
    ['G', 392.0],
    ['A', 440.0],
    ['B', 493.9],
]

frequencies.forEach(([note, frequency]) => {
    test(`Frequency of ${note} should be ${frequency}`, () => {
        expect(getFrequency(note)).toBe(frequency)
    })
})
