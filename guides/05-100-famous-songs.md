# 100 Advanced Strudel Songs

This guide contains 100 advanced, multi-layered song examples for Strudel. These are not just simple melodies but full micro-arrangements using `stack()`, complex rhythms, and effects.

## How to Use
Copy the code block for the song you want to hear. These examples use more resources, so ensure you stop the previous block before running a new one.

---

## Category 1: Nursery Rhymes (Advanced)

### 1. Happy Birthday (Glitch Hop Style)
```javascript
// Happy Birthday - Glitch Style
setcps(1)
stack(
  // Melody with delay and reverb
  note("g3@1.5 g3@0.5 a3 g3 c4 b3@2 g3@1.5 g3@0.5 a3 g3 d4 c4@2")
    .s("sawtooth").lpf(2000).lpq(2).delay(0.5).decay(0.1).room(0.5).gain(0.6),
  // Chords
  note("c3 g2 c3 f2").chord("major").s("piano").velocity(0.6).strum(0.05).slow(2),
  // Bass
  note("c2 g1 c2 f1").s("bass").shape(0.5).lpf(400),
  // Glitchy Drums
  s("bd sd").jux(rev),
  s("hh*8").velocity(rand.range(0.2, 0.6))
)
```

### 2. Twinkle Twinkle (Ambient Space)
```javascript
setcps(0.6)
stack(
  note("c4 c4 g4 g4 a4 a4 g4@2 f4 f4 e4 e4 d4 d4 c4@2")
    .s("triangle").slow(2).vowel("a o e").room(0.9).size(0.9),
  note("c3 f3 c3 g3").chord("major7").s("superpiano").velocity(0.4).slow(4),
  s("noise").lpf(200).slow(4).gain(0.2).slow(8)
)
```

### 3. Mary Had a Little Lamb (Techno)
```javascript
setcps(1.4)
stack(
  note("e4 d4 c4 d4 e4 e4 e4@2").s("square").lpf(sine.range(500, 3000).slow(4)),
  s("bd*4").gain(0.8),
  s("hh*8").pan(sine.range(-0.5, 0.5)),
  note("c2 g2").s("bass").sawtooth().lpf(800)
)
```

### 4. Row Row Row Your Boat (Round/Canon)
```javascript
setcps(1.2)
note("c4@1.5 c4@0.5 c4@1.5 d4@0.5 e4")
  .add(note("e4@1.5 d4@0.5 e4@1.5 f4@0.5 g4@2").slow(2))
  .s("flute").room(0.5)
  .off(0.5, x => x.add(12).gain(0.5)) // Harmony layer
  .stack(
     s("bd ~ sd ~"),
     note("c2").s("sub").sustain(2)
  )
```

### 5. Frere Jacques (Poly-Rhythm)
```javascript
setcps(1.4)
stack(
  note("c4 d4 e4 c4").s("piano").slow(2).jux(rev),
  note("e4 f4 g4@2").s("vibraphone").delay(0.25).room(0.6),
  s("bd(3,8) sd(5,8)"), // Euclidean rhythm
  note("c2").s("bass").octave(2).shape(0.4)
)
```

### 6. London Bridge (Industrial)
```javascript
setcps(1.3)
stack(
  note("g4 a4 g4 f4 e4 f4 g4@2").s("sawtooth").distort(0.5).lpf(1500),
  s("bd*2 [~ sd]"),
  s("hh*8").gain(0.4).pan(rand),
  note("g1").s("fmsynth").modindex(10)
)
```

### 7. Old MacDonald (Farm Step)
```javascript
setcps(1.2)
stack(
  note("g4 g4 g4 d4 e4 e4 d4@2").s("square").decay(0.1),
  s("cb*4").gain(0.6),
  s("bd ~ sd ~"),
  note("g2 d2").s("bass").slow(2)
)
```

### 8. Baa Baa Black Sheep (Lo-Fi)
```javascript
setcps(1)
stack(
  note("c4 c4 g4 g4 a4 b4 c5 a4 g4@2").s("rhodes").tremolo(4, 0.5),
  s("hh*4").velocity("0.8 0.4 0.6 0.4").swing(0.1),
  s("bd ~ sd ~").sound("lofi"),
  s("noise").gain(0.1).gain(0.2)
)
```

### 9. Itsy Bitsy Spider (Arpeggiated)
```javascript
setcps(1.2)
stack(
  note("g3 c4 c4 c4 d4 e4 e4 e4").s("sine").arp("updown").fast(2),
  note("c3 g3").s("cello").legato(1),
  s("noise").hpf(1000).gain(0.2).gain(0.15)
).room(0.8)
```

