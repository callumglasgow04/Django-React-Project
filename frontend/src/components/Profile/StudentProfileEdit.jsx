import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProfileInput from "./ProfileInput";

const StudentProfileEdit = ({ student, formData, setFormData }) => {

    const handInputChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
    }

    return (
        <>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Username</Typography>
                <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} >
                    <Grid item xs={4}>
                        <Typography variant="body1">{student?.user?.username || "-"}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileInput
                            placeHolder={"Edit User Name"}
                            value={formData.username || ''}
                            onChange={handInputChange("username")}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Typography variant="subtitle2" color="textSecondary">First Name</Typography>
                <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} >
                    <Grid item xs={4}>
                        <Typography variant="body1">{student?.user?.first_name || "-"}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileInput
                            placeHolder={"Edit First Name"}
                            value={formData.first_name || ''}
                            onChange={handInputChange("first_name")}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Last Name</Typography>
                <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} >
                    <Grid item xs={4}>
                        <Typography variant="body1">{student?.user?.last_name || "-"}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileInput
                            placeHolder={"Edit Last Name"}
                            value={formData.last_name || ''}
                            onChange={handInputChange("last_name")}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Date of Birth</Typography>
                <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} >
                    <Grid item xs={4}>
                        <Typography variant="body1">{student?.dob || "-"}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default StudentProfileEdit