import React, { useEffect, useState } from "react";
import { useGetStudent } from "../../utils/hooks/useGetStudent";
import { Stack, Card, CardContent, Button } from "@mui/material";
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
    });

    useEffect(() => {
        if (student) {
            setFormData({
                username: student?.user?.username || "",
                first_name: student?.user?.first_name || "",
                last_name: student?.user?.last_name || "",
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
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
                < StudentProfileHeader isEditing={isEditing} handleEditClick={handleEditClick} handleCancelClick={handleCancelClick} />
                <CardContent>
                    <Stack spacing={2}>
                        {!isEditing && <StudentProfileView student={student} />}
                        {isEditing && <StudentProfileEdit student={student} formData={formData} setFormData={setFormData} />}

                    </Stack>
                    {isEditing &&
                        <Stack direction="row" justifyContent="flex-end" spacing={2} style={{ marginRight: '10px' }}>
                            <MyButton color='primary' text='Save' onClick={handleSave} />
                        </Stack>
                    }
                </CardContent>
            </Card>
        </div>
    );
}
export default StudentProfile;