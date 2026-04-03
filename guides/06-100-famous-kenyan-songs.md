# 100 Famous Kenyan Songs (Strudel Guide)

This guide contains 100 Strudel arrangements of famous Kenyan tunes, spanning from Zilizopendwa classics to modern Afro-pop and Genge. These examples utilize advanced features like `stack()`, complex rhythms, and effects to capture the authentic Kenyan sound.

## How to Use
Copy the code block for the song you want to hear into the Strudel REPL.

---

## Category 1: National Anthems & Patriotic

### 1. Kenya National Anthem (Ee Mungu Nguvu Yetu)
```javascript
// Kenya National Anthem - Orchestral
// 1. Set Tempo: Solemn
setcps(0.4)

// 2. THE MELODY (Accurate)
// Ee Mungu nguvu yetu (D F# A D) / Ilete baraka kwetu (C# B A F# G A)
const melody = note(cat(
  "d4@1.5 f#4@0.5 a4@1 d5@1 c#5@1.5 b4@0.5",
  "a4@1 f#4@1 g4@1 a4@1",
  "g4@1.5 f#4@0.5 e4@1 d4@3"
))
  .s("sawtooth").lpf(2000)
  .room(1.5)
  .lpf(2000)
  .velocity(0.9)

// 3. THE CHORDS (D Major -> A Major -> D Major)
const chords = note(cat(
  "d3:major@4 a2:major@2",
  "d3:major@2 g2:major@2 a2:major@2 d3:major@2",
  "a2:major@2 d3:major@2 a2:major@2 d3:major@3"
)).slow(2.25)

  .s("supersaw").attack(0.1).release(0.8)
  .slow(1)
  .amp(0.6)

// 4. IMPROV (Background Horns)
const riffs = note("0 4 7 4 0")
  .scale("D:major")
  .s("sawtooth").lpf(1500)
  .amp(0.4)
  .struct("t(3,8)")

stack(
  melody,
  chords,
  riffs,
  s("bd").amp(1.2).shape(0.5).slow(4).amp(0.8)
)
```

### 2. Daima (Eric Wainaina)
```javascript
// Daima (Mkenya Daima) - Afro-Fusion
setcps(0.5)

// 1. MELODY (Daima mimi mkenya...)
const melody = note(cat(
  "c4@1 d4@1 e4@1 g4@3",
  "g4@1 a4@1 g4@1 e4@1 d4@1 c4@3"
)).slow(2)
  .s("sine").decay(0.5)
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (C -> F -> C)
const chords = note(cat(
  "c3:major@3 f3:major@3",
  "c3:major@4 g3:major@2 c3:major@2"
)).slow(2)

  .s("superpiano")
  .velocity(0.6)

// 3. IMPROV (Background Flute)
const improv = note("4 2 0")
  .scale("C:pentatonic")
  .s("triangle")
  .amp(0.3)
  .delay(0.5)

stack(
  melody,
  chords,
  improv,
  s("shaker*8").amp(0.4),
  s("bd sd").slow(2)
)
```

### 3. Tushangilie Kenya (Mwalimu Thomas Wasonga)
```javascript
// Tushangilie Kenya
setcps(0.6)

// 1. MELODY (Tushangilie Kenya...)
const melody = note(cat(
  "g4@1 g4@1 c5@2 c5@2",
  "b4@1 a4@1 g4@4"
))
  .s("vowel")
  .vowel("a")
  .room(2)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major c3:major g3:major")

  .s("superpwm")
  .slow(2)
  .amp(0.7)

// 3. IMPROV (Trumpet Fanfare)
const fanfare = note("0 0 0 4")
  .scale("C:major")
  .s("sawtooth").lpf(2500)
  .amp(0.4)
  .struct("t(2,8)")

stack(
  melody,
  chords,
  fanfare,
  s("snare*4").velocity("0.6 0.3")
)
```

### 4. My Land is Kenya (Roger Whittaker)
```javascript
// My Land is Kenya
setcps(0.45)

// 1. MELODY (You only got one land...)
const melody = note(cat(
  "e4@1 g4@1 c5@2",
  "b4@1 a4@1 g4@1 e4@2"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C -> F -> C)
const chords = note("c3:major f3:major c3:major")

  .s("supermandolin")
  .slow(2)
  .amp(0.6)

// 3. IMPROV (Whistle)
const whistle = note("7 4 0")
  .scale("C:major")
  .s("sine").portamento(0.1)
  .amp(0.3)
  .delay(0.5)

stack(
  melody,
  chords,
  whistle,
  s("bird").rarely(x=>x.amp(0.3))
)
```

