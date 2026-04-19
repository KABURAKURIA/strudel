# 100 Simple Famous Songs Vol. 4

This is the fourth volume of simple, recognizable Strudel arrangements. These versions focus on clear melodies and basic chords, perfect for learning and hacking.

## How to Use
Copy the code block for the song you want to hear into the Strudel editor.

---

## Category 1: Party & Dance Classics

### 1. Happy Birthday (Reggae Style)
```javascript
// Happy Birthday (Reggae)
setcps(0.6)
// 1. Melody (Off-beat feel)
const melody = note(cat(
  "~ g3@0.5 g3@0.5 a3@1 g3@1 c4@1 b3@2",
  "~ g3@0.5 g3@0.5 a3@1 g3@1 d4@1 c4@2"
)).slow(1.75)
  .s("organ")

// 2. Chords (The Skank - on the "and")
const chords = note("~ c3:major ~ g3:major")
  .s("superpiano").attack(0.05).release(0.1)

stack(
  melody,
  chords,
  s("bd ~ sd ~")
)
```

### 2. Y.M.C.A. (Village People)
```javascript
// Y.M.C.A.
setcps(0.6)
const melody = note(cat(
  "d4@0.5 c4@0.5 a3@0.5 g3@0.5 e3@2",
  "d4@0.5 c4@0.5 a3@0.5 g3@0.5 e3@2",
  "d4@0.5 c4@0.5 a3@0.5 g3@0.5 c4@4"
))
  .s("sawtooth").lpf(1500)

const brass = note("c3@1 a2@1 g2@1 e2@1")
  .s("sawtooth").lpf(1000)

stack(
  melody,
  brass,
  s("bd sd")
)
```

### 3. Macarena
```javascript
// Macarena
setcps(0.6)
const melody = note(cat(
  "f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.25 a4@0.25",
  "f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 a4@0.5",
  "f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 f4@0.5 e4@0.5 c4@0.5",
  "c4@2"
))
  .s("sawtooth")

const bass = note("f2 c2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 4. Conga (Gloria Estefan)
```javascript
// Conga
setcps(0.6)
const piano = note(cat(
  "e4@0.5 c4@0.5 e4@0.5 c4@0.5 e4@0.5 c4@0.5 e4@0.5 c4@0.5"
))
  .s("superpiano")

const bass = note(cat(
  "e2@1.5 e2@0.5 e2@0.5 e2@1.5"
))
  .s("bass")

stack(
  piano,
  bass,
  s("bd*4")
)
```

### 5. Who Let The Dogs Out
```javascript
// Who Let The Dogs Out
setcps(0.6)
const melody = note(cat(
  "c4@1 c4@0.5 ~ c4@0.5 ~ c4@0.5",
  "~ c4@0.5 ~ c4@0.5 ~ ~ ~ ~"
)).slow(1.75)
  .s("vowel")

