# 100 Simple Famous Songs

This guide contains 100 simple, recognizable Strudel arrangements of famous songs. These versions focus on clear melodies and basic chords, making them perfect for learning and hacking.

## How to Use
Copy the code block for the song you want to hear.




---

## Category 1: Nursery Rhymes (Simple)

### 1. Happy Birthday (Glitch Hop Style)
```javascript
// Happy Birthday - Authentic Melody
setcps(1)
// 1. THE MELODY (Accurate)
const melody = note(cat(
  "g3@1.5 g3@0.5 a3@2 g3@2 c4@2 b3@4",
  "g3@1.5 g3@0.5 a3@2 g3@2 d4@2 c4@4",
  "g3@1.5 g3@0.5 g4@2 e4@2 c4@2 b3@2 a3@4",
  "f4@1.5 f4@0.5 e4@2 c4@2 d4@2 c4@4"
))
  .s("sawtooth")

// 2. THE CHORDS (C -> G -> C -> F)
const chords = note(cat(
  "c3@6 g3@6",
  "g3@6 c3@6",
  "c3@6 f3@6",
  "f3@4 c3@2 g3@2 c3@4"
))
  .chord("major")
  .s("superpiano")

// 3. IMPROV (Glitch Fills)
stack(
  melody,
  chords,
  s("bd sd")
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
))
  .s("triangle")

// 2. CHORDS (C -> F -> C -> G -> C)
const chords = note(cat(
  "c3@2 f3@1 c3@1 f3@1 c3@1 g3@2",
  "f3@1 c3@1 g3@1 c3@1 g3@1 c3@1 g3@2"
))
  .chord("major7")
  .s("superpiano")

// 3. IMPROV (Sparkles)
stack(
  melody,
  chords,
  s("noise")
)
```

### 3. Mary Had a Little Lamb (Techno)
```javascript
// Mary Had a Little Lamb - Accurate
setcps(1.4)
// 1. MELODY
const melody = note(cat(
  "e4@1 d4@1 c4@1 d4@1 e4@1 e4@1 e4@2",
  "d4@1 d4@1 d4@2 e4@1 g4@1 g4@2"
))
  .s("square")

// 2. CHORDS (C -> G -> C)
const chords = note(cat(
  "c3@4 c3@4",
  "g3@4 c3@4"
))
  .chord("major")
  .s("supersaw")

// 3. IMPROV (Acid)
stack(
  melody,
  chords,
  s("bd*4")
)
```

### 4. Row Row Row Your Boat (Round/Canon)
```javascript
// Row Row Row Your Boat - Canon
setcps(1.2)
const melody = note(phrase)
  .s("triangle")

const round = note(phrase)
  .s("triangle")

stack(
  melody,
  round,
  s("bd ~ sd ~")
)
```

### 5. Frere Jacques (Poly-Rhythm)
```javascript
// Frere Jacques - Accurate
setcps(1.4)
const melody = note(cat(
  "c4@1 d4@1 e4@1 c4@1",
  "c4@1 d4@1 e4@1 c4@1",
  "e4@1 f4@1 g4@2",
  "e4@1 f4@1 g4@2"
))
  .s("sine")

const harmony = note(cat(
  "c3@4", "c3@4", "c3@4", "c3@4"
))
  .chord("major")
  .s("superpiano")

stack(
  melody,
  harmony,
  s("bd(3,8)")
)
```

### 6. London Bridge (Industrial)
```javascript
// London Bridge - Accurate
setcps(1.3)
const melody = note(cat(
  "g4@1.5 a4@0.5 g4@1 f4@1 e4@1 f4@1 g4@2",
  "d4@1 e4@1 f4@2",
  "e4@1 f4@1 g4@2"
))
  .s("sawtooth")

const bass = note(cat(
  "c3@4 c3@4",
  "g2@4",
  "c3@4"
))
  .s("fmsynth")

stack(
  melody,
  bass,
  s("bd*2 sd")
)
```

### 7. Old MacDonald (Farm Step)
```javascript
// Old MacDonald
setcps(1.2)
const melody = note(cat(
  "g4@1 g4@1 g4@1 d4@1 e4@1 e4@1 d4@2",
  "b4@1 b4@1 a4@1 a4@1 g4@2"
))
  .s("square")

const chords = note("g3 c3 g3 d3")
  .chord("major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bd ~ sd ~")
)
```

### 8. Baa Baa Black Sheep (Lo-Fi)
```javascript
// Baa Baa Black Sheep
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 g4@1 g4@1 a4@0.5 b4@0.5 c5@0.5 a4@0.5 g4@2",
  "f4@1 f4@1 e4@1 e4@1 d4@1 d4@1 c4@2"
))
  .s("superpiano").lpf(1000)

const chords = note("c3 g3 f3 c3")
  .chord("major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("hh*4"),
  s("noise")
)
```

### 9. Itsy Bitsy Spider (Arpeggiated)
```javascript
// Itsy Bitsy Spider
setcps(1.2)
const melody = note(cat(
  "g3@1 c4@1 c4@1 c4@1 d4@1 e4@1 e4@1 e4@1",
  "d4@1 c4@1 d4@1 e4@1 c4@2"
))
  .s("sine")

stack(
  melody,
  s("noise")
)
```

### 10. The Wheels on the Bus (Funk)
```javascript
// The Wheels on the Bus
setcps(1.2)
const melody = note(cat(
  "c4@1 f4@1 f4@1 f4@1 f4@2 a4@2",
  "c5@1 a4@1 f4@2"
))
  .s("superpwm")

const chords = note("f3 c3 f3")
  .chord("major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 11. If You're Happy (Clap Trap)
```javascript
// If You're Happy
setcps(1.4)
const melody = note(cat(
  "c4@1 c4@1 f4@1 f4@1 f4@1 f4@1 f4@2",
  "c4@1 c4@1 g4@1 g4@1 g4@1 g4@1 g4@2"
))
  .s("supersaw")

const clap = s("cp*2")

