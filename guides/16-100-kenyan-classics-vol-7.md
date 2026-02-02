# 100 Kenyan Classics Vol. 7 (Strudel Guide)

This guide adds **100 more famous Kenyan tunes** to your Strudel library, featuring **Swahili R&B Kings**, **Gengetone Anthems**, **Golden Age Gospel**, **Benga Legends**, and **Hip Hop Classics**.

## How to Use
Copy the code blocks into [Strudel](https://strudel.tidalcycles.org) or your local "Kunguru Algo" instance.

---

## Category 1: Swahili R&B & Contemporary Pop
*Love songs that ruled the airwaves.*

### 1. Chaguo La Moyo (Otile Brown ft. Sanaipei)
The wedding anthem of the decade.
```javascript
// Chaguo La Moyo
// setcps(0.55)
stack(
  s("superpiano").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x ~ ~ x"),
  s("hh*8")
)
```

### 2. Baby Love (Otile Brown)
Smooth serenade.
```javascript
// Baby Love
// setcps(0.58)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 3. Dusuma (Otile Brown ft. Meddy)
The infectious beat.
```javascript
// Dusuma
// setcps(0.6)
stack(
  s("supersaw").note("a3 c4 e4 a4").lpf(800),
  s("bd(3,8)"),
  s("oh").struct("~ x ~ x")
)
```

### 4. Aiyana (Otile Brown ft. Sanaipei)
Another classic duet.
```javascript
// Aiyana
// setcps(0.56)
stack(
  s("supermandolin").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 5. Watoto Na Pombe (Otile Brown ft. Mejja)
Party vibes.
```javascript
// Watoto Na Pombe
// setcps(0.62)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 6. Radio Love (Nadia Mukami)
Breakout hit.
```javascript
// Radio Love
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 7. Maombi (Nadia Mukami)
Prayers and success.
```javascript
// Maombi
// setcps(0.65)
stack(
  s("sawtooth").note("c4 e4 g4 c5").chop(2),
  s("bd, cp").struct("x ~ x ~")
)
```

### 8. Si Rahisi (Nadia Mukami)
It wasn't easy.
```javascript
// Si Rahisi
// setcps(0.55)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ x ~")
)
```

### 9. Kolo (Nadia Mukami ft. Otile Brown)
Afro-pop fusion.
```javascript
// Kolo
// setcps(0.62)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 10. Mama (Bahati)
The song that started it all.
```javascript
// Mama - Bahati
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 11. Machozi (Bahati)
Tears.
```javascript
// Machozi
// setcps(0.52)
stack(
  s("supermandolin").note("f3 a3 c4 f4"),
  s("bd(3,8)")
)
```

### 12. Barua (Bahati)
Letter to God.
```javascript
// Barua - Bahati
// setcps(0.55)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 13. Sitolia (Willy Paul ft. Gloria Muliro)
I will not cry.
```javascript
// Sitolia
// setcps(0.54)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd").struct("x ~ x ~")
)
```

### 14. Jigi Jigi (Willy Paul)
Love song.
```javascript
// Jigi Jigi
// setcps(0.6)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 15. I Do (Willy Paul ft. Alaine)
International wedding hit.
```javascript
// I Do
// setcps(0.58)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 16. Njiwa (Willy Paul ft. Nandy)
Dove.
```javascript
// Njiwa
// setcps(0.56)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 17. Hallelujah (Willy Paul ft. Nandy)
Controversial but catchy.
```javascript
// Hallelujah
// setcps(0.62)
stack(
  s("supersquare").note("f3 a3 c4 f4"),
  s("bd(4,4)")
)
```

### 18. Melanin (Sauti Sol ft. Patoranking)
Celebrating black beauty.
```javascript
// Melanin
// setcps(0.55)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 19. Short N Sweet (Sauti Sol ft. Nyashinski)
Proper vibes.
```javascript
// Short N Sweet
// setcps(0.58)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 20. Extravaganza (Sauti Sol)
Rhumba feel.
```javascript
// Extravaganza
// setcps(0.6)
stack(
  s("supersaw").note("a3 c4 e4 a4").lpf(1000),
  s("bd, cp").struct("x ~ x ~")
)
```

## Category 2: Gengetone & Arbantone Wave
*The pulse of the youth.*

### 21. Lamba Lolo (Ethic)
The genesis of Gengetone.
```javascript
// Lamba Lolo
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5").lpf(500),
  s("bd, sd").struct("x ~ x ~"),
  s("hc*8")
)
```

### 22. Position (Ethic ft. The Kansoul)
Club banger.
```javascript
// Position
// setcps(0.62)
stack(
  s("supersquare").note("g3 b3 d4 g4"),
  s("bd(4,4)")
)
```

### 23. Pandana (Ethic)
Catchy hook.
```javascript
// Pandana
// setcps(0.65)
stack(
  s("sawtooth").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 24. Figa (Ethic)
Big tune.
```javascript
// Figa
// setcps(0.64)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 25. Wamlambez (Sailors)
The national anthem.
```javascript
// Wamlambez
// setcps(0.65)
stack(
  s("supersaw").note("e4 g#4 b4 e5").chop(4),
  s("bd, sd").struct("x ~ x ~")
)
```

### 26. Pekejeng (Sailors)
Energy.
```javascript
// Pekejeng
// setcps(0.68)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd(4,4)")
)
```

### 27. Queen B (Sailors)
Love song, Gengetone style.
```javascript
// Queen B
// setcps(0.6)
stack(
  s("supermandolin").note("f3 a3 c4 f4"),
  s("bd(3,8)")
)
```

### 28. Nainweza (Sailors)
I can handle it.
```javascript
// Nainweza
// setcps(0.62)
stack(
  s("sawtooth").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 29. Drink Na Mayenx (Ochungulo Family)
Party life.
```javascript
// Drink Na Mayenx
// setcps(0.6)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 30. Kaa Na Mama Yako (Ochungulo Family)
Stay with your mum.
```javascript
// Kaa Na Mama Yako
// setcps(0.65)
stack(
  s("supersquare").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 31. Mbogi Genje (Ochungulo Family)
Cool crew.
```javascript
// Mbogi Genje
// setcps(0.62)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 32. Rieng (Boondocks Gang)
Plan.
```javascript
// Rieng
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 33. Kidole (Boondocks Gang)
Finger.
```javascript
// Kidole
// setcps(0.64)
stack(
  s("sawtooth").note("g3 b3 d4 g4"),
  s("bd(4,4)")
)
```

### 34. Mboko Haram (Boondocks Gang)
Heavy hitter.
```javascript
// Mboko Haram
// setcps(0.66)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 35. Zimenishika (Zzero Sufuri)
They got me.
```javascript
// Zimenishika
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 36. Matipura (Zzero Sufuri)
Good vibes.
```javascript
// Matipura
// setcps(0.6)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 37. Mare Mare (Matata)
Dance anthem.
```javascript
// Mare Mare
// setcps(0.65)
stack(
  s("supersaw").note("c4 e4 g4 c5").chop(2),
  s("bd(4,4)")
)
```

### 38. Gengetone Love (Matata)
Smooth.
```javascript
// Gengetone Love
// setcps(0.62)
stack(
  s("superrhodes").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 39. Rora (Matata)
Fire.
```javascript
// Rora
// setcps(0.64)
stack(
  s("supersquare").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 40. Siskii (Mejja)
I don't listen.
```javascript
// Siskii - Mejja
// setcps(0.6)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

## Category 3: Golden Age Gospel Classics
*The songs that built the church.*

### 41. Adamu na Eva (Mary Atieno)
The story of creation.
```javascript
// Adamu na Eva
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 42. Sodoma na Gomora (Mary Atieno)
Warning song.
```javascript
// Sodoma na Gomora
// setcps(0.52)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 43. Hakuna Mungu Kama Wewe (Mary Atieno)
No God like You.
```javascript
// Hakuna Mungu Kama Wewe
// setcps(0.55)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 44. Malebo (Faustin Munishi)
Vanity.
```javascript
// Malebo
// setcps(0.58)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 45. Yesu ni Mwangaza (Faustin Munishi)
Jesus is the light.
```javascript
// Yesu ni Mwangaza
// setcps(0.6)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 46. Akina Mama (Jemimah Thiong'o)
Mothers.
```javascript
// Akina Mama
// setcps(0.55)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 47. Mwenye Baraka (Jemimah Thiong'o)
The blessed one.
```javascript
// Mwenye Baraka
// setcps(0.58)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 48. Pendo la Yesu (Jemimah Thiong'o)
Jesus' love.
```javascript
// Pendo la Yesu
// setcps(0.52)
stack(
  s("supermandolin").note("f3 a3 c4 f4"),
  s("bd").struct("x ~ x ~")
)
```

### 49. Mungu Baba (Rufftone)
Father God.
```javascript
// Mungu Baba
// setcps(0.6)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 50. Tsinyanga Tsiwere (Rufftone)
The footprints.
```javascript
// Tsinyanga Tsiwere
// setcps(0.62)
stack(
  s("sawtooth").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 51. Mwema (Mercy Masika)
Good God.
```javascript
// Mwema
// setcps(0.5)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd").struct("x ~ ~ x")
)
```

### 52. Nikupendeze (Mercy Masika)
To please You.
```javascript
// Nikupendeze
// setcps(0.48)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 53. Shule Yako (Mercy Masika)
Your school.
```javascript
// Shule Yako
// setcps(0.52)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 54. Natafuta Kiki (Eunice Njeri)
Seeking attention (Not).
```javascript
// Natafuta Kiki
// setcps(0.6)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 55. Uka (Eunice Njeri)
Come.
```javascript
// Uka
// setcps(0.58)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 56. Unatosha (Eunice Njeri)
You are enough.
```javascript
// Unatosha
// setcps(0.55)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 57. Moto (Size 8)
Fire.
```javascript
// Moto - Size 8
// setcps(0.62)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd(4,4)")
)
```

### 58. Mateke (Size 8)
Kicks.
```javascript
// Mateke
// setcps(0.65)
stack(
  s("sawtooth").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 59. Afadhali Yesu (Size 8)
Better Jesus.
```javascript
// Afadhali Yesu
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 60. Pale Pale (Size 8)
Right there.
```javascript
// Pale Pale
// setcps(0.62)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

## Category 4: Benga & Rhumba Legends (Missing Gems)
*The guitar riffs that define a nation.*

### 61. Hera Mwandu (Musa Juma)
Love is wealth.
```javascript
// Hera Mwandu
// setcps(0.6)
stack(
  s("superguitar").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd(3,8)"),
  s("hh*8")
)
```

### 62. Maselina (Musa Juma)
Classic love song.
```javascript
// Maselina
// setcps(0.62)
stack(
  s("supermandolin").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 63. Saida (Musa Juma)
Rhumba smooth.
```javascript
// Saida
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 64. Mashabiki (Johnny Junior)
Fans.
```javascript
// Mashabiki
// setcps(0.6)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 65. Amor (Johnny Junior)
Love.
```javascript
// Amor
// setcps(0.55)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 66. Nyar Siaya (Johnny Junior)
Daughter of Siaya.
```javascript
// Nyar Siaya
// setcps(0.58)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 67. Adhiambo (Prince Indah ft. Bahati)
The crossover hit.
```javascript
// Adhiambo
// setcps(0.6)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 68. Mama Watoto (Prince Indah)
Mother of my children.
```javascript
// Mama Watoto
// setcps(0.62)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 69. Kido Marwa (Prince Indah)
Our custom.
```javascript
// Kido Marwa
// setcps(0.65)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 70. Girwa Ni (Prince Indah)
This thing of yours.
```javascript
// Girwa Ni
// setcps(0.64)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 71. Aroyi (Emma Jalamo)
Praise.
```javascript
// Aroyi
// setcps(0.6)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 72. We Chayo Jathum (Emma Jalamo)
Don't despise the singer.
```javascript
// We Chayo Jathum
// setcps(0.62)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 73. Adede (Emma Jalamo)
Friend.
```javascript
// Adede
// setcps(0.65)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd(4,4)")
)
```

### 74. Utugu Waku (Joseph Kamiua)
Your goodness (Kamba).
```javascript
// Utugu Waku
// setcps(0.6)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 75. Mwaitu (Kakai Kilonzo)
Mother.
```javascript
// Mwaitu
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 76. Mavuno (Kakai Kilonzo)
Harvest.
```javascript
// Mavuno
// setcps(0.62)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 77. Shida Za Dunia (CDM Kiratu)
World's problems.
```javascript
// Shida Za Dunia
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 78. Ngoro Yakwa (CDM Kiratu)
My heart.
```javascript
// Ngoro Yakwa
// setcps(0.58)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 79. Ndari ya Mwarimu (Joseph Kamaru)
Teacher's darling.
```javascript
// Ndari ya Mwarimu
// setcps(0.6)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 80. Muhiki wa Mikosi (Joseph Kamaru)
Cursed bride.
```javascript
// Muhiki wa Mikosi
// setcps(0.62)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

## Category 5: Hip Hop Classics & Afro-Rap
*Bars that changed the game.*

### 81. Kapuka (K-South)
The genre definer.
```javascript
// Kapuka
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5").lpf(600),
  s("bd(3,8)"),
  s("hc*8")
)
```

### 82. Tunapenda Zote (K-South)
We love them all.
```javascript
// Tunapenda Zote
// setcps(0.62)
stack(
  s("supersquare").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 83. Nairobbery (K-South)
Life in the city.
```javascript
// Nairobbery
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 84. Fanya Mambo (Kalamashaka)
Do things.
```javascript
// Fanya Mambo
// setcps(0.58)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 85. Tafsiri Hii (Kalamashaka)
Translate this.
```javascript
// Tafsiri Hii
// setcps(0.55)
stack(
  s("sawtooth").note("e4 g#4 b4 e5").lpf(400),
  s("bd, sd").struct("x ~ x ~")
)
```

### 86. Songa Hapa (Kalamashaka)
Move here.
```javascript
// Songa Hapa
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(4,4)")
)
```

### 87. Tuendelee (Kleptomaniax)
Let's continue (Diss track).
```javascript
// Tuendelee
// setcps(0.62)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 88. Swing Swing (Kleptomaniax)
Classic bop.
```javascript
// Swing Swing
// setcps(0.65)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 89. Haree (Kleptomaniax)
Party time.
```javascript
// Haree
// setcps(0.64)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 90. Morale (Pilipili)
Energy.
```javascript
// Morale
// setcps(0.6)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 91. Kamata Dame (Pilipili)
Get the girl.
```javascript
// Kamata Dame
// setcps(0.62)
stack(
  s("supermandolin").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 92. Mpaka Che (Pilipili)
Until dawn.
```javascript
// Mpaka Che
// setcps(0.65)
stack(
  s("sawtooth").note("f3 a3 c4 f4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 93. Under 18 (Jimwat)
Social message.
```javascript
// Under 18
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 94. Sitoi Kitu Kidogo (Jimwat)
No bribe.
```javascript
// Sitoi Kitu Kidogo
// setcps(0.6)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 95. Paulina (Jimwat)
Love story.
```javascript
// Paulina
// setcps(0.55)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 96. Tattizo (Jua Cali)
Problem.
```javascript
// Tattizo
// setcps(0.6)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 97. Kiasi (Jua Cali)
Just a little.
```javascript
// Kiasi
// setcps(0.62)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 98. Bidii Yangu (Jua Cali)
My hard work.
```javascript
// Bidii Yangu
// setcps(0.6)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 99. Kwaheri (Jua Cali ft. Sanaipei)
Goodbye.
```javascript
// Kwaheri
// setcps(0.55)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd").struct("x ~ ~ x")
)
```

### 100. Ngeli ya Genge (Jua Cali)
The language of Genge.
```javascript
// Ngeli ya Genge
// setcps(0.6)
stack(
  s("supersaw").note("a3 c4 e4 a4").lpf(600),
  s("bd, sd").struct("x ~ x ~")
)
```
