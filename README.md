# Algorithmic Music Live-Coding & Composition Suite (Strudel REPL)

A comprehensive algorithmic composition repository for [Strudel REPL](https://strudel.cc/) (the JavaScript web port of TidalCycles), featuring live-coded arrangements spanning lofi study beats, jazz chord progressions, and traditional Kenyan musical transcriptions.

---

## Composition Libraries & Guides

```
guides/
├── 00-overview.md                        # Foundations of algorithmic music live coding
├── 01-beginners.md                       # Pattern syntax, mini-notation, euclidean rhythms
├── 02-intermediate-melody-harmony.md    # Chord voicing, modal scales, voice leading
├── 03-nujabes-lofi.md                    # Lofi production recipes, swing, sidechain ducking
├── 05-100-famous-songs.md                # 100 classic musical arrangements
├── 06-100-famous-kenyan-songs.md         # Kenyan benga, kapuka, and gengetone rhythmic patterns
├── 07-50-famous-jazz-songs.md            # II-V-I progressions, tritone substitutions
└── 09-advanced-generative.md             # Markov chains, generative polymeters, microtonality
```

---

## Sample Strudel Pattern

```javascript
// Lofi Jazz Beat with Swing & Sidechain Ducking
s("bd ~ [~ bd] ~, ~ cp ~ [~ cp]")
  .bank("RolandTR808")
  .fast(1.2)
  .room(0.3)
  .slow(2);

note("<[c4'maj7, e4, g4, b4] [a3'm7, c4, e4, g4] [d4'm7, f4, a4, c5] [g3'7, b3, d4, f4]>")
  .sound("piano")
  .legato(0.8)
  .lpf(1200)
  .gain(0.7);
```

---

## Live Testing

Open [strudel.cc](https://strudel.cc/), paste any of the examples from `/examples/` or `/guides/`, and click **Play** (or press `Ctrl+Enter`).

---

## License

MIT License.
