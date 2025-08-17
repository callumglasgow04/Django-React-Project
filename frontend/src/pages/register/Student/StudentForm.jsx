import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";


const StudentForm = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const role = "student";
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post('/api/student/register/', {
                username,
                password,
                first_name: firstName,
                last_name: lastName,
                dob,
                role
            });
            navigate('/login');
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="form-wrapper">
            <div className="title-wrapper">
                <h1 className="title">MindSpark</h1>
                <p className="titleText">Jump start your brain with these games.</p>
            </div>
            <form  onSubmit={handleSubmit} className="form-container">
                <h1>Register as a Student</h1>
                <input className="form-input" required value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input className="form-input" required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <input className="form-input" required value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                <input className="form-input" required value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                <input className="form-input" required type="date" value={dob} onChange={e => setDob(e.target.value)} placeholder="Date of birth" />

                <button className="form-button" type="submit" disabled={loading}>{loading ? "Registering..." : "Register as Student"}</button>
                <p className="form-text">
                    Already have an account? <a href="/login">Login here</a>
                </p>
                <p className="form-text">
                    Register as a teacher? <a href="/teacher/register">Register here</a>
                </p>
            </form>
        </div>
    )



}
export default StudentForm;