# 100 Simple Famous Songs Vol. 2

This is the second volume of simple, recognizable Strudel arrangements. Like the first volume, these songs focus on clear melodies and basic chords, perfect for learning and hacking.

## How to Use
Copy the code block for the song you want to hear into the Strudel editor.

---

## Category 1: Party, Celebration & World (Simple)

### 1. Happy Birthday (Jazz Waltz)
```javascript
// Happy Birthday - Jazz Waltz
setcps(0.4)

// 1. Melody (Swung)
const melody = note(cat(
  "g3@1 g3@0.5 a3@1.5 g3@1.5 c4@1.5 b3@3",
  "g3@1 g3@0.5 a3@1.5 g3@1.5 d4@1.5 c4@3",
  "g3@1 g3@0.5 g4@1.5 e4@1.5 c4@1.5 b3@1.5 a3@1.5",
  "f4@1 f4@0.5 e4@1.5 c4@1.5 d4@1.5 c4@3"
)).slow(2.25)
  .s("supermandolin")

// 2. Jazz Chords
const chords = note("c3:dom7@3 g3:dom7@3 c3:dom7@3 f3:dom7@3")
  .s("superpiano")

stack(
  melody,
  chords,
  s("ride*3") // Waltz feel
)
```

### 2. For He's a Jolly Good Fellow
```javascript
// For He's a Jolly Good Fellow
setcps(0.6)
const melody = note(cat(
  "c4@1 e4@1 e4@1 e4@2 d4@1 e4@1 f4@1 d4@1",
  "d4@1 f4@1 f4@1 f4@2 e4@1 f4@1 g4@1 e4@1"
)).slow(2.25)
  .s("sawtooth").lpf(2000)

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 3. Wedding March (Wagner - Here Comes the Bride)
```javascript
// Wedding March (Wagner)
setcps(0.4)
const melody = note(cat(
  "g4@1.5 c4@0.5 c4@1.5 c4@0.5",
  "c4@3 g4@0.5 bb4@0.5",
  "a4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@0.5 c4@0.5 b3@0.5 a3@0.5",
  "g3@2"
))
  .s("superpwm")

const organ = note("c3 g3")
  .s("superpwm").lpf(1000)

stack(
  melody,
  organ
)
```

### 4. Wedding March (Mendelssohn)
```javascript
// Wedding March (Mendelssohn)
setcps(0.6)
const melody = note(cat(
  "c5@0.5 c5@0.5 c5@0.5 c5@2",
  "b4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@0.5 c4@0.5 b3@0.5",
  "c4@1 f4@1 a4@1 c5@1 f5@2"
))
  .s("supersaw").attack(0.1)

stack(
  melody,
  s("snare*4")
)
```

### 5. Pomp and Circumstance (Graduation)
```javascript
// Pomp and Circumstance
setcps(0.45)
const melody = note(cat(
  "g4@2 e4@1 g4@1 c5@2 e5@1 d5@1",
  "c5@0.5 b4@0.5 c5@1 d5@1 g4@1 c5@2 b4@2"
)).slow(2)
  .s("superpwm")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd")
)
```

### 6. Hail to the Chief
```javascript
// Hail to the Chief
setcps(0.6)
const melody = note(cat(
  "g4@1 e4@0.5 g4@0.5 c5@1 g4@1 e4@0.5 g4@0.5 c5@1 g4@1",
  "a4@1 f4@0.5 a4@0.5 c5@1 a4@1 g4@2"
)).slow(1.75)
  .s("sawtooth").lpf(2500)

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 7. Reveille (Bugle Call)
```javascript
// Reveille
setcps(0.6)
const melody = note(cat(
  "g3@0.5 c4@0.5 e4@0.5 c4@0.5 g3@1",
  "g3@0.5 c4@0.5 e4@0.5 c4@0.5 g3@1",
  "g3@0.5 c4@0.5 e4@0.5 c4@0.5 g3@0.5 c4@0.5 e4@0.5 c4@0.5",
  "g3@1 c4@2"
))
  .s("sawtooth").lpf(3000)

stack(
  melody
)
```

### 8. Taps (Bugle Call)
```javascript
// Taps
setcps(0.5)
const melody = note(cat(
  "g3@1 g3@0.5 c4@2",
  "g3@1 c4@0.5 e4@2",
  "g3@1 c4@0.5 e4@1 g3@0.5 c4@0.5 e4@2",
  "g3@1 c4@0.5 e4@2",
  "c4@1 g3@0.5 g3@2"
))
  .s("sawtooth").lpf(2000).attack(0.1)

stack(
  melody,
  s("noise").amp(0.05)
)
```

### 9. Charge! (Stadium)
```javascript
// Charge!
setcps(0.6)
const melody = note(cat(
  "g3@0.5 c4@0.5 e4@0.5 g4@0.75 e4@0.25 g4@2"
))
  .s("superpwm")

stack(
  melody,
  s("clap").slow(4).offset(0.75)
)
```

### 10. Shave and a Haircut
```javascript
// Shave and a Haircut
setcps(0.6)
const melody = note(cat(
  "c4@0.5 g3@0.25 g3@0.25 ab3@0.5 g3@1",
  "~ ~ b3@0.5 c4@0.5"
))
  .s("superpiano")

stack(
  melody,
  s("woodblock")
)
```

### 11. The Chicken Dance
```javascript
// The Chicken Dance
setcps(0.6)
const melody = note(cat(
  "c5@0.5 c5@0.5 a4@0.5 a4@0.5 c5@0.5 c5@0.5 a4@0.5 a4@0.5",
  "c5@0.5 c5@0.5 a4@0.5 a4@0.5 g4@2"
))
  .s("accordion")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 12. Hokey Pokey
```javascript
// Hokey Pokey
setcps(0.6)
const melody = note(cat(
  "g4@1 g4@0.5 g4@0.5 g4@1 a4@1",
  "f4@1 f4@0.5 f4@0.5 f4@1 g4@1",
  "e4@1 e4@1 d4@1 d4@1 c4@2"
))
  .s("sawtooth").lpf(2000)