stack(
  melody,
  clap,
  s("bd(3,8)")
)
```

### 12. Humpty Dumpty (Wobble Bass)
```javascript
// Humpty Dumpty
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 d4@1 d4@1 e4@2 c4@2",
  "e4@1 e4@1 f4@1 f4@1 g4@2 e4@2"
))
  .s("sawtooth")

stack(
  melody,
  s("bd sd")
)
```

### 13. Hickory Dickory Dock (Clockwork)
```javascript
// Hickory Dickory Dock
setcps(1.2)
const melody = note(cat(
  "a3@1 b3@1 c4@2 a3@2",
  "e4@1 c4@1 a3@2"
))
  .s("supermandolin")

const tick = s("rm")

stack(
  melody,
  tick,
  note("a2")
)
```

### 14. Hot Cross Buns (Drone)
```javascript
// Hot Cross Buns
setcps(0.8)
const melody = note(cat(
  "e4@1 d4@1 c4@2",
  "e4@1 d4@1 c4@2",
  "c4@0.5 c4@0.5 c4@0.5 c4@0.5 d4@0.5 d4@0.5 d4@0.5 d4@0.5"
))
  .s("supermandolin")

stack(
  melody,
  s("tom*4")
)
```

### 15. Jack and Jill (Up & Down)
```javascript
// Jack and Jill
setcps(1.2)
const melody = note(cat(
  "c4@1 d4@1 e4@1 c4@1",
  "e4@1 f4@1 g4@2"
))
  .s("triangle")

const harp = note("c3 g3")
  .arp("up")
  .s("supermandolin")