### 5. Harambee (Daudi Kabaka)
```javascript
// Harambee
setcps(0.6)

// 1. MELODY (Harambee, harambee...)
const melody = note(cat(
  "g4@1 a4@1 b4@2",
  "g4@1 c5@1 b4@1 a4@3"
))
  .s("supermandolin")
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major c4:major d4:major g3:major")

  .s("supermandolin")
  .velocity(0.6)

// 3. IMPROV (Benga Lick)
const lick = note("4 2 0")
  .scale("G:major")
  .s("supermandolin")
  .amp(0.4)
  .fast(2)

stack(
  melody,
  chords,
  lick,
  s("rim*4").amp(0.8)
)
```

---

## Category 2: Zilizopendwa Classics

### 6. Jambo Bwana (Them Mushrooms)
```javascript
// Jambo Bwana - Accurate Melody
setcps(0.65)

// 1. MELODY (Jambo, Jambo Bwana...)
const melody = note(cat(
  "g4@1.5 g4@0.5 f#4@1 g4@1 a4@4", // Jambo, Jambo Bwana
  "~ g4@1 a4@1 b4@1 c5@4",        // Habari gani
  "~ b4@1 a4@1 g4@4"              // Nzuri sana
)).slow(2)
  .s("superpwm")
  .lpf(2000)
  .velocity(0.9)

// 2. CHORDS (G -> D -> G -> C)
const chords = note(cat(
  "g3:major@8",
  "d3:major@8",
  "g3:major@4 c4:major@4"
)).slow(2)

  .s("superpiano")
  .velocity(0.6)

// 3. IMPROV (Marimba Fill)
const fill = note("0 2 4 2 0")
  .scale("G:major")
  .s("sine").decay(0.5)
  .amp(0.4)
  .struct("t(3,8)")

stack(
  melody,
  chords,
  fill,
  s("shaker*8").amp(0.8)
)
```

### 7. Malaika (Fadhili William)
```javascript
// Malaika - Accurate Melody
setcps(0.5)

// 1. MELODY (Malaika, nakupenda Malaika)
const melody = note(cat(
  "a4@1.5 g4@0.5 f4@3",
  "~ f4@0.5 g4@0.5 a4@1 c5@1 a4@1 g4@1 f4@3"
)).slow(2.25)
  .s("supermandolin")
  .room(0.8)
  .velocity(0.9)

// 2. CHORDS (F -> Bb -> C -> F)
const chords = note(cat(
  "f3:major@4",
  "bb3:major@2 c4:major@2 f3:major@4"
)).slow(2)

  .s("superpiano")
  .velocity(0.6)

// 3. IMPROV (Guitar Noodle)
const noodle = note("4 2 0")
  .scale("F:major")
  .s("supermandolin")
  .amp(0.3)
  .delay(0.2)

stack(
  melody,
  chords,
  noodle,
  s("conga*4").n("<0 1>").pan(rand)
)
```

### 8. Helule Helule (Daudi Kabaka)
```javascript
// Helule Helule
setcps(0.7)

// 1. MELODY (Chorus)
const melody = note(cat(
  "c5@1 c5@1 b4@1 a4@1 g4@1 e4@3",
  "c5@1 c5@1 b4@1 a4@1 g4@1"
)).slow(2)
  .s("supermandolin")
  .shape(0.4)
  .velocity(0.9)

// 2. CHORDS (C -> G -> C)
const chords = note("c3:major g3:major c3:major")

  .s("supermandolin")
  .velocity(0.7)

// 3. IMPROV (Twist Riff)
const riff = note("0 0 4 7")
  .scale("C:major")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  riff,
  s("snare*4").velocity("0.8 0.4")
)
```

### 9. Pole Musa (Daudi Kabaka)
```javascript
// Pole Musa
setcps(0.6)

// 1. MELODY (Pole Musa...)
const melody = note(cat(
  "g4@1 a4@1 b4@2",
  "d5@1 b4@1 g4@2"
))
  .s("supermandolin")

  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major d3:major g3:major")

  .s("supermandolin")
  .amp(0.6)

// 3. IMPROV (Bass Run)
const bassRun = note("0 2 4")
  .scale("G:major")
  .s("bass")
  .amp(0.5)

stack(
  melody,
  chords,
  bassRun,
  s("rm").struct("x ~ x x")
)
```

### 10. Taxi Driver (Daudi Kabaka)
```javascript
// Taxi Driver
setcps(0.7)

// 1. MELODY (Guitar Lead)
const melody = note(cat(
  "c5@1 b4@1 a4@1 g4@1",
  "f4@1 e4@1 d4@1 c4@1"
))
  .s("supermandolin")
  .delay(0.2)
  .velocity(0.9)

// 2. CHORDS (C -> F -> G -> C)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supermandolin")
  .velocity(0.7)

// 3. IMPROV (Benga Pick)
const pick = note("7 0 7 4")
  .scale("C:major")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  pick,
  s("oh*8")
)
```

