import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Link
} from "@mui/material";
import MyTitle from "../../../components/Core/myTitle";
import MyTitleMessage from "../../../components/Core/MyTitleMessage";
import MyButton from "../../../components/Core/MyButton";
import MyInputField from "../../../components/Core/MyInputField";


const StudentForm = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const isValidFields = username && firstName && lastName && dob && password;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isValidFields) {
                const res = await api.post('/api/student/register/', {
                    username,
                    password,
                    first_name: firstName,
                    last_name: lastName,
                    dob,
                });
                navigate('/login');
            } else {
                alert("fill in fields")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#4A90E2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column',
        }}
        >
            <MyTitle />
            <MyTitleMessage />

            <Card sx={{
                maxWidth: 400,
                padding: 5,
                borderRadius: '12px'
            }} >
                <Typography align="center" fontWeight='700' letterSpacing='.12rem' >
                    Login
                </Typography>
                <CardContent>
                    <form>
                        <Stack spacing='.75rem' >
                            <MyInputField
                                label="User Name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <MyInputField
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <MyInputField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <MyInputField
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography minWidth='100px' >
                                    Date of Birth
                                </Typography>
                                <MyInputField
                                    type="date"
                                    label=""
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </Box>
                            <MyButton color='primary' text='Login' onClick={handleSubmit} disabled={!isValidFields} />
                            <Box >
                                <Typography >
                                    Already have an accout?
                                    <Link href="/login" sx={{ marginLeft: '5px', textDecoration: '' }}> Login here </Link>
                                </Typography>
                                <Typography >
                                    Register as a teacher?
                                    <Link href="/register" sx={{ marginLeft: '5px', textDecoration: '' }} >
                                        Register here
                                    </Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}
export default StudentForm;