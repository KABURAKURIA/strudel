# 100 More Famous Kenyan Songs (Strudel Guide)

This guide is a continuation of our Kenyan music collection, featuring another 100 arrangements of famous tunes. This list covers the Golden Age of Kapuka/Genge, the Sauti Sol era, Gengetone, Hip Hop giants, and more.

## How to Use
Copy the code block for the song you want to hear into the Kunguru Algo (Strudel) REPL.

---

## Category 1: Golden Age Kapuka & Genge (Nameless, Nonini, Redsan)

### 1. Megarider (Nameless)
```javascript
// Megarider
setcps(0.55)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1",
  "b4@1 a4@1 g4@2"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 f3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 2. Juju (Nameless)
```javascript
// Juju
setcps(0.6)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .gain(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 3. Sunshine (Nameless)
```javascript
// Sunshine
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.7)

// 2. CHORDS (Em)
const chords = note("e3 a3 b3 e3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd*4")
)
```

### 4. Salari (Nameless)
```javascript
// Salari
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 5. Deadly (Nameless)
```javascript
// Deadly
setcps(0.65)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 6. We Kamu (Nonini)
```javascript
// We Kamu
setcps(0.5)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Knock)
const knock = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  knock,
  s("bd sd")
)
```

### 7. Keroro (Nonini)
```javascript
// Keroro
setcps(0.55)

// 1. MELODY (Whistle)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sine").portamento(0.1)
  .gain(0.4)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3 b2 e3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 8. Manzi wa Nairobi (Nonini)
```javascript
// Manzi wa Nairobi
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 9. Furahiday (Nonini)
```javascript
// Furahiday
setcps(0.5)

// 1. MELODY (Synth)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 bb3 c3 f3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Crowd)
const crowd = s("glitch")
  .gain(0.4)

stack(
  melody,
  chords,
  crowd,
  s("bd*4")
)
```

### 10. Mtoto Mzuri (Nonini)
```javascript
// Mtoto Mzuri
setcps(0.55)

// 1. MELODY (Pluck)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 11. Ngeli ya Genge (Jua Cali)
```javascript
// Ngeli ya Genge
setcps(0.48)

// 1. MELODY (Strings)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .attack(0.2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Drum)
const drum = s("bd")
  .gain(0.5)

stack(
  melody,
  chords,
  drum,
  s("bd sd")
)
```

### 12. Kiasi (Jua Cali)
```javascript
// Kiasi
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 f3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 13. Si Lazima (P-Unit)
```javascript
// Si Lazima
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .shape(0.4)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3 b2 e3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 14. Kare (P-Unit)
```javascript
// Kare
setcps(0.55)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Hit)
const hit = s("bd")
  .gain(0.5)

stack(
  melody,
  chords,
  hit,
  s("bd*4")
)
```

### 15. You Guy (P-Unit)
```javascript
// You Guy
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (Dm)
const chords = note("d3 g3 a3 d3")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 16. Gentleman (P-Unit)
```javascript
// Gentleman
setcps(0.58)

// 1. MELODY (Piano)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 17. Juu (Redsan)
```javascript
// Juu
setcps(0.65)

// 1. MELODY (Dancehall Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(4)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Siren)
const siren = s("sine").shape(0.5)
  .gain(0.3)

stack(
  melody,
  chords,
  siren,
  s("bd*4")
)
```

### 18. Chicken (Redsan)
```javascript
// Chicken
setcps(0.68)

// 1. MELODY (Synth)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 19. Apakatwe (Redsan)
```javascript
// Apakatwe
setcps(0.6)

// 1. MELODY (Organ)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 20. Shoulder Back (Redsan)
```javascript
// Shoulder Back
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 21. Tuol (Necessary Noize)
```javascript
// Tuol
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3 b2 e3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 22. Bless My Room (Necessary Noize)
```javascript
// Bless My Room
setcps(0.48)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 23. Kenyan Boy, Kenyan Girl (Necessary Noize)
```javascript
// Kenyan Boy, Kenyan Girl
setcps(0.52)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .room(0.4)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .gain(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 24. Nimetoka Mbali (Jimwat)
```javascript
// Nimetoka Mbali
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpiano")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 25. Sihitaji (Jimwat)
```javascript
// Sihitaji
setcps(0.48)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .slow(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

---

## Category 2: The Sauti Sol Era & Afro-Pop

### 26. Isabella (Sauti Sol)
```javascript
// Isabella
setcps(0.45)

// 1. MELODY (Acoustic)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.7)

