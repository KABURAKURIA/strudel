# Lo-Fi Music Therapy: Nujabes & Nakamura Style

This guide presents 10 original, **full-length Lo-Fi compositions** inspired by the complex jazz-hop production of Nujabes (Jun Seba) and the evocative, minimalist works of Haruka Nakamura. These pieces are designed for therapeutic use, focusing on deep listening, emotional resonance, and introspective reflection.

Each song is an **advanced Strudel arrangement** (approx. 100 lines of code) featuring:
1.  **Solid Grooves:** Classic Boom-Bap and Dilla-style drum patterns that feel grounded and rhythmic.
2.  **Catchy Melodies:** Distinct, hummable "hooks" that repeat and evolve.
3.  **Lush Harmony:** Clear, open jazz voicings (Major 9ths, Minor 11ths).
4.  **Multi-Textured Sound Design:** Layers of vinyl crackle, nature sounds, and synth pads.
5.  **Therapeutic Content:** 30 psychodynamic reflection questions, body scan, and breathwork exercises.

---

## 1. First Snow (Purity)

**Virtue:** Purity / Innocence
**Description:** A delicate, looping Lydian piano melody over a solid, head-nodding beat.

### Strudel Code

```javascript
// First Snow
// Virtue: Purity / Innocence
// Scale: D Lydian
// Tempo: 88 BPM
setcps(0.37)

// --- Sound Design ---
const pianoTone = x => x.s("superpiano").lpf(3000).room(0.6).velocity(0.7)
const subBass = x => x.s("sine").shape(0.4).lpf(200).gain(1.1)

// --- Harmony (Chords) ---
// Dmaj9 - F#m7 - Bm9 - A6
const chords = note("d3 f#3 a3 c#4 e4 . f#3 a3 c#4 e4 . b2 d3 f#3 a3 c#4 . a2 c#3 e3 f#3")
  .apply(pianoTone)
  .sustain(3)

// --- Melody (Main Hook) ---
// A clear, descending motif
const melody = note("a5 . f#5 . e5 . c#5 . d5 c#5 . b4 . a4 . ~")
  .apply(pianoTone)
  .gain(0.9)

// --- Rhythm (Solid Boom Bap) ---
// Kick on 1 and the "and of 2", Snare on 2 and 4.
const kick = s("bd ~ ~ bd ~ ~ ~ ~")
const snare = s("~ ~ sd ~ ~ ~ sd ~").hpf(400)
const hats = s("hh*8").gain("0.8 0.4 0.6 0.4 0.8 0.4 0.5 0.4") // Dynamic hats

const beat = stack(kick, snare, hats).swing(0.1)

// --- Texture ---
const wind = s("noise").lpf(1000).gain(0.05).pan(sine.slow(8))
const crackle = s("noise").hpf(2000).gain(0.03)

// --- Arrangement ---
const A = stack(chords, beat, subBass("d2 . f#2 . b1 . a1"), wind, crackle)
const B = stack(chords, beat, subBass("d2 . f#2 . b1 . a1"), wind, crackle, melody)

cat([
  wind.slow(2), // Intro
  A,
  B,
  B,
  A,
  wind.slow(2) // Outro
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
**Description:** A melancholic acoustic guitar loop with a heavy swing beat.

### Strudel Code

```javascript
// Rusty Swing Set
// Virtue: Acceptance
// Scale: A Dorian
// Tempo: 84 BPM
setcps(0.35)

// --- Sound Design ---
const guitarTone = x => x.s("supermandolin").lpf(2500).legato(1.2).room(0.4)
const bassTone = x => x.s("triangle").lpf(300).gain(1.2)

// --- Harmony (Loop) ---
// Am7 - D7 (Dorian Vamp)
const guitarChords = note("a2 c3 e3 g3 . d3 f#3 a3 c4")
  .apply(guitarTone)
  .velocity(0.8)

