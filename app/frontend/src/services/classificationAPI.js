import axios from "axios";

const API = axios.create({

    baseURL:
        "http://localhost:5000"

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