const bass = note("c2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 6. Mambo No. 5
```javascript
// Mambo No. 5
setcps(0.6)
const brass = note(cat(
  "bb3@1 c4@1 db4@1 c4@1",
  "bb3@1 g3@1 bb3@1 ab3@1"
))
  .s("sawtooth").lpf(2000)

const bass = note("eb3 bb2")
  .s("bass")

stack(
  brass,
  bass,
  s("bd sd")
)
```

### 7. Cha Cha Slide
```javascript
// Cha Cha Slide
setcps(0.6)
const clap = s("clap*4")

const bass = note("c2@0.5 c2@0.5 c2@0.5 c2@0.5")
  .s("bass")

const synth = note("c4@1")
  .s("sawtooth").lpf(500)

stack(
  clap,
  bass,
  synth
)
```

### 8. Barbie Girl (Chorus)
```javascript
// Barbie Girl
setcps(0.6)
const melody = note(cat(
  "g#4@0.5 e4@0.5 g#4@0.5 c#5@0.5 a4@2",
  "f#4@0.5 d#4@0.5 f#4@0.5 b4@0.5 g#4@2",
  "g#4@0.5 e4@0.5 g#4@0.5 c#5@0.5 a4@1.5 c#5@0.5",
  "b4@0.5 f#4@0.5 g#4@0.5 b4@0.5 e4@2"
))
  .s("superpwm")

stack(
  melody,
  s("bd*2")
)
```

### 9. Dragostea Din Tei (Numa Numa)
```javascript
// Dragostea Din Tei
setcps(0.6)
const melody = note(cat(
  "c5@0.5 b4@0.5 c5@0.5 b4@0.5 c5@1 g4@1",
  "c5@0.5 b4@0.5 c5@0.5 b4@0.5 c5@1 e4@1",
  "c5@0.5 b4@0.5 c5@0.5 b4@0.5 c5@0.5 b4@0.5 c5@0.5 e5@0.5",
  "d5@2"
))
  .s("supersaw")

stack(
  melody,
  s("bd*4")
)
```

### 10. Cotton Eye Joe
```javascript
// Cotton Eye Joe
setcps(0.6)
const melody = note(cat(
  "a4@0.5 a4@0.5 f4@0.5 a4@0.5 d5@0.5 d5@0.5 e5@0.5 f5@0.5",
  "a4@0.5 f4@0.5 d4@0.5 f4@0.5 e4@0.5 c4@0.5 d4@1"
))
  .s("supermandolin") // banjo-ish

stack(
  melody,
  s("bd*2")
)
```

---

## Category 2: Pop Icons

### 11. Billie Jean (Michael Jackson)
```javascript
// Billie Jean
setcps(0.6)
const bass = note(cat(
  "f#2@0.5 c#3@0.5 e3@0.5 f#3@0.5 e3@0.5 c#3@0.5 b2@0.5 c#3@0.5"
))
  .s("bass").lpf(1000)

const chords = note("f#3@2 g#3@2 a3@2 g#3@2")
  .s("sawtooth").lpf(2000).attack(0.2)

stack(
  bass,
  chords,
  s("bd sd")
)
```

### 12. Thriller (Michael Jackson)
```javascript
// Thriller
setcps(0.6)
const bass = note(cat(
  "c#3@1.5 b2@0.5 c#3@0.5 e3@0.5 f#3@1",
  "c#3@1.5 a2@0.5 f#2@2"
))
  .s("bass").lpf(500)

const chords = note("c#4 b3 a3")
  .s("supersaw").attack(0.5)

stack(
  bass,
  chords,
  s("bd sd")
)
```

### 13. Beat It (Michael Jackson)
```javascript
// Beat It
setcps(0.6)
const riff = note(cat(
  "e3@1.5 g3@0.5 b3@0.5 g3@0.5 d4@1",
  "e3@1 d4@0.5 c4@1.5 b3@1"
))
  .s("sawtooth").distort(0.8)

stack(
  riff,
  s("bd*2")
)
```

### 14. Smooth Criminal (Michael Jackson)
```javascript
// Smooth Criminal
setcps(0.6)
const riff = note(cat(
  "a3@0.25 a3@0.25 a3@0.5 g3@0.25 a3@0.25 b3@0.25 a3@0.25 e3@0.25 f3@0.25 g3@0.25",
  "e3@0.5"
))
  .s("sawtooth")

stack(
  riff,
  s("bd sd")
)
```

### 15. Material Girl (Madonna)
```javascript
// Material Girl
setcps(0.6)
const bass = note(cat(
  "c3@0.5 c3@0.5 c3@0.5 c3@0.5 c3@0.5 c3@0.5 c3@0.5 c3@0.5"
))
  .s("bass")

const melody = note(cat(
  "c5@0.5 c5@0.5 g4@0.5 a4@0.5 g4@1 g4@0.5 e4@0.5",
  "g4@0.5 a4@0.5 g4@1 g4@1"
))
  .s("superpwm")

stack(
  bass,
  melody,
  s("bd sd")
)
```

### 16. Like a Virgin (Madonna)
```javascript
// Like a Virgin
setcps(0.6)
const bass = note(cat(
  "f2@1 c3@1 d3@1 bb2@1"
))
  .s("bass")

const melody = note(cat(
  "a4@0.5 c5@1.5 c5@1.5 a4@0.5",
  "bb4@0.5 g4@1.5 g4@1 g4@1"
))
  .s("sawtooth")

stack(
  bass,
  melody,
  s("bd*2")
)
```

### 17. Purple Rain (Prince)
```javascript
// Purple Rain
setcps(0.6)
const chords = note(cat(
  "bb3:major@4 g3:major@4 f3:major@4 eb3:major@4"
)).slow(4)
  .s("supersaw").attack(0.5)

const melody = note(cat(
  "bb4@2.5 c5@0.5 bb4@0.5 f4@0.5",
  "g4@2"
))
  .s("sawtooth").lpf(1500)

stack(
  chords,
  melody,
  s("bd")
)
```

### 18. 1999 (Prince)
```javascript
// 1999
setcps(0.6)
const riff = note(cat(
  "f4@0.5 f4@0.5 f4@0.5 ab4@0.5 bb4@1 ab4@0.5 f4@0.5"
))
  .s("superpwm")

stack(
  riff,
  s("bd*2")
)
```

### 19. I Will Always Love You (Whitney)
```javascript
// I Will Always Love You
setcps(0.7)
const melody = note(cat(
  "a4@0.5 b4@3",
  "a4@0.5 f#4@0.5 e4@2 d4@1"
))
  .s("superpiano")

const chords = note("d3 a2 g2")
  .s("supersaw").attack(0.5)

stack(
  melody,
  chords
)
```

### 20. Girls Just Want to Have Fun
```javascript
// Girls Just Want to Have Fun
setcps(0.6)
const riff = note(cat(
  "f#4@0.5 c#4@0.5 eb4@0.5 b3@0.5 f#4@0.5 c#4@0.5 eb4@0.5 b3@0.5"
))
  .s("sawtooth").lpf(2000)

const melody = note(cat(
  "f#4@1 d#4@1 f#4@1 d#4@1",
  "e4@0.5 d#4@0.5 c#4@1 b3@2"
))
  .s("superpwm")

stack(
  riff,
  melody,
  s("bd sd")
)
```

---

## Category 3: Rock & Folk Anthems

### 21. Take Me Home, Country Roads
```javascript
// Country Roads
setcps(0.45)
const melody = note(cat(
  "a4@1 b4@1 c#5@1.5 b4@0.5",
  "a4@1 f#4@1 f#4@2",
  "e4@1 f#4@1 g4@1.5 f#4@0.5",
  "e4@1 d4@1 d4@2"
))
  .s("supermandolin")

const guitar = note("d3 a3 b3 g3")
  .s("supermandolin")

stack(
  melody,
  guitar,
  s("stomp")
)
```

### 22. Piano Man (Billy Joel)
```javascript
// Piano Man
setcps(0.6) // Waltz 3/4 feel approximated
const melody = note(cat(
  "c5@1 b4@0.5 a4@0.5 g4@0.5 f4@0.5",
  "e4@0.5 c4@0.5 d4@1 e4@0.5 d4@1.5"
))
  .s("superpiano")

const harmonica = note("c4 g4 c5")
  .s("harmonica")

stack(
  melody,
  harmonica,
  s("bd ~ sd")
)
```

### 23. Rocket Man (Elton John)
```javascript
// Rocket Man
setcps(0.4)
const melody = note(cat(
  "g4@0.5 g4@0.5 d4@0.5 e4@0.5 g4@1 g4@1",
  "a4@0.5 b4@0.5 c5@1 g4@2"
))
  .s("superpiano")

const bass = note("g2 c3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 24. Space Oddity (David Bowie)
```javascript
// Space Oddity
setcps(0.4)
const chords = note(cat(
  "f3@2 e3@2",
  "f3@2 e3@2"
))
  .s("supermandolin")

const melody = note(cat(
  "c4@0.5 c4@0.5 c4@0.5 c4@0.5 c4@0.5 c4@0.5 c4@0.5 b3@0.5",
  "c4@0.5 e4@1.5"
))
  .s("sawtooth").lpf(1000)

stack(
  chords,
  melody
)
```

### 25. Imagine (John Lennon)
```javascript
// Imagine
setcps(0.4)
const piano = note(cat(
  "c4@0.5 e4@0.5 c4@0.5 e4@0.5 f4@0.5 a4@0.5 f4@0.5 a4@0.5"
))
  .s("superpiano")

const bass = note("c3 f3")
  .s("bass")

stack(
  piano,
  bass
)
```

### 26. Hallelujah (Leonard Cohen)
```javascript
// Hallelujah (Cohen)
setcps(0.6) // 6/8 feel
const melody = note(cat(
  "e4@1 g4@1 a4@1 a4@1.5",
  "a4@0.5 g4@1 e4@1 e4@2"
))
  .s("superpiano")

const chords = note("c3@3 a2@3")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 27. The Sound of Silence
```javascript
// The Sound of Silence
setcps(0.45)
const melody = note(cat(
  "d4@0.5 d4@0.5 e4@0.5 e4@0.5 g4@1.5 f#4@0.5",
  "e4@2 b3@2"
))
  .s("supermandolin")

const guitar = note("e3 g3 d3")
  .s("supermandolin")

stack(
  melody,
  guitar
)
```

### 28. Bridge Over Troubled Water
```javascript
// Bridge Over Troubled Water
setcps(0.7)
const piano = note(cat(
  "eb4@0.5 d4@0.5 c4@0.5 bb3@0.5 f4@0.5 g4@0.5 ab4@0.5 g4@0.5"
))
  .s("superpiano")

stack(
  piano,
  note("c3")
)
```

### 29. Africa (Toto)
```javascript
// Africa
setcps(0.6)
const chords = note(cat(
  "a3@0.5 g#3@0.5 c#4@0.5 b3@2.5",
  "a3@0.5 g#3@0.5 c#4@0.5 b3@0.5 f#3@0.5 g#3@0.5"
))
  .s("superpiano") // synth brass

const melody = note(cat(
  "c#5@1 b4@3"
))
  .s("supermandolin") // marimba

stack(
  chords,
  melody,
  s("bd sd")
)
```

### 30. Sweet Caroline
```javascript
// Sweet Caroline
setcps(0.6)
const melody = note(cat(
  "b4@2 b4@2",
  "a4@1 b4@1 e4@2",
  "f#4@0.5 f#4@0.5 e4@0.5 f#4@1.5",
  "d4@0.5 d4@0.5 c#4@0.5 d4@1.5",
  "c#4@0.5 c#4@0.5 b3@0.5 c#4@1.5"
))
  .s("sawtooth").lpf(1500)

const brass = note("b2 a2 e3")
  .s("sawtooth").lpf(1000)

stack(
  melody,
  brass,
  s("bd*2")
)
```

### 31. Mr. Brightside (The Killers)
```javascript
// Mr. Brightside
setcps(0.6)
const riff = note(cat(
  "c#5@0.5 c#5@0.5 c#5@0.5 c#5@0.5 f5@0.5 f5@0.5 f5@0.5 f5@0.5",
  "f#5@0.5 f#5@0.5 f#5@0.5 f#5@0.5 f5@0.5 f5@0.5 f5@0.5 f5@0.5"
))
  .s("sawtooth")

stack(
  riff,
  s("bd*4")
)
```

### 32. 99 Red Balloons
```javascript
// 99 Red Balloons
setcps(0.6)
const bass = note(cat(
  "e3@0.5 f#3@0.5 g#3@0.5 e3@0.5 f#3@0.5 g#3@0.5 a3@0.5 b3@0.5"
))
  .s("bass").lpf(1500)

const melody = note(cat(
  "g#4@1 f#4@1 e4@1 f#4@1"
))
  .s("sawtooth")

stack(
  bass,
  melody,
  s("bd sd")
)
```

### 33. Blue Monday (New Order)
```javascript
// Blue Monday
setcps(0.6)
const kick = s("bd*4")

const bass = note(cat(
  "f2@0.5 f2@0.5 c3@0.5 f2@0.5 d3@0.5 f2@0.5 c3@0.5 d3@0.5"
))
  .s("bass").lpf(2000)

const synth = note("c4 a3 f3 d3")
  .s("sawtooth")

stack(
  kick,
  bass,
  synth
)
```

### 34. Enjoy the Silence (Depeche Mode)
```javascript
// Enjoy the Silence
setcps(0.6)
const riff = note(cat(
  "bb3@0.5 db4@0.5 bb3@0.5 f3@0.5 bb3@1 f3@1",
  "bb3@0.5 db4@0.5 bb3@0.5 f3@0.5 bb3@1 eb4@1"
))
  .s("supermandolin")

const bass = note("bb2 f2")
  .s("bass")

stack(
  riff,
  bass,
  s("bd*2")
)
```

### 35. Personal Jesus (Depeche Mode)
```javascript
// Personal Jesus
setcps(0.6)
const riff = note(cat(
  "f#3@0.5 c#3@0.5 f#3@0.5 g#3@0.5 f#3@0.5 c#3@0.5 c#3@0.5 b2@0.5",
  "c#3@1"
))
  .s("sawtooth").lpf(1000)

stack(
  riff,
  s("stomp")
)
```

### 36. Tainted Love
```javascript
// Tainted Love
setcps(0.6)
const riff = note(cat(
  "g3@0.5 g3@0.5 bb3@0.5 eb4@0.5 c4@0.5 g3@0.5 bb3@0.5 c4@0.5"
))
  .s("superpwm")

stack(
  riff,
  s("bd*2")
)
```

### 37. Time After Time (Cyndi Lauper)
```javascript
// Time After Time
setcps(0.6)
const melody = note(cat(
  "c4@0.5 d4@0.5 c4@0.5 d4@0.5 c4@0.5 d4@0.5 e4@0.5 d4@0.5",
  "c4@1 b3@1 g3@2"
))
  .s("supermandolin")

const chords = note("f3 g3 e3 a3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  chords
)
```

### 38. True Colors
```javascript
// True Colors
setcps(0.45)
const melody = note(cat(
  "e4@0.5 g#4@0.5 b4@0.5 b4@1 a4@0.5 g#4@0.5 f#4@0.5",
  "e4@0.5 g#4@1 f#4@0.5 e4@2"
))
  .s("supermandolin")

const chords = note("e3 c#3 b2 a2")
  .s("superpiano")

stack(
  melody,
  chords
)
```

### 39. Every Breath You Take
```javascript
// Every Breath You Take
setcps(0.6)
const riff = note(cat(
  "ab3@0.5 c4@0.5 eb4@0.5 c4@0.5 ab3@0.5 c4@0.5 eb4@0.5 c4@0.5",
  "f3@0.5 ab3@0.5 db4@0.5 ab3@0.5 f3@0.5 ab3@0.5 db4@0.5 ab3@0.5"
))
  .s("supermandolin")

const bass = note("ab2 f2")
  .s("bass")

stack(
  riff,
  bass,
  s("bd*2")
)
```

### 40. With or Without You (U2)
```javascript
// With or Without You
setcps(0.6)
const bass = note(cat(
  "d2@1 d2@1 d2@1 d2@1",
  "a1@1 a1@1 a1@1 a1@1",
  "b1@1 b1@1 b1@1 b1@1",
  "g1@1 g1@1 g1@1 g1@1"
))
  .s("bass")

const guitar = note("f#5@4")
  .s("sine").amp(0.2)

stack(
  bass,
  guitar
)
```

---

## Category 4: TV Themes

### 41. The Addams Family
```javascript
// Addams Family
setcps(0.6)
const melody = note(cat(
  "c4@0.5 f4@0.5 a4@0.5 b4@0.5 c5@1 ~",
  "~ d4@0.5 g4@0.5 b4@0.5 c5@0.5 d5@1 ~"
))
  .s("superpiano") // harpsichord

const snap = s("snap").slow(2).offset(0.75)

stack(
  melody,
  snap,
  s("bd").slow(2)
)
```

### 42. Doctor Who
```javascript
// Doctor Who
setcps(0.6)
const bass = note(cat(
  "e2@0.5 e2@0.5 e2@0.5 ~ e2@0.5 e2@0.5 e2@0.5 ~",
  "e2@0.5 e2@0.5 e2@0.5 ~ g2@0.5 f#2@0.5 d2@0.5 ~"
))
  .s("bass")

const melody = note(cat(
  "e4@2 d4@1 b3@1",
  "g4@2 f#4@1 d4@1"
))
  .s("sawtooth").lpf(2000) // Theremin-ish

stack(
  bass,
  melody
)
```

### 43. Breaking Bad
```javascript
// Breaking Bad
setcps(0.4)
const slide = note(cat(
  "d3@1.5 g3@0.5 bb3@2"
))
  .s("sawtooth").lpf(1000)

const perc = s("bongo*4")

stack(
  slide,
  perc
)
```

### 44. Seinfeld
```javascript
// Seinfeld
setcps(0.6)
const bass = note(cat(
  "e3@0.25 g3@0.25 a3@0.25 bb3@0.25 b3@0.25 d4@0.25 e4@0.5"
))
  .s("bass").distort(0.5) // Slap bass

const pop = s("pop*4")

stack(
  bass,
  pop
)
```

### 45. Law & Order
```javascript
// Law & Order
setcps(0.6)
const dunDun = note("c3@0.25 c3@0.5")
  .s("supersquare").lpf(500)

const piano = note("c3@1 g3@1")
  .s("superpiano")

stack(
  dunDun,
  piano
)
```

### 46. Batman (1966)
```javascript
// Batman
setcps(0.6)
const riff = note(cat(
  "b2@1 b2@1 bb2@1 bb2@1",
  "a2@1 a2@1 bb2@1 bb2@1"
))
  .s("sawtooth").lpf(2000)

const vocal = note("b4").s("vowel").vowel("a")

stack(
  riff,
  vocal,
  s("snare*4")
)
```

### 47. DuckTales
```javascript
// DuckTales
setcps(0.6)
const melody = note(cat(
  "f#4@0.5 e4@0.5 f#4@0.5 g4@0.5 a4@0.5 b4@0.5 a4@0.5 g4@0.5",
  "f#4@0.5 a4@0.5 d5@0.5 c#5@0.5 a4@0.5 b4@0.5 c#5@1"
))
  .s("superpwm")

const bass = note("d3 a3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 48. Inspector Gadget
```javascript
// Inspector Gadget
setcps(0.6)
const melody = note(cat(
  "c4@0.5 d4@0.5 e4@0.5 f4@0.5 g4@1 e4@0.5 c4@0.5",
  "d4@0.5 e4@0.5 d4@0.5 c4@0.5 b3@2"
))
  .s("sawtooth").lpf(1500)

stack(
  melody,
  s("bd*4")
)
```

### 49. Power Rangers
```javascript
// Power Rangers
setcps(0.6)
const riff = note(cat(
  "e4@0.5 e4@0.5 a4@0.5 b4@0.5 d5@0.5 c#5@0.5 b4@0.5 a4@0.5",
  "e4@0.5 e4@0.5 g4@0.5 f#4@0.5 e4@0.5 d4@0.5 e4@1"
))
  .s("sawtooth").distort(0.5)

stack(
  riff,
  s("bd*2")
)
```

### 50. SpongeBob SquarePants (Flute)
```javascript
// SpongeBob (Flute)
setcps(0.6)
const melody = note(cat(
  "g5@0.25 b5@0.25 d6@0.25 b5@0.25 g5@0.25 b5@0.25 g5@0.25 d5@0.25",
  "g5@0.5 g5@0.5 g5@0.5 d5@0.5"
))
  .s("triangle")

stack(
  melody
)
```

### 51. Gravity Falls
```javascript
// Gravity Falls
setcps(0.6)
const arp = note(cat(
  "d4@0.5 f4@0.5 a4@0.5 f4@0.5 d4@0.5 f4@0.5 a4@0.5 f4@0.5",
  "c#4@0.5 e4@0.5 a4@0.5 e4@0.5 c#4@0.5 e4@0.5 a4@0.5 e4@0.5"
))
  .s("sine")

stack(
  arp,
  s("bd*2")
)
```

### 52. Phineas and Ferb
```javascript
// Phineas and Ferb
setcps(0.6)
const melody = note(cat(
  "g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 g4@0.5 f#4@0.5 g4@0.5",
  "a4@0.5 a4@0.5 g4@0.5 f#4@0.5 e4@1 d4@1"
))
  .s("sawtooth").lpf(2000)

stack(
  melody,
  s("bd sd")
)
```

### 53. Bluey
```javascript
// Bluey
setcps(0.6)
const melody = note(cat(
  "e4@0.5 b4@0.5 e5@0.5 b4@0.5 e4@1 b4@1",
  "d4@0.5 a4@0.5 d5@0.5 a4@0.5 d4@1 a4@1"
))
  .s("superpiano") // melodica

const bass = note("e3 d3")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 54. The Office (US)
```javascript
// The Office (US)
setcps(0.6)
const melody = note(cat(
  "g4@0.5 b4@0.5 d5@0.5 g5@0.5 f#5@0.5 g5@0.5 d5@0.5 b4@0.5",
  "g4@1 b4@0.5 a4@0.5 g4@2"
))
  .s("accordion")

const piano = note("g2")
  .s("superpiano")

stack(
  melody,
  piano,
  s("bd sd")
)
```

### 55. Friends (Claps)
```javascript
// Friends (I'll Be There For You)
setcps(0.6)
const riff = note(cat(
  "a4@0.5 g4@0.5 a4@0.5 c#5@1.5 e4@0.5",
  "~ ~ ~ ~"
))
  .s("sawtooth")

const claps = s("clap*4").slow(2).offset(1)

stack(
  riff,
  claps
)
```

---

## Category 5: Movie & Musical Themes

### 56. The Sound of Music (Do-Re-Mi)
```javascript
// Do-Re-Mi
setcps(0.6)
const melody = note(cat(
  "c4@1.5 d4@0.5 e4@1.5 c4@0.5 e4@1 c4@1 e4@2",
  "d4@1.5 e4@0.5 f4@1 f4@0.5 e4@0.5 d4@1 f4@2"
)).slow(2)
  .s("superpiano")

const bass = note("c3 d3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh")
)
```

### 57. My Favorite Things
```javascript
// My Favorite Things
setcps(0.6)
const melody = note(cat(
  "e4@1 b4@0.5 b4@1 f#4@0.5 e4@1 b4@0.5 b4@1 f#4@0.5",
  "e4@1 b4@0.5 b4@0.5 a4@0.5 g4@0.5 f#4@0.5 d4@0.5 e4@0.5"
))
  .s("supermandolin")

const bass = note("e3@3")
  .s("bass")

stack(
  melody,
  bass
)
```

### 58. Over the Rainbow (Wizard of Oz)
```javascript
// Over the Rainbow
setcps(0.4)
const melody = note(cat(
  "c4@2 c5@2 b4@1 g4@1 a4@1 b4@1 c5@2"
)).slow(2.5)
  .s("superpiano")

const strings = note("c3 a3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  strings
)
```

### 59. Supercalifragilistic
```javascript
// Supercalifragilistic
setcps(0.6)
const melody = note(cat(
  "c5@0.5 b4@0.5 a4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@0.5 c4@0.5",
  "d4@0.5 e4@0.5 f4@0.5 d4@0.5 g4@0.5 a4@0.5 b4@0.5 g4@0.5"
))
  .s("superpwm")

stack(
  melody,
  s("bd sd")
)
```

### 60. I Dreamed a Dream (Les Mis)
```javascript
// I Dreamed a Dream
setcps(0.4)
const melody = note(cat(
  "f4@0.5 f4@0.5 f4@0.5 g4@0.5 a4@0.5 g4@0.5 f4@0.5 d4@0.5",
  "d4@0.5 d4@0.5 d4@0.5 f4@0.5 g4@2"
))
  .s("superpiano")

const chords = note("bb3 g3")
  .s("supersaw").attack(0.5)

stack(
  melody,
  chords
)
```

### 61. Defying Gravity (Wicked)
```javascript
// Defying Gravity
setcps(0.6)
const melody = note(cat(
  "d4@0.5 d4@0.5 d4@0.5 g4@1 f#4@0.5 d4@1",
  "d4@0.5 d4@0.5 d4@0.5 a4@1 g4@0.5 d4@1"
))
  .s("sawtooth").lpf(1500)

const bass = note("d3 b2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*2")
)
```

### 62. The Greatest Showman (The Greatest Show)
```javascript
// The Greatest Show
setcps(0.6)
const stomp = s("bd bd clap ~")

const vocal = note("b3@1 b3@0.5 b3@0.5 d4@1 b3@1")
  .s("vowel")

stack(
  stomp,
  vocal
)
```

### 63. Let It Go (Chorus)
```javascript
// Let It Go
setcps(0.6)
const melody = note(cat(
  "g4@1 a4@1 b4@2 b4@2",
  "a4@1 g4@1 d4@2 d4@2",
  "g4@1 a4@1 b4@2 d5@1 c5@1 b4@2"
)).slow(2)
  .s("superpiano")

const chords = note("e3 c3 d3")
  .s("supersaw")

stack(
  melody,
  chords
)
```

### 64. You're Welcome (Moana)
```javascript
// You're Welcome
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 b3@0.5 c#4@0.5 e4@0.5 f#4@0.5 g#4@0.5 f#4@0.5",
  "e4@0.5 e4@0.5 b3@0.5 c#4@0.5 e4@1 f#4@1"
))
  .s("supermandolin")

stack(
  melody,
  s("bd*2")
)
```

### 65. Encanto (We Don't Talk About Bruno)
```javascript
// We Don't Talk About Bruno
setcps(0.6)
const piano = note(cat(
  "c4@0.5 c4@0.5 g3@0.5 g3@0.5 ab3@0.5 ab3@0.5 f3@0.5 f3@0.5",
  "g3@0.5 g3@0.5 g3@0.5 g3@0.5 g3@0.5 g3@0.5 b3@0.5 b3@0.5"
))
  .s("superpiano") // Montuno

const bass = note("c3 f3 g3")
  .s("bass")

stack(
  piano,
  bass,
  s("bongo")
)
```

### 66. Ghostbusters
```javascript
// Ghostbusters
setcps(0.6)
const bass = note(cat(
  "b2@0.5 b2@0.5 ~ ~ b2@0.5 b2@0.5 a2@0.5 bb2@0.5",
  "b2@0.5 b2@0.5 ~ ~ f3@0.5 f3@0.5 db3@0.5 b2@0.5"
))
  .s("sawtooth").lpf(1000)

const synth = note("~ ~ b4@0.5 a4@3.5")
  .s("sawtooth")

stack(
  bass,
  synth,
  s("bd sd")
)
```

### 67. Axel F (Crazy Frog)
```javascript
// Axel F
setcps(0.6)
const melody = note(cat(
  "f4@1 ~ ab4@0.75 f4@0.25 f4@0.25 bb4@0.5 f4@0.5 eb4@0.5",
  "f4@1 ~ c5@0.75 f4@0.25 f4@0.25 db5@0.5 c5@0.5 ab4@0.5"
))
  .s("supersaw")

stack(
  melody,
  s("bd*2")
)
```

### 68. Rocky (Gonna Fly Now)
```javascript
// Rocky
setcps(0.6)
const brass = note(cat(
  "e4@0.5 g4@0.5 a4@2",
  "b3@0.5 e4@0.5 g4@0.5 a4@2"
))
  .s("sawtooth").lpf(1500)

stack(
  brass,
  s("bd*4")
)
```

### 69. Chariots of Fire
```javascript
// Chariots of Fire
setcps(0.6)
const melody = note(cat(
  "c4@0.5 f4@0.5 g4@0.5 a4@1.5 g4@1",
  "c4@0.5 f4@0.5 g4@0.5 a4@0.5 g4@2"
))
  .s("superpiano").lpf(2000)

const arp = note("c3 g3 c4 g3")
  .s("sine")

stack(
  melody,
  arp
)
```

### 70. Titanic (My Heart Will Go On)
```javascript
// My Heart Will Go On
setcps(0.45)
const flutes = note(cat(
  "e4@1 e4@0.5 e4@0.5 e4@2",
  "d#4@1 e4@1 e4@1.5 d#4@0.5",
  "e4@1 f#4@1 g#4@2"
))
  .s("supermandolin")

const pad = note("e3 b3 c#4 a3")
  .s("supersaw").attack(0.5)

stack(
  flutes,
  pad
)
```

---

## Category 6: 90s & 2000s Hits

### 71. Toxic (Britney Spears)
```javascript
// Toxic
setcps(0.6)
const riff = note(cat(
  "c5@0.5 c5@0.5 eb5@0.5 c5@0.5 db5@0.5 c5@0.5 bb4@0.5 c5@0.5",
  "~ ~ ~ ~"
))
  .s("sawtooth").lpf(3000)

stack(
  riff,
  s("bd*2")
)
```

### 72. Umbrella (Rihanna)
```javascript
// Umbrella
setcps(0.6)
const melody = note(cat(
  "a4@0.5 c5@0.5 c5@0.5 c5@0.5 b4@0.5 b4@0.5 b4@0.5 b4@0.5"
))
  .s("superpwm")

const bass = note("f3")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*4")
)
```

### 73. Crazy in Love (Beyonce)
```javascript
// Crazy in Love
setcps(0.6)
const brass = note(cat(
  "d4@0.5 d4@0.5 a4@0.5 d4@0.5 f4@0.5 d4@1 f4@0.5 d4@0.5",
  "c4@0.5 c4@0.5 g4@0.5 c4@0.5 e4@0.5 c4@1 e4@0.5 c4@0.5"
))
  .s("sawtooth").lpf(1500)

stack(
  brass,
  s("bd sd")
)
```

### 74. Single Ladies
```javascript
// Single Ladies
setcps(0.6)
const synth = note(cat(
  "e4@0.5 b4@0.5 e4@0.5 b4@0.5 e4@0.5 b4@0.5 c#5@1"
))
  .s("superpwm")

const clap = s("clap*4")

stack(
  synth,
  clap
)
```

### 75. Rehab (Amy Winehouse)
```javascript
// Rehab
setcps(0.6)
const melody = note(cat(
  "c4@1 g4@0.5 f4@0.5 e4@0.5 c4@1.5",
  "d4@0.5 c4@3.5"
))
  .s("superpiano")

const bass = note("c3 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd sd")
)
```

### 76. Hey Ya! (OutKast)
```javascript
// Hey Ya!
setcps(0.6)
const chords = note(cat(
  "g3:major@4 c4:major@4 d4:major@2 e4:major@4"
)).slow(3.5)
  .s("supersaw").attack(0.1)

stack(
  chords,
  s("bd*4")
)
```

### 77. Crazy (Gnarls Barkley)
```javascript
// Crazy
setcps(0.6)
const bass = note(cat(
  "c3@1 c3@0.5 eb3@0.5 g3@1 bb3@0.5 g3@0.5",
  "ab3@1 ab3@0.5 f3@0.5 eb3@1 c3@1"
))
  .s("bass")

stack(
  bass,
  s("hh*4")
)
```

### 78. Yellow (Coldplay)
```javascript
// Yellow
setcps(0.4)
const chords = note(cat(
  "b3:major@4 f#3:major@4 e3:major@4"
)).slow(3)
  .s("supermandolin") // acoustic guitar

stack(
  chords,
  s("bd")
)
```

### 79. Clocks (Coldplay)
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
  s("bd*4")
)
```

### 80. Viva La Vida (Coldplay)
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

### 81. I Gotta Feeling (Black Eyed Peas)
```javascript
// I Gotta Feeling
setcps(0.6)
const riff = note(cat(
  "g4@1 g4@0.5 c4@0.5 b3@0.5 c4@1.5",
  "g4@1 g4@0.5 c4@0.5 b3@0.5 c4@1.5"
))
  .s("supermandolin")

