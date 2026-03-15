# 100 Simple Famous Songs Vol. 3

This is the third volume of simple, recognizable Strudel arrangements. These versions focus on clear melodies and basic chords, perfect for learning and hacking.

## How to Use
Copy the code block for the song you want to hear into the Strudel editor.

---

## Category 1: Disney & Musicals

### 1. Happy Birthday (8-Bit / Chiptune)
```javascript
// Happy Birthday (8-Bit)
setcps(0.6)
const melody = note(cat(
  "g3@1.5 g3@0.5 a3@2 g3@2 c4@2 b3@4",
  "g3@1.5 g3@0.5 a3@2 g3@2 d4@2 c4@4"
)).slow(3)
  .s("square")

const bass = note("c2 g2")
  .s("triangle")

stack(
  melody,
  bass,
  s("glitch*4")
)
```

### 2. Let It Go (Frozen)
```javascript
// Let It Go
setcps(0.6)
const melody = note(cat(
  "g4@1 a4@1 b4@2 b4@2",
  "a4@1 g4@1 d4@2 d4@2",
  "g4@1 a4@1 b4@2 d5@1 c5@1 b4@2"
)).slow(2)
  .s("supersaw").lpf(2000)

const chords = note("e3:minor c3:minor d3:minor a2:minor")

  .s("superpiano")

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 3. Hakuna Matata (Lion King)
```javascript
// Hakuna Matata
setcps(0.6)
const melody = note(cat(
  "f4@0.5 c4@0.5 d4@1 e4@1 f4@2 d4@1",
  "e4@1 f4@1 g4@1 a4@2 f4@2"
)).slow(1.75)
  .s("superpwm")

const bass = note("f2 bb2")
  .s("bass")

stack(
  melody,
  bass,
  s("bongo")
)
```

### 4. A Whole New World (Aladdin)
```javascript
// A Whole New World
setcps(0.6)
const melody = note(cat(
  "d4@1 e4@1 f#4@2 a4@1 f#4@1 d4@2",
  "d4@1 e4@1 f#4@2 a4@1 f#4@1 d4@2",
  "d4@1 e4@1 f#4@1 a4@1 b4@1 c#5@1 d5@2"
)).slow(2)
  .s("triangle")

const pad = note("d3 a3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad,
  s("hh")
)
```

### 5. Under the Sea (Little Mermaid)
```javascript
// Under the Sea
setcps(0.6)
const melody = note(cat(
  "d4@0.5 d4@0.5 d4@0.5 d4@0.5 e4@0.5 f#4@0.5 g4@1",
  "e4@0.5 e4@0.5 e4@0.5 e4@0.5 f#4@0.5 g4@0.5 a4@1"
))
  .s("steel-drum") // fallback
  .s("supermandolin")

const bass = note("d3 a3")
  .s("bass")

stack(
  melody,
  bass,
  s("cp")
)
```

### 6. Circle of Life (Lion King)
```javascript
// Circle of Life
setcps(0.9)
const melody = note(cat(
  "g4@0.5 a4@0.5 b4@1 d5@1 b4@1 g4@2",
  "g4@0.5 a4@0.5 b4@1 d5@1 b4@1 a4@2"
))
  .s("sawtooth").lpf(1500)

const drums = s("bd(3,8) tom")

stack(
  melody,
  drums,
  note("g2")
)
```

### 7. Beauty and the Beast
```javascript
// Beauty and the Beast
setcps(0.8)
const melody = note(cat(
  "c4@1 d4@1 e4@1 f4@1 e4@2 c4@2",
  "d4@1 e4@1 f4@1 g4@1 f4@2 d4@2"
)).slow(2)
  .s("superpiano")

const strings = note("c3 g3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  strings
)
```

### 8. You've Got a Friend in Me (Toy Story)
```javascript
// You've Got a Friend in Me
setcps(0.6)
const melody = note(cat(
  "c4@1 e4@0.5 g4@0.5 a4@1 g4@1",
  "e4@0.5 c4@0.5 a3@1 c4@2",
  "e4@0.5 g4@0.5 a4@1 g4@1 e4@0.5 c4@0.5"
))
  .s("superpiano")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 9. The Bare Necessities (Jungle Book)
```javascript
// The Bare Necessities
setcps(0.6)
const melody = note(cat(
  "e4@0.5 g4@0.5 a4@1 c5@2",
  "a4@1 c5@1 a4@1 g4@1 e4@2 c4@2"
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

### 10. Phantom of the Opera
```javascript
// Phantom of the Opera
setcps(0.6)
const melody = note(cat(
  "d4@0.5 c#4@0.5 c4@0.5 b3@0.5 bb3@2",
  "d4@0.5 c#4@0.5 c4@0.5 b3@0.5 bb3@2"
))
  .s("sawtooth").lpf(3000)

const organ = note("d2")
  .s("superpwm").lpf(1000)

stack(
  melody,
  organ,
  s("bd")
)
```

---

## Category 2: The Beatles

### 11. Hey Jude
```javascript
// Hey Jude
setcps(0.8)
const melody = note(cat(
  "g4@2 e4@1 e4@2",
  "e4@0.5 g4@0.5 a4@1 d5@2 c5@1 b4@0.5 c5@0.5",
  "a4@2 g4@1"
))
  .s("superpiano")