stack(
  melody,
  s("bd*2")
)
```

### 13. Mexican Hat Dance
```javascript
// Mexican Hat Dance
setcps(0.6)
const melody = note(cat(
  "g4@0.5 f4@0.5 e4@0.5 d4@0.5 c4@0.5 c4@0.5 c4@1",
  "c5@0.5 b4@0.5 a4@0.5 g4@0.5 f4@0.5 f4@0.5 f4@1"
))
  .s("supermandolin")

const brass = note("c3 g3")
  .s("supersaw").lpf(1500)

stack(
  melody,
  brass,
  s("hh*4")
)
```

### 14. Hava Nagila
```javascript
// Hava Nagila
setcps(0.6)
const melody = note(cat(
  "e4@1.5 e4@0.5 g#4@0.5 f4@0.5 e4@1",
  "f4@1.5 f4@0.5 a4@0.5 g#4@0.5 f4@1",
  "g#4@1.5 g#4@0.5 b4@0.5 a4@0.5 g#4@0.5 f4@0.5",
  "e4@1 e4@1 e4@2"
))
  .s("accordion")

const bass = note("e2 b2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 15. La Cucaracha
```javascript
// La Cucaracha
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c4@0.5 c4@0.5 f4@1 a4@1",
  "c4@0.5 c4@0.5 c4@0.5 f4@1 a4@1",
  "f4@1 f4@0.5 e4@0.5 e4@0.5 d4@0.5 d4@0.5 c4@2"
))
  .s("sawtooth").lpf(2500)

stack(
  melody,
  s("bd sd")
)
```

### 16. Katyusha (Tetris B-Type)
```javascript
// Katyusha
setcps(0.6)
const melody = note(cat(
  "a4@1 b4@0.5 c5@0.5 a4@0.5 a4@0.5 c5@0.5 c5@0.5",
  "d5@1.5 a4@0.5 g4@1 f4@1",
  "e4@1 d4@0.5 e4@0.5 f4@1 g4@1",
  "a4@1.5 g4@0.5 f4@1 e4@1"
))
  .s("square")

const bass = note("a2 e3")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*4")
)
```

### 17. Funiculi Funicula
```javascript
// Funiculi Funicula
setcps(0.6)
const melody = note(cat(
  "c5@0.5 c5@0.5 c5@1 e4@1 g4@1",
  "c5@0.5 c5@0.5 c5@1 e4@1 g4@1",
  "d5@0.5 c5@0.5 b4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@0.5",
  "c4@1 g4@1 c5@2"
))
  .s("accordion")

stack(
  melody,
  s("bd sd")
)
```

### 18. Tarantella
```javascript
// Tarantella
setcps(0.6)
const melody = note(cat(
  "a4@0.5 a4@0.5 a4@0.5 a4@0.5 a4@0.5 a4@0.5",
  "d5@0.5 cis5@0.5 d5@0.5 e5@0.5 f5@0.5 e5@0.5",
  "d5@0.5 cis5@0.5 d5@0.5 e5@0.5 f5@1"
))
  .s("supermandolin")

stack(
  melody,
  s("tambourine*6")
)
```

### 19. Loch Lomond
```javascript
// Loch Lomond
setcps(0.45)
const melody = note(cat(
  "g3@1 c4@1.5 d4@0.5 e4@1 g4@1",
  "a4@1 g4@1 e4@1 c4@1",
  "d4@1 e4@1 f4@1 a4@1",
  "g4@2 c4@2"
))
  .s("superpwm")

const strings = note("c3 f3 g3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  strings
)
```

### 20. Scotland the Brave
```javascript
// Scotland the Brave
setcps(0.6)
const melody = note(cat(
  "c4@1 c4@0.5 d4@0.5 e4@1 c4@1",
  "g4@1 c5@1 g4@1 e4@1",
  "a4@1 a4@0.5 g4@0.5 f4@1 e4@1",
  "d4@1 d4@0.5 e4@0.5 f4@1 d4@1"
))
  .s("sawtooth").lpf(1500)

const drone = note("c2 g2")
  .s("sawtooth").lpf(500)

stack(
  melody,
  drone,
  s("snare*4")
)
```

---

## Category 2: More Nursery Rhymes & Folk (Simple)

### 21. The Ants Go Marching
```javascript
// The Ants Go Marching
setcps(0.6)
const melody = note(cat(
  "d4@1 a3@0.5 a3@0.5 d4@1 e4@1 f4@2 d4@2",
  "e4@1 c4@0.5 c4@0.5 e4@1 f4@1 g4@2 e4@2",
  "f4@1 d4@0.5 d4@0.5 f4@1 g4@1 a4@1 a4@0.5 a4@0.5 a4@1 g4@1",
  "f4@1 e4@1 d4@2"
)).slow(2)
  .s("sawtooth").lpf(1500)

const snare = s("snare*2")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 22. The Bear Went Over the Mountain
```javascript
// The Bear Went Over the Mountain
setcps(0.6)
const melody = note(cat(
  "c4@1 c4@1 c4@1 d4@1 e4@1 e4@1 e4@2",
  "d4@1 d4@1 d4@1 e4@1 c4@1 c4@1 c4@2",
  "g4@1 g4@1 g4@1 a4@1 g4@1 f4@1 e4@2",
  "c4@1 c4@1 c4@1 d4@1 e4@1 d4@1 c4@2"
)).slow(2)
  .s("supermandolin")

stack(
  melody,
  s("hh")
)
```

### 23. Do You Know the Muffin Man
```javascript
// Do You Know the Muffin Man
setcps(0.6)
const melody = note(cat(
  "g4@1 c4@1 c4@1 d4@1 e4@1 c4@1 c4@2",
  "a4@1 g4@1 f4@1 e4@1 d4@1 d4@1 d4@2",
  "g4@1 c4@1 c4@1 d4@1 e4@1 c4@1 c4@2",
  "a4@1 d4@1 d4@1 c4@1 b3@1 c4@3"
)).slow(2)
  .s("square")

stack(
  melody,
  s("bd sd")
)
```

### 24. Polly Wolly Doodle
```javascript
// Polly Wolly Doodle
setcps(0.6)
const melody = note(cat(
  "c4@1 e4@1 g4@2 f4@1 d4@1 b3@2",
  "b3@1 d4@1 f4@2 e4@1 c4@1 g3@2"
)).slow(2)
  .s("supermandolin")

stack(
  melody,
  s("cp")
)
```

### 25. One Two Buckle My Shoe
```javascript
// One Two Buckle My Shoe
setcps(0.6)
const melody = note(cat(
  "g4@1 g4@1 e4@1 e4@1",
  "g4@1 g4@1 e4@1 e4@1",
  "g4@0.5 g4@0.5 f4@0.5 f4@0.5 e4@0.5 e4@0.5 d4@0.5 d4@0.5",
  "c4@1 c4@1 c4@2"
))
  .s("sawtooth").lpf(2000)

stack(
  melody,
  s("bd*2")
)
```

### 26. Head, Shoulders, Knees and Toes
```javascript
// Head, Shoulders, Knees and Toes
setcps(0.6)
const melody = note(cat(
  "c5@1.5 b4@0.5 a4@1 g4@1 f4@0.5 f4@0.5 f4@1 f4@2",
  "d5@1.5 c5@0.5 b4@1 a4@1 g4@0.5 g4@0.5 g4@1 g4@2"
)).slow(2)
  .s("superpiano")

stack(
  melody,
  s("clap")
)
```

### 27. Baby Shark
```javascript
// Baby Shark
setcps(0.6)
const melody = note(cat(
  "d4@1 e4@1 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5",
  "d4@1 e4@1 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5",
  "d4@1 e4@1 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5",
  "g4@0.5 g4@0.5 f#4@2"
))
  .s("sawtooth").lpf(3000)

const bass = note("d2 e2 g2 g2 d2 e2 g2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 28. Old King Cole
```javascript
// Old King Cole
setcps(0.6)
const melody = note(cat(
  "g4@1 g4@1 c4@1 d4@1 e4@1 f4@1 g4@2",
  "a4@1 a4@1 g4@2 f4@1 f4@1 e4@2"
)).slow(2)
  .s("superpwm")

const bass = note("c3")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*4")
)
```

### 29. Sing a Song of Sixpence
```javascript
// Sing a Song of Sixpence
setcps(0.6)
const melody = note(cat(
  "c4@1 g3@1 c4@1 d4@1 e4@1 c4@1 g4@2",
  "a4@1 f4@1 g4@1 e4@1 d4@1 c4@1 d4@2"
)).slow(2)
  .s("supermandolin")

stack(
  melody,
  s("hh*4")
)
```

### 30. Hush Little Baby
```javascript
// Hush Little Baby
setcps(0.4)
const melody = note(cat(
  "e4@0.5 e4@0.5 g4@0.5 g4@0.5 b4@0.5 b4@0.5 a4@1",
  "f4@0.5 f4@0.5 a4@0.5 a4@0.5 c5@0.5 c5@0.5 b4@1"
))
  .s("sine")

const harp = note("c3")
  .s("supermandolin")

stack(
  melody,
  harp,
  s("glitch")
)
```

### 31. Twinkle Twinkle (Mozart Var 1)
```javascript
// Twinkle Twinkle (Mozart Var 1 - Fast)
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c4@0.5 c4@0.5 c4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5",
  "a4@0.5 a4@0.5 a4@0.5 a4@0.5 g4@2"
))
  .s("superpiano")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*4")
)
```

### 32. Rain Rain Go Away
```javascript
// Rain Rain Go Away
setcps(0.6)
const melody = note(cat(
  "g4@1 e4@1 g4@0.5 g4@0.5 e4@1",
  "g4@0.5 g4@0.5 e4@0.5 e4@0.5 g4@0.5 g4@0.5 e4@1"
))
  .s("sine")

stack(
  melody,
  s("noise").amp(0.1)
)
```

### 33. Mr. Sun
```javascript
// Mr. Sun
setcps(0.6)
const melody = note(cat(
  "g4@1 g4@1 g4@0.5 a4@0.5 b4@1",
  "a4@1 g4@1 e4@2",
  "g4@1 g4@1 g4@0.5 a4@0.5 b4@1",
  "a4@1 g4@1 e4@2"
))
  .s("superpwm")

stack(
  melody,
  s("hh")
)
```

### 34. You're a Grand Old Flag
```javascript
// You're a Grand Old Flag
setcps(0.6)
const melody = note(cat(
  "g4@0.5 a4@0.5 g4@0.5 e4@0.5 g4@1 g4@0.5 a4@0.5",
  "g4@0.5 e4@0.5 g4@1 c4@1 d4@1",
  "e4@1 e4@0.5 d4@0.5 c4@1 e4@1",
  "d4@1 a3@1 d4@2"
))
  .s("sawtooth").lpf(2000)

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 35. Anchors Aweigh
```javascript
// Anchors Aweigh
setcps(0.6)
const melody = note(cat(
  "e4@1 e4@1 c4@1 g4@3",
  "g4@1 f4@1 e4@1 d4@1 c4@2 b3@2",
  "d4@1 d4@1 b3@1 g4@3"
)).slow(2)
  .s("superpwm")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 36. The Caissons Go Rolling Along
```javascript
// The Caissons Go Rolling Along
setcps(0.6)
const melody = note(cat(
  "c4@1 c4@0.5 e4@0.5 g4@1 g4@0.5 a4@0.5",
  "g4@1 e4@1 c4@2",
  "d4@1 d4@0.5 e4@0.5 f4@1 d4@1",
  "g4@2 g3@2"
))
  .s("sawtooth")

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 37. Marine's Hymn
```javascript
// Marine's Hymn
setcps(0.6)
const melody = note(cat(
  "c4@1 e4@0.5 e4@0.5 e4@1 g4@1",
  "f4@1 d4@1 d4@2",
  "g4@1 f4@0.5 f4@0.5 f4@1 d4@1",
  "e4@1 c4@1 c4@2"
))
  .s("sawtooth").lpf(2500)

const snare = s("snare*4")

stack(
  melody,
  snare,
  s("bd*2")
)
```

### 38. Wild Blue Yonder (Air Force)
```javascript
// Wild Blue Yonder
setcps(0.6)
const melody = note(cat(
  "g3@1 c4@3 c4@1 e4@2 d4@1",
  "c4@1 b3@0.5 a3@0.5 g3@1 g4@3",
  "f4@1 e4@2 d4@1 c4@1"
)).slow(2)
  .s("sawtooth").lpf(2000)

stack(
  melody,
  s("hh*4")
)
```

### 39. Semper Paratus (Coast Guard)
```javascript
// Semper Paratus
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 g4@1 c5@2",
  "b4@0.5 a4@0.5 g4@1 a4@2",
  "g4@0.5 f4@0.5 e4@1 d4@1 c4@1",
  "d4@1 e4@1 g4@2"
))
  .s("superpwm")

