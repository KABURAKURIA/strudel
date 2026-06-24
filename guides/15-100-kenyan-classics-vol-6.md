# 100 Kenyan Classics Vol. 6 (Strudel Guide)

This guide adds **100 more famous Kenyan tunes** to your Strudel library, focusing on **Zilizopendwa Deep Cuts**, **R&B Queens**, **Mugithi Royalty**, **Vernacular Pop**, **Fresh Arbantone**, and **Gospel Anthems**.

## How to Use
Copy the code blocks into [Strudel](https://strudel.tidalcycles.org) or your local "Kunguru Algo" instance.

---

## Category 1: Zilizopendwa & Rhumba Gems (Deep Cuts)
*Timeless classics from the golden era of Kenyan music.*

### 1. Christina (Them Mushrooms)
A soulful ballad from the coast.
```javascript
// Christina - Them Mushrooms
// setcps(0.6)
stack(
  s("supermandolin").note("c4@1 e4@1 g4@2 . f4@1 d4@1 b3@2"),
  s("bd, sd").struct("x ~ x ~"),
  s("hh*8")
)
```

### 2. Pole Ndugu (Les Wanyika)
A comforting song for tough times.
```javascript
// Pole Ndugu - Les Wanyika
// setcps(0.58)
stack(
  s("superpiano").note("g3@2 b3@2 d4@2 g4@2"),
  s("bd").struct("x(3,8)"),
  s("cp").struct("~ x ~ x")
)
```

### 3. Mwongele (Les Wanyika)
Classic Rhumba rhythm.
```javascript
// Mwongele - Les Wanyika
// setcps(0.62)
stack(
  s("supersaw").note("f3 a3 c4 f4 . e4 c4 a3 g3").lpf(1000),
  s("bd").struct("x(4,4)"),
  s("hh*8")
)
```

### 4. Barua (Maroon Commandos)
A musical letter.
```javascript
// Barua - Maroon Commandos
// setcps(0.6)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 5. Usinihande (Longombas)
Early 2000s Kapuka gold.
```javascript
// Usinihande - Longombas
// setcps(0.55)
stack(
  s("superpiano").note("a3 c4 e4 a4 . g4 e4 c4 b3"),
  s("bd").struct("x(3,8)")
)
```

### 6. Hare Ee (Longombas)
The storytelling masterpiece.
```javascript
// Hare Ee - Longombas
// setcps(0.58)
stack(
  s("supersquare").note("c4 e4 g4 c5").lpf(800),
  s("bd, sd").struct("x ~ x ~")
)
```

### 7. Riziki Haivutwi (Simba Wanyika)
Wisdom in song.
```javascript
// Riziki Haivutwi
// setcps(0.6)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 8. Sina Kazi (Simba Wanyika)
The unemployment blues.
```javascript
// Sina Kazi
// setcps(0.62)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 9. Dunia ni Duara (Simba Wanyika)
The world is a circle.
```javascript
// Dunia ni Duara
// setcps(0.6)
stack(
  s("superpiano").note("c4 c4 e4 g4"),
  s("bd").struct("x(4,4)")
)
```

### 10. Pampero (Les Mangelepa)
High energy Soukous style.
```javascript
// Pampero
// setcps(0.65)
stack(
  s("supersaw").note("d4 f#4 a4 d5").chop(2),
  s("bd, sd").struct("x ~ x ~")
)
```

### 11. Embakasi (Les Mangelepa)
A tribute to the Nairobi neighborhood.
```javascript
// Embakasi
// setcps(0.6)
stack(
  s("superguitar").note("f3 a3 c4 f4"),
  s("hh*8")
)
```

### 12. Nyako Konya (Les Mangelepa)
Help me, girl.
```javascript
// Nyako Konya
// setcps(0.62)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 13. Shinda (Maroon Commandos)
Overcome.
```javascript
// Shinda
// setcps(0.58)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 14. Sophia (Musaimo)
The Kikuyu classic that crossed over.
```javascript
// Sophia - Musaimo
// setcps(0.6)
stack(
  s("supermandolin").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x(4,4)")
)
```

### 15. Ka-Sera (Kakai Kilonzo)
Kamba Benga legend.
```javascript
// Ka-Sera
// setcps(0.65)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 2: Kenyan R&B & Pop Divas
*Smooth vocals and unforgettable melodies.*

### 16. Mfalme wa Mapenzi (Sanaipei Tande)
The Queen of Kenyan R&B.
```javascript
// Mfalme wa Mapenzi
// setcps(0.5)
stack(
  s("superrhodes").note("c4 e4 g4 c5").lpf(1000),
  s("bd").struct("x ~ ~ x")
)
```

### 17. Kesho (Sanaipei Tande)
A song about tomorrow.
```javascript
// Kesho - Sanaipei
// setcps(0.48)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 18. Najua (Sanaipei Tande)
I know.
```javascript
// Najua - Sanaipei
// setcps(0.52)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 19. Kiboko Changu (Amani ft. Radio & Weasel)
The East African anthem.
```javascript
// Kiboko Changu
// setcps(0.6)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 20. Bad Boy (Amani ft. Nyashinski)
The classic duet.
```javascript
// Bad Boy
// setcps(0.62)
stack(
  s("supersquare").note("a3 c4 e4 a4").lpf(800),
  s("bd, sd").struct("x ~ x ~")
)
```

### 21. Tamani (Amani)
Desire.
```javascript
// Tamani
// setcps(0.58)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 22. Sweet Love (Wahu)
A dedication to her daughter.
```javascript
// Sweet Love - Wahu
// setcps(0.55)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ x ~")
)
```

### 23. Liar (Wahu)
Calling out dishonesty.
```javascript
// Liar - Wahu
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5").chop(2),
  s("bd, cp").struct("x ~ x ~")
)
```

### 24. Sitishiki (Wahu)
Unshakeable.
```javascript
// Sitishiki
// setcps(0.58)
stack(
  s("superpiano").note("f3 a3 c4 f4"),
  s("bd").struct("x(3,8)")
)
```

### 25. Running Low (Wahu)
Emotional ballad.
```javascript
// Running Low
// setcps(0.5)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd").struct("x ~ ~ x")
)
```

### 26. Kide Kide (Habida)
Dance hit.
```javascript
// Kide Kide
// setcps(0.62)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 27. My Reason (Habida ft. Cannibal)
Love song.
```javascript
// My Reason
// setcps(0.55)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 28. Fever (Habida)
Temperature rising.
```javascript
// Fever
// setcps(0.58)
stack(
  s("supersaw").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 29. Chokoza (Marya & Avril)
The ultimate girls' night out song.
```javascript
// Chokoza
// setcps(0.65)
stack(
  s("superpwm").note("g3 b3 d4 g4"),
  s("bd").struct("x(4,4)")
)
```

### 30. Kitu Kimoja (Avril)
One thing.
```javascript
// Kitu Kimoja
// setcps(0.55)
stack(
  s("superpiano").note("f3 a3 c4 f4"),
  s("bd").struct("x(3,8)")
)
```

## Category 3: Mugithi & Vernacular Pop Deep Cuts
*Roots music that moves the nation.*

### 31. Vindu Vichenjanga (Amos Barasa)
Luhya pop anthem: "Things change".
```javascript
// Vindu Vichenjanga
// setcps(0.6)
stack(
  s("supermandolin").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 32. Omveri (Valerie Kimani)
Luhya fusion ballad.
```javascript
// Omveri
// setcps(0.5)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ ~ x")
)
```

### 33. My Dear (John De'Mathew)
A classic love letter.
```javascript
// My Dear - John De'Mathew
// setcps(0.55)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 34. Mene Mene (John De'Mathew)
Prophetic song.
```javascript
// Mene Mene
// setcps(0.58)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 35. Simba Mbili (Kakai Kilonzo)
Kamba wisdom.
```javascript
// Simba Mbili
// setcps(0.62)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("hh*8")
)
```

### 36. Wanjiku wa Caki (CDM Kiratu)
Kikuyu old school.
```javascript
// Wanjiku wa Caki
// setcps(0.6)
stack(
  s("supermandolin").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 37. Syindu Sya Mutongoi (Ken wa Maria)
Kamba benga beat.
```javascript
// Syindu Sya Mutongoi
// setcps(0.65)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd").struct("x(4,4)")
)
```

### 38. Miss Mbooni (Ken wa Maria)
Beauty of Mbooni.
```javascript
// Miss Mbooni
// setcps(0.64)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 39. Kanunu (Samidoh)
Deep cut Mugithi.
```javascript
// Kanunu
// setcps(0.6)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 40. Wendo Na Urimu (Samidoh)
Love and foolishness.
```javascript
// Wendo Na Urimu
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 41. Nuu Ucio (Joyce wa Mama)
Who is that?
```javascript
// Nuu Ucio
// setcps(0.62)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 42. Wanjogothaga (Joyce wa Mama)
You were provoking me.
```javascript
// Wanjogothaga
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 43. Ungu Witu (Mike Rua)
The King of One Man Guitar.
```javascript
// Ungu Witu
// setcps(0.65)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 44. Cari Oretu (Mike Rua)
Naughty Mugithi.
```javascript
// Cari Oretu
// setcps(0.64)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 45. Firirida (Dick Munyonyi)
The viral hit (Original).
```javascript
// Firirida
// setcps(0.6)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 46. Msenangu (Bango Style)
Coastal Bango rhythm.
```javascript
// Msenangu
// setcps(0.55)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("hh*8")
)
```

### 47. Nisamehe (Bango Style)
Forgive me.
```javascript
// Nisamehe
// setcps(0.52)
stack(
  s("superrhodes").note("f3 a3 c4 f4"),
  s("bd").struct("x(3,8)")
)
```

### 48. Seduction (Ela Dasila)
Mijikenda pop.
```javascript
// Seduction
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 49. Kila Mtu na Mtuwe (Coast)
Everyone has their person.
```javascript
// Kila Mtu na Mtuwe
// setcps(0.58)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 50. Safari (Les Wanyika)
Journey.
```javascript
// Safari
// setcps(0.62)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 4: Nu-Nairobi & Alt-Scene
*The cool kids' playlist.*

