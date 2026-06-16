import { useState } from "react";

import {
    Typography,
    Paper,
    TextField,
    Button,
    CircularProgress,
    Box
} from "@mui/material";

import {
    askLLM
} from "../../services/llmAPI";

function LegalAssistant() {

    const [query, setQuery] =
        useState("");

    const [answer, setAnswer] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleAsk = async () => {

        if (!query.trim()) {

            return;

        }

        try {

            setLoading(true);

            const data =
                await askLLM(
                    query
                );

            setAnswer(

                data.answer ||

                JSON.stringify(
                    data
                )

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

                Legal AI Assistant

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

                    multiline

                    rows={4}

                    label="Ask Legal Question"

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

                    size="large"

                    onClick={
                        handleAsk
                    }

                >

                    Ask AI

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

                answer && (

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

                            AI Response

                        </Typography>

                        <Typography

                            sx={{

                                lineHeight:
                                    1.9,

                                whiteSpace:
                                    "pre-wrap"

                            }}

                        >

                            {answer}

                        </Typography>

                    </Paper>

                )

            }

        </div>

    );

}

export default LegalAssistant;