stack(
  riff,
  s("bd*4")
)
```

### 82. Fireflies (Owl City)
```javascript
// Fireflies
setcps(0.6)
const melody = note(cat(
  "bb4@0.5 f5@0.5 eb5@0.5 bb4@0.5 g4@0.5 bb4@0.5 f5@0.5 eb5@0.5",
  "bb4@0.5 g4@0.5 f4@0.5 g4@0.5 eb4@1 eb4@1"
))
  .s("sine")

stack(
  melody,
  s("bd*2")
)
```

### 83. Moves Like Jagger
```javascript
// Moves Like Jagger
setcps(0.6)
const riff = note(cat(
  "b4@0.5 b4@0.5 b4@0.5 b4@0.5 e4@0.5 g4@0.5 a4@0.5 b4@0.5"
))
  .s("sawtooth").lpf(1500) // whistling

const bass = note("b2 g2")
  .s("bass")

stack(
  riff,
  bass,
  s("bd sd")
)
```

### 84. Get Lucky (Daft Punk)
```javascript
// Get Lucky
setcps(0.6)
const chords = note(cat(
  "b3:minor7@2 d4:minor7@2 f#4:minor7@2 e4:minor7@2"
)).slow(2)
  .s("superpiano") // funky guitar

const bass = note("b2 d3 f#3 e3")
  .s("bass")

