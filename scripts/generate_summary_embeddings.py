import pandas as pd
import numpy as np
import torch
import time

from sentence_transformers import SentenceTransformer

# ==========================
# LOAD DATA
# ==========================

df = pd.read_parquet(
    "legal_summary_v2_1000.parquet"
)

texts = df["legal_summary"].fillna("").tolist()

print("Cases:", len(texts))

# ==========================
# GPU CHECK
# ==========================

device = "cuda" if torch.cuda.is_available() else "cpu"

print("Device:", device)

if device == "cuda":
    print(
        "GPU:",
        torch.cuda.get_device_name(0)
    )

# ==========================
# LOAD MODEL
# ==========================

start = time.time()

model = SentenceTransformer(
    "BAAI/bge-small-en-v1.5",
    device=device
)

# ==========================
# GENERATE EMBEDDINGS
# ==========================

embeddings = model.encode(
    texts,
    batch_size=32,
    show_progress_bar=True,
    convert_to_numpy=True,
    normalize_embeddings=True
)

# ==========================
# SAVE
# ==========================

np.save(
    "embeddings_1000_summary.npy",
    embeddings
)

end = time.time()

print("\nEmbedding Shape:", embeddings.shape)
print("Time Taken:", round(end-start, 2), "seconds")
print("Saved: embeddings_1000_summary.npy")