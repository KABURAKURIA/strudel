# 100 Advanced Strudel Songs

This guide contains 100 advanced, multi-layered song examples for Strudel. These are not just simple melodies but full micro-arrangements using `stack()`, complex rhythms, and effects.

## How to Use
Copy the code block for the song you want to hear. These examples use more resources, so ensure you stop the previous block before running a new one.

---

## Category 1: Nursery Rhymes (Advanced)

### 1. Happy Birthday (Glitch Hop Style)
```javascript
// Happy Birthday - Authentic Melody
setcps(0.6)

// 1. THE MELODY (Accurate)
const melody = note(cat(
  "g3@1.5 g3@0.5 a3@2 g3@2 c4@2 b3@4",
  "g3@1.5 g3@0.5 a3@2 g3@2 d4@2 c4@4",
  "g3@1.5 g3@0.5 g4@2 e4@2 c4@2 b3@2 a3@4",
  "f4@1.5 f4@0.5 e4@2 c4@2 d4@2 c4@4"
)).slow(3.5)
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. THE CHORDS (C -> G -> C -> F)
const chords = note(cat(
  "c3:major@6 g3:major@6",
  "g3:major@6 c3:major@6",
  "c3:major@6 f3:major@6",
  "f3:major@4 c3:major@2 g3:major@2 c3:major@4"
)).slow(3)
  .s("superpiano")
  .velocity(0.6)

// 3. IMPROV (Glitch Fills)
const glitch = note("0 12")
  .scale("C:major")
  .s("sawtooth")
  .lpf(3000)
  .amp(0.3)
  .struct("t(3,16)")

stack(
  melody,
  chords,
  glitch,
  s("bd sd").jux(rev)
)
```

### 2. Twinkle Twinkle (Ambient Space)
```javascript
// Twinkle Twinkle - Authentic Melody
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "c4@1 c4@1 g4@1 g4@1 a4@1 a4@1 g4@2",
  "f4@1 f4@1 e4@1 e4@1 d4@1 d4@1 c4@2"
)).slow(2)
  .s("triangle")
  .room(0.9)
  .velocity(0.8)

// 2. CHORDS (C -> F -> C -> G -> C)
const chords = note(cat(
  "c3:major7@2 f3:major7@1 c3:major7@1 f3:major7@1 c3:major7@1 g3:major7@2",
  "f3:major7@1 c3:major7@1 g3:major7@1 c3:major7@1 g3:major7@1 c3:major7@1 g3:major7@2"
)).slow(2)
  .s("superpiano")
  .velocity(0.5)

// 3. IMPROV (Sparkles)
const sparkles = note("7 9 11")
  .scale("C:major")
  .add(24)
  .s("sine")
  .amp(0.2)

stack(
  melody,
  chords,
  sparkles,
  s("noise").amp(0.1)
)
```

### 3. Mary Had a Little Lamb (Techno)
```javascript
// Mary Had a Little Lamb - Accurate
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "e4@1 d4@1 c4@1 d4@1 e4@1 e4@1 e4@2",
  "d4@1 d4@1 d4@2 e4@1 g4@1 g4@2"
)).slow(2)
  .s("square")
  .lpf(sine.slow(4).range(500, 3000))
  .velocity(0.8)

// 2. CHORDS (C -> G -> C)
const chords = note(cat(
  "c3:major@4 c3:major@4",
  "g3:major@4 c3:major@4"
)).slow(2)
  .s("supersaw")
  .amp(0.5)

// 3. IMPROV (Acid)
const acid = note("0 12")
  .scale("C:major")
  .s("303")
  .amp(0.3)

stack(
  melody,
  chords,
  acid,
  s("bd*4")
)
```

### 4. Row Row Row Your Boat (Round/Canon)
```javascript
// Row Row Row Your Boat - Canon
setcps(0.6)

const phrase = "c4@1.5 c4@0.5 c4@1 d4@0.5 e4@1.5 e4@0.5 d4@1 e4@0.5 f4@1 g4@3"

const melody = note(phrase)
  .s("triangle")
  .room(0.5)
  .velocity(0.9)

const round = note(phrase)
  .s("triangle")
  .delay(2) // Delay by 2 cycles (approx 2 bars)
  .velocity(0.7)

stack(
  melody,
  round,
  s("bd ~ sd ~")
)
```

### 5. Frere Jacques (Poly-Rhythm)
```javascript
// Frere Jacques - Accurate
setcps(0.6)

const melody = note(cat(
  "c4@1 d4@1 e4@1 c4@1",
  "c4@1 d4@1 e4@1 c4@1",
  "e4@1 f4@1 g4@2",
  "e4@1 f4@1 g4@2"
))
  .s("sine")
  .velocity(0.8)

const harmony = note(cat(
  "c3:major@4", "c3:major@4", "c3:major@4", "c3:major@4"
))
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  harmony,
  s("bd(3,8)")
)
```

### 6. London Bridge (Industrial)
```javascript
// London Bridge - Accurate
setcps(0.6)

const melody = note(cat(
  "g4@1.5 a4@0.5 g4@1 f4@1 e4@1 f4@1 g4@2",
  "d4@1 e4@1 f4@2",
  "e4@1 f4@1 g4@2"
)).slow(2)
  .s("sawtooth")
  .shape(0.4)
  .velocity(0.9)

const bass = note(cat(
  "c3@4 c3@4",
  "g2@4",
  "c3@4"
)).slow(2)
  .s("fmsynth")
  .amp(0.7)

stack(
  melody,
  bass,
  s("bd*2 sd")
)
```

### 7. Old MacDonald (Farm Step)
```javascript
// Old MacDonald
setcps(0.6)

const melody = note(cat(
  "g4@1 g4@1 g4@1 d4@1 e4@1 e4@1 d4@2",
  "b4@1 b4@1 a4@1 a4@1 g4@2"
)).slow(2)
  .s("square")
  .velocity(0.8)

const chords = note("g3:major c3:major g3:major d3:major")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  chords,
  s("bd ~ sd ~")
)
```

### 8. Baa Baa Black Sheep (Lo-Fi)
```javascript
// Baa Baa Black Sheep
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 g4@1 g4@1 a4@0.5 b4@0.5 c5@0.5 a4@0.5 g4@2",
  "f4@1 f4@1 e4@1 e4@1 d4@1 d4@1 c4@2"
)).slow(2)
  .s("superpiano").lpf(1000)
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.8)

const chords = note("c3:major g3:major f3:major c3:major")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  chords,
  s("hh*4"),
  s("noise").amp(0.1)
)
```