### 10. The Wheels on the Bus (Funk)
```javascript
setcps(1.2)
stack(
  note("c4 f4 f4 f4 f4 a4 c5 a4 f4").s("clav").wah(sine.range(0,1).slow(2)),
  s("bd sd bd [sd bd]"),
  note("f2 c3 f2 c3").s("slap").velocity(0.8)
)
```

### 11. If You're Happy (Clap Trap)
```javascript
setcps(1.4)
stack(
  note("c4 c4 f4 f4 f4 f4 f4@2").s("supersaw").lpf(2000),
  s("cp*2").slow(4).gain(1.2), // Claps
  s("bd(3,8)"),
  s("hh*16").pan(sine)
)
```

### 12. Humpty Dumpty (Wobble Bass)
```javascript
setcps(1)
stack(
  note("c4 c4 d4 d4 e4 e4 c4").s("lead").portamento(0.1),
  note("c2").s("wobble").lpf(sine.range(100, 1000).fast(4)),
  s("bd*2 sd")
)
```

### 13. Hickory Dickory Dock (Clockwork)
```javascript
setcps(1.2)
stack(
  note("a3 b3 c4 a3 e4 c4 a3").s("pluck").room(0.3),
  s("woodblock").loopAt(1),
  note("a1").s("sine").gain(0.8)
)
```

### 14. Hot Cross Buns (Drone)
```javascript
setcps(0.8)
stack(
  note("e4 d4 c4@2").s("sitar").slow(2),
  note("c2").s("drone").lpf(500),
  s("tom*4").gain(0.6)
)
```

### 15. Jack and Jill (Up & Down)
```javascript
setcps(1.2)
stack(
  note("c4 d4 e4 c4").s("flute").echo(0.5, 0.5),
  note("c3 g3").arp("up").fast(4).s("harp"),
  s("bd sd")
)
```

### 16. Little Bo Peep (Lost & Found)
```javascript
setcps(1.2)
stack(
  note("c4 d4 e4 c4").s("voice").vowel("o"),
  s("vowel").vowel("e").rarely(x=>x.gain(0.5)),
  note("c2 g2").s("bass").slow(2)
)
```

### 17. Muffin Man (Baker's Beat)
```javascript
setcps(1.3)
stack(
  note("g3 c4 c4 d4 e4 c4").s("square").width(0.5),
  s("bd sd bd sd"),
  note("c2").s("moog").lpf(800)
)
```

### 18. Pop Goes the Weasel (Surprise!)
```javascript
setcps(1.2)
stack(
  note("c4 c4 d4 d4 e4 g4 c4").s("calliope"),
  s("bd").slow(8).gain(1.2),
  s("hh*8")
)
```

### 19. Ring Around the Rosie (Spooky)
```javascript
setcps(1)
stack(
  note("g4 g4 e4 a4 g4 e4").s("piano").detune(2).room(0.9),
  s("noise").lpf(200).slow(4).gain(0.3),
  note("e2").s("sub").slow(4)
)
```

### 20. Rock-a-bye Baby (Lullaby)
```javascript
setcps(0.8)
stack(
  note("e4 g4 a4@2").s("celesta").velocity(0.5),
  note("c3 g3").s("pad").slow(4).gain(0.4),
  s("chimes").slow(8)
)
```

### 21. This Old Man (March)
```javascript
setcps(1.2)
stack(
  note("g4 e4 g4 g4 e4 g4").s("brass").legato(0.8),
  s("snare*4").velocity("0.8 0.4 0.6 0.4"),
  s("bd*2")
)
```

### 22. Three Blind Mice (Chase)
```javascript
setcps(1.4)
stack(
  note("e4 d4 c4@2").s("oboe").fast(2),
  note("c3 c3 c3").s("pizzicato").fast(4),
  s("hh*16").pan(rand)
)
```

### 23. Farmer in the Dell (Pastoral)
```javascript
setcps(1.2)
stack(
  note("g3 c4 c4 c4 c4").s("acoustic").velocity(0.8),
  s("flute").fast(8).gain(0.2).gain(0.2),
  note("c2 g2").s("upright").slow(2)
)
```

### 24. Bingo (Spelling)
```javascript
setcps(1.3)
stack(
  note("g4 g4 c4 c4 g4 g4 c4").s("vowel").vowel("o").vowel("a i o"),
  s("clap*5").slow(4),
  s("bd sd")
)
```

