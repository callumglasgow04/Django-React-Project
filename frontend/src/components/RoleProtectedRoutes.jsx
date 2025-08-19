import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetUser } from '../utils/hooks/useGetUser';


const RoleProtectedRoutes = ({ children, allowedRoles }) => {
    const { user, loading, error } = useGetUser();

    if (error) {
        console.error("Error fetching user info:", error);
    }
    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;

    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/" replace />;
    }


    return children ? children : <Outlet />;
}
export default RoleProtectedRoutes;