### 9. Itsy Bitsy Spider (Arpeggiated)
```javascript
// Itsy Bitsy Spider
setcps(0.6)

const melody = note(cat(
  "g3@1 c4@1 c4@1 c4@1 d4@1 e4@1 e4@1 e4@1",
  "d4@1 c4@1 d4@1 e4@1 c4@2"
)).slow(2)
  .s("sine")
  .velocity(0.8)

const arp = note("c3 g3")
  .arp("up")
  .s("supermandolin")
  .amp(0.5)

stack(
  melody,
  arp,
  s("noise").amp(0.1)
)
```

### 10. The Wheels on the Bus (Funk)
```javascript
// The Wheels on the Bus
setcps(0.6)

const melody = note(cat(
  "c4@1 f4@1 f4@1 f4@1 f4@2 a4@2",
  "c5@1 a4@1 f4@2"
)).slow(2)
  .s("superpwm")
  .lpf(sine.slow(2).range(500, 2000))
  .velocity(0.9)

const chords = note("f3:major c3:major f3:major")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 11. If You're Happy (Clap Trap)
```javascript
// If You're Happy
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 f4@1 f4@1 f4@1 f4@1 f4@2",
  "c4@1 c4@1 g4@1 g4@1 g4@1 g4@1 g4@2"
)).slow(2)
  .s("supersaw")
  .lpf(2000)
  .velocity(0.8)

const clap = s("cp*2")
  .amp(1.2)

stack(
  melody,
  clap,
  s("bd(3,8)")
)
```

### 12. Humpty Dumpty (Wobble Bass)
```javascript
// Humpty Dumpty
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 d4@1 d4@1 e4@2 c4@2",
  "e4@1 e4@1 f4@1 f4@1 g4@2 e4@2"
)).slow(2)
  .s("sawtooth")
  .velocity(0.8)

const wobble = note("c2 g2")
  .s("wobble")
  .lpf(sine.fast(4).range(100, 1000))
  .amp(1.2)

stack(
  melody,
  wobble,
  s("bd sd")
)
```

### 13. Hickory Dickory Dock (Clockwork)
```javascript
// Hickory Dickory Dock
setcps(0.6)

const melody = note(cat(
  "a3@1 b3@1 c4@2 a3@2",
  "e4@1 c4@1 a3@2"
))
  .s("supermandolin")
  .velocity(0.8)

const tick = s("rm")
  .amp(0.8)

stack(
  melody,
  tick,
  note("a2").s("sine")
)
```

### 14. Hot Cross Buns (Drone)
```javascript
// Hot Cross Buns
setcps(0.4)

const melody = note(cat(
  "e4@1 d4@1 c4@2",
  "e4@1 d4@1 c4@2",
  "c4@0.5 c4@0.5 c4@0.5 c4@0.5 d4@0.5 d4@0.5 d4@0.5 d4@0.5"
))
  .s("supermandolin")
  .velocity(0.8)

const drone = note("c2")
  .s("sawtooth").lpf(500)
  .amp(0.6)

stack(
  melody,
  drone,
  s("tom*4")
)
```

### 15. Jack and Jill (Up & Down)
```javascript
// Jack and Jill
setcps(0.6)

const melody = note(cat(
  "c4@1 d4@1 e4@1 c4@1",
  "e4@1 f4@1 g4@2"
))
  .s("triangle")
  .velocity(0.8)

const harp = note("c3 g3")
  .arp("up")
  .s("supermandolin")
  .amp(0.5)

stack(
  melody,
  harp,
  s("bd sd")
)
```

### 16. Little Bo Peep (Lost & Found)
```javascript
// Little Bo Peep
setcps(0.6)

const melody = note(cat(
  "c4@1 d4@1 e4@2 c4@2",
  "d4@1 e4@1 f4@2 d4@2"
))
  .s("vowel")
  .vowel("o")
  .velocity(0.8)

const bass = note("c2 g2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("hh")
)
```

### 17. Muffin Man (Baker's Beat)
```javascript
// Muffin Man
setcps(0.6)

const melody = note(cat(
  "g3@1 c4@1 c4@2 d4@1 e4@1 c4@2",
  "a3@1 g3@1 g3@2"
)).slow(2)
  .s("square")
  .velocity(0.8)

const chords = note("c3:major g3:major")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 18. Pop Goes the Weasel (Surprise!)
```javascript
// Pop Goes the Weasel
setcps(0.6)

const melody = note(cat(
  "c4@0.5 c4@0.5 d4@0.5 d4@0.5 e4@0.5 g4@0.5 c4@2",
  "c4@0.5 c4@0.5 d4@0.5 d4@0.5 e4@2 c4@1"
))
  .s("triangle")
  .velocity(0.8)

const kick = s("bd")
  .slow(8)
  .amp(1.5)

stack(
  melody,
  kick,
  s("hh*8")
)
```

### 19. Ring Around the Rosie (Spooky)
```javascript
// Ring Around the Rosie
setcps(0.6)

const melody = note(cat(
  "g4@1 g4@1 e4@1 a4@1 g4@1 e4@2",
  "g4@1 g4@1 e4@1 a4@1 g4@1 e4@2"
)).slow(1.75)
  .s("superpiano")
  .detune(2)
  .velocity(0.6)

const noise = s("noise")
  .amp(0.3)

stack(
  melody,
  noise,
  note("e2").s("sub")
)
```

### 20. Rock-a-bye Baby (Lullaby)
```javascript
// Rock-a-bye Baby
setcps(0.4)

const melody = note(cat(
  "e4@1.5 g4@0.5 a4@2",
  "e4@1.5 g4@0.5 a4@2"
))
  .s("sine")
  .velocity(0.6)

const pad = note("c3 g3")
  .s("supersaw").attack(0.5)
  .amp(0.4)

stack(
  melody,
  pad,
  s("sine")
)
```

### 21. This Old Man (March)
```javascript
// This Old Man
setcps(0.6)

const melody = note(cat(
  "g4@1 e4@1 g4@2",
  "g4@1 e4@1 g4@2",
  "a4@1 g4@1 f4@1 e4@1 d4@1 e4@1 f4@1 g4@1"
)).slow(2)
  .s("sawtooth").lpf(2000)
  .velocity(0.8)

const snare = s("snare*4")
  .velocity("0.8 0.4 0.6 0.4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 22. Three Blind Mice (Chase)
```javascript
// Three Blind Mice
setcps(0.6)

const melody = note(cat(
  "e4@1 d4@1 c4@2",
  "e4@1 d4@1 c4@2",
  "g4@0.5 f4@0.5 f4@0.5 e4@0.5 c4@2"
))
  .s("sawtooth").lpf(3000)
  .velocity(0.8)

