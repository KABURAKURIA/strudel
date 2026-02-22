# Strudel Intermediate Guide: Rhythms and Layers

Once you can make basic sounds, it's time to create texture and groove.

## 1. Layering with `stack`

To play multiple patterns at the same time, use `stack`.

```javascript
stack(
  s("bd sd"),
  s("hh*4"),
  note("c3").s("bass")
)
```

Each element in the stack runs in parallel.

## 2. Euclidean Rhythms

The `euclid` function distributes hits as evenly as possible over a number of steps. This is great for making complex grooves quickly.

Syntax: `euclid(hits, steps)`

```javascript
// 3 hits over 8 steps (Tresillo rhythm)
s("bd").euclid(3, 8)
```

Combine it with other sounds:

```javascript
stack(
  s("bd").euclid(3, 8),
  s("hh").euclid(5, 8)
)
```

## 3. Conditional Logic: `every`

To make your music evolve, use `every` to apply a function only every N cycles.

```javascript
s("bd sd bd sd")
  .every(4, fast(2)) // Every 4th cycle, play twice as fast
```

You can also use `every` with effects:

```javascript
s("bd sd")
  .every(2, x => x.s("cp")) // Every 2nd cycle, replace sounds with 'cp' (clap)
```

## 4. Audio Effects

Strudel has many built-in effects.

- **lpf / lpq**: Low pass filter and resonance.
- **room / size**: Reverb.
- **vowel**: Formant filter (makes it sound like a voice).
- **delay / delaytime / delayfeedback**: Delay.

```javascript
s("bd sd")
  .lpf(1000).lpq(2) // Filter
  .room(0.5)        // Reverb
```

## 5. Using Variables

You can assign patterns to variables to keep your code clean.

```javascript
const drums = s("bd sd").fast(2)
const melody = note("c e g b").s("superpiano")

stack(
  drums,
  melody
)
```

## 6. Polymeters

If patterns have different lengths, they will drift against each other, creating interesting variations.

```javascript
stack(
  s("bd sd hh"),   // 3 steps
  s("cp ~ ~ ~")    // 4 steps
)
```
In standard Tidal/Strudel, patterns cycle to the same duration (1 cycle), so to create polymeters where the *step duration* is constant but the loop lengths differ, you often use `{}` notation in the mini-notation or `slow`/`fast` carefully.

Strudel mini-notation `{a b, c d e}` plays "a b" and "c d e" at the same speed step-wise, phasing against each other.

```javascript
s("{bd sd, hh hh hh}")
```

Next, we'll dive into making a specific genre: Lo-Fi Hip Hop!