### 11. Sina Makosa (Les Wanyika)
```javascript
// Sina Makosa
setcps(0.55)

// 1. MELODY (Sax)
const melody = note(cat(
  "e4@1 g4@1 c5@2",
  "b4@1 a4@1 g4@1 f4@2"
))
  .s("sawtooth").lpf(2000)
  .legato(0.8)
  .velocity(0.9)

// 2. CHORDS (C -> F)
const chords = note("c3:major f3:major")

  .s("supermandolin")
  .delay(0.1)
  .amp(0.6)

// 3. IMPROV (Trumpet Fill)
const fill = note("0 2 4")
  .scale("C:major")
  .s("sawtooth").lpf(2500)
  .amp(0.4)

stack(
  melody,
  chords,
  fill,
  s("bongo").struct("x x ~ x").n("<0 2>")
)
```

### 12. Afro (Les Wanyika)
```javascript
// Afro
setcps(0.55)

// 1. MELODY (Brass)
const melody = note(cat(
  "g4@1 b4@1 d5@2",
  "c5@1 b4@1 a4@2"
))
  .s("sawtooth").lpf(2000)
  .lpf(2000)
  .velocity(0.9)

// 2. CHORDS (G -> C -> D -> G)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("superpiano")
  .velocity(0.6)

// 3. IMPROV (High Guitar)
const highGtr = note("7 12")
  .scale("G:major")
  .s("supermandolin")
  .amp(0.3)

stack(
  melody,
  chords,
  highGtr,
  s("guiro").slow(1)
)
```

### 13. Charonyi Ni Wasi (Maroon Commandos)
```javascript
// Charonyi Ni Wasi
setcps(0.6)

// 1. MELODY (Trumpet)
const melody = note(cat(
  "c4@1 e4@1 g4@2",
  "c5@1 g4@1 e4@2"
))
  .s("sawtooth").lpf(2500)
  .legato(0.5)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major g2:major c3:major")

  .s("supersquare").lpf(500)
  .amp(0.7)

// 3. IMPROV (Drum Roll)
const roll = s("snare*8")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("snare").struct("x x x/2 x/2 x")
)
```

### 14. Amka Kumekucha (Maroon Commandos)
```javascript
// Amka Kumekucha
setcps(0.65)

// 1. MELODY (Organ)
const melody = note(cat(
  "e4@1 g4@1 c5@2",
  "g4@1 e4@3"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Cowbell Solo)
const cb = s("cowbell*4")
  .amp(0.4)

stack(
  melody,
  chords,
  cb,
  s("cowbell*4")
)
```

### 15. Stella Wangu (Freshley Mwamburi)
```javascript
// Stella Wangu - Reggae
setcps(0.6)

// 1. MELODY
const melody = note(cat(
  "a4@1 c5@1 e5@2",
  "d5@1 c5@1 b4@1 a4@2"
))
  .s("sawtooth")
  .vibrato(2)
  .velocity(0.9)

// 2. CHORDS (Am -> G -> Am)
const chords = note("a3:minor g3:minor a3:minor")

  .s("superpwm")
  .chop(2)
  .amp(0.6)

// 3. IMPROV (Dub Echo)
const dub = note("0")
  .scale("A:minor")
  .s("sine")
  .delay(0.8)
  .amp(0.3)

stack(
  melody,
  chords,
  dub,
  s("bd").slow(2)
)
```

### 16. Shauri Yako (Orchestra Super Mazembe)
```javascript
// Shauri Yako
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@2",
  "g4@1 b4@1 d5@2"
))
  .s("supermandolin")
  .hpf(1000)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major d3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Sebene)
const sebene = note("0 2 4 2")
  .scale("G:major")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  sebene,
  s("snare").struct("x ~ x ~ x x ~ x")
)
```

### 17. Lunch Time (Gabriel Omollo)
```javascript
// Lunch Time
setcps(0.6)

// 1. MELODY (Whistle)
const melody = note(cat(
  "c4@1 d4@1 e4@1 g4@1",
  "a4@1 g4@3"
))
  .s("sine").portamento(0.1)
  .room(0.4)
  .velocity(0.9)

// 2. CHORDS (C -> F -> C)
const chords = note("c3:major f3:major c3:major")

  .s("supermandolin")
  .amp(0.6)

// 3. IMPROV (Shout)
const shout = s("glitch")
  .amp(0.3)

stack(
  melody,
  chords,
  shout,
  s("foot").slow(1)
)
```

### 18. Dereva Kombo (Fundi Konde)
```javascript
// Dereva Kombo
setcps(0.6)

// 1. MELODY (Clarinet)
const melody = note(cat(
  "f4@1 a4@1 c5@2",
  "a4@1 f4@3"
))
  .s("triangle")
  .velocity(0.8)

// 2. CHORDS (F -> Bb -> C -> F)
const chords = note("f3:major bb3:major c3:major f3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Clarinet Trill)
const trill = note("2 3 2 3")
  .scale("F:major")
  .s("triangle")
  .amp(0.4)

stack(
  melody,
  chords,
  trill,
  s("shaker*8")
)
```

