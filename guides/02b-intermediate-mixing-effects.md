# Strudel Intermediate Guide: Mixing and Effects

Once you have your rhythms and melodies, the next step is **Mixing**. This involves shaping the tone, placing sounds in a space, and balancing levels. Strudel provides powerful chainable effects for this.

## 1. Spatial Effects: Reverb

Reverb places your sound in a physical space. In Strudel, we use `.room()` and `.size()`.

- **`room(amount)`**: How "wet" the signal is (0 to 1).
- **`size(amount)`**: How big the room feels (0 to 1).

```javascript
// A dry snare
s("sd")

// A snare in a large hall
s("sd").room(0.8).size(0.9)

// A snare in a small tiled room
s("sd").room(0.4).size(0.1)
```

## 2. Filters: Shaping Tone

Filters remove frequencies. They are essential for separating sounds (e.g., keeping bass out of the hi-hats).

- **`lpf(frequency)`**: Low Pass Filter. Allows lows to pass, cuts highs. Makes things sound "muffled" or "underwater".
- **`hpf(frequency)`**: High Pass Filter. Allows highs to pass, cuts lows. Great for cleaning up mud.
- **`bandf(frequency)`**: Band Pass Filter. Focuses on a specific frequency range.

```javascript
// Remove harsh highs from a synth
note("c3 e3 g3").s("sawtooth").lpf(1500)

// Remove rumble from hi-hats
s("hh*8").hpf(5000)

// Telephone effect (narrow band)
s("bd sd").bandf(1000).bandq(10)
```

### Vowel Filter
A special filter that mimics the human vocal tract.
- **`vowel(char)`**: Can be 'a', 'e', 'i', 'o', 'u'.

```javascript
note("c3").s("sawtooth").vowel("o")
```

## 3. Dynamics and Color

Control volume and add grit.

- **`amp(amount)`**: Volume control. Default is 1.
- **`velocity(amount)`**: Similar to gain but often affects timbre on sampled instruments (like piano).
- **`shape(amount)`**: Distortion/Saturation. Adds harmonics and "fatness".

```javascript
// Distorted Bass
note("c1").s("sine").shape(0.5).amp(0.8)

// Ghost notes using velocity
s("hh*4").velocity("1 0.2 0.8 0.4")
```

## 4. Time Effects: Delay

Echoes and repeats.

- **`delay(amount)`**: Wet/Dry mix (0 to 1).
- **`delaytime(seconds)`**: Time between echoes.
- **`delayfeedback(amount)`**: How long the echoes last (0 to 1).

```javascript
// Dub Delay
s("sd").delay(0.7).delaytime(0.25).delayfeedback(0.8)
```

## 5. Stereo Manipulation

- **`pan(amount)`**: 0 is left, 0.5 is center, 1 is right.
- **`jux(function)`**: "Juxtapose". Applies a function to the right channel only, creating instant stereo width.

```javascript
// Panning hi-hats
s("hh*8").pan(sine.range(0.2, 0.8))

// Wide Stereo Synth (Right channel is pitched up)
note("c3 e3").s("sawtooth")
  .jux(x => x.add(12)) // Right ear hears octave up
```

## 6. Practical Example: The Mix Bus

Here is how you might mix a full loop.

```javascript
stack(
  // 1. Kick: Mono, punchy, no reverb
  s("bd").shape(0.3).amp(1.2),

  // 2. Snare: Some reverb, cut lows
  s("~ sd").hpf(200).room(0.2),

  // 3. Hi-Hats: Panned, filtered high
  s("hh*8").hpf(5000).pan(sine.range(0.3, 0.7)),

  // 4. Chords: Wide, warm, delayed
  note("c4:min7 f3:min7").s("superpiano")
    .lpf(1200)       // Warmth
    .jux(rev)        // Stereo width (reverse right channel)
    .delay(0.3)      // Space
)
```

By giving each element its own space (frequency and stereo position), your mix will sound much cleaner!
