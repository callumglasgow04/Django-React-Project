import './RegisterLandingPage.css'

function RegisterLandingPage() {
    return (
        <div className="register-page">
            <h1 className="title" >MindSpark</h1>
            <h1 className="register-title" >Register Now!</h1>
            <div className="register-options">
                <div className="register-box">
                    <h3>Student Register </h3>
                    <p>Register as a student. Join classes and play quizes and games</p>
                    <a className="register-link" href="/student/register">Register here</a>
                </div>
                <div className="register-box">
                    <h3>Teacher Register</h3>
                    <p>Register as a Teacher. Create classes add students to setup daily quizes and brain teasers to jump start their brain.</p>
                    <a  className="register-link" href="/teacher/register">Register here</a>
                </div>
            </div>
            <div className="register-login-option">
                <h5>Already have an account? </h5>
                <a className="register-login-link" href="/login/">Login here</a>
            </div>
        </div>
    )
}
export default RegisterLandingPage