import pandas as pd
import re

df = pd.read_csv("sample_1000_cases.csv")

def clean_text(text):

    text = str(text)

    text = re.sub(r'\s+', ' ', text)

    text = text.strip()

    return text

df["clean_text"] = df["text"].apply(clean_text)

print(df["clean_text"].iloc[0][:500])

df.to_parquet(
    "clean_1000_cases.parquet",
    index=False
)

print("Saved:", len(df))