### 25. Head, Shoulders, Knees (Exercise)
```javascript
setcps(1.4)
stack(
  note("c4 c4 e4 e4 g4 g4 g4@2").s("sawtooth"), // Head, shoulders, knees and toes
  s("bd*4"),
  s("hh*8").open()
)
```

---

## Category 2: Folk & Traditional (Advanced)

### 26. Amazing Grace (Gospel Organ)
```javascript
setcps(0.6)
stack(
  note("d4 g4@2 b4@0.5 a4@0.5 g4@2 e4@0.5 d4@2")
    .s("organ").tremolo(3, 0.4).room(0.8),
  note("g2 b2 d3").chord("major").s("pad").slow(4).gain(0.5),
  s("choir").slow(8).gain(0.3)
)
```

### 27. Auld Lang Syne (Synthwave)
```javascript
setcps(1)
stack(
  note("c4 f4@1.5 f4@0.5 f4 a4 g4@1.5 a4@0.5 g4 a4 f4@1.5 f4@0.5 a4 c5 d5@2")
    .s("supersaw").lpf(1500).delay(0.25),
  s("bd*4 sd*2"),
  note("f1 c2").s("moog").shape(0.5).arp("up")
)
```

### 28. Danny Boy (Ethereal)
```javascript
setcps(0.8)
stack(
  note("b3 c4 d4 b3@2 g3@2 b3@2 c4 d4 b3@2 g3@2 e3@2")
    .s("flute").room(0.9).gain(0.8),
  note("g2 d3").s("strings").slow(4).attack(0.5),
  s("noise").lpf(200).slow(4).gain(0.1)
)
```

### 29. Greensleeves (Renaissance)
```javascript
setcps(1.2)
stack(
  note("a3 c4 d4 e4@1.5 f4@0.5 e4 d4@2 b3 g3 a3@2").s("lute").velocity(0.8),
  note("a2 e3").s("acoustic").slow(2),
  s("tambourine*4").velocity("0.3 0.5")
)
```

### 30. Scarborough Fair (Folk Guitar)
```javascript
setcps(1)
stack(
  note("d4 d4 a4 a4 a4 e4 f4@2").s("guitar").strum(0.05).velocity(0.7),
  note("d2 a2").s("bass").slow(4),
  s("shaker*8").gain(0.3)
)
```

### 31. Yankee Doodle (Marching Band)
```javascript
setcps(1.2)
stack(
  note("c4 c4 d4 e4 c4 e4 d4 g3").s("piccolo").highpass(1000),
  s("snare*4"),
  s("bd*2")
)
```

### 32. Oh! Susanna (Bluegrass)
```javascript
setcps(1.3)
stack(
  note("c4 d4 e4 g4 g4 a4 g4 e4 c4 d4 e4 e4 d4 c4 d4@2").s("banjo").fast(2),
  note("c2 g2").s("upright").slow(2),
  s("fiddle").gain(0.4).slow(8)
)
```

### 33. Camptown Races (Ragtime)
```javascript
setcps(1.2)
stack(
  note("g4 g4 e4 g4 a4 g4 e4@2").s("piano").swing(0.2),
  note("c2 g2").s("tuba").slow(2),
  s("rim*4")
)
```

### 34. Home on the Range (Cowboy)
```javascript
setcps(0.9)
stack(
  note("d4 d4 g4 g4 a4 b4 g4").s("harmonica").vibrato(2),
  note("g2 d3").s("guitar").strum(0.1).slow(2),
  s("crickets").gain(0.2)
)
```

### 35. She'll Be Coming 'Round the Mountain
```javascript
setcps(1.3)
stack(
  note("c4 d4 e4 g4 g4 g4").s("fiddle").legato(0.8),
  s("banjo").arp("updown").fast(4).gain(0.4),
  s("stomp clap")
)
```

### 36. Swing Low, Sweet Chariot (Soul)
```javascript
setcps(0.9)
stack(
  note("e4 g4 g4 g4 g4 e4 d4 c4").s("rhodes").tremolo(4, 0.5),
  s("snap*2").delay(0.2),
  note("c2 f2").s("bass").slow(2)
)
```

### 37. When the Saints (New Orleans)
```javascript
setcps(1.3)
stack(
  note("c4 e4 f4 g4@2 c4 e4 f4 g4@2").s("trumpet").wah(0.5),
  note("c2 g2").s("tuba").slow(2),
  s("sd*4").swing(0.3)
)
```

