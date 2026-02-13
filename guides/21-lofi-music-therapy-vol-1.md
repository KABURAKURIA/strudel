# Lo-Fi Music Therapy: Nujabes & Nakamura Style

This guide presents 10 original Lo-Fi compositions inspired by the legendary Nujabes (Jun Seba) and the evocative works of Haruka Nakamura. These pieces are designed for therapeutic use, focusing on deep listening, emotional resonance, and introspective reflection.

Each song is paired with:
1.  **Strudel Code**: A full arrangement to play and modify.
2.  **Target Virtue**: A specific quality to cultivate.
3.  **Body Scan**: A guided script for physical awareness.
4.  **Breathwork**: A specific breathing technique.
5.  **30 Self-Reflection Questions**: Based on psychodynamic approaches, exploring childhood, unconscious patterns, and emotional landscapes.

---

## 1. First Snow (Purity)

**Virtue:** Purity / Innocence
**Description:** A delicate, looping Lydian piano melody over a soft, shuffled beat, evoking the quiet wonder of a fresh snowfall.

### Strudel Code

```javascript
// First Snow
// Scale: D Lydian (Dreamy, #4)
setcps(0.18)

// 1. Piano: Gentle, high-register melody
const piano = note("0 2 4 6 7 6 4 2")
  .scale("d:lydian")
  .transpose(12) // Octave up
  .s("superpiano")
  .velocity("0.4 0.3 0.5 0.2")
  .lpf(2000)
  .room(0.8)
  .jux(rev) // Reverse echo for dreaminess

// 2. Chords: Lush major 9ths and #11s
const chords = note("0 4 2 5")
  .scale("d:lydian")
  .transpose("-12") // Lower octave
  .s("superpiano")
  .lpf(800)
  .velocity(0.5)
  .sustain(4)
  .struct("x(3,8)") // Polyrhythmic feel

// 3. Texture: Wind/Noise
const wind = s("noise")
  .lpf(sine.range(200, 800).slow(8))
  .gain(0.05)
  .jux(x => x.pan(sine.range(0.2, 0.8).slow(4)))

// 4. Beat: Soft brushes and rim
const drums = stack(
  s("bd(3,8)"),
  s("hh*8").gain(rand.range(0.1, 0.3)).hpf(5000),
  s("~ sd ~ sd").nudge(0.04).shape(0.2).gain(0.4)
).swing(0.1)

// Arrangement
stack(
  wind,
  chords,
  piano.slow(2),
  drums
)
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
// Scale: A Dorian (Jazz Minor feel)
setcps(0.2)

// 1. Guitar: Lo-Fi acoustic loop
const guitar = note("0 2 3 5 7 5 3 2")
  .scale("a:dorian")
  .s("supermandolin")
  .lpf(2000)
  .legato(1.2)
  .room(0.5)
  .jux(x => x.delay(0.1)) // Stereo widening
  .slow(2)

// 2. Vinyl Crackle
const crackle = s("noise").gain(0.08).hpf(1000).lpf(3000)

// 3. Bass: Upright and warm
const bass = note("0 -2 -4 -5")
  .scale("a:dorian")
  .s("triangle")
  .lpf(400)
  .shape(0.3)

// 4. Beat: Dragging/Drunk feel
const beat = stack(
  s("bd ~ ~ bd"),
  s("~ sd ~ sd").nudge(0.06), // Late snare
  s("hh*4").nudge(rand.range(-0.02, 0.02)) // Humanized hats
).swing(0.2)

// Arrangement
stack(
  crackle,
  guitar,
  bass,
  beat
)
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
// Scale: E Phrygian (Deep, introspection)
setcps(0.16)

// 1. Rain Texture
const rain = s("noise").lpf(800).gain(0.2).jux(rev)

// 2. Rhodes: Deep, sustained chords
// i - bII - i - iv
const rhodes = note("0 1 0 3")
  .scale("e:phrygian")
  .chord("min9") // Automatic chord voicing
  .s("superpiano")
  .lpf(600)
  .tremolo(4, 0.2)
  .room(1)

// 3. Saxophone: Distant, lonely melody
const sax = note("~ 4 ~ 2 1 ~ -1 ~")
  .scale("e:phrygian")
  .s("sawtooth") // Synth sax
  .lpf(1000)
  .attack(0.2)
  .release(0.8)
  .delay(0.6)
  .gain(0.4)

// 4. Beat: Minimal click
const click = stack(
  s("bd").slow(2),
  s("sd").nudge(0.04).hpf(2000).gain(0.3)
)

// Arrangement
stack(
  rain,
  rhodes,
  sax.slow(2),
  click
)
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
// Scale: G Mixolydian (Nostalgic, resolved)
setcps(0.2)

// 1. Reversed Piano
const revPiano = note("0 2 4 6")
  .scale("g:mixolydian")
  .s("superpiano")
  .rev() // Play backwards
  .lpf(1500)
  .slow(2)

// 2. Granular Texture
const granular = s("noise")
  .chop(16)
  .gain(rand.range(0, 0.1))
  .pan(rand)

// 3. Bass: Deep sine
const bass = note("0 -3 -2 -4")
  .scale("g:mixolydian")
  .s("sine").shape(0.5)

// 4. Beat: Broken/Glitchy
const glitchBeat = stack(
  s("bd(3,8)"),
  s("sd(2,8)").nudge(0.02),
  s("hh*16").gain(pat("1 0 1 0 0.5 0 1 0"))
).swing(0.05)

// Arrangement
stack(
  revPiano,
  granular,
  bass,
  glitchBeat
)
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
**Description:** Bright Lydian strings and a flute melody over a crisp snare, symbolizing a fresh start.

### Strudel Code

```javascript
// Morning Dew
// Scale: F Lydian (Bright, hopeful)
setcps(0.22)

