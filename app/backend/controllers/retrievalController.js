const {
    searchService
} = require(
    "../services/retrievalService"
);

const searchCases = async (
    req,
    res
) => {

    try {

        const {
            query
        } = req.body;

        const result =
            await searchService(
                query
            );

        res.json(
            result
        );

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

module.exports = {

    searchCases

};