stack(
  chords,
  bass,
  s("bd sd")
)
```

### 85. Happy (Pharrell)
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

## Category 7: Video Game Favorites

### 86. Portal (Still Alive)
```javascript
// Still Alive
setcps(0.6)
const melody = note(cat(
  "g4@0.5 f#4@0.5 e4@0.5 e4@0.5 f#4@2",
  "a3@0.5 a3@0.5 e4@0.5 d4@0.5 c#4@0.5 d4@0.5 e4@0.5 a3@0.5",
  "a3@0.5 e4@0.5 f#4@0.5"
))
  .s("supermandolin")

stack(
  melody,
  s("bd*2")
)
```

### 87. Skyrim (Dragonborn)
```javascript
// Dragonborn
setcps(0.4)
const melody = note(cat(
  "b3@1 a3@0.5 b3@0.5 c#4@1 b3@1",
  "d4@0.5 c#4@0.5 b3@0.5 a3@0.5 g3@1 a3@1",
  "b3@3"
))
  .s("sawtooth").lpf(1000)

const drums = s("bd*2").amp(1.2)

stack(
  melody,
  drums
)
```

### 88. Among Us (Drip Theme)
```javascript
// Among Us
setcps(0.6)
const melody = note(cat(
  "c4@0.5 eb4@0.5 f4@0.5 f#4@0.5 f4@0.5 eb4@0.5 c4@1",
  "bb3@0.25 d4@0.25 c4@1.5"
))
  .s("square")

