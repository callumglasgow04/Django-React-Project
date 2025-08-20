import React from "react";
import Greetings from "../../components/Greetings/Greetings";
import {useGetUser} from "../../utils/hooks/useGetUser";

const TeacherDashboard = () => {
    const { user } = useGetUser();

    const userName = user?.first_name || "Teacher";
    return (
        <>
            <Greetings userName={userName} />
        </>
    )
}
export default TeacherDashboard;