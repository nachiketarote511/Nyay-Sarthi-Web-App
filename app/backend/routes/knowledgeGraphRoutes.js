const express = require(
    "express"
);

const router =
    express.Router();

const {
    getCaseInfo
} = require(
    "../controllers/knowledgeGraphController"
);

router.post(
    "/case",
    getCaseInfo
);

module.exports =
    router;