stack(
  melody,
  s("bd sd")
)
```

### 89. Wii Shop Channel
```javascript
// Wii Shop Channel
setcps(0.6)
const melody = note(cat(
  "d4@1 a4@0.5 g4@0.5 d4@0.5 c4@0.5 d4@1",
  "a4@1 g4@0.5 f#4@0.5 e4@0.5 d4@0.5 c#4@0.5 a3@0.5"
))
  .s("superpwm")

const bass = note("d3 a3")
  .s("bass")

stack(
  melody,
  bass,
  s("bongo")
)
```

### 90. Kahoot Music
```javascript
// Kahoot
setcps(0.6)
const melody = note(cat(
  "f4@0.5 f4@0.5 c4@0.5 f4@0.5 g4@0.5 f4@0.5 c4@0.5 f4@0.5",
  "d4@0.5 c4@0.5 d4@0.5 c4@0.5 b3@0.5 a3@0.5 g3@0.5 a3@0.5"
))
  .s("sawtooth").lpf(2000)

const bass = note("f2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*4")
)
```

### 91. Minecraft (Sweden)
```javascript
// Sweden
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
  melody
)
```

### 92. Minecraft (Pigstep)
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

### 93. Plants vs Zombies (Loonboon)
```javascript
// Loonboon
setcps(0.6)
const melody = note(cat(
  "c4@0.5 g4@0.5 c5@0.5 g4@0.5 a4@0.5 c4@0.5 bb4@0.5 a4@0.5",
  "g4@0.5 c4@0.5 f4@0.5 g4@0.5 ab4@0.5 g4@0.5 f4@0.5 e4@0.5"
))
  .s("supermandolin")

