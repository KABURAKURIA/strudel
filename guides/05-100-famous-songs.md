# 100 Simple Strudel Songs

This guide contains over 100 simple song snippets for Strudel. You can copy and paste these code blocks directly into [strudel.cc](https://strudel.cc).

## How to Use
Copy the code block for the song you want to hear. Make sure to only run one block at a time (or clear the previous code) to avoid overlapping sounds, unless that's what you want!

Most examples set a tempo with `setcps`.

---

## Category 1: Nursery Rhymes

### 1. Happy Birthday
```javascript
// Happy Birthday
setcps(1)
note("g3/1.5 g3/0.5 a3 g3 c4 b3/2 g3/1.5 g3/0.5 a3 g3 d4 c4/2")
  .s("piano")
```

### 2. Twinkle Twinkle Little Star
```javascript
setcps(1)
note("c4 c4 g4 g4 a4 a4 g4/2 f4 f4 e4 e4 d4 d4 c4/2")
  .s("piano")
```

### 3. Mary Had a Little Lamb
```javascript
setcps(1.2)
note("e4 d4 c4 d4 e4 e4 e4/2 d4 d4 d4/2 e4 g4 g4/2")
  .s("piano")
```

### 4. Row Row Row Your Boat
```javascript
setcps(1.2)
note("c4/1.5 c4/0.5 c4/1.5 d4/0.5 e4")
  .add(note("e4/1.5 d4/0.5 e4/1.5 f4/0.5 g4/2").slow(2))
  .s("piano")
```

### 5. Frere Jacques
```javascript
setcps(1.4)
note("c4 d4 e4 c4").s("piano").slow(2)
```

### 6. London Bridge
```javascript
setcps(1.3)
note("g4 a4 g4 f4 e4 f4 g4/2").s("piano")
```

### 7. Old MacDonald
```javascript
setcps(1.2)
note("g4 g4 g4 d4 e4 e4 d4/2").s("piano")
```

### 8. Baa Baa Black Sheep
```javascript
setcps(1)
note("c4 c4 g4 g4 a4 b4 c5 a4 g4/2").s("piano")
```

### 9. Itsy Bitsy Spider
```javascript
setcps(1.2)
note("g3 c4 c4 c4 d4 e4 e4 e4 d4 c4 d4 e4 c4/2").s("piano")
```

### 10. The Wheels on the Bus
```javascript
setcps(1.2)
note("c4 f4 f4 f4 f4 a4 c5 a4 f4").s("piano")
```

### 11. If You're Happy and You Know It
```javascript
setcps(1.2)
note("c4 c4 f4 f4 f4 f4 f4 f4 e4 f4 g4").s("piano")
```

### 12. Humpty Dumpty
```javascript
setcps(1)
note("c4 c4 d4 d4 e4 e4 c4").s("piano")
```

### 13. Hickory Dickory Dock
```javascript
setcps(1.2)
note("a3 b3 c4 a3 e4 c4 a3").s("piano")
```

### 14. Hot Cross Buns
```javascript
setcps(1)
note("e4 d4 c4/2 e4 d4 c4/2").s("piano")
```

### 15. Jack and Jill
```javascript
setcps(1.2)
note("c4 d4 e4 c4 g3 c4").s("piano")
```

### 16. Little Bo Peep
```javascript
setcps(1.2)
note("c4 d4 e4 c4 d4 e4").s("piano")
```

### 17. Muffin Man
```javascript
setcps(1.2)
note("g3 c4 c4 d4 e4 c4").s("piano")
```

### 18. Pop Goes the Weasel
```javascript
setcps(1.2)
note("c4 c4 d4 d4 e4 g4 c4").s("piano")
```

### 19. Ring Around the Rosie
```javascript
setcps(1.2)
note("g4 g4 e4 a4 g4 e4").s("piano")
```

### 20. Rock-a-bye Baby
```javascript
setcps(1)
note("e4 g4 a4/2 e4 g4 a4/2").s("piano")
```

### 21. This Old Man
```javascript
setcps(1.2)
note("g4 e4 g4 g4 e4 g4").s("piano")
```

### 22. Three Blind Mice
```javascript
setcps(1)
note("e4 d4 c4/2 e4 d4 c4/2").s("piano")
```

### 23. Farmer in the Dell
```javascript
setcps(1.2)
note("g3 c4 c4 c4 c4").s("piano")
```

### 24. Bingo
```javascript
setcps(1.2)
note("g4 g4 c4 c4 g4 g4 c4").s("piano")
```

### 25. Head, Shoulders, Knees and Toes
```javascript
setcps(1.2)
note("c4 e4 g4 g4 g4 g4").s("piano")
```

---

## Category 2: Folk & Traditional

### 26. Amazing Grace
```javascript
setcps(0.8)
note("d3 g3/2 b3/0.5 a3/0.5 g3/2 e3/0.5 d3/2").s("piano")
```

### 27. Auld Lang Syne
```javascript
setcps(1)
note("c4 f4/1.5 f4/0.5 f4 a4 g4/1.5 a4/0.5 g4 a4 f4/1.5 f4/0.5 a4 c5 d5/2").s("piano")
```

### 28. Danny Boy
```javascript
setcps(0.8)
note("e4 f4 g4 a4 b4 c5").s("piano")
```

### 29. Greensleeves
```javascript
setcps(1.2)
note("a3 c4 d4 e4/1.5 f4/0.5 e4 d4/2 b3 g3 a3/2").s("piano")
```

### 30. Scarborough Fair
```javascript
setcps(1)
note("d4 d4 a4 a4 a4 e4 f4/2").s("piano")
```

### 31. Yankee Doodle
```javascript
setcps(1.2)
note("c4 c4 d4 e4 c4 e4 d4 g3").s("piano")
```

### 32. Oh! Susanna
```javascript
setcps(1.2)
note("c4 d4 e4 g4 g4 a4 g4 e4 c4 d4 e4 e4 d4 c4 d4/2").s("piano")
```

### 33. Camptown Races
```javascript
setcps(1.2)
note("g4 g4 e4 g4 a4 g4 e4").s("piano")
```

### 34. Home on the Range
```javascript
setcps(1)
note("d4 d4 g4 a4 b4 g4").s("piano")
```

### 35. She'll Be Coming 'Round the Mountain
```javascript
setcps(1.2)
note("c4 d4 e4 g4 g4 g4").s("piano")
```

### 36. Swing Low, Sweet Chariot
```javascript
setcps(1)
note("e4 g4 g4 g4 g4 e4 d4 c4").s("piano")
```

### 37. When the Saints Go Marching In
```javascript
setcps(1.2)
note("c4 e4 f4 g4/2 c4 e4 f4 g4/2").s("piano")
```

### 38. My Bonnie Lies Over the Ocean
```javascript
setcps(1)
note("g3 e4 d4 c4 d4 c4 a3").s("piano")
```

### 39. Clementine
```javascript
setcps(1)
note("c4 c4 c4 g3 e4 e4 e4 c4").s("piano")
```

### 40. I've Been Working on the Railroad
```javascript
setcps(1.2)
note("c4 c4 c4 d4 e4 e4 d4").s("piano")
```

### 41. Red River Valley
```javascript
setcps(1)
note("d4 e4 g4 g4 g4 g4").s("piano")
```

### 42. House of the Rising Sun
```javascript
setcps(1)
note("a3 c4 d4 f4 a4 e4").s("guitar")
```

### 43. Waltzing Matilda
```javascript
setcps(1.2)
note("c4 e4 g4 g4 a4 g4").s("piano")
```

### 44. Bella Ciao
```javascript
setcps(1.2)
note("e4 a4 b4 c5 a4 e4 a4 b4 c5 a4").s("piano")
```

### 45. Kalinka
```javascript
setcps(1.4)
note("e4 c4 b3 a3 e4 c4 b3 a3").s("piano")
```

### 46. Korobeiniki (Tetris Theme)
```javascript
setcps(1.3)
note("e5 b4 c5 d5 c5 b4 a4 a4 c5 e5 d5 c5 b4/2 c5 d5 e5 c5 a4 a4/2")
  .s("sawtooth")
```

### 47. La Bamba
```javascript
setcps(1.3)
note("c4 d4 e4 f4 g4").s("piano")
```

### 48. Guantanamera
```javascript
setcps(1.1)
note("g3 a3 b3 g3 a3 b3").s("piano")
```

### 49. Cielito Lindo
```javascript
setcps(1.2)
note("c4 c4 a3 b3 g3 c4 c4 a3 b3 g3").s("piano")
```

### 50. Aloha Oe
```javascript
setcps(0.8)
note("g3 c4 e4 g4 a4").s("vibraphone")
```

---

## Category 3: Classical Themes

### 51. Ode to Joy (Beethoven)
```javascript
setcps(1)
note("e4 e4 f4 g4 g4 f4 e4 d4 c4 c4 d4 e4 e4/1.5 d4/0.5 d4/2").s("piano")
```

### 52. Fur Elise (Beethoven)
```javascript
setcps(1)
note("e5 d#5 e5 d#5 e5 b4 d5 c5 a4/2").s("piano")
```

### 53. Symphony No. 5 (Beethoven)
```javascript
setcps(1)
note("g4 g4 g4 eb4/4").s("strings").slow(2)
```

### 54. Canon in D (Pachelbel)
```javascript
setcps(0.8)
note("f#5 e5 d5 c#5 b4 a4 b4 c#5").s("piano")
```

### 55. Eine Kleine Nachtmusik (Mozart)
```javascript
setcps(1.2)
note("g4/1.5 d4/0.5 g4/1.5 d4/0.5 g4 d4 g4 b4 d5/2").s("strings")
```

### 56. Rondo Alla Turca (Mozart)
```javascript
setcps(1.4)
note("b4 a4 g#4 a4 c5").s("piano")
```

### 57. Morning Mood (Grieg)
```javascript
setcps(1)
note("g4 e4 d4 c4 d4 e4 g4 e4 d4 c4").s("flute")
```

### 58. In the Hall of the Mountain King (Grieg)
```javascript
setcps(1.1)
note("b2 c#3 d3 e3 f#3 d3 f#3").s("bassoon")
```

### 59. Spring (Vivaldi)
```javascript
setcps(1.2)
note("e5/2 g#5/2 g#5/2 g#5 f#5 e5 b4").s("strings")
```

### 60. Blue Danube (Strauss)
```javascript
setcps(1)
note("c4 c4 e4 g4 g4").s("strings")
```

### 61. Ride of the Valkyries (Wagner)
```javascript
setcps(1.3)
note("b3 e4 g4 b4/0.5 g4/1.5").s("brass")
```

### 62. Swan Lake Theme (Tchaikovsky)
```javascript
setcps(1)
note("f#4 b4 c#5 d5 e5 f#5").s("strings")
```

### 63. Nutcracker March (Tchaikovsky)
```javascript
setcps(1.2)
note("g4 e4 e4 f4 d4 d4").s("brass")
```

### 64. William Tell Overture (Rossini)
```javascript
setcps(1.5)
note("e4 e4 e4 f4 g4").s("brass")
```

### 65. Habanera (Bizet)
```javascript
setcps(1)
note("d4/1.5 eb4/0.5 f4/1.5 f#4/0.5 g4").s("strings")
```

### 66. Toreador Song (Bizet)
```javascript
setcps(1.2)
note("f4 g4 a4 f4 g4 a4").s("brass")
```

### 67. Bolero (Ravel)
```javascript
setcps(1)
note("c4 b3 c4 d4 c4 b3 a3 c4 c4 a3").s("flute")
```

### 68. Clair de Lune (Debussy)
```javascript
setcps(0.6)
note("f4 g#4 f4 eb4 f4").s("piano")
```

### 69. Gymnopédie No.1 (Satie)
```javascript
setcps(0.8)
note("f#4 a4 g4 f#4 c#4 b3 c#4 d4").s("piano")
```

### 70. Ave Maria (Schubert)
```javascript
setcps(0.8)
note("c5 c5 b4 a4 g4").s("voice")
```

### 71. Brahm's Lullaby
```javascript
setcps(0.8)
note("e4 e4 g4 e4 e4 g4").s("piano")
```

### 72. Surprise Symphony (Haydn)
```javascript
setcps(1)
note("c4 c4 e4 e4 g4 g4 e4").s("strings")
```

### 73. New World Symphony (Dvorak)
```javascript
setcps(0.6)
note("e4 g4 g4 e4 d4 c4 d4 e4 d4").s("brass")
```

### 74. The Entertainer (Joplin)
```javascript
setcps(1.2)
note("d5 e5 c5 a4 b4 g4").s("piano")
```

### 75. Maple Leaf Rag (Joplin)
```javascript
setcps(1.2)
note("eb4 e4 g4 b4 eb5").s("piano")
```

---

## Category 4: Holiday & Seasonal

### 76. Jingle Bells
```javascript
setcps(1.2)
note("e4 e4 e4/2 e4 e4 e4/2 e4 g4 c4 d4 e4/4").s("piano")
```

### 77. Silent Night
```javascript
setcps(0.8)
note("g4/1.5 a4/0.5 g4 e4/2").s("piano")
```

### 78. Deck the Halls
```javascript
setcps(1.2)
note("c5 b4 a4 g4 f4 e4 d4 c4").s("piano")
```

### 79. Joy to the World
```javascript
setcps(1)
note("c5 b4 a4 g4 f4 e4 d4 c4").s("brass")
```

### 80. We Wish You a Merry Christmas
```javascript
setcps(1.2)
note("d4 g4 g4/0.5 a4/0.5 g4 f#4 e4 e4").s("piano")
```

### 81. The First Noel
```javascript
setcps(1)
note("f#4 e4 d4 e4 f#4 g4 a4 b4 c#5").s("organ")
```

### 82. Hark! The Herald Angels Sing
```javascript
setcps(1.1)
note("c4 f4 f4 g4 f4 e4 d4 d4").s("organ")
```

### 83. O Christmas Tree
```javascript
setcps(1)
note("g3 c4 c4 c4 d4 e4 e4 e4").s("piano")
```

### 84. Rudolph the Red-Nosed Reindeer
```javascript
setcps(1.2)
note("g4 a4 g4 e4 c5 a4 g4").s("piano")
```

### 85. 12 Days of Christmas
```javascript
setcps(1.2)
note("c4 c4 c4 d4 e4 f4 g4 f4 e4 d4 c4").s("piano")
```

### 86. Frosty the Snowman
```javascript
setcps(1.2)
note("g4 e4 f4 g4 c5 b4 c5 d5 c5 b4 a4 g4").s("piano")
```

### 87. Little Drummer Boy
```javascript
setcps(1)
note("c4 d4 e4 e4 e4 f4 e4 f4 e4").s("drums")
```

### 88. O Holy Night
```javascript
setcps(0.7)
note("e4 e4 e4 g4 g4").s("piano")
```

### 89. God Rest Ye Merry Gentlemen
```javascript
setcps(1.2)
note("d4 d4 a4 a4 g4 f4 e4 d4").s("organ")
```

### 90. Good King Wenceslas
```javascript
setcps(1.2)
note("f4 f4 f4 g4 f4 f4 c4").s("piano")
```

---

## Category 5: More Famous Tunes

### 91. Star Spangled Banner
```javascript
setcps(0.8)
note("g3 e3 c3 e3 g3 c4").s("brass")
```

### 92. God Save the King/Queen
```javascript
setcps(1)
note("c4 c4 d4 b3 c4 d4").s("piano")
```

### 93. La Marseillaise
```javascript
setcps(1.2)
note("d4 d4 g4 g4 a4 a4").s("brass")
```

### 94. Happy Farmer (Schumann)
```javascript
setcps(1.2)
note("c4 f4 a4 c5").s("piano")
```

### 95. Minuet in G (Bach/Petzold)
```javascript
setcps(1)
note("d5 g4 a4 b4 c5 d5 g4 g4").s("harpsichord")
```

### 96. Prelude in C (Bach)
```javascript
setcps(1)
note("c4 e4 g4 c5 e5 g4 c5 e5").s("piano")
```

### 97. Jesu, Joy of Man's Desiring (Bach)
```javascript
setcps(0.9)
note("g4 a4 b4 d5 c5 c5 e5 d5 d5 g5 f#5 g5").s("organ")
```

### 98. Chopsticks
```javascript
setcps(1.4)
note("g4 g4 g4 g4 e4 e4").s("piano")
```

### 99. Heart and Soul
```javascript
setcps(1.2)
note("c4 c4 c4 a3 a3 a3 f3 f3 f3 g3 g3 g3").s("piano")
```

### 100. Happy Birthday (Variation)
```javascript
setcps(1)
note("g3/1.5 g3/0.5 a3 b3 g3")
  .add(note("c4 b3 ~").slow(2))
  .s("sawtooth")
  .lpf(1000)
```
