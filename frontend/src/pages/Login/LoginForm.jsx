import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "../../styles/Form.css"

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Submitting login form...");
        try {
            const response = await api.post("/api/token/", {
                username,
                password
            });
            localStorage.setItem(ACCESS_TOKEN, response.data.access)
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh)

            navigate("/");
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="form-wrapper">
                <div className="title-wrapper">
                    <h1 className="title">MindSpark</h1>
                    <p className="titleText">Jump start your brain with these games.</p>
                </div>

            <form onSubmit={handleSubmit} className="form-container">
                <h1>Login</h1>
                <input
                    required
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    required
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="form-button" type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                <p className="form-text">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
            </div>
        </div>
    )

}
export default LoginForm;