### 38. My Bonnie (Waltz)
```javascript
setcps(0.9)
stack(
  note("g3 e4 d4 c4 d4 c4 a3").s("accordion").slow(2),
  s("bd hh hh"),
  note("c2").s("bass").slow(3)
)
```

### 39. Clementine (Miner's Song)
```javascript
setcps(1.1)
stack(
  note("g3 g3 g3 c4 c4 c4 e4 c4").s("harmonica").distort(0.2),
  s("pickaxe").slow(2).gain(0.4),
  note("c2").s("bass")
)
```

### 40. Railroad (Train Beat)
```javascript
setcps(1.4)
stack(
  note("c4 c4 c4 d4 e4 e4 d4").s("banjo"),
  s("snare*8").gain("0.4 0.2 0.6 0.2").speed(2), // Train chug
  s("whistle").rarely(x=>x.gain(0.6))
)
```

### 41. Red River Valley (Country)
```javascript
setcps(1)
stack(
  note("d4 g4 b4 b4 b4 a4 g4 a4").s("steelguitar").slide(0.2),
  note("g2 d3").s("acoustic").strum(0.1),
  s("brush*4")
)
```

### 42. House of the Rising Sun (Arpeggio)
```javascript
setcps(1)
stack(
  note("a2 c3 d3 f3 a3 e3 a2 e3").s("guitar").arp("up").fast(3),
  note("a1").s("bass").slow(4),
  s("organ").gain(0.3).slow(2)
)
```

### 43. Waltzing Matilda (Outback)
```javascript
setcps(1.2)
stack(
  note("c4 e4 g4 g4 a4 b4 a4 g4").s("flute").room(0.5),
  s("didgeridoo").slow(4).gain(0.6),
  s("sticks*4")
)
```

### 44. Bella Ciao (Resistance)
```javascript
setcps(1.3)
stack(
  note("e4 a4 b4 c5 a4 e4 a4 b4 c5 a4").s("accordion").fast(1),
  s("clap*2").slow(2),
  s("bd*2")
)
```

### 45. Kalinka (Accelerating)
```javascript
setcps(1.2)
stack(
  note("e4 c4 b3 a3 e4 c4 b3 a3").s("balalaika").fast(2),
  s("bd*2").gain(1.2),
  s("hey").slow(4)
).fast(sine.range(1, 1.5).slow(8))
```

### 46. Tetris Theme (8-Bit)
```javascript
setcps(1.4)
stack(
  note("e5 b4 c5 d5 c5 b4 a4 a4 c5 e5 d5 c5 b4@2 c5 d5 e5 c5 a4 a4@2")
    .s("pulse").width(0.5),
  note("e2 a2").s("triangle").arp("down").fast(4),
  s("noise*8").decay(0.05).gain(0.3)
)
```

### 47. La Bamba (Latin)
```javascript
setcps(1.4)
stack(
  note("c4 d4 e4 f4 g4").s("guitar").distort(0.2),
  s("conga*4").gain(0.8),
  s("cowbell").off(0.25, x=>x)
)
```

### 48. Guantanamera (Cuban)
```javascript
setcps(1.1)
stack(
  note("g3 a3 b3 g3 a3 b3").s("piano").chord("major").slow(2),
  s("bongo*4").pan(rand),
  s("guiro").slow(2)
)
```

### 49. Cielito Lindo (Mariachi)
```javascript
setcps(1.2)
stack(
  note("c4 c4 a3 b3 g3 c4 c4 a3 b3 g3").s("trumpet").vibrato(1.5),
  note("c3 g3").s("guitaron").slow(2),
  s("shaker*8")
)
```

### 50. Aloha Oe (Hawaiian)
```javascript
setcps(0.8)
stack(
  note("g3 c4 e4 g4 a4").s("lapsteel").slide(0.5),
  s("noise").lpf(300).slow(8).gain(0.2).slow(4),
  note("c3 g3").s("ukulele").strum(0.1)
)
```

---

## Category 3: Classical Themes (Advanced)

### 51. Ode to Joy (Orchestral)
```javascript
setcps(1)
stack(
  note("e4 e4 f4 g4 g4 f4 e4 d4 c4 c4 d4 e4 e4@1.5 d4@0.5 d4@2")
    .s("strings").attack(0.1).release(0.5),
  note("c3 g2 c3 g2").s("cello").slow(2).gain(0.8),
  note("c2").s("contrabass").slow(4).gain(0.6),
  s("timpani").slow(8).gain(1)
)
```