stack(
  melody,
  s("bd*2")
)
```

### 94. Undertale (Megalovania)
```javascript
// Megalovania
setcps(0.6)
const riff = note(cat(
  "d4@0.25 d4@0.25 d5@0.5 a4@0.75 ab4@0.5 g4@0.5 f4@0.5 d4@0.25 f4@0.25 g4@0.25"
))
  .s("square").lpf(2000)

stack(
  riff,
  s("bd sd")
)
```

### 95. Tetris (Theme A)
```javascript
// Tetris
setcps(0.6)
const melody = note(cat(
  "e5@1 b4@0.5 c5@0.5 d5@1 c5@0.5 b4@0.5",
  "a4@1 a4@0.5 c5@0.5 e5@1 d5@0.5 c5@0.5",
  "b4@1.5 c5@0.5 d5@1 e5@1",
  "c5@1 a4@1 a4@2"
))
  .s("square")

const bass = note("e2 a2 d2 g2")
  .s("bass")

stack(
  melody,
  bass,
  s("snare*4")
)
```

---

## Category 8: Classical & Traditional Favorites

### 96. Moonlight Sonata (Beethoven)
```javascript
// Moonlight Sonata
setcps(0.6)
const arp = note(cat(
  "g#2@1 c#3@1 e3@1 g#2@1 c#3@1 e3@1",
  "g#2@1 c#3@1 e3@1 g#2@1 c#3@1 e3@1",
  "a2@1 c#3@1 e3@1 a2@1 c#3@1 e3@1",
  "f#2@1 d3@1 f#3@1 a2@1 d3@1 f#3@1"
))
  .s("superpiano")

