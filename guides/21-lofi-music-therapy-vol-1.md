# Lo-Fi Music Therapy: Nujabes & Nakamura Style

This guide presents 10 original, **full-length Lo-Fi compositions** inspired by the complex jazz-hop production of Nujabes (Jun Seba) and the evocative, minimalist works of Haruka Nakamura. These pieces are designed for therapeutic use, focusing on deep listening, emotional resonance, and introspective reflection.

Each song is an **advanced Strudel arrangement** (approx. 100 lines of code) featuring:
1.  **Complex Jazz Harmony:** Utilizes rootless voicings, quartal harmony, and modal interchange.
2.  **Structured Arrangement:** Intro, Verse, Chorus, Bridge, and Outro sections defined clearly.
3.  **Generative Elements:** Subtle randomization to keep the loop feeling "alive" and organic.
4.  **Multi-Textured Sound Design:** Layers of vinyl crackle, nature sounds, and synth pads.
5.  **Therapeutic Content:** 30 psychodynamic reflection questions, body scan, and breathwork exercises.

---

## 1. First Snow (Purity)

**Virtue:** Purity / Innocence
**Description:** A delicate, looping Lydian piano melody over a soft, shuffled beat, evoking the quiet wonder of a fresh snowfall.

### Strudel Code

```javascript
// First Snow
// Virtue: Purity / Innocence
// Scale: D Lydian (Dreamy, #4)
// Tempo: 86 BPM (approx)
setcps(0.36) // Standard hip hop tempo

// --- Sound Design & Mixing ---
// Define a custom reverb for the piano to simulate a large, empty hall
const hall = x => x.room(0.8).size(0.9).dry(0.4)

// Define a low-pass filter with random modulation for "tape wobble"
const tape = x => x.lpf(sine.range(800, 3000).slow(16))

// --- Harmony (Chords) ---
// D Lydian Progression: Imaj9(#11) - vi9 - iii7 - II7(#11)
// We use open voicings for a spacious feel.
const verseChords = note("d3 g3 a3 c#4 f#4 . b2 f#3 a3 c#4 e4")
  .s("superpiano")
  .velocity(0.6)
  .sustain(4)
  .apply(hall)
  .apply(tape)

const chorusChords = note("f#2 c#3 e3 a3 c#4 . e2 b2 d3 g3 b3")
  .s("superpiano")
  .velocity(0.7)
  .sustain(4)
  .apply(hall)
  .apply(tape)

// --- Melody (Piano Lead) ---
// A delicate, high-register melody that floats above the chords.
// Uses the Lydian #4 (G#) sparingly for color.
const headMelody = note("f#5 a5 c#6 ~ b5 a5 f#5 ~ . e5 f#5 g#5 a5 b5 c#6 d6 ~")
  .s("superpiano")
  .velocity("0.5 0.3 0.6 0.2 0.5 0.4 0.6 0.3")
  .lpf(2000)
  .apply(hall)
  .jux(rev) // Reverse echo for dreaminess

// Generative improvisation using the D Lydian scale
const improvMelody = note("scale(d:lydian, irand(8) + 12)")
  .s("superpiano")
  .velocity(rand.range(0.3, 0.6))
  .struct("x(5,16)") // Syncopated rhythm
  .apply(hall)

// --- Rhythm (Drums) ---
// A soft, brushed kit with a heavy swing.
const kick = s("bd(3,8)").gain(1.2).lpf(100)
const snare = s("~ sd ~ sd").nudge(0.04).shape(0.2).gain(0.8) // Late snare
const hats = s("hh*8").gain(rand.range(0.1, 0.3)).hpf(5000)
const brushes = s("lt*16").gain(0.05).pan(rand) // Textural fill

const drumLoop = stack(kick, snare, hats, brushes).swing(0.1)

// --- Textures ---
// Layers of noise and atmosphere to fill the frequency spectrum.
const wind = s("noise")
  .lpf(sine.range(200, 800).slow(8))
  .gain(0.08)
  .jux(x => x.pan(sine.range(0.2, 0.8).slow(4)))

const bells = note("d6 f#6 a6 c#7")
  .s("sine")
  .gain(0.3)
  .delay(0.5)
  .slow(4) // Very slow twinkle
  .apply(hall)

// --- Arrangement ---
// Structure: Intro -> Verse -> Chorus -> Verse -> Outro
const intro = stack(wind, bells, verseChords).slow(2)
const verse = stack(wind, verseChords, headMelody, drumLoop)
const chorus = stack(wind, chorusChords, improvMelody, drumLoop, bells)
const outro = stack(wind, verseChords).slow(2)

// Play the full song structure
cat([
  intro,
  verse,
  chorus,
  verse,
  outro
])
```

### Body Scan
"Close your eyes. Visualize a single snowflake landing on the tip of your nose. Feel the cool sensation. Let this coolness spread to your cheeks, your forehead, and down your neck. Notice any heat or tension in your jaw and imagine the snow melting it away, leaving only clarity and stillness."

### Breathwork
**Technique: 4-7-8 Breathing**
"Inhale quietly through the nose for 4 seconds. Hold the breath for 7 seconds. Exhale forcefully through the mouth, making a whoosh sound, for 8 seconds. Repeat this cycle 4 times to calm the nervous system."

