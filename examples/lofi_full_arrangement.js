// Title: Lofi Full Arrangement Example
// Description: A complete song structure (Intro, Verse, Chorus, Outro) using `cat` and long cycles.
// This demonstrates how to break free from short loops and build a progressive track.

// KEY CONCEPT: The Long Cycle
// We set the cycle speed (cps) very low, so that one "cycle" lasts for 4 bars (approx 10-12 seconds).
// This allows us to sequence 4-bar chord progressions as a single "step".

// Tempo calculation:
// 80 BPM / 60 seconds = 1.33 beats per second.
// 4 bars * 4 beats = 16 beats per cycle.
// cps = 1.33 / 16 = ~0.083
setcps(80/60/16)

// --- SHARED SOUNDS ---
// These are used across multiple sections for consistency.

const vinyl = s("noise")
  .gain(0.04)
  .lpf(2000)
  .loopAt(1) // Ensure noise loops smoothly

const keysSound = s("superpiano")
  .lpf(1200)
  .room(1)
  .size(0.6)
  .velocity(0.6)

// --- PATTERNS ---

// 1. Chord Progression (4 bars)
// Fits perfectly into our long cycle
const progression = note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7")

// 2. Bass Line (4 bars)
const bassLine = note("eb2 c2 f2 bb2")
  .s("triangle")
  .lpf(200)
  .smooth(0.1)

// 3. Drums (4 bars)
// Since the cycle is 4 bars long, we need to speed up the drum pattern
// so it repeats 4 times (or write a 4-bar drum pattern).
// Here we use .fast(16) to make a 16-step pattern fit, or construct a 4-bar loop.
const kickSnare = s("bd ~ sd ~")
  .fast(16) // Repeat this 1-beat pattern 16 times in the cycle
  .swing(0.1)

const hihats = s("hh*8")
  .fast(16)
  .velocity(rand.range(0.3, 0.6))

// 4. Melody (Chorus)
const chorusMelody = note("g5 ~ f5 eb5 ~ c5 bb4 ~")
  .s("sawtooth").lpf(2000)
  .legato(0.8)
  .lpf(1500)
  .delay(0.4)
  // This melody is designed to play once over the 4-bar cycle

// --- SECTIONS ---

// INTRO: Just keys and vinyl crackle
const intro = stack(
  vinyl,
  keysSound.note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7").gain(0.8)
)

// VERSE: Add bass and simple drums
const verse = stack(
  vinyl,
  keysSound.note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7"),
  bassLine,
  kickSnare
)

// CHORUS: Add melody and hi-hats
const chorus = stack(
  vinyl,
  keysSound.note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7"),
  bassLine,
  kickSnare,
  hihats,
  chorusMelody
)

// OUTRO: Fade out, just keys
const outro = stack(
  vinyl,
  keysSound.note("eb4:major7 c4:minor7 f3:minor7 bb3:dom7").lpf(600) // Darker tone
)

// --- ARRANGEMENT ---
// Sequence the sections using `cat`.
// Each element in the array plays for 1 cycle (4 bars).

cat([
  intro,          // Bars 1-4
  intro,          // Bars 5-8
  verse,          // Bars 9-12
  verse,          // Bars 13-16
  chorus,         // Bars 17-20
  chorus,         // Bars 21-24
  verse,          // Bars 25-28
  outro           // Bars 29-32
])
