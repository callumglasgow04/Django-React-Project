import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"

const Form = ({ route, method }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const res = await api.post(route, { username, password })
            console.log(res)
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate('/')
            } else {
                navigate('/login')
            }
        }
        catch (error) {
            console.log(error)
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div >
            <div className="form-wrapper">
                <div className="title-wrapper">
                    <h1 className="title">MindSpark</h1>
                    <p className="titleText">Jump start your brain with these games.</p>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
                    <h1>{name}</h1>
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="form-button" type="submit" >{name}</button>
                    {method === "login" && (
                        <p>Don't have an Account? <a href="/register">Sign up here</a></p>
                    )}
                    {method === "register" && (
                        <p>Already have an Account? <a href="/login">Log in here</a></p>
                    )}
                </form>
            </div>
        </div>
    )
}
export default Form