// --- Melody (Riff) ---
// A catchy, repetitive riff
const riff = note("e4 g4 a4 ~ . b4 a4 g4 e4")
  .apply(guitarTone)
  .transpose(12)
  .gain(0.9)

// --- Rhythm (Heavy Swing) ---
// A "Dilla" feel with late snares and loose hats
const kick = s("bd ~ ~ bd ~ ~ ~ ~")
const snare = s("~ ~ sd ~ ~ ~ sd ~").nudge(0.05) // Late snare
const hats = s("hh*8").nudge("0 0.02 0 0.03 0 0.02 0 0.04")

const beat = stack(kick, snare, hats).swing(0.15)

// --- Texture ---
const vinyl = s("noise").gain(0.1).hpf(1000)

// --- Arrangement ---
const main = stack(guitarChords, beat, bassTone(note("a1 . d2")), vinyl)
const full = stack(guitarChords, beat, bassTone(note("a1 . d2")), vinyl, riff)

cat([
  vinyl.slow(2),
  main,
  main,
  full,
  full,
  main,
  vinyl.slow(2)
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
**Description:** Deep, warm Rhodes chords and a crisp rimshot beat.

### Strudel Code

```javascript
// Midnight Lamp
// Virtue: Courage
// Scale: E Phrygian
// Tempo: 80 BPM
setcps(0.33)

// --- Sound Design ---
const rhodes = x => x.s("superpiano").lpf(1000).tremolo(3, 0.2).gain(0.8)
const sax = x => x.s("sawtooth").lpf(1500).attack(0.2).release(0.5).gain(0.6)

// --- Harmony (Chords) ---
// Em9 - Fmaj7 (Phrygian)
const chords = note("e2 g3 b3 d4 . f2 a3 c4 e4")
  .apply(rhodes)
  .sustain(4)

// --- Melody (Sax Line) ---
// Slow, expressive phrases
const melody = note("~ b4 ~ c5 . b4 a4 g4 ~")
  .apply(sax)

// --- Rhythm (Rimshot Beat) ---
// Clean and minimal
const kick = s("bd ~ bd ~")
const rim = s("~ sd ~ sd").nudge(0.02).hpf(1000) // Rimshot
const hats = s("hh*8").gain("0.6 0.3 0.5 0.3")

const beat = stack(kick, rim, hats).swing(0.1)

// --- Texture ---
const rain = s("noise").lpf(800).gain(0.15).jux(rev)

// --- Arrangement ---
const bass = note("e1 . f1").s("sine").gain(1.1)
const main = stack(chords, bass, beat, rain)
const full = stack(chords, bass, beat, rain, melody)

cat([
  rain.slow(2),
  main,
  full,
  full,
  main,
  rain.slow(2)
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
21. What does "good person" mean to you?
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
**Description:** Reversed piano loops and a slow, heavy breakbeat.

### Strudel Code

```javascript
// Fading Photograph
// Virtue: Detachment
// Scale: G Mixolydian
// Tempo: 76 BPM
setcps(0.316)

// --- Sound Design ---
const revPiano = x => x.s("superpiano").rev().lpf(1500).slow(2).gain(0.8)

// --- Harmony ---
// G - F - C (Mixolydian Rock)
const chords = note("g2 b2 d3 . f2 a2 c3 . c2 e2 g2 . g2 b2 d3")
  .apply(revPiano)

// --- Melody (Bell) ---
// Simple, nostalgic top line
const bell = note("d5 ~ ~ e5 . d5 ~ b4 ~")
  .s("sine").gain(0.4).delay(0.4)

// --- Rhythm (Heavy Break) ---
const kick = s("bd(3,8)").gain(1.2).lpf(120)
const snare = s("sd(2,8)").shape(0.4)
const hats = s("hh*16").gain("1 0.2 0.8 0.2")

const beat = stack(kick, snare, hats).swing(0.05)

// --- Texture ---
const crackle = s("noise").gain(0.1).hpf(2000)

// --- Arrangement ---
const bass = note("g1 . f1 . c1 . g1").s("sine").gain(1.0)
const groove = stack(chords, bass, beat, crackle)

cat([
  crackle.slow(2),
  stack(chords, crackle),
  groove,
  stack(groove, bell),
  stack(groove, bell),
  groove,
  crackle.slow(2)
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

**Virtue:** Gratitude
**Description:** Swelling strings and a crisp, modern beat.

### Strudel Code

```javascript
// Morning Dew
// Virtue: Gratitude
// Scale: F Lydian
// Tempo: 90 BPM
setcps(0.375)

// --- Sound Design ---
const strings = x => x.s("supersaw").attack(0.5).release(1).lpf(2000).gain(0.7)
const flute = x => x.s("triangle").vowel("u").delay(0.3).gain(0.8)

// --- Harmony ---
// Fmaj7 - G6 (Lydian)
const chords = note("f3 a3 c4 e4 . g3 b3 d4 e4")
  .apply(strings)
  .sustain(4)

// --- Melody ---
const melody = note("c5 e5 g5 a5 . b5 a5 g5 e5")
  .apply(flute)

// --- Rhythm (Crisp) ---
const kick = s("bd ~ bd ~").gain(1.2)
const snare = s("~ sd ~ sd").hpf(400)
const hats = s("hh*8").gain("0.8 0.4 0.6 0.4")

const beat = stack(kick, snare, hats).swing(0.1)

// --- Arrangement ---
const bass = note("f1 . g1").s("sawtooth").lpf(300).gain(0.9)
const main = stack(chords, bass, beat)

cat([
  chords.slow(2),
  main,
  stack(main, melody),
  stack(main, melody),
  main,
  chords.slow(2)
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
**Description:** Stuttering piano and a driving hip-hop beat.

### Strudel Code

```javascript
// Broken Kintsugi
// Virtue: Resilience
// Scale: C Minor Pentatonic
// Tempo: 86 BPM
setcps(0.358)

// --- Sound Design ---
const piano = x => x.s("superpiano").lpf(1500).gain(0.8)

// --- Harmony ---
// Cm7 - Bbmaj7 - Abmaj7 - G7
const chords = note("c3 eb3 g3 bb3 . bb2 d3 f3 a3 . ab2 c3 eb3 g3 . g2 b2 d3 f3")
  .apply(piano)

// --- Rhythm (Driving) ---
const kick = s("bd ~ ~ bd . ~ bd ~ ~").gain(1.2)
const snare = s("~ sd ~ sd").gain(0.9)
const hats = s("hh*8").gain("1 0.3 0.8 0.3")

const beat = stack(kick, snare, hats).swing(0.1)

// --- Melody ---
const melody = note("g5 bb5 c6 ~ . bb5 g5 f5 ~")
  .s("sawtooth").lpf(1000).delay(0.3)

// --- Arrangement ---
const bass = note("c2 . bb1 . ab1 . g1").s("sine").gain(1.0)
const main = stack(chords, bass, beat)

cat([
  chords.slow(2),
  main,
  main,
  stack(main, melody),
  stack(main, melody),
  main,
  chords.slow(2)
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

**Virtue:** Flow
**Description:** Continuous arpeggios and a steady beat.

### Strudel Code

```javascript
// River Flow
// Virtue: Flow
// Scale: Eb Lydian
// Tempo: 92 BPM
setcps(0.38)

// --- Sound Design ---
const arpFx = x => x.s("superpiano").lpf(2000).velocity("0.6 0.4").room(0.5)

// --- Harmony (Arp) ---
const arps = note("eb3 g3 bb3 d4 . f3 a3 c4 e4")
  .apply(arpFx)
  .struct("x*8")

// --- Rhythm (Steady) ---
const kick = s("bd(3,8)").gain(1.1)
const hats = s("hh*16").gain("0.5 0.2 0.4 0.2")
const snare = s("sd(2,8)").gain(0.8)

const beat = stack(kick, hats, snare)

// --- Texture ---
const water = s("noise").lpf(800).gain(0.1)

// --- Arrangement ---
const bass = note("eb2 . f2").s("sawtooth").lpf(300).gain(0.9)
const main = stack(arps, bass, beat, water)

cat([
  water.slow(2),
  main,
  main,
  main,
  water.slow(2)
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
**Description:** Upright bass walking line and dusty drums.

### Strudel Code

```javascript
// Old Bookstore
// Virtue: Wisdom
// Scale: A Minor
// Tempo: 85 BPM
setcps(0.354)

// --- Sound Design ---
const bassFx = x => x.s("triangle").attack(0.05).decay(0.5).lpf(500).gain(1.0)
const pianoFx = x => x.s("superpiano").lpf(1000).room(0.3)

// --- Bass (Walking) ---
const bass = note("a1 b1 c2 e2 . d2 e2 f2 a2 . e2 g#2 b2 d3 . a1 c2 e2 g2")
  .apply(bassFx)

// --- Chords ---
const chords = note("a3 c4 e4 . d3 f3 a3 . e3 g#3 b3 . a3 c4 e4")
  .apply(pianoFx)
  .struct("x ~ ~ ~") // Sparse

// --- Rhythm (Brush) ---
const kick = s("bd ~ ~ bd")
const snare = s("~ sd ~ sd").nudge(0.02)
const hats = s("hh*8").gain("0.5 0.2 0.4 0.2")

const beat = stack(kick, snare, hats).swing(0.2)

// --- Texture ---
const dust = s("noise").hpf(3000).gain(0.05)

// --- Arrangement ---
const main = stack(bass, chords, beat, dust)

cat([
  dust.slow(2),
  main,
  main,
  main,
  dust.slow(2)
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
**Description:** Swirling pads and a light shaker beat.

### Strudel Code

```javascript
// Autumn Wind
// Virtue: Adaptability
// Scale: B Minor
// Tempo: 78 BPM
setcps(0.325)

// --- Sound Design ---
const padFx = x => x.s("supersaw").lpf(1000).attack(1).release(2).gain(0.5)

// --- Harmony ---
const chords = note("b2 d3 f#3 . g2 b3 d4 . a2 c#3 e3 . b2 d3 f#3")
  .apply(padFx)
  .sustain(4)

// --- Melody ---
const melody = note("f#5 ~ e5 ~ d5 ~ c#5 ~")
  .s("sine").gain(0.4).delay(0.5)

// --- Rhythm ---
const kick = s("bd ~ ~ ~")
const shaker = s("hh*16").gain(sine.fast(4).range(0.1, 0.4))

const beat = stack(kick, shaker)

// --- Arrangement ---
const bass = note("b1 . g1 . a1 . b1").s("sine").gain(1.0)
const main = stack(chords, bass, beat)

cat([
  chords.slow(2),
  main,
  stack(main, melody),
  stack(main, melody),
  main,
  chords.slow(2)
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
**Description:** Ambient pads and a heartbeat kick.

### Strudel Code

```javascript
// Horizon Line
// Virtue: Equanimity
// Scale: G Major
// Tempo: 70 BPM
setcps(0.29)

// --- Sound Design ---
const padFx = x => x.s("supersaw").lpf(800).room(2).gain(0.6)

// --- Harmony ---
const chords = note("g2 c3 e3 . c2 e3 g3 . d2 f#3 a3 . g2 b2 d3")
  .apply(padFx)
  .sustain(4)

// --- Rhythm ---
const kick = s("bd ~ bd ~").lpf(300).gain(1.2)

// --- Melody ---
const lead = note("b4 ~ a4 ~ g4 ~")
  .s("triangle").delay(1).gain(0.5)

// --- Arrangement ---
const bass = note("g1 . c1 . d1 . g1").s("sine").gain(1.0)
const main = stack(chords, bass, kick)

cat([
  chords.slow(2),
  main,
  stack(main, lead),
  stack(main, lead),
  main,
  chords.slow(2)
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