### 51. Lazizi (Sauti Sol)
The song that started it all.
```javascript
// Lazizi - Sauti Sol
// setcps(0.5)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ x ~")
)
```

### 52. Blue Uniform (Sauti Sol)
A story of police and love.
```javascript
// Blue Uniform
// setcps(0.52)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 53. Money Lover (Sauti Sol)
Social commentary.
```javascript
// Money Lover
// setcps(0.55)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 54. Disco Matanga (Sauti Sol)
The party anthem from Midnight Train.
```javascript
// Disco Matanga
// setcps(0.6)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 55. Faiba (Just A Band)
The viral animation soundtrack.
```javascript
// Faiba - Just A Band
// setcps(0.65)
stack(
  s("sawtooth").note("e4 g#4 b4 e5").chop(4),
  s("bd, sd").struct("x ~ x ~")
)
```

### 56. Huff + Puff (Just A Band)
Electronic funk.
```javascript
// Huff + Puff
// setcps(0.62)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 57. Showdown (Blinky Bill)
Energetic beats.
```javascript
// Showdown - Blinky
// setcps(0.64)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 58. Turn On The Lights (Muthoni DQ)
Electro-pop.
```javascript
// Turn On The Lights
// setcps(0.6)
stack(
  s("sawtooth").note("g3 b3 d4 g4"),
  s("bd").struct("x(4,4)")
)
```

### 59. Lucy (Bensoul)
The soulful breakout.
```javascript
// Lucy - Bensoul
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ x ~")
)
```

### 60. Favorite Song (Bensoul)
Smooth vibes.
```javascript
// Favorite Song
// setcps(0.48)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 61. Che Che (Ommy Dimpoz ft. Ali Kiba)
Technically TZ, but huge in Nairobi.
```javascript
// Che Che
// setcps(0.6)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 62. Free (Nyashinski)
Freedom anthem.
```javascript
// Free - Nyashinski
// setcps(0.55)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

