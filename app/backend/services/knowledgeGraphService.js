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

const graphService = async (
    caseName
) => {

    const result =
        await callPythonAPI(
            "http://127.0.0.1:8003/case",
            {
                case_name: caseName
            }
        );

    await saveQuery(

        caseName,

        "knowledge_graph",

        result

    );

    return result;

};

module.exports = {

    graphService

};