stack(
  melody,
  s("bd sd")
)
```

### 40. My Country 'Tis of Thee (America)
```javascript
// My Country 'Tis of Thee
setcps(0.45)
const melody = note(cat(
  "g4@1 g4@1 a4@1 b4@1.5 c5@0.5 b4@1",
  "a4@1 g4@1 a4@1 g4@1 f#4@1 g4@2"
)).slow(1.75)
  .s("superpiano")

const bass = note("g2 d3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

---

## Category 3: TV, Movies & Video Games (Simple)

### 41. Star Wars (Imperial March)
```javascript
// Imperial March
setcps(0.6)
const melody = note(cat(
  "g3@1 g3@1 g3@1 eb3@0.75 bb3@0.25 g3@1 eb3@0.75 bb3@0.25 g3@2",
  "d4@1 d4@1 d4@1 eb4@0.75 bb3@0.25 gb3@1 eb3@0.75 bb3@0.25 g3@2"
)).slow(2)
  .s("sawtooth").lpf(1000)

const bass = note("g2")
  .s("supersaw").lpf(500)

stack(
  melody,
  bass,
  s("bd*4")
)
```

### 42. Star Wars (Main Theme)
```javascript
// Star Wars Main Theme
setcps(0.6)
const melody = note(cat(
  "c4@0.5 g4@0.5 f4@0.16 e4@0.16 d4@0.16 c5@1 g4@0.5",
  "f4@0.16 e4@0.16 d4@0.16 c5@1 g4@0.5 f4@0.16 e4@0.16 f4@0.16 d4@2"
))
  .s("supersaw")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd").amp(1.2).shape(0.5)
)
```

### 43. Harry Potter (Hedwig's Theme)
```javascript
// Hedwig's Theme
setcps(0.6)
const melody = note(cat(
  "b3@0.5 e4@1.5 g4@0.5 f#4@1 e4@2 b4@1 a4@3",
  "f#4@3 e4@1.5 g4@0.5 f#4@1 eb4@2 f4@1 b3@3"
)).slow(3)
  .s("triangle").lpf(2000)

stack(
  melody,
  s("glitch")
)
```

### 44. Super Mario Bros (Main Theme)
```javascript
// Super Mario Bros
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 ~ e4@0.5 ~ c4@0.5 e4@1",
  "g4@1 ~ ~ g3@1",
  "c4@1.5 g3@1.5 e3@1.5",
  "a3@1 b3@1 bb3@0.5 a3@1"
))
  .s("square")

const bass = note("c3 g3")
  .s("triangle")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 45. Legend of Zelda (Main Theme)
```javascript
// Legend of Zelda
setcps(0.6)
const melody = note(cat(
  "bb3@3 f3@1 bb3@0.5 c4@0.5 d4@0.5 eb4@0.5",
  "f4@3 f4@0.5 gb4@0.5 ab4@0.5 bb4@0.5",
  "c5@0.5 d5@0.5 eb5@0.5 f5@0.5 g5@0.5 a5@0.5",
  "bb5@3"
))
  .s("sawtooth")

const bass = note("bb2 f3")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*4")
)
```

### 46. Zelda's Lullaby
```javascript
// Zelda's Lullaby
setcps(0.4)
const melody = note(cat(
  "b3@2 d4@1 a3@3",
  "b3@2 d4@1 a3@3",
  "b3@2 d4@1 a4@2 g4@1 d4@3"
)).slow(2.25)
  .s("sine")