const chords = note("c3 g3")
  .s("superpiano")

stack(
  melody,
  chords,
  s("tambourine")
)
```

### 12. Let It Be
```javascript
// Let It Be
setcps(0.9)
const melody = note(cat(
  "g4@1 g4@1 a4@1 g4@0.5 f4@0.5 e4@1 d4@1 c4@2",
  "e4@1 e4@1 f4@1 g4@1 a4@1 g4@1 f4@0.5 e4@1.5"
)).slow(2)
  .s("superpiano")

const bass = note("c3 g3 a3 f3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 13. Yellow Submarine
```javascript
// Yellow Submarine
setcps(0.6)
const melody = note(cat(
  "b4@1 a4@0.5 g4@0.5 e4@1 e4@1",
  "b4@0.5 a4@0.5 g4@0.5 e4@1.5 e4@1"
))
  .s("supermandolin")

stack(
  melody,
  s("bd*2")
)
```

### 14. Yesterday
```javascript
// Yesterday
setcps(0.8)
const melody = note(cat(
  "g3@0.5 f3@2.5",
  "a3@0.5 b3@0.5 c#4@0.5 d4@0.5 e4@0.5 f4@0.5 e4@0.5 d4@0.5 c4@1"
))
  .s("supermandolin")

const chords = note("f2 e2 d2")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 15. Here Comes the Sun
```javascript
// Here Comes the Sun
setcps(0.6)
const melody = note(cat(
  "b3@0.5 d4@0.5 b4@0.5 a4@0.5 b4@0.5 a4@0.5 g4@0.5 e4@0.5",
  "b3@0.5 d4@0.5 b4@0.5 a4@0.5 b4@1 e4@1"
))
  .s("supermandolin")

stack(
  melody,
  s("hh")
)
```

### 16. Twist and Shout
```javascript
// Twist and Shout
setcps(0.6)
const chords = note(cat(
  "d4:major@1 g4:major@1 a4:major@2"
))

  .s("supersaw")

const vocal = note("a4@0.5 b4@0.5 c#5@1 d5@2")
  .s("vowel")

stack(
  chords,
  vocal,
  s("bd sd")
)
```

### 17. Come Together
```javascript
// Come Together
setcps(0.9)
const riff = note(cat(
  "d2@0.5 d2@0.5 d2@1 a2@0.5 f3@0.5 g3@0.5 f3@0.5",
  "d2@1"
))
  .s("bass").distort(0.3)

stack(
  riff,
  s("hh*4")
)
```

### 18. Eleanor Rigby
```javascript
// Eleanor Rigby
setcps(0.6)
const melody = note(cat(
  "c5@1.5 b4@0.5 e4@2",
  "c5@1.5 b4@0.5 e4@2"
))
  .s("supersaw").attack(0.1)

const cello = note("c3@1 c3@1 c3@1 c3@1")
  .s("sawtooth").lpf(800)

stack(
  melody,
  cello
)
```

### 19. Penny Lane
```javascript
// Penny Lane
setcps(0.6)
const melody = note(cat(
  "b4@0.5 b4@0.5 b4@0.5 b4@0.5 b4@0.5 a4@0.5 g#4@0.5 f#4@0.5",
  "e4@0.5 g#4@0.5 b4@1 d#5@1 b4@1"
))
  .s("superpiano")

stack(
  melody,
  s("bd sd")
)
```

### 20. Help!
```javascript
// Help!
setcps(0.6)
const melody = note(cat(
  "b4@1 g4@1 e4@2",
  "a4@1 f#4@1 d4@2",
  "g4@1 e4@1 c#4@2"
))
  .s("superpwm")

stack(
  melody,
  s("snare*4")
)
```

---

## Category 3: Classic Rock Anthems

### 21. Bohemian Rhapsody (Intro)
```javascript
// Bohemian Rhapsody (Intro)
setcps(0.7)
const melody = note(cat(
  "bb3@0.5 bb3@0.5 f4@1 bb4@1 g4@1",
  "f4@0.5 eb4@0.5 eb4@2"
))
  .s("vowel")

const chords = note("bb3:major g3:major c4:major f3:major")

  .s("superpiano")

stack(
  melody,
  chords
)
```

### 22. Don't Stop Me Now (Queen)
```javascript
// Don't Stop Me Now
setcps(0.6)
const melody = note(cat(
  "c5@1 g4@1 a4@1 g4@1",
  "e4@1 d4@1 c4@1 b3@1"
))
  .s("superpiano")

const bass = note("c3 g3 a3 f3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 23. Somebody to Love (Queen)
```javascript
// Somebody to Love
setcps(0.6)
const melody = note(cat(
  "g4@0.5 a4@0.5 g4@0.5 e4@0.5 g4@2",
  "a4@0.5 g4@0.5 e4@0.5 c4@0.5 d4@2"
))
  .s("superpiano")

stack(
  melody,
  s("clap")
)
```

### 24. Stairway to Heaven (Intro)
```javascript
// Stairway to Heaven
setcps(0.8)
const melody = note(cat(
  "c4@1 e4@1 a4@1 b4@1",
  "e4@1 c4@1 b4@1 c5@1"
))
  .s("supermandolin") // flute/guitar vibe

stack(
  melody,
  s("noise").gain(0.05)
)
```

### 25. Hotel California (Intro)
```javascript
// Hotel California
setcps(0.8)
const chords = note(cat(
  "b3:minor@4 f#3:minor@4 a3:minor@4 e3:minor@4"
)).slow(4)

  .s("supermandolin")

const bass = note("b2 f#2 a2 e2")
  .s("bass")

stack(
  chords,
  bass,
  s("hh")
)
```

### 26. Sweet Home Alabama
```javascript
// Sweet Home Alabama
setcps(0.6)
const riff = note(cat(
  "d3@0.5 d3@0.5 d4@1 a2@0.5 a2@0.5 a3@1",
  "g2@0.5 g2@0.5 g3@2"
))
  .s("supermandolin")

stack(
  riff,
  s("bd sd")
)
```

### 27. Born to Run (Springsteen)
```javascript
// Born to Run
setcps(0.6)
const melody = note(cat(
  "e4@1 e4@0.5 f#4@0.5 g#4@1 g#4@0.5 a4@0.5",
  "b4@1 b4@0.5 c#5@0.5 d#5@1 e5@1"
))
  .s("supersaw")

stack(
  melody,
  s("bd*4")
)
```

### 28. Born in the USA
```javascript
// Born in the USA
setcps(0.6)
const melody = note(cat(
  "b4@0.5 f#4@0.5 b4@0.5 f#4@0.5 b4@0.5 f#4@0.5 e4@1",
  "b4@0.5 f#4@0.5 b4@0.5 f#4@0.5 b4@0.5 f#4@0.5 e4@1"
))
  .s("supersaw")

const chords = note("b3")
  .s("supersaw").lpf(1000)

stack(
  melody,
  chords,
  s("bd sd")
)
```

### 29. Purple Haze (Hendrix)
```javascript
// Purple Haze
setcps(0.6)
const riff = note(cat(
  "bb2@1 d3@1",
  "e3@1.5 g3@0.5 a3@1.5 d4@0.5"
))
  .s("sawtooth").distort(0.8)

stack(
  riff,
  s("bd*2")
)
```

### 30. Back in Black (AC/DC)
```javascript
// Back in Black
setcps(0.9)
const chords = note(cat(
  "e3:power@1 d3:power@1 a3:power@1",
  "~ ~ ~"
))

  .s("sawtooth").distort(0.8)

const lick = note(cat(
  "~ ~ ~ g3@0.25 d3@0.25 a2@0.25 g2@0.25 a2@0.25 bb2@0.25 a2@0.5"
))
  .s("sawtooth").distort(0.8)

stack(
  chords,
  lick,
  s("bd sd")
)
```

---

## Category 4: 90s & 2000s Pop Nostalgia

### 31. Wannabe (Spice Girls)
```javascript
// Wannabe
setcps(0.6)
const melody = note(cat(
  "b4@0.5 b4@0.5 b4@0.5 b4@0.5 b4@0.5 b4@0.5 c#5@1",
  "a4@0.5 a4@0.5 a4@0.5 a4@0.5 a4@0.5 a4@0.5 b4@1"
))
  .s("superpwm")

stack(
  melody,
  s("bd*2")
)
```

### 32. I Want It That Way (Backstreet Boys)
```javascript
// I Want It That Way
setcps(0.6)
const melody = note(cat(
  "f#4@0.5 f#4@0.5 c#5@1 c#5@0.5 b4@0.5 b4@0.5 a4@0.5",
  "f#4@2"
))
  .s("supermandolin")

const chords = note("f#3:major d3:major a3:major")

  .s("superpiano")

stack(
  melody,
  chords,
  s("hh")
)
```

### 33. Baby One More Time (Britney)
```javascript
// Baby One More Time
setcps(0.6)
const melody = note(cat(
  "c5@0.5 c5@1 b4@0.5 c5@1 g4@1",
  "c5@0.5 c5@1 b4@0.5 c5@0.5 eb5@1.5"
))
  .s("superpiano")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 34. Toxic (Britney)
```javascript
// Toxic
setcps(0.6)
const riff = note(cat(
  "c5@0.5 c5@0.5 eb5@0.5 c5@0.5 db5@0.5 c5@0.5 bb4@0.5 c5@0.5"
))
  .s("sawtooth").lpf(2500)

stack(
  riff,
  s("bd*4")
)
```

### 35. Barbie Girl (Aqua)
```javascript
// Barbie Girl
setcps(0.6)
const melody = note(cat(
  "g#4@0.5 e4@0.5 g#4@0.5 c#5@0.5 a4@2",
  "f#4@0.5 d#4@0.5 f#4@0.5 b4@0.5 g#4@2"
))
  .s("superpwm")

stack(
  melody,
  s("bd sd")
)
```

### 36. Genie in a Bottle (Christina Aguilera)
```javascript
// Genie in a Bottle
setcps(0.6)
const melody = note(cat(
  "c5@0.5 c5@0.5 bb4@0.5 bb4@0.5 g4@0.5 g4@0.5 f4@1",
  "c5@0.5 c5@0.5 bb4@0.5 bb4@0.5 g4@0.5 g4@0.5 f4@1"
))
  .s("superpiano")

stack(
  melody,
  s("snap")
)
```

### 37. Livin' la Vida Loca (Ricky Martin)
```javascript
// Livin' la Vida Loca
setcps(0.6)
const melody = note(cat(
  "c#5@0.5 c#5@0.5 c#5@0.5 c#5@0.5 b4@0.5 a4@0.5 g#4@0.5 a4@0.5",
  "b4@2"
))
  .s("sawtooth")

const bass = note("c#3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 38. Don't Look Back in Anger (Oasis)
```javascript
// Don't Look Back in Anger
setcps(0.9)
const melody = note(cat(
  "c5@1 c5@0.5 d5@0.5 e5@2",
  "d5@0.5 c5@0.5 d5@0.5 c5@0.5 a4@2"
))
  .s("superpiano")

const chords = note("c3:major g3:major a3:major e3:major")

  .s("superpiano")

stack(
  melody,
  chords,
  s("hh")
)
```

### 39. Black Hole Sun (Soundgarden)
```javascript
// Black Hole Sun
setcps(0.6)
const melody = note(cat(
  "e4@1 e4@0.5 g4@0.5 f4@2",
  "d4@1 d4@0.5 f4@0.5 e4@2"
))
  .s("supermandolin")

const chords = note("g3 bb3 f3 e3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  chords
)
```

### 40. Enter Sandman (Metallica)
```javascript
// Enter Sandman
setcps(0.6)
const riff = note(cat(
  "e3@0.5 e3@0.5 g3@0.5 e3@0.5 bb3@0.5 a3@0.5 g3@0.5 e3@0.5"
))
  .s("sawtooth").distort(0.8)

stack(
  riff,
  s("bd*2")
)
```

---

## Category 5: Modern Pop Hits

### 41. Levitating (Dua Lipa)
```javascript
// Levitating
setcps(0.6)
const melody = note(cat(
  "b4@0.5 b4@0.5 b4@0.5 c#5@0.5 d5@0.5 c#5@0.5 b4@0.5 f#4@0.5",
  "b4@0.5 b4@0.5 b4@0.5 c#5@0.5 d5@0.5 c#5@0.5 b4@0.5 f#4@0.5"
))
  .s("superpwm")

const bass = note("b2 f#2 e2")
  .s("bass")

stack(
  melody,
  bass,
  s("clap")
)
```

### 42. As It Was (Harry Styles)
```javascript
// As It Was
setcps(0.6)
const riff = note(cat(
  "a4@0.5 b4@0.5 c#5@0.5 a4@0.5 b4@1 c#5@0.5 b4@0.5",
  "a4@0.5 b4@0.5 c#5@0.5 a4@0.5 b4@1 c#5@0.5 b4@0.5"
))
  .s("supersaw")

stack(
  riff,
  s("bd*4")
)
```

### 43. Uptown Funk (Bruno Mars)
```javascript
// Uptown Funk
setcps(0.6)
const riff = note(cat(
  "d4@0.25 g4@0.25 d4@0.25 g4@0.25 d4@0.25 g4@0.25 f4@0.25 d4@0.25"
))
  .s("sawtooth").lpf(2000)

const bass = note("d2 g2")
  .s("bass")

stack(
  riff,
  bass,
  s("bd*2 sd")
)
```

### 44. Bad Romance (Lady Gaga)
```javascript
// Bad Romance
setcps(0.6)
const melody = note(cat(
  "a3@0.5 c4@0.5 e4@0.5 a3@0.5 c4@0.5 e4@0.5",
  "g4@0.5 g4@0.5 g4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@0.5"
))
  .s("supersaw")

stack(
  melody,
  s("bd*4")
)
```

### 45. Poker Face (Lady Gaga)
```javascript
// Poker Face
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 g#3@0.5 g#3@0.5 e4@0.5 e4@0.5 g#3@0.5 g#3@0.5",
  "e4@0.5 e4@0.5 g#3@0.5 g#3@0.5 a3@1 b3@1"
))
  .s("sawtooth").lpf(1500)

stack(
  melody,
  s("bd*4")
)
```

### 46. Rolling in the Deep (Adele)
```javascript
// Rolling in the Deep
setcps(0.6)
const melody = note(cat(
  "g4@1 d4@0.5 b4@1 g4@0.5 a4@1",
  "g4@1 d4@0.5 b4@1 g4@0.5 a4@1"
))
  .s("superpiano")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("stomp")
)
```

### 47. Someone Like You (Adele)
```javascript
// Someone Like You
setcps(0.7)
const piano = note(cat(
  "a3@0.5 c#4@0.5 e4@0.5 c#4@0.5 a3@0.5 c#4@0.5 e4@0.5 c#4@0.5"
))
  .s("superpiano")

const melody = note("e4@2 f#4@2")
  .s("vowel")

stack(
  piano,
  melody
)
```

### 48. Roar (Katy Perry)
```javascript
// Roar
setcps(0.9)
const melody = note(cat(
  "f4@0.5 g4@0.5 bb4@0.5 g4@1 bb4@1 g4@0.5",
  "bb4@0.5 c5@0.5 bb4@0.5 g4@0.5 f4@1 d4@1"
))
  .s("supersaw")

stack(
  melody,
  s("bd sd")
)
```

### 49. Firework (Katy Perry)
```javascript
// Firework
setcps(0.6)
const melody = note(cat(
  "g#4@0.5 g#4@0.5 g#4@0.5 f#4@0.5 e4@0.5 f#4@0.5 e4@0.5 c#4@0.5",
  "e4@2"
))
  .s("supersaw")

const chords = note("e3:major b3:major c#4:major a3:major")

  .s("superpiano")

stack(
  melody,
  chords,
  s("bd*4")
)
```

### 50. Happy (Pharrell)
```javascript
// Happy
setcps(0.6)
const melody = note(cat(
  "f4@0.5 f4@0.5 f4@0.5 a4@0.5 c5@0.5 a4@0.5 f4@0.5 c4@0.5",
  "f4@1 f4@2"
))
  .s("superpiano")

stack(
  melody,
  s("clap")
)
```

---

## Category 6: Movie Themes

### 51. My Heart Will Go On (Titanic)
```javascript
// My Heart Will Go On
setcps(0.9)
const melody = note(cat(
  "e4@1 e4@0.5 e4@0.5 e4@2",
  "d#4@1 e4@1 e4@1.5 d#4@0.5",
  "e4@1 f#4@1 g#4@2",
  "f#4@4"
))
  .s("supermandolin") // flute-like

const pad = note("e3 b3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  pad
)
```

### 52. Pirates of the Caribbean
```javascript
// Pirates of the Caribbean
setcps(0.6)
const melody = note(cat(
  "a3@0.5 c4@0.5 d4@1 d4@1",
  "d4@0.5 e4@0.5 f4@1 f4@1",
  "f4@0.5 g4@0.5 e4@1 e4@1",
  "d4@0.5 c4@0.5 c4@0.5 d4@1.5"
))
  .s("sawtooth").lpf(2000)

const strings = note("d2 a2")
  .s("supersaw").attack(0.1)

stack(
  melody,
  strings,
  s("bd sd")
)
```

### 53. Avengers Theme
```javascript
// Avengers Theme
setcps(0.6)
const melody = note(cat(
  "c4@1 g4@1 e4@0.5 a4@2.5",
  "a4@1 g4@1 e4@0.5 c4@2.5"
))
  .s("sawtooth").lpf(1500)

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*2")
)
```

### 54. The Shire (Lord of the Rings)
```javascript
// The Shire
setcps(0.8)
const melody = note(cat(
  "d4@0.5 e4@0.5 f#4@1 a4@0.5 g4@0.5 f#4@0.5 e4@0.5",
  "d4@1 e4@0.5 a3@1.5"
))
  .s("supermandolin") // flute/whistle

const strings = note("d3 a3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  strings
)
```

### 55. E.T. Flying Theme
```javascript
// E.T. Theme
setcps(0.6)
const melody = note(cat(
  "g4@1 c5@2 g4@1",
  "a4@1 f4@1 e4@1 c4@1"
))
  .s("sawtooth").lpf(2000)

stack(
  melody,
  s("glitch")
)
```

### 56. Superman Theme
```javascript
// Superman Theme
setcps(0.6)
const melody = note(cat(
  "g3@0.5 g3@0.5 g3@0.5 c4@2 g4@2",
  "c5@0.5 g4@0.5 e4@0.5 c4@2"
))
  .s("sawtooth").lpf(2500)

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*4")
)
```

### 57. Star Trek (TNG)
```javascript
// Star Trek TNG
setcps(0.6)
const melody = note(cat(
  "c4@0.5 e4@0.5 g4@1 c5@2",
  "g4@0.5 e4@0.5 c4@2"
))
  .s("sawtooth").lpf(1500)

stack(
  melody,
  s("glitch")
)
```

### 58. The Godfather
```javascript
// The Godfather
setcps(0.8)
const melody = note(cat(
  "e4@0.5 a4@0.5 c5@0.5 b4@0.5 a4@0.5 c5@0.5 a4@0.5 b4@0.5",
  "a4@0.5 f4@0.5 g4@0.5 e4@2"
))
  .s("supermandolin")

const chords = note("a2 e3")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 59. Misirlou (Pulp Fiction)
```javascript
// Misirlou
setcps(0.6)
const melody = note(cat(
  "e4@0.25 f4@0.25 g4@0.25 a4@0.25 b4@0.25 c5@0.25 b4@0.25 a4@0.25",
  "g4@0.25 f4@0.25 e4@0.5"
))
  .s("sawtooth").distort(0.5)

stack(
  melody,
  s("bd sd")
)
```

### 60. Rocky (Gonna Fly Now)
```javascript
// Rocky Theme
setcps(0.6)
const melody = note(cat(
  "e4@0.5 g4@0.5 a4@2",
  "b3@0.5 e4@0.5 g4@0.5 a4@2",
  "c5@0.5 b4@0.5 a4@0.5 g4@0.5 e4@2"
))
  .s("sawtooth").lpf(1500)

stack(
  melody,
  s("bd*4")
)
```

---

## Category 7: TV Themes

### 61. Friends (I'll Be There For You)
```javascript
// Friends Theme
setcps(0.6)
const riff = note(cat(
  "a4@0.5 g4@0.5 a4@0.5 c#5@1 a4@0.5 g4@0.5 e4@0.5",
  "~ ~ ~"
))
  .s("superpwm")

const claps = s("clap*4").slow(2)

stack(
  riff,
  claps
)
```

### 62. Fresh Prince of Bel Air
```javascript
// Fresh Prince
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c4@0.5 e4@0.5 c4@0.5 a3@0.5 c4@0.5",
  "e4@0.5 e4@0.5 f4@0.5 e4@0.5 d4@1"
))
  .s("sawtooth")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 63. X-Files
```javascript
// X-Files
setcps(0.6)
const melody = note(cat(
  "a4@1 d5@1 e5@1 a5@2",
  "d5@1 e5@1 a4@2"
))
  .s("sine") // whistle

stack(
  melody,
  s("noise").gain(0.05)
)
```

### 64. Stranger Things
```javascript
// Stranger Things
setcps(0.8)
const arp = note(cat(
  "c4@0.25 e4@0.25 g4@0.25 b4@0.25 c5@0.25 b4@0.25 g4@0.25 e4@0.25"
))
  .s("sawtooth").lpf(800)

stack(
  arp,
  s("bd").slow(4)
)
```

### 65. Succession Theme
```javascript
// Succession Theme
setcps(0.6)
const melody = note(cat(
  "c4@1.5 eb4@0.5 g4@0.5 c5@1.5",
  "g4@0.25 eb4@0.25 d4@0.25 c4@0.25 bb3@2"
))
  .s("superpiano")

const bass = note("c2 g2")
  .s("bass").distort(0.2)

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 66. The Office
```javascript
// The Office
setcps(0.6)
const melody = note(cat(
  "g4@0.5 b4@0.5 d5@0.5 g5@0.5 f#5@0.5 g5@0.5 d5@0.5 b4@0.5",
  "g4@1 b4@0.5 a4@0.5 g4@2"
))
  .s("accordion") // melodica

stack(
  melody,
  s("bd sd")
)
```

### 67. Sesame Street
```javascript
// Sesame Street
setcps(0.6)
const melody = note(cat(
  "c4@0.5 e4@0.5 g4@1 a4@0.5 g4@1.5",
  "a4@0.5 g4@0.5 e4@0.5 g4@0.5 c4@2"
))
  .s("harmonica")

stack(
  melody,
  s("bd sd")
)
```

### 68. The Muppet Show
```javascript
// The Muppet Show
setcps(0.6)
const melody = note(cat(
  "c4@0.5 c4@0.5 e4@0.5 g4@0.5 c5@1 c5@0.5 c5@0.5",
  "b4@0.5 b4@0.5 a4@0.5 a4@0.5 g4@2"
))
  .s("sawtooth")

stack(
  melody,
  s("bd sd")
)
```

### 69. The Flintstones
```javascript
// The Flintstones
setcps(0.6)
const melody = note(cat(
  "g4@1 c4@0.5 c5@1 a4@0.5 g4@1 c4@1",
  "g4@1 c4@0.5 c5@1 a4@0.5 g4@2"
))
  .s("superpwm")

stack(
  melody,
  s("bd*2")
)
```

### 70. Scooby Doo
```javascript
// Scooby Doo
setcps(0.6)
const melody = note(cat(
  "g4@0.5 a4@0.5 b4@0.5 g4@0.5 e4@1 g4@1",
  "a4@0.5 g4@0.5 e4@0.5 g4@0.5 a4@2"
))
  .s("superpwm")

stack(
  melody,
  s("bongo")
)
```

---

## Category 8: Video Game Classics Vol 2

### 71. Green Hill Zone (Sonic)
```javascript
// Green Hill Zone
setcps(0.6)
const melody = note(cat(
  "a4@0.5 g4@0.5 e4@0.5 c4@1 a3@0.5 g3@0.5 a3@0.5",
  "c4@0.5 d4@0.5 e4@0.5 c4@1.5"
))
  .s("square")

const bass = note("c3 f3")
  .s("triangle")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 72. Mario Star Theme
```javascript
// Mario Star Theme
setcps(0.6)
const melody = note(cat(
  "c5@0.25 c5@0.25 c5@0.25 d5@0.25 e5@0.25 c5@0.25 a4@0.25 g4@0.25",
  "c5@0.25 c5@0.25 c5@0.25 d5@0.25 e5@0.25 c5@0.25 a4@0.25 g4@0.25"
))
  .s("square")

stack(
  melody,
  s("bd*4")
)
```

### 73. Mario Underworld
```javascript
// Mario Underworld
setcps(0.6)
const melody = note(cat(
  "c4@0.5 a3@0.5 bb3@0.5 ~",
  "~ ~ ~ ~"
))
  .s("triangle").lpf(1000)

const bass = note("c2")
  .s("bass")

stack(
  melody,
  bass
)
```

### 74. Lost Woods (Zelda)
```javascript
// Lost Woods
setcps(0.6)
const melody = note(cat(
  "f4@0.5 a4@0.5 b4@1 f4@0.5 a4@0.5 b4@1",
  "f4@0.5 a4@0.5 b4@0.5 e5@0.5 d5@1 b4@0.5 c5@0.5",
  "b4@0.5 g4@0.5 e4@2"
))
  .s("sawtooth").lpf(2000)

const bass = note("f3 c3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*4")
)
```

### 75. Green Greens (Kirby)
```javascript
// Green Greens
setcps(0.6)
const melody = note(cat(
  "b4@0.5 a4@0.5 g4@0.5 a4@0.5 b4@0.5 g4@0.5 d4@0.5 b4@0.5",
  "c5@1 c5@0.5 b4@0.5 a4@0.5 g4@0.5 a4@1"
))
  .s("square")

stack(
  melody,
  s("bd sd")
)
```

### 76. Halo Theme
```javascript
// Halo Theme
setcps(0.8)
const melody = note(cat(
  "e4@2 b4@1 e5@0.5 d#5@0.5",
  "e5@1 f#5@2 b4@1",
  "e4@2 c#5@1 d#5@1"
))
  .s("supersaw").attack(0.5)

const choir = note("e3 b3")
  .s("vowel")

stack(
  melody,
  choir
)
```

### 77. Mega Man 2 (Dr. Wily)
```javascript
// Mega Man 2 (Dr. Wily)
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 e4@1 a4@0.5 g#4@0.5 e4@1",
  "e4@0.5 f#4@0.5 g#4@0.5 a4@0.5 b4@0.5 a4@0.5 g#4@0.5 f#4@0.5"
))
  .s("square")

stack(
  melody,
  s("bd*4")
)
```

### 78. Guile Theme (Street Fighter)
```javascript
// Guile Theme
setcps(0.6)
const melody = note(cat(
  "eb4@0.5 eb4@0.5 d4@0.5 eb4@0.5 bb4@1 g4@1",
  "f4@0.5 eb4@0.5 d4@0.5 eb4@0.5 f4@2"
))
  .s("sawtooth").lpf(2500)

const bass = note("eb3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 79. Final Fantasy Prelude
```javascript
// Final Fantasy Prelude
setcps(0.6)
const arp = note(cat(
  "c4@0.25 d4@0.25 e4@0.25 g4@0.25 c5@0.25 d5@0.25 e5@0.25 g5@0.25"
))
  .s("supermandolin") // harp-like

stack(
  arp,
  s("noise").gain(0.05)
)
```

### 80. Vampire Killer (Castlevania)
```javascript
// Vampire Killer
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 d4@0.5 e4@0.5 c4@0.5 e4@0.5 g4@1",
  "e4@0.5 e4@0.5 d4@0.5 e4@0.5 a4@1 g4@1"
))
  .s("square")