const pizz = note("c3")
  .s("supermandolin")
  .amp(0.6)

stack(
  melody,
  pizz,
  s("hh*16")
)
```

### 23. Farmer in the Dell (Pastoral)
```javascript
// Farmer in the Dell
setcps(0.6)

const melody = note(cat(
  "g3@1 c4@1 c4@1 c4@1",
  "c4@1 d4@1 e4@1 c4@1"
))
  .s("supermandolin")
  .velocity(0.8)

const flute = s("triangle")
  .amp(0.3)

stack(
  melody,
  flute,
  note("c2 g2").s("bass")
)
```

### 24. Bingo (Spelling)
```javascript
// Bingo
setcps(0.6)

const melody = note(cat(
  "g4@1 c4@1 c4@1 g4@1 g4@1 a4@1 a4@1",
  "g4@1 g4@1 f4@1 f4@1 e4@1 e4@1 d4@1 d4@1 c4@2"
)).slow(2.5)
  .s("vowel")
  .vowel("o")
  .velocity(0.8)

const clap = s("clap*5")
  .amp(1.1)

stack(
  melody,
  clap,
  s("bd sd")
)
```

### 25. Head, Shoulders, Knees (Exercise)
```javascript
// Head, Shoulders, Knees
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 e4@1 e4@1 g4@1 g4@1 g4@2",
  "f4@1 f4@1 d4@1 d4@1 b3@1 b3@1 b3@2"
)).slow(2)
  .s("sawtooth")
  .velocity(0.8)

const kick = s("bd*4")
  .amp(1.2)

stack(
  melody,
  kick,
  s("hh*8")
)
```

---

## Category 2: Folk & Traditional (Advanced)

### 26. Amazing Grace (Gospel Organ)
```javascript
// Amazing Grace - Gospel
setcps(0.6)

const melody = note(cat(
  "d4@1 g4@2 b4@0.5 a4@0.5 g4@2 e4@1 d4@2",
  "d4@1 g4@2 b4@0.5 a4@0.5 g4@2 b4@1 d5@3"
)).slow(2.5)
  .s("superpwm")
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.8)

const chords = note("g2:major c3:major g3:major d3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

stack(
  melody,
  chords,
  s("vowel").slow(8)
)
```

### 27. Auld Lang Syne (Synthwave)
```javascript
// Auld Lang Syne
setcps(0.6)

const melody = note(cat(
  "c4@1 f4@1.5 f4@0.5 f4@1 a4@1 g4@1.5 f4@0.5 g4@1 a4@1",
  "f4@1.5 f4@0.5 a4@1 c5@1 d5@2"
)).slow(2.25)
  .s("supersaw")
  .velocity(0.8)

const drums = s("bd*4 sd*2")
  .amp(1.1)

stack(
  melody,
  drums,
  note("f1 c2").s("moog")
)
```

### 28. Danny Boy (Ethereal)
```javascript
// Danny Boy
setcps(0.4)

const melody = note(cat(
  "b3@0.5 c4@0.5 d4@1 b3@1.5 g3@0.5 g3@1 b3@1",
  "c4@1 d4@1 e4@1 c4@1"
))
  .s("triangle")
  .velocity(0.8)

const strings = note("g2 c3")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.6)

stack(
  melody,
  strings,
  s("noise").amp(0.1)
)
```

### 29. Greensleeves (Renaissance)
```javascript
// Greensleeves
setcps(0.6)

const melody = note(cat(
  "a3@1 c4@2 d4@1 e4@1.5 f4@0.5 e4@1",
  "d4@2 b3@1 g3@1.5 a3@0.5 b3@1"
)).slow(1.75)
  .s("supermandolin")
  .velocity(0.8)

const bass = note("a2 g2")
  .s("supermandolin")
  .amp(0.7)

stack(
  melody,
  bass,
  s("tambourine*4")
)
```

### 30. Scarborough Fair (Folk Guitar)
```javascript
// Scarborough Fair
setcps(0.6)

const melody = note(cat(
  "d4@2 d4@2 a4@2 a4@1 e4@1",
  "f4@1.5 e4@0.5 d4@2"
)).slow(2)
  .s("supermandolin")
  .velocity(0.8)

const bass = note("d2 a2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("hh").hpf(5000)
)
```

### 31. Yankee Doodle (Marching Band)
```javascript
// Yankee Doodle
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 d4@1 e4@1 c4@1 e4@1 d4@2",
  "c4@1 c4@1 d4@1 e4@1 c4@1 b3@1 g3@2"
)).slow(2)
  .s("sine")
  .velocity(0.8)

