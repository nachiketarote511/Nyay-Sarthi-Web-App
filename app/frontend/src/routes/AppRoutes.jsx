import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";

import Retrieval from "../pages/Retrieval/Retrieval";

import Classification from "../pages/Classification/Classification";

import ArticlePrediction from "../pages/ArticlePrediction/ArticlePrediction";

import KnowledgeGraph from "../pages/KnowledgeGraph/KnowledgeGraph";

import LegalAssistant from "../pages/LegalAssistant/LegalAssistant";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<MainLayout />}
                >

                    <Route
                        index
                        element={<Dashboard />}
                    />

                    <Route
                        path="retrieval"
                        element={<Retrieval />}
                    />

                    <Route
                        path="classification"
                        element={<Classification />}
                    />

                    <Route
                        path="article"
                        element={<ArticlePrediction />}
                    />

                    <Route
                        path="graph"
                        element={<KnowledgeGraph />}
                    />

                    <Route
                        path="assistant"
                        element={<LegalAssistant />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;