import os
import joblib


BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

GRAPH_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "../../../models/legal_knowledge_graph/knowledge_graph.pkl"
    )
)

G = joblib.load(
    GRAPH_PATH
)

print("Knowledge Graph Loaded")


def get_case_info(case_name):

    if case_name not in G:

        return {
            "found": False
        }

    neighbors = list(
        G.neighbors(case_name)
    )

    return {

        "found": True,

        "case_name":
            case_name,

        "neighbors":
            neighbors

    }