const snare = s("snare*4")
  .velocity("0.8 0.4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 32. Oh! Susanna (Bluegrass)
```javascript
// Oh! Susanna
setcps(0.6)

const melody = note(cat(
  "c4@0.5 d4@0.5 e4@1 g4@1 g4@1 a4@1 g4@1 e4@1 c4@1",
  "d4@1 e4@1 e4@1 d4@1 c4@1 d4@2"
)).slow(2)
  .s("supermandolin")
  .velocity(0.8)

const bass = note("c2 g2")
  .s("bass")
  .amp(0.7)

stack(
  melody,
  bass,
  s("supersaw")
)
```

### 33. Camptown Races (Ragtime)
```javascript
// Camptown Races
setcps(0.6)

const melody = note(cat(
  "g4@1 g4@1 e4@1 g4@1 a4@1 g4@1 e4@2",
  "e4@1 d4@1 d4@2 e4@1 d4@1 d4@2"
)).slow(2)
  .s("superpiano")
  .swing(0.2)
  .velocity(0.8)

const tuba = note("c2 g2")
  .s("supersquare").lpf(500)
  .amp(0.6)

stack(
  melody,
  tuba,
  s("rm")
)
```

### 34. Home on the Range (Cowboy)
```javascript
// Home on the Range
setcps(0.45)

const melody = note(cat(
  "d4@1 d4@1 g4@1 g4@1 a4@1 b4@1 g4@1",
  "a4@1 b4@1 g4@1"
)).slow(1.75)
  .s("harmonica")
  .velocity(0.8)

const guitar = note("g2 d3")
  .s("supermandolin")
  .amp(0.6)

stack(
  melody,
  guitar,
  s("crickets")
)
```

### 35. She'll Be Coming 'Round the Mountain
```javascript
// She'll Be Coming 'Round the Mountain
setcps(0.6)

const melody = note(cat(
  "c4@1 d4@1 e4@1 g4@1 g4@1 g4@3",
  "a4@1 g4@1 e4@1 c4@1"
)).slow(2)
  .s("supersaw")
  .velocity(0.8)

const banjo = s("supermandolin")
  .amp(0.4)

stack(
  melody,
  banjo,
  s("stomp clap")
)
```

### 36. Swing Low, Sweet Chariot (Soul)
```javascript
// Swing Low, Sweet Chariot
setcps(0.45)

const melody = note(cat(
  "e4@2 g4@2 g4@4",
  "g4@1 e4@1 d4@1 c4@1 d4@1 e4@1 g4@2"
)).slow(2)
  .s("superpiano").lpf(1000)
  .velocity(0.8)

const bass = note("c2 f2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("snap")
)
```

### 37. When the Saints (New Orleans)
```javascript
// When the Saints
setcps(0.6)

const melody = note(cat(
  "c4@1 e4@1 f4@1 g4@4",
  "c4@1 e4@1 f4@1 g4@4"
)).slow(1.75)
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

const tuba = note("c2 g2")
  .s("supersquare").lpf(500)
  .amp(0.7)

stack(
  melody,
  tuba,
  s("sd*4").swing(0.3)
)
```

### 38. My Bonnie (Waltz)
```javascript
// My Bonnie
setcps(0.45)

const melody = note(cat(
  "g3@1 e4@1 d4@1 c4@1 d4@1 c4@1 a3@2",
  "a3@1 g3@1 e3@1 g3@2"
)).slow(2)
  .s("accordion")
  .velocity(0.8)

const drums = s("bd hh hh")
  .amp(1.0)

stack(
  melody,
  drums,
  note("c2").s("bass")
)
```

### 39. Clementine (Miner's Song)
```javascript
// Clementine
setcps(0.6)

const melody = note(cat(
  "g3@1.5 g3@0.5 g3@1 c4@2 c4@1",
  "c4@1 e4@1 c4@1 g3@2"
))
  .s("harmonica")
  .velocity(0.8)

const bass = note("c2 g2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("cp")
)
```

### 40. Railroad (Train Beat)
```javascript
// Railroad
setcps(0.6)

const melody = note(cat(
  "c4@2 c4@2 c4@2 d4@1 e4@3",
  "e4@2 d4@2 e4@2 f4@1 g4@3"
)).slow(2.5)
  .s("supermandolin")
  .velocity(0.8)

const train = s("snare*8")
  .amp("0.4 0.2 0.6 0.2")

stack(
  melody,
  train,
  s("sine").portamento(0.1)
)
```

### 41. Red River Valley (Country)
```javascript
// Red River Valley
setcps(0.6)

const melody = note(cat(
  "d4@1 g4@1 b4@1 b4@1 b4@1 a4@1 g4@1 a4@1",
  "b4@2 a4@2 g4@4"
)).slow(2)
  .s("supermandolin")
  .velocity(0.8)

const guitar = note("g2 d3")
  .s("supermandolin")
  .amp(0.6)

stack(
  melody,
  guitar,
  s("hh")
)
```

### 42. House of the Rising Sun (Arpeggio)
```javascript
// House of the Rising Sun
setcps(0.6)

const melody = note(cat(
  "a2@1 c3@1 d3@1 f3@2 a3@1 e3@2",
  "a2@1 e3@2"
)).slow(2)
  .s("supermandolin")
  .velocity(0.8)

const bass = note("a1 c2 d2 f2")
  .s("bass")
  .amp(0.7)

stack(
  melody,
  bass,
  s("superpwm")
)
```

### 43. Waltzing Matilda (Outback)
```javascript
// Waltzing Matilda
setcps(0.6)

const melody = note(cat(
  "c4@1.5 e4@0.5 g4@1 g4@2 a4@1 b4@1 a4@1 g4@2",
  "g4@1 e4@1 c4@1"
)).slow(2.5)
  .s("triangle")
  .velocity(0.8)

const didge = s("sawtooth").lpf(300)
  .amp(0.5)

stack(
  melody,
  didge,
  s("sticks")
)
```

### 44. Bella Ciao (Resistance)
```javascript
// Bella Ciao
setcps(0.6)

const melody = note(cat(
  "e4@1 a4@1 b4@1 c5@1 a4@2",
  "e4@1 a4@1 b4@1 c5@1 a4@2",
  "e4@1 a4@1 b4@1 c5@1 b4@1 a4@1 c5@1"
)).slow(1.75)
  .s("accordion")
  .velocity(0.8)

const kick = s("bd*2")
  .amp(1.2)

stack(
  melody,
  kick,
  s("cp")
)
```

### 45. Kalinka (Accelerating)
```javascript
// Kalinka
setcps(0.6)

const melody = note(cat(
  "e4@1.5 c4@0.5 b3@1 a3@1 e4@1.5 c4@0.5 b3@1 a3@1",
  "a3@1 b3@1 c4@1 d4@1 e4@2"
)).slow(2)
  .s("supermandolin")
  .velocity(0.8)

const kick = s("bd*2")
  .amp(1.1)

stack(
  melody,
  kick,
  s("glitch")
).fast(sine.slow(8).range(1, 1.5))
```

### 46. Tetris Theme (8-Bit)
```javascript
// Tetris Theme
setcps(0.6)

const melody = note(cat(
  "e5@2 b4@1 c5@1 d5@2 c5@1 b4@1 a4@2 a4@1 c5@1 e5@2 d5@1 c5@1",
  "b4@3 c5@1 d5@2 e5@2"
)).slow(4)
  .s("square")
  .velocity(0.8)

const tri = note("e2 a2")
  .s("triangle")
  .arp("down")
  .amp(0.6)

stack(
  melody,
  tri,
  s("noise*8").decay(0.1)
)
```

### 47. La Bamba (Latin)
```javascript
// La Bamba
setcps(0.6)

const melody = note(cat(
  "c4@0.5 d4@0.5 e4@1 f4@0.5 g4@3",
  "c4@0.5 d4@0.5 e4@1 f4@0.5 g4@3"
))
  .s("supermandolin")
  .shape(0.4)
  .velocity(0.8)

const congas = s("conga*4")
  .amp(0.7)

stack(
  melody,
  congas,
  s("cp").hpf(1000)
)
```

### 48. Guantanamera (Cuban)
```javascript
// Guantanamera
setcps(0.6)

const melody = note(cat(
  "g3@2 a3@2 b3@3",
  "b3@0.5 a3@0.5 b3@2 a3@2 g3@2"
)).slow(1.75)
  .s("superpiano")
  .velocity(0.8)

const bongo = s("bongo*4")
  .amp(0.6)

stack(
  melody,
  bongo,
  s("guiro")
)
```

### 49. Cielito Lindo (Mariachi)
```javascript
// Cielito Lindo
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 a3@1 b3@1 g3@2 c4@1",
  "c4@1 c4@1 a3@1 b3@1 g3@2"
)).slow(1.75)
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

const guitaron = note("c3 g3")
  .s("bass")
  .amp(0.7)

stack(
  melody,
  guitaron,
  s("hh").hpf(5000)
)
```

### 50. Aloha Oe (Hawaiian)
```javascript
// Aloha Oe
setcps(0.4)

const melody = note(cat(
  "g3@1 c4@1 e4@1 g4@2.5 a4@0.5",
  "a4@1 g4@3"
))
  .s("supermandolin")
  .velocity(0.8)

const uke = note("c3 g3")
  .s("supermandolin")
  .amp(0.6)

stack(
  melody,
  uke,
  s("noise").amp(0.2)
)
```

---

## Category 3: Classical Themes (Advanced)

### 51. Ode to Joy (Orchestral)
```javascript
// Ode to Joy
setcps(0.6)

const melody = note(cat(
  "e4@1 e4@1 f4@1 g4@1 g4@1 f4@1 e4@1 d4@1",
  "c4@1 c4@1 d4@1 e4@1 e4@1.5 d4@0.5 d4@2"
)).slow(2)
  .s("supersaw").attack(0.1).release(0.8)
  .velocity(0.8)

const bass = note("c2 g2")
  .s("supersaw").lpf(1000).attack(0.1)
  .amp(0.7)

stack(
  melody,
  bass,
  s("bd").amp(1.2).shape(0.5)
)
```

### 52. Fur Elise (Music Box)
```javascript
// Fur Elise
setcps(0.6)

const melody = note(cat(
  "e5@0.5 d#5@0.5 e5@0.5 d#5@0.5 e5@0.5 b4@0.5 d5@0.5 c5@0.5",
  "a4@2"
))
  .s("sine")
  .velocity(0.8)

const piano = note("a2 e3 a3")
  .s("superpiano")
  .amp(0.5)

stack(
  melody,
  piano,
  s("noise").amp(0.05)
)
```

### 53. Symphony No. 5 (Cinematic)
```javascript
// Symphony No. 5
setcps(0.6)

const melody = note(cat(
  "g4@0.5 g4@0.5 g4@0.5 eb4@4",
  "~ f4@0.5 f4@0.5 f4@0.5 d4@4"
)).slow(1.62)
  .s("sawtooth").lpf(2000)
  .velocity(0.9)

const bass = note("g2")
  .s("bass")
  .amp(0.7)

stack(
  melody,
  bass,
  s("bd").amp(1.5)
)
```

### 54. Canon in D (Pachelbel)
```javascript
// Canon in D
setcps(0.4)

const melody = note(cat(
  "f#5@2 e5@2 d5@2 c#5@2",
  "b4@2 a4@2 b4@2 c#5@2"
)).slow(2)
  .s("supersaw").attack(0.1)
  .velocity(0.8)

const cello = note("d3 a2 b2 f#2 g2 d2 g2 a2")
  .s("supersaw").lpf(1000).attack(0.1)
  .amp(0.6)

stack(
  melody,
  cello,
  s("supermandolin").amp(0.4)
)
```

### 55. Eine Kleine Nachtmusik (String Quartet)
```javascript
// Eine Kleine Nachtmusik
setcps(0.6)

const melody = note(cat(
  "g4@1.5 d4@0.5 g4@1.5 d4@0.5 g4@0.5 d4@0.5 g4@0.5 b4@0.5 d5@2",
  "c5@1.5 a4@0.5 c5@1.5 a4@0.5"
)).slow(2)
  .s("supersaw").attack(0.1)
  .legato(0.5)
  .velocity(0.8)

const viola = note("g3 d3")
  .s("supersaw").lpf(2000).attack(0.1)
  .amp(0.6)

stack(
  melody,
  viola,
  note("g2").s("supersaw").lpf(1000).attack(0.1)
)
```

### 56. Rondo Alla Turca (Mechanical)
```javascript
// Rondo Alla Turca
setcps(0.6)

const melody = note(cat(
  "b4@0.5 a4@0.5 g#4@0.5 a4@0.5 c5@2",
  "d5@0.5 c5@0.5 b4@0.5 c5@0.5 e5@2"
))
  .s("superpiano")
  .velocity(0.8)

const bass = note("a2 e3")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("hh*4")
)
```

### 57. Morning Mood (Sunrise)
```javascript
// Morning Mood
setcps(0.6)

const melody = note(cat(
  "g4@1 e4@1 d4@1 c4@1 d4@1 e4@1 g4@1 e4@1",
  "d4@1 c4@1 d4@1 e4@1 g4@1 e4@1 g4@1 a4@1"
)).slow(2)
  .s("triangle")
  .velocity(0.8)

const strings = note("c3")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.6)

stack(
  melody,
  strings,
  s("triangle").amp(0.2)
)
```

### 58. Mountain King (Building Up)
```javascript
// Mountain King
setcps(0.6)

const melody = note(cat(
  "b2@0.5 c#3@0.5 d3@0.5 e3@0.5 f#3@0.5 d3@0.5 f#3@1"
))
  .s("sawtooth").lpf(1000)
  .legato(0.5)
  .velocity(0.8)

const tuba = note("b1")
  .s("supersquare").lpf(500)
  .amp(0.7)

stack(
  melody,
  tuba,
  s("supermandolin")
)
```

### 59. Spring (Vivaldi)
```javascript
// Spring
setcps(0.6)

const melody = note(cat(
  "e5@2 g#5@2 g#5@2 g#5@0.5 f#5@0.5 e5@0.5 b4@0.5",
  "e5@1 b4@1 g#4@1 b4@1 e5@2"
)).slow(2)
  .s("supersaw").attack(0.1)
  .velocity(0.8)

const harpsi = note("e3")
  .s("supersaw")
  .amp(0.5)

stack(
  melody,
  harpsi,
  s("triangle")
)
```

### 60. Blue Danube (Waltz)
```javascript
// Blue Danube
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 e4@1 g4@1 g4@2",
  "~ ~ g4@2",
  "e5@1 e5@2"
))
  .s("supersaw").attack(0.1).release(0.8)
  .velocity(0.8)

const drums = s("bd hh hh")
  .amp(1.0)

stack(
  melody,
  drums,
  note("c3").s("sawtooth")
)
```

### 61. Ride of the Valkyries (Epic)
```javascript
// Ride of the Valkyries
setcps(0.6)

const melody = note(cat(
  "b3@1.5 e4@0.5 g4@1.5 b4@0.5 g4@2"
))
  .s("sawtooth").lpf(2000)
  .velocity(0.9)

const bass = note("e2 b2")
  .s("sawtooth")
  .amp(0.7)

stack(
  melody,
  bass,
  s("snare")
)
```

### 62. Swan Lake (Tragic)
```javascript
// Swan Lake
setcps(0.6)

const melody = note(cat(
  "f#4@1 b4@1 c#5@1 d5@1 e5@1 f#5@3"
)).slow(2)
  .s("sawtooth").lpf(3000)
  .velocity(0.8)

const harp = note("b2")
  .s("supermandolin")
  .amp(0.6)

stack(
  melody,
  harp,
  s("supersaw").attack(0.1).release(0.8)
)
```

### 63. Nutcracker March (Toy Soldiers)
```javascript
// Nutcracker March
setcps(0.6)

const melody = note(cat(
  "g4@1 e4@1 e4@1 f4@1 d4@1 d4@1",
  "c4@1 d4@1 c4@1 b3@1 c4@2"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.8)

const snare = s("snare*4")
  .velocity("0.8 0.4")

stack(
  melody,
  snare,
  note("c3").s("supermandolin")
)
```

### 64. William Tell (Galop)
```javascript
// William Tell
setcps(0.6)

const melody = note(cat(
  "e4@0.5 e4@0.5 e4@0.5 f4@0.5 g4@2",
  "g4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@2"
))
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

const drums = s("bd*2 sd*2")
  .amp(1.1)

stack(
  melody,
  drums,
  note("e2").s("supersaw").attack(0.1).release(0.8)
)
```

### 65. Habanera (Tango)
```javascript
// Habanera
setcps(0.6)

const melody = note(cat(
  "d4@1.5 eb4@0.5 f4@1.5 f#4@0.5 g4@4"
)).slow(2)
  .s("supersaw").attack(0.1)
  .velocity(0.8)

const piano = note("d3 a3")
  .s("superpiano")
  .struct("x ~ x x")

stack(
  melody,
  piano,
  s("cp")
)
```

### 66. Toreador Song (Grand)
```javascript
// Toreador Song
setcps(0.6)

const melody = note(cat(
  "f4@1 g4@1 a4@1 f4@1 g4@1 a4@1",
  "bb4@1 a4@1 g4@1 f4@1 e4@1 d4@1"
))
  .s("sawtooth").lpf(2000)
  .velocity(0.9)

const cymbal = s("oh")
  .slow(4)

stack(
  melody,
  cymbal,
  note("f2").s("supersquare").lpf(500)
)
```

### 67. Bolero (Repetitive)
```javascript
// Bolero
setcps(0.6)

const melody = note(cat(
  "c4@3 b3@0.5 c4@0.5 d4@0.5 c4@0.5 b3@0.5 a3@0.5",
  "c4@1 c4@1 a3@2"
))
  .s("triangle")
  .velocity(0.8)

const snare = s("snare")
  .struct("x x x/3 x/3 x/3 x x x/3 x/3 x/3")

stack(
  melody,
  snare,
  note("c2").s("supermandolin")
)
```

### 68. Clair de Lune (Dreamy)
```javascript
// Clair de Lune
setcps(0.6)

const melody = note(cat(
  "f4@2 g#4@2 f4@2 eb4@2"
)).slow(2)
  .s("superpiano")
  .velocity(0.5)

const pad = note("f3")
  .s("supersaw").attack(0.5)
  .amp(0.4)

stack(
  melody,
  pad,
  s("noise").amp(0.05)
)
```

### 69. Gymnopédie No.1 (Minimal)
```javascript
// Gymnopédie No.1
setcps(0.4)

const melody = note(cat(
  "f#4@2 a4@2 g4@2 f#4@2 c#4@2 b3@2 c#4@2 d4@2"
)).slow(4)
  .s("superpiano").lpf(1000)
  .velocity(0.6)

const piano = note("d3 a3")
  .s("superpiano")
  .amp(0.5)

stack(
  melody,
  piano,
  s("noise").amp(0.02)
)
```

### 70. Ave Maria (Choral)
```javascript
// Ave Maria
setcps(0.4)

const melody = note(cat(
  "g4@2 a4@4 c5@1.5 a4@0.5",
  "g4@2 e4@2"
)).slow(2)
  .s("vowel")
  .velocity(0.7)

const organ = note("c3 g3")
  .s("superpwm")
  .amp(0.5)

stack(
  melody,
  organ,
  note("c2").s("sub")
)
```

### 71. Brahm's Lullaby (Sleepy)
```javascript
// Brahm's Lullaby
setcps(0.7)

const melody = note(cat(
  "e4@0.5 e4@0.5 g4@2 e4@0.5 e4@0.5 g4@2",
  "e4@0.5 g4@0.5 c5@1 b4@0.5 a4@0.5 a4@0.5 g4@2"
))
  .s("sine")
  .velocity(0.6)

const harp = note("c3")
  .s("supermandolin")
  .amp(0.5)

stack(
  melody,
  harp,
  s("noise")
)
```

### 72. Surprise Symphony (Dynamic)
```javascript
// Surprise Symphony
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 e4@1 e4@1 g4@1 g4@1 e4@2",
  "f4@1 f4@1 d4@1 d4@1 b3@1 b3@1 g3@2"
)).slow(2)
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.4)

const surprise = s("bd")
  .slow(8)
  .amp(2)

stack(
  melody,
  surprise
)
```

### 73. New World Symphony (Nostalgic)
```javascript
// New World Symphony
setcps(0.6)

const melody = note(cat(
  "e4@2 g4@1 g4@3 e4@1 d4@1 c4@2 d4@1 e4@1 d4@4"
)).slow(4)
  .s("sawtooth")
  .velocity(0.8)

const strings = note("c3 g3")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.5)

stack(
  melody,
  strings,
  s("bd").amp(1.2).shape(0.5)
)
```

### 74. The Entertainer (Ragtime Piano)
```javascript
// The Entertainer
setcps(0.6)

const melody = note(cat(
  "d5@0.5 e5@0.5 c5@0.5 a4@1 b4@0.5 g4@0.5",
  "d4@0.5 e4@0.5 c4@0.5 a3@1 b3@0.5 g3@1.5"
))
  .s("superpiano")
  .velocity(0.9)

const bass = note("c3")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  bass,
  s("hh").swing(0.2)
)
```

### 75. Maple Leaf Rag (Saloon)
```javascript
// Maple Leaf Rag
setcps(0.6)

const melody = note(cat(
  "eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@1",
  "eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@2"
))
  .s("superpiano")
  .velocity(0.8)

const bass = note("eb2")
  .s("superpiano")
  .amp(0.7)

stack(
  melody,
  bass,
  s("foot")
)
```

---

## Category 4: Holiday & Seasonal (Advanced)

### 76. Jingle Bells (Sleigh Ride)
```javascript
// Jingle Bells
setcps(0.6)

const melody = note(cat(
  "e4@1 e4@1 e4@2",
  "e4@1 e4@1 e4@2",
  "e4@1 g4@1 c4@1.5 d4@0.5 e4@4"
)).slow(2)
  .s("superpiano")
  .velocity(0.8)

const sleigh = s("hh")
  .amp(0.6)

stack(
  melody,
  sleigh,
  note("c2").s("supersquare").lpf(500)
)
```

### 77. Silent Night (Peaceful)
```javascript
// Silent Night
setcps(0.6)

const melody = note(cat(
  "g4@1.5 a4@0.5 g4@1 e4@3",
  "g4@1.5 a4@0.5 g4@1 e4@3",
  "d5@2 d5@1 b4@3",
  "c5@2 c5@1 g4@3"
))
  .s("sine")
  .velocity(0.7)

const pad = note("c3 g3 c4")
  .s("supersaw").attack(0.5)
  .amp(0.5)

stack(
  melody,
  pad,
  s("noise").amp(0.1)
)
```

### 78. Deck the Halls (Festive)
```javascript
// Deck the Halls
setcps(0.6)

const melody = note(cat(
  "c5@1.5 b4@0.5 a4@1 g4@1 f4@1 e4@1 d4@1 c4@1",
  "d4@0.5 e4@0.5 f4@1 d4@1 e4@1.5 d4@0.5 c4@2"
)).slow(2)
  .s("sawtooth").lpf(2000)
  .velocity(0.8)

const bass = note("c2 g2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("hh")
)
```

### 79. Joy to the World (Majestic)
```javascript
// Joy to the World
setcps(0.45)

const melody = note(cat(
  "c5@2 b4@1.5 a4@0.5 g4@3",
  "f4@1 e4@2 d4@2 c4@2"
)).slow(1.75)
  .s("superpwm")
  .velocity(0.8)

const bass = note("c2")
  .s("superpwm")
  .amp(0.7)

stack(
  melody,
  bass,
  s("sine")
)
```

### 80. We Wish You a Merry Christmas (Carolers)
```javascript
// We Wish You a Merry Christmas
setcps(0.6)

const melody = note(cat(
  "d4@1 g4@1 g4@0.5 a4@0.5 g4@1 f#4@1 e4@1 e4@1",
  "e4@1 a4@1 a4@0.5 b4@0.5 a4@1 g4@1 f#4@1 d4@1"
)).slow(1.75)
  .s("vowel")
  .velocity(0.8)

const cello = note("g2")
  .s("supersaw").lpf(1000).attack(0.1)
  .amp(0.6)

stack(
  melody,
  cello,
  s("tambourine")
)
```

### 81. The First Noel (Hymn)
```javascript
// The First Noel
setcps(0.6)

const melody = note(cat(
  "f#4@1.5 e4@0.5 d4@1 e4@1 f#4@2 g4@2",
  "a4@2 b4@2 c#5@4"
)).slow(2)
  .s("superpwm")
  .velocity(0.8)

const bass = note("d2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("vowel").amp(0.2)
)
```

### 82. Hark! The Herald Angels (Trumpet)
```javascript
// Hark! The Herald Angels
setcps(0.6)

const melody = note(cat(
  "c4@1 f4@1 f4@1.5 g4@0.5 f4@1 e4@1 d4@2",
  "d4@1 d4@1 d4@1 c4@1 c4@1 bb3@1 a3@2"
)).slow(2)
  .s("sawtooth").lpf(2500)
  .velocity(0.9)

const snare = s("snare*4")
  .amp(0.6)

stack(
  melody,
  snare,
  note("f2").s("sawtooth")
)
```

### 83. O Christmas Tree (Jazz Waltz)
```javascript
// O Christmas Tree
setcps(0.6)

const melody = note(cat(
  "g3@1 c4@1.5 c4@0.5 c4@2",
  "d4@1 e4@1.5 e4@0.5 e4@2"
))
  .s("sine")
  .velocity(0.8)

const ride = s("oh*3")
  .amp(0.6)

stack(
  melody,
  ride,
  note("c2").s("bass")
)
```

### 84. Rudolph (Red Nose)
```javascript
// Rudolph
setcps(0.6)

const melody = note(cat(
  "g4@0.5 a4@0.5 g4@0.5 e4@1 c5@1 a4@1 g4@3"
)).slow(1.88)
  .s("sawtooth")
  .velocity(0.8)

const drums = s("bd sd")
  .amp(1.1)

stack(
  melody,
  drums,
  s("hh")
)
```

### 85. 12 Days (Counting)
```javascript
// 12 Days
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 c4@2 d4@1 e4@1 f4@1 g4@1 f4@1 e4@1 d4@1 c4@4"
)).slow(3.75)
  .s("superpiano")
  .velocity(0.8)

const bass = note("c2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 86. Frosty (Snowy)
```javascript
// Frosty
setcps(0.6)

const melody = note(cat(
  "g4@1.5 e4@0.5 f4@1 g4@1 c5@2 b4@1 c5@1",
  "d5@1 c5@1 b4@1 a4@1 g4@4"
)).slow(2)
  .s("triangle")
  .velocity(0.7)

const shaker = s("hh").hpf(5000)
  .amp(0.3)

stack(
  melody,
  shaker,
  note("c2").s("supersquare").lpf(500)
)
```

### 87. Little Drummer Boy (Percussion)
```javascript
// Little Drummer Boy
setcps(0.6)

const melody = note(cat(
  "c4@1 d4@1 e4@1 e4@1 e4@2",
  "f4@1 e4@1 f4@1 e4@2"
))
  .s("vowel")
  .velocity(0.8)

const snare = s("snare*4")
  .amp(0.6)

stack(
  melody,
  snare,
  note("c2").s("bass")
)
```

### 88. O Holy Night (Night Sky)
```javascript
// O Holy Night
setcps(0.7)

const melody = note(cat(
  "e4@3 e4@1 e4@2 g4@2",
  "g4@3 a4@0.5 a4@0.5 f4@2 a4@2"
)).slow(2)
  .s("sine")
  .velocity(0.6)

const pad = note("c3 g3")
  .s("supersaw").attack(0.5)
  .amp(0.4)

stack(
  melody,
  pad,
  s("glitch")
)
```

### 89. God Rest Ye Merry (Medieval)
```javascript
// God Rest Ye Merry
setcps(0.6)

const melody = note(cat(
  "d4@1 d4@1 a4@1 a4@1 g4@1 f4@1 e4@1 d4@1",
  "e4@1 f4@1 g4@1 a4@3"
)).slow(2)
  .s("supermandolin")
  .velocity(0.7)

const drone = note("d2")
  .s("sawtooth").lpf(500)
  .amp(0.5)

stack(
  melody,
  drone,
  s("sine")
)
```

### 90. Good King Wenceslas (Royal)
```javascript
// Good King Wenceslas
setcps(0.6)

const melody = note(cat(
  "f4@1 f4@1 f4@1 g4@1 f4@1 f4@1 c4@2",
  "d4@1 e4@1 f4@1 d4@1 e4@1 f4@1 g4@2"
)).slow(2)
  .s("sawtooth").lpf(2000)
  .velocity(0.9)

const timp = s("bd").amp(1.2).shape(0.5)
  .amp(0.7)

stack(
  melody,
  timp,
  note("f2").s("bass")
)
```

---

## Category 5: More Famous Tunes (Advanced)

### 91. Star Spangled Banner (Anthem)
```javascript
// Star Spangled Banner
setcps(0.4)

const melody = note(cat(
  "g3@1.5 e3@0.5 c3@2 e3@2 g3@2 c4@4",
  "e4@1.5 d4@0.5 c4@2 e3@2 f#3@2 g3@4"
)).slow(3)
  .s("sawtooth").lpf(2500)
  .velocity(0.8)

const snare = s("snare*8")
  .amp(0.5)

stack(
  melody,
  snare,
  note("c2").s("supersquare").lpf(500)
)
```

### 92. God Save the King (Regal)
```javascript
// God Save the King
setcps(0.6)

const melody = note(cat(
  "c4@1 c4@1 d4@1 b3@1.5 c4@0.5 d4@1",
  "e4@1 e4@1 f4@1 e4@1 d4@1 c4@1"
))
  .s("superpiano")
  .velocity(0.8)

const cello = note("c2")
  .s("supersaw").lpf(1000).attack(0.1)
  .amp(0.6)

stack(
  melody,
  cello,
  s("oh")
)
```

### 93. La Marseillaise (Revolutionary)
```javascript
// La Marseillaise
setcps(0.6)

const melody = note(cat(
  "d4@1 d4@1 g4@2 g4@2 a4@2 a4@2",
  "d5@1.5 b4@0.5 g4@1 d4@1 b3@2 g3@2"
)).slow(2.5)
  .s("sawtooth").lpf(2000)
  .velocity(0.9)

const snare = s("sd*4")
  .amp(1.1)

stack(
  melody,
  snare,
  note("g2").s("bass")
)
```

### 94. Happy Farmer (Rural)
```javascript
// Happy Farmer
setcps(0.6)

const melody = note(cat(
  "c4@0.5 f4@1.5 a4@0.5 c5@1.5 a4@0.5 f4@2",
  "c4@0.5 f4@1.5 a4@0.5 c5@1.5 a4@0.5 f4@2"
)).slow(1.62)
  .s("superpiano")
  .velocity(0.8)

const bass = note("f2")
  .s("bass")
  .amp(0.6)

stack(
  melody,
  bass,
  s("cp")
)
```

### 95. Minuet in G (Baroque)
```javascript
// Minuet in G
setcps(0.6)

const melody = note(cat(
  "d5@1 g4@0.5 a4@0.5 b4@0.5 c5@0.5 d5@1 g4@1 g4@1",
  "e5@1 c5@0.5 d5@0.5 e5@0.5 f#5@0.5 g5@1 g4@1 g4@1"
))
  .s("supersaw")
  .velocity(0.8)

const cello = note("g2")
  .s("supersaw").lpf(1000).attack(0.1)
  .amp(0.7)

stack(
  melody,
  cello,
  s("hh")
)
```

### 96. Prelude in C (Arpeggiator)
```javascript
// Prelude in C
setcps(0.6)

const melody = note(cat(
  "c4@0.5 e4@0.5 g4@0.5 c5@0.5 e5@0.5 g4@0.5 c5@0.5 e5@0.5",
  "c4@0.5 e4@0.5 g4@0.5 c5@0.5 e5@0.5 g4@0.5 c5@0.5 e5@0.5"
))
  .s("superpiano")
  .velocity(0.8)

const bass = note("c2")
  .s("sine")
  .amp(0.3)

stack(
  melody,
  bass,
  s("noise").amp(0.1)
)
```

### 97. Jesu, Joy of Man's Desiring (Flowing)
```javascript
// Jesu, Joy of Man's Desiring
setcps(0.45)

const melody = note(cat(
  "g4@0.5 a4@0.5 b4@0.5 d5@0.5 c5@0.5 c5@0.5 e5@0.5 d5@0.5 d5@0.5 g5@0.5 f#5@0.5 g5@0.5"
))
  .s("superpwm")
  .velocity(0.8)

const strings = note("g3")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.5)

