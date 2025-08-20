import React from "react";
import { Button } from "@mui/material";

const MyButton = ({color, text, onClick, disabled=false }) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            disabled={disabled}
            sx={{
                textTransform: 'none',
                padding: '10px',
                paddingRight: '25px',
                paddingLeft: '25px',
                fontSize: '15px',
                borderRadius: '12.5px'
            }}>
            {text}
        </Button>
    )
}
export default MyButton;