# 100 Famous Kenyan Songs (Strudel Guide)

This guide contains 100 Strudel arrangements of famous Kenyan tunes, spanning from Zilizopendwa classics to modern Afro-pop and Genge. These examples utilize advanced features like `stack()`, complex rhythms, and effects to capture the authentic Kenyan sound.

## How to Use
Copy the code block for the song you want to hear into the Strudel REPL.

---

## Category 1: National Anthems & Patriotic

### 1. Kenya National Anthem (Ee Mungu Nguvu Yetu)
```javascript
// Kenya National Anthem - Orchestral
setcps(0.4)
stack(
  note("d4 f#4 a4 d5 c#5 b4 a4 f#4 g4 a4 g4 f#4 e4 d4").s("brass").room(1).velocity(0.8),
  note("d3 a3 d4").s("strings").slow(2).gain(0.6),
  s("timpani").slow(4).gain(0.8)
)
```

### 2. Daima (Eric Wainaina)
```javascript
// Daima (Mkenya Daima) - Afro-Fusion
setcps(0.5)
stack(
  note("c4 d4 e4 g4 g4 a4 g4 e4 d4 c4").s("kalimba").room(0.5),
  note("c3 g3").s("bass").slow(2),
  s("shaker*8").gain(0.4),
  s("bd sd").slow(2)
)
```

### 3. Tushangilie Kenya (Mwalimu Thomas Wasonga)
```javascript
// Tushangilie Kenya - Patriotic Choral
setcps(0.6)
stack(
  note("g4 g4 c5 c5 b4 a4 g4").s("choir").vowel("a"),
  note("c3 g3").s("organ").slow(2),
  s("snare*4").velocity("0.6 0.3")
)
```

### 4. My Land is Kenya (Roger Whittaker)
```javascript
// My Land is Kenya - Acoustic
setcps(0.45)
stack(
  note("e4 g4 c5 b4 a4 g4 e4").s("guitar").strum(0.1),
  note("c2 g2").s("bass").slow(2),
  s("bird").rarely(x=>x.gain(0.3))
)
```

### 5. Harambee (Daudi Kabaka)
```javascript
// Harambee - Zilizopendwa
setcps(0.6)
stack(
  note("g4 a4 b4 g4 c5 b4 a4").s("clean").tremolo(4, 0.4),
  s("rim*4").gain(0.8),
  note("g2 d3").s("bass").slow(2)
)
```

---

## Category 2: Zilizopendwa Classics

### 6. Jambo Bwana (Them Mushrooms)
```javascript
// Jambo Bwana - Tourism Pop
setcps(0.65)
stack(
  note("e4@1.5 d4@0.5 c4 e4@1.5 d4@0.5 c4 e4 d4").s("organ").bright(0.5), // Jambo, Jambo Bwana
  note("c3 g3 c4").s("piano").chord("major").slow(2).velocity(0.6),
  s("shaker*8").gain(0.8)
)
```

### 7. Malaika (Fadhili William)
```javascript
// Malaika - Romantic Classic
setcps(0.5)
stack(
  note("e4 g4 a4 c5 a4 g4 e4").s("guitar").room(0.8), // Malaika, nakupenda Malaika
  note("a2 e3").s("bass").slow(4),
  s("conga*4").pan(rand)
)
```

### 8. Helule Helule (Daudi Kabaka)
```javascript
// Helule Helule - Twist
setcps(0.7)
stack(
  note("c5 c5 b4 a4 g4 e4").s("clean").distort(0.2),
  s("snare*4").velocity("0.8 0.4"),
  note("c3 g3").s("bass").fast(2)
)
```

### 9. Pole Musa (Daudi Kabaka)
```javascript
// Pole Musa - Storytelling
setcps(0.6)
stack(
  note("g4 a4 b4 d5 b4 g4").s("guitar").pluck(0.5),
  s("rim").struct("x ~ x x"),
  note("g2 d3").s("bass")
)
```

### 10. Taxi Driver (Daudi Kabaka)
```javascript
// Taxi Driver - Benga Rhythm
setcps(0.7)
stack(
  note("c5 b4 a4 g4 f4 e4").s("strat").delay(0.2),
  s("hihat*8").open(),
  note("c3 f3 g3").s("bass").arp("up")
)
```

