# Nujabes/Lo-Fi Vol. 2: Original Compositions

Continuing from the Masterclass, here are three more original, full-length Lo-Fi compositions. These pieces demonstrate different moods and textures within the genre, from rainy piano vibes to acoustic nostalgia.

## 1. Late Night Corner Store

*Mood: Solitary, neon lights, rain.*
*Techniques: Tremolo effect, rain texture, sparse drumming.*

```javascript
// Late Night Corner Store
setcps(0.2) // Slow cycle for full progression

// 1. Atmosphere: Rain and distant traffic
const rain = s("noise").lpf(1000).hpf(200).gain(0.15).jux(rev)

// 2. Chords: Tremolo Rhodes
// Progression: Fmaj7 - Em7 - Dm7 - G13
const keys = note("f3:maj7 e3:min7 d3:min7 g2:dom13")
  .s("superpiano")
  .lpf(sine.range(500, 1500).slow(4)) // Auto-wah / filter sweep
  .gain(0.8)
  .room(0.6)

// 3. Melody: Simple, lonely lead
const melody = note("~ a4 g4 ~ f4 e4 d4 ~")
  .s("triangle")
  .lpf(800)
  .delay(0.5)
  .gain(0.6)

// 4. Bass: Subby and simple
const bass = note("f2 e2 d2 g1").s("sine").shape(0.4)

// 5. Drums: Light and rimshot focused
const drums = stack(
  s("bd ~ ~ ~"),
  s("~ sd ~ sd").nudge(0.04).shape(0.2), // Rimshot feel
  s("hh*8").velocity("0.5 0.2 0.4 0.3")
).swing(0.1)

// Arrangement
cat([
  stack(rain, keys), // Intro
  stack(rain, keys, drums, bass), // Verse
  stack(rain, keys, drums, bass, melody), // Chorus
  stack(rain, keys, drums, bass, melody), // Chorus
  stack(rain, keys) // Outro
])
```

## 2. Old Photos

*Mood: Nostalgic, warm, dusty.*
*Techniques: Acoustic guitar simulation, vinyl crackle, major key.*

```javascript
// Old Photos
setcps(0.25)

// 1. Texture: Heavy Vinyl
const vinyl = s("noise").gain(0.08).lpf(3000)

// 2. Guitar/Mandolin Strumming
// We use 'supermandolin' for an acoustic pluck sound
const guitar = note("c4:maj9 a3:min9 f3:maj7 g3:dom7")
  .s("supermandolin")
  .legato(1.5) // Let them ring
  .jux(x => x.delay(0.05)) // Strum effect (slight delay on right channel)
  .room(0.4)

// 3. Bass: Upright feel
const upright = note("c2 a1 f1 g1")
  .s("triangle")
  .attack(0.05) // Plucky attack
  .decay(0.4)
  .lpf(600)

// 4. Drums: Brush kit feel
const brushes = stack(
  s("bd(3,8)"), // Soft kick
  s("hh*16").velocity(rand.range(0.1, 0.4)).hpf(4000) // Shaker/Brush
).swing(0.3) // Heavy swing

// Arrangement
stack(
  vinyl,
  guitar,
  upright,
  brushes
)
```

## 3. Subway Ride

*Mood: Urban, busy, driving.*
*Techniques: Sidechain compression simulation, deep bass, repetitive groove.*

```javascript
// Subway Ride
setcps(0.22)

// 1. Chords: Sidechained Pads
// We simulate sidechain by using a volume envelope or 'gain' pattern
const pads = note("db4:min9 bb3:min9 gb3:maj7 ab3:dom7")
  .s("supersaw")
  .lpf(800) // Dark
  .attack(0.1).release(1)
  .gain(pat("0 1 0 1").fast(8)) // Ducking effect on kicks

// 2. Bass: Reeses (Detuned saws)
const reese = note("db2 bb1 gb1 ab1")
  .s("sawtooth")
  .lpf(400)
  .shape(0.6) // Distortion
  .detune(0.5) // Wide sound

// 3. Drums: Boom Bap
const beat = stack(
  s("bd [~ bd] ~ bd"),
  s("~ sd ~ sd").nudge(0.03),
  s("hh*8?").gain(rand.range(0.4, 0.8)) // Random hats
).swing(0.15)

// 4. Lead: Jazzy Sax Lick
const sax = note("f4 eb4 db4 bb3 ~ f4")
  .s("sax")
  .legato(0.8)
  .delay(0.4)
  .every(2, x => x.transpose(12)) // Octave jump

// Arrangement
cat([
  pads,
  stack(pads, beat),
  stack(pads, beat, reese),
  stack(pads, beat, reese, sax),
  stack(pads, reese)
])
```
