from fastapi import FastAPI
from pydantic import BaseModel

from classifier import predict_category

app = FastAPI()


class ClassificationRequest(BaseModel):
    text: str


@app.post("/predict")
def predict(request: ClassificationRequest):

    result = predict_category(
        request.text
    )

    return {
        "success": True,
        "result": result
    }