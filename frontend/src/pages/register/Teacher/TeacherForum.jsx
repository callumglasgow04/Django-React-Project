import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";


const TeacherForum = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post('/api/teacher/register/', {
                username,
                password,
                first_name: firstName,
                last_name: lastName,
                email,
            });
            navigate('/login');
        } catch (error) {
            console.error("Registration error:", error);
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
                <h1>Register as a Teacher</h1>
                <input className="form-input" required value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input className="form-input" required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <input className="form-input" required value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                <input className="form-input" required value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                <input className="form-input" required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

                <button className="form-button" type="submit" disabled={loading}>{loading ? "Registering..." : "Register as Teacher"}</button>
                <p className="form-text">
                    Already have an account? <a href="/login">Login here</a>
                </p>
                <p className="form-text">
                    Register as a Student? <a href="/student/register">Register here</a>
                </p>
            </form>
        </div>
    )



}
export default TeacherForum;