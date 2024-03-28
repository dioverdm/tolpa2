import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/user/login");
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoute;