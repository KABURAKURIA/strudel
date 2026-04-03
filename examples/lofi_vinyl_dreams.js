// Title: Vinyl Dreams
// Description: A beat heavy on sampling simulation, vinyl crackle, and sidechain compression.

// Set Tempo: 88 BPM
setcps(88/60/4)

// 1. Vinyl Crackle
const vinyl = s("noise")
  .amp(0.08)
  .lpf(3000)

// 2. Chopped Sample (Simulated)
// We take a chord progression and chop it rhythmically using .struct()
const sampleChops = note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7")
  .s("superpiano") // Electric piano sound
  .struct("x x ~ x [x x] ~ x ~") // Rhythmic pattern
  .lpf(sine.slow(8).range(500, 1500)) // Filter wobble (wow/flutter)
  .vowel("o") // Formant filter for a "sampled" quality
  .slow(2)

// 3. Drums (Dilla Style)
// Unquantized/Drunk feel using random nudge
const drums = stack(
  s("bd(3,8)"), // Tresillo kick
  s("sd").struct("~ x ~ x").nudge(0.06), // Very late snare
  s("hh*16").nudge(rand.range(-0.03, 0.03)) // Random timing on hats
).shape(0.4) // Saturation/Distortion

// 4. Bass
const bass = note("eb2 . c2 . f2 . bb2")
  .s("triangle")
  .lpf(200)
  .slow(2)

// 5. Sidechain Effect
// A simpler way in Strudel is to sequence the gain directly:
// We will apply a gain pattern to the mix group

const melodicGroup = stack(
  sampleChops,
  bass,
  vinyl
).amp(
    // Simple sidechain simulation: Volume drops on beats 0, 0.375, 0.75 (approx tresillo)
    pattern("0.4 1 1 0.4 1 1 0.4 1").smooth(0.05)
)

stack(
  drums,
  melodicGroup
)
