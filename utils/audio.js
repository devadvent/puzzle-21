export const playNote = (frequency, duration = 200) => {
    const context = new AudioContext()
    let o = null
    let g = null

    o = context.createOscillator()
    g = context.createGain()
    o.type = 'sine'
    o.connect(g)
    o.frequency.value = frequency
    g.connect(context.destination)
    o.start(0)
    setTimeout(() => {
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    }, duration)
}
