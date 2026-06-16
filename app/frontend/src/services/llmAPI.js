import axios from "axios";

const API = axios.create({

    baseURL:
        "http://localhost:5000"

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