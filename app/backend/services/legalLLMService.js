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

const askLegalLLM = async (
    query
) => {

    const result =
        await callPythonAPI(
            "http://20.244.40.232:8004/ask",
            {
                query
            }
        );

    await saveQuery(

        query,

        "legal_llm",

        result

    );

    return result;

};

module.exports = {

    askLegalLLM

};