### 63. Lift Me Up (Nyashinski)
Uplifting.
```javascript
// Lift Me Up
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 64. Marathon Runner (Nyashinski)
Keep going.
```javascript
// Marathon Runner
// setcps(0.6)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 65. Toa Tint (Khaligraph Jones)
Controversial but catchy.
```javascript
// Toa Tint
// setcps(0.62)
stack(
  s("sawtooth").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 5: Gengetone, Drill & Arbantone
*The raw sound of the streets.*

### 66. Wagithomo (Wakadinali)
Drill banger.
```javascript
// Wagithomo
// setcps(0.6)
stack(
  s("supersaw").note("d3 f#3 a3 d4").lpf(500),
  s("bd").struct("x(3,8)"),
  s("hc*8")
)
```

### 67. Rong Rende (Wakadinali)
Anthem for the crew.
```javascript
// Rong Rende
// setcps(0.62)
stack(
  s("supersquare").note("g2 b2 d3 g3").lpf(400),
  s("bd, sd").struct("x ~ x ~")
)
```

### 68. Set It (Arbantone)
The new wave.
```javascript
// Set It
// setcps(0.65)
stack(
  s("sawtooth").note("c4 e4 g4 c5").chop(2),
  s("bd, cp").struct("x ~ x ~")
)
```

### 69. Tiktoker (Soundkraft)
Viral sensation.
```javascript
// Tiktoker
// setcps(0.68)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 70. Anguka Nayo (Wadagliz)
The latest craze.
```javascript
// Anguka Nayo
// setcps(0.7)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 71. Gbag Na Jug (Breeder LW)
Heavy bars.
```javascript
// Gbag Na Jug
// setcps(0.6)
stack(
  s("supersaw").note("f3 a3 c4 f4").lpf(600),
  s("bd").struct("x(3,8)")
)
```

### 72. Wabebe (Gwaash)
Party starter.
```javascript
// Wabebe
// setcps(0.62)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 73. Mali Safi Chito (Marwa Music)
Luo-Gengetone fusion.
```javascript
// Mali Safi Chito
// setcps(0.6)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 74. Maembe (Maandy)
Catchy hook.
```javascript
// Maembe
// setcps(0.58)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 75. Leen (Breeder LW)
Flow.
```javascript
// Leen
// setcps(0.6)
stack(
  s("supersquare").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 76. Miss Behaviour (Boutross)
Smooth vibe.
```javascript
// Miss Behaviour
// setcps(0.55)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ x ~")
)
```

### 77. Story Ilianza (Boutross)
Storytelling.
```javascript
// Story Ilianza
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 78. Yes Bana (Khaligraph Jones)
Affirmation (Remix).
```javascript
// Yes Bana
// setcps(0.6)
stack(
  s("supersaw").note("d3 f#3 a3 d4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 79. Gwala (Khaligraph Jones)
Hustle anthem.
```javascript
// Gwala
// setcps(0.62)
stack(
  s("supersquare").note("e3 g#3 b3 e4"),
  s("bd").struct("x(4,4)")
)
```

### 80. Luku (Khaligraph Jones)
Style.
```javascript
// Luku
// setcps(0.65)
stack(
  s("sawtooth").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 6: Gospel Anthems
*Songs of praise and worship.*

### 81. Kutembea Nawe (Rebekah Dawn)
Walking with God.
```javascript
// Kutembea Nawe
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 82. Sawa Sawa (Kelele Takatifu)
Everything is fine.
```javascript
// Sawa Sawa
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 83. Ngori (Kelele Takatifu)
Faith is serious.
```javascript
// Ngori
// setcps(0.62)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 84. Kiatu Kivue (Anastacia Mukabwa)
Remove your shoes (Holy ground).
```javascript
// Kiatu Kivue
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 85. Mwaminifu (Joseph Shisia)
Faithful.
```javascript
// Mwaminifu
// setcps(0.55)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 86. Umetenda Mema (Kambua)
You have done good.
```javascript
// Umetenda Mema
// setcps(0.52)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 87. Nishikilie (Florence Andenyi)
Hold me.
```javascript
// Nishikilie
// setcps(0.5)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 88. Bado Nasubiri (Florence Andenyi)
Still waiting.
```javascript
// Bado Nasubiri
// setcps(0.48)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 89. Kibali (Florence Andenyi)
Favor.
```javascript
// Kibali
// setcps(0.55)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 90. Mungu Mkuu (Evelyn Wanjiru)
Great God.
```javascript
// Mungu Mkuu
// setcps(0.52)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd").struct("x ~ x ~")
)
```

### 91. Waweza (Evelyn Wanjiru)
You are able.
```javascript
// Waweza
// setcps(0.5)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