### 52. Fur Elise (Music Box)
```javascript
setcps(1)
stack(
  note("e5 d#5 e5 d#5 e5 b4 d5 c5 a4@2")
    .s("celesta").room(0.5).velocity(0.7),
  note("a2 e3 a3").arp("up").slow(2).s("piano").gain(0.4),
  s("noise").gain(0.05).lpf(2000) // Vinyl crackle
)
```

### 53. Symphony No. 5 (Cinematic)
```javascript
setcps(1.2)
stack(
  note("g4 g4 g4 eb4@4").s("brass").slow(2).shape(0.6).room(1),
  note("g2 g2 g2 eb2@4").s("bass").slow(2).distort(0.4).lpf(400),
  s("bd").slow(2).gain(1.5)
)
```

### 54. Canon in D (Pachelbel)
```javascript
setcps(0.8)
stack(
  note("f#5 e5 d5 c#5 b4 a4 b4 c#5").s("violin").legato(1),
  note("d3 a2 b2 f#2 g2 d2 g2 a2").s("cello").slow(4).gain(0.7),
  note("d4 f#4 a4").arp("updown").fast(4).s("harp").gain(0.4)
)
```

### 55. Eine Kleine Nachtmusik (String Quartet)
```javascript
setcps(1.3)
stack(
  note("g4@1.5 d4@0.5 g4@1.5 d4@0.5 g4 d4 g4 b4 d5@2")
    .s("violin").staccato(0.5),
  note("g2 d3 g3").s("viola").slow(2).gain(0.6),
  note("g1").s("cello").slow(4)
)
```

### 56. Rondo Alla Turca (Mechanical)
```javascript
setcps(1.5)
stack(
  note("b4 a4 g#4 a4 c5").s("piano").fast(1),
  s("hh*4").velocity("0.8 0.4").pan(sine),
  note("a2 e3").s("bass").sawtooth().lpf(600).fast(2)
)
```

### 57. Morning Mood (Sunrise)
```javascript
setcps(1)
stack(
  note("g4 e4 d4 c4 d4 e4 g4 e4 d4 c4").s("flute").room(0.8),
  note("c3 g3 c4").s("strings").slow(4).attack(2),
  s("flute").fast(8).gain(0.2).rarely(x=>x.gain(0.4))
)
```

### 58. Mountain King (Building Up)
```javascript
setcps(1.1)
stack(
  note("b2 c#3 d3 e3 f#3 d3 f#3").s("bassoon").staccato(0.8),
  note("b1").s("tuba").slow(2).gain(sine.range(0.4, 0.8).slow(16)),
  s("pizzicato").arp("random").gain(0.3)
).fast(sine.range(1, 1.4).slow(16))
```

### 59. Spring (Vivaldi)
```javascript
setcps(1.2)
stack(
  note("e5@2 g#5@2 g#5@2 g#5 f#5 e5 b4").s("violin").vibrato(2),
  note("e3 b3").s("harpsichord").slow(2).gain(0.5),
  s("flute").fast(8).gain(0.2).gain(0.2)
)
```

### 60. Blue Danube (Waltz)
```javascript
setcps(1.2)
stack(
  note("c4 c4 e4 g4 g4@2 g4@2").s("strings").legato(0.9),
  s("bd hh hh"),
  note("c3 g3 e3").s("horn").slow(2).gain(0.4)
)
```

### 61. Ride of the Valkyries (Epic)
```javascript
setcps(1.4)
stack(
  note("b3@1.5 e4@0.5 g4@1.5 b4@0.5 g4").s("brass").shape(0.4),
  s("snare*8").gain(sine.range(0.2, 0.6)),
  note("e2 b2").s("sawtooth").lpf(300).gain(0.8)
)
```

### 62. Swan Lake (Tragic)
```javascript
setcps(1)
stack(
  note("f#4 b4 c#5 d5 e5 f#5").s("oboe").vibrato(2),
  note("b2 f#3").s("harp").arp("up").fast(4),
  s("strings").note("b1").slow(4).gain(0.5)
)
```

### 63. Nutcracker March (Toy Soldiers)
```javascript
setcps(1.3)
stack(
  note("g4 e4 e4 f4 d4 d4").s("trumpet").staccato(0.6),
  s("snare*4").velocity("0.8 0.4 0.9 0.4"),
  note("c3 g3").s("pizzicato").slow(2)
)
```

