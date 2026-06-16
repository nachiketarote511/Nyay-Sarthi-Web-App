import axios from "axios";

const API =
    axios.create({

        baseURL:
            "http://localhost:5000"

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