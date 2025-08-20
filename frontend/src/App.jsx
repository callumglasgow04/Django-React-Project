import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import RegisterLandingPage from "./pages/RegisterLandingPage/RegisterLandingPage"
import RegisterStudent from "./pages/register/Student/RegisterStudent"
import RegisterTeacher from "./pages/register/Teacher/RegisterTeacher"
import NotFound from "./pages/NotFound/NotFound"
import ProtectedRoute from "./components/protectedRoutes"
import ProtectedLayout from "./components/navbar/ProtectedLayout"
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard"
import RoleProtectedRoutes from "./components/RoleProtectedRoutes"
import Profile from "./pages/Profile/Profile"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <RegisterLandingPage />
}
function RegisterStudentAndLogout() {
  localStorage.clear()
  return <RegisterStudent />
}
function RegisterTeacherAndLogout() {
  localStorage.clear()
  return <RegisterTeacher />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/student/register" element={<RegisterStudentAndLogout />} />
        <Route path="/teacher/register" element={<RegisterTeacherAndLogout />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoute><ProtectedLayout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />

          <Route element={<RoleProtectedRoutes allowedRoles={['student']} />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
          </Route>

          <Route element={<RoleProtectedRoutes allowedRoles={['teacher']} />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          </Route>

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
