# Strudel Guide: Sampling Deep Dive

Sampling is at the heart of electronic music. Strudel provides powerful tools to manipulate audio files, from simple playback to complex chopping and granular synthesis.

## 1. Loading Custom Samples

To use your own samples, you need to provide a URL to an audio file (wav, mp3, ogg).

```javascript
samples({
  'mybeat': 'https://strudel.cc/media/break.wav',
  'vocal': 'https://example.com/vocals.mp3'
})

s("mybeat")
```

## 2. Basic Playback and Manipulation

### Speed and Pitch
Changing the speed of playback affects the pitch (like a vinyl record).

```javascript
s("mybeat").speed(2) // Play twice as fast (octave up)
s("mybeat").speed(-1) // Play backwards
```

### Legato (Time Stretching)
If you want a sample to last exactly one cycle (or a specific duration) regardless of its original length, use `legato`.

```javascript
s("mybeat").legato(1) // Fit the sample into 1 cycle
```

## 3. Chopping Breaks with `chop`

The `chop` function cuts a sound into N pieces and plays them in order. This is perfect for breakbeats (like the Amen Break).

```javascript
s("mybeat")
  .chop(4) // Cut into 4 pieces
```

Combine it with `rev` or pattern manipulation to remix the beat instantly:

```javascript
s("mybeat")
  .chop(8)
  .rev() // Play chunks in reverse order
```

## 4. Slicing with `slice`

`slice` allows you to pick specific pieces of a sample.

```javascript
// Slice into 8 pieces, and play the 0th, 3rd, and 1st slice
s("mybeat")
  .slice(8, "0 3 1 3")
```

This is how you create "jungle" or "drum and bass" patterns from a single drum loop.

## 5. Granular Synthesis with `splice`

`splice` is similar to `slice` but automatically adjusts the timing so the slices fit the beat perfectly.

```javascript
s("mybeat")
  .splice(8, "0 1 2 3 4 5 6 7") // Plays the whole loop
```

Try scrambling the order:

```javascript
s("mybeat")
  .splice(8, "0 1 2 3 4 5 6 7")
  .scramble(8) // Randomize the order
```

## 6. Practical Example: Jungle Breakbeat

Here is how to take a standard drum break and turn it into a high-energy Jungle beat.

```javascript
// Load the Amen break
samples({
  'amen': 'https://strudel.cc/media/amen.wav'
})

setcps(160/60/4) // Fast tempo

stack(
  // The Chopped Break
  s("amen")
    .slice(8, "0 1 2 [3 4] 2 1 5") // Complex pattern
    .shape(0.4) // Distortion
    .hpf(150),  // Remove deep lows for the sub bass

  // The Sub Bass
  note("c1(3,8)")
    .legato(1)
    .s("sine")
    .amp(1.2)
)
```

## 7. Advanced: Granular Textures

You can chop *anything*, not just drums. Try chopping a piano or vocal sample for atmospheric textures.

```javascript
note("c3")
  .s("superpiano")
  .chop(32)
  .rev()
  .slow(4)
  .room(0.8)
```
