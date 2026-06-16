import {
    Grid,
    Paper,
    Typography
} from "@mui/material";

function Dashboard() {

    const cards = [

        {
            title:
                "Retrieval Engine",
            value:
                "26688 Judgments"
        },

        {
            title:
                "Classification",
            value:
                "Ready"
        },

        {
            title:
                "Article Predictor",
            value:
                "Ready"
        },

        {
            title:
                "Knowledge Graph",
            value:
                "Ready"
        }

    ];

    return (

        <>

            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    fontWeight: "bold"
                }}
            >

                ICJIP Dashboard

            </Typography>

            <Grid
                container
                spacing={3}
            >

                {

                    cards.map(

                        (
                            card,
                            index
                        ) => (

                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={3}
                                key={index}
                            >

                                <Paper

                                    sx={{

                                        p: 3,

                                        background:
                                            "#1e293b",

                                        color:
                                            "white",

                                        borderRadius:
                                            "20px"

                                    }}

                                >

                                    <Typography
                                        variant="h6"
                                    >

                                        {

                                            card.title

                                        }

                                    </Typography>

                                    <Typography

                                        variant="h5"

                                        sx={{

                                            mt: 2

                                        }}

                                    >

                                        {

                                            card.value

                                        }

                                    </Typography>

                                </Paper>

                            </Grid>

                        )

                    )

                }

            </Grid>

            <Grid

                container

                spacing={3}

                sx={{

                    mt: 2

                }}

            >

                <Grid
                    item
                    xs={12}
                    md={8}
                >

                    <Paper

                        sx={{

                            p: 3,

                            background:
                                "#1e293b",

                            color:
                                "white",

                            borderRadius:
                                "20px",

                            minHeight:
                                "300px"

                        }}

                    >

                        <Typography
                            variant="h6"
                        >

                            Recent Queries

                        </Typography>

                    </Paper>

                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Paper

                        sx={{

                            p: 3,

                            background:
                                "#1e293b",

                            color:
                                "white",

                            borderRadius:
                                "20px",

                            minHeight:
                                "300px"

                        }}

                    >

                        <Typography
                            variant="h6"
                        >

                            System Status

                        </Typography>

                        <br />

                        <Typography>

                            MongoDB:
                            Connected

                        </Typography>

                        <Typography>

                            Backend:
                            Running

                        </Typography>

                        <Typography>

                            Legal LLM:
                            Ready

                        </Typography>

                    </Paper>

                </Grid>

            </Grid>

        </>

    );

}

export default Dashboard;