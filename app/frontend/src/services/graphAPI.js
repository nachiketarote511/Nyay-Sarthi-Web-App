import axios from "axios";

const API = axios.create({

    baseURL:
        "http://localhost:5000"

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