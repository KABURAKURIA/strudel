# 50 Famous Jazz Songs (Strudel Guide)

This guide contains 50 Strudel arrangements of common famous Jazz songs, covering Swing, Bebop, Bossa Nova, and Fusion. These examples demonstrate how to use `stack()`, `cat()`, and `struct()` to create authentic jazz grooves and harmonies.

## How to Use
Copy the code block for the song you want to hear into the Strudel REPL.

---

## 1. Take Five (Dave Brubeck)
```javascript
// Take Five - 5/4 Time Signature - Full Form
setcps(0.6)

// 1. MELODY (Saxophone)
// A Section (Vamp)
const headA = "b3@1 ~ g#4@1 b4@1 a#4@1 c#5@1 b4@1 f#4@1 d#4@1 b3@1 f#4@1 e4@1 ~ c#4@1 e4@1 d#4@1 f#4@1 e4@1 b3@1 g#3@1 e3@1 b3@1"
// B Section (Bridge)
const headB = "g4@1 a4@1 g4@1 f#4@2 a4@1 d5@1 c5@1 bb4@1 a4@1 g4@1 f4@1 eb4@1 d4@1 e4@1 f4@1 g4@1 a4@1 bb4@1 c5@1 d5@2 db5@1 c5@2 bb4@1 a4@3"

const melody = note(cat(
  "~", // Intro wait
  headA, headA, // A A
  headB,        // B
  headA         // A
))
  .s("sax")
  .legato(0.8)
  .velocity(0.9)

// 2. PIANO VAMP (Ebbm - Bbm7)
const vamp = "eb3@3 bb3@2"
const bridge = "c3@3 f3@2 bb2@3 eb3@2 g2@3 c3@2 f2@3 bb2@2" // Cycle of 5thsish

const piano = note(cat(
  vamp, vamp, vamp, vamp, // Intro
  vamp, vamp, vamp, vamp, vamp, vamp, vamp, vamp, // A A
  bridge, bridge, // B
  vamp, vamp, vamp, vamp // A
))
  .chord("minor7")
  .s("superpiano")
  .voicings("root")
  .velocity(0.6)

// 3. BASS (5/4 Groove)
const bassPattern = "eb2@3 bb2@2"
const bass = note(bassPattern)
  .s("bass")
  .velocity(0.7)

// 4. DRUMS (Swing 5/4)
const drums = s("oh*5")
  .velocity("0.8 0.4 0.6 0.4 0.5")

stack(
  melody,
  piano,
  bass,
  drums
)
```

## 2. So What (Miles Davis)
```javascript
// So What - Modal Jazz - Full 32 Bar Form
setcps(0.55)

// 1. MELODY (Bass Intro + Horns)
const bassCall = "d2@1 a2@1 d3@1 e3@1 f3@1 e3@1 d3@1 c3@1"
const bassCallEb = "eb2@1 bb2@1 eb3@1 f3@1 gb3@1 f3@1 eb3@1 db3@1"
const hornResp = "~" // Horns play chords only here

const melody = note(cat(
  bassCall, hornResp, bassCall, hornResp, // A (D Dorian)
  bassCall, hornResp, bassCall, hornResp, // A (D Dorian)
  bassCallEb, hornResp, bassCallEb, hornResp, // B (Eb Dorian)
  bassCall, hornResp, bassCall, hornResp // A (D Dorian)
))
  .s("bass")
  .velocity(0.9)

// 2. CHORDS (The "So What" Voicing)
const soWhatD = "~ e3@2 d3@2"
const soWhatEb = "~ f3@2 eb3@2"

const chords = note(cat(
  soWhatD, soWhatD, soWhatD, soWhatD, // A
  soWhatD, soWhatD, soWhatD, soWhatD, // A
  soWhatEb, soWhatEb, soWhatEb, soWhatEb, // B (Modulate up semitone)
  soWhatD, soWhatD, soWhatD, soWhatD  // A
))
  .chord("m11")
  .s("superpiano")
  .velocity(0.7)

// 3. DRUMS (Swing Ride)
const drums = s("oh*4")
  .n("0 2 0 4") // Swing pattern simulation
  .velocity(0.6)

stack(
  melody,
  chords,
  drums,
  s("hh").struct("~ x ~ x")
)
```

