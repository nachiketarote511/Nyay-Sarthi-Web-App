const {
    graphService
} = require(
    "../services/knowledgeGraphService"
);

const getCaseInfo = async (
    req,
    res,
    next
) => {

    try {

        const {
            caseName
        } = req.body;

        const result =
            await graphService(
                caseName
            );

        res.json(
            result
        );

    }

    catch (error) {

        next(error);

    }

};

module.exports = {

    getCaseInfo

};