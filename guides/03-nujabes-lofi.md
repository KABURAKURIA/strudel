# Creating Nujabes-Style Lo-Fi Beats in Strudel

This guide focuses on recreating the jazzy, nostalgic sound of Nujabes and Lo-Fi Hip Hop.

## 1. The Harmonic Foundation: Jazz Chords

Nujabes often used samples from jazz records, rich in 7th and 9th chords. In Strudel, we can synthesize these or use samples.

Using the `chord` function:

```javascript
// A simple ii-V-I progression in C Major
note("d3 g3 c3")
  .chord("minor7 dom7 major7")
  .s("piano")
  .slow(2) // Give it room to breathe
```

To make it sound more "sampled" and choppy, we can use `struct` to impose a rhythm on the chords.

```javascript
note("d3 g3 c3")
  .chord("minor7 dom7 major7")
  .s("piano")
  .struct("x ~ x x ~ x") // Rhythmic pattern
  .slow(2)
```

## 2. The Drums: Boom Bap Swing

The drums need to be laid back. We achieve this with **swing** and proper sample selection.

### Basic Pattern
Standard Boom Bap is Kick on 1, Snare on 2, Kick syncopation, Snare on 4.

```javascript
s("bd ~ sd ~ bd bd sd ~")
```

### Adding Swing
Strudel has a `swing` function (or you can use `nudge` manually).

```javascript
stack(
  s("bd ~ sd ~ bd bd sd ~"),
  s("hh*8")
).swing(0.2) // Adjust amount (0.0 to 1.0)
```

## 3. The "Lo-Fi" Texture

To emulate old vinyl, we need to degrade the sound.
- **lpf**: Low Pass Filter to remove brightness.
- **shape**: Distortion/Saturation.
- **hpf**: High Pass Filter to remove muddy lows (sometimes).

```javascript
note("d3 g3 c3")
  .chord("minor7 dom7 major7")
  .s("superpiano")
  .lpf(800)       // Cut highs
  .room(0.8)      // Large room reverb
  .shape(0.3)     // Slight distortion
```

## 4. Putting it all together (Nujabes Vibe)

Here is a recipe for a track. We will use `setcps` to set a tempo around 90 BPM.

```javascript
// Set Tempo (90 BPM)
setcps(90/60/4)

// 1. Chords (The Loop)
const chords = note("f3:major7 e3:minor7 a3:minor7 d3:minor7")
  .s("piano")
  .velocity(0.6)
  .lpf(1500)
  .slow(4)

// 2. Drums (The Beat)
const drums = stack(
  s("bd [~ bd] sd ~"),
  s("hh*8").velocity("0.5 0.3 0.7 0.3") // Dynamic hi-hats
).swing(0.15)

// 3. Vocal Chop / Melody
const melody = note("c5 b4 g4 e4")
  .s("sax")
  .slow(2)
  .delay(0.5)
  .delaytime(0.25)

// Master Stack
stack(
  chords,
  drums,
  melody
)
```

## 5. Tips for Authenticity

- **Offset**: Use `.nudge(0.02)` on the snare to make it drag slightly behind the beat.
- **Silence**: Don't fill every frequency. Leave space (`~`).
- **Repetition**: Lo-Fi is loop-based. Don't vary the melody too much.

In the next section, we will see how to run this code in Google Colab!
