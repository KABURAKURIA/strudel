# Strudel Beginner's Guide

Welcome to Strudel! Strudel is a live coding environment for music, based on TidalCycles, but running entirely in the browser using JavaScript.

## 1. The Basics: Making Sound

The most basic function is `s` (short for sound) or `note`. You use `.` to chain functions.

To play a simple beat:

```javascript
s("bd sd")
```

This plays a bass drum (`bd`) and a snare drum (`sd`) in a loop. Strudel divides time into cycles. By default, `bd sd` fits one cycle.

## 2. Mini-Notation

Strudel uses a special string format called "mini-notation" to define patterns.

- **Sequence**: `s("a b c d")` plays 4 sounds equally spaced in the cycle.
- **Sub-sequence**: `s("a [b c] d")` plays 'b' and 'c' in the space of one step.
- **Rest**: `~` represents a silence. `s("bd ~ sd ~")`.
- **Repetition**: `s("bd*2")` is the same as `s("bd bd")`.

## 3. Melodies with `note`

You can play melodies using note names or numbers.

```javascript
note("c e g b")
  .s("piano")
```

You can also use numbers relative to a scale:

```javascript
note("0 2 4 7")
  .scale("C:major")
  .s("sawtooth")
```

## 4. Manipulating Time

- **fast**: Speeds up the pattern. `fast(2)` plays it twice as fast.
- **slow**: Slows it down. `slow(2)` plays it half as fast.

```javascript
s("bd sd").fast(2)
```

## 5. Transformations

- **rev**: Reverses the pattern.
- **palindrome**: Plays the pattern forwards then backwards.
- **jux**: Plays the original pattern in one ear and a transformed version in the other.

```javascript
note("c e g b")
  .s("piano")
  .jux(rev) // One ear plays normal, other plays reversed
```

## 6. Your First Jam

Try combining these:

```javascript
stack(
  s("bd(3,8)"),             // Euclidean rhythm kick
  note("c a f e").s("piano").slow(2) // Slow melody
)
```

In the next guide, we will explore more complex rhythms and layering!