### 19. Bwana Nipe Pesa (Super Mazembe)
```javascript
// Bwana Nipe Pesa
setcps(0.55)

// 1. MELODY (Sax)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth").lpf(2000)
  .amp(0.8)
  .velocity(0.9)

// 2. CHORDS (D Major)
const chords = note("d3:major a3:major d3:major")

  .s("supermandolin")
  .amp(0.6)

// 3. IMPROV (Cowbell)
const cb = s("cowbell*2")
  .amp(0.4)

stack(
  melody,
  chords,
  cb,
  s("cp").hpf(1000).struct("x x ~ x")
)
```

### 20. Kasongo (Les Wanyika)
```javascript
// Kasongo
setcps(0.6)

// 1. MELODY (Organ)
const melody = note(cat(
  "e4@1 g4@1 c5@2",
  "b4@1 a4@1 g4@2"
))
  .s("superpwm")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Conga Roll)
const roll = s("conga*4")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("conga*4").n("<0 1 2 1>")
)
```

---

## Category 3: The 2000s Pop Explosion (Ogopa/Calif)

### 21. Ninanoki (Nameless)
```javascript
// Ninanoki - Authentic Kapuka
setcps(0.7)

// 1. MELODY (Synth Lead)
const melody = note(cat(
  "c4@1 c4@1 ~ e4@1",
  "g4@1 ~ c5@1 c5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (C -> F -> G)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Filter Sweep)
const sweep = note("0@4")
  .scale("C:major")
  .s("sawtooth")
  .lpf(sine.slow(4).range(500, 3000))
  .amp(0.4)

stack(
  melody,
  chords,
  sweep,
  s("bd*2"),
  s("cp").slow(2).delay(0.5)
)
```

### 22. Sinzia (Nameless)
```javascript
// Sinzia - R&B
setcps(0.5)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "f4@1 a4@1 c5@2",
  "a4@1 g4@1 f4@2"
))
  .s("superpiano").lpf(1000)
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.8)

// 2. CHORDS (F -> C -> Bb)
const chords = note("f3:major c3:major bb2:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Vocal Adlib)
const adlib = s("vowel")
  .vowel("o")
  .amp(0.3)

stack(
  melody,
  chords,
  adlib,
  s("rim*4")
)
```

### 23. Boomba Train (E-Sir)
```javascript
// Boomba Train
setcps(0.72)

// 1. MELODY (Square Lead)
const melody = note(cat(
  "g3@1 b3@1 d4@1 b3@1"
))
  .s("square")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major d3:major g3:major")

  .s("sawtooth")
  .amp(0.6)

// 3. IMPROV (Hype)
const hype = s("glitch")
  .amp(0.5)

stack(
  melody,
  chords,
  hype,
  s("bd sd bd sd")
)
```

### 24. Mos Mos (E-Sir)
```javascript
// Mos Mos
setcps(0.47)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g4@1 b4@1 a4@1"
))
  .s("superpiano")
  .room(0.8)
  .velocity(0.8)

// 2. CHORDS (Em -> D -> C -> B7)
const chords = note("e3:minor d3:minor c3:minor b2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.5)

// 3. IMPROV (Guitar Lick)
const lick = note("0 2 4")
  .scale("E:minor")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  lick,
  s("kick").slow(2)
)
```

### 25. Leo ni Leo (E-Sir)
```javascript
// Leo ni Leo
setcps(0.7)

// 1. MELODY (Supersaw)
const melody = note(cat(
  "c4@1 c4@1 e4@1 g4@1"
))
  .s("supersaw")
  .decay(0.1)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Synth Stab)
const stab = note("0 4 7")
  .scale("C:major")
  .s("sawtooth")
  .amp(0.4)

stack(
  melody,
  chords,
  stab,
  s("bd*4")
)
```

### 26. Hamunitishi (E-Sir)
```javascript
// Hamunitishi
setcps(0.5)

// 1. MELODY (Strings)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .attack(0.1)
  .velocity(0.9)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Orch Hit)
const hit = note("0")
  .scale("A:minor")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.5)

stack(
  melody,
  chords,
  hit,
  s("kick snare")
)
```

### 27. Tuendelee (Kleptomaniax)
```javascript
// Tuendelee
setcps(0.47)

// 1. MELODY (Pluck)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .room(0.4)
  .velocity(0.8)

// 2. CHORDS (Cm -> Bb -> Ab)
const chords = note("c3:minor bb2:minor ab2:minor g2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.5)

// 3. IMPROV (Echo)
const echo = note("7 ~")
  .scale("C:minor")
  .delay(0.5)
  .amp(0.4)

stack(
  melody,
  chords,
  echo,
  s("bd sd")
)
```