### 11. Sina Makosa (Les Wanyika)
```javascript
// Sina Makosa - Swahili Rhumba
setcps(0.55)
stack(
  note("e4 g4 c5 b4 a4 g4 f4").s("sax").legato(0.8).room(0.6),
  note("c3 g3").s("guitar").strum(0.05).slow(2),
  s("conga").struct("x x ~ x").gain(0.7)
)
```

### 12. Afro (Les Wanyika)
```javascript
// Afro - Golden Era
setcps(0.55)
stack(
  note("g4 b4 d5 c5 b4 a4").s("brass").bright(0.4),
  s("guiro").slow(1),
  note("g2 d3").s("bass").slow(2)
)
```

### 13. Charonyi Ni Wasi (Maroon Commandos)
```javascript
// Charonyi Ni Wasi - Military Band
setcps(0.6)
stack(
  note("c4 e4 g4 c5 g4 e4").s("trumpet").staccato(0.5),
  s("snare").struct("x x x/2 x/2 x"),
  note("c2").s("tuba").slow(2)
)
```

### 14. Amka Kumekucha (Maroon Commandos)
```javascript
// Amka Kumekucha - Morning Call
setcps(0.65)
stack(
  note("e4 g4 c5 g4 e4").s("organ").fast(2),
  s("cowbell*4"),
  note("c3 g3").s("bass")
)
```

### 15. Stella Wangu (Freshley Mwamburi)
```javascript
// Stella Wangu - Heartbreak
setcps(0.6)
stack(
  note("a4 c5 e5 d5 c5 b4 a4").s("synth").vibrato(2), // Reggae feel
  s("bd").slow(2),
  s("hh").slow(2).delay(0.5)
)
```

### 16. Shauri Yako (Orchestra Super Mazembe)
```javascript
// Shauri Yako - Congolese Influence
setcps(0.55)
stack(
  note("g4 b4 d5 g4 b4 d5").s("guitar").highpass(1000),
  s("snare").struct("x ~ x ~ x x ~ x"), // Cavacha rhythm
  note("g2").s("bass").slow(2)
)
```

### 17. Lunch Time (Gabriel Omollo)
```javascript
// Lunch Time - Social Commentary
setcps(0.6)
stack(
  note("c4 d4 e4 g4 a4 g4").s("whistle").room(0.4),
  s("foot").slow(1),
  note("c2 g2").s("bass").slow(2)
)
```

### 18. Dereva Kombo (Fundi Konde)
```javascript
// Dereva Kombo - Highlife Feel
setcps(0.6)
stack(
  note("f4 a4 c5 a4 f4").s("clarinet"),
  s("shaker*8"),
  note("f2 c3").s("bass")
)
```

### 19. Bwana Nipe Pesa (Super Mazembe)
```javascript
// Bwana Nipe Pesa - Request
setcps(0.55)
stack(
  note("d4 f#4 a4 d5").s("sax").gain(0.8),
  s("cowbell").struct("x x ~ x"),
  note("d3 a3").s("bass")
)
```

### 20. Kasongo (Les Wanyika)
```javascript
// Kasongo - Dance Floor
setcps(0.6)
stack(
  note("e4 g4 c5 b4 a4 g4").s("organ").room(0.5),
  s("conga*4"),
  note("c2 g2").s("bass").slow(2)
)
```

---

## Category 3: The 2000s Pop Explosion (Ogopa/Calif)

### 21. Ninanoki (Nameless)
```javascript
// Ninanoki - Ogopa Beat
setcps(0.7)
stack(
  note("c4 e4 g4 c5").s("sawtooth").lpf(1500),
  s("bd*2"), // Kapuka kick
  s("clap").slow(2).delay(0.5),
  note("c2").s("bass").slow(4)
)
```

### 22. Sinzia (Nameless)
```javascript
// Sinzia - Smooth
setcps(0.5)
stack(
  note("f4 a4 c5 a4 g4 f4").s("rhodes").tremolo(2, 0.4),
  s("rim*4"),
  note("f2 c3").s("sub").slow(2)
)
```

### 23. Boomba Train (E-Sir)
```javascript
// Boomba Train - Party Anthem
setcps(0.72)
stack(
  note("g3 b3 d4 b3").s("square").fast(2),
  s("bd sd bd sd"),
  s("hh*8").open(),
  s("vowel").vowel("o").slow(4).gain(0.8) // "Whoa"
)
```