// 2. CHORDS (C Major)
const chords = note("c3 f3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.5)

// 3. IMPROV (Snap)
const snap = s("snap")
  .gain(0.5)

stack(
  melody,
  chords,
  snap,
  s("bd").slow(2)
)
```

### 27. Nishike (Sauti Sol)
```javascript
// Nishike
setcps(0.4)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano").lpf(1000)
  .room(0.8)
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd").slow(2)
)
```

### 28. Nerea (Sauti Sol)
```javascript
// Nerea
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("rim*4")
)
```

### 29. Live and Die in Afrika (Sauti Sol)
```javascript
// Live and Die in Afrika
setcps(0.52)

// 1. MELODY (Kalimba)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sine").decay(0.5)
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .gain(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 30. Shake Yo Bam Bam (Sauti Sol)
```javascript
// Shake Yo Bam Bam
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 31. Still the One (Sauti Sol)
```javascript
// Still the One
setcps(0.48)

// 1. MELODY (Piano)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.7)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 32. Rhumba Japani (Sauti Sol)
```javascript
// Rhumba Japani
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Conga)
const conga = s("bongo")
  .gain(0.5)

stack(
  melody,
  chords,
  conga,
  s("bd sd")
)
```

### 33. Brighter Days (Sauti Sol)
```javascript
// Brighter Days
setcps(0.5)

// 1. MELODY (Choir)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("vowel")
  .vowel("a")
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 34. Lil Mama (Sauti Sol)
```javascript
// Lil Mama
setcps(0.52)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 35. My Everything (Sauti Sol)
```javascript
// My Everything
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.7)

// 2. CHORDS (C Major)
const chords = note("c3 f3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 36. Nairobi (Bensoul)
```javascript
// Nairobi
setcps(0.48)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 37. Forget You (Bensoul)
```javascript
// Forget You
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 38. Peddi (Bensoul)
```javascript
// Peddi
setcps(0.55)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Hat)
const hat = s("hh")
  .gain(0.4)

stack(
  melody,
  chords,
  hat,
  s("bd sd")
)
```

### 39. Pombe Sigara (Nviiri)
```javascript
// Pombe Sigara
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 f3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 40. Niko Sawa (Nviiri)
```javascript
// Niko Sawa
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpiano")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .gain(0.5)

stack(
  melody,
  chords,
  snap,
  s("bd sd")
)
```

### 41. Kitenge (Nviiri)
```javascript
// Kitenge
setcps(0.48)

// 1. MELODY (Acoustic)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 42. Inauma (Bien)
```javascript
// Inauma
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 43. Mbwe Mbwe (Bien)
```javascript
// Mbwe Mbwe
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .shape(0.4)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 44. Aiyana (Otile Brown)
```javascript
// Aiyana
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpiano")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 45. Hi (Otile Brown)
```javascript
// Hi
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 46. Alivyonipenda (Otile Brown)
```javascript
// Alivyonipenda
setcps(0.55)

// 1. MELODY (Organ)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 47. Woman (Otile Brown)
```javascript
// Woman
setcps(0.48)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .gain(0.5)

stack(
  melody,
  chords,
  snap,
  s("bd sd")
)
```

### 48. Such Kinda Love (Otile Brown)
```javascript
// Such Kinda Love
setcps(0.5)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 49. Dala Dala (Otile Brown)
```javascript
// Dala Dala
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 50. Kiboko (Masauti)
```javascript
// Kiboko
setcps(0.55)

// 1. MELODY (Pluck)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

---

## Category 3: Hip Hop Giants & New School

### 51. Mazishi (Khaligraph Jones)
```javascript
// Mazishi
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c3@1 eb3@1 g3@1 c4@1"
))
  .s("sawtooth")
  .lpf(1000)
  .velocity(0.9)