const harp = note("g3 d4")
  .s("supermandolin")

stack(
  melody,
  harp
)
```

### 47. Pac-Man Intro
```javascript
// Pac-Man Intro
setcps(0.6)
const melody = note(cat(
  "b4@0.25 b5@0.25 f#5@0.25 d#5@0.25 b5@0.25 f#5@0.125 d#5@0.375",
  "c5@0.25 c6@0.25 g5@0.25 e5@0.25 c6@0.25 g5@0.125 e5@0.375",
  "b4@0.25 b5@0.25 f#5@0.25 d#5@0.25 b5@0.25 f#5@0.125 d#5@0.375",
  "d#5@0.125 e5@0.125 f5@0.125 f#5@0.375"
))
  .s("square")

stack(
  melody
)
```

### 48. Mii Channel Theme
```javascript
// Mii Channel
setcps(0.6)
const melody = note(cat(
  "f#4@1 a4@1.5 c#5@0.5 a4@1 f#4@0.5 d4@0.5 d4@0.5 d4@0.5",
  "c#4@0.5 d4@0.5 f#4@1 a4@1.5 c#5@0.5 a4@1",
  "f#4@0.5 e5@0.5 d#5@0.5 d5@1 g#4@0.5 c#5@2"
))
  .s("sine")

const chords = note("d3 a3")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bongo")
)
```

### 49. Megalovania (Intro)
```javascript
// Megalovania (Intro)
setcps(0.6)
const melody = note(cat(
  "d4@0.25 d4@0.25 d5@0.5 a4@0.75 ab4@0.5 g4@0.5 f4@0.5 d4@0.25 f4@0.25 g4@0.25"
))
  .s("square").lpf(2000)

stack(
  melody,
  s("bd sd")
)
```

### 50. James Bond Theme
```javascript
// James Bond Theme
setcps(0.6)
const melody = note(cat(
  "e4@0.5 f#4@0.5 f#4@0.5 f#4@0.5 f#4@1 e4@0.5 e4@0.5 e4@0.5",
  "e4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@1 f#4@0.5 f#4@0.5 f#4@0.5"
))
  .s("supermandolin").lpf(1500)

const bass = note("b2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*4")
)
```

### 51. Mission Impossible
```javascript
// Mission Impossible
setcps(0.6)
const bass = note(cat(
  "g2@1.5 g2@1.5 bb2@0.5 c3@0.5"
))
  .s("bass")

const melody = note(cat(
  "~ ~ bb4@0.5 g4@3.5",
  "~ ~ f4@0.5 g4@3.5"
))
  .s("sawtooth").lpf(2000)

