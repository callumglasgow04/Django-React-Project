import React from "react";
import { Typography } from "@mui/material";

const MyTitleMessage = () => {

    return (
        <Typography
            align="center"
            sx={{
                fontSize: "1.5rem",
                fontFamily: "'Irish Grover', sans-serif",
                fontWeight: 900,
                letterSpacing: ".25rem",
                color: "#ffffff",
                mb: 2,
            }}
        >
            Jump Start your brain with these games.
        </Typography>
    )
}
export default MyTitleMessage;