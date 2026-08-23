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
  .legato(1)
  .s("bass") // or 'sawtooth' with lpf
  .lpf(400)
  .slow(2)

// Master Mix
stack(
  rain,
  chords,
  melody,
  drums,
  bass
)



//ALTERNATIVE

// Title: Rainy Cafe - Advanced Jazz Suite (Compositionally Refined)
// Description: A rich, long-form 32-bar jazz composition featuring lush sustained 
// chord foundations, floating Phrygian Dominant phrasing, and a warm acoustic lo-fi groove.

setcps(68/60/4)

// 1. Vinyl & Rain Atmosphere (Deep textured background)
const rain = s("noise")
  .lpf(450)
  .hpf(400)
  .amp(0.05)
  .jux(rev)
  .slow(32)

// 2. Sustained Jazz Chord Foundations (Slow-moving, atmospheric padding)
const chords = chord(`
  Dm9      G13      Cmaj9    Am7
  Fm9      Bb13     Ebmaj9   Ab7
  Bbm9     Eb13     Abmaj9   Dbmaj7
  Gm7b5    C7alt    Fm9      A7alt
`)
  .s("piano")
  .voicing()
  .cutoff(1400)
  .room(0.9)
  .legato(1.2)   // Sustain the chords smoothly so they blend like a Rhodes or acoustic bed
  .slow(8)       // Lets the harmony breathe and unfold naturally

// 3. Phrygian Dominant Improv (Advanced syncopated call-and-response phrasing)
// Uses delayed offbeat entries and chromatic enclosures characteristic of modal jazz.
const improv = note(`
  ~       [f#4, a4, c5, eb5]   ~       [d5, c5, bb4, a4]
  ~       [db5, c5, ab4, f4]   ~       [g4, f4, eb4, db4]
  ~       [e5, c#5, b4, a4]    ~       [ab4, f4, eb4, c4]
  ~       [c5, bb4, gb4, f4]   ~       [a4, f#4, eb4, c4]
`)
  .s("piano")
  .velocity("0.2 0.45 0.3 0.4")
  .delay(0.35)
  .delaytime(0.25)
  .delayfeedback(0.5)
  .room(0.9)
  .slow(4)

// 4. Acoustic Lo-Fi Drum Kit (Muted, warm, swinging hip-hop beat)
// Replaced digital machine sounds with a warm acoustic jazz/lo-fi kit
const drums = stack(
  s("bd ~ ~ bd  ~ bd ~ ~").bank("jazz").amp(0.6),           
  s("~ ~ sd ~  ~ ~ sd ~").bank("jazz").amp(0.45).room(0.5),  
  s("hh(5,8)").bank("jazz").amp(0.12).lpf(2800),             
  s("rim ~ rim ~  ~ ~ rim ~").bank("jazz").amp(0.15)         
).lpf(2200)
.swing(0.28)

// 5. Warm, Organic Acoustic Bassline
const bass = note("d2 ~ a2 d3  ~ g2 ~ f2  ~ c2 ~ g2  ~ a2 ~ e2")
  .s("triangle")
  .lpf(180)
  .legato(0.9)
  .slow(2)

// Master Mix Composition
stack(
  rain,
  chords,
  improv,
  drums,
  bass
)
