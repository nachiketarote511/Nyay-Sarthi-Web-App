import axios from "axios";

const API = axios.create({

    baseURL:
        import.meta.env.VITE_API_URL || ""

});

export const askLLM =
    async (query) => {

        const response =
            await API.post(

                "/api/legal-llm/ask",

                {
                    query
                }

            );

        return response.data;

    };