stack(
  melody,
  s("bd*4")
)
```

---

## Category 9: Jazz & Blues Standards

### 81. Fly Me to the Moon
```javascript
// Fly Me to the Moon
setcps(0.6)
const melody = note(cat(
  "c5@1 b4@0.5 a4@0.5 g4@1 f4@1",
  "g4@1 a4@1 c5@2",
  "b4@1 a4@0.5 g4@0.5 f4@1 e4@1"
))
  .s("superpiano")

const bass = note("a2 d3 g2 c3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 82. What a Wonderful World
```javascript
// What a Wonderful World
setcps(0.8)
const melody = note(cat(
  "f4@0.5 a4@0.5 bb4@0.5 a4@0.5 g4@1 f4@1",
  "f4@0.5 a4@0.5 bb4@0.5 a4@0.5 g4@2"
))
  .s("superpiano")

const chords = note("f3 c3")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 83. Summertime
```javascript
// Summertime
setcps(0.8)
const melody = note(cat(
  "c5@1.5 g4@0.5 a4@0.5 c5@1.5",
  "a4@0.5 g4@0.5 e4@0.5 d4@0.5 c4@2"
))
  .s("superpiano")

const bass = note("a2 e2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 84. Take Five
```javascript
// Take Five (5/4 time approximated)
setcps(0.6)
const melody = note(cat(
  "b4@1 g#4@0.5 b4@0.5 c#5@0.5 d5@0.5 e5@0.5 f#5@1.5",
  "g#5@0.5 f#5@0.5 d5@0.5 e5@2.5"
))
  .s("supermandolin") // sax-ish

const bass = note("eb3@3 bb2@2")
  .s("bass")

stack(
  melody,
  bass,
  s("ride*5")
)
```

### 85. The Girl from Ipanema
```javascript
// The Girl from Ipanema
setcps(0.6)
const melody = note(cat(
  "g4@1.5 e4@0.5 g4@1.5 e4@0.5",
  "g4@0.5 e4@0.5 d4@2 c4@1"
))
  .s("superpiano")

const bass = note("f3 g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bongo")
)
```

### 86. So What
```javascript
// So What
setcps(0.6)
const bass = note(cat(
  "d2@1.5 d2@0.5 d2@1 d2@0.5 e2@0.5",
  "f2@0.5 e2@0.5 d2@2"
))
  .s("bass")

const chords = note("d3:minor7")

  .s("superpiano")
  .struct("~ x")

stack(
  bass,
  chords,
  s("hh")
)
```

### 87. Autumn Leaves
```javascript
// Autumn Leaves
setcps(0.6)
const melody = note(cat(
  "e4@0.5 f#4@0.5 g4@0.5 c5@2",
  "d4@0.5 e4@0.5 f#4@0.5 b4@2"
))
  .s("superpiano")

const bass = note("a2 d3 g2 c3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 88. La Vie En Rose
```javascript
// La Vie En Rose
setcps(0.9)
const melody = note(cat(
  "c4@0.5 c4@0.5 d4@0.5 e4@1.5 f4@1",
  "g4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@2"
))
  .s("accordion")

const bass = note("c3 g3")
  .s("bass")

stack(
  melody,
  bass
)
```

### 89. Moon River
```javascript
// Moon River
setcps(0.8)
const melody = note(cat(
  "g4@3 d5@2 c5@1",
  "b4@1 a4@1 g4@1"
))
  .s("supermandolin")

const chords = note("c3 a2 f2")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 90. Georgia on My Mind
```javascript
// Georgia on My Mind
setcps(0.8)
const melody = note(cat(
  "g4@1.5 e4@0.5 d4@0.5 c4@1.5",
  "e4@1 d4@0.5 c4@2.5"
))
  .s("superpiano")

const bass = note("f3 e3 d3 c3")
  .s("bass")

stack(
  melody,
  bass
)
```

---

## Category 10: Classical Vol. 2 & Traditional

### 91. Toccata and Fugue (Intro)
```javascript
// Toccata and Fugue
setcps(0.6)
const melody = note(cat(
  "a4@0.5 g4@0.5 a4@1",
  "g4@0.25 f4@0.25 e4@0.25 d4@0.25 c#4@2"
))
  .s("superpwm") // organ

stack(
  melody
)
```

### 92. Hallelujah Chorus
```javascript
// Hallelujah Chorus
setcps(0.6)
const melody = note(cat(
  "d5@1 a4@0.5 b4@0.5 a4@0.5 d5@0.5 d5@0.5 d5@0.5",
  "d5@1 a4@0.5 b4@0.5 a4@2"
))
  .s("supersaw")

const bass = note("d3")
  .s("supersaw").lpf(500)

stack(
  melody,
  bass,
  s("bd")
)
```

### 93. 1812 Overture (Finale)
```javascript
// 1812 Overture
setcps(0.6)
const melody = note(cat(
  "e4@1 f#4@0.5 g4@0.5 e4@1 g4@1",
  "a4@1 b4@0.5 c5@0.5 a4@1 c5@1"
))
  .s("sawtooth").lpf(1500)

const cannon = s("bd").gain(1.5).slow(4)

stack(
  melody,
  cannon
)
```

### 94. Can Can (Orpheus)
```javascript
// Can Can
setcps(0.6)
const melody = note(cat(
  "d5@0.5 d5@0.5 e5@0.5 c5@0.5 d5@0.5 b4@0.5 c5@0.5 a4@0.5",
  "b4@0.5 g4@0.5 a4@0.5 f#4@0.5 g4@2"
))
  .s("superpwm")

stack(
  melody,
  s("snare*4")
)
```

### 95. Flight of the Bumblebee
```javascript
// Flight of the Bumblebee (Slowed down for clarity)
setcps(0.6)
const melody = note(cat(
  "b4@0.25 a#4@0.25 a4@0.25 g#4@0.25 g4@0.25 g#4@0.25 a4@0.25 a#4@0.25",
  "b4@0.25 a#4@0.25 a4@0.25 g#4@0.25 g4@1"
))
  .s("sawtooth").lpf(3000)

stack(
  melody
)
```

### 96. Mars, The Bringer of War
```javascript
// Mars (Holst)
setcps(0.6)
const rhythm = note("g2")
  .s("bass").distort(0.5)
  .struct("x x x x x ~ x x") // 5/4 feel approximated

stack(
  rhythm,
  s("snare").struct("x x x x x ~ x x")
)
```

### 97. Jupiter (Holst)
```javascript
// Jupiter (Chorale)
setcps(0.9)
const melody = note(cat(
  "e4@1 g4@0.5 a4@0.5 c5@2",
  "d5@0.5 c5@0.5 a4@0.5 c5@0.5 g4@2"
))
  .s("supersaw").attack(0.5)

stack(
  melody,
  note("c3")
)
```

### 98. Rule Britannia
```javascript
// Rule Britannia
setcps(0.6)
const melody = note(cat(
  "g4@1 g4@0.5 a4@0.5 b4@1 c5@1",
  "d5@1.5 e5@0.5 d5@1 c5@1"
))
  .s("sawtooth").lpf(2000)

const bass = note("g3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 99. Scarborough Fair
```javascript
// Scarborough Fair
setcps(0.6)
const melody = note(cat(
  "d4@2 d4@1 a4@1 a4@1 e4@0.5 f4@0.5",
  "e4@1 d4@2"
))
  .s("supermandolin")

const bass = note("d3 a2")
  .s("bass")

stack(
  melody,
  bass
)
```

### 100. O Fortuna (Carmina Burana)
```javascript
// O Fortuna
setcps(0.6)
const melody = note(cat(
  "d4@1 a4@1 d4@1 a4@1",
  "d4@0.5 e4@0.5 f4@0.5 g4@0.5 a4@2"
))
  .s("vowel")

const timp = s("bd").gain(1.2).shape(0.5)

stack(
  melody,
  timp
)
```
