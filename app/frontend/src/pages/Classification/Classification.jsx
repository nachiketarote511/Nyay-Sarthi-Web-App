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
    classifyText
} from "../../services/classificationAPI";

function Classification() {

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
                await classifyText(
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

                Legal Classification

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

                    Predict Category

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

                            Legal Category

                        </Typography>

                        <Chip

                            color="success"

                            size="medium"

                            label={
                                result?.result?.category ||
                                "Unknown"
                            }

                        />

                    </Paper>

                )

            }

        </div>

    );

}

export default Classification;