### 24. Mos Mos (E-Sir)
```javascript
// Mos Mos - Laid Back
setcps(0.47)
stack(
  note("e4 g4 b4 a4").s("piano").room(0.8),
  s("kick").slow(2),
  s("snap").slow(2).delay(0.5),
  note("e2").s("bass").slow(2)
)
```

### 25. Leo ni Leo (E-Sir)
```javascript
// Leo ni Leo - Club Banger
setcps(0.7)
stack(
  note("c4 c4 e4 g4").s("supersaw").decay(0.1),
  s("bd*4").gain(1.2),
  s("clap").slow(2).delay(0.5)
)
```

### 26. Hamunitishi (E-Sir)
```javascript
// Hamunitishi - Attitude
setcps(0.5)
stack(
  note("a3 c4 e4 a4").s("strings").attack(0.1),
  s("kick snare"),
  note("a1").s("bass").distort(0.3)
)
```

### 27. Tuendelee (Kleptomaniax)
```javascript
// Tuendelee - Diss Track
setcps(0.47)
stack(
  note("c4 eb4 g4 c5").s("pluck").room(0.4),
  s("bd ~ sd ~").s("bd sd"),
  note("c2").s("bass").slow(2)
)
```

### 28. Swing Swing (Kleptomaniax)
```javascript
// Swing Swing - Pop Rap
setcps(0.6)
stack(
  note("g4 b4 d5 b4").s("synth").fast(2),
  s("bd sd"),
  s("hh*8")
)
```

### 29. Unbwogable (Gidi Gidi Maji Maji)
```javascript
// Unbwogable - Luo Rap
setcps(0.47)
stack(
  note("e4 g4 e4 d4").s("voice").vowel("o").gain(0.8),
  s("bd sd"),
  note("e2").s("bass").slow(4)
)
```

### 30. Manyake (Circuit & Joel)
```javascript
// Manyake - Humor
setcps(0.65)
stack(
  note("c4 e4 g4 c5").s("lead").portamento(0.2),
  s("bd*4"),
  s("cowbell").slow(2)
)
```

### 31. Githurai (Mr. Google)
```javascript
// Githurai - Hood Anthem
setcps(0.5)
stack(
  note("a3 c4 e4 a4").s("organ").staccato(0.5),
  s("bd sd"),
  s("siren").slow(8).gain(0.2)
)
```

### 32. Morale (Pilipili)
```javascript
// Morale - High Energy
setcps(0.7)
stack(
  note("g4 b4 d5 g5").s("trance").fast(4),
  s("bd*4"),
  s("clap").slow(2)
)
```

### 33. Ukimwona (Pilipili)
```javascript
// Ukimwona - Love Song
setcps(0.6)
stack(
  note("c4 f4 a4 c5").s("pad").slow(2),
  s("rim*4"),
  note("c2").s("bass").slow(2)
)
```

### 34. Vuta Pumz (Longombas)
```javascript
// Vuta Pumz - Catchy
setcps(0.65)
stack(
  note("e4 g4 b4 e5").s("synth").arp("up"),
  s("bd sd bd sd"),
  note("e2").s("bass").slow(2)
)
```

### 35. Piga Makofi (Longombas)
```javascript
// Piga Makofi - Celebration
setcps(0.67)
stack(
  note("c4 e4 g4 c5").s("brass").bright(0.6),
  s("clap*4").gain(1.2),
  s("bd*2")
)
```

### 36. Dondosa (Longombas)
```javascript
// Dondosa - Dance
setcps(0.65)
stack(
  note("d4 f#4 a4 d5").s("lead").fast(2),
  s("bd*4"),
  s("hh*8")
)
```

### 37. Teso (Tatuu)
```javascript
// Teso - Pop Trio
setcps(0.55)
stack(
  note("g4 b4 d5 b4").s("guitar").clean(0.5),
  s("rim*4"),
  note("g2").s("bass").slow(2)
)
```

### 38. Haiya (Harry Kimani)
```javascript
// Haiya - Afro-Soul
setcps(0.5)
stack(
  note("e4 g#4 b4 e5").s("acoustic").strum(0.2),
  s("djembe").struct("x x ~ x"),
  note("e2").s("bass").slow(2)
)
```

