import React from "react";
import { Box, Typography } from "@mui/material";


const StudentProfileView = ({student}) => {
    return (
        <>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Username</Typography>
                <Typography variant="body1">{student?.user?.username || "-"}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">First Name</Typography>
                <Typography variant="body1">{student?.user?.first_name || "-"}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Last Name</Typography>
                <Typography variant="body1">{student?.user?.last_name || "-"}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Date of Birth</Typography>
                <Typography variant="body1">{student?.dob || "-"}</Typography>
            </Box>
        </>
    )
}
export default StudentProfileView;