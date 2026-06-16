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
    predictArticle
} from "../../services/articleAPI";

function ArticlePrediction() {

    const [text, setText] =
        useState("");

    const [result, setResult] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const handlePredict = async () => {

        if (!text.trim()) {

            return;

        }

        try {

            setLoading(true);

            const data =
                await predictArticle(
                    text
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

                Constitutional Article Prediction

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

                    multiline

                    rows={8}

                    fullWidth

                    label="Enter Legal Text"

                    value={text}

                    onChange={(e) =>
                        setText(
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
                        handlePredict
                    }

                >

                    Predict Article

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

                result && (

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

                            Prediction Result

                        </Typography>

                        <Typography

                            variant="h6"

                            sx={{

                                mb: 2

                            }}

                        >

                            Predicted Constitutional Article

                        </Typography>

                        <Chip

                            color="primary"

                            size="medium"

                            label={

                                result?.result?.article ||

                                result?.article ||

                                JSON.stringify(
                                    result
                                )

                            }

                        />

                    </Paper>

                )

            }

        </div>

    );

}

export default ArticlePrediction;