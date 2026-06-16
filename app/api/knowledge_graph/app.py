from fastapi import FastAPI
from pydantic import BaseModel

from graph_service import get_case_info

app = FastAPI()


class GraphRequest(BaseModel):
    case_name: str


@app.post("/case")
def get_case(request: GraphRequest):

    result = get_case_info(
        request.case_name
    )

    return {
        "success": True,
        "result": result
    }