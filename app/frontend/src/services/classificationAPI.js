import axios from "axios";

const API = axios.create({

    baseURL:
        import.meta.env.VITE_API_URL || ""

});

export const classifyText =
    async (text) => {

        const response =
            await API.post(

                "/api/classification/predict",

                {
                    text
                }

            );

        return response.data;

    };