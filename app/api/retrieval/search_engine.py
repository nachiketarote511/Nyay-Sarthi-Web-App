import os
import faiss
import numpy as np
import pandas as pd

from sentence_transformers import SentenceTransformer


print("Loading Retrieval Model...")

# --------------------------------------------------
# PATHS
# --------------------------------------------------

BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

INDEX_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/retrieval/faiss_index.bin"
    )
)

SUMMARY_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/retrieval/summaries_only.parquet"
    )
)

# --------------------------------------------------
# LOAD MODEL
# --------------------------------------------------

model = SentenceTransformer(
    "BAAI/bge-small-en-v1.5"
)

print("Embedding Model Loaded")

# --------------------------------------------------
# LOAD FAISS INDEX
# --------------------------------------------------

index = faiss.read_index(
    INDEX_PATH
)

print("FAISS Index Loaded")

# --------------------------------------------------
# LOAD DATASET
# --------------------------------------------------

summaries = pd.read_parquet(
    SUMMARY_PATH
)

print(
    f"Loaded {len(summaries)} summaries"
)

# --------------------------------------------------
# SEARCH FUNCTION
# --------------------------------------------------

def search_cases(
    query: str,
    top_k: int = 5
):

    query_embedding = model.encode(
        [query]
    )

    query_embedding = np.array(
        query_embedding,
        dtype=np.float32
    )

    distances, indices = index.search(
        query_embedding,
        top_k
    )

    results = []

    for idx, score in zip(
        indices[0],
        distances[0]
    ):

        row = summaries.iloc[idx]

        results.append({

            "case_name":
                str(row["case_name"]),

            "year":
                int(row["year"]),

            "legal_summary":
                str(row["legal_summary"]),

            "score":
                float(score)

        })

    return results

if __name__ == "__main__":

    results = search_cases(
        "fundamental rights"
    )

    for result in results:

        print("=" * 50)

        print(
            result["case_name"]
        )

        print(
            result["year"]
        )