### Self-Reflection Questions (Psychodynamic)
1.  What is your earliest memory of feeling purely happy?
2.  When did you first learn to hide your true feelings?
3.  Who in your childhood represented safety to you?
4.  What does "innocence" mean to you now versus when you were a child?
5.  Is there a part of you that feels "tainted" or "broken"? Where does that belief come from?
6.  How do you sabotage your own peace when things are going well?
7.  What emotion were you not allowed to express growing up?
8.  If your inner child could speak to you right now, what would they say?
9.  What burden are you carrying that belongs to your parents, not you?
10. Do you believe you deserve forgiveness? Why or why not?
11. What is a recurring dream you have, and how does it make you feel?
12. When do you feel most vulnerable?
13. How do you protect yourself from intimacy?
14. What are you afraid to admit to yourself?
15. Who did you have to be to survive your childhood?
16. What qualities of your parents do you see in yourself?
17. Which of those qualities do you reject?
18. Which of those qualities do you embrace?
19. What does silence feel like to you? Comforting or terrifying?
20. What are you waiting for permission to do?
21. If you could restart one relationship, which one would it be?
22. How do you handle disappointment? Like a child or an adult?
23. What is the "lie" you tell yourself most often?
24. When did you last cry, and what was the underlying cause?
25. Do you trust your own intuition?
26. What does "home" feel like in your body?
27. Are you living your life, or the life someone else wanted for you?
28. What would you do if you weren't afraid of judgment?
29. How do you punish yourself for mistakes?
30. What is one thing you can forgive yourself for today?

---

## 2. Rusty Swing Set (Nostalgia)

**Virtue:** Acceptance
**Description:** A melancholic Dorian guitar loop with vinyl crackle and a lazy, dragging beat, capturing the bittersweet feeling of looking back.

### Strudel Code

```javascript
// Rusty Swing Set
// Virtue: Acceptance / Nostalgia
// Scale: A Dorian (Minor with a natural 6th - F#)
// Tempo: 82 BPM
setcps(0.34)

// --- Sound Design ---
// Create a "Lo-Fi" effect chain for the guitar
const lofi = x => x.lpf(2000).hpf(200).shape(0.4).room(0.3)

// Simulate vinyl warping
const warp = x => x.nudge(sine.range(-0.01, 0.01).slow(8))

// --- Harmony (Guitar Loops) ---
// Alternating between i7 and IV7 (classic Dorian vamp)
// Am7 -> D7
const guitarLoopA = note("a2 e3 g3 c4 . d3 f#3 c4 e4")
  .s("supermandolin") // simulating acoustic guitar
  .apply(lofi)
  .apply(warp)
  .legato(1.2)
  .velocity(0.8)

const guitarLoopB = note("f2 c3 e3 a3 . g2 b2 d3 f#3") // Fmaj7 -> Gmaj7
  .s("supermandolin")
  .apply(lofi)
  .apply(warp)
  .legato(1.2)
  .velocity(0.8)

// --- Melody (Guitar Lead) ---
// A simple, repetitive motif that evokes a childhood memory.
const leadLine = note("e4 ~ g4 a4 ~ b4 a4 g4 . e4 ~ d4 ~ c4 a3 ~")
  .s("supermandolin")
  .transpose(12)
  .velocity(0.9) // Melody is louder
  .apply(lofi)
  .delay(0.3)

// --- Bass (Upright) ---
// A warm, plucked upright bass sound walking between roots.
const upright = note("a1 ~ c2 ~ d2 ~ e2 ~")
  .s("triangle")
  .lpf(400)
  .attack(0.05).decay(0.4)
  .shape(0.3)
  .gain(1.1)

// --- Rhythm (Drums) ---
// A "Dilla-style" beat with unquantized swing.
const kick = s("bd ~ ~ bd [~ bd] ~ ~ ~").gain(1.2).lpf(120)
const snare = s("~ sd ~ sd").nudge(0.06) // Late snare
const hats = s("hh*8").nudge(rand.range(-0.02, 0.02)).gain(rand.range(0.2, 0.4))
const shaker = s("hh*16").hpf(6000).gain(0.05).pan(sine.slow(4))

const beats = stack(kick, snare, hats, shaker).swing(0.2)

// --- Texture (Atmosphere) ---
// Layers of noise to create a "dusty" feeling.
const vinyl = s("noise").gain(0.12).hpf(1000).lpf(3000)
const park = s("noise").lpf(1000).hpf(400).gain(0.05).slow(8).pan(sine.slow(16))

// --- Arrangement ---
// Intro: Just texture and guitar
const intro = stack(vinyl, park, guitarLoopA).slow(2)
// Verse: Full band, loop A
const verse = stack(vinyl, park, guitarLoopA, upright, beats)
// Chorus: Loop B with Lead Melody
const chorus = stack(vinyl, park, guitarLoopB, upright, beats, leadLine)
// Breakdown: Just beats and bass
const breakdown = stack(vinyl, beats, upright)

cat([
  intro,
  verse,
  chorus,
  verse,
  breakdown,
  chorus,
  intro
])
```

### Body Scan
"Focus on the weight of your body on the chair or floor. Feel gravity pulling you down, grounding you. Scan your back, specifically the space between your shoulder blades. Imagine a heavy, rusty chain being lifted off your shoulders. Feel the lightness that remains."

### Breathwork
**Technique: Box Breathing**
"Inhale for 4 seconds. Hold for 4 seconds. Exhale for 4 seconds. Hold for 4 seconds. Visualize a square as you breathe. This brings structure and control to chaotic thoughts."

