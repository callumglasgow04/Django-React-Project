import React from "react";
import { TextField } from "@mui/material";


const ProfileInput = ({ placeHolder, value, onChange }) => {

    return (
        <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
        />
    )
}
export default ProfileInput;