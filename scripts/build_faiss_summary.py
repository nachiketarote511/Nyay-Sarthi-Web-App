import faiss
import numpy as np

embeddings = np.load(
    "embeddings_1000_summary.npy"
)

dimension = embeddings.shape[1]

index = faiss.IndexFlatIP(
    dimension
)

index.add(
    embeddings.astype("float32")
)

faiss.write_index(
    index,
    "faiss_summary.index"
)

print("Vectors Indexed:", index.ntotal)
print("Dimension:", dimension)