### Self-Reflection Questions (Psychodynamic)
1.  What is a memory you replay often? Why that specific one?
2.  Does nostalgia feel warm or painful to you?
3.  Who do you miss the most, and what did they provide you emotionally?
4.  What part of your past are you still trying to change?
5.  How has your relationship with your mother shaped your view of love?
6.  How has your relationship with your father shaped your view of authority?
7.  What age do you feel internally?
8.  What did you lose that you haven't grieved yet?
9.  Do you use the past to escape the present?
10. What keeps you from moving forward?
11. If you could apologize to one person, who would it be?
12. If you could receive an apology from one person, who would it be?
13. What family secret has affected you the most?
14. How do you express anger? Is it similar to how your parents did?
15. What brings you comfort when you are lonely?
16. Are you holding onto a grudge? What is it costing you?
17. What does "abandonment" mean to you?
18. Have you ever felt abandoned by yourself?
19. What is your favorite way to numb your feelings?
20. When do you feel most "yourself"?
21. What mask do you wear in public?
22. What mask do you wear with your family?
23. What would happen if you took the masks off?
24. Do you believe you are worthy of love?
25. What condition do you place on your self-worth?
26. How do you sabotage intimacy?
27. What are you afraid of forgetting?
28. What are you afraid of remembering?
29. If your life was a book, what is the title of the current chapter?
30. What can you let go of today?

---

## 3. Midnight Lamp (Solitude)

**Virtue:** Courage
**Description:** Deep Phrygian Rhodes chords and rain textures create a mysterious, safe space for facing the self.

### Strudel Code

```javascript
// Midnight Lamp
// Virtue: Courage
// Scale: E Phrygian (Dark, mysterious, Spanish/Eastern feel)
// Tempo: 80 BPM
setcps(0.33)

// --- Sound Design ---
// Electric Piano settings for a warm, vintage Rhodes sound
const rhodesSound = x => x.s("superpiano").lpf(1200).tremolo(4, 0.2).room(1).gain(0.8)

// --- Harmony (Chords) ---
// Phrygian progression: i - bII - i - iv
// Em9 -> Fmaj7/E -> Em9 -> Am11
const mainChords = note("e2 g3 b3 d4 f#4 . f2 a3 c4 e4 g4")
  .apply(rhodesSound)
  .sustain(3)

const bridgeChords = note("a2 c3 e3 g3 b3 . b2 d#3 f#3 a3 c4") // Am9 -> B7alt
  .apply(rhodesSound)
  .sustain(3)

// --- Melody (Saxophone) ---
// A lonely, breathy saxophone line using the Phrygian b2 (F natural)
const saxLead = note("b4 ~ a4 g4 ~ f4 e4 ~ . d4 c4 b3 ~")
  .s("sawtooth")
  .lpf(1500)
  .attack(0.1).release(0.8)
  .delay(0.5)
  .gain(0.6)
  .vowel("a") // Formant filter for breathiness

// --- Bass (Sub) ---
// Deep sub bass reinforcing the root
const subBass = note("e1 ~ ~ ~ f1 ~ ~ ~")
  .s("sine")
  .shape(0.4) // Saturation
  .gain(1.2)

// --- Rhythm (Minimal) ---
// A sparse, "rimshot" beat to leave space for thought.
const kick = s("bd").slow(2).gain(1.2)
const rim = s("~ sd ~ sd").nudge(0.04).hpf(2000).shape(0.2).gain(0.6)
const hats = s("hh*16").gain(pat("1 0.5 0.2 0.5").fast(4)).hpf(8000)

const beat = stack(kick, rim, hats)

// --- Textures (Environment) ---
// Rain and distant city noise to create a "safe inside, storm outside" feel.
const rain = s("noise").lpf(800).gain(0.25).jux(rev)
const city = s("noise").hpf(500).lpf(1500).gain(0.05).pan(sine.slow(10))

// --- Arrangement ---
const atmosphere = stack(rain, city)
const sectionA = stack(atmosphere, mainChords, subBass, beat)
const sectionB = stack(atmosphere, mainChords, subBass, beat, saxLead)
const sectionC = stack(atmosphere, bridgeChords, subBass, beat)

// Flow: Intro -> Build -> Melody -> Bridge -> Outro
cat([
  atmosphere.slow(2),
  sectionA,
  sectionB,
  sectionB,
  sectionC,
  sectionA,
  atmosphere
])
```

### Body Scan
"Bring your attention to your solar plexus (stomach area). This is often where we hold anxiety and fear. Imagine a warm, golden light emanating from a lamp in your chest, illuminating this darkness. Feel the warmth spreading, relaxing the tight knots in your stomach."

### Breathwork
**Technique: Extended Exhale**
"Inhale deeply for 3 counts. Exhale slowly and completely for 6 counts. Making the exhale longer than the inhale activates the parasympathetic nervous system, signaling safety to the body."

### Self-Reflection Questions (Psychodynamic)
1.  What is the difference between being alone and being lonely for you?
2.  What thoughts come up when you are perfectly still?
3.  What are you running from by staying busy?
4.  What is your biggest fear regarding the future?
5.  How do you comfort yourself when no one else is around?
6.  What part of your personality do you hide from the world?
7.  Why do you feel the need to hide it?
8.  Who told you that you were "too much" or "not enough"?
9.  What is a recurring conflict in your relationships?
10. How do you contribute to that conflict?
11. What does "courage" look like in your daily life?
12. Is it easier for you to give help or receive it?
13. What does your inner critic sound like? Whose voice is it really?
14. What would you do if you knew you couldn't fail?
15. What creates a sense of safety for you?
16. When did you last feel truly safe?
17. How do you handle rejection?
18. Do you reject others before they can reject you?
19. What is a "shadow" trait you possess (e.g., jealousy, greed)?
20. How can you accept that shadow trait as part of you?
21. What does it mean to be a "good person"?
22. Do you feel you have to earn your place in the world?
23. What expectation do you need to drop?
24. How does your body react to stress?
25. What is one boundary you need to set?
26. Who are you trying to impress?
27. Is that person even watching?
28. What brings you genuine joy, unrelated to achievement?
29. How can you be kinder to yourself in moments of failure?
30. What is the bravest thing you have done this year?

