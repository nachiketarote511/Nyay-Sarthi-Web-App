const {
    articleService
} = require(
    "../services/articleService"
);

const predictArticle = async (
    req,
    res,
    next
) => {

    try {

        const {
            text
        } = req.body;

        const result =
            await articleService(
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

    predictArticle

};