## 3. Autumn Leaves
```javascript
// Autumn Leaves - Full AABC Form (32 Bars)
setcps(0.65)

// 1. MELODY
const pickup = "~ ~ ~ e4@1 f#4@1 g4@1"
const a = "c5@4 ~ ~ d4@1 e4@1 f#4@1 b4@4 ~ ~ c4@1 d4@1 e4@1 a4@4 ~ ~ b3@1 c#4@1 d#4@1 g4@4"
const b = "~ ~ ~ f#4@1 g4@1 a4@1 d5@4 ~ ~ c#5@1 c5@1 b4@1 bb4@4 ~ ~ a4@1 g4@1 f#4@1 f4@4 ~ ~ e4@1 f#4@1 g4@1"
const c = "c5@1 b4@1 a4@1 a4@1 a4@2 g4@2 f#4@4 ~ ~ b4@1 a4@1 g4@2 f#4@2 e4@4"

const melody = note(cat(
  pickup, a, // A Section
  pickup, a, // A Section (Repeat)
  b,         // B Section
  c          // C Section
))
  .s("sine")
  .velocity(0.8)

// 2. CHORDS (ii-V-I in G Major / Em)
const sectionA = "a3@4 d3@4 g3@4 c3@4 f#3@4 b2@4 e3@4 e3@4"
const sectionB = "f#3@4 b2@4 e3@4 e3@4 a3@4 d3@4 g3@4 c3@4"
const sectionC = "f#3@4 b2@4 e3@2 eb3@2 d3@2 db3@2 c3@2 b2@2 bb2@2 a2@2" // Chromatic rundown

// Define chord qualities for each section
const qualA = "minor7 dom7 maj7 maj7 m7b5 dom7 minor7 minor7"
const qualB = "m7b5 dom7 minor7 minor7 minor7 dom7 maj7 maj7"
const qualC = "m7b5 dom7 minor7 dom7 minor7 dom7 maj7 dom7 minor7 dom7"

const chords = note(cat(sectionA, sectionA, sectionB, sectionC))
  .chord(cat(qualA, qualA, qualB, qualC))
  .s("superpiano")
  .gain(0.6)

// 3. WALKING BASS
const bass = note(cat(
  "a2 d3 g2 c3 f#2 b2 e2 e3",
  "a2 d3 g2 c3 f#2 b2 e2 e3",
  "f#2 b2 e2 e3 a2 d3 g2 c3",
  "f#2 b2 e2 eb2 d2 db2 c2 b1"
))
  .s("bass")
  .struct("x*4")
  .gain(0.7)

stack(
  melody,
  chords,
  bass,
  s("oh*4").velocity("0.8 0.5 0.7 0.5")
)
```

## 4. Fly Me To The Moon
```javascript
// Fly Me To The Moon - Full Form
setcps(0.6)

// 1. MELODY
const a1 = "c5@3 b4@1 a4@1 g4@1 f4@1 g4@1 a4@3 g4@1 f4@1 e4@1 d4@1 e4@1 f4@3 e4@1 d4@1 c4@1 b3@2 c4@4"
const a2 = "a4@3 g4@1 f4@1 e4@1 d4@1 e4@1 f4@3 e4@1 d4@1 c4@1 b3@1 c4@1 d4@3 c4@1 b3@1 a3@1 g3@2 a3@4"

const melody = note(cat(a1, a2))
  .s("sax")
  .legato(0.8)

// 2. CHORDS (Circle of Fifths)
const section = "a3@4 d3@4 g3@4 c3@4 f3@4 b2@4 e3@4 a2@4"
const chords = note(cat(section, section))
  .chord("minor7 minor7 dom7 maj7 maj7 m7b5 dom7 minor7")
  .s("supermandolin")
  .gain(0.6)

// 3. DRUMS (Swing)
const drums = stack(
  s("oh*4").n("<0 2>"),
  s("hh").struct("~ x ~ x")
)

stack(
  melody,
  chords,
  drums,
  note("a2 d3 g2 c3 f2 b2 e2 a2").s("bass").struct("x ~ x ~")
)
```

## 5. Blue Bossa
```javascript
// Blue Bossa
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "g4@3 f4@0.5 eb4@0.5 d4@2 c4@2",
  "bb4@3 ab4@0.5 g4@0.5 f4@2 eb4@2",
  "d4@1.5 eb4@0.5 f4@1 g4@1 f4@4"
))
  .s("triangle")
  .velocity(0.9)

// 2. CHORDS (Cm7 - Fm7 - Dm7b5 - G7)
const chords = note(cat(
  "c3@8 f3@4 bb2@4",
  "d3@4 g2@4 c3@8"
))
  .chord("minor7 minor7 m7b5 dom7 minor7")
  .s("superpiano")
  .struct("x ~ x x ~ x x ~") // Bossa rhythm
  .gain(0.6)

// 3. DRUMS (Bossa Nova)
const drums = stack(
  s("hh*8").velocity("0.8 0.4"),
  s("rm").struct("x ~ ~ x ~ ~ x ~")
)

stack(
  melody,
  chords,
  drums,
  note("c3 . c3 g2").s("bass").struct("x ~ x ~")
)
```

## 6. All Blues (Miles Davis)
```javascript
// All Blues (Miles Davis) - 6/8 Time - Full Form
setcps(0.6)

// 1. MELODY (Trumpet)
const riffs = "b4@2.5 d5@0.5 e5@2.5 d5@0.5 b4@2.5 d5@0.5 e5@1.5 d5@1 b4@0.5"
const turn = "e5@3 eb5@2.5 d5@0.5 b4@2 d5@1 b4@3"

const melody = note(cat(
  riffs, riffs, // G7 (8 bars)
  riffs, // C7 (4 bars)
  turn   // D7#9 -> Eb7#9 -> G7
))
  .s("sawtooth").lpf(2500)
  .velocity(0.8)

// 2. OSTINATO (Bass/Piano)
const ostG = "g2 g3 f3 g3"
const ostC = "c3 c4 bb3 c4"
const ostD = "d3 d4 c4 d4"

const ostinato = note(cat(
  ostG, ostG, ostG, ostG, // G7
  ostC, ostC,             // C7
  ostG, ostG,             // G7
  ostD, ostG, ostG, ostG  // Turnaround
))
  .s("superpiano")
  .velocity(0.6)
  .struct("x x x x")

// 3. CHORDS
const chords = note(cat(
  "g3@16",
  "c3@8",
  "g3@8",
  "d3@4 eb3@4 g3@8"
))
  .chord("dom7")
  .s("supersaw").attack(0.1).release(0.8)
  .gain(0.4)

// 4. DRUMS
const drums = s("oh*6").gain(0.5)

stack(
  melody,
  ostinato,
  chords,
  drums
)
```

