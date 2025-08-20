import React from "react";
import { Typography } from "@mui/material";

const MyTitle = () => {

    return (
        <Typography
            variant="h3"
            align="center"
            sx={{
                fontSize: "6rem",
                fontFamily: "'Irish Grover', sans-serif",
                fontWeight: 900,
                letterSpacing: ".25rem",
                color: "#ffffff",
                mb: 2,
            }}
        >
            MindSpark
        </Typography>
    )
}
export default MyTitle