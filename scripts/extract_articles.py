import pandas as pd
import re

# CSV load kar
df = pd.read_parquet("sample_1000_cases.parquet")

# Article extraction function
def extract_articles(text):

    if pd.isna(text):
        return []

    pattern = r'Article\s+(\d+[A-Z]?)'

    matches = re.findall(pattern, str(text))

    return list(set(matches))

# New column
df["articles"] = df["text"].apply(extract_articles)

# Sample output
print(df[["case_name", "articles"]].head(10))

# Save
df.to_csv(
    "sample_1000_cases_article.csv",
    index=False
)

print("Done")