## 7. Summertime
```javascript
// Summertime
setcps(0.5)

// 1. MELODY
const melody = note(cat(
  "c5@1.5 g4@0.5 bb4@1 g4@1",
  "c5@2 bb4@1 g4@1",
  "f4@0.5 g4@0.5 f4@0.5 d4@0.5 c4@2"
))
  .s("triangle")
  .room(0.8)

// 2. CHORDS (Am6 - E7)
const chords = note("a3 e3")
  .chord("m6 dom7")
  .s("superpiano")
  .slow(2)
  .gain(0.6)

// 3. BASS
const bass = note("a2 e2 a2 e2")
  .s("bass")
  .gain(0.6)

stack(
  melody,
  chords,
  bass,
  s("hh*4").velocity("0.6 0.3")
)
```

## 8. The Girl From Ipanema
```javascript
// The Girl From Ipanema
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "g4@2 e4@1.5 d4@0.5",
  "g4@2 e4@2",
  "g4@2 e4@1.5 d4@0.5",
  "g4@1.5 e4@0.5 f4@2"
))
  .s("sax")
  .velocity(0.8)
  .room(0.5)

// 2. CHORDS (Fmaj7 - G7 - Gm7 - Gb7)
const chords = note(cat(
  "f3@8",
  "g3@8",
  "g3@4 gb3@4 f3@4"
))
  .chord("maj7 dom7 minor7 dom7 maj7")
  .s("supermandolin")
  .struct("x ~ x x ~ x x ~") // Bossa
  .gain(0.6)

stack(
  melody,
  chords,
  s("shaker*8").gain(0.5),
  note("f2 g2 g2 gb2").s("bass").slow(4)
)
```

## 9. Giant Steps (John Coltrane)
```javascript
// Giant Steps - Full 16-Bar Cycle
setcps(0.8)

// 1. MELODY
// The "Giant Steps" phrase
const phrase1 = "b4@1 d5@1 g4@1 bb4@1 eb4@4"
const phrase2 = "a4@1 b4@1 eb4@1 g4@1 bb3@4"
const phrase3 = "eb4@1 gb4@1 b3@1 f4@1 bb3@4"
const phrase4 = "b3@1 eb4@1 g3@1 db4@1 gb3@4"

const melody = note(cat(phrase1, phrase2, phrase3, phrase4))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Coltrane Changes)
// Bmaj7 D7 | Gmaj7 Bb7 | Ebmaj7 | Am7 D7
// Gmaj7 Bb7 | Ebmaj7 F#7 | Bmaj7 | Fm7 Bb7
// Ebmaj7 | Am7 D7 | Gmaj7 | C#m7 F#7
// Bmaj7 | Fm7 Bb7 | Ebmaj7 | C#m7 F#7
const chords = note(cat(
  "b3@2 d3@2 g3@2 bb3@2 eb3@4 a3@2 d3@2",
  "g3@2 bb3@2 eb3@2 gb3@2 b3@4 f3@2 bb3@2",
  "eb3@4 a3@2 d3@2 g3@4 cs3@2 fs3@2",
  "b3@4 f3@2 bb3@2 eb3@4 cs3@2 fs3@2"
))
  .chord("maj7 dom7")
  .s("superpiano")
  .velocity(0.7)

// 3. WALKING BASS
const bass = note(cat(
  "b2 d3 g2 bb2 eb3 a2 d3",
  "g2 bb2 eb3 gb2 b2 f2 bb2",
  "eb3 a2 d3 g2 cs3 fs2",
  "b2 f2 bb2 eb3 cs3 fs2"
))
  .s("bass")
  .struct("x*2")
  .gain(0.6)

stack(
  melody,
  chords,
  bass,
  s("oh*4").gain(0.8)
)
```

## 10. My Favorite Things
```javascript
// My Favorite Things - Jazz Waltz (3/4)
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "e4@1 ~ ~", "b4@1 ~ ~", "b4@1 ~ ~",
  "f#4@1 ~ ~", "e4@1 ~ ~", "b4@1 ~ ~",
  "b4@0.5 c#5@0.5 b4@0.5 c#5@0.5 a4@0.5 b4@0.5"
))
  .s("sax") // sax
  .velocity(0.8)

// 2. CHORDS (Em9 - Cmaj7)
const chords = note("e3@3 c3@3")
  .chord("m9 maj7")
  .s("superpiano")
  .gain(0.5)

// 3. DRUMS (Waltz)
const drums = s("oh hh hh")
  .gain(0.6)

stack(
  melody,
  chords,
  drums,
  note("e2 c2").s("bass").slow(2)
)
```

## 11. Satin Doll
```javascript
// Satin Doll
setcps(0.55)

// 1. MELODY
const melody = note(cat(
  "d4@1 e4@1 f4@1 g4@0.5 a4@0.5",
  "g4@4",
  "c4@1 d4@1 e4@1 f4@0.5 g4@0.5",
  "f4@4"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Dm7 - G7 - Em7 - A7)
const chords = note(cat(
  "d3@2 g3@2",
  "e3@2 a3@2"
))
  .chord("minor7 dom7 minor7 dom7")
  .s("superpiano")
  .struct("~ x ~ x")
  .gain(0.6)

// 3. BASS
const bass = note("d2 g2 e2 a2")
  .s("bass")
  .struct("x x x x")

stack(
  melody,
  chords,
  bass,
  s("hh*4")
)
```

