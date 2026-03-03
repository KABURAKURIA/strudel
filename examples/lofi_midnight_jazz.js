// Title: Midnight Jazz
// Description: A dark, smoky jazz-hop beat featuring a saxophone lead and deep chords.
// Techniques: Heavy swing, minor 9th chords, Saxophone delay, Vinyl simulation.

// BPM: 84
setcps(84/60/4)

// 1. Vinyl Atmosphere
// Subtle background noise
const vinyl = s("noise")
  .lpf(1500)
  .gain(0.05)
  .loopAt(2) // Loop over 2 cycles

// 2. Jazz Chords
// Progression: Cm9 - Fm9 - Bb13 - G7alt
// Using 'stack' to manually voice the chords for a wider sound
// or simply using chord names.
const chords = note("c3:minor9 f3:minor9 bb2:dom13 g2:dom7sharp9")
  .s("superpiano")
  .velocity("0.5 0.6 0.4 0.5")
  .lpf(800)       // Dark tone
  .room(1.5)      // Large room reverb
  .slow(4)        // 1 chord per bar

// 3. Upright Bass
// Walking bass pattern
const bass = note("c2 . g2 . f2 . c3 . bb2 . f2 . g2 . b2")
  .s("bass")
  .lpf(400)
  .smooth(0.05) // Smooth transitions
  .slow(4)

// 4. Drums (Brushes feel)
// Using high-pass filtered noise bursts for brushes if samples aren't available,
// but here we use standard kit with manipulation.
const drums = stack(
  s("bd(3,8)"), // Tresillo kick
  s("~ sd").nudge(0.06), // Late snare
  s("hh*8").velocity(sine.range(0.2, 0.5).slow(8)).hpf(5000) // Shaker-like hats
).swing(0.15)

// 5. Saxophone Solo
// Generative melody using a scale
const saxSolo = note("c4 d4 eb4 g4 bb4 c5 eb5")
  .s("sawtooth").lpf(2000)
  .legato(1)
  .lpf(2000)
  .delay(0.5)     // Echo
  .delaytime(0.33)
  .delayfeedback(0.4)
  .jux(rev)       // Stereo widening
  // Use `randcat` or `scramble` to make it sound improvised
  .scramble(4)    // Scramble the notes every cycle
  .slow(2)
  .gain(0.8)

// Master Mix
stack(
  vinyl,
  chords,
  bass,
  drums,
  saxSolo
)
