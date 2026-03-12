// Nujabes Summer Vibe Example
// A brighter, more upbeat lo-fi track with electric keys and vocal chops.

// Set Tempo: 96 BPM
setcps(96/60/4)

// 1. Electric Piano (Rhodes Style)
// Progression: Fmaj7 - Em7 - Dm7 - G7
const keys = note("f3:major7 e3:minor7 d3:minor7 g2:dom7")
  .s("superpiano") // Use a rhodes-like sound if available, or 'piano' with filtering
  .lpf(1500)   // Mellow tone
  .vowel("a")  // Subtle formant filter for warmth
  .slow(4)

// 2. Double Bass
// Walking bass feeling
const bass = note("f2 ~ a2 c3 e2 ~ g2 b2 d2 ~ f2 a2 g2 ~ b2 d3")
  .s("bass") // or 'bass'
  .lpf(600)
  .slow(4)

// 3. Drums
// Brisk breakbeat feel
const drums = stack(
  s("bd ~ [~ bd] ~"), // Kick
  s("~ sd ~ sd"),     // Snare
  s("hh*8").velocity(0.4).pan("0.5") // Hats, panned slightly
).swing(0.1)

// 4. Vocal Chops
// Simulating chopped samples using short notes and pitch shifting
const vocals = note("c5 d5 e5 g5")
  .s("vowel") // 'voice' or 'vowel'
  .chop(4)    // Chop the sound
  .slow(2)
  .room(0.9)  // Lots of reverb
  .hpf(500)   // High pass filter (radio effect)

// 5. Flute Line
const flute = note("a4 c5 e5 g5")
  .s("triangle")
  .jux(rev)   // Stereo spread
  .delay(0.5)
  .slow(3)

// 6. Sidechain Simulation
// We group the melodic elements and apply a volume envelope that ducks on the kick
const melody = stack(
    keys,
    bass,
    vocals,
    flute
).gain(
    "<1 0.6 1 0.6>" // Simple volume ducking pattern
)

stack(
  drums,
  melody
)
