# 100 More Kenyan Classics (Vol. 3) - Strudel Guide

This is the third volume of our Kenyan music collection for Strudel, featuring 100 additional arrangements. This guide dives deeper into the legends of Benga and Rhumba, explores the rich Mugithi tradition, celebrates the Golden Age of Gospel, and uncovers more Hip Hop and Regional gems.

## How to Use
Copy the code block for the song you want to hear into the Kunguru Algo (Strudel) REPL.

---

## Category 1: Benga & Rhumba Legends (Luo & Swahili)


### 1. Hera Mwandu (Musa Juma)
```javascript
// Hera Mwandu
setcps(0.6)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1",
  "f#5@1 d5@1 b4@1 g4@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Sebene)
const sebene = note("0 2 4")
  .scale("G:major")
  .s("supermandolin")
  .amp(0.4)

stack(
  melody,
  chords,
  sebene,
  s("bd sd")
)
```

### 2. Maselina (Musa Juma)
```javascript
// Maselina
setcps(0.55)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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

### 3. Lala Salama (D.O. Misiani)
```javascript
// Lala Salama
setcps(0.6)

// 1. MELODY (Benga Guitar)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .fast(2)
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
  s("bd sd")
)
```

### 4. Piny Ose Mer (D.O. Misiani)
```javascript
// Piny Ose Mer
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
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

### 5. Dunia Mbaya (Princess Jully)
```javascript
// Dunia Mbaya
setcps(0.65)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .fast(2)
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
  s("bd*4")
)
```

### 6. Zainabu (Ochieng Kabaselleh)
```javascript
// Zainabu
setcps(0.55)

// 1. MELODY (Rhumba)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 7. Kothbiro (Ayub Ogada)
```javascript
// Kothbiro
setcps(0.4)

// 1. MELODY (Nyatiti)
const melody = note(cat(
  "g3@1 b3@1 d4@1 g4@1"
))
  .s("supermandolin")
  .room(0.8)
  .velocity(0.7)

// 2. CHORDS (G Major)
const chords = note("g2:major d2:major g2:major")
  .s("sine")
  .amp(0.5)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.4)

stack(
  melody,
  chords,
  shaker,
  s("bd").slow(2)
)
```

### 8. Affline (George Ramogi)
```javascript
// Affline
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 9. Isaya Mwinamo (Collela Mazee)
```javascript
// Isaya Mwinamo
setcps(0.58)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 10. Atoti (Ouma Omore)
```javascript
// Atoti
setcps(0.62)

// 1. MELODY (Benga)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.8)

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
  s("bd sd")
)
```

### 11. Harusi ya MK (D.O. Misiani)
```javascript
// Harusi ya MK
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
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

### 12. Kisa Cha Pombe (Sukuma Bin Ongaro)
```javascript
// Kisa Cha Pombe
setcps(0.55)

// 1. MELODY (Luhya Benga)
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

### 13. Mama Mzazi (Kakai Kilonzo)
```javascript
// Mama Mzazi
setcps(0.5)

// 1. MELODY (Kamba Benga)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 14. Celina (Ochieng Nelly)
```javascript
// Celina
setcps(0.6)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
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

### 15. Chapa Kazi (Ogier Kamba)
```javascript
// Chapa Kazi
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
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

### 16. Amach (Awilo Mike)
```javascript
// Amach
setcps(0.6)

// 1. MELODY (Benga)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

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
  s("bd sd")
)
```

### 17. Uvivu Mbaya (Maroon Commandos)
```javascript
// Uvivu Mbaya
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 18. Mukangala (Jacob Luseno)
```javascript
// Mukangala
setcps(0.65)

// 1. MELODY (Luhya Pop)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 19. Twist (Daudi Kabaka)
```javascript
// Twist
setcps(0.7)

// 1. MELODY (Twist Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
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

### 20. Western Bump (Daudi Kabaka)
```javascript
// Western Bump
setcps(0.68)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
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


---

## Category 2: Mugithi & Kikuyu Pop

### 21. Wendo Wi Cama (Samidoh)
```javascript
// Wendo Wi Cama
setcps(0.6)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .fast(2)
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

### 22. Mumbi (Samidoh)
```javascript
// Mumbi
setcps(0.55)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 23. Tuirio Twega (Salim Junior)
```javascript
// Tuirio Twega
setcps(0.65)

// 1. MELODY (Mugithi Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .fast(2)
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

### 24. Machete (Jose Gatutura)
```javascript
// Machete
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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

### 25. Mwanake (JB Maina)
```javascript
// Mwanake
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .lpf(1500)
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

### 26. My Dear Nduku (Musaimo)
```javascript
// My Dear Nduku
setcps(0.58)

