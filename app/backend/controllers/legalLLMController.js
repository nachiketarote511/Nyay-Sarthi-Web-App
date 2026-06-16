const {
    askLegalLLM
} = require(
    "../services/legalLLMService"
);

const askQuestion = async (
    req,
    res,
    next
) => {

    try {

        const {
            query
        } = req.body;

        const result =
            await askLegalLLM(
                query
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

    askQuestion

};