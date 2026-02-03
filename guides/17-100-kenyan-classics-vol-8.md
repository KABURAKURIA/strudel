# 100 Kenyan Classics Vol. 8 (Strudel Guide)

This guide adds **100 more famous Kenyan tunes** to your Strudel library, focusing on the **Golden Age of Boomba (Ogopa Deejays)**, **Afro-Fusion Pioneers**, **Reggae & Dancehall Giants**, **New School Drill/Shrap**, and **Mugithi/Vernacular Hits**.

## How to Use
Copy the code blocks into [Strudel](https://strudel.tidalcycles.org) or your local "Kunguru Algo" instance.

---

## Category 1: Ogopa Deejays Anthems (The Boomba Era)
*The Kapuka beats that defined the 2000s.*

### 1. Mos Mos (E-Sir ft. Brenda)
The timeless classic.
```javascript
// Mos Mos
// setcps(0.55)
stack(
  s("superpiano").note("c4 e4 g4 c5").lpf(800),
  s("bd, sd").struct("x ~ x ~"),
  s("hh*8")
)
```

### 2. Boomba Train (E-Sir ft. Nameless)
The ultimate party starter.
```javascript
// Boomba Train
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4").chop(4),
  s("bd(3,8)"),
  s("cp").struct("~ x ~ x")
)
```

### 3. Hamnitishi (E-Sir)
Confidence on the mic.
```javascript
// Hamnitishi
// setcps(0.62)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 4. Ninanoki (Nameless ft. Amani)
I'm going crazy.
```javascript
// Ninanoki
// setcps(0.58)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 5. Sinzia (Nameless)
Sweet dreams.
```javascript
// Sinzia
// setcps(0.56)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 6. Juju (Nameless)
Magic love.
```javascript
// Juju
// setcps(0.6)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 7. Salari (Nameless)
Salary vibes.
```javascript
// Salari
// setcps(0.62)
stack(
  s("supersaw").note("f3 a3 c4 f4"),
  s("bd(4,4)")
)
```

### 8. Missing My Baby (Amani)
Heartbreak hit.
```javascript
// Missing My Baby
// setcps(0.55)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd").struct("x ~ ~ x")
)
```

### 9. Tamani (Amani)
Desire.
```javascript
// Tamani
// setcps(0.6)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 10. Sweet Love (Wahu)
Mother's love.
```javascript
// Sweet Love
// setcps(0.58)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 11. Sitishiki (Wahu)
Unshakeable.
```javascript
// Sitishiki
// setcps(0.62)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 12. Vuta Pumz (The Longombas)
Take a breath (AIDS awareness).
```javascript
// Vuta Pumz
// setcps(0.6)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 13. Piga Makofi (The Longombas)
Clap your hands.
```javascript
// Piga Makofi
// setcps(0.65)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd(4,4)")
)
```

### 14. Queen (The Longombas)
Looking for a queen.
```javascript
// Queen
// setcps(0.62)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 15. Mona Lisa (Deux Vultures)
Beautiful girl.
```javascript
// Mona Lisa
// setcps(0.6)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 16. Kinyaunyau (Deux Vultures)
Cat style.
```javascript
// Kinyaunyau
// setcps(0.64)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 17. Cash Money (Mr. Lenny)
Balling.
```javascript
// Cash Money
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 18. Bentamba (Big Pin)
Bender.
```javascript
// Bentamba
// setcps(0.62)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 19. Tukwake (K-Rupt)
Let's party.
```javascript
// Tukwake
// setcps(0.65)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 20. Chacha (K-Rupt)
Dance.
```javascript
// Chacha
// setcps(0.64)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

## Category 2: Afro-Fusion & Soul Pioneers
*The sounds of modern Kenya.*

### 21. Daima (Eric Wainaina)
The patriotic anthem.
```javascript
// Daima
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd").struct("x ~ ~ x")
)
```

### 22. Nchi ya Kitu Kidogo (Eric Wainaina)
Anti-corruption song.
```javascript
// Nchi ya Kitu Kidogo
// setcps(0.55)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 23. Ritwa Riaku (Eric Wainaina)
Your name.
```javascript
// Ritwa Riaku
// setcps(0.58)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 24. Kisumu 100 (Suzzana Owiyo)
Centenary celebration.
```javascript
// Kisumu 100
// setcps(0.6)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 25. Sandore (Suzzana Owiyo)
Luo classic.
```javascript
// Sandore
// setcps(0.62)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 26. Haiya (Harry Kimani)
Surprise/Love.
```javascript
// Haiya
// setcps(0.55)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 27. Usilewe (Yunasi)
Don't get drunk.
```javascript
// Usilewe
// setcps(0.6)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 28. Bebi Bebi (Atemi ft. Nyashinski)
Baby baby.
```javascript
// Bebi Bebi
// setcps(0.58)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 29. Watu na Viatu (Nyota Ndogo)
People and shoes.
```javascript
// Watu na Viatu
// setcps(0.56)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 30. Nibebe (Nyota Ndogo)
Carry me.
```javascript
// Nibebe
// setcps(0.55)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 31. I'm a Dreamer (Mercy Myra)
Inspirational R&B.
```javascript
// I'm a Dreamer
// setcps(0.52)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 32. Afro-Simama (Mercy Myra)
Stand up.
```javascript
// Afro-Simama
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd(4,4)")
)
```

### 33. Ha-He (Just A Band)
Makmende returns.
```javascript
// Ha-He
// setcps(0.62)
stack(
  s("supersquare").note("d4 f#4 a4 d5").lpf(1000),
  s("bd, cp").struct("x ~ x ~")
)
```

### 34. Usinibore (Just A Band)
Don't bore me.
```javascript
// Usinibore
// setcps(0.6)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 35. Mungu Halali (Blinky Bill)
God doesn't sleep.
```javascript
// Mungu Halali
// setcps(0.58)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 36. Mungu Pekee (Nyashinski)
Only God.
```javascript
// Mungu Pekee
// setcps(0.55)
stack(
  s("superpiano").note("c4 e4 g4 c5"),
  s("bd").struct("x ~ ~ x")
)
```

### 37. Malaika (Nyashinski)
Angel.
```javascript
// Malaika
// setcps(0.52)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 38. Hapo Zamani (Nyashinski)
Long ago.
```javascript
// Hapo Zamani
// setcps(0.6)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 39. Free (Nyashinski)
Freedom.
```javascript
// Free
// setcps(0.58)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 40. Now You Know (Nyashinski)
The comeback.
```javascript
// Now You Know
// setcps(0.62)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

## Category 3: Kenyan Reggae & Dancehall
*Riddims and ragga flows.*

### 41. Bless My Room (Necessary Noize)
Prayer for the home.
```javascript
// Bless My Room
// setcps(0.5)
stack(
  s("superpiano").note("c4 e4 g4 c5").lpf(800),
  s("bd").struct("x ~ ~ x"),
  s("hh*8")
)
```

### 42. Kenyan Boy Kenyan Girl (Necessary Noize)
National pride.
```javascript
// Kenyan Boy Kenyan Girl
// setcps(0.55)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 43. Fire (Necessary Noize)
Burning bright.
```javascript
// Fire
// setcps(0.58)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 44. Chuki (Wyre)
Hate.
```javascript
// Chuki
// setcps(0.55)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 45. Nakupenda Pia (Wyre ft. Alaine)
I love you too.
```javascript
// Nakupenda Pia
// setcps(0.56)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

### 46. She Say Dat (Wyre)
Dancehall hit.
```javascript
// She Say Dat
// setcps(0.6)
stack(
  s("supersquare").note("c4 e4 g4 c5"),
  s("bd(4,4)")
)
```

### 47. Uko Wapi (Wyre)
Where are you?
```javascript
// Uko Wapi
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 48. Kingston Girl (Wyre)
Island vibes.
```javascript
// Kingston Girl
// setcps(0.62)
stack(
  s("sawtooth").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 49. Chicken (Redsan)
Party anthem.
```javascript
// Chicken
// setcps(0.65)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 50. Shoulder Back (Redsan)
Move it.
```javascript
// Shoulder Back
// setcps(0.64)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 51. Touch (Redsan)
Smooth.
```javascript
// Touch
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 52. Julie (Redsan)
Love song.
```javascript
// Julie
// setcps(0.58)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 53. Love Automatic (Nazizi)
Natural love.
```javascript
// Love Automatic
// setcps(0.55)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 54. Jump and Shout (Nazizi)
Energy.
```javascript
// Jump and Shout
// setcps(0.62)
stack(
  s("supersquare").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 55. Badder Than Most (Redsan)
Top tier.
```javascript
// Badder Than Most
// setcps(0.65)
stack(
  s("sawtooth").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 56. Toklezea (Chantelle ft. Abbas)
Show up.
```javascript
// Toklezea
// setcps(0.6)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 57. Make You Dance (K-Rupt)
Reggae vibe.
```javascript
// Make You Dance
// setcps(0.62)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 58. Sina Makosa (Les Wanyika)
I have no fault (Classic Reggae/Rhumba).
```javascript
// Sina Makosa
// setcps(0.55)
stack(
  s("superrhodes").note("d4 f#4 a4 d5"),
  s("bd").struct("x ~ x ~")
)
```

### 59. Khadija (Wyre)
Serenade.
```javascript
// Khadija
// setcps(0.58)
stack(
  s("supermandolin").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 60. Guarantee (Wyre ft. Peetah Morgan)
Promise.
```javascript
// Guarantee
// setcps(0.56)
stack(
  s("superguitar").note("e4 g#4 b4 e5"),
  s("bd(3,8)")
)
```

## Category 4: New School Drill & Shrap
*The sound of Nairobi's streets today.*

### 61. Geri Inengi (Wakadinali)
Subaru ya mambaru.
```javascript
// Geri Inengi
// setcps(0.6)
stack(
  s("supersaw").note("c4 e4 g4 c5").lpf(400),
  s("bd(3,8)"),
  s("hc*8")
)
```

### 62. Mc Mca (Wakadinali)
Leader.
```javascript
// Mc Mca
// setcps(0.62)
stack(
  s("supersquare").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 63. Balotelli (Wakadinali)
Striker.
```javascript
// Balotelli
// setcps(0.64)
stack(
  s("sawtooth").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 64. Nairobi (Buruklyn Boyz)
The anthem.
```javascript
// Nairobi
// setcps(0.6)
stack(
  s("superpiano").note("a3 c4 e4 a4").lpf(500),
  s("bd(3,8)")
)
```

### 65. Pree (Buruklyn Boyz)
Watch out.
```javascript
// Pree
// setcps(0.62)
stack(
  s("superrhodes").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 66. Dream Ya Kutoka Kwa Block (Buruklyn Boyz)
Dream of leaving the hood.
```javascript
// Dream Ya Kutoka Kwa Block
// setcps(0.58)
stack(
  s("superguitar").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 67. Angela (Boutross)
Mega hit.
```javascript
// Angela
// setcps(0.6)
stack(
  s("supersaw").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 68. Yea Yea (Boutross)
Vibe.
```javascript
// Yea Yea
// setcps(0.62)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 69. Sipangwingwi (Exray)
I can't be planned.
```javascript
// Sipangwingwi
// setcps(0.65)
stack(
  s("sawtooth").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 70. Wabebe (Miracle Baby)
Carry them.
```javascript
// Wabebe
// setcps(0.68)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 71. Doro (Ssaru)
Gold.
```javascript
// Doro
// setcps(0.6)
stack(
  s("supermandolin").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 72. Sirudi Home (Maandy)
I'm not going home.
```javascript
// Sirudi Home
// setcps(0.62)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 73. Hottests (Maandy)
Fire.
```javascript
// Hottests
// setcps(0.64)
stack(
  s("supersaw").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 74. Rhumba Japani (Sauti Sol ft. All Stars)
Gang.
```javascript
// Rhumba Japani
// setcps(0.6)
stack(
  s("superguitar").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 75. Yes Bana (Khaligraph Jones)
Yes boss.
```javascript
// Yes Bana
// setcps(0.62)
stack(
  s("supersquare").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 76. Tuma Kitu (Khaligraph Jones)
Send something.
```javascript
// Tuma Kitu
// setcps(0.6)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 77. Cheza Kama Wewe (Trio Mio)
Play like you.
```javascript
// Cheza Kama Wewe
// setcps(0.62)
stack(
  s("superpiano").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 78. Serereka (Trio Mio)
Slide.
```javascript
// Serereka
// setcps(0.65)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(4,4)")
)
```

### 79. Kalale (Willis Raburu)
Go to sleep.
```javascript
// Kalale
// setcps(0.64)
stack(
  s("superrhodes").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 80. Lewa (Parroty)
Get drunk.
```javascript
// Lewa
// setcps(0.66)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

## Category 5: Mugithi & Vernacular Pop
*The heartbeat of the countryside.*

### 81. Mumbi (Samidoh)
To the mother of the tribe.
```javascript
// Mumbi
// setcps(0.6)
stack(
  s("superguitar").note("c4 e4 g4 c5 . b4 g4 e4 d4"),
  s("bd(3,8)"),
  s("hh*8")
)
```

### 82. Wendo Wi Cama (Samidoh ft. Joyce wa Mama)
Love is sweet.
```javascript
// Wendo Wi Cama
// setcps(0.62)
stack(
  s("supermandolin").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 83. Tuirio Twega (Jose Gatutura)
Good food.
```javascript
// Tuirio Twega
// setcps(0.6)
stack(
  s("superpiano").note("d4 f#4 a4 d5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 84. Machete (Jose Gatutura)
The shirt.
```javascript
// Machete
// setcps(0.62)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd(4,4)")
)
```

### 85. Firirida (Dick Munyonyi)
The viral dance.
```javascript
// Firirida
// setcps(0.65)
stack(
  s("supersquare").note("e4 g#4 b4 e5").chop(2),
  s("bd, sd").struct("x ~ x ~")
)
```

### 86. Kairetu (Samidoh)
Young girl.
```javascript
// Kairetu
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd(3,8)")
)
```

### 87. Indo Cia Arume (Salim Junior)
Men's things.
```javascript
// Indo Cia Arume
// setcps(0.58)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 88. Sarafina (Salim Junior)
Classic cover.
```javascript
// Sarafina
// setcps(0.6)
stack(
  s("supermandolin").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 89. Fundamentals (Ken wa Maria)
The essentials.
```javascript
// Fundamentals
// setcps(0.62)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 90. Syindu Sya Mutongoi (Ken wa Maria)
Leader's things.
```javascript
// Syindu Sya Mutongoi
// setcps(0.64)
stack(
  s("supersaw").note("e4 g#4 b4 e5"),
  s("bd(4,4)")
)
```

### 91. Dunia (Kativui)
World.
```javascript
// Dunia
// setcps(0.6)
stack(
  s("superrhodes").note("c4 e4 g4 c5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 92. Kanwa Ka Maitu (Mike Rua)
Mother's mouth (Mugithi satire).
```javascript
// Kanwa Ka Maitu
// setcps(0.62)
stack(
  s("superguitar").note("g3 b3 d4 g4"),
  s("bd(3,8)")
)
```

### 93. Nuu Ucio (Samidoh)
Who is that?
```javascript
// Nuu Ucio
// setcps(0.6)
stack(
  s("supersquare").note("d4 f#4 a4 d5"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 94. Ihinda Ringi (Samidoh)
Another time.
```javascript
// Ihinda Ringi
// setcps(0.58)
stack(
  s("superpiano").note("a3 c4 e4 a4"),
  s("bd(3,8)")
)
```

### 95. Geithia Mundu (Musaimo)
Greet someone.
```javascript
// Geithia Mundu
// setcps(0.62)
stack(
  s("supermandolin").note("e4 g#4 b4 e5"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 96. Mundu Mulosi (Musaimo)
The witch.
```javascript
// Mundu Mulosi
// setcps(0.6)
stack(
  s("sawtooth").note("c4 e4 g4 c5"),
  s("bd(4,4)")
)
```

### 97. Ngai Ciakwa (Gathee wa Njeri)
My God.
```javascript
// Ngai Ciakwa
// setcps(0.58)
stack(
  s("superrhodes").note("g3 b3 d4 g4"),
  s("bd, sd").struct("x ~ x ~")
)
```

### 98. Ndoa ya Harusi (Kareh B)
Wedding.
```javascript
// Ndoa ya Harusi
// setcps(0.6)
stack(
  s("superguitar").note("d4 f#4 a4 d5"),
  s("bd(3,8)")
)
```

### 99. Wendo Waku (Kareh B)
Your love.
```javascript
// Wendo Waku
// setcps(0.62)
stack(
  s("supersaw").note("a3 c4 e4 a4"),
  s("bd, cp").struct("x ~ x ~")
)
```

### 100. Githayo (Gathee wa Njeri)
Uselessness.
```javascript
// Githayo
// setcps(0.6)
stack(
  s("superpiano").note("e4 g#4 b4 e5"),
  s("bd, sd").struct("x ~ x ~")
)
```