// 1. MELODY (Guitar)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 27. Nduraga Ngwetereire (Queen Jane)
```javascript
// Nduraga Ngwetereire
setcps(0.6)

// 1. MELODY (Female Vocals)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .fast(2)
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

### 28. Wina Nja (Timona Mburu)
```javascript
// Wina Nja
setcps(0.55)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
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

### 29. Njata Yakwa (John Demathew)
```javascript
// Njata Yakwa
setcps(0.52)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 30. Mama Kiwinya (Sammy Muraya)
```javascript
// Mama Kiwinya
setcps(0.6)

// 1. MELODY (Old School)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 31. Mariru (Albert Gacheru)
```javascript
// Mariru
setcps(0.62)

// 1. MELODY (Guitar)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
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

### 32. Muhiki wa Mikosi (Joseph Kamaru)
```javascript
// Muhiki wa Mikosi
setcps(0.58)

// 1. MELODY (Classic)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .room(0.6)
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

### 33. Ndari ya Mwalimu (Joseph Kamaru)
```javascript
// Ndari ya Mwalimu
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
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

### 34. Ngai wa Githumo (CDM Kiratu)
```javascript
// Ngai wa Githumo
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
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

### 35. Mami Witu (Simon Kihara)
```javascript
// Mami Witu
setcps(0.58)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 36. Ino Ni Momo (Wa Kahalf)
```javascript
// Ino Ni Momo
setcps(0.65)

// 1. MELODY (Pop)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
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

### 37. Ikaba (Samidoh)
```javascript
// Ikaba
setcps(0.6)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")
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

### 38. Kaba Kuona (Samidoh)
```javascript
// Kaba Kuona
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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

### 39. Murata (Kihara Gigikuyu)
```javascript
// Murata
setcps(0.58)

// 1. MELODY (Classic)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 40. Mwomboko (Traditional)
```javascript
// Mwomboko
setcps(0.5)

// 1. MELODY (Accordion)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpwm")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Foot Stomp)
const stomp = s("bd")
  .amp(0.7)

stack(
  melody,
  chords,
  stomp,
  s("bd").slow(2)
)
```


---

## Category 3: Golden Age Gospel (80s-90s-00s)

### 41. Adam na Hawa (Mary Atieno)
```javascript
// Adam na Hawa
setcps(0.5)

// 1. MELODY (Organ)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major f3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 42. Malebo (Faustin Munishi)
```javascript
// Malebo
setcps(0.6)

// 1. MELODY (Accordion)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("superpwm")
  .fast(2)
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

### 43. Enda Nasi (Reuben Kigame)
```javascript
// Enda Nasi
setcps(0.45)

// 1. MELODY (Piano)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.7)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Strings)
const strings = note("0")
  .scale("D:major")
  .s("supersaw").attack(0.1).release(0.8)
  .amp(0.4)

stack(
  melody,
  chords,
  strings,
  s("bd").slow(2)
)
```

### 44. Uliniumba Nikuabudu (Reuben Kigame)
```javascript
// Uliniumba Nikuabudu
setcps(0.4)

// 1. MELODY (Choir)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("vowel")
  .vowel("a")
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
  s("bd").slow(2)
)
```

### 45. Jubilee (Angela Chibalonza)
```javascript
// Jubilee
setcps(0.65)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
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

### 46. Ebenezer (Angela Chibalonza)
```javascript
// Ebenezer
setcps(0.55)

// 1. MELODY (Lead)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 47. Mungu Mwenye Nguvu (Ruhila)
```javascript
// Mungu Mwenye Nguvu
setcps(0.6)

// 1. MELODY (Choir)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("vowel")
  .vowel("o")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("F:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 48. Akisema Atakubariki (Jemimah Thiong'o)
```javascript
// Akisema Atakubariki
setcps(0.58)

// 1. MELODY (Piano)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpiano")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 49. Liseme (Sarah K)
```javascript
// Liseme
setcps(0.52)

// 1. MELODY (Strings)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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

### 50. Ahadi Zake (Marion Shako)
```javascript
// Ahadi Zake
setcps(0.55)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 51. Uko Hapa (Florence Mureithi)
```javascript
// Uko Hapa
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.6)
  .velocity(0.8)

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
  s("bd sd")
)
```

### 52. Kuliko Yote (Kassangas)
```javascript
// Kuliko Yote
setcps(0.55)

// 1. MELODY (Choir)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("vowel")
  .vowel("a")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("superpiano")
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

### 53. Neno Litaendelea (AIC Makongeni)
```javascript
// Neno Litaendelea
setcps(0.6)

// 1. MELODY (Choir)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("vowel")
  .vowel("o")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 54. Kwata Kawaya (Mbuvi)
```javascript
// Kwata Kawaya
setcps(0.65)

// 1. MELODY (Guitar)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
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

### 55. Mabataro (Ben Githae)
```javascript
// Mabataro
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
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

### 56. Tano Tena (Ben Githae)
```javascript
// Tano Tena
setcps(0.62)