---

## 4. Fading Photograph (Impermanence)

**Virtue:** Detachment
**Description:** Mixolydian reversed samples and granular textures suggest the slipping away of time and memory.

### Strudel Code

```javascript
// Fading Photograph
// Virtue: Detachment / Impermanence
// Scale: G Mixolydian (Major with a b7 - F natural)
// Tempo: 78 BPM
setcps(0.325)

// --- Sound Design ---
// Reverse Piano Function
const reverseFx = x => x.rev().lpf(2000).slow(2).gain(0.8)

// Granular Synthesis Simulation using 'chop'
const granularFx = x => x.chop(16).gain(rand.range(0.05, 0.15)).pan(rand)

// --- Harmony (Reversed Piano) ---
// Progression: I - bVII - IV - I
// G -> F -> C -> G
const pianoChords = note("g2 b2 d3 g3 . f2 a2 c3 f3 . c2 e2 g2 c3 . g2 b2 d3 g3")
  .s("superpiano")
  .apply(reverseFx)

// --- Melody (Glitchy Synth) ---
// A fragmented melody that sounds like a corrupted memory.
const glitchMelody = note("d5 e5 f5 d5 ~ c5 ~ b4")
  .scale("g:mixolydian")
  .s("triangle")
  .lpf(1200)
  .struct("x(3,8)")
  .delay(0.4)
  .gain(0.5)

// --- Bass (Deep Sine) ---
const bassLine = note("g1 ~ f1 ~ c1 ~ g1 ~")
  .s("sine")
  .shape(0.6) // Drive
  .gain(1.0)
  .lpf(300)

// --- Rhythm (Broken Beat) ---
// A glitchy, irregular beat pattern.
const kick = s("bd(3,8)").gain(1.2).lpf(100)
const snare = s("sd(2,8)").nudge(0.02).shape(0.4)
const hats = s("hh*16").gain(pat("1 0 1 0 0.5 0 1 0"))
const clicks = s("glitch*4").gain(0.2).pan(rand)

const drumStack = stack(kick, snare, hats, clicks).swing(0.05)

// --- Texture (Noise Layers) ---
const staticNoise = s("noise").gain(0.08).hpf(4000) // High frequency hiss
const tapeWobble = s("noise").lpf(500).gain(0.1).slow(4) // Low rumble

// --- Arrangement ---
const textureLayer = stack(staticNoise, tapeWobble)
const mainLayer = stack(pianoChords, bassLine, drumStack)
const fullLayer = stack(pianoChords, bassLine, drumStack, glitchMelody)

// Intro -> Build -> Full -> Breakdown -> Outro
cat([
  textureLayer,
  stack(textureLayer, pianoChords),
  mainLayer,
  fullLayer,
  fullLayer,
  stack(textureLayer, pianoChords, glitchMelody), // Breakdown
  textureLayer
])
```

### Body Scan
"Scan your hands. Notice the lines on your palms, the temperature of your fingertips. Clench your fists tight, feeling the tension. Hold it. Now release completely. Feel the blood flow returning. Acknowledge that holding on takes effort, while letting go brings relief."

### Breathwork
**Technique: Alternate Nostril Breathing**
"Close your right nostril with your thumb. Inhale through the left. Close the left with your ring finger, open the right, and exhale. Inhale through the right. Close the right, open the left, and exhale. This balances the hemispheres of the brain."

### Self-Reflection Questions (Psychodynamic)
1.  What are you afraid of losing?
2.  How does the idea of death make you feel?
3.  What is something you once loved that you have outgrown?
4.  How do you handle transitions or changes?
5.  Do you cling to people or situations past their expiration date?
6.  Why is it hard for you to say goodbye?
7.  What does "forever" mean to you?
8.  Is there a time you felt time stand still?
9.  What is a mistake you have made that you can't get over?
10. How would your life change if you accepted that everything changes?
11. Who are you without your job/role/status?
12. What defines your identity?
13. Is your identity flexible or rigid?
14. What is a "happy ending" to you?
15. Do you believe you are in control of your life?
16. How much of that control is an illusion?
17. What causes you the most anxiety?
18. Is that anxiety related to the future or the past?
19. How can you be more present?
20. What distracts you from the here and now?
21. What is the most beautiful thing you saw today?
22. Did you take the time to appreciate it?
23. What are you rushing towards?
24. What are you rushing away from?
25. If you died tomorrow, what would you regret not doing?
26. What would you be proud of?
27. Who would you want by your side?
28. What legacy do you want to leave?
29. Is your current life aligned with that legacy?
30. What can you change today to align closer to your truth?

---

## 5. Morning Dew (Hope)

**Virtue:** Gratitude / Hope
**Description:** Bright Lydian strings and a flute melody over a crisp snare, symbolizing a fresh start.

### Strudel Code