### 28. Swing Swing (Kleptomaniax)
```javascript
// Swing Swing
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 b4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (High Lead)
const lead = note("7 7")
  .scale("G:major")
  .add(12)
  .amp(0.4)

stack(
  melody,
  chords,
  lead,
  s("bd sd")
)
```

### 29. Unbwogable (Gidi Gidi Maji Maji)
```javascript
// Unbwogable
setcps(0.47)

// 1. MELODY (Chant)
const melody = note(cat(
  "e4@1 g4@1 e4@1 d4@1"
))
  .s("vowel")
  .vowel("o")
  .amp(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass Fill)
const fill = note("0 2 0")
  .scale("E:minor")
  .s("bass")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 30. Manyake (Circuit & Joel)
```javascript
// Manyake
setcps(0.65)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .portamento(0.2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Cowbell)
const cb = s("cowbell*4")
  .amp(0.5)

stack(
  melody,
  chords,
  cb,
  s("bd*4")
)
```

### 31. Githurai (Mr. Google)
```javascript
// Githurai
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Siren)
const siren = s("sine").shape(0.5)
  .slow(8)
  .amp(0.2)

stack(
  melody,
  chords,
  siren,
  s("bd sd")
)
```

### 32. Morale (Pilipili)
```javascript
// Morale
setcps(0.7)

// 1. MELODY (Trance)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supersaw")
  .fast(4)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c4:major d4:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Clap Roll)
const roll = s("clap*4")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("bd*4")
)
```

### 33. Ukimwona (Pilipili)
```javascript
// Ukimwona
setcps(0.6)

// 1. MELODY (Pads)
const melody = note(cat(
  "c4@2 f4@2",
  "a4@2 c5@2"
))
  .s("supersaw").attack(0.5)
  .room(0.8)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")

  .s("superpiano")
  .amp(0.5)

// 3. IMPROV (Rim Fill)
const fill = s("rim*4")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("rim*4")
)
```

### 34. Vuta Pumz (Longombas)
```javascript
// Vuta Pumz
setcps(0.65)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .arp("up")
  .velocity(0.7)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass Slap)
const slap = note("0")
  .scale("E:minor")
  .s("bass")
  .shape(0.5)
  .amp(0.4)

stack(
  melody,
  chords,
  slap,
  s("bd sd")
)
```

### 35. Piga Makofi (Longombas)
```javascript
// Piga Makofi
setcps(0.67)

// 1. MELODY (Brass)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth").lpf(2000)
  .lpf(2000)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("clap*4")
  .amp(0.8)

stack(
  melody,
  chords,
  clap,
  s("clap*4").amp(1.2)
)
```

### 36. Dondosa (Longombas)
```javascript
// Dondosa
setcps(0.65)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major a2:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass Drop)
const drop = note("0")
  .scale("D:major")
  .s("bass")
  .amp(0.5)

stack(
  melody,
  chords,
  drop,
  s("bd*4")
)
```

### 37. Teso (Tatuu)
```javascript
// Teso
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 b4@1"
))
  .s("supermandolin")

  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.5)

// 3. IMPROV (Rim)
const rim = s("rim*4")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("rim*4")
)
```

### 38. Haiya (Harry Kimani)
```javascript
// Haiya
setcps(0.5)

// 1. MELODY (Acoustic)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("supersaw").attack(0.5)
  .amp(0.5)

// 3. IMPROV (Djembe)
const djembe = s("djembe")
  .amp(0.5)

stack(
  melody,
  chords,
  djembe,
  s("djembe").struct("x x ~ x")
)
```

### 39. Uhiki (Hardstone)
```javascript
// Uhiki
setcps(0.47)

// 1. MELODY (Organ)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .chop(4)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass Run)
const run = note("0 4 7")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  run,
  s("bd sd")
)
```

### 40. Tafsiri Hii (Kalamashaka)
```javascript
// Tafsiri Hii
setcps(0.45)

// 1. MELODY (Strings)
const melody = note(cat(
  "c3@1 eb3@1 g3@1 c4@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .legato(0.5)
  .velocity(0.9)

// 2. CHORDS (Cm)
const chords = note("c2:minor g2:minor c2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Hit)
const hit = note("0")
  .scale("C:minor")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.5)

stack(
  melody,
  chords,
  hit,
  s("bd sd")
)
```

---

## Category 4: Contemporary Afro-Pop

### 41. Sura Yako (Sauti Sol)
```javascript
// Sura Yako
setcps(0.62)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g4@1 a4@1 c5@1",
  "a4@1 g4@3"
))
  .s("supermandolin")
  .lpf(2000)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major c3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd").struct("x ~ x x")
)
```

### 42. Kuliko Jana (Sauti Sol)
```javascript
// Kuliko Jana
setcps(0.4)

