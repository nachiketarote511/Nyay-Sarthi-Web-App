import axios from "axios";

const API =
    axios.create({

        baseURL:
            import.meta.env.VITE_API_URL || ""

    });

export const searchJudgments =
    async (query) => {

        const response =
            await API.post(

                "/api/retrieval/search",

                {
                    query
                }

            );

        return response.data;

    };