stack(
  melody,
  harp,
  s("bd sd")
)
```

### 16. Little Bo Peep (Lost & Found)
```javascript
// Little Bo Peep
setcps(1.2)
const melody = note(cat(
  "c4@1 d4@1 e4@2 c4@2",
  "d4@1 e4@1 f4@2 d4@2"
))
  .s("vowel")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 17. Muffin Man (Baker's Beat)
```javascript
// Muffin Man
setcps(1.3)
const melody = note(cat(
  "g3@1 c4@1 c4@2 d4@1 e4@1 c4@2",
  "a3@1 g3@1 g3@2"
))
  .s("square")

const chords = note("c3 g3")
  .chord("major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 18. Pop Goes the Weasel (Surprise!)
```javascript
// Pop Goes the Weasel
setcps(1.2)
const melody = note(cat(
  "c4@0.5 c4@0.5 d4@0.5 d4@0.5 e4@0.5 g4@0.5 c4@2",
  "c4@0.5 c4@0.5 d4@0.5 d4@0.5 e4@2 c4@1"
))
  .s("triangle")

const kick = s("bd")
  .slow(8)

stack(
  melody,
  kick,
  s("hh*8")
)
```

### 19. Ring Around the Rosie (Spooky)
```javascript
// Ring Around the Rosie
setcps(1)
const melody = note(cat(
  "g4@1 g4@1 e4@1 a4@1 g4@1 e4@2",
  "g4@1 g4@1 e4@1 a4@1 g4@1 e4@2"
))
  .s("superpiano")

stack(
  melody,
  note("e2")
)
```

### 20. Rock-a-bye Baby (Lullaby)
```javascript
// Rock-a-bye Baby
setcps(0.8)
const melody = note(cat(
  "e4@1.5 g4@0.5 a4@2",
  "e4@1.5 g4@0.5 a4@2"
))
  .s("sine")

const pad = note("c3 g3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad,
  s("sine")
)
```

### 21. This Old Man (March)
```javascript
// This Old Man
setcps(1.2)
const melody = note(cat(
  "g4@1 e4@1 g4@2",
  "g4@1 e4@1 g4@2",
  "a4@1 g4@1 f4@1 e4@1 d4@1 e4@1 f4@1 g4@1"
))
  .s("sawtooth").lpf(2000)

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 22. Three Blind Mice (Chase)
```javascript
// Three Blind Mice
setcps(1.4)
const melody = note(cat(
  "e4@1 d4@1 c4@2",
  "e4@1 d4@1 c4@2",
  "g4@0.5 f4@0.5 f4@0.5 e4@0.5 c4@2"
))
  .s("sawtooth").lpf(3000)

stack(
  melody,
  s("hh*16")
)
```

### 23. Farmer in the Dell (Pastoral)
```javascript
// Farmer in the Dell
setcps(1.2)
const melody = note(cat(
  "g3@1 c4@1 c4@1 c4@1",
  "c4@1 d4@1 e4@1 c4@1"
))
  .s("supermandolin")

const flute = s("triangle")

stack(
  melody,
  flute,
  note("c2 g2")
)
```

### 24. Bingo (Spelling)
```javascript
// Bingo
setcps(1.3)
const melody = note(cat(
  "g4@1 c4@1 c4@1 g4@1 g4@1 a4@1 a4@1",
  "g4@1 g4@1 f4@1 f4@1 e4@1 e4@1 d4@1 d4@1 c4@2"
))
  .s("vowel")

const clap = s("clap*5")

stack(
  melody,
  clap,
  s("bd sd")
)
```

### 25. Head, Shoulders, Knees (Exercise)
```javascript
// Head, Shoulders, Knees
setcps(1.4)
const melody = note(cat(
  "c4@1 c4@1 e4@1 e4@1 g4@1 g4@1 g4@2",
  "f4@1 f4@1 d4@1 d4@1 b3@1 b3@1 b3@2"
))
  .s("sawtooth")

const kick = s("bd*4")

stack(
  melody,
  kick,
  s("hh*8")
)
```

---

## Category 2: Folk & Traditional (Simple)

### 26. Amazing Grace (Gospel Organ)
```javascript
// Amazing Grace - Gospel
setcps(0.6)
const melody = note(cat(
  "d4@1 g4@2 b4@0.5 a4@0.5 g4@2 e4@1 d4@2",
  "d4@1 g4@2 b4@0.5 a4@0.5 g4@2 b4@1 d5@3"
))
  .s("superpwm")

const chords = note("g2 c3 g3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)

stack(
  melody,
  chords,
  s("vowel")
)
```

### 27. Auld Lang Syne (Synthwave)
```javascript
// Auld Lang Syne
setcps(1)
const melody = note(cat(
  "c4@1 f4@1.5 f4@0.5 f4@1 a4@1 g4@1.5 f4@0.5 g4@1 a4@1",
  "f4@1.5 f4@0.5 a4@1 c5@1 d5@2"
))
  .s("supersaw")

const drums = s("bd*4 sd*2")

stack(
  melody,
  drums,
  note("f1 c2")
)
```

### 28. Danny Boy (Ethereal)
```javascript
// Danny Boy
setcps(0.8)
const melody = note(cat(
  "b3@0.5 c4@0.5 d4@1 b3@1.5 g3@0.5 g3@1 b3@1",
  "c4@1 d4@1 e4@1 c4@1"
))
  .s("triangle")

const strings = note("g2 c3")
  .s("supersaw").attack(0.1).release(0.8)

stack(
  melody,
  strings,
  s("noise")
)
```

### 29. Greensleeves (Renaissance)
```javascript
// Greensleeves
setcps(1.2)
const melody = note(cat(
  "a3@1 c4@2 d4@1 e4@1.5 f4@0.5 e4@1",
  "d4@2 b3@1 g3@1.5 a3@0.5 b3@1"
))
  .s("supermandolin")

const bass = note("a2 g2")
  .s("supermandolin")

stack(
  melody,
  bass,
  s("tambourine*4")
)
```

### 30. Scarborough Fair (Folk Guitar)
```javascript
// Scarborough Fair
setcps(1)
const melody = note(cat(
  "d4@2 d4@2 a4@2 a4@1 e4@1",
  "f4@1.5 e4@0.5 d4@2"
))
  .s("supermandolin")

const bass = note("d2 a2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 31. Yankee Doodle (Marching Band)
```javascript
// Yankee Doodle
setcps(1.2)
const melody = note(cat(
  "c4@1 c4@1 d4@1 e4@1 c4@1 e4@1 d4@2",
  "c4@1 c4@1 d4@1 e4@1 c4@1 b3@1 g3@2"
))
  .s("sine")

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 32. Oh! Susanna (Bluegrass)
```javascript
// Oh! Susanna
setcps(1.3)
const melody = note(cat(
  "c4@0.5 d4@0.5 e4@1 g4@1 g4@1 a4@1 g4@1 e4@1 c4@1",
  "d4@1 e4@1 e4@1 d4@1 c4@1 d4@2"
))
  .s("supermandolin")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("supersaw")
)
```

### 33. Camptown Races (Ragtime)
```javascript
// Camptown Races
setcps(1.2)
const melody = note(cat(
  "g4@1 g4@1 e4@1 g4@1 a4@1 g4@1 e4@2",
  "e4@1 d4@1 d4@2 e4@1 d4@1 d4@2"
))
  .s("superpiano")

const tuba = note("c2 g2")
  .s("supersquare").lpf(500)

stack(
  melody,
  tuba,
  s("rm")
)
```

### 34. Home on the Range (Cowboy)
```javascript
// Home on the Range
setcps(0.9)
const melody = note(cat(
  "d4@1 d4@1 g4@1 g4@1 a4@1 b4@1 g4@1",
  "a4@1 b4@1 g4@1"
))
  .s("harmonica")

stack(
  melody,
  s("crickets")
)
```

### 35. She'll Be Coming 'Round the Mountain
```javascript
// She'll Be Coming 'Round the Mountain
setcps(1.3)
const melody = note(cat(
  "c4@1 d4@1 e4@1 g4@1 g4@1 g4@3",
  "a4@1 g4@1 e4@1 c4@1"
))
  .s("supersaw")

stack(
  melody,
  s("stomp clap")
)
```

### 36. Swing Low, Sweet Chariot (Soul)
```javascript
// Swing Low, Sweet Chariot
setcps(0.9)
const melody = note(cat(
  "e4@2 g4@2 g4@4",
  "g4@1 e4@1 d4@1 c4@1 d4@1 e4@1 g4@2"
))
  .s("superpiano").lpf(1000)

const bass = note("c2 f2")
  .s("bass")

stack(
  melody,
  bass,
  s("snap")
)
```

### 37. When the Saints (New Orleans)
```javascript
// When the Saints
setcps(1.3)
const melody = note(cat(
  "c4@1 e4@1 f4@1 g4@4",
  "c4@1 e4@1 f4@1 g4@4"
))
  .s("sawtooth").lpf(2500)

const tuba = note("c2 g2")
  .s("supersquare").lpf(500)

stack(
  melody,
  tuba,
  s("sd*4")
)
```

### 38. My Bonnie (Waltz)
```javascript
// My Bonnie
setcps(0.9)
const melody = note(cat(
  "g3@1 e4@1 d4@1 c4@1 d4@1 c4@1 a3@2",
  "a3@1 g3@1 e3@1 g3@2"
))
  .s("accordion")

const drums = s("bd hh hh")

stack(
  melody,
  drums,
  note("c2")
)
```

### 39. Clementine (Miner's Song)
```javascript
// Clementine
setcps(1.1)
const melody = note(cat(
  "g3@1.5 g3@0.5 g3@1 c4@2 c4@1",
  "c4@1 e4@1 c4@1 g3@2"
))
  .s("harmonica")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("cp")
)
```

### 40. Railroad (Train Beat)
```javascript
// Railroad
setcps(1.4)
const melody = note(cat(
  "c4@2 c4@2 c4@2 d4@1 e4@3",
  "e4@2 d4@2 e4@2 f4@1 g4@3"
))
  .s("supermandolin")

const train = s("snare*8")

stack(
  melody,
  train,
  s("sine")
)
```

### 41. Red River Valley (Country)
```javascript
// Red River Valley
setcps(1)
const melody = note(cat(
  "d4@1 g4@1 b4@1 b4@1 b4@1 a4@1 g4@1 a4@1",
  "b4@2 a4@2 g4@4"
))
  .s("supermandolin")

stack(
  melody,
  s("hh")
)
```

### 42. House of the Rising Sun (Arpeggio)
```javascript
// House of the Rising Sun
setcps(1)
const melody = note(cat(
  "a2@1 c3@1 d3@1 f3@2 a3@1 e3@2",
  "a2@1 e3@2"
))
  .s("supermandolin")

const bass = note("a1 c2 d2 f2")
  .s("bass")

stack(
  melody,
  bass,
  s("superpwm")
)
```

### 43. Waltzing Matilda (Outback)
```javascript
// Waltzing Matilda
setcps(1.2)
const melody = note(cat(
  "c4@1.5 e4@0.5 g4@1 g4@2 a4@1 b4@1 a4@1 g4@2",
  "g4@1 e4@1 c4@1"
))
  .s("triangle")

const didge = s("sawtooth").lpf(300)

stack(
  melody,
  didge,
  s("sticks")
)
```

### 44. Bella Ciao (Resistance)
```javascript
// Bella Ciao
setcps(1.3)
const melody = note(cat(
  "e4@1 a4@1 b4@1 c5@1 a4@2",
  "e4@1 a4@1 b4@1 c5@1 a4@2",
  "e4@1 a4@1 b4@1 c5@1 b4@1 a4@1 c5@1"
))
  .s("accordion")

const kick = s("bd*2")

stack(
  melody,
  kick,
  s("cp")
)
```

### 45. Kalinka (Accelerating)
```javascript
// Kalinka
setcps(1.2)
const melody = note(cat(
  "e4@1.5 c4@0.5 b3@1 a3@1 e4@1.5 c4@0.5 b3@1 a3@1",
  "a3@1 b3@1 c4@1 d4@1 e4@2"
))
  .s("supermandolin")

const kick = s("bd*2")

stack(
  melody,
  kick,
  s("glitch")
)
```

### 46. Tetris Theme (8-Bit)
```javascript
// Tetris Theme
setcps(1.4)
const melody = note(cat(
  "e5@2 b4@1 c5@1 d5@2 c5@1 b4@1 a4@2 a4@1 c5@1 e5@2 d5@1 c5@1",
  "b4@3 c5@1 d5@2 e5@2"
))
  .s("square")

stack(
  melody,
  s("noise*8")
)
```

### 47. La Bamba (Latin)
```javascript
// La Bamba
setcps(1.4)
const melody = note(cat(
  "c4@0.5 d4@0.5 e4@1 f4@0.5 g4@3",
  "c4@0.5 d4@0.5 e4@1 f4@0.5 g4@3"
))
  .s("supermandolin")

const congas = s("conga*4")

stack(
  melody,
  congas,
  s("cp")
)
```

### 48. Guantanamera (Cuban)
```javascript
// Guantanamera
setcps(1.1)
const melody = note(cat(
  "g3@2 a3@2 b3@3",
  "b3@0.5 a3@0.5 b3@2 a3@2 g3@2"
))
  .s("superpiano")

const bongo = s("bongo*4")

stack(
  melody,
  bongo,
  s("guiro")
)
```

### 49. Cielito Lindo (Mariachi)
```javascript
// Cielito Lindo
setcps(1.2)
const melody = note(cat(
  "c4@1 c4@1 a3@1 b3@1 g3@2 c4@1",
  "c4@1 c4@1 a3@1 b3@1 g3@2"
))
  .s("sawtooth").lpf(2500)

stack(
  melody,
  s("hh")
)
```

### 50. Aloha Oe (Hawaiian)
```javascript
// Aloha Oe
setcps(0.8)
const melody = note(cat(
  "g3@1 c4@1 e4@1 g4@2.5 a4@0.5",
  "a4@1 g4@3"
))
  .s("supermandolin")

stack(
  melody,
  s("noise")
)
```

---

## Category 3: Classical Themes (Simple)

### 51. Ode to Joy (Orchestral)
```javascript
// Ode to Joy
setcps(1)
const melody = note(cat(
  "e4@1 e4@1 f4@1 g4@1 g4@1 f4@1 e4@1 d4@1",
  "c4@1 c4@1 d4@1 e4@1 e4@1.5 d4@0.5 d4@2"
))
  .s("supersaw").attack(0.1).release(0.8)

const bass = note("c2 g2")
  .s("supersaw").lpf(1000).attack(0.1)

stack(
  melody,
  bass,
  s("bd")
)
```

### 52. Fur Elise (Music Box)
```javascript
// Fur Elise
setcps(1)
const melody = note(cat(
  "e5@0.5 d#5@0.5 e5@0.5 d#5@0.5 e5@0.5 b4@0.5 d5@0.5 c5@0.5",
  "a4@2"
))
  .s("sine")

const piano = note("a2 e3 a3")
  .s("superpiano")

stack(
  melody,
  piano,
  s("noise")
)
```

### 53. Symphony No. 5 (Cinematic)
```javascript
// Symphony No. 5
setcps(1.2)
const melody = note(cat(
  "g4@0.5 g4@0.5 g4@0.5 eb4@4",
  "~ f4@0.5 f4@0.5 f4@0.5 d4@4"
))
  .s("sawtooth").lpf(2000)

const bass = note("g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd")
)
```

### 54. Canon in D (Pachelbel)
```javascript
// Canon in D
setcps(0.8)
const melody = note(cat(
  "f#5@2 e5@2 d5@2 c#5@2",
  "b4@2 a4@2 b4@2 c#5@2"
))
  .s("supersaw").attack(0.1)

const cello = note("d3 a2 b2 f#2 g2 d2 g2 a2")
  .s("supersaw").lpf(1000).attack(0.1)

stack(
  melody,
  cello,
  s("supermandolin")
)
```

### 55. Eine Kleine Nachtmusik (String Quartet)
```javascript
// Eine Kleine Nachtmusik
setcps(1.3)
const melody = note(cat(
  "g4@1.5 d4@0.5 g4@1.5 d4@0.5 g4@0.5 d4@0.5 g4@0.5 b4@0.5 d5@2",
  "c5@1.5 a4@0.5 c5@1.5 a4@0.5"
))
  .s("supersaw").attack(0.1)
  .legato(0.5)

const viola = note("g3 d3")
  .s("supersaw").lpf(2000).attack(0.1)

stack(
  melody,
  viola,
  note("g2")
)
```

### 56. Rondo Alla Turca (Mechanical)
```javascript
// Rondo Alla Turca
setcps(1.5)
const melody = note(cat(
  "b4@0.5 a4@0.5 g#4@0.5 a4@0.5 c5@2",
  "d5@0.5 c5@0.5 b4@0.5 c5@0.5 e5@2"
))
  .s("superpiano")

const bass = note("a2 e3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*4")
)
```

### 57. Morning Mood (Sunrise)
```javascript
// Morning Mood
setcps(1)
const melody = note(cat(
  "g4@1 e4@1 d4@1 c4@1 d4@1 e4@1 g4@1 e4@1",
  "d4@1 c4@1 d4@1 e4@1 g4@1 e4@1 g4@1 a4@1"
))
  .s("triangle")

const strings = note("c3")
  .s("supersaw").attack(0.1).release(0.8)

stack(
  melody,
  strings,
  s("triangle")
)
```

### 58. Mountain King (Building Up)
```javascript
// Mountain King
setcps(1.1)
const melody = note(cat(
  "b2@0.5 c#3@0.5 d3@0.5 e3@0.5 f#3@0.5 d3@0.5 f#3@1"
))
  .s("sawtooth").lpf(1000)
  .legato(0.5)

const tuba = note("b1")
  .s("supersquare").lpf(500)

stack(
  melody,
  tuba,
  s("supermandolin")
)
```

### 59. Spring (Vivaldi)
```javascript
// Spring
setcps(1.2)
const melody = note(cat(
  "e5@2 g#5@2 g#5@2 g#5@0.5 f#5@0.5 e5@0.5 b4@0.5",
  "e5@1 b4@1 g#4@1 b4@1 e5@2"
))
  .s("supersaw").attack(0.1)

const harpsi = note("e3")
  .s("supersaw")

stack(
  melody,
  harpsi,
  s("triangle")
)
```

### 60. Blue Danube (Waltz)
```javascript
// Blue Danube
setcps(1.2)
const melody = note(cat(
  "c4@1 c4@1 e4@1 g4@1 g4@2",
  "~ ~ g4@2",
  "e5@1 e5@2"
))
  .s("supersaw").attack(0.1).release(0.8)

const drums = s("bd hh hh")

stack(
  melody,
  drums,
  note("c3")
)
```

### 61. Ride of the Valkyries (Epic)
```javascript
// Ride of the Valkyries
setcps(1.4)
const melody = note(cat(
  "b3@1.5 e4@0.5 g4@1.5 b4@0.5 g4@2"
))
  .s("sawtooth").lpf(2000)

const bass = note("e2 b2")
  .s("sawtooth")

stack(
  melody,
  bass,
  s("snare")
)
```

### 62. Swan Lake (Tragic)
```javascript
// Swan Lake
setcps(1)
const melody = note(cat(
  "f#4@1 b4@1 c#5@1 d5@1 e5@1 f#5@3"
))
  .s("sawtooth").lpf(3000)

const harp = note("b2")
  .s("supermandolin")

stack(
  melody,
  harp,
  s("supersaw")
)
```

### 63. Nutcracker March (Toy Soldiers)
```javascript
// Nutcracker March
setcps(1.3)
const melody = note(cat(
  "g4@1 e4@1 e4@1 f4@1 d4@1 d4@1",
  "c4@1 d4@1 c4@1 b3@1 c4@2"
))
  .s("sawtooth").lpf(2500)

const snare = s("snare*4")

stack(
  melody,
  snare,
  note("c3")
)
```

### 64. William Tell (Galop)
```javascript
// William Tell
setcps(1.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 e4@0.5 f4@0.5 g4@2",
  "g4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@2"
))
  .s("sawtooth").lpf(2500)

const drums = s("bd*2 sd*2")

stack(
  melody,
  drums,
  note("e2")
)
```

### 65. Habanera (Tango)
```javascript
// Habanera
setcps(1)
const melody = note(cat(
  "d4@1.5 eb4@0.5 f4@1.5 f#4@0.5 g4@4"
))
  .s("supersaw").attack(0.1)

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
setcps(1.2)
const melody = note(cat(
  "f4@1 g4@1 a4@1 f4@1 g4@1 a4@1",
  "bb4@1 a4@1 g4@1 f4@1 e4@1 d4@1"
))
  .s("sawtooth").lpf(2000)

stack(
  melody,
  note("f2")
)
```

### 67. Bolero (Repetitive)
```javascript
// Bolero
setcps(1)
const melody = note(cat(
  "c4@3 b3@0.5 c4@0.5 d4@0.5 c4@0.5 b3@0.5 a3@0.5",
  "c4@1 c4@1 a3@2"
))
  .s("triangle")

const snare = s("snare")
  .struct("x x x/3 x/3 x/3 x x x/3 x/3 x/3")

stack(
  melody,
  snare,
  note("c2")
)
```

### 68. Clair de Lune (Dreamy)
```javascript
// Clair de Lune
setcps(0.6)
const melody = note(cat(
  "f4@2 g#4@2 f4@2 eb4@2"
))
  .s("superpiano")

const pad = note("f3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad,
  s("noise")
)
```

### 69. Gymnopédie No.1 (Minimal)
```javascript
// Gymnopédie No.1
setcps(0.8)
const melody = note(cat(
  "f#4@2 a4@2 g4@2 f#4@2 c#4@2 b3@2 c#4@2 d4@2"
))
  .s("superpiano").lpf(1000)

const piano = note("d3 a3")
  .s("superpiano")

stack(
  melody,
  piano,
  s("noise")
)
```

### 70. Ave Maria (Choral)
```javascript
// Ave Maria
setcps(0.8)
const melody = note(cat(
  "g4@2 a4@4 c5@1.5 a4@0.5",
  "g4@2 e4@2"
))
  .s("vowel")

const organ = note("c3 g3")
  .s("superpwm")

stack(
  melody,
  organ,
  note("c2")
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

const harp = note("c3")
  .s("supermandolin")

stack(
  melody,
  harp,
  s("noise")
)
```

### 72. Surprise Symphony (Dynamic)
```javascript
// Surprise Symphony
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 e4@1 e4@1 g4@1 g4@1 e4@2",
  "f4@1 f4@1 d4@1 d4@1 b3@1 b3@1 g3@2"
))
  .s("supersaw").attack(0.1).release(0.8)

stack(
  melody,
  s("bd").slow(8).gain(1.5)
)
```

### 73. New World Symphony (Nostalgic)
```javascript
// New World Symphony
setcps(0.6)
const melody = note(cat(
  "e4@2 g4@1 g4@3 e4@1 d4@1 c4@2 d4@1 e4@1 d4@4"
))
  .s("sawtooth")

const strings = note("c3 g3")
  .s("supersaw").attack(0.1).release(0.8)

stack(
  melody,
  strings,
  s("bd")
)
```

### 74. The Entertainer (Ragtime Piano)
```javascript
// The Entertainer
setcps(1.4)
const melody = note(cat(
  "d5@0.5 e5@0.5 c5@0.5 a4@1 b4@0.5 g4@0.5",
  "d4@0.5 e4@0.5 c4@0.5 a3@1 b3@0.5 g3@1.5"
))
  .s("superpiano")

const bass = note("c3")
  .s("superpiano")

stack(
  melody,
  bass,
  s("hh")
)
```

### 75. Maple Leaf Rag (Saloon)
```javascript
// Maple Leaf Rag
setcps(1.4)
const melody = note(cat(
  "eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@1",
  "eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@2"
))
  .s("superpiano")

const bass = note("eb2")
  .s("superpiano")

stack(
  melody,
  bass,
  s("foot")
)
```

---

## Category 4: Holiday & Seasonal (Simple)

### 76. Jingle Bells (Sleigh Ride)
```javascript
// Jingle Bells
setcps(1.2)
const melody = note(cat(
  "e4@1 e4@1 e4@2",
  "e4@1 e4@1 e4@2",
  "e4@1 g4@1 c4@1.5 d4@0.5 e4@4"
))
  .s("superpiano")

const sleigh = s("hh")

stack(
  melody,
  sleigh,
  note("c2")
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

const pad = note("c3 g3 c4")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad,
  s("noise")
)
```

### 78. Deck the Halls (Festive)
```javascript
// Deck the Halls
setcps(1.2)
const melody = note(cat(
  "c5@1.5 b4@0.5 a4@1 g4@1 f4@1 e4@1 d4@1 c4@1",
  "d4@0.5 e4@0.5 f4@1 d4@1 e4@1.5 d4@0.5 c4@2"
))
  .s("sawtooth").lpf(2000)

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 79. Joy to the World (Majestic)
```javascript
// Joy to the World
setcps(0.9)
const melody = note(cat(
  "c5@2 b4@1.5 a4@0.5 g4@3",
  "f4@1 e4@2 d4@2 c4@2"
))
  .s("superpwm")

const bass = note("c2")
  .s("superpwm")

stack(
  melody,
  bass,
  s("sine")
)
```

### 80. We Wish You a Merry Christmas (Carolers)
```javascript
// We Wish You a Merry Christmas
setcps(1.2)
const melody = note(cat(
  "d4@1 g4@1 g4@0.5 a4@0.5 g4@1 f#4@1 e4@1 e4@1",
  "e4@1 a4@1 a4@0.5 b4@0.5 a4@1 g4@1 f#4@1 d4@1"
))
  .s("vowel")

const cello = note("g2")
  .s("supersaw").lpf(1000).attack(0.1)

stack(
  melody,
  cello,
  s("tambourine")
)
```

### 81. The First Noel (Hymn)
```javascript
// The First Noel
setcps(1)
const melody = note(cat(
  "f#4@1.5 e4@0.5 d4@1 e4@1 f#4@2 g4@2",
  "a4@2 b4@2 c#5@4"
))
  .s("superpwm")

const bass = note("d2")
  .s("bass")

stack(
  melody,
  bass,
  s("vowel")
)
```

### 82. Hark! The Herald Angels (Trumpet)
```javascript
// Hark! The Herald Angels
setcps(1.1)
const melody = note(cat(
  "c4@1 f4@1 f4@1.5 g4@0.5 f4@1 e4@1 d4@2",
  "d4@1 d4@1 d4@1 c4@1 c4@1 bb3@1 a3@2"
))
  .s("sawtooth").lpf(2500)

const snare = s("snare*4")

stack(
  melody,
  snare,
  note("f2")
)
```

### 83. O Christmas Tree (Jazz Waltz)
```javascript
// O Christmas Tree
setcps(1)
const melody = note(cat(
  "g3@1 c4@1.5 c4@0.5 c4@2",
  "d4@1 e4@1.5 e4@0.5 e4@2"
))
  .s("sine")

const ride = s("oh*3")

stack(
  melody,
  ride,
  note("c2")
)
```

### 84. Rudolph (Red Nose)
```javascript
// Rudolph
setcps(1.2)
const melody = note(cat(
  "g4@0.5 a4@0.5 g4@0.5 e4@1 c5@1 a4@1 g4@3"
))
  .s("sawtooth")

const drums = s("bd sd")

stack(
  melody,
  drums,
  s("hh")
)
```

### 85. 12 Days (Counting)
```javascript
// 12 Days
setcps(1.2)
const melody = note(cat(
  "c4@1 c4@1 c4@2 d4@1 e4@1 f4@1 g4@1 f4@1 e4@1 d4@1 c4@4"
))
  .s("superpiano")

const bass = note("c2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 86. Frosty (Snowy)
```javascript
// Frosty
setcps(1.2)
const melody = note(cat(
  "g4@1.5 e4@0.5 f4@1 g4@1 c5@2 b4@1 c5@1",
  "d5@1 c5@1 b4@1 a4@1 g4@4"
))
  .s("triangle")

const shaker = s("hh").hpf(5000)

stack(
  melody,
  shaker,
  note("c2")
)
```

### 87. Little Drummer Boy (Percussion)
```javascript
// Little Drummer Boy
setcps(1)
const melody = note(cat(
  "c4@1 d4@1 e4@1 e4@1 e4@2",
  "f4@1 e4@1 f4@1 e4@2"
))
  .s("vowel")

const snare = s("snare*4")

stack(
  melody,
  snare,
  note("c2")
)
```

### 88. O Holy Night (Night Sky)
```javascript
// O Holy Night
setcps(0.7)
const melody = note(cat(
  "e4@3 e4@1 e4@2 g4@2",
  "g4@3 a4@0.5 a4@0.5 f4@2 a4@2"
))
  .s("sine")

const pad = note("c3 g3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad,
  s("glitch")
)
```

### 89. God Rest Ye Merry (Medieval)
```javascript
// God Rest Ye Merry
setcps(1.2)
const melody = note(cat(
  "d4@1 d4@1 a4@1 a4@1 g4@1 f4@1 e4@1 d4@1",
  "e4@1 f4@1 g4@1 a4@3"
))
  .s("supermandolin")

stack(
  melody,
  s("sine")
)
```

### 90. Good King Wenceslas (Royal)
```javascript
// Good King Wenceslas
setcps(1.2)
const melody = note(cat(
  "f4@1 f4@1 f4@1 g4@1 f4@1 f4@1 c4@2",
  "d4@1 e4@1 f4@1 d4@1 e4@1 f4@1 g4@2"
))
  .s("sawtooth").lpf(2000)

const timp = s("bd").gain(1.2).shape(0.5)

stack(
  melody,
  timp,
  note("f2")
)
```

---

## Category 5: More Famous Tunes (Simple)

### 91. Star Spangled Banner (Anthem)
```javascript
// Star Spangled Banner
setcps(0.8)
const melody = note(cat(
  "g3@1.5 e3@0.5 c3@2 e3@2 g3@2 c4@4",
  "e4@1.5 d4@0.5 c4@2 e3@2 f#3@2 g3@4"
))
  .s("sawtooth").lpf(2500)

const snare = s("snare*8")

stack(
  melody,
  snare,
  note("c2")
)
```

### 92. God Save the King (Regal)
```javascript
// God Save the King
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 d4@1 b3@1.5 c4@0.5 d4@1",
  "e4@1 e4@1 f4@1 e4@1 d4@1 c4@1"
))
  .s("superpiano")

const cello = note("c2")
  .s("supersaw").lpf(1000).attack(0.1)

stack(
  melody,
  cello,
  s("oh")
)
```

### 93. La Marseillaise (Revolutionary)
```javascript
// La Marseillaise
setcps(1.2)
const melody = note(cat(
  "d4@1 d4@1 g4@2 g4@2 a4@2 a4@2",
  "d5@1.5 b4@0.5 g4@1 d4@1 b3@2 g3@2"
))
  .s("sawtooth").lpf(2000)

const snare = s("sd*4")

stack(
  melody,
  snare,
  note("g2")
)
```

### 94. Happy Farmer (Rural)
```javascript
// Happy Farmer
setcps(1.2)
const melody = note(cat(
  "c4@0.5 f4@1.5 a4@0.5 c5@1.5 a4@0.5 f4@2",
  "c4@0.5 f4@1.5 a4@0.5 c5@1.5 a4@0.5 f4@2"
))
  .s("superpiano")

const bass = note("f2")
  .s("bass")

stack(
  melody,
  bass,
  s("cp")
)
```

### 95. Minuet in G (Baroque)
```javascript
// Minuet in G
setcps(1)
const melody = note(cat(
  "d5@1 g4@0.5 a4@0.5 b4@0.5 c5@0.5 d5@1 g4@1 g4@1",
  "e5@1 c5@0.5 d5@0.5 e5@0.5 f#5@0.5 g5@1 g4@1 g4@1"
))
  .s("supersaw")

const cello = note("g2")
  .s("supersaw").lpf(1000).attack(0.1)

stack(
  melody,
  cello,
  s("hh")
)
```

### 96. Prelude in C (Arpeggiator)
```javascript
// Prelude in C
setcps(1)
const melody = note(cat(
  "c4@0.5 e4@0.5 g4@0.5 c5@0.5 e5@0.5 g4@0.5 c5@0.5 e5@0.5",
  "c4@0.5 e4@0.5 g4@0.5 c5@0.5 e5@0.5 g4@0.5 c5@0.5 e5@0.5"
))
  .s("superpiano")

const bass = note("c2")
  .s("sine")

stack(
  melody,
  bass,
  s("noise")
)
```

### 97. Jesu, Joy of Man's Desiring (Flowing)
```javascript
// Jesu, Joy of Man's Desiring
setcps(0.9)
const melody = note(cat(
  "g4@0.5 a4@0.5 b4@0.5 d5@0.5 c5@0.5 c5@0.5 e5@0.5 d5@0.5 d5@0.5 g5@0.5 f#5@0.5 g5@0.5"
))
  .s("superpwm")

const strings = note("g3")
  .s("supersaw").attack(0.1).release(0.8)

stack(
  melody,
  strings,
  s("tri")
)
```

### 98. Chopsticks (Duet)
```javascript
// Chopsticks
setcps(1.4)
const high = note(cat(
  "f4@0.5 g4@0.5 f4@0.5 g4@0.5 f4@0.5 g4@0.5",
  "e4@0.5 g4@0.5 e4@0.5 g4@0.5 e4@0.5 g4@0.5"
))
  .s("superpiano")

const drums = s("bd sd")

stack(
  high,
  drums,
  note("c3")
)
```

### 99. Heart and Soul (Doo Wop)
```javascript
// Heart and Soul
setcps(1.2)
const melody = note(cat(
  "c4@1.5 c4@0.5 c4@1 c4@0.5 b3@0.5 a3@1.5 b3@0.5 c4@1 d4@2"
))
  .s("superpiano")

const chords = note("c4 a3 f3 g3")
  .s("superpiano")

stack(
  melody,
  chords,
  s("hh")
)
```

### 100. Happy Birthday (Future Bass)
```javascript
// Happy Birthday - Future Bass
setcps(1.4)
// 1. MELODY
const melody = note(cat(
  "g3@1.5 g3@0.5 a3@2 g3@2 c4@2 b3@4",
  "g3@1.5 g3@0.5 a3@2 g3@2 d4@2 c4@4"
))
  .s("supersaw")

// 2. CHORDS
const chords = note("c3 g3 c3 f3")
  .chord("major9")
  .s("supersaw").attack(0.5)

// 3. IMPROV (Arp)
stack(
  melody,
  chords,
  s("bd sd")
)
```

---

## Category 6: Bonus Folk & Spiritual (Simple)

### 101. Michael Row the Boat Ashore (Gospel)
```javascript
// Michael Row the Boat Ashore
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 e4@1 g4@1 g4@2 a4@2 g4@4",
  "e4@1 g4@1 g4@1 e4@1 d4@1 c4@1 c4@4"
))
  .s("superpiano")

const chords = note("c3 g3 c3 f3 c3 g3 c3")
  .chord("major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 102. When the Chariot Comes (Swing)
```javascript
// When the Chariot Comes
setcps(1.2)
const melody = note(cat(
  "g3@1 c4@1 e4@1 g4@1 g4@2 e4@2",
  "g4@1 e4@1 d4@1 c4@1 d4@4"
))
  .s("sawtooth").lpf(2000)

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*2")
)
```

### 103. Down by the Riverside (Upbeat)
```javascript
// Down by the Riverside
setcps(1.3)
const melody = note(cat(
  "g3@1 c4@1 c4@1 c4@1 e4@1 d4@1 c4@2",
  "e4@1 d4@1 c4@1 b3@1 a3@4"
))
  .s("supermandolin")

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 104. He's Got the Whole World (Hymn)
```javascript
// He's Got the Whole World
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 d4@1 e4@1 g4@2 e4@2",
  "d4@1 d4@1 b3@1 c4@1 d4@4"
))
  .s("vowel")

const organ = note("c3 g3")
  .s("superpwm")

stack(
  melody,
  organ,
  s("oh")
)
```

### 105. Kum Ba Yah (Campfire)
```javascript
// Kum Ba Yah
setcps(0.9)
const melody = note(cat(
  "c4@1 e4@1 g4@2 g4@2 g4@2",
  "c4@1 e4@1 g4@2 g4@2 g4@2",
  "c4@1 e4@1 g4@2 g4@2 f4@2",
  "e4@1 d4@1 c4@4"
))
  .s("harmonica")

const guitar = note("c3 f3 c3 g3")
  .s("supermandolin")

stack(
  melody,
  guitar,
  s("crickets")
)
```

### 106. Take Me Out to the Ball Game (Stadium)
```javascript
// Take Me Out to the Ball Game
setcps(1.2)
const melody = note(cat(
  "c4@1 c5@1 a4@1 g4@1 e4@1 g4@1",
  "d4@1 d5@1 b4@1 a4@1 f4@1 a4@1"
))
  .s("superpwm")

const organ = note("c3 g3")
  .s("superpwm")

stack(
  melody,
  organ,
  s("clap")
)
```

### 107. Simple Gifts (Shaker)
```javascript
// Simple Gifts
setcps(1)
const melody = note(cat(
  "c4@1 c4@1 f4@1 f4@1 g4@1 f4@1 g4@1 a4@1",
  "f4@2 a4@1 g4@1 f4@1 d4@1 c4@2"
))
  .s("triangle")

const drone = note("f2 c3")
  .s("sawtooth").lpf(500)

stack(
  melody,
  drone,
  s("hh")
)
```

### 108. Skip to My Lou (Country Dance)
```javascript
// Skip to My Lou
setcps(1.3)
const melody = note(cat(
  "e4@1 e4@1 c4@1 c4@1 e4@2",
  "d4@1 d4@1 b3@1 b3@1 d4@2",
  "e4@1 e4@1 c4@1 c4@1 e4@2",
  "d4@1 f4@1 e4@1 d4@1 c4@2"
))
  .s("supermandolin")

const banjo = note("c3 g3")
  .s("supermandolin")

stack(
  melody,
  banjo,
  s("stomp")
)
```

### 109. On Top of Old Smoky (Mountain)
```javascript
// On Top of Old Smoky
setcps(0.9)
const melody = note(cat(
  "c4@1 c4@1 e4@1 g4@1 c5@3",
  "a4@1 f4@1 a4@1 c5@1 g4@3"
))
  .s("harmonica")

const guitar = note("c3 f3 c3 g3")
  .s("supermandolin")

stack(
  melody,
  guitar,
  s("crickets")
)
```

### 110. Battle Hymn of the Republic (March)
```javascript
// Battle Hymn of the Republic
setcps(1.2)
const melody = note(cat(
  "g4@1 g4@1 f4@1 e4@1 g4@1 g4@1 c5@2",
  "a4@1 a4@1 g4@1 f4@1 a4@1 a4@1 d5@2",
  "g4@1 g4@1 f4@1 e4@1 g4@1 g4@1 c5@1 b4@1 a4@1",
  "g4@1 a4@1 b4@1 c5@4"
))
  .s("sawtooth").lpf(2000)

const snare = s("snare*4")

stack(
  melody,
  snare,
  note("c2 g2")
)
```
