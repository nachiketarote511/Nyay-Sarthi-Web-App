import pandas as pd
import re

df = pd.read_csv("sample_100_cases.csv")

def get_date(text):
    match = re.search(
        r"DATE OF JUDGMENT:\s*([^\n]+)",
        str(text),
        re.IGNORECASE
    )

    if match:
        return match.group(1).strip()

    return None

df["judgment_date"] = df["text"].apply(get_date)

print(df[["case_name", "judgment_date"]].head())

df.to_csv(
    "sample_with_metadata.csv",
    index=False
)
