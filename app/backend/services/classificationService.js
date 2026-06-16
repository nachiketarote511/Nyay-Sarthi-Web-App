const {
    callPythonAPI
} = require(
    "./pythonService"
);

const {
    saveQuery
} = require(
    "./loggerService"
);

const classifyService = async (
    text
) => {

    const result =
        await callPythonAPI(
            "http://127.0.0.1:8001/predict",
            {
                text
            }
        );

    await saveQuery(

        text,

        "classification",

        result

    );

    return result;

};

module.exports = {

    classifyService

};