// 2. CHORDS (Cm)
const chords = note("c2 g2 c2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Sub)
const sub = note("0")
  .scale("C:minor")
  .s("sine")
  .gain(0.7)

stack(
  melody,
  chords,
  sub,
  s("bd sd")
)
```

### 52. Yego (Khaligraph Jones)
```javascript
// Yego
setcps(0.65)

// 1. MELODY (Lead)
const melody = note(cat(
  "e3@1 g3@1 b3@1 e4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e2 b1 e2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Trap Hat)
const hat = s("hh*8")
  .gain(0.5)

stack(
  melody,
  chords,
  hat,
  s("bd sd")
)
```

### 53. Tuma Kitu (Khaligraph Jones)
```javascript
// Tuma Kitu
setcps(0.62)

// 1. MELODY (Pluck)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (808)
const bass808 = s("808")
  .gain(0.7)

stack(
  melody,
  chords,
  bass808,
  s("bd sd")
)
```

### 54. Hao (Khaligraph Jones)
```javascript
// Hao
setcps(0.6)

// 1. MELODY (Choir)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("vowel")
  .vowel("o")
  .velocity(0.8)

// 2. CHORDS (Dm)
const chords = note("d3 g3 a3 d3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Snare)
const snare = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  snare,
  s("bd sd")
)
```

### 55. Yes Bana (Khaligraph Jones)
```javascript
// Yes Bana
setcps(0.64)

// 1. MELODY (Synth)
const melody = note(cat(
  "g3@1 bb3@1 d4@1 g4@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (Gm)
const chords = note("g2 d2 g2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Chant)
const chant = s("glitch")
  .gain(0.5)

stack(
  melody,
  chords,
  chant,
  s("bd sd")
)
```

### 56. Kwendaa (Khaligraph Jones)
```javascript
// Kwendaa
setcps(0.66)

// 1. MELODY (Brass)
const melody = note(cat(
  "f3@1 ab3@1 c4@1 f4@1"
))
  .s("sawtooth").lpf(2000)
  .staccato(0.5)
  .velocity(0.9)

// 2. CHORDS (Fm)
const chords = note("f2 c2 f2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Kick)
const kick = s("bd*4")
  .gain(0.8)

stack(
  melody,
  chords,
  kick,
  s("sd")
)
```

### 57. Micasa Sucasa (Khaligraph Jones)
```javascript
// Micasa Sucasa
setcps(0.58)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e3@1 g3@1 b3@1 e4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e2 b1 e2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:minor")
  .s("bass")
  .gain(0.5)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 58. Namba Nane (Octopizzo)
```javascript
// Namba Nane
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Cm)
const chords = note("c3 g2 c3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Hat)
const hat = s("hh*4")
  .gain(0.5)

stack(
  melody,
  chords,
  hat,
  s("bd sd")
)
```

### 59. Ivo Ivo (Octopizzo)
```javascript
// Ivo Ivo
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (Dm)
const chords = note("d3 a2 d3")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 60. Something for You (Octopizzo)
```javascript
// Something for You
setcps(0.55)

// 1. MELODY (Piano)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 61. Oliel (Octopizzo)
```javascript
// Oliel
setcps(0.65)

// 1. MELODY (Percussive Lead)
const melody = note(cat(
  "g3@1 bb3@1 d4@1 g4@1"
))
  .s("sine").decay(0.5)
  .fast(4)
  .velocity(0.8)

// 2. CHORDS (Gm)
const chords = note("g2 d2 g2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (808)
const bass808 = s("808")
  .gain(0.7)

stack(
  melody,
  chords,
  bass808,
  s("bd sd")
)
```

### 62. Wakiritho (Octopizzo)
```javascript
// Wakiritho
setcps(0.68)

// 1. MELODY (Synth)
const melody = note(cat(
  "e3@1 g3@1 b3@1 e4@1"
))
  .s("sawtooth")
  .shape(0.5)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e2 b1 e2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Snare Roll)
const roll = s("sd*4")
  .gain(0.5)

stack(
  melody,
  chords,
  roll,
  s("bd")
)
```

### 63. Dundaing (King Kaka)
```javascript
// Dundaing
setcps(0.6)

// 1. MELODY (Pluck)
const melody = note(cat(
  "f3@1 ab3@1 c4@1 f4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Fm)
const chords = note("f2 c2 f2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:minor")
  .s("bass")
  .gain(0.5)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 64. Wajinga Nyinyi (King Kaka)
```javascript
// Wajinga Nyinyi
setcps(0.5)

// 1. MELODY (Spoken/Piano)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("superpiano")
  .room(0.8)
  .velocity(0.7)

// 2. CHORDS (Cm)
const chords = note("c3 g2 c3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Atmosphere)
const atmo = s("noise")
  .gain(0.3)

stack(
  melody,
  chords,
  atmo,
  s("bd").slow(2)
)
```

### 65. Utawezana (Femi One)
```javascript
// Utawezana
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 66. Tippy Toe (Femi One)
```javascript
// Tippy Toe
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "g3@1 bb3@1 d4@1 g4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Gm)
const chords = note("g2 d2 g2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 67. Ex (Nikita Kering)
```javascript
// Ex
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .gain(0.5)

stack(
  melody,
  chords,
  snap,
  s("bd sd")
)
```

### 68. Crossing Lines (Nikita Kering)
```javascript
// Crossing Lines
setcps(0.48)

// 1. MELODY (Strings)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .slow(2)
  .velocity(0.7)

// 2. CHORDS (Dm)
const chords = note("d3 g3 a3 d3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Drum)
const drum = s("bd")
  .gain(0.5)

stack(
  melody,
  chords,
  drum,
  s("bd").slow(2)
)
```

### 69. Najua (Maandy)
```javascript
// Najua
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 70. Sirudi Home (Maandy)
```javascript
// Sirudi Home
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

---

## Category 4: Gengetone & Viral Hits

### 71. Pekejeng (Sailors)
```javascript
// Pekejeng
setcps(0.65)

// 1. MELODY (Whistle)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sine").portamento(0.1)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Shout)
const shout = s("glitch")
  .gain(0.5)

stack(
  melody,
  chords,
  shout,
  s("bd sd")
)
```

### 72. Queen B (Sailors)
```javascript
// Queen B
setcps(0.66)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 73. Kaa Na Mama Yako (Ochungulo Family)
```javascript
// Kaa Na Mama Yako
setcps(0.64)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 74. Na Iwake (Ochungulo Family)
```javascript
// Na Iwake
setcps(0.68)

// 1. MELODY (Sirens/Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Chant)
const chant = s("glitch")
  .gain(0.5)

stack(
  melody,
  chords,
  chant,
  s("bd*4")
)
```

### 75. Mbogi Genje (Kidungi)
```javascript
// Mbogi Genje
setcps(0.6)

// 1. MELODY (Dark Synth)
const melody = note(cat(
  "e3@1 g3@1 b3@1 e4@1"
))
  .s("sawtooth")
  .lpf(1000)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e2 b1 e2")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (808)
const bass808 = s("808")
  .gain(0.7)

stack(
  melody,
  chords,
  bass808,
  s("bd sd")
)
```

### 76. Zimenice (Chris Kaiga)
```javascript
// Zimenice
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 77. Chain Chain (Chris Kaiga)
```javascript
// Chain Chain
setcps(0.58)

// 1. MELODY (Organ)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 78. Kishash (Ndovu Kuu)
```javascript
// Kishash
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 79. Ndovu Ni Kuu (Ndovu Kuu)
```javascript
// Ndovu Ni Kuu
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 80. Ma Stingo (Ethic)
```javascript
// Ma Stingo
setcps(0.65)

// 1. MELODY (Pluck)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 81. Pandana (Ethic)
```javascript
// Pandana
setcps(0.63)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3 b2 e3")
  .chord("minor")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 82. Figa (Ethic)
```javascript
// Figa
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 83. Tarimbo (Ethic)
```javascript
// Tarimbo
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "g3@1 b3@1 d4@1 g4@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g2 d2 g2")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 84. Position (Ethic)
```javascript
// Position
setcps(0.65)

// 1. MELODY (Pluck)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 85. Rieng (Boondocks Gang)
```javascript
// Rieng
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 86. Vaida (Harry Richie)
```javascript
// Vaida
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Conga)
const conga = s("bongo")
  .gain(0.5)

stack(
  melody,
  chords,
  conga,
  s("bd sd")
)
```

### 87. Firirida (Dick Munyonyi)
```javascript
// Firirida
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 88. Sipangwingwi (Exray)
```javascript
// Sipangwingwi
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

---

## Category 5: Gospel & Classics

### 89. Kazi ya Msalaba (Daddy Owen)
```javascript
// Kazi ya Msalaba
setcps(0.65)

// 1. MELODY (Brass)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth").lpf(2000)
  .staccato(0.5)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Snare)
const snare = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  snare,
  s("bd sd")
)
```

### 90. Saluti (Daddy Owen)
```javascript
// Saluti
setcps(0.68)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Hit)
const hit = s("bd")
  .gain(0.5)

stack(
  melody,
  chords,
  hit,
  s("bd*4")
)
```

### 91. Lingala Ya Yesu (Pitson)
```javascript
// Lingala Ya Yesu
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 92. Ni Msoh (Pitson)
```javascript
// Ni Msoh
setcps(0.58)

// 1. MELODY (Organ)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 93. Thitima (Kymo & Stigah)
```javascript
// Thitima
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 94. Odi Dance (Timeless Noel)
```javascript
// Odi Dance
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 95. Vimbada (Moji Shortbabaa)
```javascript
// Vimbada
setcps(0.64)

// 1. MELODY (Synth)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3 c3 f3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .gain(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 96. Furi Furi (Jimmy Gait)
```javascript
// Furi Furi
setcps(0.65)

// 1. MELODY (Pluck)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3 c3 d3 g3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 97. Huratiti (Jimmy Gait)
```javascript
// Huratiti
setcps(0.66)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3 g3 a3 d3")
  .chord("major")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .gain(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 98. Muhadhara (Jimmy Gait)
```javascript
// Muhadhara
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3 f3 g3 c3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .gain(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 99. Appointment (Jimmy Gait)
```javascript
// Appointment
setcps(0.55)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3 a3 b3 e3")
  .chord("major")
  .s("supersaw").attack(0.5)
  .gain(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:major")
  .s("bass")
  .gain(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 100. Bad Mind (Wyre)
```javascript
// Bad Mind
setcps(0.6)

// 1. MELODY (Reggae Keys)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2 e2 a2")
  .chord("minor")
  .s("superpiano")
  .gain(0.6)

// 3. IMPROV (Bubble)
const bubble = note("0")
  .scale("A:minor")
  .s("sine")
  .gain(0.4)

stack(
  melody,
  chords,
  bubble,
  s("bd sd")
)
```
