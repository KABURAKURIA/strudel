# Nujabes/Lo-Fi Strudel Cookbook

This guide is a collection of "Recipes" — copy-pasteable blocks of code that you can use to instantly get a specific sound. Mix and match them to create your own beats.

## 1. Drum Kits

### The "Boom Bap" Kit (Classic 90s)
Heavy swing, crisp snares.

```javascript
const boomBap = stack(
  s("bd ~ [~ bd] ~"),
  s("~ sd ~ sd"),
  s("hh*8").velocity(rand.range(0.3, 0.7))
).swing(0.2)
```

### The "Lazy Sunday" Kit (Off-Grid)
Uses `nudge` to drag the snare, creating that head-nod feel.

```javascript
const lazySunday = stack(
  s("bd*2"),
  s("sd").nudge(0.04), // Late snare
  s("hh*8").nudge(rand.range(-0.03, 0.03)) // Drunken hats
)
```

### The "Dilla" Kit (Drunk / Tresillo)
Uses `struct` for more complex kick patterns.

```javascript
const dilla = stack(
  s("bd").struct("x ~ ~ x ~ ~ x ~"), // Tresillo feel
  s("sd").struct("~ x ~ x").nudge(0.05),
  s("hh*16").velocity(sine.range(0.2, 0.5).slow(4))
).swing(0.15)
```

## 2. Chord Packs

### The "Jazz Cafe" (Minor 9ths)
Dark, moody, sophisticated.

```javascript
const jazzCafe = note("c4:minor9 f3:minor9 bb3:minor9 g3:dom7")
  .s("superpiano")
  .lpf(1000)
  .slow(2)
```

### The "Neo Soul" (Major 9ths & 13ths)
Bright, lush, emotional.

```javascript
const neoSoul = note("eb4:major9 c4:minor9 f3:minor11 bb3:dom13")
  .s("superpiano")
  .vowel("a") // Formant filter
  .slow(2)
```

### The "Nostalgia" (Inversions)
Uses slash notation for voice leading.

```javascript
const nostalgia = note("c4/g f4/a g4/b c5")
  .s("rhodes") // or superpiano
  .slow(2)
```

## 3. Bass Lines

### The "Upright" (Acoustic Feel)
Plucky and woody. Good for Jazz.

```javascript
const uprightBass = note("c2 f2 g2 c2")
  .s("triangle")
  .attack(0.05).decay(0.5) // Pluck envelope
  .lpf(600)
```

### The "Sub" (Modern Lo-Fi)
Deep, warm, fills the low end.

```javascript
const subBass = note("c1 f1 g1 c1")
  .s("sine")
  .lpf(300)
  .shape(0.4) // Saturation
```

### The "Donut" (Dilla Style)
Short, punchy, slightly distorted.

```javascript
const donutBass = note("c2 ~ c2 ~")
  .s("sine")
  .attack(0.01).decay(0.2) // Short decay
  .shape(0.6)
```

## 4. Texture Chains

Add these to any `stack` to give it that vintage vibe.

### Vinyl Crackle
The most essential Lo-Fi element.

```javascript
s("noise").gain(0.05).lpf(2000)
```

### Cassette Tape (Wobble)
Simulates the unstable pitch of a tape deck.

```javascript
// Apply this to your melodic elements
.lpf(sine.range(500, 1500).slow(8))
```

### Rainy Window
Atmospheric background noise.

```javascript
s("noise").lpf(800).hpf(200).gain(0.1).jux(rev)
```

## 5. Full Recipe: "Rainy Cafe"

Putting it all together:

```javascript
// Ingredients
const rain = s("noise").lpf(800).hpf(200).gain(0.1).jux(rev)
const drums = stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd").nudge(0.04),
  s("hh*8").swing(0.2)
)
const chords = note("d4:minor9 g3:dom7 c4:major7 a3:minor7")
  .s("superpiano").lpf(800).slow(2)

// Mix
stack(
  rain,
  drums,
  chords
)
```
