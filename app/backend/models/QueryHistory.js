const mongoose = require(
    "mongoose"
);

const queryHistorySchema =
    new mongoose.Schema({

        query: {

            type: String,

            required: true

        },

        module: {

            type: String,

            required: true

        },

        response: {

            type: Object,

            required: true

        }

    },

    {

        timestamps: true

    }

);

module.exports =
    mongoose.model(

        "QueryHistory",

        queryHistorySchema

    );