```javascript
// Morning Dew
// Virtue: Gratitude
// Scale: F Lydian (Major with #4 - B natural)
// Tempo: 88 BPM
setcps(0.36)

// --- Sound Design ---
// Strings envelope for swelling effect
const padEnv = x => x.attack(0.5).release(1).lpf(2000).gain(0.7)

// Flute timbre using triangle wave and vowels
const fluteSound = x => x.s("triangle").vowel("u").delay(0.4).gain(0.8)

// --- Harmony (Pads) ---
// Progression: I - II - I - II (Lydian vamp)
// Fmaj7 -> Gmaj7/F
const padChords = note("f3 a3 c4 e4 . g3 b3 d4 f#4")
  .s("supersaw")
  .apply(padEnv)
  .sustain(4)

// --- Melody (Flute) ---
// A playful, rising melody.
const fluteLine = note("c5 d5 e5 f#5 g5 a5 ~ . g5 f#5 e5 d5 c5 a4 ~")
  .scale("f:lydian")
  .apply(fluteSound)
  .slow(2)

// --- Bass (Walking) ---
// An active walking bassline.
const walkingBass = note("f1 a1 c2 e2 . g1 b1 d2 f#2")
  .s("sawtooth")
  .lpf(400)
  .gain(0.9)

// --- Rhythm (Crisp Beat) ---
const kick = s("bd ~ bd ~").gain(1.2).lpf(150)
const snare = s("~ sd ~ sd").hpf(500)
const hats = s("hh*8").velocity("0.8 0.4 0.6 0.4")
const ride = s("hh*4").open().gain(0.4) // Ride cymbal on quarter notes

const drumLoop = stack(kick, snare, hats, ride).swing(0.15)

// --- Texture (Shimmer) ---
// High frequency noise to simulate morning light.
const shimmer = s("noise").hpf(4000).gain(0.05).pan(rand).slow(4)

// --- Arrangement ---
const intro = stack(padChords, shimmer).slow(2)
const main = stack(padChords, shimmer, walkingBass, drumLoop)
const full = stack(padChords, shimmer, walkingBass, drumLoop, fluteLine)

cat([
  intro,
  main,
  full,
  full,
  main,
  intro
])
```

### Body Scan
"Focus on your eyes. Squeeze them shut tight, then release. Feel the tiny muscles around your eyes relaxing. Imagine looking at the world for the first time. What colors do you see behind your eyelids? Open your inner vision to light."

### Breathwork
**Technique: Breath of Fire (Kapalabhati)**
"Short, sharp exhalations through the nose, snapping the belly in. The inhalation happens passively. Do this for 30 seconds to energize the body and clear the mind."

### Self-Reflection Questions (Psychodynamic)
1.  What are you grateful for right now?
2.  What is a small joy you often overlook?
3.  Who has helped you without asking for anything in return?
4.  How do you show appreciation to others?
5.  How do you show appreciation to yourself?
6.  What is a hardship that eventually led to something good?
7.  What gives you hope?
8.  Do you believe people can change?
9.  Do you believe *you* can change?
10. What is a skill you are proud of?
11. What is a trait you admire in others?
12. Why do you admire that specific trait?
13. Is it because you lack it, or because you have it too?
14. What does "success" mean to you?
15. Has your definition of success changed over time?
16. What makes you feel alive?
17. When was the last time you laughed uncontrollably?
18. Who brings out the best in you?
19. Who brings out the worst in you?
20. Why do you keep the latter in your life?
21. What is a "silver lining" in your current struggle?
22. How do you handle compliments?
23. Do you deflect praise? Why?
24. What would it feel like to simply say "thank you"?
25. What are you looking forward to?
26. If you had no obligations, how would you spend today?
27. What prevents you from doing that?
28. Is that obstacle real or imagined?
29. What is the kindest thing someone has done for you?
30. What is the kindest thing you have done for someone else?

---

## 6. Broken Kintsugi (Resilience)

**Virtue:** Resilience
**Description:** Disjointed beats and Minor Pentatonic "broken" chords resolving to consonance.

### Strudel Code

```javascript
// Broken Kintsugi
// Virtue: Resilience
// Scale: C Minor Pentatonic (Bluesy/Broken)
// Tempo: 84 BPM
setcps(0.35)

// --- Sound Design ---
// "Broken" piano sound using detuning and bitcrushing effect
const brokenPiano = x => x.s("superpiano").lpf(1500).jux(x => x.detune(0.3)).gain(0.8)

// Glitch effects
const glitchFx = x => x.nudge(rand.range(-0.05, 0.05)).gain(0.4)

// --- Harmony (Chords) ---
// Dissonant clusters resolving to open chords
const verseChords = note("c3 eb3 f3 g3 . bb2 d3 f3 a3") // Cm11 -> Bbmaj7
  .apply(brokenPiano)

const chorusChords = note("f3 ab3 c4 eb4 . g3 bb3 d4 f4") // Fm7 -> Gm7
  .apply(brokenPiano)

// --- Melody (Generative) ---
// Short, stuttering phrases
const melody = note("scale(c:minorPentatonic, irand(5))")
  .s("sawtooth")
  .lpf(800)
  .struct("x(3,8)")
  .delay(0.2)

// --- Bass (Stutter) ---
const bass = note("c2 [~ c2] eb2 [f2 ~] g2 ~")
  .s("sine")
  .shape(0.6)
  .gain(0.9)

// --- Rhythm (Dilla Swing) ---
// Heavy swing and unquantized feel
const kick = s("bd").nudge(rand.range(-0.03, 0.03)).gain(1.2)
const snare = s("sd").nudge(0.05).shape(0.5) // Late snare
const hats = s("hh*8").nudge(pat("0 0.02 0 0.04").fast(8))

const drumLoop = stack(kick, snare, hats)

// --- Texture ---
const glitches = s("glitch").apply(glitchFx)
const warmth = note("c2").s("supersaw").lpf(600).gain(0.2) // Pad bed

// --- Arrangement ---
const A = stack(verseChords, bass, drumLoop, glitches)
const B = stack(chorusChords, bass, drumLoop, melody, warmth)

cat([
  warmth.slow(4), // Intro
  A,
  A,
  B,
  B,
  A,
  warmth.slow(4) // Outro
])
```

