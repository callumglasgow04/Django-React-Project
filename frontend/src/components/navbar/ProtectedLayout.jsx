import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";  

const ProtectedLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
export default ProtectedLayout;