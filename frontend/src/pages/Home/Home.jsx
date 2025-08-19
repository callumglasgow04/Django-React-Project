import React, { useEffect } from 'react'
import api from '../../api';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkRoleandRedirect = async () => {
            try{
                const res = await api.get('api/student/profile/');
                const role = res.data.user.role;
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
    }, [navigate]);

    return (
        <div> Loading... </div>
    )

}
export default Home