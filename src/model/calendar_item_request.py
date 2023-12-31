import datetime
from pydantic import BaseModel
from typing import Optional


class CalendarItemRequest(BaseModel):
    exercise_id: Optional[int]
    treatment_id: Optional[int]
    horse_id: int
    date: datetime.date
