from datetime import datetime, timezone
from typing import Any

from fastapi import FastAPI
from pydantic import BaseModel, Field


app = FastAPI(title="Python Quest API", version="0.1.0")


class ProgressEvent(BaseModel):
    user_id: str = Field(..., examples=["firebase_uid_123"])
    world_id: str = Field(..., examples=["forest"])
    lesson_id: str = Field(..., examples=["variables-1"])
    xp_delta: int = Field(ge=0)
    combo: int = Field(ge=1)
    metadata: dict[str, Any] = Field(default_factory=dict)


class HintRequest(BaseModel):
    user_id: str
    challenge_id: str
    recent_attempts: list[dict[str, Any]] = Field(default_factory=list)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "python-quest-api"}


@app.post("/progress/events")
def record_progress(event: ProgressEvent) -> dict[str, Any]:
    """Prototype endpoint. Production should persist to PostgreSQL and update Redis leaderboards."""
    return {
        "accepted": True,
        "receivedAt": datetime.now(timezone.utc).isoformat(),
        "event": event.model_dump(),
    }


@app.post("/ai/hints")
def generate_hint(request: HintRequest) -> dict[str, str]:
    """Prototype hint endpoint. Production can call an AI tutor service with adaptive context."""
    if len(request.recent_attempts) >= 2:
        hint = "Slow down and trace the variable values one line at a time."
    else:
        hint = "Look at the operator and ask what value it creates before the next line runs."
    return {"challengeId": request.challenge_id, "hint": hint}
