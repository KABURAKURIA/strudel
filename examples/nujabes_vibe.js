// Nujabes Vibe Example
// Copy and paste this into https://strudel.cc

// Set global tempo (BPM)
// 90 BPM is standard for this style.
setcps(90/60/4)

// 1. Piano Chords
// We use a stack of notes to form chords, or the `chord` function.
// Here we use a jazzy chord progression: Dm9 - G13 - Cmaj9
const piano = note("d3:minor9 g3:dom13 c3:major9")
  .s("superpiano")
  .lpf(2000)      // Low pass filter to soften the sound
  .velocity(0.6)  // Soft touch
  .slow(4)        // One chord every bar (assuming 4/4)

// 2. Bass Line
// Simple bass following the root notes
const bass = note("d2 [~ g2] c2 ~")
  .s("bass")
  .lpf(400)
  .shape(0.4)     // Add some saturation
  .slow(4)

// 3. Drums
// Boom Bap pattern with swing
// Kick (bd), Snare (sd), Hi-hat (hh)
const drums = stack(
  s("bd ~ sd ~").velocity(0.9),
  s("~ bd*2 ~ ~").velocity(0.7), // Ghost kicks
  s("hh*8").velocity("0.5 0.3 0.6 0.3") // Dynamic hats
).swing(0.15) // 15% Swing

// 4. Vinyl Crackle / Atmosphere
// Adding background noise for texture
const noise = s("noise")
  .lpf(1000)
  .gain(0.05) // Very quiet
  .slow(8)

// 5. Saxophone Melody (Improv style)
const sax = note("e4 g4 a4 b4 d5")
  .s("sawtooth").lpf(2000)
  .delay(0.5)
  .delaytime(0.25)
  .room(0.8)
  .slow(2)
  .jux(rev) // Make it stereo and interesting

// Play everything together
stack(
  piano,
  bass,
  drums,
  noise,
  sax
)
