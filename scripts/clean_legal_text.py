import pandas as pd
import re

df = pd.read_parquet("clean_1000_cases.parquet")

def clean_legal_text(text):

    text = str(text)

    # PETITIONER section remove
    text = re.sub(
        r'PETITIONER:.*?RESPONDENT:',
        ' ',
        text,
        flags=re.IGNORECASE | re.DOTALL
    )

    # DATE OF JUDGMENT remove
    text = re.sub(
        r'DATE OF JUDGMENT:.*?ACT:',
        'ACT:',
        text,
        flags=re.IGNORECASE | re.DOTALL
    )

    # CITATOR INFO remove
    text = re.sub(
        r'CITATOR INFO\s*:.*?ACT:',
        'ACT:',
        text,
        flags=re.IGNORECASE | re.DOTALL
    )

    # Indian Kanoon URL remove
    text = re.sub(
        r'Indian Kanoon.*?\d+',
        ' ',
        text,
        flags=re.IGNORECASE
    )

    # Multiple spaces remove
    text = re.sub(r'\s+', ' ', text)

    return text.strip()

df["legal_text"] = df["clean_text"].apply(
    clean_legal_text
)

print("\nBefore:\n")
print(df.iloc[0]["clean_text"][:1000])

print("\n\nAfter:\n")
print(df.iloc[0]["legal_text"][:1000])

df.to_parquet(
    "legal_clean_1000_cases.parquet",
    index=False
)

print("\nSaved legal_clean_1000_cases.parquet") 