// 1. MELODY (Anthem)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
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

### 57. Ndi Ihenyaini (Loise Kim)
```javascript
// Ndi Ihenyaini
setcps(0.58)

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

### 58. Racing Up (Paul Mwai)
```javascript
// Racing Up
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 59. Mungu Yuko (Mary Atieno)
```javascript
// Mungu Yuko
setcps(0.55)

// 1. MELODY (Organ)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("superpwm")
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

### 60. Sodoma na Gomora (Mary Atieno)
```javascript
// Sodoma na Gomora
setcps(0.52)

// 1. MELODY (Lead)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```


---

## Category 4: Hip Hop Pioneers & Urban Classics

### 61. Huwezi Niambia (Kantai)
```javascript
// Huwezi Niambia
setcps(0.55)

// 1. MELODY (Guitar)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("supermandolin")
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

### 62. Tokelezea (Abbas Kubaff)
```javascript
// Tokelezea
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
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

### 63. Hii Ngoma (Chiwawa)
```javascript
// Hii Ngoma
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .fast(2)
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

### 64. Compe (Bamboo)
```javascript
// Compe
setcps(0.65)

// 1. MELODY (Pluck)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 65. Dandora Burning (Ukoo Flani)
```javascript
// Dandora Burning
setcps(0.5)

// 1. MELODY (Dark Strings)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supersaw").attack(0.1).release(0.8)
  .slow(2)
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

### 66. Pesa Pombe Siasa na Wanawake (Mashifta)
```javascript
// Pesa Pombe Siasa na Wanawake
setcps(0.58)

// 1. MELODY (Synth)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
  .s("superpiano")
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

### 67. Kapuka This (K-South)
```javascript
// Kapuka This
setcps(0.6)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 68. The Prep (X-tatic)
```javascript
// The Prep
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")
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

### 69. Biashara (STL)
```javascript
// Biashara
setcps(0.65)

// 1. MELODY (Pluck)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
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

### 70. Cardio (Wangechi)
```javascript
// Cardio
setcps(0.6)

// 1. MELODY (Synth)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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

### 71. Fenamenal (Fena Gitu)
```javascript
// Fenamenal
setcps(0.55)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 72. Mikono Kwenye Hewa (Muthoni DQ)
```javascript
// Mikono Kwenye Hewa
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 73. Mungu Halali (Blinky Bill)
```javascript
// Mungu Halali
setcps(0.5)

// 1. MELODY (Piano)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpiano")
  .room(0.7)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Snap)
const snap = s("snap")
  .amp(0.5)

stack(
  melody,
  chords,
  snap,
  s("bd sd")
)
```

### 74. K.O (Kus Ma)
```javascript
// K.O
setcps(0.58)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

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

### 75. Mat Za Ronga (Tunji)
```javascript
// Mat Za Ronga
setcps(0.6)

// 1. MELODY (Trap Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (808)
const bass808 = s("808")
  .amp(0.7)

stack(
  melody,
  chords,
  bass808,
  s("bd sd")
)
```

### 76. Nai Ni Ya Who (Muthoni DQ)
```javascript
// Nai Ni Ya Who
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "e4@1 g4@1 b4@1 e5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Em)
const chords = note("e3:minor b2:minor e3:minor")
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

### 77. Creeper (Kagwe Mungai)
```javascript
// Creeper
setcps(0.55)

// 1. MELODY (Organ)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("superpwm")
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

### 78. Drink Party (Madtraxx)
```javascript
// Drink Party
setcps(0.65)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(4)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Shout)
const shout = s("glitch")
  .amp(0.5)

stack(
  melody,
  chords,
  shout,
  s("bd sd")
)
```

### 79. Get Down (Madtraxx)
```javascript
// Get Down
setcps(0.66)

// 1. MELODY (Synth)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
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

### 80. Boda Boda (Madtraxx)
```javascript
// Boda Boda
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "d4@1 f#4@1 a4@1 d5@1"
))
  .s("sawtooth")
  .velocity(0.8)

// 2. CHORDS (D Major)
const chords = note("d3:major g3:major a3:major d3:major")
  .s("superpiano")
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


---

## Category 5: Coast, Ohangla & Regional Hits

### 81. Isanda Gi Hera (Tony Nyadundo)
```javascript
// Isanda Gi Hera
setcps(0.65)

// 1. MELODY (Ohangla)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 82. Obama (Tony Nyadundo)
```javascript
// Obama
setcps(0.62)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Drum)
const drum = s("bd")
  .amp(0.5)

stack(
  melody,
  chords,
  drum,
  s("bd*4")
)
```

### 83. Wanji (Osogo Winyo)
```javascript
// Wanji
setcps(0.6)

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

### 84. Ageng'o (Osogo Winyo)
```javascript
// Ageng'o
setcps(0.58)

