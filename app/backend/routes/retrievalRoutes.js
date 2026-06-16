const express = require("express");

const router = express.Router();

const {
    searchCases
} = require(
    "../controllers/retrievalController"
);

router.post(
    "/search",
    searchCases
);

module.exports = router;