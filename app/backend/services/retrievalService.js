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

const searchService = async (
    query
) => {

    const result =
        await callPythonAPI(

            "http://127.0.0.1:8000/search",

            {
                query
            }

        );

    await saveQuery(

        query,

        "retrieval",

        result

    );

    return result;

};

module.exports = {

    searchService

};