### 39. Uhiki (Hardstone)
```javascript
// Uhiki - R&B/Dancehall
setcps(0.47)
stack(
  note("c4 e4 g4 c5").s("organ").chop(4),
  s("bd sd"),
  note("c2").s("bass").slow(2)
)
```

### 40. Tafsiri Hii (Kalamashaka)
```javascript
// Tafsiri Hii - Hardcore Rap
setcps(0.45)
stack(
  note("c3 eb3 g3 c4").s("strings").staccato(0.5),
  s("bd sd"),
  note("c1").s("bass").distort(0.4)
)
```

---

## Category 4: Contemporary Afro-Pop

### 41. Sura Yako (Sauti Sol)
```javascript
// Sura Yako - Lipala Dance
setcps(0.62)
stack(
  note("e4 g4 a4 c5 a4 g4").s("guitar").bright(0.5),
  s("bd").struct("x ~ x x"), // Lipala kick pattern
  s("clap").slow(2).delay(0.5),
  note("c2 g2").s("bass").slow(2)
)
```

### 42. Kuliko Jana (Sauti Sol)
```javascript
// Kuliko Jana - A Capella feel
setcps(0.4)
stack(
  note("c4 e4 g4 c5").s("choir").vowel("o a"),
  note("c2 g2").s("hum").slow(2),
  s("snap").slow(2).delay(0.5)
)
```

### 43. Melanin (Sauti Sol)
```javascript
// Melanin - Afrobeat
setcps(0.52)
stack(
  note("d4 f#4 a4 d5").s("kalimba").fast(2),
  s("bd ~ sd ~").s("bd sd"),
  note("d2").s("bass").slow(2)
)
```

### 44. Suzanna (Sauti Sol)
```javascript
// Suzanna - Retro Vibe
setcps(0.55)
stack(
  note("g4 b4 d5 g5").s("guitar").wah(0.4),
  s("rim*4"),
  note("g2").s("bass").slow(2)
)
```

### 45. Extravaganza (Sauti Sol)
```javascript
// Extravaganza - Rhumba Trap
setcps(0.55)
stack(
  note("c4 e4 g4 c5").s("rhodes").tremolo(4, 0.4),
  s("bd sd"),
  s("shaker*16")
)
```

### 46. Short N Sweet (Sauti Sol)
```javascript
// Short N Sweet - Acoustic Pop
setcps(0.5)
stack(
  note("e4 g#4 b4 e5").s("guitar").pluck(0.5),
  s("snap").slow(2),
  note("e2").s("bass").slow(2)
)
```

### 47. Mungu Pekee (Nyashinski)
```javascript
// Mungu Pekee - Uplifting
setcps(0.5)
stack(
  note("g4 b4 d5 g5").s("pad").slow(2),
  s("bd sd"),
  note("g2").s("bass").slow(2)
)
```

### 48. Malaika (Nyashinski)
```javascript
// Malaika - Modern Ballad
setcps(0.45)
stack(
  note("c4 e4 g4 c5").s("piano").room(0.8),
  s("bd").slow(2),
  note("c2").s("bass").slow(2)
)
```

### 49. Hayawani (Nyashinski)
```javascript
// Hayawani - Social Conscious
setcps(0.45)
stack(
  note("d4 f4 a4 d5").s("strings").attack(0.2),
  s("bd sd"),
  note("d1").s("bass").slow(2)
)
```

### 50. Now You Know (Nyashinski)
```javascript
// Now You Know - Comeback
setcps(0.6)
stack(
  note("e4 g4 b4 e5").s("synth").fast(2),
  s("bd sd"),
  s("hh*8")
)
```

### 51. Kookoo (Elani)
```javascript
// Kookoo - Catchy
setcps(0.55)
stack(
  note("c4 e4 g4 c5").s("ukulele").strum(0.1),
  s("clap*4"),
  note("c2").s("bass")
)
```

### 52. Milele (Elani)
```javascript
// Milele - Wedding Song
setcps(0.45)
stack(
  note("f4 a4 c5 f5").s("piano").arpeggio(),
  s("shaker").slow(2),
  note("f2").s("bass").slow(2)
)
```

### 53. Uliza Kiatu (H_art the Band)
```javascript
// Uliza Kiatu - Spoken Word
setcps(0.5)
stack(
  note("g4 b4 d5 g5").s("guitar").slow(2),
  s("snap").slow(2).delay(0.5),
  note("g2").s("bass").slow(2)
)
```

