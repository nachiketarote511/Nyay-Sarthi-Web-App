import os
import joblib


BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

MODEL_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/article_predictor/article_model.pkl"
    )
)

VECTORIZER_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/article_predictor/tfidf_vectorizer.pkl"
    )
)

ENCODER_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/article_predictor/label_encoder.pkl"
    )
)


model = joblib.load(
    MODEL_PATH
)

vectorizer = joblib.load(
    VECTORIZER_PATH
)

label_encoder = joblib.load(
    ENCODER_PATH
)

print("Article Prediction Model Loaded")


def predict_article(text):

    text_vector = vectorizer.transform(
        [text]
    )

    prediction = model.predict(
        text_vector
    )

    article = label_encoder.inverse_transform(
        prediction
    )[0]

    return {
        "article":
            str(article)
    }
