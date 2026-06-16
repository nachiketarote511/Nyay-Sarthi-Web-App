const {
    classifyService
} = require(
    "../services/classificationService"
);

const classifyText = async (
    req,
    res,
    next
) => {

    try {

        const {
            text
        } = req.body;

        const result =
            await classifyService(
                text
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

    classifyText

};