// 1. MELODY (Choir)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("vowel")
  .vowel("o a")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g2:major c3:major")

  .s("hum")
  .amp(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .amp(0.5)

stack(
  melody,
  chords,
  snap,
  s("snap").slow(2)
)
```

### 43. Melanin (Sauti Sol)
```javascript
// Melanin
setcps(0.52)

// 1. MELODY (Kalimba)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sine").decay(0.5)
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Perc)
const perc = s("bongo")
  .amp(0.5)

stack(
  melody,
  chords,
  perc,
  s("bd ~ sd ~")
)
```

### 44. Suzanna (Sauti Sol)
```javascript
// Suzanna
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .lpf(sine.slow(2).range(500, 2000))
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass Slide)
const slide = note("0")
  .scale("G:major")
  .s("bass")
  .portamento(0.2)
  .amp(0.4)

stack(
  melody,
  chords,
  slide,
  s("rim*4")
)
```

### 45. Extravaganza (Sauti Sol)
```javascript
// Extravaganza
setcps(0.55)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpiano").lpf(1000)
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Trap Roll)
const roll = s("hh*8")
  .amp(0.4)

stack(
  melody,
  chords,
  roll,
  s("bd sd")
)
```

### 46. Short N Sweet (Sauti Sol)
```javascript
// Short N Sweet
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")

  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .amp(0.5)

stack(
  melody,
  chords,
  snap,
  s("snap").slow(2)
)
```

### 47. Mungu Pekee (Nyashinski)
```javascript
// Mungu Pekee
setcps(0.5)

// 1. MELODY (Pad)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supersaw").attack(0.5)
  .slow(2)
  .velocity(0.7)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 48. Malaika (Nyashinski)
```javascript
// Malaika
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpiano")
  .room(0.8)
  .velocity(0.7)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Build)
const build = s("bd*4")
  .amp(0.5)

stack(
  melody,
  chords,
  build,
  s("bd").slow(2)
)
```

### 49. Hayawani (Nyashinski)
```javascript
// Hayawani
setcps(0.45)

// 1. MELODY (Strings)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .attack(0.2)
  .velocity(0.8)

// 2. CHORDS (Dm)
const chords = note("d3:minor g3:minor a3:minor d3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Growl)
const growl = note("0")
  .scale("D:minor")
  .s("bass")
  .shape(0.4)
  .amp(0.4)

stack(
  melody,
  chords,
  growl,
  s("bd sd")
)
```

### 50. Now You Know (Nyashinski)
```javascript
// Now You Know
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor c3:minor d3:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Roll)
const roll = s("hh*8")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("bd sd")
)
```

### 51. Kookoo (Elani)
```javascript
// Kookoo
setcps(0.55)

// 1. MELODY (Uke)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("clap*4")
)
```

### 52. Milele (Elani)
```javascript
// Milele
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpiano")
  .arp("up")
  .velocity(0.7)

// 2. CHORDS (F Major)
const chords = note("f3:major bb3:major c3:major f3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.4)

stack(
  melody,
  chords,
  shaker,
  s("hh").hpf(5000).slow(2)
)
```

### 53. Uliza Kiatu (H_art the Band)
```javascript
// Uliza Kiatu
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .slow(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .amp(0.5)

stack(
  melody,
  chords,
  snap,
  s("snap").slow(2)
)
```

### 54. El Shaddai (H_art the Band)
```javascript
// El Shaddai
setcps(0.4)

// 1. MELODY (Pad)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supersaw").attack(0.5)
  .slow(4)
  .velocity(0.7)

// 2. CHORDS (C Major)
const chords = note("c3:major g2:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Kick)
const kick = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  kick,
  s("bd").slow(2)
)
```

### 55. Dus Nya (Otile Brown)
```javascript
// Dus Nya
setcps(0.52)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpiano").lpf(1000)
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 56. Chaguo la Moyo (Otile Brown)
```javascript
// Chaguo la Moyo
setcps(0.47)

// 1. MELODY (Piano)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpiano")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("rim*4")
)
```

### 57. Baby Love (Otile Brown)
```javascript
// Baby Love
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")

  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 58. Mafeelings (Dela)
```javascript
// Mafeelings
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4:minor@1 g4:minor@1 b4:minor@1 e5:minor@1"
))
  .s("superpiano")

  .velocity(0.7)

// 2. CHORDS (Em)
const chords = note("e3:minor a3:minor b3:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Hit)
const hit = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  hit,
  s("bd sd")
)
```

### 59. Kama Kawaida (Kagwe Mungai)
```javascript
// Kama Kawaida
setcps(0.55)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 60. Doing Her Thing Tho (Fena Gitu)
```javascript
// Doing Her Thing
setcps(0.52)