### 92. Nikufahamu (Evelyn Wanjiru)
To know You.
```javascript
// Nikufahamu
// setcps(0.48)
stack(
  s("supersaw").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 93. Matendo (Gloria Muliro)
Deeds.
```javascript
// Matendo
// setcps(0.55)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 94. Narudisha (Gloria Muliro)
Returning thanks.
```javascript
// Narudisha
// setcps(0.52)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 95. Kando (Gloria Muliro)
Beside.
```javascript
// Kando
// setcps(0.5)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd").struct("x ~ x ~")
)
```

### 96. Follow You (Gloria Muliro)
I will follow.
```javascript
// Follow You
// setcps(0.58)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 97. Usiniache (Solomon Mkubwa)
Do not leave me.
```javascript
// Usiniache
// setcps(0.55)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 98. Mfalme Mkuu (Solomon Mkubwa)
Great King.
```javascript
// Mfalme Mkuu
// setcps(0.52)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 99. Nimewasamehe (Solomon Mkubwa)
I have forgiven them.
```javascript
// Nimewasamehe
// setcps(0.5)
stack(
  s("superrhodes").note("f3 a3 c4 f4"),
  s("bd").struct("x ~ ~ x")
)
```

### 100. Futa Machozi (Solomon Mkubwa)
Wipe your tears.
```javascript
// Futa Machozi
// setcps(0.48)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```