## 12. Round Midnight
```javascript
// Round Midnight
setcps(0.4)

// 1. MELODY
const melody = note(cat(
  "bb4@1 ab4@0.5 f4@0.5 b3@1 ab4@1",
  "f4@2 eb4@1 bb3@1"
))
  .s("sawtooth").lpf(2500)
  .room(1)
  .velocity(0.8)

// 2. CHORDS (Ebm7...)
const chords = note("eb3@2 ab3@2")
  .chord("minor7 dom7")
  .s("superpiano")
  .slow(2)
  .gain(0.5)

// 3. BASS
const bass = note("eb2 ab2")
  .s("bass")
  .slow(2)

stack(
  melody,
  chords,
  bass,
  s("hh").struct("x ~ x ~")
)
```

## 13. Blue Monk
```javascript
// Blue Monk (Thelonious Monk) - Full 12-Bar Blues
setcps(0.5)

// 1. MELODY (Chromatic Walk)
// A Section (Bars 1-4)
const a1 = "bb3@0.5 c4@0.5 db4@0.5 d4@0.5 eb4@0.5 e4@0.5 f4@1 bb4@0.5 a4@0.5 ab4@0.5 g4@0.5 gb4@0.5 f4@1.5"
// B Section (Bars 5-8) - Transposed to Eb
const b1 = "eb4@0.5 f4@0.5 gb4@0.5 g4@0.5 ab4@0.5 a4@0.5 bb4@1 eb5@0.5 d5@0.5 db5@0.5 c5@0.5 b4@0.5 bb4@1.5"
// C Section (Bars 9-12) - Turnaround
const c1 = "bb4@1 d5@1 f5@1 bb5@1 a5@0.5 ab5@0.5 g5@0.5 gb5@0.5 f5@1 ~"

const melody = note(cat(a1, b1, a1, c1))
  .s("superpiano")
  .velocity(0.9)

// 2. CHORDS (Bb Blues)
const chords = note(cat(
  "bb2@4 eb3@4 bb2@4 bb2@4",  // I - IV - I - I
  "eb3@4 eb3@4 bb2@4 bb2@4",  // IV - IV - I - I
  "f3@4 f3@4 bb2@4 f3@4"      // V - V - I - V
))
  .chord("dom7")
  .s("superpwm")
  .lpf(2000)
  .gain(0.5)

// 3. WALKING BASS
const bass = note(cat(
  "bb1 d2 f2 ab2 eb2 g2 bb2 db3 bb1 d2 f2 ab2 bb1 d2 f2 ab2",
  "eb2 g2 bb2 db3 eb2 g2 bb2 db3 bb1 d2 f2 ab2 bb1 d2 f2 ab2",
  "f2 a2 c3 eb3 f2 a2 c3 eb3 bb1 d2 f2 ab2 f2 a2 c3 eb3"
))
  .s("bass")
  .gain(0.8)

stack(
  melody,
  chords,
  bass,
  s("oh*4").gain(0.6)
)
```

## 14. Cantaloupe Island (Herbie Hancock)
```javascript
// Cantaloupe Island
setcps(0.6)

// 1. MELODY (Trumpet Riff)
const melody = note(cat(
  "f4@1.5 ab4@0.5 f4@1 db4@0.5 c4@0.5",
  "f4@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. PIANO VAMP (Fm7)
const piano = note("f3@2.5 ab3@1.5")
  .chord("minor7")
  .s("superpiano")
  .gain(0.7)

// 3. BASS LINE
const bass = note("f2@2.5 ab2@1.5")
  .s("bass")
  .gain(0.8)

// 4. DRUMS (Funky)
const drums = stack(
  s("bd ~ bd ~"),
  s("sd").struct("~ x ~ x"),
  s("hh*8")
)

stack(
  melody,
  piano,
  bass,
  drums
)
```

## 15. Watermelon Man
```javascript
// Watermelon Man
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "f4@2.5 d4@0.5 f4@1",
  "d4@2.5 c4@0.5 d4@1"
))
  .s("sax")
  .velocity(0.9)

// 2. PIANO GROOVE (F7)
const piano = note("f3@2.5 eb3@1.5")
  .chord("dom7")
  .s("superpiano")
  .gain(0.6)

// 3. BASS
const bass = note("f2 f2 eb2 f2")
  .s("bass")
  .struct("x ~ x x")
  .gain(0.7)

stack(
  melody,
  piano,
  bass,
  s("bd sd").slow(0.5)
)
```

## 16. Song For My Father
```javascript
// Song For My Father - Bossa/Jazz
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "f4@1.5 f4@0.5 eb4@0.5 db4@0.5 c4@1",
  "bb3@1 ab3@1 f3@2"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.8)

// 2. BASS LINE (Signature)
const bass = note("f2@1.5 f2@0.5 c3@1 c2@1")
  .s("bass")
  .gain(0.8)

// 3. CHORDS (Fm7 - Eb7)
const chords = note("f3 eb3")
  .chord("minor7 dom7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.5)

stack(
  melody,
  bass,
  chords,
  s("hh*8").velocity("0.7 0.3")
)
```

