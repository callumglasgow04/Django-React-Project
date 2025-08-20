import React from "react";
import { useGetUser } from "../../utils/hooks/useGetUser";

const TeacherProfile = () => {
    const { user } = useGetUser();

    const userName = user?.first_name || "Teacher";

    return (
        <div>
            <h1>Welcome to the Teacher Profile, {userName}!</h1>
            <p>This is where you can manage your profile and settings.</p>
        </div>
    );
}
export default TeacherProfile;