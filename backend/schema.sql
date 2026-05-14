CREATE TABLE users (
  id UUID PRIMARY KEY,
  firebase_uid TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  avatar_key TEXT,
  rank_name TEXT NOT NULL DEFAULT 'Code Beginner',
  xp INTEGER NOT NULL DEFAULT 0,
  streak_days INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE worlds (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  theme TEXT NOT NULL,
  boss_name TEXT NOT NULL,
  unlock_xp INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE lessons (
  id TEXT PRIMARY KEY,
  world_id TEXT NOT NULL REFERENCES worlds(id),
  title TEXT NOT NULL,
  difficulty INTEGER NOT NULL DEFAULT 1,
  lesson_payload JSONB NOT NULL,
  asset_manifest JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE challenges (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  challenge_type TEXT NOT NULL,
  prompt TEXT NOT NULL,
  answer JSONB NOT NULL,
  hints JSONB NOT NULL DEFAULT '[]'::jsonb,
  xp_reward INTEGER NOT NULL DEFAULT 50
);

CREATE TABLE user_progress (
  user_id UUID NOT NULL REFERENCES users(id),
  world_id TEXT NOT NULL REFERENCES worlds(id),
  lesson_id TEXT REFERENCES lessons(id),
  status TEXT NOT NULL DEFAULT 'active',
  checkpoint JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, world_id)
);

CREATE TABLE challenge_attempts (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  challenge_id TEXT NOT NULL REFERENCES challenges(id),
  is_correct BOOLEAN NOT NULL,
  answer JSONB NOT NULL,
  elapsed_ms INTEGER NOT NULL,
  hint_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  xp_bonus INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE user_achievements (
  user_id UUID NOT NULL REFERENCES users(id),
  achievement_id TEXT NOT NULL REFERENCES achievements(id),
  earned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, achievement_id)
);

CREATE TABLE inventory_items (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  item_type TEXT NOT NULL,
  asset_url TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE user_inventory (
  user_id UUID NOT NULL REFERENCES users(id),
  item_id TEXT NOT NULL REFERENCES inventory_items(id),
  acquired_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  equipped BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (user_id, item_id)
);

CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  event_name TEXT NOT NULL,
  session_id TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_attempts_user_created ON challenge_attempts(user_id, created_at DESC);
CREATE INDEX idx_analytics_event_created ON analytics_events(event_name, created_at DESC);
