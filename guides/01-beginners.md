# Strudel Beginner's Guide: The Basics

Welcome to Strudel! Strudel is a live coding environment for music. It allows you to describe music as patterns in code.

## 1. Making Your First Sound

Type the following code and run it (Shift + Enter):

```javascript
s("bd")
```

This plays a "bd" (Bass Drum) sample. Strudel loops this sound forever.

## 2. Understanding The Cycle

Strudel is based on **Cycles**.
By default, the code `s("bd")` triggers the sound once every cycle.
You can think of a cycle as a measure or a bar of music.

If you add more sounds, Strudel fits them into the same cycle:

```javascript
s("bd sd")
```

Now, "bd" and "sd" (Snare Drum) share the cycle. They play twice as fast as just "bd".

## 3. Mini-Notation

The string inside `s("...")` is called **Mini-Notation**. It's a powerful language for rhythm.

- **Sequence**: `s("bd sd hh cp")` plays 4 sounds equally.
- **Rests**: Use `~` for silence. `s("bd ~ sd ~")`.
- **Sub-sequence**: Use `[]` to group sounds into one step. `s("bd [hh hh] sd hh")`.
- **Repetition**: Use `*` to repeat. `s("hh*4")` is the same as `s("hh hh hh hh")`.
- **Duration**: Use `@` to hold a note longer. `s("bd@3 sd")` (Kick is 3 steps, snare is 1 step).

## 4. Notes and Melodies

You aren't limited to drum samples. You can play synthesizers using `note`.

```javascript
note("c3 e3 g3 b3")
  .s("triangle")
```

You can use:
- **Note Names**: `c3`, `d#4`, `ab2`.
- **Numbers**: `0 2 4` (Relative to a scale).

```javascript
note("0 2 4 7")
  .s("sawtooth")
  .lpf(1000) // Low pass filter to make it softer
```

## 5. Oscillators vs Samples

- **Samples**: Recordings of sounds (e.g., `bd`, `sd`, `piano`, `violin`). They have a fixed duration.
- **Oscillators/Synths**: Generated sounds (e.g., `sawtooth`, `square`, `sine`). You can control their duration precisely with `legato` or structure.

```javascript
// A synth playing a long note
note("c3").s("sawtooth").legato(1)
```

## 6. Manipulating Time

You can speed up or slow down patterns.

- `fast(2)`: Plays the pattern twice as fast.
- `slow(2)`: Plays the pattern half as fast.

```javascript
s("bd sd")
  .fast(2) // Sounds like "bd sd bd sd"
```

## 7. Basic Layering

To play two things at once, use `stack`:

```javascript
stack(
  s("bd sd"),
  s("hh*8")
)
```

## Summary
You've learned:
- How to trigger sounds with `s`.
- How the Cycle divides time.
- Basic rhythm notation.
- How to play melodies with `note`.

Next, move on to **Guide 2** to learn about intermediate rhythms and effects!
