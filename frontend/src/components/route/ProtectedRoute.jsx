import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
    let { isAuthenticated } = useSelector((state) => state.user);
    console.log(isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isauth from use effect" + isAuthenticated);
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoute;