# 🐍 Snake

[English](README.md) · [Deutsch](README.de.md) · **Magyar**

Minimalista, típusbiztos Snake-játék **React 18**, **Vite** és **TypeScript** alapokon – billentyűzetre és érintésre is, rácsos DOM, canvas és játékmotor nélkül.
Önállóan fut, **és** a **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)** tizenöt játékának egyike.

[![CI](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Tartalom

- [A Zoltan's Arcade család](#-a-zoltans-arcade-család)
- [Funkciók](#-funkciók)
- [Gyors kezdés](#-gyors-kezdés)
- [Irányítás](#%EF%B8%8F-irányítás)
- [Pontozás és statisztika](#-pontozás-és-statisztika)
- [Automatikus mentés és folytatás](#-automatikus-mentés-és-folytatás)
- [Beágyazás az Arcade-Game-Centerbe](#-beágyazás-az-arcade-game-centerbe)
- [Hogyan működik](#-hogyan-működik)
- [Szkriptek](#-szkriptek)
- [Felépítés](#%EF%B8%8F-felépítés)
- [Közreműködés](#-közreműködés)
- [Licenc](#%EF%B8%8F-licenc)

## 🕹️ A Zoltan's Arcade család

Minden játék önálló repó, amely a portálba is becsatlakozik. Egy közös dizájnrendszeren, pontozási modellen és mentési formátumon osztoznak a beágyazott [`src/arcade/`](./src/arcade) kiten keresztül.

| Játék | Repó | Műfaj |
| --- | --- | --- |
| 🏠 **Arcade portál** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | Minden játék egy helyen, élő demók, statisztika, ranglista |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Árkád |
| 🐍 **Snake** (ez a repó) | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reflex |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Logikai |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Labirintus |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Stratégia |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Párbaj |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Ütő |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Lövöldözős |
| 🔴 Connect Four | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Párbaj |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Rendezős |
| 🃏 Texas Hold'em | [Texas-Holdem-Game](https://github.com/ZoliQua/Texas-Holdem-Game) | Kártya |
| 💣 Minesweeper | [Minesweeper-Game](https://github.com/ZoliQua/Minesweeper-Game) | Logikai |
| ♠️ Solitaire | [Solitaire-Game](https://github.com/ZoliQua/Solitaire-Game) | Kártya |
| 🎴 Ulti | [Ulti-Game](https://github.com/ZoliQua/Ulti-Game) | Kártya |
| 🂡 Snapszer | [Snapszer-Game](https://github.com/ZoliQua/Snapszer-Game) | Kártya |

## ✨ Funkciók

- 🎮 **Klasszikus Snake** 20×20-as rácson; a teljesen megtelt pálya győzelemnek számít
- ⚡ **Állítható sebesség** (1–10), a sebességgel arányos pontozással
- 🧱 **Átjárható falak kapcsoló** – tórusz mód (alapértelmezett) vagy klasszikus falak
- 💾 **Automatikus mentés és folytatás** – zárd be a lapot játék közben, és később ott folytathatod, ahol abbahagytad
- 🏆 **Egységes arcade statisztika** – rekord, játékszám, összidő, a portállal közösen
- ⏱️ **Szünetet figyelő játékidő**
- 🌗 **Sötét / világos téma**, minden arcade játékban közös (**T** billentyű)
- 🌍 **Három nyelv** – angol, magyar és német; a felső sávban vagy a beállításokban váltható (linkkel is: `?lang=en|hu|de`); a számok a nyelv csoportosítását követik
- 🦷 **Fogas mód** – „Fogas mód” / "Dental mode" / „Zahnmodus” kapcsoló a beállításokban, alapból kikapcsolva (vagy `?dental=1`), az egész arcade-ban közös: a fej mosolygó fog, a test fogsor, az étel fogkrémcsepp; csak megjelenés
- 🤖 **Bemutató mód** (`<SnakeDemo />`) – a valódi motor, BFS-autopilóta vezérli, a portál nyitóoldalán látható
- ⌨️ **Billentyűzet-központú**; a gyorsbillentyűket figyelmen kívül hagyja, amíg űrlapmezőbe gépelsz
- 📖 **Szabályok ablak** ábrával (megnyitáskor a játék szünetel)
- 🏁 **Idő előtti befejezés** – szándékosan lezárhatod a menetet, és a jelenlegi pontszámod felkerül a ranglistára
- 📱 **Érintéses játék** – húzás a pályán, képernyő-nyílgombok, koppintás az induláshoz
- ⛶ **Teljes képernyő** gomb (iPhone-on CSS-es teljes képernyős mód)
- 🧪 **Tesztelt** – tiszta logikai egységtesztek és komponenstesztek Vitest + Testing Library segítségével

## 🚀 Gyors kezdés

**Node ≥ 20** és npm szükséges.

```bash
git clone https://github.com/ZoliQua/Snake-Game.git
cd Snake-Game
npm install
npm run dev          # http://localhost:5173
```

Éles build: `npm run build && npm run preview`. A build relatív elérési utakat használ, így a `dist/` bármelyik almappából kiszolgálható.

## ⌨️ Irányítás

| Billentyű | Művelet |
| --- | --- |
| ⬆️ ⬇️ ⬅️ ➡️ / **W A S D** | Irányítás |
| **Szóköz** / **Enter** | Indítás · szünet · folytatás |
| **P** / **Esc** | Szünet / folytatás |
| **R** | Újrakezdés |
| **T** | Sötét / világos téma váltása (önálló oldalon) |

**Telefonon:** húzd az ujjad a pálya bármely pontján a kanyarodáshoz (a fordulók sorba állnak, mint a billentyűleütések), vagy használd a pálya alatti négy nyílgombot; a pályára koppintva indul a játék. A **Szabályok**, **Befejezés** és **Teljes képernyő** gomb a Játék panelen van. iPhone-on add hozzá az oldalt a főképernyőhöz, így böngészősávok nélkül fut.

## 🎯 Pontozás és statisztika

Minden pötty **N pontot ér N sebességnél** (a sebességváltozás a következő pöttytől él).

| Sebesség | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lépésidő (ms) | 300 | 260 | 225 | 195 | 170 | **150** | 130 | 110 | 90 | 70 |
| Pont / pötty | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |

Amikor egy menet véget ér, a kit egyszer rögzíti a `localStorage`-ban az `arcade.stats.snake` kulcs alatt
(`best`, `plays`, `wins`, `totalScore`, `totalSeconds`, `lastScore`, `lastPlayedAt`).
A régi `snake.highScore` kulcsot szinkronban tartja, így a korábbi buildek megőrzik a rekordjukat.

## 💾 Automatikus mentés és folytatás

Futó menet közben nagyjából másodpercenként ment, valamint amikor az oldal elrejtődik vagy a játék leválasztódik
(kulcs: `arcade.session.snake`, sémaverzióval, betöltéskor ellenőrizve). Újratöltés után az **Üdv újra!** üzenet jelenik meg
a visszaállított, szüneteltetett menettel. Az *Elmentve* jelzés melletti **Elvetés** törli a mentést. A befejezett menetek mentése automatikusan törlődik.

## 🧩 Beágyazás az Arcade-Game-Centerbe

```tsx
import { SnakeGame, SnakeDemo } from '@arcade/snake';

<SnakeGame
  embedded                                   // az oldalcímet elrejti; a portál mutatja
  onGameOver={(score, info) => submitScore('snake', score)}   // info.finished: idő előtt befejezve
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<SnakeDemo active={cardIsVisible} />          // nyitóoldali bemutató mód
```

Mindkét komponens a `src/arcade/types.ts` közös `ArcadeGameProps` / `ArcadeDemoProps` szerződését követi.

## 🧠 Hogyan működik

Állapotgép: `idle → running ↔ paused → gameOver → (újrakezdés) → running`.

Egyetlen tiszta függvény, az `advanceGame(state, rng)` végzi egy lépés teljes számítását:

1. Feloldja a sorba állított irányt (a 180°-os megfordulást az **utoljára alkalmazott** iránnyal szemben tiltja).
2. Kiszámolja a következő fejet; átfordítja, vagy falnak ütközésnél véget vet a menetnek.
3. Az önmagába ütközést a test ellen ellenőrzi, **miután** a farok továbblépett (a farok által elhagyott mezőre lépni szabályos).
4. Étel esetén nő és pontot szerez, különben a farok továbblép; a megtelt pálya győzelemmel zárja a menetet.

A `useGameLoop` csak futás közben tart intervallumot, a legfrissebb callbacket refből olvassa (nincs elavult closure).
A `useKeyboardDirection` a komponens teljes élettartamára egyetlen window-figyelőt köt fel.

## 🧪 Szkriptek

| Szkript | Cél |
| --- | --- |
| `npm run dev` | Vite fejlesztői szerver |
| `npm run build` | Típusellenőrzés (`tsc -b`) és éles build |
| `npm run preview` | Az éles build kiszolgálása |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (logikai + komponenstesztek) |
| `npm run check` | lint → typecheck → test → build (amit a CI futtat) |

## 🏗️ Felépítés

```
src/
  arcade/            beágyazott Zoltan's Arcade kit — itt ne szerkessz (lásd a saját README-jét)
  logic/             tiszta játékszabályok
    types.ts constants.ts snake.ts food.ts collision.ts
    game.ts          advanceGame + createInitialState + isBoardFull
    autopilot.ts     BFS-irányítás a demóhoz
    persist.ts       a mentett munkamenetek futásidejű ellenőrzése
  hooks/             useGameLoop, useKeyboardDirection
  components/        GameBoard (teljes + mini), SpeedControl, WrapToggle
  demo/SnakeDemo.tsx nyitóoldali bemutató mód
  rules.tsx          a szabályok ablak tartalma és ábrája
  SnakeGame.tsx      a beágyazható játék (ArcadeGameProps)
  App.tsx            önálló oldal: <ArcadeShell><SnakeGame/></ArcadeShell>
  main.tsx           belépési pont; egyszer tölti be a közös arcade.css-t
  index.ts           csomag-belépési pont az Arcade-Game-Centerhez
```

## 🤝 Közreműködés

Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md)-t, az [Etikai kódexet](./CODE_OF_CONDUCT.md) és a [SECURITY.md](./SECURITY.md)-t.
A közreműködők a [CONTRIBUTORS.md](./CONTRIBUTORS.md)-ben, a változások a [CHANGELOG.md](./CHANGELOG.md)-ben találhatók.

## ⚖️ Licenc

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Készítette ❤️-vel Zoltán Dul · a <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a> része</p>
