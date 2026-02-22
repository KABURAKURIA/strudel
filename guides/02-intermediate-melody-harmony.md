# Strudel Intermediate Guide: Melody and Harmony

Now that you have mastered rhythms, it's time to dive into melody and harmony. This guide covers scales, chords, and how to create musical progressions.

## 1. Working with Scales

Instead of remembering every sharp and flat, you can use `.scale()`. This allows you to write numbers (degrees) that automatically map to the correct notes.

```javascript
// A simple melody in C Major
note("0 2 4 7 4 2 0")
  .scale("C:major")
  .s("superpiano")
```

Common scales include `major`, `minor`, `dorian`, `phrygian`, `lydian`, `mixolydian`, `locrian`.

```javascript
// A darker feel with D Minor
note("0 1 2 3 4 5 6 7")
  .scale("D:minor")
  .s("sawtooth").lpf(1000)
```

## 2. Playing Chords

Strudel has a powerful chord parser. You can specify chords by their name within the `note` pattern.

```javascript
// Simple triads
note("c:major f:major g:major c:major")
  .s("superpiano")
```

### Extended Chords (The Jazz/Lofi Sound)
To get that rich sound, use 7ths and 9ths.

```javascript
// ii-V-I progression in C
note("d:min7 g:dom7 c:maj7")
  .s("superpiano")
```

## 3. Arpeggios

An arpeggio is a broken chord. You can turn any chord into an arpeggio using `.arp()`.

```javascript
note("c:maj7 f:maj7")
  .arp("updown") // Pattern: 0 1 2 3 2 1
  .s("superpiano")
```

Other arp types: `up`, `down`, `converge`, `diverge`, `random`.

## 4. Transposition

You can move your entire pattern up or down in pitch.

```javascript
note("c e g")
  .s("superpiano")
  .transpose(12) // Up one octave (12 semitones)
```

Or use `.add(number)` if working with scale degrees:

```javascript
note("0 2 4")
  .scale("C:major")
  .add(7) // Shift scale degrees
  .s("superpiano")
```

## 5. Practical Example: Spacey Keys

Let's combine scales and effects for a melodic texture.

```javascript
stack(
  // 1. Chords
  note("c:maj9 a:min9 f:maj7 g:dom7")
    .s("superpiano")
    .slow(2)
    .room(0.8),

  // 2. Arpeggiated Melody
  note("0 2 4 6")
    .scale("C:major")
    .arp("pinkyup")
    .s("triangle")
    .gain(0.8)
    .delay(0.5)
)
```

Next, we will look at how to structure these elements into a specific genre style like Lo-Fi!