### 64. William Tell (Galop)
```javascript
setcps(1.6)
stack(
  note("e4 e4 e4 f4 g4").s("trumpet").fast(1),
  s("bd*2 sd*2"),
  note("e2 b2").s("strings").fast(4).gain(0.6)
)
```

### 65. Habanera (Tango)
```javascript
setcps(1)
stack(
  note("d4@1.5 eb4@0.5 f4@1.5 f#4@0.5 g4").s("violin").legato(0.8),
  note("d3 a3").s("piano").staccato(0.5).pattern("x ~ x x"),
  s("castanets").slow(2)
)
```

### 66. Toreador Song (Grand)
```javascript
setcps(1.2)
stack(
  note("f4 g4 a4 f4 g4 a4").s("brass").room(0.7),
  s("cymbal").slow(4).gain(0.8),
  note("f2 c3").s("tuba").slow(2)
)
```

### 67. Bolero (Repetitive)
```javascript
setcps(1)
stack(
  note("c4 b3 c4 d4 c4 b3 a3 c4 c4 a3").s("flute").gain(sine.range(0.2, 0.8).slow(16)),
  s("snare").pattern("x x x/3 x/3 x/3 x x x/3 x/3 x/3").gain(0.6),
  note("c2").s("pizzicato").slow(4)
)
```

### 68. Clair de Lune (Dreamy)
```javascript
setcps(0.6)
stack(
  note("f4 g#4 f4 eb4 f4").s("piano").velocity(0.4).room(0.9),
  note("f3 c4").s("pad").slow(4).gain(0.3),
  s("noise").lpf(200).slow(4).gain(0.05)
)
```

### 69. Gymnopédie No.1 (Minimal)
```javascript
setcps(0.8)
stack(
  note("f#4 a4 g4 f#4 c#4 b3 c#4 d4").s("rhodes").tremolo(2, 0.3),
  note("d3 a3").s("piano").slow(2).gain(0.5),
  s("noise").gain(0.02)
)
```

### 70. Ave Maria (Choral)
```javascript
setcps(0.8)
stack(
  note("g4@2 a4@4 c5@1.5 a4@0.5 g4@2 e4@2").s("voice").vowel("a o").room(1),
  note("c3 g3").s("organ").slow(2).gain(0.4),
  note("c2").s("sub").slow(4)
)
```

### 71. Brahm's Lullaby (Sleepy)
```javascript
setcps(0.7)
stack(
  note("e4 e4 g4 e4 e4 g4").s("celesta").velocity(0.5),
  note("c3 g3 c4").s("harp").arp("up").slow(2),
  s("breath").gain(0.2).slow(4)
)
```

### 72. Surprise Symphony (Dynamic)
```javascript
setcps(1)
stack(
  note("c4 c4 e4 e4 g4 g4 e4").s("strings").staccato(0.8).gain(0.4),
  s("bd").slow(8).gain(2) // The surprise!
)
```

### 73. New World Symphony (Nostalgic)
```javascript
setcps(0.6)
stack(
  note("e4 g4 g4 e4 d4 c4 d4 e4 d4").s("englishhorn").room(0.6),
  note("c3 g3").s("strings").slow(4).gain(0.4),
  s("timpani").rarely(x=>x.gain(0.5))
)
```

### 74. The Entertainer (Ragtime Piano)
```javascript
setcps(1.4)
stack(
  note("d5@0.5 e5@0.5 c5@0.5 a4@1 b4@0.5 g4@0.5 d4@0.5 e4@0.5 c4@0.5 a3@1 b3@0.5 g3@1.5")
    .s("piano").velocity(0.9),
  note("c3 g3 c3 g3").s("piano").octave(3).velocity(0.6),
  s("hh").swing(0.2)
)
```

### 75. Maple Leaf Rag (Saloon)
```javascript
setcps(1.4)
stack(
  note("eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@1 z/0.5 eb4@0.5 e4@0.5 g4@0.5 b4@0.5 eb5@2")
    .s("piano").detune(2),
  note("eb2 bb2").s("piano").octave(2).velocity(0.7),
  s("foot").slow(2)
)
```

---

## Category 4: Holiday & Seasonal (Advanced)

