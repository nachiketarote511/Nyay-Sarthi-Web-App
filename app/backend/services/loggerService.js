const QueryHistory =
    require(
        "../models/QueryHistory"
    );

const saveQuery = async (

    query,

    module,

    response

) => {

    try {

        await QueryHistory.create({

            query,

            module,

            response

        });

    }

    catch (error) {

        console.log(
            error.message
        );

    }

};

module.exports = {

    saveQuery

};