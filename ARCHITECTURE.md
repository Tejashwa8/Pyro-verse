# Python Quest Architecture

Python Quest is implemented here as a self-contained playable prototype in `index.html`, `styles.css`, and `app.js`.

## Current Prototype

- World map with six Python concept worlds.
- Learn, Watch, Try, and Feedback lesson loop.
- Pyro mascot reactions, XP, combo, badges, streaks, collectibles, and skill tree.
- Local save through `localStorage`.
- Python-like visual simulator for assignments, `print()`, simple comparisons, `if/else`, `range()` loops, lists, and indexing.
- JSON lesson content model in `lessons.json`.

## Production Target

Frontend:

- Next.js app router for routes such as `/map`, `/world/[id]`, `/lesson/[id]`, `/arena`, and `/raid`.
- Tailwind CSS and Framer Motion for responsive holographic UI and animation choreography.
- Three.js for world scenes, boss arenas, robot assembly, and animated memory visualizations.
- Monaco Editor for code editing and syntax highlighting.
- Pyodide running in a Web Worker for safe client-side Python execution.

Backend:

- FastAPI service for progress, lesson assignment, AI hint retrieval, classroom mode, and analytics ingestion.
- PostgreSQL for users, worlds, lessons, challenges, attempts, inventory, achievements, and cloud saves.
- Redis for leaderboard ranks, live XP, speed coding timers, guild stats, and temporary multiplayer rooms.
- Firebase Authentication for Google and GitHub login.
- Cloudinary for cutscenes, animated environments, audio, sprites, and generated asset variants.

## Suggested Tables

- `users`: profile, auth provider id, avatar, rank, preferences.
- `worlds`: static world metadata and unlock rules.
- `lessons`: JSON lesson payloads, difficulty, prerequisites.
- `challenges`: challenge type, expected answer, hints, XP reward.
- `attempts`: user answer, correctness, retries, elapsed time, hint count.
- `progress`: world status, checkpoints, current lesson, streak.
- `achievements`: badges, earned timestamp, source challenge.
- `inventory`: collectibles, avatars, lore items, equipped cosmetics.
- `analytics_events`: event name, metadata JSON, session id.

## Pyodide Execution Plan

Run Pyodide in a dedicated Web Worker with:

- Timeouts for long or infinite loops.
- Captured stdout and stderr.
- Restricted imports.
- Step tracing through `sys.settrace` for variable updates, loops, function calls, and line highlights.
- A message protocol that streams `stdout`, `error`, `memory_update`, `line_hit`, `function_call`, and `complete` events back to the UI.

## Lesson JSON Shape

```json
{
  "id": "variables-1",
  "worldId": "forest",
  "title": "Variables",
  "lesson": "Variables store values.",
  "analogy": "A labeled energy box.",
  "challengeType": "predict-output",
  "starterCode": "name = \"Pyro\"\nprint(name)",
  "answer": "Pyro",
  "xpReward": 50,
  "hints": ["Look at what print receives."],
  "assets": {
    "intro": "cloudinary://python-quest/worlds/forest/variables-intro.webm"
  }
}
```