// 1. MELODY (Organ)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpwm")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major bb3:major c3:major f3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Kick)
const kick = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  kick,
  s("bd sd")
)
```

---

## Category 5: Gospel Hits

### 61. System ya Kapungala (Daddy Owen)
```javascript
// System ya Kapungala
setcps(0.7)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c5@1 c5@1 b4@1 a4@1"
))
  .s("supermandolin")
  .hpf(1000)
  .fast(2)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Fill)
const fill = s("snare")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("kick [snare snare]").fast(2)
)
```

### 62. Tobina (Daddy Owen)
```javascript
// Tobina
setcps(0.7)

// 1. MELODY (Brass)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth").lpf(2000)
  .legato(0.5)
  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Whistle)
const whistle = s("sine").portamento(0.1)
  .amp(0.4)

stack(
  melody,
  chords,
  whistle,
  s("bd*4")
)
```

### 63. Mbona (Daddy Owen)
```javascript
// Mbona
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd").slow(2)
)
```

### 64. Kuna Dawa (Esther Wahome)
```javascript
// Kuna Dawa
setcps(0.65)

// 1. MELODY (Organ)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Roll)
const roll = s("sd")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("bd sd")
)
```

### 65. Mwema (Mercy Masika)
```javascript
// Mwema
setcps(0.4)

// 1. MELODY (Strings)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .slow(2)
  .velocity(0.7)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Build)
const build = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  build,
  s("bd").slow(2)
)
```

### 66. Nikupendeze (Mercy Masika)
```javascript
// Nikupendeze
setcps(0.42)

// 1. MELODY (Piano)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpiano")
  .arp("up")
  .velocity(0.7)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.4)

stack(
  melody,
  chords,
  shaker,
  s("hh").hpf(5000).slow(2)
)
```

### 67. Utawala (Juliani)
```javascript
// Utawala
setcps(0.47)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .shape(0.4)
  .velocity(0.8)

// 2. CHORDS (Cm)
const chords = note("c2:minor g2:minor c2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Drum)
const drum = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  drum,
  s("bd sd")
)
```

### 68. Hela (Juliani)
```javascript
// Hela
setcps(0.45)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .chop(4)
  .velocity(0.7)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Hat)
const hat = s("hh")
  .amp(0.4)

stack(
  melody,
  chords,
  hat,
  s("bd sd")
)
```

### 69. Biasi (Juliani)
```javascript
// Biasi
setcps(0.47)

// 1. MELODY (Pluck)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .room(0.4)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 70. Sitolia (Gloria Muliro)
```javascript
// Sitolia
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpiano")
  .slow(2)
  .velocity(0.7)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("rm").slow(2)
)
```

### 71. Mpango wa Kando (Gloria Muliro)
```javascript
// Mpango wa Kando
setcps(0.6)

// 1. MELODY (Organ)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 72. Mateke (Size 8)
```javascript
// Mateke
setcps(0.67)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Roll)
const roll = s("snare")
  .amp(0.5)

stack(
  melody,
  chords,
  roll,
  s("bd*4")
)
```

### 73. Pale Pale (Size 8)
```javascript
// Pale Pale
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")

  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 74. Tambira (Daddy Owen)
```javascript
// Tambira
setcps(0.65)

// 1. MELODY (Brass)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("sawtooth").lpf(2000)
  .legato(0.5)
  .velocity(0.9)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd*4")
)
```

### 75. Fanya (Willy Paul)
```javascript
// Fanya
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 76. Sitishiki (Willy Paul)
```javascript
// Sitishiki
setcps(0.55)

// 1. MELODY (Pad)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supersaw").attack(0.5)
  .slow(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Fill)
const fill = s("sd")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 77. Mama (Bahati)
```javascript
// Mama
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpiano")
  .room(0.8)
  .velocity(0.7)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Build)
const build = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  build,
  s("bd").slow(2)
)
```

### 78. Barua (Bahati)
```javascript
// Barua
setcps(0.5)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 79. Kitanzi (Willy Paul)
```javascript
// Kitanzi
setcps(0.42)

// 1. MELODY (Strings)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .slow(2)
  .velocity(0.7)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Kick)
const kick = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  kick,
  s("bd").slow(2)
)
```

### 80. Vanity (Daddy Owen)
```javascript
// Vanity
setcps(0.55)

// 1. MELODY (Rhodes)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("superpiano").lpf(1000)
  .amp(sine.fast(4).range(0.5, 1))
  .velocity(0.7)

