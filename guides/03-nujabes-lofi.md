# Masterclass: Creating Nujabes-Style Lo-Fi Beats in Strudel

This guide is a deep dive into recreating the soulful, jazzy, and nostalgic sound of Nujabes and Lo-Fi Hip Hop. We will cover the harmonic theory, rhythmic "drunk" feel, texture processing, and provide full song examples.

## 1. The Harmonic Foundation: Jazz Theory

Nujabes didn't just use random chords; he leaned heavily on Jazz harmony. The key is to use **extensions** (7ths, 9ths, 11ths).

### 7th Chords
The bread and butter of Lo-Fi.
- **Major 7 (`major7`)**: Dreamy, nostalgic (e.g., C E G B).
- **Minor 7 (`minor7`)**: Sad, smooth (e.g., C Eb G Bb).
- **Dominant 7 (`dom7`)**: Bluesy, resolving (e.g., C E G Bb).

```javascript
// A standard ii-V-I jazz progression
note("d3:minor7 g3:dom7 c3:major7")
  .s("epiano") // Rhodes sound
  .slow(2)
```

### Voicings
Playing simple block chords can sound "preset-y". Use `voice` or spread the notes manually using the `stack` or `+` operators to create open voicings.

## 2. Rhythmic Feel: Swing and "Drunk" Drumming

Quantized drums (perfectly on grid) kill the Lo-Fi vibe. We need "swing" and "humanization".

### The J Dilla / Nujabes Swing
Use `.swing()` to delay every second note of a subdivision.

```javascript
s("hh*8").swing(0.2) // 20% swing
```

### Manual Micro-timing (`nudge`)
To get that "drunk" drummer feel, use `nudge` to push hits off the grid. A late snare is essential.

```javascript
stack(
  s("bd*2"),                  // Kick on grid (mostly)
  s("sd").nudge(0.04),        // Snare lags behind slightly
  s("hh*8").nudge(rand.range(-0.02, 0.02)) // Hi-hats vary randomly
)
```

## 3. Texture: The "Vintage" Sound

We need to degrade the clean digital sound to emulate vinyl and tape.

- **Low Pass Filter (`lpf`)**: Cuts high frequencies. Automated LPF simulates a wow/flutter effect.
- **Distortion (`shape` / `crush`)**: Adds grit.
- **Formant (`vowel`)**: Adds a hollow, vocal-like quality often found in old samplers.

```javascript
s("piano")
  .lpf(sine.range(800, 1200).slow(4)) // Filter breathes
  .shape(0.2) // Saturation
```

---

## 4. Practical Examples: 3 Original Pieces

Here are three complete, original compositions demonstrating these techniques.

### Piece 1: "Morning Coffee"
*Focus: Extended chords, light swing, piano-centric.*

```javascript
// Piece 1: Morning Coffee
// A gentle start with extended chords and a relaxed beat.

setcps(85/60/4) // 85 BPM

// 1. Keys: Jazz progression (ii-V-I-vi)
const keys = note("c4:minor7 f3:dom7 bb3:major7 g3:minor7")
  .s("piano")
  .velocity("0.5 0.6 0.4 0.5") // Humanize velocity
  .lpf(2000) // Soften the highs
  .slow(2)

// 2. Bass: Simple root movement
const bass = note("c2 f2 bb2 g2")
  .s("bass")
  .smooth(0.1)
  .slow(2)

// 3. Drums: Classic Boom Bap
const drums = stack(
  s("bd ~ sd ~"),
  s("hh*8").velocity(rand.range(0.2, 0.5)) // Random ghost notes
).swing(0.2) // Light swing

// Master Mix
stack(
  keys,
  bass,
  drums
).room(0.5).size(0.4)
```

### Piece 2: "Night Walk"
*Focus: Atmosphere, saxophone lead, darker harmony.*

```javascript
// Piece 2: Night Walk
// A darker, moodier vibe using saxophone textures and deep grooves.

setcps(90/60/4) // 90 BPM

// 1. The Main Riff (Saxophone style)
const sax = note("d4 f4 a4 c5 ~ a4 g4 f4")
  .s("sax")
  .legato(0.8)
  .lpf(1500)
  .delay(0.5)
  .delaytime(0.25)
  .slow(2)

// 2. Chords: Minor 9ths for mystery
const pads = note("d3:minor9 g3:minor9")
  .s("epiano")
  .lpf(800)       // Darker tone
  .shape(0.2)     // Slight grit
  .slow(2)

// 3. Drums: Syncopated kick and undulating hi-hats
const beat = stack(
  s("bd(3,8)"), // Tresillo-ish kick pattern
  s("sd").struct("~ x ~ x"),
  s("hh*16").velocity(sine.range(0.2, 0.6).slow(4)) // Volume swells
).swing(0.1)

// Master Mix
stack(
  sax,
  pads,
  beat
).room(0.8)
```

### Piece 3: "Nostalgic Tape"
*Focus: Sampling simulation, heavy processing, "drunk" rhythm.*

```javascript
// Piece 3: Nostalgic Tape
// Heavily processed, warbly, and sample-based texture.

setcps(80/60/4) // 80 BPM

// 1. Vinyl Crackle Layer (Simulated noise)
const crackle = s("noise").gain(0.05).lpf(2000)

// 2. Chopped Piano (Simulated sampling)
// We use .struct to chop the continuous chord into a rhythmic pattern
const choppedKeys = note("eb4:major7 c4:minor7")
  .s("piano")
  .struct("x x ~ x x ~ x ~") // Chopped rhythm
  .lpf(sine.range(500, 1500).slow(8)) // Filter sweep (Tape wobble)
  .vowel("o") // Formant filter for 'old' sampler sound
  .slow(2)

// 3. Lo-Fi Drums with 'nudge'
const drunkDrums = stack(
  s("bd").nudge(rand.range(-0.02, 0.02)), // Random timing errors
  s("sd").nudge(0.04), // Late snare (essential for this style)
  s("hh*4").swing(0.3)
).shape(0.4) // Distortion/Saturation

// Master Mix
stack(
  crackle,
  choppedKeys,
  drunkDrums
)
```

## Summary of Techniques

| Effect/Function | Usage in Lo-Fi |
| :--- | :--- |
| `lpf(freq)` | Removes brightness, simulates old speakers. |
| `nudge(time)` | Pushes notes off-grid for human feel. |
| `swing(amount)` | Adds groove to 16th/8th notes. |
| `shape(amount)` | Adds distortion and warmth. |
| `slow(amount)` | Stretches patterns for a laid-back feel. |

Experiment with these recipes! Try swapping the chords in "Morning Coffee" with your own progression, or change the samples in "Night Walk".
