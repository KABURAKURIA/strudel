# Strudel Guide: Advanced Generative Music

One of the most powerful features of Strudel is its ability to compose music that changes every time it plays. This guide explores generative techniques.

## 1. Random Notes in a Scale

Instead of writing a fixed melody, you can ask Strudel to pick notes from a scale.

```javascript
note(
  // Pick a random number between 0 and 7
  irand(7).segment(8)
)
.scale("C:minor") // Force it into C Minor
.s("superpiano")
```

- `irand(N)`: Generates a random integer from 0 to N-1.
- `segment(8)`: Samples that random signal 8 times per cycle.

## 2. Random Selection: `randcat`

`randcat` (Random Concatenation) picks one pattern from a list at random for each cycle.

```javascript
randcat(
  s("bd sd"),
  s("bd*2 sd"),
  s("bd [sd sd] bd sd")
)
```

This is great for creating drum variations that don't feel repetitive.

## 3. Probability: The `?` Operator

In the mini-notation, `?` allows you to drop events randomly.

```javascript
// 50% chance to play the snare
s("bd sd?")
```

You can specify the probability:

```javascript
// 80% chance to play the clap
s("bd cp?0.8")
```

## 4. Scrambling and Shuffling

- **scramble(N)**: Splits the cycle into N parts and rearranges them randomly.
- **shuffle(N)**: Similar to scramble, but preserves the content within the parts better.

```javascript
note("c e g b")
  .s("superpiano")
  .scramble(4) // New melody every cycle!
```

## 5. Infinite Variation with `struct`

You can use a boolean signal to create generative rhythms.

```javascript
s("hh")
  .struct(rand.gt(0.5)) // Play if random value > 0.5
  .segment(16) // Check 16 times per cycle
```

## 6. Practical Example: Generative Ambient Garden

This piece never repeats exactly. It creates a lush, evolving soundscape.

```javascript
setcps(0.4)

stack(
  // 1. Random Bell Melody
  note(irand(12).segment(8))
    .scale("Eb:lydian")
    .s("sine")
    .decay(0.5)
    .delay(0.5)
    .room(0.8),

  // 2. Swelling Pads
  note("eb3:major7 g3:minor7")
    .s("triangle")
    .lpf(sine.slow(16).range(500, 2000)) // Slow filter movement
    .slow(4),

  // 3. Occasional Bass Hits
  note("eb2")
    .s("sawtooth")
    .lpf(400)
    .struct("x ~ ~ ~ x? ~ ~ ~") // Sometimes play the second hit
    .slow(2)
)
```