### 54. El Shaddai (H_art the Band)
```javascript
// El Shaddai - Worship
setcps(0.4)
stack(
  note("c4 e4 g4 c5").s("pad").slow(4),
  s("bd").slow(2),
  note("c2").s("bass").slow(4)
)
```

### 55. Dus Nya (Otile Brown)
```javascript
// Dus Nya - Swahili R&B
setcps(0.52)
stack(
  note("a3 c4 e4 a4").s("rhodes").room(0.5),
  s("bd sd"),
  note("a1").s("bass").slow(2)
)
```

### 56. Chaguo la Moyo (Otile Brown)
```javascript
// Chaguo la Moyo - Wedding
setcps(0.47)
stack(
  note("d4 f#4 a4 d5").s("piano").velocity(0.7),
  s("rim*4"),
  note("d2").s("bass").slow(2)
)
```

### 57. Baby Love (Otile Brown)
```javascript
// Baby Love - Romantic
setcps(0.5)
stack(
  note("g4 b4 d5 g5").s("guitar").clean(0.5),
  s("bd sd"),
  note("g2").s("bass")
)
```

### 58. Mafeelings (Dela)
```javascript
// Mafeelings - Breakup
setcps(0.5)
stack(
  note("e4 g4 b4 e5").s("piano").chord("minor"),
  s("bd sd"),
  note("e2").s("bass")
)
```

### 59. Kama Kawaida (Kagwe Mungai)
```javascript
// Kama Kawaida - Collab
setcps(0.55)
stack(
  note("c4 e4 g4 c5").s("synth").bright(0.4),
  s("bd*4"),
  s("clap").slow(2)
)
```

### 60. Doing Her Thing Tho (Fena Gitu)
```javascript
// Doing Her Thing - Fenamenal
setcps(0.52)
stack(
  note("f4 a4 c5 f5").s("organ").staccato(0.5),
  s("bd sd"),
  note("f2").s("bass")
)
```

---

## Category 5: Gospel Hits

### 61. System ya Kapungala (Daddy Owen)
```javascript
// System ya Kapungala - Lingala Gospel
setcps(0.7)
stack(
  note("c5 c5 b4 a4 g4").s("guitar").highpass(1000).fast(2), // Seben
  s("kick snare").fast(2),
  s("shout").slow(4)
)
```

### 62. Tobina (Daddy Owen)
```javascript
// Tobina - Dance
setcps(0.7)
stack(
  note("g4 b4 d5 g5").s("brass").staccato(0.5),
  s("bd*4"),
  s("whistle").slow(2)
)
```

### 63. Mbona (Daddy Owen)
```javascript
// Mbona - Reflective
setcps(0.45)
stack(
  note("e4 g4 b4 e5").s("piano").room(0.7),
  s("bd").slow(2),
  note("e2").s("bass").slow(2)
)
```

### 64. Kuna Dawa (Esther Wahome)
```javascript
// Kuna Dawa - Classic
setcps(0.65)
stack(
  note("c4 e4 g4 c5").s("organ").bright(0.6),
  s("bd sd"),
  note("c2").s("bass").fast(2)
)
```

### 65. Mwema (Mercy Masika)
```javascript
// Mwema - Worship
setcps(0.4)
stack(
  note("g4 b4 d5 g5").s("strings").slow(2),
  s("bd").slow(2),
  note("g2").s("bass").slow(4)
)
```

### 66. Nikupendeze (Mercy Masika)
```javascript
// Nikupendeze - Devotion
setcps(0.42)
stack(
  note("d4 f#4 a4 d5").s("piano").arpeggio(),
  s("shaker").slow(2),
  note("d2").s("bass")
)
```

### 67. Utawala (Juliani)
```javascript
// Utawala - Revolution
setcps(0.47)
stack(
  note("c4 eb4 g4 c5").s("guitar").distort(0.3),
  s("bd sd"),
  note("c2").s("bass")
)
```

### 68. Hela (Juliani)
```javascript
// Hela - Hip Hop
setcps(0.45)
stack(
  note("e4 g4 b4 e5").s("synth").chop(4),
  s("bd sd"),
  s("hh*8")
)
```

### 69. Biasi (Juliani)
```javascript
// Biasi - Commentary
setcps(0.47)
stack(
  note("a3 c4 e4 a4").s("pluck").room(0.4),
  s("bd sd"),
  note("a1").s("bass")
)
```