### Body Scan
"Scan your body for scars, physical or emotional. Focus on an area that has been injured in the past. Send breath to that area. Acknowledge its strength in healing. Visualize gold filling the cracks, making the repaired spot stronger and more beautiful than before."

### Breathwork
**Technique: Lion's Breath**
"Inhale deeply through the nose. Open your mouth wide, stick out your tongue, and exhale forcefully with a 'HA' sound. This releases tension in the jaw and face and helps express pent-up frustration."

### Self-Reflection Questions (Psychodynamic)
1.  What is your greatest failure?
2.  What did you learn from it?
3.  How do you define "strength"?
4.  Is asking for help a sign of weakness or strength to you?
5.  What was the hardest day of your life?
6.  How did you get through it?
7.  What resources (internal or external) did you use?
8.  Do you see yourself as a victim or a survivor?
9.  How does that label affect your actions?
10. What part of you feels "broken"?
11. Can you love that broken part?
12. What does "healing" look like to you?
13. Is healing a destination or a process?
14. What sets you back in your healing journey?
15. How do you treat yourself when you regress?
16. Are you patient with your own progress?
17. What is a challenge you are currently facing?
18. What is the worst-case scenario?
19. Can you handle the worst-case scenario?
20. What is the best-case scenario?
21. Why is it hard to imagine the best case?
22. Who is your role model for resilience?
23. What have they overcome?
24. How are you similar to them?
25. What is a "scar" you are proud of?
26. What is a "scar" you hide?
27. How has pain changed you?
28. Has it made you harder or softer?
29. Which would you prefer to be?
30. What promise do you need to make to yourself today?

---

## 7. River Flow (Letting Go)

**Virtue:** Flow / Tao
**Description:** Continuous Lydian piano arpeggios and water sounds over a steady rhythm.

### Strudel Code

```javascript
// River Flow
// Virtue: Flow / Letting Go
// Scale: Eb Lydian
// Tempo: 90 BPM
setcps(0.375)

// --- Sound Design ---
const waterFx = x => x.lpf(800).hpf(200).gain(0.15).pan(sine.slow(8))
const pianoFx = x => x.s("superpiano").lpf(2500).room(0.6).velocity(sine.range(0.5, 0.8).slow(4))

// --- Harmony (Arpeggios) ---
// Constant motion: Ebmaj7 -> F6 -> Gm7 -> F6
const arpPattern = note("eb3 g3 bb3 d4 . f3 a3 c4 d4 . g3 bb3 d4 f4 . f3 a3 c4 d4")
  .apply(pianoFx)
  .struct("x*8") // fast 8th notes

// --- Melody (Bass Melody) ---
// The bass carries the melodic theme here, flowing underneath.
const bassMelody = note("eb2 ~ ~ f2 ~ g2 ~ f2")
  .s("sawtooth").lpf(300).gain(0.9)

// --- Rhythm (Stream) ---
// A straight, non-swing beat to represent steady flow.
const kick = s("bd(3,8)").gain(1.1)
const hats = s("hh*16").gain(pat("1 0.5 0.8 0.4").fast(4))
const snare = s("sd(2,8)").gain(0.7)

const streamBeat = stack(kick, hats, snare)

// --- Texture ---
const water = s("noise").apply(waterFx)
const bubbles = note("scale(eb:lydian, irand(8) + 12)")
  .s("sine").gain(0.2).delay(0.2)

// --- Arrangement ---
const nature = stack(water, bubbles)
const music = stack(arpPattern, bassMelody, streamBeat)

cat([
  nature.slow(2),
  stack(nature, arpPattern),
  stack(nature, music),
  stack(nature, music),
  stack(nature, arpPattern),
  nature.slow(2)
])
```

### Body Scan
"Imagine your body is made of water. Feel the fluidity in your joints, your blood, your breath. Find a place where the energy feels 'stuck' or 'frozen'. Imagine warm water flowing through that blockage, melting it, allowing the current to move freely again."

### Breathwork
**Technique: Circular Breathing Visualization**
"Inhale and exhale without a pause between them. Imagine the breath as a wheel turning. Up the back on the inhale, down the front on the exhale. Connect the breath into a continuous loop of energy."

### Self-Reflection Questions (Psychodynamic)
1.  Where in your life are you forcing things?
2.  Where in your life are you flowing?
3.  What are you trying to control that is uncontrollable?
4.  Why does lack of control scare you?
5.  What would happen if you just stopped fighting?
6.  Do you trust the process of life?
7.  When have things worked out better than you planned?
8.  When have your plans failed completely?
9.  How did you react to that failure?
10. What does "surrender" mean to you?
11. Is surrender passive or active?
12. What creates friction in your daily life?
13. How can you reduce that friction?
14. Are you swimming upstream or downstream?
15. What emotion are you resisting?
16. What happens when you resist an emotion?
17. What happens when you allow it to flow through you?
18. Who drains your energy?
19. Who replenishes your energy?
20. How can you protect your energy?
21. What is a habit that no longer serves you?
22. Why do you keep doing it?
23. What is the payoff?
24. Is the payoff worth the cost?
25. What does "peace" feel like?
26. Is peace boring to you?
27. Do you crave chaos? Why?
28. How can you find stillness in movement?
29. What is one thing you can stop doing today?
30. What direction is the river of your life taking you?

---

## 8. Old Bookstore (Wisdom)

