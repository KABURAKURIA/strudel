# 100 Kenyan Classics Vol. 9 (Strudel Guide)

This guide adds **100 more famous Kenyan tunes** to your Strudel library, focusing on **Genge & Kapuka Anthems**, **Golden Age Gospel**, **Afro-Pop & Urban Soul**, **Benga & Rhumba Legends (Musa Juma Special)**, and **Hip Hop & Shrap Kings**.

## How to Use
Copy the code blocks into [Strudel](https://strudel.tidalcycles.org) or your local "Kunguru Algo" instance.

---

## Category 1: Genge & Kapuka Anthems
*The beats that ruled the radios in the 2000s.*

### 1. Manzi wa Nairobi (Nonini)
The anthem for Nairobi girls.
```javascript
// Manzi wa Nairobi
// setcps(0.48)
stack(
  s("superpiano").note("c4 e4 g4 c5").lpf(800),
  s("bd").struct("x ~ ~ x"),
  s("hh*8")
)
```

### 2. Keroro (Nonini)
The party drink song.
```javascript
// Keroro
// setcps(0.5)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)"),
  s("cp").struct("~ x ~ x")
)
```

### 3. We Kamu (Nonini)
Come here.
```javascript
// We Kamu
// setcps(0.52)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 4. Furahiday (Nonini ft. Nameless)
It's Friday!
```javascript
// Furahiday
// setcps(0.55)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 5. Ngoma (Nonini)
Music.
```javascript
// Ngoma
// setcps(0.53)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

### 6. Kadhaa (Nonini)
Several.
```javascript
// Kadhaa
// setcps(0.5)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 7. Mtoto Mzuri (Nonini)
Beautiful baby.
```javascript
// Mtoto Mzuri
// setcps(0.54)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd").struct("x(4,4)")
)
```

### 8. Ruka (Jua Cali)
Jump.
```javascript
// Ruka
// setcps(0.6)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ ~ x")
)
```

### 9. Miaka (Jua Cali)
Years.
```javascript
// Miaka
// setcps(0.58)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 10. Safsana (Jua Cali)
Very clean/cool.
```javascript
// Safsana
// setcps(0.62)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 11. Vile Ego (Jua Cali)
Just like that.
```javascript
// Vile Ego
// setcps(0.55)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 12. Round 2 (Jimwat)
Second round.
```javascript
// Round 2
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 13. Paulina (Jimwat)
Love song.
```javascript
// Paulina
// setcps(0.52)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd").struct("x(4,4)")
)
```

### 14. Fall in Love (Jimwat)
 Falling.
```javascript
// Fall in Love
// setcps(0.5)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 15. Calif (Jimwat)
California (Nairobi).
```javascript
// Calif
// setcps(0.55)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 16. Beat ya Keggah (V-Sita)
Keggah's beat.
```javascript
// Beat ya Keggah
// setcps(0.6)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 17. Si Lazima (P-Unit)
Not a must.
```javascript
// Si Lazima
// setcps(0.58)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 18. Kare (P-Unit)
Hot/Cool.
```javascript
// Kare
// setcps(0.62)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 19. Juu Tu Sana (P-Unit)
Way up high.
```javascript
// Juu Tu Sana
// setcps(0.65)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 20. Una (P-Unit)
You have.
```javascript
// Una
// setcps(0.6)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 2: Golden Age Gospel
*Spiritual hits that crossed over.*

### 21. Akisema Atakubariki (Jemimah Thiong'o)
If He says He will bless you.
```javascript
// Akisema Atakubariki
// setcps(0.45)
stack(
  s("superpiano").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x ~ ~ x")
)
```

### 22. Mwenye Baraka (Jemimah Thiong'o)
The blessed one.
```javascript
// Mwenye Baraka
// setcps(0.5)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 23. Pendo la Yesu (Jemimah Thiong'o)
Jesus' love.
```javascript
// Pendo la Yesu
// setcps(0.48)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 24. Kiriro (Daddy Owen)
Cry.
```javascript
// Kiriro
// setcps(0.55)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 25. Saluti (Daddy Owen)
Salute.
```javascript
// Saluti
// setcps(0.6)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 26. Dakika Tatu (Daddy Owen)
Three minutes.
```javascript
// Dakika Tatu
// setcps(0.62)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 27. Defender (Daddy Owen)
My defender.
```javascript
// Defender
// setcps(0.58)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 28. Mapepo (Daddy Owen)
Demons.
```javascript
// Mapepo
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 29. Ahadi Zako (Marion Shako)
Your promises.
```javascript
// Ahadi Zako
// setcps(0.45)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 30. Mwanake (Kaberere)
Beautiful one.
```javascript
// Mwanake
// setcps(0.5)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

### 31. Kibali (Florence Andenyi)
Favor.
```javascript
// Kibali
// setcps(0.48)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 32. Nimekubali (Eunice Njeri)
I accept.
```javascript
// Nimekubali
// setcps(0.55)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd").struct("x(4,4)")
)
```

### 33. Uka (Eunice Njeri)
Come.
```javascript
// Uka
// setcps(0.6)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 34. Nani Kama Wewe (Eunice Njeri)
Who is like You.
```javascript
// Nani Kama Wewe
// setcps(0.58)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 35. Unatosha (Eunice Njeri)
You are enough.
```javascript
// Unatosha
// setcps(0.5)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 36. Ole (Eunice Njeri)
Ole!
```javascript
// Ole
// setcps(0.62)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 37. Ameni (Eunice Njeri)
Amen.
```javascript
// Ameni
// setcps(0.6)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 38. Matunda (Eunice Njeri)
Fruits.
```javascript
// Matunda
// setcps(0.55)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 39. Kazi ya Msalaba (Daddy Owen)
Work of the cross.
```javascript
// Kazi ya Msalaba
// setcps(0.65)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 40. Utukufu (Jemimah Thiong'o)
Glory.
```javascript
// Utukufu
// setcps(0.45)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

## Category 3: Afro-Pop & Urban Soul
*Modern Kenyan love songs and bangers.*

### 41. Aiyana (Otile Brown)
Beautiful girl.
```javascript
// Aiyana
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5").lpf(800),
  s("bd").struct("x ~ ~ x"),
  s("hh*8")
)
```

### 42. Nabayet (Otile Brown)
My love.
```javascript
// Nabayet
// setcps(0.52)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 43. Mapenzi Hisia (Otile Brown)
Love is feelings.
```javascript
// Mapenzi Hisia
// setcps(0.48)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 44. Hi (Otile Brown)
Hello.
```javascript
// Hi
// setcps(0.55)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 45. Alivyonipenda (Otile Brown)
How she loved me.
```javascript
// Alivyonipenda
// setcps(0.5)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd").struct("x(3,8)")
)
```

