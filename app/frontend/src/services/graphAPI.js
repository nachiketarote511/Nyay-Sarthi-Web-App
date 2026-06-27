import axios from "axios";

const API = axios.create({

    baseURL:
        import.meta.env.VITE_API_URL || ""

});

export const getCaseGraph =
    async (caseName) => {

        const response =
            await API.post(

                "/api/knowledge-graph/case",

                {
                    caseName
                }

            );

        return response.data;

    };