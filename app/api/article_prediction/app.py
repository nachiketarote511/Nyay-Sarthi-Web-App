from fastapi import FastAPI
from pydantic import BaseModel

from predictor import predict_article

app = FastAPI()


class ArticleRequest(BaseModel):
    text: str


@app.post("/predict")
def predict(request: ArticleRequest):

    result = predict_article(
        request.text
    )

    return {
        "success": True,
        "result": result
    }