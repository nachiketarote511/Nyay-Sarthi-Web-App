import pandas as pd
import re

df = pd.read_parquet("sample_1000_cases.parquet")

def extract_citations(text):

    pattern = r'\b\d{4}\s+SC\s+\d+\b'

    matches = re.findall(
        pattern,
        str(text)
    )

    return list(set(matches))

df["citations"] = df["text"].apply(
    extract_citations
)

print(
    df[["case_name","citations"]]
    .head(20)
)

df.to_csv(
    "sample_1000_cases_citations.csv",
    index=False
)