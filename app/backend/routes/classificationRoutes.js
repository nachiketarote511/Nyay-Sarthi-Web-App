const express = require(
    "express"
);

const router =
    express.Router();

const {
    classifyText
} = require(
    "../controllers/classificationController"
);

router.post(
    "/predict",
    classifyText
);

// router.get(
//     "/test",
//     (req, res) => {

//         res.json({
//             success: true,
//             message: "Classification Route Working"
//         });

//     }
// );

module.exports =
    router;