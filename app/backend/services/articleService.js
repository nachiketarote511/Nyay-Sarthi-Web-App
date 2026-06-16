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

const articleService = async (
    text
) => {

    const result =
        await callPythonAPI(
            "http://127.0.0.1:8002/predict",
            {
                text
            }
        );

    await saveQuery(

        text,

        "article_prediction",

        result

    );

    return result;

};

module.exports = {

    articleService

};