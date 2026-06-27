require("dotenv").config();

const connectDB =
    require(
        "./database/db"
    );

connectDB();

const express = require("express");
const cors = require("cors");
const path = require("path");

// Routes
const retrievalRoutes = require("./routes/retrievalRoutes");
const classificationRoutes = require("./routes/classificationRoutes");
const articleRoutes = require("./routes/articleRoutes");
const knowledgeGraphRoutes = require("./routes/knowledgeGraphRoutes");
const legalLLMRoutes = require("./routes/legalLLMRoutes");

// Middleware
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/health", (req, res) => {
res.status(200).json({
success: true,
project: "ICJIP",
version: "1.0",
status: "Running"
});
});

const QueryHistory =
    require(
        "./models/QueryHistory"
    );

app.get(
    "/all-logs",
    async (
        req,
        res
    ) => {

        const data =
            await QueryHistory.find();

        res.json(
            data
        );

    }
);


// API Routes
app.use("/api/retrieval", retrievalRoutes);
app.use("/api/classification", classificationRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/knowledge-graph", knowledgeGraphRoutes);
app.use("/api/legal-llm",legalLLMRoutes);

// Serve React frontend static files (from build output)
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback — any non-API route serves index.html for React Router
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`🚀 ICJIP Backend Running On Port ${PORT}`);
});
