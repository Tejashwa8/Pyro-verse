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
- LangChain chains for code analysis, hint generation, line explanations, and adaptive mission creation.
- LangGraph learner graph for persistent tutor memory, state-based next-step decisions, and multi-step tutoring.
- n8n workflows for daily quest scheduling, XP reward routing, leaderboard updates, streak reminders, and achievement notifications.
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
- `agent_memory`: user weak topics, retry patterns, pace, recommended next action, graph state JSON.
- `workflow_events`: emitted gameplay events awaiting n8n delivery or replay.
- `generated_missions`: AI-created challenges, validation status, source memory snapshot.

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

## AI Automation Expansion

n8n:

- Trigger workflows from events such as `challenge_solved`, `boss_defeated`, `streak_missed`, and `badge_unlocked`.
- Route XP updates, Redis leaderboard mutations, notifications, weekly tournament jobs, and classroom reports.
- Expose workflow status back to the game as visual automation nodes.

LangChain:

- Chain 1: analyze code, compare against challenge rubric, produce structured feedback.
- Chain 2: generate progressive hints from beginner-friendly to full solution.
- Chain 3: create adaptive practice missions from weak topic data.
- Chain 4: summarize line-by-line execution for the tutor panel.

LangGraph:

- Maintain learner state across attempts, worlds, projects, and review sessions.
- Nodes: observe attempt, classify mistake, update memory, choose remediation, generate mission, evaluate mastery.
- Edges branch on accuracy, retries, hint usage, solve speed, and topic coverage.
