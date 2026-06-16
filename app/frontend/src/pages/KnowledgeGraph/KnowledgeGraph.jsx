import { useState } from "react";

import {
    Typography,
    Paper,
    TextField,
    Button,
    CircularProgress,
    Chip,
    Box
} from "@mui/material";

import {
    getCaseGraph
} from "../../services/graphAPI";

function KnowledgeGraph() {

    const [caseName, setCaseName] =
        useState("");

    const [result, setResult] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const handleSearch = async () => {

        if (!caseName.trim()) {

            return;

        }

        try {

            setLoading(true);

            const data =
                await getCaseGraph(
                    caseName
                );

            setResult(
                data
            );

        }

        catch (error) {

            console.log(
                error
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: "bold"
                }}
            >

                Legal Knowledge Graph

            </Typography>

            <Paper

                sx={{

                    p: 3,

                    background:
                        "#1e293b",

                    borderRadius:
                        "20px",

                    mb: 3

                }}

            >

                <TextField

                    fullWidth

                    label="Enter Case Name"

                    value={caseName}

                    onChange={(e) =>
                        setCaseName(
                            e.target.value
                        )
                    }

                    sx={{
                        mb: 2
                    }}

                />

                <Button

                    variant="contained"

                    fullWidth

                    size="large"

                    onClick={
                        handleSearch
                    }

                >

                    Search Graph

                </Button>

            </Paper>

            {

                loading && (

                    <Box
                        sx={{
                            textAlign:
                                "center"
                        }}
                    >

                        <CircularProgress />

                    </Box>

                )

            }

            {

                result?.result?.found && (

                    <Paper

                        sx={{

                            p: 4,

                            background:
                                "#1e293b",

                            borderRadius:
                                "20px",

                            color:
                                "white"

                        }}

                    >

                        <Typography

                            variant="h5"

                            sx={{

                                mb: 3,

                                fontWeight:
                                    "bold"

                            }}

                        >

                            Case Information

                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2
                            }}
                        >

                            {
                                result.result.case_name
                            }

                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2
                            }}
                        >

                            Connected Cases

                        </Typography>

                        {

                            result.result.neighbors.map(

                                (
                                    item,
                                    index
                                ) => (

                                    <Chip

                                        key={index}

                                        label={item}

                                        color="primary"

                                        sx={{
                                            m: 0.5
                                        }}

                                    />

                                )

                            )

                        }

                    </Paper>

                )

            }

            {

                result &&
                !result?.result?.found && (

                    <Paper

                        sx={{

                            p: 4,

                            background:
                                "#1e293b",

                            borderRadius:
                                "20px",

                            color:
                                "white"

                        }}

                    >

                        <Typography>

                            Case not found in
                            Knowledge Graph

                        </Typography>

                    </Paper>

                )

            }

        </div>

    );

}

export default KnowledgeGraph;