// 1. Strings: Swelling pads
const strings = note("0 2 4 6")
  .scale("f:lydian")
  .chord("maj7")
  .s("supersaw")
  .attack(0.5)
  .release(1)
  .lpf(1200)
  .gain(0.6)

// 2. Flute: Playful melody
const flute = note("6 4 2 0 7 6 4 2")
  .scale("f:lydian")
  .transpose(12)
  .s("triangle")
  .vowel("u") // Flute-like timbre
  .delay(0.4)
  .slow(2)

// 3. Bass: Walking bass
const walkingBass = note("0 2 4 6")
  .scale("f:lydian")
  .s("sawtooth")
  .lpf(300)

// 4. Beat: Crisp and steady
const beat = stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*8").velocity("0.8 0.4")
).swing(0.15)

// Arrangement
stack(
  strings,
  flute,
  walkingBass,
  beat
)
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
// Scale: C Minor Pentatonic (Bluesy/Broken)
setcps(0.2)

// 1. Chords: Dissonant to Consonant
const chords = note("0 2 3 4")
  .scale("c:minorPentatonic")
  .chord("min7")
  .s("superpiano")
  .lpf(1000)
  .jux(x => x.detune(0.3)) // Slight detune for "broken" feel

// 2. Bass: Stuttering
const bass = note("0 [~ 0] 2 [3 ~] 4 ~")
  .scale("c:minorPentatonic")
  .s("sine")
  .shape(0.6)

// 3. Beat: Heavy Dilla Swing/Nudge
const beat = stack(
  s("bd").nudge(rand.range(-0.03, 0.03)),
  s("sd").nudge(0.05), // Late snare
  s("hh*8").nudge(pat("0 0.02 0 0.04").fast(8))
)

// Arrangement
stack(
  chords,
  bass,
  beat
)
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
// Scale: Eb Lydian (Warm, flowing)
setcps(0.24)

// 1. Piano: Continuous Arpeggios
const arps = note("0 2 4 6 5 4 2 0")
  .scale("eb:lydian")
  .s("superpiano")
  .velocity(sine.range(0.3, 0.6).slow(4))
  .lpf(1500)

// 2. Water Texture
const water = s("noise").lpf(600).hpf(200).gain(0.1).pan(sine.slow(8))

// 3. Bass: Drone
const drone = note("0").scale("eb:lydian")
  .s("sawtooth").lpf(100).gain(0.8)

// 4. Beat: Light percussion
const perc = stack(
  s("bd(3,8)"),
  s("hh*16").gain(pat("1 0.5 0.8 0.4").fast(4))
).swing(0) // Straight feel for flow

// Arrangement
stack(
  arps,
  water,
  drone,
  perc
)
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
// Scale: A Harmonic Minor (Ancient, Wise)
setcps(0.18)

// 1. Upright Bass: Jazzy walk
const bass = note("0 2 3 4")
  .scale("a:harmonicMinor")
  .s("triangle")
  .attack(0.05)
  .decay(0.5)
  .lpf(500)

// 2. Chords: Piano comping
const comp = note("0 3 0 4")
  .scale("a:harmonicMinor")
  .chord("min7")
  .s("superpiano")
  .lpf(1000)
  .room(0.4)

// 3. Sax: Fragmented
const sax = note("~ 2 4 ~ 5")
  .scale("a:harmonicMinor")
  .s("sawtooth")
  .lpf(800)
  .delay(0.4)

// 4. Beat: Dusty Break
const breakbeat = stack(
  s("bd ~ ~ bd"),
  s("~ sd ~ sd").nudge(0.02),
  s("hh*8").hpf(6000).gain(0.2)
).swing(0.2)

// Arrangement
stack(
  bass,
  comp,
  sax.slow(2),
  breakbeat
)
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
// Scale: B Aeolian (Melancholic, windy)
setcps(0.2)

// 1. Pads: Swirling
const pads = note("0 2 4 6")
  .scale("b:aeolian")
  .chord("min9")
  .s("supersaw")
  .lpf(sine.range(400, 1200).slow(8))
  .attack(1)
  .release(2)

// 2. Chimes: High random notes
const chimes = note("scale(b:aeolian, irand(8) + 12)")
  .s("sine")
  .gain(0.3)
  .delay(0.5)
  .slow(0.5)

// 3. Bass: Root notes
const bass = note("0 -2 -4 -5")
  .scale("b:aeolian")
  .s("sine").shape(0.4)

// 4. Beat: Light shaker
const shaker = s("hh*16")
  .gain(sine.range(0.1, 0.4).fast(4))
  .hpf(4000)

// Arrangement
stack(
  pads,
  chimes,
  bass,
  shaker
)
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
// Scale: G Hirajoshi (Spacious, Asian feel)
setcps(0.15)

// 1. Pads: Wide and deep
const pads = note("0 1 2 4")
  .scale("g:hirajoshi")
  .chord("sus4")
  .s("supersaw")
  .lpf(600)
  .room(2) // Massive reverb
  .gain(0.7)

// 2. Melody: Slow, distant lead
const lead = note("4 ~ 2 ~ 1 ~ 0 ~")
  .scale("g:hirajoshi")
  .s("triangle")
  .lpf(800)
  .delay(1)
  .gain(0.5)

// 3. Bass: Sub
const sub = note("0 -2 -4 0")
  .scale("g:hirajoshi")
  .s("sine").shape(0.3)

// 4. Beat: Heartbeat kick
const heartbeat = s("bd ~ bd ~").gain(1.2).lpf(500)

// Arrangement
stack(
  pads,
  lead.slow(2),
  sub,
  heartbeat
)
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
