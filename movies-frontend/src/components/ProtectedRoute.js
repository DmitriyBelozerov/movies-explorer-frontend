import React from "react";
import { Navigate } from "react-router-dom";
import { TranslationLogIn } from "../contexts/Context";

const ProtectedRoute = ({ Component }) => {
    const loggedIn = React.useContext(TranslationLogIn);
    return loggedIn ? Component : <Navigate to="/signin" />;
};

export default ProtectedRoute; 