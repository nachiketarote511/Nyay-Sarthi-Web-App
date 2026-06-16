import axios from "axios";

const API = axios.create({

    baseURL:
        "http://localhost:5000"

});

export const predictArticle =
    async (text) => {

        const response =
            await API.post(

                "/api/article/predict",

                {
                    text
                }

            );

        return response.data;

    };