**Virtue:** Humility
**Description:** Dusty drums and Harmonic Minor bass/sax for a scholarly atmosphere.

### Strudel Code

```javascript
// Old Bookstore
// Virtue: Humility / Wisdom
// Scale: A Harmonic Minor (Exotic, old-world feel)
// Tempo: 85 BPM
setcps(0.354)

// --- Sound Design ---
const dusty = x => x.hpf(2000).lpf(6000).gain(0.08).pan(rand)
const saxFx = x => x.s("sawtooth").lpf(1200).delay(0.4).gain(0.6)
const pianoFx = x => x.s("superpiano").lpf(1500).room(0.4).gain(0.8)

// --- Harmony (Comping) ---
// i - iv - V7 - i
const pianoComp = note("a2 c3 e3 . d3 f3 a3 . e3 g#3 b3 . a2 c3 e3")
  .apply(pianoFx)
  .struct("x ~ x ~") // Sparse comping

// --- Bass (Walk) ---
// Walking bass outlining the changes
const bassWalk = note("a1 b1 c2 c#2 . d2 e2 f2 d2 . e2 f2 e2 d2 . c2 b1 a1 g#1")
  .s("triangle").lpf(500).gain(0.9)

// --- Melody (Sax) ---
// A fragmented, improvisational line
const saxSolo = note("~ c5 b4 a4 ~ . f4 e4 d4 ~ . g#4 a4 b4 ~ . c5 ~ a4 ~")
  .apply(saxFx)

// --- Rhythm (Breakbeat) ---
// A classic chopped breakbeat feel
const kick = s("bd ~ ~ bd [~ bd] ~ ~ ~")
const snare = s("~ sd ~ sd").nudge(0.02)
const hats = s("hh*8").gain(pat("1 0.5 0.8 0.3").fast(8))
const ghost = s("sd*16").gain(0.05) // Ghost notes

const beats = stack(kick, snare, hats, ghost).swing(0.2)

// --- Texture ---
const dust = s("noise").apply(dusty)

// --- Arrangement ---
const groove = stack(bassWalk, pianoComp, beats, dust)
const solo = stack(bassWalk, pianoComp, beats, dust, saxSolo)

cat([
  dust.slow(4),
  groove,
  groove,
  solo,
  solo,
  groove,
  dust.slow(4)
])
```

### Body Scan
"Focus on the top of your head (crown). Imagine a thread pulling you upwards, lengthening your spine. Tuck your chin slightly. Feel the dignity and length in your neck. Relax your shoulders down. Embody the posture of a wise, attentive student."

### Breathwork
**Technique: Humming Breath (Bhramari)**
"Inhale deep. Close your ears with your thumbs. Exhale while making a high-pitched humming sound like a bee. Feel the vibration in your head and skull. This soothes the mind and improves focus."

### Self-Reflection Questions (Psychodynamic)
1.  What is the wisest advice you've ever received?
2.  Did you follow it?
3.  Who is a mentor figure in your life?
4.  What did you learn from them?
5.  What do you think you know for sure?
6.  Could you be wrong about that?
7.  How do you handle being corrected?
8.  Do you feel the need to always be right?
9.  Where does that need come from?
10. What is a mistake you made recently?
11. Did you own up to it?
12. What does "integrity" mean to you?
13. Are you the same person in private as in public?
14. What is a book or story that changed your life?
15. Why did it resonate with you?
16. What are you curious about?
17. When did you stop asking questions?
18. What is something you want to learn?
19. What stops you from learning it?
20. Do you judge others for their ignorance?
21. Do you judge yourself for yours?
22. What is the value of silence?
23. Do you listen to understand, or to reply?
24. What have you unlearned recently?
25. How has your worldview shifted in the last 5 years?
26. What prejudice do you hold?
27. Are you willing to examine it?
28. What does "truth" feel like?
29. Who do you go to for advice?
30. What is one piece of wisdom you would pass to the next generation?

---

## 9. Autumn Wind (Change)

**Virtue:** Adaptability
**Description:** Swirling pads and wind chimes in Aeolian, evoking the turning of seasons.

### Strudel Code

```javascript
// Autumn Wind
// Virtue: Adaptability
// Scale: B Aeolian (Natural Minor)
// Tempo: 75 BPM
setcps(0.3125)

// --- Sound Design ---
const padSweep = x => x.s("supersaw").lpf(sine.range(800, 2000).slow(16)).gain(0.6)
const chimeDelay = x => x.s("sine").delay(0.5).gain(0.4)

// --- Harmony (Pads) ---
// i - VI - III - VII (Epic minor progression)
// Bm -> G -> D -> A
const chords = note("b2 d3 f#3 . g2 b3 d4 . d3 f#3 a3 . a2 c#3 e3")
  .apply(padSweep)
  .sustain(4)

// --- Melody (Random Chimes) ---
// Generative wind chimes reacting to the wind
const windChimes = note("scale(b:aeolian, irand(12) + 12)")
  .apply(chimeDelay)
  .struct("x(5,16)") // Irregular rhythm
  .slow(0.5)

// --- Texture (Environment) ---
const wind = s("noise").lpf(1000).gain(0.1).pan(sine.slow(8))
const leaves = s("noise").hpf(1000).lpf(3000).struct("x(3,8)").gain(0.05)

// --- Bass ---
const rootBass = note("b1 . g1 . d1 . a1")
  .s("sine").shape(0.5).gain(0.9)

// --- Rhythm (Shaker) ---
// Very minimal percussion
const shaker = s("hh*16").gain(sine.range(0.1, 0.4).fast(4)).hpf(4000)

// --- Arrangement ---
const atmosphere = stack(wind, leaves, windChimes)
const music = stack(chords, rootBass, shaker)

cat([
  atmosphere,
  stack(atmosphere, chords),
  stack(atmosphere, music),
  stack(atmosphere, music),
  stack(atmosphere, chords),
  atmosphere
])
```

