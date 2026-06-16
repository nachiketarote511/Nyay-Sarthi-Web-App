import { useState } from "react";

import {
    TextField,
    Button,
    Typography,
    Paper,
    CircularProgress,
    Chip,
    Divider
} from "@mui/material";

import {
    searchJudgments
} from "../../services/retrievalAPI";

function Retrieval() {

    const [query, setQuery] =
        useState("");

    const [results, setResults] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const handleSearch = async () => {

        if (!query.trim()) {

            return;

        }

        try {

            setLoading(true);

            const data =
                await searchJudgments(
                    query
                );

            setResults(
                data.results || []
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

                Retrieval Engine

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

                    label="Enter Legal Query"

                    value={query}

                    onChange={(e) =>
                        setQuery(
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

                    onClick={
                        handleSearch
                    }

                >

                    Search

                </Button>

            </Paper>

            {

                loading && (

                    <div
                        style={{
                            textAlign:
                                "center"
                        }}
                    >

                        <CircularProgress />

                    </div>

                )

            }

            {

                results.map(

                    (
                        item,
                        index
                    ) => (

                        <Paper

                            key={index}

                            sx={{

                                p: 3,

                                mb: 3,

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

                                sx={{

                                    fontWeight:
                                        "bold"

                                }}

                            >

                                {

                                    item.case_name
                                        ?.replaceAll(
                                            "_",
                                            " "
                                        )

                                }

                            </Typography>

                            <Divider
                                sx={{
                                    my: 2,
                                    bgcolor:
                                        "#475569"
                                }}
                            />

                            <Chip

                                label={`Year : ${item.year}`}

                                sx={{
                                    mr: 1
                                }}

                            />

                            <Chip

                                color="primary"

                                label={`Similarity : ${(item.score * 100).toFixed(2)} %`}

                            />

                            <Typography

                                sx={{

                                    mt: 3,

                                    lineHeight:
                                        1.8

                                }}

                            >

                                {

                                    item.legal_summary
                                        ?.substring(
                                            0,
                                            1200
                                        )

                                }

                                ...

                            </Typography>

                        </Paper>

                    )

                )

            }

        </div>

    );

}

export default Retrieval;