### 76. Jingle Bells (Sleigh Ride)
```javascript
setcps(1.2)
stack(
  note("e4 e4 e4@2 e4 e4 e4@2 e4 g4 c4 d4 e4@4 f4 f4 f4@1.5 f4@0.5 f4 e4 e4 e4 e4 d4 d4 e4 d4@2 g4@2")
    .s("piano").velocity(0.8),
  s("hh").gain(0.6).loopAt(1),
  note("c2 g2").s("tuba").slow(2).staccato(0.5)
)
```

### 77. Silent Night (Peaceful)
```javascript
setcps(0.6)
stack(
  note("g4@1.5 a4@0.5 g4 e4@3 g4@1.5 a4@0.5 g4 e4@3 d5@2 d5@1 b4@3 c5@2 c5@1 g4@3")
    .s("sine").vowel("o").room(0.9),
  note("c3 g3 c4").s("pad").slow(4).gain(0.4),
  s("noise").lpf(200).slow(4).gain(0.1)
)
```

### 78. Deck the Halls (Festive)
```javascript
setcps(1.2)
stack(
  note("c5 b4 a4 g4 f4 e4 d4 c4").s("brass").bright(0.5),
  s("vowel").vowel("o").slow(4),
  s("hh").rarely(x=>x.gain(0.5)),
  note("c2 g2").s("bass").fast(2)
)
```

### 79. Joy to the World (Majestic)
```javascript
setcps(0.9)
stack(
  note("c5@1.5 b4@0.5 a4@1.5 g4@0.5 f4 e4 d4 c4@2 g4@1.5 a4@0.5").s("organ").room(0.8),
  note("c2 c3").s("organ").octave(2).gain(0.7),
  s("bell").slow(8)
)
```

### 80. We Wish You a Merry Christmas (Carolers)
```javascript
setcps(1.2)
stack(
  note("d4 g4 g4@0.5 a4@0.5 g4 f#4 e4 e4").s("choir").vowel("a e i"),
  note("g2 d3").s("cello").slow(2),
  s("tambourine*4")
)
```

### 81. The First Noel (Hymn)
```javascript
setcps(1)
stack(
  note("f#4 e4 d4 e4 f#4 g4 a4 b4 c#5").s("organ").detune(0.5),
  note("d2 a2").s("bass").slow(2).shape(0.3),
  s("vowel").vowel("a").gain(0.2)
)
```

### 82. Hark! The Herald Angels (Trumpet)
```javascript
setcps(1.1)
stack(
  note("c4 f4 f4 g4 f4 e4 d4 d4").s("trumpet").room(0.6),
  s("snare*4").velocity("0.3 0.6"),
  note("f2 c3").s("trombone").slow(2)
)
```

### 83. O Christmas Tree (Jazz Waltz)
```javascript
setcps(1)
stack(
  note("g3 c4 c4 c4 d4 e4 e4 e4").s("vibraphone").tremolo(4, 0.4),
  s("ride*3").gain(0.6),
  note("c2 g2").s("upright").slow(3)
)
```

### 84. Rudolph (Red Nose)
```javascript
setcps(1.2)
stack(
  note("g4 a4 g4 e4 c5 a4 g4").s("sawtooth").lpf(1000).portamento(0.1),
  s("hh").gain(0.4),
  s("bd sd")
)
```

### 85. 12 Days (Counting)
```javascript
setcps(1.2)
stack(
  note("c4 c4 c4 d4 e4 f4 g4 f4 e4 d4 c4").s("piano").velocity(0.8),
  s("bd sd").slow(2).gain(0.5), // Imaginary samples
  note("c2").s("bass").slow(4)
)
```

### 86. Frosty (Snowy)
```javascript
setcps(1.2)
stack(
  note("g4 e4 f4 g4 c5 b4 c5 d5 c5 b4 a4 g4").s("flute").room(0.5),
  s("shaker*8").gain(0.3),
  note("c2 g2").s("tuba").staccato(0.5)
)
```

### 87. Little Drummer Boy (Percussion)
```javascript
setcps(1)
stack(
  note("c4 d4 e4 e4 e4 f4 e4 f4 e4").s("voice").vowel("u"),
  s("snare").pattern("x x x x").velocity("0.8 0.4 0.6 0.4"),
  note("c2").s("bass").slow(4)
)
```

### 88. O Holy Night (Night Sky)
```javascript
setcps(0.7)
stack(
  note("e4 e4 e4 g4 g4").s("glass").room(0.9),
  note("c3 g3 c4").s("pad").slow(4).gain(0.4),
  s("glitch").rarely(x=>x.gain(0.3))
)
```