## 17. Moanin' (Art Blakey)
```javascript
// Moanin'
setcps(0.6)

// 1. CALL (Piano)
const call = note("f3@0.5 ab3@0.5 f3@0.5 c4@0.5")
  .s("superpiano")
  .velocity(0.9)

// 2. RESPONSE (Horns)
const response = note("f3@0.5 eb3@0.5 c3@0.5 ab2@0.5 f2@1")
  .chord("dom7")
  .s("sawtooth").lpf(2000)
  .delay(0.5) // Wait for call
  .gain(0.7)

// 3. SHUFFLE
const drums = s("oh*3")
  .n("0 2 0") // Shuffle feel
  .gain(0.6)

stack(
  call,
  response,
  drums,
  note("f2").s("bass").struct("x ~ x ~")
)
```

## 18. Spain (Chick Corea)
```javascript
// Spain - Intro Adagio
setcps(0.4)

// 1. MELODY (Aranjuez)
const melody = note(cat(
  "d5@1 c#5@1 b4@1 a4@1",
  "g4@1 f#4@1 e4@1 d4@1"
))
  .s("superpiano").lpf(1000)
  .velocity(0.8)

// 2. CHORDS (Bm - A - G - F#)
const chords = note("b3 a3 g3 f#3")
  .chord("minor major major major")
  .s("supersaw").attack(0.1).release(0.8)
  .gain(0.6)

// 3. PERC
const perc = s("clap*2").gain(0.5)

stack(
  melody,
  chords,
  perc
)
```

## 19. Chameleon (Herbie Hancock)
```javascript
// Chameleon - Funk
setcps(0.55)

// 1. BASS SYNTH (The Riff)
const bass = note("bb1@1.5 ab1@0.5 bb1@0.5 db2@0.5 c2@0.5 bb1@0.5")
  .s("moog") // or synth
  .lpf(400)
  .gain(0.9)

// 2. CHORDS
const chords = note("ab2 g2")
  .chord("minor7")
  .s("superpiano").lpf(1000)
  .struct("~ x ~ x")
  .gain(0.6)

// 3. DRUMS
const drums = stack(
  s("bd").struct("x ~ x ~"),
  s("sd").struct("~ x ~ x"),
  s("hh*16")
)

stack(
  bass,
  chords,
  drums
)
```

## 20. A Night In Tunisia
```javascript
// A Night In Tunisia
setcps(0.7)

// 1. BASS OSTINATO
const bass = note("eb2 d2 db2 c2")
  .s("bass")
  .struct("x x x x")
  .gain(0.8)

// 2. MELODY
const melody = note(cat(
  "~",
  "c4@1 eb4@1 d4@1 db4@1 c4@1"
))
  .s("sax")
  .velocity(0.9)

// 3. CHORDS (Eb7 - Dm)
const chords = note("eb3 d3")
  .chord("dom7 minor")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  bass,
  melody,
  chords,
  s("conga*4")
)
```

## 21. St. Thomas (Sonny Rollins)
```javascript
// St. Thomas - Calypso
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "g4@1 g4@0.5 c5@1 e5@1 d5@0.5 c5@1 b4@0.5 a4@0.5",
  "g4@1 e4@1 c4@2"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .struct("x ~ x x") // Calypso rhythm
  .gain(0.6)

// 3. DRUMS
const drums = stack(
  s("bd*4"),
  s("rm").struct("x x ~ x")
)

stack(
  melody,
  chords,
  drums
)
```

## 22. Scrapple From The Apple
```javascript
// Scrapple From The Apple
setcps(0.8)

// 1. MELODY
const melody = note(cat(
  "~ g4@0.5 g4@0.5 f#4@0.5 f4@0.5 e4@0.5",
  "bb4@1 a4@1 d4@2"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Gm7 - C7 - Fmaj7)
const chords = note("g3 c3 f3")
  .chord("minor7 dom7 maj7")
  .s("superpiano")
  .struct("x ~ x ~ x ~")
  .gain(0.6)

// 3. WALKING BASS
const bass = note("g2 a2 bb2 b2 c3 bb2 a2 g2")
  .s("bass")
  .struct("x*2")
  .gain(0.7)

stack(
  melody,
  chords,
  bass,
  s("oh*4")
)
```

## 23. Oleo (Sonny Rollins)
```javascript
// Oleo - Rhythm Changes
setcps(0.85)

// 1. MELODY
const melody = note(cat(
  "bb4@0.5 a4@0.5 g4@0.5 f4@0.5 d4@1 bb3@1",
  "c4@1 f4@3"
))
  .s("sax")
  .velocity(0.8)

// 2. CHORDS (Bb Rhythm Changes)
const chords = note(cat(
  "bb3@2 g3@2 c3@2 f3@2",
  "bb3@2 eb3@2 bb3@4"
))
  .chord("maj7 minor7 minor7 dom7")
  .s("superpiano")
  .gain(0.5)

stack(
  melody,
  chords,
  s("oh*4"),
  note("bb2 g2 c2 f2").s("bass").struct("x x x x")
)
```

## 24. Misty
```javascript
// Misty
setcps(0.4)

// 1. MELODY
const melody = note(cat(
  "bb3@1 f4@1 c5@1 bb4@1 g4@4",
  "~ ab4@1 c5@1 eb5@1 c5@1 ab4@4"
))
  .s("superpiano")
  .velocity(0.8)
  .room(0.8)

// 2. CHORDS (Ebmaj7 - Bbm7 - Eb7 - Abmaj7)
const chords = note(cat(
  "eb3@4 bb3@2 eb3@2",
  "ab3@4"
))
  .chord("maj7 minor7 dom7 maj7")
  .s("supersaw").attack(0.1).release(0.8)
  .gain(0.5)

stack(
  melody,
  chords,
  s("hh").struct("x ~ x ~")
)
```

