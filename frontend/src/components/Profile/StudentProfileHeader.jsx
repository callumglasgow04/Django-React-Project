import React from "react";
import { CardHeader, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

const StudentProfileHeader = ({isEditing, handleEditClick, handleCancelClick }) => {
    return (
        <CardHeader
            title="Student Profile"
            action={
                !isEditing ?
                    <IconButton aria-label="edit" onClick={handleEditClick}>
                        <EditIcon />
                    </IconButton>
                    :
                    <IconButton aria-label="edit" onClick={handleCancelClick} disabled={!isEditing}>
                        <CancelIcon />
                    </IconButton>
            }
        />
    )
}
export default StudentProfileHeader;