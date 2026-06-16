from fastapi import FastAPI
from pydantic import BaseModel

from search_engine import search_cases

app = FastAPI()


class SearchRequest(BaseModel):

    query: str


@app.post("/search")
def search(request: SearchRequest):

    results = search_cases(
        request.query
    )

    return {

        "success": True,

        "results": results

    }