## 25. Body And Soul
```javascript
// Body And Soul
setcps(0.4)

// 1. MELODY
const melody = note(cat(
  "f4@2 eb4@1 db4@1",
  "c4@1 db4@1 eb4@1 f4@1",
  "bb4@4"
))
  .s("sax")
  .velocity(0.9)
  .vibrato(0.5)

// 2. CHORDS (Ebm7 - Bb7...)
const chords = note("eb3 bb3 eb3")
  .chord("minor7 dom7 minor7")
  .s("superpiano")
  .slow(2)
  .gain(0.6)

stack(
  melody,
  chords,
  s("hh").struct("~ x ~ x")
)
```

## 26. In A Sentimental Mood
```javascript
// In A Sentimental Mood
setcps(0.45)

// 1. MELODY
const melody = note(cat(
  "f4@1 g4@1 a4@1 c5@1",
  "d5@1 c5@1 a4@1 g4@1 f4@4"
))
  .s("sax")
  .velocity(0.8)

// 2. OSTINATO (Piano)
const ostinato = note("f3 a3 c4 a3")
  .s("superpiano")
  .struct("x x x x")
  .gain(0.5)

// 3. CHORDS (Dm)
const chords = note("d3 g3 c3 f3")
  .chord("minor7 dom7 maj7 maj7")
  .s("supersaw").attack(0.5)
  .slow(4)
  .gain(0.4)

stack(
  melody,
  ostinato,
  chords
)
```

## 27. Stella By Starlight
```javascript
// Stella By Starlight
setcps(0.55)

// 1. MELODY
const melody = note(cat(
  "bb4@2 a4@2",
  "~ a4@1 f4@1 e4@1 d4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Em7b5 - A7 - Cm7 - F7)
const chords = note("e3 a3 c3 f3")
  .chord("m7b5 dom7 minor7 dom7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("e2 a2 c2 f2").s("bass").struct("x ~ x ~")
)
```

## 28. There Will Never Be Another You
```javascript
// There Will Never Be Another You
setcps(0.7)

// 1. MELODY
const melody = note(cat(
  "eb4@1 f4@1 g4@1 bb4@1",
  "d5@1 c5@3"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Ebmaj7 - Dm7b5 - G7)
const chords = note("eb3 d3 g3")
  .chord("maj7 m7b5 dom7")
  .s("superpiano")
  .struct("x ~ x x")
  .gain(0.6)

// 3. WALKING BASS
const bass = note("eb2 f2 g2 bb2 d3 c3 bb2 g2")
  .s("bass")
  .struct("x*2")
  .gain(0.7)

stack(
  melody,
  chords,
  bass,
  s("oh*4")
)
```

## 29. All The Things You Are
```javascript
// All The Things You Are
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "ab4@2 g4@2",
  "f4@2 eb4@2",
  "db4@4"
))
  .s("sine")
  .velocity(0.8)

// 2. CHORDS (Fm7 - Bbm7 - Eb7 - Abmaj7 - Dbmaj7)
const chords = note(cat(
  "f3@4 bb3@4",
  "eb3@4 ab3@4"
))
  .chord("minor7 minor7 dom7 maj7")
  .s("supermandolin")
  .gain(0.6)

stack(
  melody,
  chords,
  note("f2 bb2 eb2 ab2").s("bass").struct("x ~ x ~").slow(2),
  s("brush*4")
)
```

## 30. Solar (Miles Davis)
```javascript
// Solar
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "c5@1 c5@3",
  "~ c5@0.5 b4@0.5 bb4@0.5 a4@0.5 ab4@0.5 g4@0.5"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Cm(maj7) - Cm7)
const chords = note("c3")
  .chord("minor")
  .s("superpiano")
  .struct("x")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("c2").s("bass").struct("x ~ x ~")
)
```

## 31. Four (Miles Davis)
```javascript
// Four
setcps(0.75)

// 1. MELODY
const melody = note(cat(
  "eb5@0.5 d5@0.5 db5@0.5 c5@2.5",
  "~ eb5@0.5 d5@0.5 db5@0.5 c5@1 bb4@1"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Ebmaj7 - Ebm7...)
const chords = note("eb3 eb3 f3 bb3")
  .chord("maj7 minor7 minor7 dom7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  melody,
  chords,
  note("eb2 eb2 f2 bb2").s("bass").struct("x ~ x ~"),
  s("oh*4")
)
```

## 32. Tune Up
```javascript
// Tune Up
setcps(0.75)

// 1. MELODY
const melody = note(cat(
  "d5@1 a4@1 f#4@1 d4@1",
  "e4@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Em7 - A7 - Dmaj7)
const chords = note("e3 a3 d3")
  .chord("minor7 dom7 maj7")
  .s("superpiano")
  .struct("x ~ x x")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("e2 a2 d3 d2").s("bass").struct("x ~ x x")
)
```

## 33. Joy Spring
```javascript
// Joy Spring (Clifford Brown)
setcps(0.7)

// 1. MELODY
const melody = note(cat(
  "f4@0.5 g4@0.5 a4@0.5 bb4@0.5 c5@1 f4@1",
  "d5@1 c5@3"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Fmaj7...)
const chords = note("f3 g3 c3 f3")
  .chord("maj7 minor7 dom7 maj7")
  .s("superpiano")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("f2 g2 c3 f2").s("bass").struct("x ~ x ~")
)
```

