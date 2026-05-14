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


class WorkflowEvent(BaseModel):
    user_id: str
    event_name: str = Field(..., examples=["challenge_solved"])
    payload: dict[str, Any] = Field(default_factory=dict)


class AgentMemoryRequest(BaseModel):
    user_id: str
    weak_topics: list[str] = Field(default_factory=list)
    retry_count: int = Field(ge=0, default=0)
    solved_count: int = Field(ge=0, default=0)
    accuracy: float = Field(ge=0, le=1, default=1)


class MissionGenerationRequest(BaseModel):
    user_id: str
    topic: str
    difficulty: str = Field(default="beginner")
    agent_memory: dict[str, Any] = Field(default_factory=dict)


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


@app.post("/automation/n8n/events")
def emit_n8n_event(event: WorkflowEvent) -> dict[str, Any]:
    """Future integration point for n8n webhooks and event-driven gameplay workflows."""
    return {
        "queued": True,
        "workflow": "python-quest-gameplay-events",
        "event": event.model_dump(),
    }


@app.post("/ai/langchain/mission")
def generate_langchain_mission(request: MissionGenerationRequest) -> dict[str, Any]:
    """Future LangChain chain: retrieve memory, build prompt, call model, validate challenge JSON."""
    return {
        "mission": {
            "title": f"{request.topic.title()} Adaptive Drill",
            "difficulty": request.difficulty,
            "objective": f"Write a short Python solution that practices {request.topic}.",
            "hintPolicy": ["small-hint", "medium-hint", "full-explanation", "show-solution"],
        }
    }


@app.post("/ai/langgraph/memory")
def update_langgraph_memory(request: AgentMemoryRequest) -> dict[str, Any]:
    """Future LangGraph node: update persistent learner state and choose the next tutoring action."""
    if request.accuracy < 0.5:
        next_action = "recommend_revision"
    elif request.retry_count > request.solved_count:
        next_action = "generate_debug_mission"
    else:
        next_action = "advance_difficulty"
    return {
        "userId": request.user_id,
        "nextAction": next_action,
        "memoryPatch": request.model_dump(),
    }