// 2. CHORDS (Cm)
const chords = note("c3:minor g2:minor c3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

---

## Category 6: Afro-Fusion, Vernacular & Gengetone

### 81. Kisumu 100 (Suzanna Owiyo)
```javascript
// Kisumu 100 - Accurate
setcps(0.65)

// 1. MELODY (Guitar Riff)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1",
  "d5@1 b4@1 g4@2"
))
  .s("supermandolin")

  .fast(2)
  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Solo Lick)
const lick = note("7 4 0")
  .scale("G:major")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  lick,
  s("bd sd")
)
```

### 82. Sandakarawe (Suzanna Owiyo)
```javascript
// Sandakarawe
setcps(0.6)

// 1. MELODY (Kalimba)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sine").decay(0.5)
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.5)

stack(
  melody,
  chords,
  shaker,
  s("shaker*8")
)
```

### 83. Nchi ya Kitu Kidogo (Eric Wainaina)
```javascript
// Nchi ya Kitu Kidogo
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("A:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 84. Ritwa Riaku (Eric Wainaina)
```javascript
// Ritwa Riaku
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Fill)
const fill = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 85. Ha-He (Just A Band)
```javascript
// Ha-He
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .shape(0.4)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 86. Makmende (Just A Band)
```javascript
// Makmende
setcps(0.62)

// 1. MELODY (Arp)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .arp("up")
  .velocity(0.7)

// 2. CHORDS (Cm)
const chords = note("c3:minor g2:minor c3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Kick)
const kick = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  kick,
  s("bd*4")
)
```

### 87. Party Don't Stop (Camp Mulla)
```javascript
// Party Don't Stop
setcps(0.64)

// 1. MELODY (Lead)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("square")
  .lpf(2000)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major bb3:major c3:major f3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("bd sd")
)
```

### 88. K'Lang (Camp Mulla)
```javascript
// K'Lang
setcps(0.55)

// 1. MELODY (Pad)
const melody = note(cat(
  "g4@1 bb4@1 d5@1 g5@1"
))
  .s("supersaw").attack(0.5)
  .slow(2)
  .velocity(0.8)

// 2. CHORDS (Gm)
const chords = note("g3:minor c3:minor d3:minor g3:minor")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:minor")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 89. Hold It Down (Camp Mulla)
```javascript
// Hold It Down
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.7)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .amp(0.5)

stack(
  melody,
  chords,
  snap,
  s("snap").slow(2)
)
```

### 90. Kwaheri (Jua Cali)
```javascript
// Kwaheri
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")

  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("rim*4")
)
```

### 91. Bidii Yangu (Jua Cali)
```javascript
// Bidii Yangu
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpwm")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("E:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 92. Kamata (Jua Cali)
```javascript
// Kamata
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.7)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Kick)
const kick = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  kick,
  s("bd*4")
)
```

### 93. Under 18 (Jimwat)
```javascript
// Under 18
setcps(0.55)

// 1. MELODY (Pluck)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .room(0.4)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("D:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 94. Sitoi Kitu Kidogo (Jimwat)
```javascript
// Sitoi Kitu Kidogo
setcps(0.5)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 eb4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .chop(4)
  .velocity(0.7)

// 2. CHORDS (Cm)
const chords = note("c3:minor g2:minor c3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Drum)
const drum = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  drum,
  s("bd sd")
)
```

### 95. Jana Kuliendaje (Mejja)
```javascript
// Jana Kuliendaje
setcps(0.57)

// 1. MELODY (Organ)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpwm")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major bb3:major c3:major f3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Laugh)
const laugh = s("glitch")
  .amp(0.5)

stack(
  melody,
  chords,
  laugh,
  s("bd sd")
)
```

### 96. Landlord (Mejja)
```javascript
// Landlord
setcps(0.55)

// 1. MELODY (Piano)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpiano")
  .legato(0.5)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("G:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 97. Niko na Safaricom (Theme)
```javascript
// Niko na Safaricom
setcps(0.6)

// 1. MELODY (Choir)
const melody = note(cat(
  "g4@1 c5@1 e5@1 g5@1"
))
  .s("vowel")
  .vowel("a")
  .room(1)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Chime)
const chime = s("sine")
  .amp(0.5)

stack(
  melody,
  chords,
  chime,
  s("sine").slow(4)
)
```

### 98. Fundamentals (Ken wa Maria)
```javascript
// Fundamentals
setcps(0.65)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c5@1 c5@1 b4@1 a4@1",
  "g4@1 e4@3"
))
  .s("supermandolin")
  .lpf(2000)
  .fast(2)
  .velocity(0.9)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")

  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .arp("up")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 99. Lamba Lolo (Ethic)
```javascript
// Lamba Lolo
setcps(0.5)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sine")
  .shape(0.4)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Clap)
const clap = s("cp")
  .amp(0.5)

stack(
  melody,
  chords,
  clap,
  s("heavy*4")
)
```

### 100. Wamlambez (Sailors)
```javascript
// Wamlambez
setcps(0.52)

// 1. MELODY (Square)
const melody = note(cat(
  "d4@1 f4@1 a4@1 d5@1"
))
  .s("square")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (Dm)
const chords = note("d3:minor g3:minor a3:minor d3:minor")

  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shout)
const shout = s("glitch")
  .amp(0.5)

stack(
  melody,
  chords,
  shout,
  s("bd")
)
```