stack(
  melody,
  strings,
  s("tri")
)
```

### 98. Chopsticks (Duet)
```javascript
// Chopsticks
setcps(0.6)

const high = note(cat(
  "f4@0.5 g4@0.5 f4@0.5 g4@0.5 f4@0.5 g4@0.5",
  "e4@0.5 g4@0.5 e4@0.5 g4@0.5 e4@0.5 g4@0.5"
))
  .s("superpiano")
  .velocity(0.8)

const drums = s("bd sd")
  .amp(0.9)

stack(
  high,
  drums,
  note("c3").s("superpiano")
)
```

### 99. Heart and Soul (Doo Wop)
```javascript
// Heart and Soul
setcps(0.6)

const melody = note(cat(
  "c4@1.5 c4@0.5 c4@1 c4@0.5 b3@0.5 a3@1.5 b3@0.5 c4@1 d4@2"
)).slow(2.25)
  .s("superpiano")
  .velocity(0.8)

const chords = note("c4 a3 f3 g3")
  .s("superpiano")
  .amp(0.6)

stack(
  melody,
  chords,
  s("hh")
)
```

### 100. Happy Birthday (Future Bass)
```javascript
// Happy Birthday - Future Bass
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "g3@1.5 g3@0.5 a3@2 g3@2 c4@2 b3@4",
  "g3@1.5 g3@0.5 a3@2 g3@2 d4@2 c4@4"
)).slow(3)
  .s("supersaw")
  .lpf(sine.slow(4).range(500, 3000))
  .velocity(0.9)

// 2. CHORDS
const chords = note("c3:major9 g3:major9 c3:major9 f3:major9")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Arp)
const arp = note("0 4 7 11")
  .scale("C:major")
  .fast(4)
  .amp(0.4)

stack(
  melody,
  chords,
  arp,
  s("bd sd")
)
```