### Body Scan
"Focus on your skin. Feel the air touching your skin. The temperature, the movement of air in the room. Notice how your skin protects you while allowing you to sense the world. Feel the boundary between 'you' and 'not you'. Let that boundary soften."

### Breathwork
**Technique: Cooling Breath (Sitali)**
"Curl your tongue into a tube (or purse your lips). Inhale through the tongue/lips, feeling the cool air. Close your mouth and exhale through the nose. This cools the body and tempers anger or agitation."

### Self-Reflection Questions (Psychodynamic)
1.  How do you handle the changing seasons of life?
2.  Do you prefer summer (activity) or winter (rest)?
3.  What season of life are you in right now?
4.  What needs to die in your life to make room for the new?
5.  What are you holding onto that is dead?
6.  How does your body react to sudden change?
7.  Do you freeze, fight, or flee?
8.  What is a change you didn't want but needed?
9.  How do you define "growth"?
10. Is growth always comfortable?
11. When was the last time you felt "stuck"?
12. What got you moving again?
13. What is your relationship with time?
14. Do you feel you have enough time?
15. How do you spend your free time?
16. Does that align with your values?
17. What is a habit you want to change?
18. Why is it hard to break?
19. What emotional need does that habit meet?
20. Can you meet that need in a healthier way?
21. What does "flexibility" mean to you mentally?
22. Are you stubborn?
23. When is stubbornness a virtue?
24. When is it a vice?
25. How do you handle disagreement?
26. Can you hold two opposing truths at once?
27. What is a belief you have changed your mind about?
28. How did that change happen?
29. What is the most consistent thing in your life?
30. Are you ready for what comes next?

---

## 10. Horizon Line (Perspective)

**Virtue:** Equanimity
**Description:** A wide stereo field with Hirajoshi scale pads, creating a sense of vastness.

### Strudel Code

```javascript
// Horizon Line
// Virtue: Equanimity / Perspective
// Scale: G Hirajoshi (Japanese Pentatonic: 1 2 b3 5 b6)
// Tempo: 70 BPM
setcps(0.29)

// --- Sound Design ---
const massiveReverb = x => x.room(0.95).size(0.9).gain(0.8)
const brightLead = x => x.s("triangle").lpf(1500).delay(0.8).gain(0.6)

// --- Harmony (Drone/Pad) ---
// Using Sus4 chords for ambiguous, open feeling
const padA = note("g2 c3 d3 g3") // Gsus4
  .s("supersaw").lpf(800).apply(massiveReverb)

const padB = note("eb2 ab2 bb2 eb3") // Ebsus4 (Hirajoshi VI)
  .s("supersaw").lpf(800).apply(massiveReverb)

// --- Melody (Lead) ---
// A slow, searching melody
const leadMelody = note("d5 ~ c5 ~ bb4 ~ g4 ~")
  .scale("g:hirajoshi")
  .apply(brightLead)
  .slow(2)

// --- Bass (Sub) ---
const sub = note("g0 . eb0")
  .s("sine").shape(0.4).gain(1.0)

// --- Texture (Air) ---
const air = s("noise").hpf(5000).gain(0.05).pan(sine.slow(12))

// --- Rhythm (Heartbeat) ---
// Simulating a slow heart rate at rest.
const heartbeat = s("bd ~ bd ~").lpf(300).gain(1.2)

// --- Arrangement ---
const horizon = stack(padA, air, sub)
const view = stack(padB, air, sub, leadMelody)
const pulse = stack(heartbeat)

cat([
  horizon.slow(2),
  stack(horizon, pulse),
  stack(view, pulse),
  stack(view, pulse),
  horizon.slow(2)
])
```

### Body Scan
"Expand your awareness to the entire room. Don't look, just sense. Feel the space behind you, above you, below you. Now expand further, to the building, the city, the sky. Feel yourself as a small but integral part of this vastness. Feel the peace of being small."

### Breathwork
**Technique: 4-4-6-2 Breathing**
"Inhale for 4. Hold for 4. Exhale for 6. Hold empty for 2. This pattern helps to lengthen the breath and creates a moment of stillness at the end of the exhale."

### Self-Reflection Questions (Psychodynamic)
1.  How big are your problems in the grand scheme of things?
2.  Does nature make you feel significant or insignificant?
3.  Is that feeling comforting or scary?
4.  What is your place in the world?
5.  What is the purpose of your life?
6.  Do you need a purpose to be happy?
7.  What if the purpose is just "to be"?
8.  How do you judge others?
9.  How do you judge yourself?
10. Are your standards realistic?
11. What would you say to a friend in your situation?
12. Why can't you say that to yourself?
13. What is the "horizon" you are looking towards?
14. Are you enjoying the journey or just focused on the destination?
15. What happens if you never reach the destination?
16. Can you be happy *now*?
17. What condition must be met for you to be happy?
18. Who taught you that condition?
19. Is it true?
20. What is "balance" to you?
21. Which area of your life is most out of balance?
22. Work, love, health, or spirit?
23. What is one small step to restore balance?
24. How do you handle chaos?
25. Can you find the calm center in the storm?
26. What anchors you?
27. Who anchors you?
28. What are you building?
29. Will it last?
30. Does it matter if it lasts?
