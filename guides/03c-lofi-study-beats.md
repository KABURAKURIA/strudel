# Guide: Creating Lo-Fi Study Beats

This guide focuses on a specific sub-genre of Lo-Fi: "Study Beats" or "Beats to Relax/Study To".
The goal here is **infinite loopability**. The music should be pleasant, repetitive, and non-distracting.

## 1. The Philosophy of the Loop

Unlike a pop song with a Verse/Chorus structure, a Study Beat often stays on the same 4 or 8 bars for minutes or hours.
To prevent boredom, we use **Slow Evolution**.

## 2. Techniques for Infinite Loops

### Slow Modulation
Use `.slow()` on your LFOs (Low Frequency Oscillators) so parameters change over very long periods.

```javascript
// The filter opens and closes over 32 cycles
.lpf(sine.range(500, 3000).slow(32))
```

### Generative Panning
Move sounds slowly around the stereo field.

```javascript
// Pan slowly from left to right
.pan(sine.slow(16))
```

### Random Variation (`randcat`)
Switch between slightly different versions of a pattern.

```javascript
randcat(
  note("c:maj7"),
  note("c:maj9"),
  note("c:maj7").transpose(12)
)
```

## 3. Minimalist Instrumentation

Keep it simple. Too many melodies can be distracting.

- **Drums**: Soft, filtered, low volume.
- **Keys**: Electric Piano (Rhodes), Soft Piano, Vibraphone.
- **Ambience**: Rain, static, coffee shop noise (crucial for filling silence).

## 4. Practical Example: "3 AM Study Session"

Here is a complete code example. Paste this into Strudel and let it run in the background.

```javascript
// "3 AM Study Session"
// An evolving, infinite loop for focus.

setcps(70/60/4) // Slow tempo (70 BPM)

// 1. Ambience Layer
// White noise filtered to sound like distant rain/static
const ambience = s("noise")
  .lpf(1000)
  .hpf(100)
  .gain(0.05)
  .pan(sine.slow(32)) // Slowly moves L <-> R

// 2. The Main Loop (Rhodes)
// Simple chords that repeat forever
const chords = note("f3:maj7 e3:min7 d3:min7 c3:maj7")
  .s("superpiano") // or superpiano
  .lpf(sine.range(800, 1500).slow(16)) // Tone breathes slowly
  .room(0.8) // Large room
  .slow(4) // 4 bars long

// 3. Minimal Drums
// Just enough to keep time
const beat = stack(
  s("bd").struct("x ~ ~ ~ x ~ ~ ~"), // Very sparse kick
  s("hh*16").gain(rand.range(0.0, 0.3)), // Ghost hats
  s("~ sd").nudge(0.05) // Late snare
).lpf(2000) // Darker drums

// 4. Occasional Melodic Sparkle
// Plays rarely (using ?)
const sparkles = note(irand(12).segment(16))
  .scale("C:major")
  .s("sine")
  .gain(0.3)
  .delay(0.5)
  .struct("x?0.1") // Only 10% chance to play a note
  .slow(4)

// Master Mix
stack(
  ambience,
  chords,
  beat,
  sparkles
)
```

## Tips for Customizing
- Change the `scale` in the sparkles layer to change the mood.
- Swap the chord progression in `chords`.
- Adjust the speed of the LFOs (`.slow(N)`) to make changes faster or slower.