const bass = note("c#2@3 a1@3")
  .s("superpiano")

stack(
  arp,
  bass
)
```

### 97. In the Hall of the Mountain King
```javascript
// Hall of the Mountain King
setcps(0.6)
const melody = note(cat(
  "b2@0.5 c#3@0.5 d3@0.5 e3@0.5 f#3@0.5 d3@0.5 f#3@1",
  "f#3@0.5 c#3@0.5 f#3@1 f#3@0.5 c#3@0.5 f#3@1",
  "b2@0.5 c#3@0.5 d3@0.5 e3@0.5 f#3@0.5 d3@0.5 f#3@1",
  "d3@0.5 b2@0.5 d3@1 b2@2"
))
  .s("sawtooth").lpf(1000)

const bass = note("b1 f#2")
  .s("bass")

stack(
  melody,
  bass,
  s("bd*4")
)
```

### 98. William Tell Overture (Finale)
```javascript
// William Tell
setcps(0.6)
const melody = note(cat(
  "e4@0.5 e4@0.5 e4@0.5 f4@0.5 g4@2",
  "g4@0.5 g4@0.5 f4@0.5 e4@0.5 d4@2",
  "d4@0.5 d4@0.5 e4@0.5 f4@0.5 g4@2",
  "e4@0.5 d4@0.5 c4@0.5 b3@0.5 a3@2"
))
  .s("sawtooth").lpf(2000)

const drums = s("bd*2 sd*2")

stack(
  melody,
  drums
)
```

### 99. Ride of the Valkyries
```javascript
// Ride of the Valkyries
setcps(0.6)
const melody = note(cat(
  "b3@1.5 e4@0.5 g4@1.5 b4@0.5 g4@2",
  "b3@1.5 g4@0.5 b4@1.5 e5@0.5 b4@2",
  "b3@1.5 e4@0.5 g4@1.5 b4@0.5 e5@2"
))
  .s("sawtooth")

const bass = note("e2 b2")
  .s("bass")

stack(
  melody,
  bass,
  s("snare")
)
```

### 100. Carol of the Bells
```javascript
// Carol of the Bells
setcps(0.6)
const melody = note(cat(
  "bb4@0.5 a4@0.5 bb4@0.5 g4@0.5",
  "bb4@0.5 a4@0.5 bb4@0.5 g4@0.5",
  "bb4@0.5 a4@0.5 bb4@0.5 g4@0.5",
  "bb4@0.5 a4@0.5 bb4@0.5 g4@0.5"
))
  .s("supermandolin")

const bass = note("g2")
  .s("bass")

stack(
  melody,
  bass,
  s("hh*4")
)
```