## 34. Daahoud
```javascript
// Daahoud
setcps(0.75)

// 1. MELODY
const melody = note(cat(
  "eb4@0.5 f4@0.5 g4@0.5 ab4@0.5 bb4@0.5 c5@0.5 db5@0.5 d5@0.5",
  "eb5@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS
const chords = note("eb3")
  .chord("maj7")
  .s("superpiano")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("eb2").s("bass").struct("x ~ x ~")
)
```

## 35. Straight, No Chaser
```javascript
// Straight, No Chaser
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "c4@0.5 f4@0.5 g4@0.5 ab4@0.5 a4@1 c4@1",
  "f4@2 d4@0.5 eb4@0.5 e4@1"
))
  .s("superpiano")
  .velocity(0.9)

// 2. CHORDS (F Blues)
const chords = note("f2 bb2 f2 c3")
  .chord("dom7")
  .s("superpwm")
  .slow(4)
  .gain(0.5)

stack(
  melody,
  chords,
  s("oh*4"),
  note("f2 bb2 f2 c3").s("bass").struct("x x x x").slow(4)
)
```

## 36. Well You Needn't
```javascript
// Well You Needn't
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "f4@0.5 g4@0.5 ab4@0.5 a4@0.5 bb4@1 b4@0.5 c5@0.5",
  "f4@2"
))
  .s("superpiano")
  .velocity(0.9)

// 2. CHORDS (F7 - Gb7)
const chords = note("f3 gb3")
  .chord("dom7")
  .s("superpiano")
  .struct("x x")
  .gain(0.6)

stack(
  melody,
  chords,
  s("hh*4"),
  note("f2 gb2").s("bass").struct("x x")
)
```

## 37. Maiden Voyage
```javascript
// Maiden Voyage
setcps(0.55)

// 1. MELODY
const melody = note(cat(
  "d4@3 c4@1",
  "~",
  "d4@3 c4@1"
))
  .s("sawtooth").lpf(2500)
  .room(1)
  .velocity(0.8)

// 2. CHORDS (Am11 - Cm11)
const chords = note(cat(
  "d3@4",
  "f3@4"
))
  .chord("m11") // Sus chord sound
  .s("superpiano")
  .gain(0.6)

// 3. DRUMS (Straight 8ths)
const drums = s("oh*8").gain(0.6)

stack(
  melody,
  chords,
  drums,
  note("d2 f2").s("bass").slow(2)
)
```

## 38. Freddie Freeloader
```javascript
// Freddie Freeloader
setcps(0.5)

// 1. MELODY
const melody = note(cat(
  "bb4@1 ab4@1 f4@1 eb4@1",
  "bb3@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Bb Blues)
const chords = note("bb2 eb3 bb2 f3")
  .chord("dom7")
  .s("superpiano")
  .slow(4)
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("bb2").s("bass").struct("x ~ x ~")
)
```

## 39. Sidewinder
```javascript
// Sidewinder
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "eb4@0.5 f4@0.5 ab4@0.5 bb4@2.5",
  "~ eb4@0.5 f4@0.5 ab4@0.5 f4@2.5"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. BASS LINE (Funky)
const bass = note("eb2@1.5 db2@0.5 eb2@1 g2@1")
  .s("bass")
  .gain(0.8)

// 3. DRUMS (Boogaloo)
const drums = stack(
  s("bd ~ bd ~"),
  s("sd").struct("~ x ~ x")
)

stack(
  melody,
  bass,
  drums
)
```

## 40. The Chicken (Jaco Pastorius)
```javascript
// The Chicken
setcps(0.65)

// 1. BASS (Soul Intro)
const bass = note("bb1@1 bb1@0.5 bb1@0.5 b1@1 c2@1")
  .s("bass")
  .gain(0.9)

// 2. CHORDS (Bb7)
const chords = note("bb2")
  .chord("dom7")
  .s("supermandolin")
  .struct("~ x ~ x")
  .gain(0.6)

// 3. MELODY
const melody = note(cat(
  "~",
  "f4@0.5 d4@0.5 f4@1"
))
  .s("sax")
  .velocity(0.9)

stack(
  bass,
  chords,
  melody,
  s("bd sd")
)
```

## 41. Birdland
```javascript
// Birdland (Weather Report)
setcps(0.7)

// 1. BASS HARMONICS (Intro)
const bass = note("g2@1 b2@1 d3@1 g3@1")
  .s("bass")
  .lpf(1000)
  .gain(0.8)

// 2. MELODY
const melody = note(cat(
  "b4@1 d5@1 g5@2",
  "d5@1 b4@3"
))
  .s("sawtooth")
  .velocity(0.8)

// 3. DRUMS
const drums = s("hh*8").gain(0.6)

stack(
  bass,
  melody,
  drums,
  s("bd sd")
)
```

## 42. Mercy, Mercy, Mercy
```javascript
// Mercy, Mercy, Mercy
setcps(0.5)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "bb3@1 g3@1 f3@1 d3@1",
  "bb2@4"
))
  .s("superpiano").lpf(1000)
  .velocity(0.9)

// 2. CHORDS (Bb7)
const chords = note("bb2")
  .chord("dom7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  melody,
  chords,
  s("bd sd"),
  note("bb1").s("bass").struct("x ~ x ~")
)
```

