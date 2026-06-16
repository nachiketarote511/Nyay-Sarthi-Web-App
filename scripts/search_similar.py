import numpy as np
import pandas as pd
import faiss

# Load data
df = pd.read_parquet("clean_1000_cases.parquet")

# Load embeddings
embeddings = np.load("embeddings_100.npy")

# Normalize
faiss.normalize_L2(embeddings)

# Load index
index = faiss.read_index("legal_index_100.faiss")

# Query case
query_id = 0

query_vector = embeddings[query_id].reshape(1, -1)

k = 6

scores, indices = index.search(
    query_vector,
    k
)

print("\nQuery Case:")
print(df.iloc[query_id]["case_name"])

print("\nMost Similar Cases:\n")

for rank, idx in enumerate(indices[0]):

    print(
        f"{rank+1}.",
        df.iloc[idx]["case_name"],
        "| Score:",
        round(float(scores[0][rank]), 4)
    )
for rank, idx in enumerate(indices[0]):

    print(
        rank,
        idx,
        df.iloc[idx]["case_name"]
    )