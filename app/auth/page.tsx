"use client";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import useAuth from "../hooks/useAuth";

const AuthPage = () => {
    const auth = useAuth();
    return (
        <div className="w-full h-full flex justify-center items-center">
            {auth.login ? (
                <>
                    <Login />
                </>
            ) : (
                <>
                    <Register />
                </>
            )}
        </div>
    );
};

export default AuthPage;
