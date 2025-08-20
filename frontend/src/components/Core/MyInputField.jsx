import React from "react";
import { TextField } from "@mui/material";

const MyInputField = ({ type="text", label, value, onChange }) => {
    return (
        <TextField
            required
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f5f5f5',
                    '& fieldset': {
                        borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                        borderColor: '#4A90E2',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#4A90E2',
                        borderWidth: '2px',
                    },
                },
                '& .MuiInputLabel-root': {
                    fontWeight: 500,
                },
            }}
        />
    )
}
export default MyInputField