### 46. Vibaya (Otile Brown)
Badly (in love).
```javascript
// Vibaya
// setcps(0.58)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 47. Regina (Otile Brown)
Queen.
```javascript
// Regina
// setcps(0.6)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 48. Jamila (Otile Brown)
Beautiful.
```javascript
// Jamila
// setcps(0.62)
stack(
  s("sawtooth").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 49. Radio Love (Nadia Mukami)
Love on the radio.
```javascript
// Radio Love
// setcps(0.55)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 50. Si Rahisi (Nadia Mukami)
It's not easy.
```javascript
// Si Rahisi
// setcps(0.5)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 51. Maombi (Nadia Mukami)
Prayers.
```javascript
// Maombi
// setcps(0.58)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 52. Jipe (Nadia Mukami)
Give yourself.
```javascript
// Jipe
// setcps(0.6)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 53. Wangu (Nadia Mukami)
Mine.
```javascript
// Wangu
// setcps(0.52)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 54. Kolo (Nadia Mukami)
Kolo dance.
```javascript
// Kolo
// setcps(0.65)
stack(
  s("supersquare").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 55. Digi Digi (Arrow Bwoy)
Digital.
```javascript
// Digi Digi
// setcps(0.6)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 56. Jango Love (Arrow Bwoy)
Jango love.
```javascript
// Jango Love
// setcps(0.55)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 57. Shikisha (Arrow Bwoy)
Shake it.
```javascript
// Shikisha
// setcps(0.62)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 58. Chu Chu (Arrow Bwoy)
Chu chu train.
```javascript
// Chu Chu
// setcps(0.6)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 59. Toto (Arrow Bwoy)
Baby.
```javascript
// Toto
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 60. Happy Birthday (Arrow Bwoy)
Celebration.
```javascript
// Happy Birthday
// setcps(0.65)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

## Category 4: Benga & Rhumba Legends (Musa Juma Special)
*Tribute to the late Limpopo International maestro.*

### 61. Maselina (Musa Juma)
The heartbreak classic.
```javascript
// Maselina
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5").lpf(800),
  s("bd").struct("x(3,8)"),
  s("hc*8")
)
```

### 62. Mercilina (Musa Juma)
Oh Mercilina.
```javascript
// Mercilina
// setcps(0.62)
stack(
  s("supersquare").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 63. Hera Mwandu (Musa Juma)
Love is wealth.
```javascript
// Hera Mwandu
// setcps(0.64)
stack(
  s("sawtooth").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 64. Rapar Owino (Musa Juma)
Remembering Owino.
```javascript
// Rapar Owino
// setcps(0.6)
stack(
  s("superpiano").note("a3 c4 e4 a4").lpf(500),
  s("bd").struct("x(3,8)")
)
```

### 65. Freddy (Musa Juma)
Friend.
```javascript
// Freddy
// setcps(0.62)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 66. Bibala (Musa Juma)
Marriage.
```javascript
// Bibala
// setcps(0.58)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 67. Siaya Kababa (Musa Juma)
Home in Siaya.
```javascript
// Siaya Kababa
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 68. Christina (Musa Juma)
Christina.
```javascript
// Christina
// setcps(0.62)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 69. Aggrey (Musa Juma)
Aggrey.
```javascript
// Aggrey
// setcps(0.65)
stack(
  s("sawtooth").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 70. Saida (Musa Juma)
Saida.
```javascript
// Saida
// setcps(0.68)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 71. Osiepe (Musa Juma)
Friends.
```javascript
// Osiepe
// setcps(0.6)
stack(
  s("supermandolin").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 72. F.C. Gor Mahia (Musa Juma)
The Green Army.
```javascript
// F.C. Gor Mahia
// setcps(0.62)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 73. Lake Victoria (Musa Juma)
The lake.
```javascript
// Lake Victoria
// setcps(0.64)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 74. G.G. (Musa Juma)
G.G.
```javascript
// G.G.
// setcps(0.6)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 75. Rosy (Musa Juma)
Rosy.
```javascript
// Rosy
// setcps(0.62)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 76. Ratego (Musa Juma)
Strong one.
```javascript
// Ratego
// setcps(0.6)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 77. Ongolo (Musa Juma)
Ongolo.
```javascript
// Ongolo
// setcps(0.62)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 78. Mayaka (Musa Juma)
Mayaka.
```javascript
// Mayaka
// setcps(0.65)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(4,4)")
)
```

### 79. Auma (Musa Juma)
Auma.
```javascript
// Auma
// setcps(0.64)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 80. Wuod Gumbo (Musa Juma)
Son of Gumbo.
```javascript
// Wuod Gumbo
// setcps(0.66)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

## Category 5: Hip Hop & Shrap Kings
*Lyricism and flow.*

### 81. Mazishi (Khaligraph Jones)
Funeral.
```javascript
// Mazishi
// setcps(0.6)
stack(
  s("superguitar").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x(3,8)"),
  s("hh*8")
)
```

### 82. Yego (Khaligraph Jones)
Javelin.
```javascript
// Yego
// setcps(0.62)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 83. Juu ya Ngori (Khaligraph Jones)
Because of trouble.
```javascript
// Juu ya Ngori
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 84. Wanjiru and Akinyi (Khaligraph Jones)
Tribal unity.
```javascript
// Wanjiru and Akinyi
// setcps(0.62)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd").struct("x(4,4)")
)
```

### 85. Toa Tint (Khaligraph Jones)
Remove tint.
```javascript
// Toa Tint
// setcps(0.65)
stack(
  s("supersquare").note("e4 g#4 b4 e5").chop(2),
  s("bd, sd").struct("x ~ x ~")
)
```

### 86. Micasa Sucasa (Khaligraph Jones)
My house your house.
```javascript
// Micasa Sucasa
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd").struct("x(3,8)")
)
```

### 87. Hao (Khaligraph Jones)
Them.
```javascript
// Hao
// setcps(0.58)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 88. Kwenda (Khaligraph Jones)
Go away.
```javascript
// Kwenda
// setcps(0.6)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 89. Luku (Khaligraph Jones)
Look.
```javascript
// Luku
// setcps(0.62)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 90. Champez (Khaligraph Jones)
Champion.
```javascript
// Champez
// setcps(0.64)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd").struct("x(4,4)")
)
```

### 91. Dundaing (King Kaka)
Partying.
```javascript
// Dundaing
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 92. Wajinga Nyinyi (King Kaka)
You fools (Political).
```javascript
// Wajinga Nyinyi
// setcps(0.62)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd").struct("x(3,8)")
)
```

### 93. Swala Nyeti (King Kaka)
Sensitive issue.
```javascript
// Swala Nyeti
// setcps(0.6)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 94. Besha Shigana (King Kaka)
How much money?
```javascript
// Besha Shigana
// setcps(0.58)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd").struct("x(3,8)")
)
```

### 95. Ligi Soo (King Kaka)
Big league.
```javascript
// Ligi Soo
// setcps(0.62)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 96. Adisia (King Kaka)
Add.
```javascript
// Adisia
// setcps(0.6)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd").struct("x(4,4)")
)
```

### 97. Promized Land (King Kaka)
Promised land.
```javascript
// Promized Land
// setcps(0.58)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 98. Kichinjio (King Kaka)
Slaughterhouse.
```javascript
// Kichinjio
// setcps(0.6)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd").struct("x(3,8)")
)
```

### 99. Uko Sure (King Kaka)
Are you sure?
```javascript
// Uko Sure
// setcps(0.62)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 100. Miti (King Kaka)
Trees/Money.
```javascript
// Miti
// setcps(0.6)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```