stack(
  bass,
  melody,
  s("hh*5")
)
```

### 52. Pink Panther
```javascript
// Pink Panther
setcps(0.6)
const melody = note(cat(
  "~ ~ c#4@0.25 d4@0.75 ~ ~ d#4@0.25 e4@0.75",
  "~ c#4@0.25 d4@0.25 d#4@0.25 e4@1.25 c#5@0.5 b4@0.5 g4@0.5 e4@0.5",
  "d4@0.5 e4@2"
))
  .s("sawtooth").lpf(1500)

stack(
  melody,
  s("ride*2")
)
```

### 53. Indiana Jones
```javascript
// Indiana Jones
setcps(0.6)
const melody = note(cat(
  "e4@1.5 f4@0.5 g4@1 c5@4",
  "d4@1.5 e4@0.5 f4@4",
  "g4@1.5 a4@0.5 b4@1 f5@4",
  "a4@1.5 b4@0.5 c5@2 d5@1 e5@1"
)).slow(1.75)
  .s("superpwm")

const bass = note("c3 g3")
  .s("supersaw")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 54. Jurassic Park
```javascript
// Jurassic Park
setcps(0.45)
const melody = note(cat(
  "bb3@1 a3@1 bb3@2 f3@2",
  "bb3@1 a3@1 bb3@2 f3@2",
  "bb3@1 a3@1 bb3@1 c4@3"
))
  .s("frenchhorn") // or similar if not avail, fallback to sawtooth
  .s("sawtooth").lpf(1000)

const strings = note("bb2 f3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  strings
)
```

### 55. Ghostbusters (Bassline)
```javascript
// Ghostbusters
setcps(0.6)
const bass = note(cat(
  "b2@0.5 b2@0.5 ~ ~ b2@0.5 b2@0.5 a2@0.5 bb2@0.5",
  "b2@0.5 b2@0.5 ~ ~ f3@0.5 f3@0.5 db3@0.5 b2@0.5"
))
  .s("bass").lpf(1000)

stack(
  bass,
  s("clap*2").slow(2)
)
```

### 56. Axel F (Beverly Hills Cop)
```javascript
// Axel F
setcps(0.6)
const melody = note(cat(
  "f4@1 ~ ab4@0.75 f4@0.25 f4@0.25 bb4@0.5 f4@0.5 eb4@0.5",
  "f4@1 ~ c5@0.75 f4@0.25 f4@0.25 db5@0.5 c5@0.5 ab4@0.5"
))
  .s("superpwm")

const bass = note("f2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 57. The Simpsons Theme
```javascript
// The Simpsons
setcps(0.6)
const melody = note(cat(
  "c4@1.5 e4@1 f#4@1 a4@1.5 g4@0.5 e4@1 c4@1",
  "a3@0.5 f#3@0.5 f#3@0.5 f#3@0.5 g3@2"
)).slow(1.88)
  .s("sine")

stack(
  melody,
  s("hh*4")
)
```

### 58. Spongebob Theme
```javascript
// Spongebob Theme
setcps(0.6)
const melody = note(cat(
  "g4@0.5 a4@0.5 b4@0.5 a4@0.5 g4@0.5 f#4@0.5 g4@1",
  "d4@0.5 d4@0.5 e4@0.5 f#4@0.5 g4@0.5 a4@0.5 b4@1"
))
  .s("triangle")

