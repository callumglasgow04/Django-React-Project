import React, { useEffect, useState } from "react";
import { useGetStudent } from "../../utils/hooks/useGetStudent";
import { Stack, Paper, Box } from "@mui/material";
import StudentProfileView from "./StudentProfileView";
import StudentProfileEdit from "./StudentProfileEdit";
import StudentProfileHeader from "./StudentProfileHeader";
import MyButton from "../Core/MyButton";

const StudentProfile = () => {
    const { student } = useGetStudent();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: student?.user?.username || "",
        first_name: student?.user?.first_name || "",
        last_name: student?.user?.last_name || "",
        dob: student?.dob || "",
    });

    useEffect(() => {
        if (student) {
            setFormData({
                username: student?.user?.username || "",
                first_name: student?.user?.first_name || "",
                last_name: student?.user?.last_name || "",
                dob: student?.dob || "",
            })
        }
    }, [student])

    const handleSave = () => {
        console.log('saved: ', formData)
        setIsEditing(false)
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }
    const handleCancelClick = () => {
        setIsEditing(false);
    }

    return (
        <Box sx={{
                backgroundColor: "#f0f0f0",
                width: "100%",
                minHeight: "100vh",
                boxSizing: "border-box",
                paddingTop: "15px",
            }}>
            <Box sx={{
                    maxWidth: 600,
                    margin: "0 auto",
                }}>
                <Paper sx={{
                        width: "100%",
                        borderRadius: 2,
                        padding: 3,
                        boxShadow: 3,
                        height: "auto",
                    }} >
                    <StudentProfileHeader
                        isEditing={isEditing}
                        handleEditClick={handleEditClick}
                        handleCancelClick={handleCancelClick}
                    />
                    <Stack spacing={2} mt={2}>
                        {!isEditing && <StudentProfileView student={student} />}
                        {isEditing && (
                            <StudentProfileEdit
                                student={student}
                                formData={formData}
                                setFormData={setFormData}
                            />
                        )}
                    </Stack>
                    {isEditing && (
                        <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
                            <MyButton color="primary" text="Save" onClick={handleSave} />
                        </Stack>
                    )}
                </Paper>
            </Box>
        </Box>

    )
}
export default StudentProfile;