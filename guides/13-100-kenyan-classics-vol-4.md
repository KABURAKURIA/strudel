# 100 Kenyan Classics Vol. 4 (Strudel Guide)

This guide adds **100 more famous Kenyan tunes** to your Strudel library, focusing on the new waves of **Arbantone**, **Nu-Nairobi**, **Modern Worship**, **Coastal Classics**, and nostalgic **TV Themes**.

## How to Use
Copy the code blocks into [Strudel](https://strudel.tidalcycles.org) or your local "Kunguru Algo" instance.
Each song uses `stack()` to layer melody and rhythm, and `cat()` to arrange sections.

---

## Category 1: Arbantone & The New Wave
*The latest sound taking over Nairobi streets.*

### 1. Angela (Boutross)
The smash hit that defined 2023.
```javascript
// Angela - Boutross
// setcps(0.24)
stack(
  s("superpiano").note(cat(
    "f3@2 g3@1 a3@1 c4@2 . c4@1 a3@1 f3@2",
    "d3@2 f3@1 g3@1 a3@2 . g3@1 f3@1 d3@2"
  )).slow(2.75).lpf(2000),
  s("bd, sd").struct("x ~ x ~")
)
```

### 2. Kaskie Vibaya (Fathermoh)
Viral phrase turned into a massive banger.
```javascript
// Kaskie Vibaya - Fathermoh
// setcps(0.25)
stack(
  s("supersaw").note("c4 a3 g3 e3 . c4 a3 g3 e3").lpf(1500),
  s("hh*8"),
  s("bd").struct("x(3,8)")
)
```

### 3. Dai Dai (Fathermoh)
Another heavy hitter from the Arbantone scene.
```javascript
// Dai Dai - Fathermoh
// setcps(0.26)
stack(
  s("supermandolin").note("e4@1 e4@1 d4@2 . c4@1 c4@1 a3@2"),
  s("bd:4").struct("x(3,8)"),
  s("cp").struct("~ x ~ x")
)
```

### 4. Hizo (Maandy)
Maandy's confident flow and catchy hook.
```javascript
// Hizo - Maandy
// setcps(0.24)
stack(
  s("superpiano").note("a3 a3 g3 e3 . d3 d3 e3 g3").velocity(0.8),
  s("bd, sd").struct("x x x x")
)
```

### 5. Sir God (Maandy)
A grateful yet street-smart anthem.
```javascript
// Sir God - Maandy
// setcps(0.23)
stack(
  s("supersquare").note("g3@2 b3@2 d4@2 b3@2").lpf(800),
  s("bd").struct("x(3,8)"),
  s("hh*4")
)
```

### 6. Taka Taka (Alvindara)
The viral hit that broke the internet.
```javascript
// Taka Taka - Alvindara
// setcps(0.25)
stack(
  s("superpiano").note("c4 c4 b3 a3 . g3 g3 f3 e3"),
  s("bd:2").struct("x(5,8)")
)
```

### 7. Wanjapi (X-Ray)
A foundational track for the new sound.
```javascript
// Wanjapi - X-Ray
// setcps(0.25)
stack(
  s("superimbibe").note("a3@0.5 a3@0.5 g3@1 e3@2").lpf(2000),
  s("bd, cp").struct("x ~ x ~")
)
```

### 8. Sipangwingwi (Exray)
The phrase that became a national slogan.
```javascript
// Sipangwingwi - Exray
// setcps(0.24)
stack(
  s("supersaw").note("e4 e4 d4 c4 . b3 a3 g3 a3").lpf(1000),
  s("bd").struct("x(3,8)"),
  s("hh*8")
)
```

### 9. Mbwe Mbwe (Bien)
Bien's smooth vocals over a modern beat.
```javascript
// Mbwe Mbwe - Bien
// setcps(0.22)
stack(
  s("superrhodes").note("c4@2 d4@1 e4@1 . g4@2 e4@2"),
  s("bd").struct("x ~ x x"),
  s("sd").struct("~ x ~ x")
)
```

### 10. Dimension (Fully Focus)
A global Afro-fusion hit.
```javascript
// Dimension - Fully Focus
// setcps(0.23)
stack(
  s("superpiano").note("f3 a3 c4 e4 . d4 c4 a3 g3"),
  s("bd").struct("x(5,8)")
)
```

### 11. Kuna Kuna (Vic West)
The biggest collaboration of 2022/2023.
```javascript
// Kuna Kuna - Vic West
// setcps(0.24)
stack(
  s("supersaw").note("a3 c4 e4 g4 . f4 e4 c4 a3"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 12. Geri Inengi (Wakadinali)
Drill music taking over Nairobi.
```javascript
// Geri Inengi - Wakadinali
// setcps(0.25)
stack(
  s("superpiano").note("c3 c3 c3 c3 . eb3 eb3 eb3 eb3").lpf(500),
  s("bd").struct("x(3,8)"),
  s("hh*16")
)
```

### 13. Mc Mca (Wakadinali)
Hard-hitting bars and heavy bass.
```javascript
// Mc Mca - Wakadinali
// setcps(0.26)
stack(
  s("supersquare").note("g2 g2 bb2 c3").lpf(400),
  s("bd, sd").struct("x ~ x ~")
)
```

### 14. Sikutambui (Wakadinali)
Unapologetic drill anthem.
```javascript
// Sikutambui - Wakadinali
// setcps(0.25)
stack(
  s("supersaw").note("c3@3 eb3@1").lpf(800),
  s("bd").struct("x(3,8)"),
  s("hc*8")
)
```

### 15. Zooby Doo (Maandy)
Playful and catchy.
```javascript
// Zooby Doo - Maandy
// setcps(0.24)
stack(
  s("superpiano").note("e4 e4 d4 c4 . b3 b3 a3 g3"),
  s("bd:3").struct("x(3,8)")
)
```

### 16. Sherehe Sheria (Ndovu Kuu)
The party anthem about moderation (or lack thereof).
```javascript
// Sherehe Sheria - Ndovu Kuu
// setcps(0.24)
stack(
  s("supersaw").note("a3 c4 d4 e4 . d4 c4 a3 g3"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 17. Ndovu Ni Kuu (Ndovu Kuu)
The breakthrough hit.
```javascript
// Ndovu Ni Kuu - Ndovu Kuu
// setcps(0.23)
stack(
  s("superpiano").note("c4 c4 c4 a3 . g3 g3 g3 e3"),
  s("bd").struct("x(3,8)")
)
```

### 18. Kwangwaru (Ke Cover)
The Kenyan take on the Bongo hit.
```javascript
// Kwangwaru Style
// setcps(0.22)
stack(
  s("supermandolin").note("e4 d4 c4 b3 . a3 g3 a3 b3"),
  s("bd, sd").struct("x x x x")
)
```

### 19. Dus Nyau (Lil Maina)
Humorous and viral.
```javascript
// Dus Nyau - Lil Maina
// setcps(0.25)
stack(
  s("superpiano").note("c4 b3 a3 g3 . f3 e3 d3 c3"),
  s("bd").struct("x(3,8)")
)
```

### 20. Kishash (Lil Maina)
The Reggae-Dancehall infused hit.
```javascript
// Kishash - Lil Maina
// setcps(0.24)
stack(
  s("superhammond").note("a3@1 a3@1 g3@2 . f3@1 f3@1 e3@2"),
  s("bd").struct("x ~ x ~"),
  s("hh").struct("~ x ~ x")
)
```

## Category 2: Nu-Nairobi & Alternative
*Soulful, electronic, and experimental sounds.*

### 21. Mungu Halali (Blinky Bill)
A soulful reflection.
```javascript
// Mungu Halali - Blinky Bill
// setcps(0.20)
stack(
  s("superrhodes").note("c4@2 e4@2 g4@2 b4@2").lpf(1000),
  s("bd").struct("x(3,8)")
)
```

### 22. Atenshan (Blinky Bill)
Upbeat and funky.
```javascript
// Atenshan - Blinky Bill
// setcps(0.22)
stack(
  s("superclav").note("f3 a3 c4 d4 . c4 a3 f3 d3"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 23. Suzie Noma (Muthoni DQ)
Empowering and energetic.
```javascript
// Suzie Noma - MDQ
// setcps(0.24)
stack(
  s("supersaw").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd").struct("x(4,4)")
)
```

### 24. Power (Muthoni DQ)
A heavy, rhythmic anthem.
```javascript
// Power - MDQ
// setcps(0.23)
stack(
  s("supersquare").note("c3 c3 c3 eb3").lpf(500),
  s("bd").struct("x(5,8)")
)
```

### 25. Glow (Karun)
Smooth R&B vibes.
```javascript
// Glow - Karun
// setcps(0.20)
stack(
  s("superrhodes").note("f3 a3 c4 e4").lpf(800),
  s("bd").struct("x ~ ~ x")
)
```

### 26. Just a Moment (Karun)
Introspective and chill.
```javascript
// Just a Moment - Karun
// setcps(0.18)
stack(
  s("superpiano").note("c4 b3 a3 g3").slow(2),
  s("bd").struct("x(3,8)")
)
```

### 27. Low Key (Xenia Manasseh)
Beautiful melodies.
```javascript
// Low Key - Xenia
// setcps(0.20)
stack(
  s("superrhodes").note("e4 g4 b4 d5 . c5 b4 g4 e4"),
  s("bd").struct("x(3,8)")
)
```

### 28. Niambie (Xenia Manasseh)
Deeply emotional.
```javascript
// Niambie - Xenia
// setcps(0.19)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd").struct("x ~ x ~")
)
```

### 29. Round 2 (Tetu Shani)
Folk-pop fusion.
```javascript
// Round 2 - Tetu Shani
// setcps(0.22)
stack(
  s("superguitar").note("c3 e3 g3 c4"),
  s("hh*4")
)
```

### 30. Chemistry (Tetu Shani)
A lovely duet vibe.
```javascript
// Chemistry - Tetu Shani
// setcps(0.21)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 31. Extravaganza (Sauti Sol)
The Rhumba-infused hit featuring the whole label.
```javascript
// Extravaganza - Sauti Sol
// setcps(0.23)
stack(
  s("superpiano").note("c4 c4 b3 a3 . g3 f3 e3 d3"),
  s("bd").struct("x x x x")
)
```

### 32. In Case You Don't Know (Jux/Nyashinski)
Smooth love song.
```javascript
// In Case You Don't Know
// setcps(0.22)
stack(
  s("superrhodes").note("f3 a3 c4 f4 . e4 c4 a3 g3"),
  s("bd").struct("x(3,8)")
)
```

### 33. Nairobi (Bensoul)
The song that defined Nairobi dating.
```javascript
// Nairobi - Bensoul
// setcps(0.23)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 34. Forget You (Bensoul)
Acoustic soul.
```javascript
// Forget You - Bensoul
// setcps(0.22)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ ~ ~")
)
```

### 35. Rhumba Japani (Sauti Sol)
High energy Rhumba pop.
```javascript
// Rhumba Japani
// setcps(0.25)
stack(
  s("supersaw").note("c4 c4 d4 e4 . d4 c4 b3 a3"),
  s("bd").struct("x(4,4)")
)
```

### 36. Bald Men Love Better (Bien)
Humorous and jazzy.
```javascript
// Bald Men Love Better - Bien
// setcps(0.23)
stack(
  s("superpiano").note("f3 a3 c4 d4 . c4 a3 f3 d3"),
  s("hh*4")
)
```

### 37. Inauma (Bien)
A heartbreak anthem you can dance to.
```javascript
// Inauma - Bien
// setcps(0.24)
stack(
  s("superrhodes").note("e4 g4 b4 d5 . c5 b4 g4 e4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 38. Too Easy (Bien)
Laid back vibes.
```javascript
// Too Easy - Bien
// setcps(0.22)
stack(
  s("superpiano").note("a3 c4 e4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 39. Watangoja (Nviiri)
Hopeful and rhythmic.
```javascript
// Watangoja - Nviiri
// setcps(0.23)
stack(
  s("supersaw").note("c4 d4 e4 f4 . e4 d4 c4 b3"),
  s("bd").struct("x x x x")
)
```

### 40. Pombe Sigara (Nviiri)
The breakout solo hit.
```javascript
// Pombe Sigara - Nviiri
// setcps(0.24)
stack(
  s("superpiano").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 3: Modern Worship & Gospel
*Songs that lift the spirit.*

### 41. Huniachi (Reuben Kigame)
A timeless song of reassurance.
```javascript
// Huniachi - Reuben Kigame
// setcps(0.18)
stack(
  s("superpiano").note("c4@2 e4@2 g4@2 c5@2").slow(2),
  s("bd").struct("x ~ ~ ~")
)
```

### 42. Enda Nasi (Reuben Kigame)
A prayer for guidance.
```javascript
// Enda Nasi - Reuben Kigame
// setcps(0.18)
stack(
  s("superpiano").note("f3@2 a3@2 c4@2 f4@2"),
  s("bd").struct("x(3,8)")
)
```

### 43. Nadeka (Guardian Angel)
Contemporary gospel with a beat.
```javascript
// Nadeka - Guardian Angel
// setcps(0.23)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 44. Hadithi (Guardian Angel)
Storytelling in song.
```javascript
// Hadithi - Guardian Angel
// setcps(0.22)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 45. Mwema (Mercy Masika)
A massive worship hit.
```javascript
// Mwema - Mercy Masika
// setcps(0.20)
stack(
  s("superrhodes").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x ~ x ~")
)
```

### 46. Shule Yako (Mercy Masika)
Ideally suited for reflection.
```javascript
// Shule Yako - Mercy Masika
// setcps(0.19)
stack(
  s("superpiano").note("f3 a3 c4 f4 . e4 c4 a3 g3"),
  s("bd").struct("x(3,8)")
)
```

### 47. Nikupendeze (Mercy Masika)
A desire to please God.
```javascript
// Nikupendeze - Mercy Masika
// setcps(0.20)
stack(
  s("superpiano").note("g3 b3 d4 g4 . f#4 d4 a3 g3"),
  s("bd").struct("x ~ ~ x")
)
```

### 48. Kaa Nami (Pitson)
A plea for presence.
```javascript
// Kaa Nami - Pitson
// setcps(0.21)
stack(
  s("superrhodes").note("c4@2 d4@1 e4@1 . f4@2 e4@2"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 49. Lingala Ya Yesu (Pitson)
Upbeat Lingala style gospel.
```javascript
// Lingala Ya Yesu
// setcps(0.25)
stack(
  s("supersaw").note("c4 c4 d4 e4 . d4 c4 b3 a3"),
  s("bd").struct("x(4,4)"),
  s("hh*8")
)
```

### 50. Vigelegele (Moji Shortbabaa)
High energy praise.
```javascript
// Vigelegele - Moji
// setcps(0.26)
stack(
  s("supersaw").note("g3 g3 b3 d4 . g4 g4 f#4 e4"),
  s("bd, cp").struct("x ~ x ~")
)
```


### 51. Kuzitoka (Moji Shortbabaa)
Dance-floor gospel.
```javascript
// Kuzitoka - Moji
// setcps(0.25)
stack(
  s("superpiano").note("c4 c4 d4 e4 . g4 g4 a4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 52. Pale Pale (Size 8)
A testimony of grace.
```javascript
// Pale Pale - Size 8
// setcps(0.24)
stack(
  s("superpiano").note("e4 g4 c5 e5 . d5 c5 g4 e4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 53. Mateke (Size 8)
The song that launched her gospel career.
```javascript
// Mateke - Size 8
// setcps(0.25)
stack(
  s("supersaw").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd").struct("x(3,8)")
)
```

### 54. Thitima (Kymo & Stigah)
Electric energy and humor.
```javascript
// Thitima - Kymo
// setcps(0.26)
stack(
  s("supersquare").note("c3 c3 g3 c4").lpf(800),
  s("bd, cp").struct("x ~ x ~")
)
```

### 55. Bazokizo (Collo)
The dance craze of 2016.
```javascript
// Bazokizo - Collo
// setcps(0.25)
stack(
  s("supermandolin").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd").struct("x(4,4)")
)
```

### 56. Odi Dance (Timeless Noel)
Taking gospel to the streets.
```javascript
// Odi Dance - Timeless Noel
// setcps(0.25)
stack(
  s("supersaw").note("c4 c4 c4 c4 . e4 e4 e4 e4"),
  s("bd").struct("x(3,8)")
)
```

### 57. KDF (Timeless Noel)
Kula Neno, Kula Bible.
```javascript
// KDF - Timeless Noel
// setcps(0.24)
stack(
  s("superpiano").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 58. Chini Ya Mwamba (Alice Kimanzi)
Powerful worship.
```javascript
// Chini Ya Mwamba
// setcps(0.20)
stack(
  s("superrhodes").note("c4@2 e4@2 g4@2 c5@2").slow(2),
  s("bd").struct("x ~ ~ ~")
)
```

### 59. Yule Yule (Alice Kimanzi)
Celebrating God's consistency.
```javascript
// Yule Yule - Alice Kimanzi
// setcps(0.22)
stack(
  s("superpiano").note("g3 b3 d4 g4 . f#4 d4 a3 g3"),
  s("bd").struct("x(3,8)")
)
```

### 60. Niko Na Mungu (Adawnage)
Band-driven contemporary gospel.
```javascript
// Niko Na Mungu - Adawnage
// setcps(0.23)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

## Category 4: Coastal Classics, Taarab & Swahili
*The rich musical heritage of the Kenyan coast.*

### 61. Muhogo wa Jang'ombe (Bi Kidude)
The legend of Taarab.
```javascript
// Muhogo wa Jang'ombe - Bi Kidude
// setcps(0.22)
stack(
  s("supermandolin").note("c4@1 d4@1 e4@2 . d4@1 c4@1 b3@2"),
  s("bd").struct("x ~ ~ x"),
  s("hh*8")
)
```

### 62. Kijiti (Bi Kidude)
A cautionary tale.
```javascript
// Kijiti - Bi Kidude
// setcps(0.21)
stack(
  s("superimbibe").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 63. Pakacha (Siti Muharam)
Modern Taarab fusion.
```javascript
// Pakacha - Siti Muharam
// setcps(0.23)
stack(
  s("supermandolin").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 64. Disco Chakacha (Mombasa Roots)
The ultimate coastal party song.
```javascript
// Disco Chakacha
// setcps(0.25)
stack(
  s("superpiano").note("c4 c4 e4 g4 . f4 d4 b3 g3"),
  s("bd").struct("x(4,4)"),
  s("hh*8")
)
```

### 65. Kata (Mombasa Roots)
Energetic Chakacha rhythm.
```javascript
// Kata - Mombasa Roots
// setcps(0.26)
stack(
  s("supersaw").note("f3 a3 c4 f4 . e4 c4 a3 g3"),
  s("bd").struct("x(3,8)")
)
```

### 66. Safari Ya Bamba (Mombasa Roots)
A journey through the coast.
```javascript
// Safari Ya Bamba
// setcps(0.24)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 67. Vidonge (Lady Jaydee)
Adopted as a Kenyan favorite.
```javascript
// Vidonge - Lady Jaydee
// setcps(0.23)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd").struct("x(3,8)")
)
```

### 68. Siku Hazigandi (Swahili Nation)
Classic R&B Swahili ballad.
```javascript
// Siku Hazigandi
// setcps(0.20)
stack(
  s("superrhodes").note("c4@2 e4@2 g4@2 b4@2").lpf(800),
  s("bd").struct("x ~ ~ x")
)
```

### 69. Hakuna Matata (Swahili Nation)
The chart-topping hit.
```javascript
// Hakuna Matata - Swahili Nation
// setcps(0.24)
stack(
  s("superpiano").note("c4 d4 e4 f4 . g4 f4 e4 d4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 70. Mwanamke Mwenye Tabia (Nuta Jazz)
Old school wisdom.
```javascript
// Mwanamke Mwenye Tabia
// setcps(0.22)
stack(
  s("superguitar").note("f3 a3 c4 f4"),
  s("bd").struct("x(3,8)")
)
```

### 71. Kula Happy (Uyoga/Them Mushrooms)
The essence of coastal happiness.
```javascript
// Kula Happy
// setcps(0.25)
stack(
  s("superpiano").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd").struct("x(4,4)")
)
```

### 72. Nyambura (Uyoga)
A cross-cultural hit.
```javascript
// Nyambura - Uyoga
// setcps(0.24)
stack(
  s("supersaw").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x(3,8)")
)
```

### 73. Embe Dodo (Them Mushrooms)
Sweet as a mango.
```javascript
// Embe Dodo
// setcps(0.23)
stack(
  s("supermandolin").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 74. Unkula Huu (Them Mushrooms)
Classic Chakacha beat.
```javascript
// Unkula Huu
// setcps(0.25)
stack(
  s("superpiano").note("d4 f4 a4 d5 . c5 a4 f4 e4"),
  s("bd").struct("x(3,8)")
)
```

### 75. Karibuni Kenya (Fadhili William)
The song that welcomed the world.
```javascript
// Karibuni Kenya
// setcps(0.22)
stack(
  s("superguitar").note("c4@2 e4@1 g4@1 . f4@2 d4@2"),
  s("bd").struct("x ~ x ~")
)
```

## Category 5: TV Themes & Nostalgia
*Sounds that defined a generation of TV viewers.*

### 76. Vioja Mahakamani Theme
The iconic courtroom drama tune.
```javascript
// Vioja Mahakamani
// setcps(0.28)
stack(
  s("superpiano").note("c5 b4 a4 g4 . f4 e4 d4 c4").velocity(1.2),
  s("sn").struct("x x x x")
)
```

### 77. Vitimbi Theme
Comedy gold from Ojwang and Mama Kayai.
```javascript
// Vitimbi Theme
// setcps(0.26)
stack(
  s("supersaw").note("g4 e4 c4 g3 . c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 78. Je Huu Ni Ungwana Theme
Leonard Mambo Mbotela's signature.
```javascript
// Je Huu Ni Ungwana
// setcps(0.24)
stack(
  s("supermandolin").note("c4 d4 e4 c4 . d4 e4 f4 d4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 79. KBC News Theme (Reconstructed)
The sound of 1PM, 7PM and 9PM.
```javascript
// KBC News Style
// setcps(0.3)
stack(
  s("superpiano").note("c4 c4 g3 c4 . e4 g4 c5 ~"),
  s("bd").struct("x ~ ~ ~")
)
```

### 80. Tausi Theme
The melodramatic soap opera theme.
```javascript
// Tausi Theme
// setcps(0.20)
stack(
  s("superrhodes").note("a3 c4 e4 a4").slow(2),
  s("bd").struct("x(3,8)")
)
```

### 81. Kisulisuli Theme
Mystery and intrigue.
```javascript
// Kisulisuli Theme
// setcps(0.22)
stack(
  s("supersquare").note("d3 f3 a3 d4").lpf(800),
  s("bd").struct("x ~ x ~")
)
```

### 82. Tahamaki Theme
Crime drama tension.
```javascript
// Tahamaki Theme
// setcps(0.25)
stack(
  s("supersaw").note("c3 eb3 g3 c4").lpf(600),
  s("bd").struct("x(4,4)")
)
```

### 83. URTNA Theme
The cultural exchange program logo sound.
```javascript
// URTNA Theme Style
// setcps(0.24)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("hh*8")
)
```

### 84. Metro FM Jingle
The sound of urban radio.
```javascript
// Metro FM Style
// setcps(0.26)
stack(
  s("superpiano").note("c4 e4 g4 c5 . b4 a4 g4 f4"),
  s("bd").struct("x(3,8)")
)
```

### 85. Safari Rally Theme
The excitement of Easter weekend.
```javascript
// Safari Rally Style
// setcps(0.30)
stack(
  s("supersaw").note("e4 e4 e4 e4 . g4 g4 g4 g4"),
  s("bd, sn").struct("x x x x")
)
```

## Category 6: Regional Hits & Folk Fusion
*From Mugithi to Ohangla and beyond.*

### 86. Tuirio Twega (Samidoh)
Modern Mugithi superstar.
```javascript
// Tuirio Twega - Samidoh
// setcps(0.24)
stack(
  s("superguitar").note("c4@1 a3@1 g3@2 . f3@1 e3@1 d3@2"),
  s("bd").struct("x ~ x ~"),
  s("hh*4")
)
```

### 87. Wendo Wi Cama (Samidoh)
A love song favorite.
```javascript
// Wendo Wi Cama - Samidoh
// setcps(0.23)
stack(
  s("supermandolin").note("g3 b3 d4 g4 . f#4 d4 b3 a3"),
  s("bd").struct("x(3,8)")
)
```

### 88. Mumbi (Samidoh)
Emotional and rhythmic.
```javascript
// Mumbi - Samidoh
// setcps(0.24)
stack(
  s("superguitar").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 89. Marebeti (Jose Gatutura)
The King of Mugithi.
```javascript
// Marebeti - Jose Gatutura
// setcps(0.25)
stack(
  s("superguitar").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x(4,4)")
)
```

### 90. Tuongee (Jose Gatutura)
A conversation in song.
```javascript
// Tuongee - Jose Gatutura
// setcps(0.24)
stack(
  s("supermandolin").note("f3 a3 c4 f4 . e4 c4 a3 g3"),
  s("bd").struct("x(3,8)")
)
```

### 91. Kanengo (Osogo Winyo)
The Ohangla hitmaker.
```javascript
// Kanengo - Osogo Winyo
// setcps(0.26)
stack(
  s("superpiano").note("c4 c4 a3 f3 . g3 g3 e3 c3"),
  s("bd").struct("x(3,8)")
)
```

### 92. Wanadamu (Osogo Winyo)
Philosophical Ohangla.
```javascript
// Wanadamu - Osogo Winyo
// setcps(0.25)
stack(
  s("supersaw").note("d4 d4 c4 a3 . g3 g3 f3 d3"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 93. Cham Thum (Odongo Swagg)
New wave Ohangla.
```javascript
// Cham Thum - Odongo Swagg
// setcps(0.27)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd").struct("x(4,4)")
)
```

### 94. Nyasembo (Onyi Papa Jey)
Classic Ohangla.
```javascript
// Nyasembo - Onyi Papa Jey
// setcps(0.25)
stack(
  s("supermandolin").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 95. Mpa We (Kula Wa Mwea)
Kamba Benga rhythm.
```javascript
// Mpa We - Kula Wa Mwea
// setcps(0.28)
stack(
  s("superguitar").note("g3 b3 d4 g4 . f#4 d4 b3 a3").velocity(1.2),
  s("bd, sn").struct("x x x x")
)
```

### 96. Kitunguu (Kula Wa Mwea)
Fast paced dance.
```javascript
// Kitunguu - Kula Wa Mwea
// setcps(0.29)
stack(
  s("superguitar").note("c4 c4 e4 g4 . f4 d4 b3 g3"),
  s("bd").struct("x(4,4)")
)
```

### 97. Firirinda (Dick Munyonyi)
The song that went viral 30 years later.
```javascript
// Firirinda - Dick Munyonyi
// setcps(0.25)
stack(
  s("superguitar").note("c4 d4 e4 g4 . e4 d4 c4 a3"),
  s("bd").struct("x ~ x ~"),
  s("cp").struct("~ x ~ x")
)
```

### 98. Rieng (Boondocks Gang)
Gengetone explosion.
```javascript
// Rieng - Boondocks Gang
// setcps(0.24)
stack(
  s("supersaw").note("e4 e4 d4 c4 . b3 a3 g3 a3").lpf(1000),
  s("bd").struct("x(3,8)")
)
```

### 99. Lamba Lolo (Ethic)
The song that started the Gengetone wave.
```javascript
// Lamba Lolo - Ethic
// setcps(0.23)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 100. Position (Ethic)
Another Gengetone banger to close.
```javascript
// Position - Ethic
// setcps(0.24)
stack(
  s("supersquare").note("c4 c4 b3 a3 . g3 f3 e3 d3"),
  s("bd").struct("x(3,8)"),
  s("hh*8")
)
```