const bass = note("g3 d3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 59. Pokemon Theme
```javascript
// Pokemon Theme
setcps(0.6)
const melody = note(cat(
  "f4@0.5 f4@0.5 d4@0.5 f4@0.5 ~ f4@0.5 ~ d4@0.5",
  "bb4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@1 c4@1"
))
  .s("superpwm")

const bass = note("d3 bb2 c3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 60. Game of Thrones
```javascript
// Game of Thrones
setcps(0.6)
const melody = note(cat(
  "g3@1.5 c3@1.5 eb3@0.5 f3@0.5 g3@2",
  "c3@1.5 eb3@0.5 f3@0.5 d3@2"
))
  .s("supersaw").lpf(1000).attack(0.1)

const cello = note("c2 g2")
  .s("supersaw").lpf(500).attack(0.5)

stack(
  melody,
  cello,
  s("bd").slow(4)
)
```

---

## Category 4: Iconic Rock & Pop Riffs (Simple)

### 61. Seven Nation Army
```javascript
// Seven Nation Army
setcps(0.6)
const riff = note(cat(
  "e3@1.5 e3@0.5 g3@0.75 e3@0.75 d3@0.5 c3@2 b2@2"
)).slow(2)
  .s("sawtooth").lpf(800)

stack(
  riff,
  s("bd*2")
)
```

### 62. Smoke on the Water
```javascript
// Smoke on the Water
setcps(0.6)
const riff = note(cat(
  "g3@1 bb3@1 c4@1.5",
  "g3@1 bb3@1 db4@0.5 c4@1.5",
  "g3@1 bb3@1 c4@1 bb3@1 g3@2"
))
  .s("distortion-guitar") // fallback
  .s("sawtooth").distort(0.5)

stack(
  riff,
  s("bd sd")
)
```

### 63. We Will Rock You
```javascript
// We Will Rock You
setcps(0.4)
const stomp = s("bd bd cp ~")

const vocal = note("e4@1 e4@0.5 d4@0.5 e4@2")
  .s("vowel").slow(2)

stack(
  stomp,
  vocal
)
```

### 64. Eye of the Tiger
```javascript
// Eye of the Tiger
setcps(0.6)
const riff = note(cat(
  "c4@2 c4@0.5 bb3@0.5 c4@1",
  "c4@0.5 bb3@0.5 c4@1 c4@0.5 ab3@0.5 g3@2"
))
  .s("sawtooth").lpf(1500)

stack(
  riff,
  s("bd sd")
)
```

### 65. The Final Countdown
```javascript
// The Final Countdown
setcps(0.6)
const riff = note(cat(
  "b4@0.5 a4@0.5 b4@2 e4@1",
  "c5@0.5 b4@0.5 c5@2 b4@0.5 a4@0.5",
  "b4@0.5 a4@0.5 b4@2 e4@1",
  "a4@0.5 g4@0.5 a4@2 g4@0.5 f#4@0.5 g4@0.5 a4@0.5"
))
  .s("supersaw")

stack(
  riff,
  s("bd*4")
)
```

### 66. Jump (Van Halen)
```javascript
// Jump
setcps(0.6)
const chords = note(cat(
  "c4:major@1.5 c4:major@0.5 f4:major@1 g4:major@1",
  "g4:major@1 g4:major@0.5 a4:major@1 f4:major@1 c4:major@1"
))
  .s("supersaw")

stack(
  chords,
  s("bd sd")
)
```

### 67. Sweet Child O' Mine (Simple)
```javascript
// Sweet Child O' Mine (Simplified Riff)
setcps(0.6)
const riff = note(cat(
  "d4@0.5 d5@0.5 a4@0.5 g4@0.5 g5@0.5 a4@0.5 f#5@0.5 a4@0.5"
))
  .s("sawtooth")

stack(
  riff,
  s("bd")
)
```

### 68. Iron Man
```javascript
// Iron Man
setcps(0.4)
const riff = note(cat(
  "b2@2 d3@2 d3@1 e3@1 e3@2",
  "g3@0.5 f#3@0.5 g3@0.5 f#3@0.5 g3@0.5 f#3@0.5 d3@1 e3@1 e3@2"
)).slow(2)
  .s("sawtooth").distort(0.8)

stack(
  riff,
  s("bd*2")
)
```

### 69. Sunshine of Your Love
```javascript
// Sunshine of Your Love
setcps(0.6)
const riff = note(cat(
  "d4@1 d4@0.5 c4@1 d4@0.5",
  "a3@0.5 ~ ab3@0.5 ~ g3@1",
  "d4@1 a3@1"
))
  .s("sawtooth").distort(0.4)

stack(
  riff,
  s("bd sd")
)
```

### 70. Satisfaction
```javascript
// Satisfaction
setcps(0.6)
const riff = note(cat(
  "b3@1 b3@1 b3@0.5 c#4@0.5 d4@1 d4@0.5 c#4@0.5 d4@0.5 c#4@0.5 b3@2"
)).slow(2)
  .s("sawtooth").distort(0.6)

stack(
  riff,
  s("bd*4")
)
```

### 71. Smells Like Teen Spirit
```javascript
// Smells Like Teen Spirit
setcps(0.6)
const chords = note(cat(
  "f3:power@1.5 f3:power@0.5 bb3:power@1.5 bb3:power@0.5",
  "ab3:power@1.5 ab3:power@0.5 db4:power@1.5 db4:power@0.5"
))
  .s("distortion-guitar")

stack(
  chords,
  s("bd*4")
)
```

### 72. Come As You Are
```javascript
// Come As You Are
setcps(0.6)
const riff = note(cat(
  "e2@0.5 e2@0.5 f2@0.5 f#2@1 f#2@0.5 f#2@0.5",
  "f#2@0.5 f2@0.5 e2@0.5 a2@1 e2@0.5"
))
  .s("sawtooth").lpf(800)

stack(
  riff,
  s("hh*4")
)
```

### 73. Wonderwall
```javascript
// Wonderwall
setcps(0.45)
const chords = note("f#3:min7 a3:min7 e3:min7 b3:min7")
  .s("supermandolin")

stack(
  chords,
  s("hh*4")
)
```

### 74. Clocks
```javascript
// Clocks
setcps(0.6)
const riff = note(cat(
  "eb5@0.5 bb4@0.5 g4@0.5 eb5@0.5 bb4@0.5 g4@0.5 eb5@0.5 bb4@0.5",
  "db5@0.5 bb4@0.5 f4@0.5 db5@0.5 bb4@0.5 f4@0.5 db5@0.5 bb4@0.5"
))
  .s("superpiano")

stack(
  riff,
  s("bd")
)
```

### 75. Viva La Vida
```javascript
// Viva La Vida
setcps(0.6)
const chords = note(cat(
  "db4:major@4 eb4:major@4 ab3:major@4 f3:major@4"
)).slow(4)
  .s("supersaw").attack(0.2)

stack(
  chords,
  s("bd(3,8)")
)
```

### 76. Don't Stop Believin'
```javascript
// Don't Stop Believin'
setcps(0.6)
const bass = note(cat(
  "e3@2 b2@2 c#3@2 a2@2",
  "e3@2 b2@2 g#2@2 a2@2"
)).slow(2)
  .s("superpiano")

const riff = note(cat(
  "g#4@0.5 f#4@0.5 g#4@1 f#4@2"
))
  .s("superpiano")

stack(
  bass,
  riff
)
```

### 77. Livin' on a Prayer
```javascript
// Livin' on a Prayer
setcps(0.6)
const bass = note(cat(
  "c3@0.5 c3@0.5 d3@0.5 e3@0.5 e3@0.5 c3@0.5 d3@0.5 e3@0.5"
))
  .s("bass")

const talkbox = s("vowel").vowel("o a").speed(2)

stack(
  bass,
  talkbox,
  s("bd sd")
)
```

### 78. Sweet Dreams
```javascript
// Sweet Dreams
setcps(0.6)
const riff = note(cat(
  "c3@1 c3@1 eb3@1 c3@1",
  "ab2@1 ab2@1 c3@1 g2@1"
))
  .s("supersaw")

stack(
  riff,
  s("bd*2")
)
```

### 79. Take On Me
```javascript
// Take On Me
setcps(0.6)
const bass = note(cat(
  "f#3@1 f#3@1 d3@1 b2@2",
  "b2@0.5 a2@0.5 b2@0.5 e3@2 e3@0.5"
))
  .s("superpwm")

const melody = note(cat(
  "f#4@0.5 f#4@0.5 d4@0.5 b3@1"
))
  .s("supersaw")

stack(
  bass,
  melody,
  s("bd sd")
)
```

### 80. Another One Bites the Dust
```javascript
// Another One Bites the Dust
setcps(0.6)
const bass = note(cat(
  "e2@0.5 e2@0.5 e2@0.5 ~ e2@0.5 ~ e2@0.5 ~",
  "e2@0.5 e2@0.5 e2@0.5 ~ g2@0.5 e2@0.5 a2@0.5 ~"
))
  .s("bass")

stack(
  bass,
  s("bd*4")
)
```

---

## Category 5: 80s, 90s & Modern Hits (Simple)

### 81. Never Gonna Give You Up
```javascript
// Never Gonna Give You Up
setcps(0.6)
const melody = note(cat(
  "c5@0.5 d5@0.5 f5@0.5 d5@0.5 a5@1 a5@0.5 g5@2",
  "c5@0.5 d5@0.5 f5@0.5 d5@0.5 g5@1 g5@0.5 f5@0.5 e5@0.5 d5@2"
)).slow(1.62)
  .s("supersaw")

const chords = note("f3:major g3:major e3:major a3:major")
  .s("superpiano")

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 82. All Star
```javascript
// All Star
setcps(0.6)
const melody = note(cat(
  "f#4@0.5 c#5@0.5 a#4@0.5 f#4@0.5 c#5@0.5 a#4@0.5 c#5@0.5 a#4@0.5",
  "f#4@0.5 c#5@0.5 a#4@0.5 a#4@0.5 g#4@0.5 f#4@0.5 f#4@0.5 f4@0.5"
))
  .s("superpwm")

stack(
  melody,
  s("bd*2")
)
```

### 83. Bad Guy
```javascript
// Bad Guy
setcps(0.6)
const bass = note(cat(
  "g2@1 g2@1 g2@0.5 ~ g2@1 g2@1 g2@0.5 ~",
  "c3@1 c3@1 c3@0.5 ~ g2@1 g2@1 g2@0.5 ~",
  "d3@1 d3@1 d3@0.5 ~ g2@1 g2@1 g2@0.5 ~"
)).slow(1.75)
  .s("bass").distort(0.2)

const riff = note(cat(
  "~ ~ ~ ~ bb3@0.5 g3@0.5 d4@0.5"
))
  .s("sine")

stack(
  bass,
  riff,
  s("bd*2")
)
```

### 84. Old Town Road
```javascript
// Old Town Road
setcps(0.4)
const chords = note(cat(
  "g#3:major@2 b3:major@2 f#3:major@2 eb3:major@2"
)).slow(2)
  .s("superpiano")

const melody = note(cat(
  "b4@0.5 b4@0.5 eb5@0.5 b4@0.5 g#4@0.5 f#4@0.5 g#4@1"
))
  .s("supermandolin")

stack(
  chords,
  melody,
  s("bd*4")
)
```

### 85. Coffin Dance (Astronomia)
```javascript
// Coffin Dance
setcps(0.6)
const melody = note(cat(
  "f4@0.5 f4@0.5 f4@0.5 c5@1 f4@0.5 g4@0.5 c5@1 g4@0.5",
  "a4@0.5 c5@1 a4@0.5 bb4@0.5 c5@1 bb4@0.5 a4@0.5 g4@0.5 f4@0.5",
  "g4@0.5 f4@0.5 g4@0.5 f4@0.5 g4@0.5 c4@0.5 c4@0.5 c4@0.5"
))
  .s("supersaw")

stack(
  melody,
  s("bd*4")
)
```

### 86. Crab Rave
```javascript
// Crab Rave
setcps(0.6)
const melody = note(cat(
  "d4@0.75 bb3@0.25 d4@0.25 bb3@0.25 d4@0.5",
  "d4@0.25 eb4@0.25 d4@0.25 bb3@0.25 a3@0.25 bb3@0.25 d4@0.25 bb3@0.25"
))
  .s("superpwm")

stack(
  melody,
  s("bd sd")
)
```

### 87. Nyan Cat
```javascript
// Nyan Cat
setcps(0.6)
const melody = note(cat(
  "f#4@0.5 g#4@0.5 d#4@0.5 d#4@0.5 b3@0.5 d#4@0.5 e4@0.5 f#4@0.5",
  "g#4@0.5 f#4@0.5 a#4@0.5 g#4@0.5 f#4@0.5 e4@0.5 d#4@0.5 c#4@0.5"
))
  .s("square")

stack(
  melody,
  s("bd*4")
)
```

### 88. Popcorn
```javascript
// Popcorn
setcps(0.6)
const melody = note(cat(
  "a4@0.5 g4@0.5 a4@0.5 e4@0.5 c4@0.5 e4@0.5 a3@1",
  "a4@0.5 g4@0.5 a4@0.5 e4@0.5 c4@0.5 e4@0.5 a3@1"
))
  .s("sine").attack(0.01).decay(0.1)

stack(
  melody,
  s("bd sd")
)
```

### 89. Sandstorm
```javascript
// Sandstorm
setcps(0.6)
const riff = note(cat(
  "b3@0.25 b3@0.25 b3@0.25 b3@0.25 b3@0.5",
  "b3@0.25 b3@0.25 b3@0.25 b3@0.25 b3@0.25 b3@0.25 b3@0.5",
  "e4@0.5 e4@0.25 e4@0.25 e4@0.25 e4@0.25 e4@0.25 e4@0.25",
  "d4@0.5 d4@0.25 d4@0.25 a3@0.5 a3@0.25 a3@0.25"
))
  .s("sawtooth")

stack(
  riff,
  s("bd*4")
)
```

### 90. Blue (Da Ba Dee)
```javascript
// Blue (Da Ba Dee)
setcps(0.6)
const melody = note(cat(
  "g3@0.5 bb3@0.5 d4@0.5 g4@0.5 bb4@0.5 g4@0.5 d4@0.5 bb3@0.5",
  "c4@0.5 eb4@0.5 g4@0.5 c5@0.5 g4@0.5 eb4@0.5 c4@0.5 g3@0.5"
))
  .s("supersaw")

stack(
  melody,
  s("bd*4")
)
```

### 91. Gangnam Style
```javascript
// Gangnam Style
setcps(0.6)
const riff = note(cat(
  "b3@0.5 b3@0.5 b3@0.5 b3@0.5 b3@0.5",
  "e4@0.25 e4@0.25 e4@0.25 e4@0.25"
))
  .s("supersaw")

stack(
  riff,
  s("bd*4")
)
```

### 92. Shake It Off
```javascript
// Shake It Off
setcps(0.6)
const melody = note(cat(
  "g4@0.5 g4@0.5 g4@2 e4@0.5 g4@0.5",
  "g4@0.5 g4@0.5 g4@2 e4@0.5 g4@0.5",
  "a4@0.5 g4@0.5 e4@2 e4@0.5 g4@0.5"
))
  .s("sawtooth").lpf(2000)

const brass = note("g3 c3 g3 d3")
  .s("sawtooth").lpf(1000)

stack(
  melody,
  brass,
  s("bd sd")
)
```

### 93. Despacito
```javascript
// Despacito
setcps(0.45)
const melody = note(cat(
  "d5@1 c#5@1 b4@0.5 f#4@0.5 f#4@0.5 f#4@0.5 f#4@0.5 f#4@0.5",
  "b4@0.5 b4@0.5 b4@0.5 b4@0.5 a4@0.5 b4@0.5 g4@0.5 g4@0.5",
  "g4@0.5 g4@0.5 g4@0.5 g4@0.5 a4@0.5 b4@0.5 c#5@0.5 d5@0.5"
))
  .s("supermandolin")

stack(
  melody,
  s("bongo")
)
```

### 94. Shape of You
```javascript
// Shape of You
setcps(0.6)
const riff = note(cat(
  "c#4@0.75 e4@0.75 c#4@0.5 c#4@0.75 e4@0.75 c#4@0.5",
  "b3@0.75 d#4@0.75 b3@0.5 a3@0.5 b3@0.5 a3@0.5 g#3@0.5"
))
  .s("sine") // marimba-ish

stack(
  riff,
  s("bd")
)
```

### 95. Blinding Lights
```javascript
// Blinding Lights
setcps(0.6)
const riff = note(cat(
  "f4@1.5 f4@1.5 eb4@0.5 f4@0.5",
  "g4@1 c5@1 g4@1 eb4@1",
  "bb4@1.5 f4@2.5"
))
  .s("supersaw")

stack(
  riff,
  s("bd*2")
)
```

### 96. Dance Monkey
```javascript
// Dance Monkey
setcps(0.6)
const chords = note(cat(
  "f#3:min@1 a3:min@1 c#4:min@1 e4:min@1",
  "d4:min@1 f#4:min@1 b3:min@1 d#4:min@1"
))
  .s("superpiano")

const melody = note(cat(
  "c#5@0.5 b4@0.5 a4@0.5 g#4@0.5 f#4@2"
))
  .s("vowel")

stack(
  chords,
  melody,
  s("bd sd")
)
```

### 97. Wellerman
```javascript
// Wellerman
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c4@0.5 e4@0.5 e4@0.5 g4@0.5 g4@1 g4@0.5",
  "eb4@0.5 eb4@0.5 eb4@1 c4@0.5 c4@1 bb3@0.5",
  "c4@0.5 c4@0.5 eb4@1 g4@0.5 g4@1 f4@0.5",
  "eb4@0.5 eb4@0.5 d4@1 c4@2"
))
  .s("accordion")

stack(
  melody,
  s("stomp")
)
```

### 98. Astronaut in the Ocean
```javascript
// Astronaut in the Ocean
setcps(0.6)
const riff = note(cat(
  "e3@0.25 g3@0.25 b3@0.25 d4@0.25 b3@0.5 a3@0.5",
  "g3@0.5 e3@0.5 d3@0.5 b2@0.5"
))
  .s("sawtooth").lpf(1000)

stack(
  riff,
  s("bd*2")
)
```

### 99. Believer
```javascript
// Believer (Imagine Dragons)
setcps(0.6)
const riff = note(cat(
  "bb3@0.5 a3@0.5 bb3@0.5 g3@1 bb3@0.5 a3@0.5",
  "bb3@0.5 g3@1 bb3@0.5 a3@0.5 bb3@0.5 f3@1"
))
  .s("supermandolin")

stack(
  riff,
  s("bd*2")
)
```

### 100. Happier (Marshmello)
```javascript
// Happier
setcps(0.6)
const melody = note(cat(
  "f4@0.5 a4@0.5 c5@1 c5@0.5 a4@0.5 f4@1",
  "f4@0.5 a4@0.5 c5@1 c5@0.5 a4@0.5 g4@1"
))
  .s("superpwm")

stack(
  melody,
  s("bd sd")
)
```

### 101. Faded (Alan Walker)
```javascript
// Faded
setcps(0.45)
const chords = note(cat(
  "f#3:min@4 d3:min@4 a2:min@4 e3:min@4"
)).slow(4)
  .s("superpiano")

const melody = note(cat(
  "f#4@1.5 f#4@0.5 a4@1 f#4@1",
  "d4@2 d4@1 f#4@1",
  "c#4@4"
))
  .s("supersaw").attack(0.5)

stack(
  chords,
  melody,
  s("bd").slow(2)
)
```

### 102. Unity (TheFatRat)
```javascript
// Unity
setcps(0.6)
const melody = note(cat(
  "a4@0.5 c5@0.5 a4@0.5 e5@0.5 d5@0.5 c5@0.5 a4@0.5 g4@0.5",
  "a4@0.5 c5@0.5 a4@0.5 e5@0.5 d5@1 g4@1"
))
  .s("square")

stack(
  melody,
  s("bd*2")
)
```

### 103. Undertale (Main Theme)
```javascript
// Undertale Theme
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c5@0.5 b4@0.5 a4@0.5 g4@0.5 f4@0.5 g4@0.5 a4@0.5",
  "b4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@1 c4@1"
))
  .s("superpiano")

stack(
  melody,
  s("hh")
)
```

### 104. Pigstep (Minecraft)
```javascript
// Pigstep
setcps(0.45)
const bass = note(cat(
  "c3@1 g3@0.5 bb3@0.5 c3@1 g3@1",
  "f3@1 c3@0.5 eb3@0.5 f3@1 c3@1"
))
  .s("bass").distort(0.5)

stack(
  bass,
  s("bd*2")
)
```

### 105. Sweden (Minecraft)
```javascript
// Sweden (C418)
setcps(0.6)
const chords = note(cat(
  "d3@2 f#3@2 a3@2 d4@2",
  "g3@2 b3@2 d4@2 g4@2"
)).slow(2)
  .s("superpiano").lpf(1000)

const melody = note(cat(
  "f#4@4 a4@4"
)).slow(2)
  .s("superpiano")

stack(
  chords,
  melody,
  s("noise").amp(0.05)
)
```
