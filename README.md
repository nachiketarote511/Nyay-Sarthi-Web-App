# ⚖️ Nyay Sarthi - AI Powered Legal Research Platform

Nyay Sarthi is an AI-powered legal research and judicial intelligence platform designed to simplify legal case analysis, judgment retrieval, and legal question answering using Machine Learning, Knowledge Graphs, Vector Search, and Large Language Models.

The platform combines semantic case retrieval, legal document classification, article prediction, legal knowledge graphs, and a fine-tuned legal LLM to assist users in exploring and understanding Indian judicial data.

---

## 🚀 Features

### 🔍 Semantic Case Retrieval

- FAISS-based vector search
- BGE embeddings for semantic similarity
- Retrieval from 26,000+ Indian court judgments
- Fast legal case discovery

### 📂 Legal Case Classification

Automatically classifies judgments into:

- Criminal
- Constitutional
- Civil
- Property
- Contract
- Family
- Service
- Company & Commercial

### 📜 Constitutional Article Prediction

Predicts relevant constitutional articles from legal text.

Examples:

- Article 14
- Article 19
- Article 21
- Article 32
- Article 226

and more.

### 🕸️ Legal Knowledge Graph

Graph-based legal intelligence connecting:

- Cases
- Categories
- Constitutional Articles
- Years

Supports relationship exploration and legal network analysis.

### 🤖 Legal Large Language Model

Custom fine-tuned legal assistant built using:

- Qwen 2.5
- LoRA Fine-Tuning
- Indian Legal Judgments Dataset

Capable of answering legal questions using judicial context.

---

## 📊 Dataset Statistics

| Metric | Count |
|----------|----------|
| Cases | 26,688 |
| Categories | 8 |
| Constitutional Articles | 18 |
| Years Covered | 76 |
| Knowledge Graph Nodes | 26,790 |
| Knowledge Graph Edges | 55,339 |

---

## 🧠 AI Models

### Retrieval Model

```text
BAAI/bge-small-en-v1.5
FAISS Vector Index
```

### Classification Models

```text
TF-IDF + Logistic Regression
DistilBERT Fine-Tuned Model
```

### Article Prediction Model

```text
TF-IDF Based Multi-Class Predictor
```

### Legal LLM

```text
Qwen2.5-3B-Instruct
LoRA Fine-Tuning
```

---

## 🏗️ Architecture

```text
User Query
      │
      ▼
Semantic Retrieval Engine
      │
      ▼
Relevant Legal Cases
      │
      ▼
Knowledge Graph Context
      │
      ▼
Legal LLM
      │
      ▼
AI Generated Legal Response
```

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- FastAPI

### Machine Learning

- PyTorch
- Transformers
- Sentence Transformers
- Scikit-Learn

### Vector Search

- FAISS

### Knowledge Graph

- NetworkX

### Frontend

- React.js
- Tailwind CSS

### Deployment

- Azure Virtual Machine

---

## 📁 Project Structure

```text
app/
│
├── backend/
├── frontend/
├── api/
│   ├── retrieval/
│   ├── classification/
│   ├── article_prediction/
│   ├── knowledge_graph/
│   └── legal_llm/
│
└── models/
    ├── retrieval/
    ├── classification/
    ├── article_predictor/
    ├── legal_knowledge_graph/
    └── legal_llm/
```

---

## 🎯 Future Enhancements

- Full Retrieval Augmented Generation (RAG)
- Multi-Lingual Legal Assistant
- Legal Citation Generation
- Advanced Knowledge Graph Visualization
- Court Judgment Summarization
- Legal Document Analysis

---

## 👨‍💻 Author

**Manu Arote**

Final Year Computer Engineering Student

**Nyay Sarthi – AI Powered Legal Research Platform**