### 70. Sitolia (Gloria Muliro)
```javascript
// Sitolia - Comfort
setcps(0.45)
stack(
  note("f4 a4 c5 f5").s("piano").slow(2),
  s("rim").slow(2),
  note("f2").s("bass")
)
```

### 71. Mpango wa Kando (Gloria Muliro)
```javascript
// Mpango wa Kando - Warning
setcps(0.6)
stack(
  note("g4 b4 d5 g5").s("organ").fast(2),
  s("bd sd"),
  note("g2").s("bass")
)
```

### 72. Mateke (Size 8)
```javascript
// Mateke - Energy
setcps(0.67)
stack(
  note("c4 e4 g4 c5").s("sawtooth").bright(0.8),
  s("bd*4"),
  s("snare").slow(2)
)
```

### 73. Pale Pale (Size 8)
```javascript
// Pale Pale - Testimony
setcps(0.6)
stack(
  note("d4 f#4 a4 d5").s("synth").pluck(0.4),
  s("bd sd"),
  note("d2").s("bass")
)
```

### 74. Tambira (Daddy Owen)
```javascript
// Tambira - Celebration
setcps(0.65)
stack(
  note("e4 g#4 b4 e5").s("brass").staccato(0.6),
  s("bd*4"),
  s("clap").slow(2)
)
```

### 75. Fanya (Willy Paul)
```javascript
// Fanya - Pop Gospel
setcps(0.6)
stack(
  note("a3 c4 e4 a4").s("lead").fast(2),
  s("bd sd"),
  note("a1").s("bass")
)
```

### 76. Sitishiki (Willy Paul)
```javascript
// Sitishiki - Confidence
setcps(0.55)
stack(
  note("c4 e4 g4 c5").s("pad").slow(2),
  s("bd sd"),
  note("c2").s("bass")
)
```

### 77. Mama (Bahati)
```javascript
// Mama - Emotional
setcps(0.45)
stack(
  note("g4 b4 d5 g5").s("piano").room(0.8),
  s("bd").slow(2),
  note("g2").s("bass")
)
```

### 78. Barua (Bahati)
```javascript
// Barua - Letter
setcps(0.5)
stack(
  note("d4 f#4 a4 d5").s("guitar").strum(0.2),
  s("bd sd"),
  note("d2").s("bass")
)
```

### 79. Kitanzi (Willy Paul)
```javascript
// Kitanzi - Ballad
setcps(0.42)
stack(
  note("e4 g#4 b4 e5").s("strings").slow(2),
  s("bd").slow(2),
  note("e2").s("bass")
)
```

### 80. Vanity (Daddy Owen)
```javascript
// Vanity - Reflection
setcps(0.55)
stack(
  note("c4 eb4 g4 c5").s("rhodes").tremolo(2, 0.4),
  s("bd sd"),
  note("c2").s("bass")
)
```

---

## Category 6: Afro-Fusion, Vernacular & Gengetone

### 81. Kisumu 100 (Suzanna Owiyo)
```javascript
// Kisumu 100 - Benga Celebration
setcps(0.65)
stack(
  note("g4 b4 d5 g5").s("guitar").clean(0.6).fast(2),
  s("bd sd"),
  note("g2").s("bass").arp("up")
)
```

### 82. Sandakarawe (Suzanna Owiyo)
```javascript
// Sandakarawe - Traditional
setcps(0.6)
stack(
  note("c4 e4 g4 c5").s("kalimba").fast(2),
  s("shaker*8"),
  note("c2").s("bass")
)
```

### 83. Nchi ya Kitu Kidogo (Eric Wainaina)
```javascript
// Nchi ya Kitu Kidogo - Corruption
setcps(0.5)
stack(
  note("a3 c4 e4 a4").s("organ").staccato(0.5),
  s("bd sd"),
  note("a1").s("bass").slow(2)
)
```

### 84. Ritwa Riaku (Eric Wainaina)
```javascript
// Ritwa Riaku - Kikuyu Pop
setcps(0.55)
stack(
  note("d4 f#4 a4 d5").s("guitar").strum(0.1),
  s("bd sd"),
  note("d2").s("bass")
)
```

