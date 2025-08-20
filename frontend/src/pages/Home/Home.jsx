import React, { useEffect } from 'react'
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../../utils/hooks/useGetUser';

function Home() {
    const navigate = useNavigate();
    const { user } = useGetUser();
    const role = user?.role;

    console.log("User role:", role);

    useEffect(() => {
        const checkRoleandRedirect = async () => {
            try{
                if (role === 'student') {
                    navigate('/student/dashboard');
                } else if (role === 'teacher') {
                    navigate('/teacher/dashboard');
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate('/login')
            }
        }
        checkRoleandRedirect();
    }, [role, navigate]);

    return (
        <div> Loading... Home </div>
    )

}
export default Home