const express = require(
    "express"
);

const router =
    express.Router();

const {
    predictArticle
} = require(
    "../controllers/articleController"
);

router.post(
    "/predict",
    predictArticle
);

module.exports =
    router;