### 89. God Rest Ye Merry (Medieval)
```javascript
setcps(1.2)
stack(
  note("d4 d4 a4 a4 g4 f4 e4 d4").s("lute").fast(2),
  note("d2 a2").s("drone").slow(4),
  s("finger*4").gain(0.4)
)
```

### 90. Good King Wenceslas (Royal)
```javascript
setcps(1.2)
stack(
  note("f4 f4 f4 g4 f4 f4 c4").s("brass").bright(0.4),
  s("timpani").slow(4),
  note("f2 c3").s("bass").slow(2)
)
```

---

## Category 5: More Famous Tunes (Advanced)

### 91. Star Spangled Banner (Anthem)
```javascript
setcps(0.8)
stack(
  note("g3@1.5 e3@0.5 c3 e3 g3 c4@2 e4@1.5 d4@0.5 c4 e3 f3 g3@2").s("trumpet").room(1),
  s("snare*8").velocity("0.2 0.4 0.3 0.5").pan(sine),
  note("c2 g2").s("tuba").slow(2)
)
```

### 92. God Save the King (Regal)
```javascript
setcps(1)
stack(
  note("c4 c4 d4 b3@1.5 c4@0.5 d4 e4 e4 f4 e4 d4 c4").s("piano").velocity(0.8),
  note("c2 g2").s("cello").slow(2).gain(0.6),
  s("cymbal").slow(8)
)
```

### 93. La Marseillaise (Revolutionary)
```javascript
setcps(1.2)
stack(
  note("d4 d4 g4 g4 a4 a4").s("brass").staccato(0.6),
  s("sd*4"),
  note("g2 d3").s("bass").slow(2)
)
```

### 94. Happy Farmer (Rural)
```javascript
setcps(1.2)
stack(
  note("c4@0.5 f4@1.5 a4@0.5 c5@1.5 a4@0.5 f4@2").s("piano").velocity(0.8),
  note("f2 c3").s("bass").slow(2).shape(0.3),
  s("cp").slow(2)
)
```

### 95. Minuet in G (Baroque)
```javascript
setcps(1)
stack(
  note("d5 g4 a4 b4 c5 d5 g4 g4").s("harpsichord").fast(1),
  note("g2 d3 g3").s("cello").slow(2).staccato(0.5),
  s("hh*8").gain(0.1)
)
```

### 96. Prelude in C (Arpeggiator)
```javascript
setcps(1)
stack(
  note("c4 e4 g4 c5 e5 g4 c5 e5").s("piano").room(0.6),
  note("c2 g2").s("sine").gain(0.3).slow(4),
  s("noise").lpf(500).gain(0.1)
)
```

### 97. Jesu, Joy of Man's Desiring (Flowing)
```javascript
setcps(0.9)
stack(
  note("g4 a4 b4 d5 c5 c5 e5 d5 d5 g5 f#5 g5").s("organ").slow(1.5),
  note("g3 d4").s("strings").slow(2).gain(0.5),
  s("tri*3")
)
```

### 98. Chopsticks (Duet)
```javascript
setcps(1.4)
stack(
  note("[f4,g4]*4 [e4,g4]*4").s("piano").pan(-0.5),
  note("[f3,g3]*4 [e3,g3]*4").s("piano").pan(0.5).octave(3),
  s("bd sd").slow(2)
)
```

### 99. Heart and Soul (Doo Wop)
```javascript
setcps(1.2)
stack(
  note("c4@1.5 c4@0.5 c4 c4@0.5 b3@0.5 a3@1.5 b3@0.5 c4 d4@2").s("piano").octave(5).gain(0.8), // Melody
  note("c4 c4 c4 a3 a3 a3 f3 f3 f3 g3 g3 g3").s("piano").swing(0.2), // Chords
  note("c2 a1 f1 g1").s("bass").slow(1).shape(0.4),
  s("hh*4").open()
)
```

### 100. Happy Birthday (Future Bass)
```javascript
setcps(1.4)
stack(
  // Lead
  note("g3@1.5 g3@0.5 a3 g3 c4 b3@2 g3@1.5 g3@0.5 a3 g3 d4 c4@2")
    .s("supersaw").lpf(sine.range(500, 3000).slow(4)).room(0.8),
  // Chords
  note("c3 g2 c3 f2").chord("major9").s("pad").slow(2).gain(0.6),
  // Risers & FX
  s("noise").slow(8).gain(sine.range(0, 0.4)),
  // Beat
  s("bd(3,8) sd(5,8)"),
  s("hh*16").pan(rand)
)
```
