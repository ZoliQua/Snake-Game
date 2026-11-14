# 🐍 Snake

[English](README.md) · **Deutsch** · [Magyar](README.hu.md)

Ein minimalistisches, typsicheres Snake-Spiel mit **React 18**, **Vite** und **TypeScript** – für Tastatur und Touch, rasterbasiertes DOM, ohne Canvas und ohne Game-Engine.
Läuft allein **und** als eines der fünfzehn Spiele von **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)**.

[![CI](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Snake-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Inhaltsverzeichnis

- [Die Zoltan's-Arcade-Familie](#-die-zoltans-arcade-familie)
- [Funktionen](#-funktionen)
- [Schnellstart](#-schnellstart)
- [Steuerung](#%EF%B8%8F-steuerung)
- [Punkte & Statistik](#-punkte--statistik)
- [Autospeichern & Fortsetzen](#-autospeichern--fortsetzen)
- [Einbindung in Arcade-Game-Center](#-einbindung-in-arcade-game-center)
- [So funktioniert es](#-so-funktioniert-es)
- [Skripte](#-skripte)
- [Architektur](#%EF%B8%8F-architektur)
- [Mitwirken](#-mitwirken)
- [Lizenz](#%EF%B8%8F-lizenz)

## 🕹️ Die Zoltan's-Arcade-Familie

Jedes Spiel ist ein eigenständiges Repo, das sich auch ins Portal einklinkt. Alle teilen ein Designsystem, ein Punktemodell und ein Speicherformat über das eingebundene Kit [`src/arcade/`](./src/arcade).

| Spiel | Repo | Genre |
| --- | --- | --- |
| 🏠 **Arcade-Portal** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | Alle Spiele an einem Ort, Live-Demos, Statistik, Bestenliste |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Arcade |
| 🐍 **Snake** (dieses Repo) | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reaktion |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Knobelei |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Labyrinth |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Strategie |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Duell |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Schläger |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Shooter |
| 🔴 Vier gewinnt | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Duell |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Sortieren |
| 🃏 Texas Hold'em | [Texas-Holdem-Game](https://github.com/ZoliQua/Texas-Holdem-Game) | Karten |
| 💣 Minesweeper | [Minesweeper-Game](https://github.com/ZoliQua/Minesweeper-Game) | Logik |
| ♠️ Solitaire | [Solitaire-Game](https://github.com/ZoliQua/Solitaire-Game) | Karten |
| 🎴 Ulti | [Ulti-Game](https://github.com/ZoliQua/Ulti-Game) | Karten |
| 🂡 Snapszer | [Snapszer-Game](https://github.com/ZoliQua/Snapszer-Game) | Karten |

## ✨ Funktionen

- 🎮 **Klassisches Snake** auf einem 20×20-Raster; ein komplett gefülltes Feld zählt als Sieg
- ⚡ **Einstellbares Tempo** (1–10) mit tempoabhängiger Punktewertung
- 🧱 **Wände durchlässig** – Torus-Modus (Standard) oder klassische Wände
- 💾 **Autospeichern & Fortsetzen** – Tab mitten im Spiel schließen und später weitermachen
- 🏆 **Einheitliche Arcade-Statistik** – Bestwert, Spiele, Gesamtzeit, geteilt mit dem Portal
- ⏱️ **Pausenbewusster Spieltimer**
- 🌗 **Dunkles / helles Design**, für alle Arcade-Spiele gemeinsam (Taste **T**)
- 🌍 **Drei Sprachen** – Englisch, Ungarisch und Deutsch; Umschalten in der Kopfleiste oder in den Einstellungen (auch per `?lang=en|hu|de` im Link); Zahlen folgen der Gruppierung der Sprache
- 🦷 **Zahnmodus** – ein Schalter „Fogas mód“ / "Dental mode" / „Zahnmodus“ in den Einstellungen, standardmäßig aus (oder `?dental=1`), für die ganze Arcade gemeinsam: Der Kopf ist ein lächelnder Zahn, der Körper eine Reihe von Zähnen und das Futter ein Zahnpastatropfen; nur Optik
- 🤖 **Attract-Modus-Demo** (`<SnakeDemo />`) – die echte Engine, gesteuert von einem BFS-Autopiloten, auf der Startseite des Portals
- ⌨️ **Tastatur zuerst**; Hotkeys werden ignoriert, solange du in ein Formularfeld tippst
- 📖 **Regeln-Dialog** mit Diagramm (beim Öffnen pausiert das Spiel)
- 🏁 **Vorzeitig beenden** – eine Runde bewusst beenden und den aktuellen Punktestand in die Bestenliste eintragen
- 📱 **Touch-Spiel** – Wischen auf dem Spielfeld, Pfeiltasten auf dem Bildschirm, Antippen zum Starten
- ⛶ **Vollbild**-Knopf (auf dem iPhone als CSS-Vollbildmodus)
- 🧪 **Getestet** – reine Logik-Unit-Tests plus Komponententests mit Vitest + Testing Library

## 🚀 Schnellstart

Benötigt **Node ≥ 20** und npm.

```bash
git clone https://github.com/ZoliQua/Snake-Game.git
cd Snake-Game
npm install
npm run dev          # http://localhost:5173
```

Produktions-Build: `npm run build && npm run preview`. Der Build nutzt relative Asset-Pfade, daher kann `dist/` aus jedem Unterordner ausgeliefert werden.

## ⌨️ Steuerung

| Taste | Aktion |
| --- | --- |
| ⬆️ ⬇️ ⬅️ ➡️ / **W A S D** | Steuern |
| **Leertaste** / **Enter** | Start · Pause · Weiter |
| **P** / **Esc** | Pause / Weiter |
| **R** | Neustart |
| **T** | Dunkles / helles Design umschalten (eigenständige Seite) |

**Auf dem Handy:** Wische irgendwo auf dem Spielfeld, um abzubiegen (Drehungen werden wie Tastendrücke vorgemerkt), oder nutze die vier Pfeiltasten unter dem Spielfeld; tippe auf das Spielfeld, um zu starten. Die Knöpfe **Regeln**, **Beenden** und **Vollbild** findest du im Panel „Spiel“. Auf dem iPhone kannst du die Seite zum Home-Bildschirm hinzufügen, dann läuft sie ohne Browserleisten.

## 🎯 Punkte & Statistik

Jedes Futterstück bringt **N Punkte bei Tempo N** (Tempoänderungen gelten ab dem nächsten Futterstück).

| Tempo | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Takt (ms) | 300 | 260 | 225 | 195 | 170 | **150** | 130 | 110 | 90 | 70 |
| Punkte / Futterstück | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 |

Endet eine Runde, speichert das Kit sie einmalig im `localStorage` unter `arcade.stats.snake`
(`best`, `plays`, `wins`, `totalScore`, `totalSeconds`, `lastScore`, `lastPlayedAt`).
Der alte Schlüssel `snake.highScore` wird synchron gehalten, sodass ältere Builds ihren Rekord behalten.

## 💾 Autospeichern & Fortsetzen

Während einer Runde wird etwa einmal pro Sekunde gespeichert, außerdem wenn die Seite verborgen oder das Spiel entladen wird
(Schlüssel `arcade.session.snake`, mit Schema-Version und beim Laden geprüft). Nach einem Neuladen erscheint **Willkommen zurück**
mit der pausierten, wiederhergestellten Runde. **Verwerfen** neben dem Hinweis *Gespeichert* löscht den Speicherstand. Beendete Runden löschen ihren Speicherstand automatisch.

## 🧩 Einbindung in Arcade-Game-Center

```tsx
import { SnakeGame, SnakeDemo } from '@arcade/snake';

<SnakeGame
  embedded                                   // Seitentitel ausblenden; das Portal zeigt ihn
  onGameOver={(score, info) => submitScore('snake', score)}   // info.finished: vorzeitig beendet
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<SnakeDemo active={cardIsVisible} />          // Attract-Modus auf der Startseite
```

Beide Komponenten folgen dem gemeinsamen Vertrag `ArcadeGameProps` / `ArcadeDemoProps` aus `src/arcade/types.ts`.

## 🧠 So funktioniert es

Zustandsautomat: `idle → running ↔ paused → gameOver → (Neustart) → running`.

Eine einzige reine Funktion, `advanceGame(state, rng)`, steuert einen Tick:

1. Die vorgemerkte Richtung auflösen (180°-Umkehr wird gegen die **zuletzt angewendete** Richtung blockiert).
2. Den nächsten Kopf berechnen; ihn umbrechen oder die Runde bei Wandkontakt beenden.
3. Selbstkollision gegen den Körper prüfen, **nachdem** der Schwanz weitergerückt ist (das Betreten der vom Schwanz verlassenen Zelle ist erlaubt).
4. Bei Futter wachsen und punkten, sonst den Schwanz nachziehen; ein volles Feld beendet die Runde als Sieg.

`useGameLoop` lässt ein Intervall nur im Spielzustand laufen und liest den aktuellen Callback aus einem Ref (keine veralteten Closures).
`useKeyboardDirection` hängt für die gesamte Lebensdauer der Komponente genau einen Window-Listener an.

## 🧪 Skripte

| Skript | Zweck |
| --- | --- |
| `npm run dev` | Vite-Entwicklungsserver |
| `npm run build` | Typprüfung (`tsc -b`) und Produktions-Build |
| `npm run preview` | Produktions-Build ausliefern |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (Logik- + Komponententests) |
| `npm run check` | lint → typecheck → test → build (das, was die CI ausführt) |

## 🏗️ Architektur

```
src/
  arcade/            eingebundenes Zoltan's-Arcade-Kit – hier nicht editieren (siehe dessen README)
  logic/             reine Spielregeln
    types.ts constants.ts snake.ts food.ts collision.ts
    game.ts          advanceGame + createInitialState + isBoardFull
    autopilot.ts     BFS-Steuerung für die Demo
    persist.ts       Laufzeitprüfung gespeicherter Sitzungen
  hooks/             useGameLoop, useKeyboardDirection
  components/        GameBoard (voll + mini), SpeedControl, WrapToggle
  demo/SnakeDemo.tsx Attract-Modus der Startseite
  rules.tsx          Regeln-Dialog-Inhalt und Diagramm
  SnakeGame.tsx      das einbettbare Spiel (ArcadeGameProps)
  App.tsx            eigenständige Seite: <ArcadeShell><SnakeGame/></ArcadeShell>
  main.tsx           Einstieg; lädt die gemeinsame arcade.css einmal
  index.ts           Paket-Einstieg für Arcade-Game-Center
```

## 🤝 Mitwirken

Siehe [CONTRIBUTING.md](./CONTRIBUTING.md), den [Verhaltenskodex](./CODE_OF_CONDUCT.md) und [SECURITY.md](./SECURITY.md).
Mitwirkende stehen in [CONTRIBUTORS.md](./CONTRIBUTORS.md); Änderungen in [CHANGELOG.md](./CHANGELOG.md).

## ⚖️ Lizenz

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Mit ❤️ gemacht von Zoltán Dul · Teil von <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a></p>