### 85. Ha-He (Just A Band)
```javascript
// Ha-He - Makmende
setcps(0.6)
stack(
  note("e4 g4 b4 e5").s("sawtooth").distort(0.4),
  s("bd sd"),
  note("e2").s("bass").slap(0.5)
)
```

### 86. Makmende (Just A Band)
```javascript
// Makmende - Returns
setcps(0.62)
stack(
  note("c4 eb4 g4 c5").s("synth").arpeggio(),
  s("bd*4"),
  s("hh*8")
)
```

### 87. Party Don't Stop (Camp Mulla)
```javascript
// Party Don't Stop - Urban Pop
setcps(0.64)
stack(
  note("f4 a4 c5 f5").s("square").bright(0.5),
  s("bd sd"),
  s("clap").slow(2)
)
```

### 88. K'Lang (Camp Mulla)
```javascript
// K'Lang - Smooth
setcps(0.55)
stack(
  note("g4 bb4 d5 g5").s("pad").slow(2),
  s("bd sd"),
  note("g2").s("bass")
)
```

### 89. Hold It Down (Camp Mulla)
```javascript
// Hold It Down - Chill
setcps(0.5)
stack(
  note("a3 c4 e4 a4").s("piano").room(0.6),
  s("snap").slow(2),
  note("a1").s("bass")
)
```

### 90. Kwaheri (Jua Cali)
```javascript
// Kwaheri - Goodbye
setcps(0.55)
stack(
  note("c4 e4 g4 c5").s("guitar").clean(0.4),
  s("rim*4"),
  note("c2").s("bass").slow(2)
)
```

### 91. Bidii Yangu (Jua Cali)
```javascript
// Bidii Yangu - Hustle
setcps(0.5)
stack(
  note("e4 g#4 b4 e5").s("organ").staccato(0.5),
  s("bd sd"),
  note("e2").s("bass")
)
```

### 92. Kamata (Jua Cali)
```javascript
// Kamata - Party
setcps(0.6)
stack(
  note("g4 b4 d5 g5").s("lead").fast(2),
  s("bd*4"),
  s("hh*8")
)
```

### 93. Under 18 (Jimwat)
```javascript
// Under 18 - Story
setcps(0.55)
stack(
  note("d4 f#4 a4 d5").s("pluck").room(0.4),
  s("bd sd"),
  note("d2").s("bass")
)
```

### 94. Sitoi Kitu Kidogo (Jimwat)
```javascript
// Sitoi Kitu Kidogo - Integrity
setcps(0.5)
stack(
  note("c4 eb4 g4 c5").s("synth").chop(4),
  s("bd sd"),
  note("c2").s("bass")
)
```

### 95. Jana Kuliendaje (Mejja)
```javascript
// Jana Kuliendaje - Storytelling
setcps(0.57)
stack(
  note("f4 a4 c5 f5").s("organ").fast(2),
  s("bd sd"),
  s("laughter").slow(8)
)
```

### 96. Landlord (Mejja)
```javascript
// Landlord - Struggles
setcps(0.55)
stack(
  note("g4 b4 d5 g5").s("piano").staccato(0.6),
  s("bd sd"),
  note("g2").s("bass")
)
```

### 97. Niko na Safaricom (Theme)
```javascript
// Niko na Safaricom - Choir
setcps(0.6)
stack(
  note("g4 c5 e5 g5").s("choir").vowel("a").room(1),
  note("c3 g3").s("bass").slow(2),
  s("chimes").slow(4)
)
```

### 98. Fundamentals (Ken wa Maria)
```javascript
// Fundamentals - Kamba Benga
setcps(0.65)
stack(
  note("c5 c5 b4 a4 g4").s("guitar").bright(0.8).fast(2),
  s("bd sd"),
  note("c2").s("bass").arp("up")
)
```

### 99. Lamba Lolo (Ethic)
```javascript
// Lamba Lolo - Gengetone
setcps(0.5)
stack(
  note("a3 c4 e4 a4").s("sine").distort(0.2), // Dark minimal beat
  s("bd*4").sound("heavy"),
  s("clap").slow(2)
)
```

### 100. Wamlambez (Sailors)
```javascript
// Wamlambez - Hype
setcps(0.52)
stack(
  note("d4 f4 a4 d5").s("square").chop(2),
  s("bd").gain(1.2),
  s("shout").vowel("a").slow(2) // "Wamlambez!"
)
```
