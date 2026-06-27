import axios from "axios";

const API = axios.create({

    baseURL:
        import.meta.env.VITE_API_URL || ""

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