// 1. MELODY (Lead)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 85. Watu na Viatu (Nyota Ndogo)
```javascript
// Watu na Viatu
setcps(0.55)

// 1. MELODY (Taarab Pop)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("superpwm")
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
  s("bd sd")
)
```

### 86. Mpenzi (Nyota Ndogo)
```javascript
// Mpenzi
setcps(0.52)

// 1. MELODY (Vocals)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
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

### 87. Vidonge (Malika)
```javascript
// Vidonge
setcps(0.6)

// 1. MELODY (Taarab)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("sawtooth")
  .lpf(1500)
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
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

### 88. Naona Bado (Sudi Boy)
```javascript
// Naona Bado
setcps(0.58)

// 1. MELODY (Bongo Flava Style)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("superpiano")
  .room(0.5)
  .velocity(0.8)

// 2. CHORDS (E Major)
const chords = note("e3:major a3:major b3:major e3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 89. Hidaya (Susumila)
```javascript
// Hidaya
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("sawtooth")
  .fast(2)
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

### 90. Maria (Ally B)
```javascript
// Maria
setcps(0.6)

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
const fill = s("sd")
  .amp(0.5)

stack(
  melody,
  chords,
  fill,
  s("bd sd")
)
```

### 91. Kichuna (Chikuzee)
```javascript
// Kichuna
setcps(0.65)

// 1. MELODY (Lead)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .chop(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
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

### 92. Disco Chakacha (Mombasa Roots)
```javascript
// Disco Chakacha
setcps(0.7)

// 1. MELODY (Chakacha)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.9)

// 2. CHORDS (G Major)
const chords = note("g3:major c3:major d3:major g3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Percussion)
const perc = s("bongo")
  .amp(0.6)

stack(
  melody,
  chords,
  perc,
  s("bd sd")
)
```

### 93. Taunet Nelel (Emily Kosgei)
```javascript
// Taunet Nelel
setcps(0.6)

// 1. MELODY (Kalenjin Pop)
const melody = note(cat(
  "e4@1 g#4@1 b4@1 e5@1"
))
  .s("supermandolin")
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

### 94. Hello Hello (Msupa S)
```javascript
// Hello Hello
setcps(0.65)

// 1. MELODY (Rap Flow)
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

// 3. IMPROV (Rim)
const rim = s("rm")
  .amp(0.5)

stack(
  melody,
  chords,
  rim,
  s("bd sd")
)
```

### 95. Kalenjin Pop (Sweetstar)
```javascript
// Kalenjin Pop
setcps(0.62)

// 1. MELODY (Synth)
const melody = note(cat(
  "f4@1 a4@1 c5@1 f5@1"
))
  .s("superpwm")
  .velocity(0.8)

// 2. CHORDS (F Major)
const chords = note("f3:major c3:major f3:major")
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

### 96. Mama Watoto (Prince Indah)
```javascript
// Mama Watoto
setcps(0.6)

// 1. MELODY (Ohangla)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```

### 97. Adhiambo (Prince Indah)
```javascript
// Adhiambo
setcps(0.62)

// 1. MELODY (Guitar)
const melody = note(cat(
  "g4@1 b4@1 d5@1 g5@1"
))
  .s("supermandolin")
  .fast(2)
  .velocity(0.8)

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

### 98. Hera Remo (Musa Jakadala)
```javascript
// Hera Remo
setcps(0.65)

// 1. MELODY (Lead)
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

### 99. Simba Ja Uriri (Emma Jalamo)
```javascript
// Simba Ja Uriri
setcps(0.6)

// 1. MELODY (Ohangla)
const melody = note(cat(
  "a3@1 c4@1 e4@1 a4@1"
))
  .s("supermandolin")
  .velocity(0.8)

// 2. CHORDS (Am)
const chords = note("a2:minor e2:minor a2:minor")
  .s("superpiano")
  .amp(0.6)

// 3. IMPROV (Shaker)
const shaker = s("hh").hpf(5000)
  .amp(0.5)

stack(
  melody,
  chords,
  shaker,
  s("bd sd")
)
```

### 100. Railas Dance (Onyi Papa Jey)
```javascript
// Railas Dance
setcps(0.66)

// 1. MELODY (Anthem)
const melody = note(cat(
  "c4@1 e4@1 g4@1 c5@1"
))
  .s("sawtooth")
  .fast(2)
  .velocity(0.8)

// 2. CHORDS (C Major)
const chords = note("c3:major g3:major c3:major")
  .s("supersaw").attack(0.5)
  .amp(0.6)

// 3. IMPROV (Bass)
const bass = note("0")
  .scale("C:major")
  .s("bass")
  .amp(0.4)

stack(
  melody,
  chords,
  bass,
  s("bd sd")
)
```
