import os
import joblib


BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

MODEL_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/classification/logistic_regression.pkl"
    )
)

VECTORIZER_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/classification/tfidf_vectorizer.pkl"
    )
)


model = joblib.load(
    MODEL_PATH
)

vectorizer = joblib.load(
    VECTORIZER_PATH
)

print("Classification Model Loaded")


def predict_category(text):

    text_vector = vectorizer.transform(
        [text]
    )

    prediction = model.predict(
        text_vector
    )[0]

    return {
        "category":
            str(prediction)
    }
