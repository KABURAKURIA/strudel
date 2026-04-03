// Title: Rainy Cafe
// Description: An atmospheric Lo-Fi track featuring rain textures, a simple piano melody, and a relaxed drum beat.

// Set Tempo: 80 BPM
setcps(80/60/4)

// 1. Rain Texture
// Creates a constant background atmosphere
const rain = s("noise")
  .lpf(800)       // Cut high frequencies
  .hpf(200)       // Cut low frequencies
  .amp(0.15)     // Low volume
  .jux(rev)       // Wide stereo image
  .slow(16)       // Evolve slowly

// 2. Main Piano Chords
// Progression: Dm9 - G13 - Cmaj9 - Am7
const chords = note("d4:minor9 g3:dom13 c4:major9 a3:minor7")
  .s("superpiano")
  .velocity("0.5 0.6 0.4 0.5") // Humanize velocity
  .lpf(1200)      // Soften the sound
  .slow(2)        // Play over 2 cycles

// 3. Piano Melody
// A wandering melody on top
const melody = note("~ f5 e5 c5 ~ a4 g4 ~")
  .s("superpiano")
  .velocity(0.4)
  .delay(0.4)
  .room(0.6)
  .slow(2)

// 4. Drums
// Simple boom-bap pattern with swing
const drums = stack(
  s("bd ~ ~ bd ~ ~ ~ ~"),
  s("~ ~ ~ ~ sd ~ ~ ~").nudge(0.04), // Late snare
  s("hh*8").velocity(rand.range(0.2, 0.5)) // Random hi-hat volume
).swing(0.2)

// 5. Bass
// Simple root notes
const bass = note("d2 g2 c2 a2")
  .s("bass") // or 'sawtooth' with lpf
  .lpf(400)
  .smooth(0.1)
  .slow(2)

// Master Mix
stack(
  rain,
  chords,
  melody,
  drums,
  bass
)