## 43. Strasbourg / St. Denis
```javascript
// Strasbourg / St. Denis
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "bb4@0.5 c5@0.5 db5@0.5 bb4@0.5 f4@1 ab4@1",
  "bb4@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (Bbm7 - Abmaj7)
const chords = note("bb3 ab3")
  .chord("minor7 maj7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  melody,
  chords,
  s("bd sd"),
  note("bb2 ab2").s("bass").struct("x ~ x ~")
)
```

## 44. Footprints
```javascript
// Footprints (Wayne Shorter) - 6/8
setcps(0.6)

// 1. BASS OSTINATO
const bass = note("c2 c3 f2 g2")
  .s("bass")
  .struct("x x x x")
  .gain(0.8)

// 2. MELODY
const melody = note(cat(
  "c4@3 eb4@1 f4@1 g4@1",
  "ab4@4 f4@2"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.8)

// 3. CHORDS (Cm11)
const chords = note("c3")
  .chord("m11")
  .s("superpiano")
  .slow(2)
  .gain(0.5)

stack(
  bass,
  melody,
  chords,
  s("oh*6").gain(0.6)
)
```

## 45. Afro Blue
```javascript
// Afro Blue - 3/4
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "c5@1 bb4@1 g4@1",
  "f4@1 eb4@1 c4@1"
))
  .s("triangle")
  .velocity(0.9)

// 2. CHORDS (Fm7)
const chords = note("f3")
  .chord("m7")
  .s("superpiano")
  .struct("x ~ ~")
  .gain(0.6)

// 3. DRUMS (Polyrhythm)
const drums = stack(
  s("bd*2"),
  s("oh*3")
)

stack(
  melody,
  chords,
  drums,
  note("f2").s("bass").struct("x ~ ~")
)
```

## 46. Nardis
```javascript
// Nardis
setcps(0.55)

// 1. MELODY
const melody = note(cat(
  "e4@1 f4@1 g4@1 f4@1",
  "e4@4"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.8)
  .room(1)

// 2. CHORDS (Phrygian Dominant Feel)
const chords = note("e3 f3")
  .chord("minor maj7")
  .s("superpiano")
  .struct("x ~ x ~")
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("e2 f2").s("bass").struct("x ~ x ~")
)
```

## 47. Mr. P.C.
```javascript
// Mr. P.C. - Fast Minor Blues
setcps(0.85)

// 1. MELODY
const melody = note(cat(
  "c4@1 c4@1 eb4@1 c4@1 bb3@1 c4@1",
  "eb4@1 f4@1 g4@2"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Cm7)
const chords = note("c3 f3 c3 g3")
  .chord("minor7")
  .s("superpiano")
  .slow(4)
  .gain(0.5)

// 3. WALKING BASS
const bass = note("c2 eb2 f2 g2 c3 bb2 g2 f2")
  .s("bass")
  .struct("x*2")
  .gain(0.7)

stack(
  melody,
  chords,
  bass,
  s("oh*4")
)
```

## 48. Tenor Madness
```javascript
// Tenor Madness
setcps(0.65)

// 1. MELODY
const melody = note(cat(
  "bb4@1 g4@1 f4@1 bb4@1",
  "g4@1 f4@3"
))
  .s("sax")
  .velocity(0.9)

// 2. CHORDS (Bb Blues)
const chords = note("bb3 eb3 bb3 f3")
  .chord("dom7")
  .s("superpiano")
  .slow(4)
  .gain(0.6)

stack(
  melody,
  chords,
  s("oh*4"),
  note("bb2 eb2 bb2 f2").s("bass").struct("x x x x").slow(4)
)
```

## 49. C-Jam Blues
```javascript
// C-Jam Blues (Duke Ellington) - Full Form
setcps(0.6)

// 1. MELODY
const riff = "g4@0.5 g4@0.5 c5@1"
const riff2 = "c5@0.5 c5@0.5 f5@1" // IV chord riff

const melody = note(cat(
  riff, riff, riff, riff, // C7
  riff2, riff2,           // F7
  riff, riff,             // C7
  "d5@0.5 d5@0.5 g5@1", "c5@0.5 c5@0.5 f5@1", // G7 - F7
  riff, riff              // C7
))
  .s("superpiano")
  .velocity(0.9)

// 2. CHORDS (C Blues)
const chords = note(cat(
  "c3@16", // C7
  "f3@8",  // F7
  "c3@8",  // C7
  "g3@4 f3@4", // G7 - F7
  "c3@8"   // C7
))
  .chord("dom7")
  .s("superpwm")
  .gain(0.6)

stack(
  melody,
  chords,
  s("hh*4"),
  note("c2 f2 c2 g2").s("bass").struct("x x x x").slow(4)
)
```

## 50. Caravan
```javascript
// Caravan
setcps(0.7)

// 1. MELODY
const melody = note(cat(
  "c5@0.5 db5@0.5 c5@0.5 b4@0.5 c5@2",
  "~ c5@0.5 db5@0.5 c5@0.5 b4@0.5 c5@2"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

// 2. CHORDS (C7b9 - Fm)
const chords = note("c3@4 f3@4")
  .chord("dom7 minor")
  .s("superpiano")
  .gain(0.6)

// 3. BASS (Latin/Swing)
const bass = note("c2 f2")
  .s("bass")
  .slow(2)
  .gain(0.8)

// 4. DRUMS
const drums = s("conga*8").gain(0.7)

stack(
  melody,
  chords,
  bass,
  drums
)
```
