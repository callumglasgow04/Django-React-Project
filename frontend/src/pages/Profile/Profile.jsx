import { useGetUser } from "../../utils/hooks/useGetUser";
import TeacherProfile from "./TeacherProfile";  
import StudentProfile from "../../components/Profile/StudentProfile";

const Profile = () => {
    const { user, loading } = useGetUser();

    if (loading) return <div>Loading... Profile</div>;
    if (user.role === 'teacher') return <TeacherProfile />;
    if (user.role === 'student') return <StudentProfile />;

    return <Navigate to="/login" />;
}
export default Profile;