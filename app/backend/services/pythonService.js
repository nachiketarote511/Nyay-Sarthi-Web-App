const axios = require("axios");

const callPythonAPI = async (url, payload) => {

    const response = await axios.post(
        url,
        payload
    );

    return response.data;
};

module.exports = {
    callPythonAPI
};