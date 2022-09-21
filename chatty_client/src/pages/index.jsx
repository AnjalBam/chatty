import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

import axios from "../utils/axios";

const Home = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-2">Welcome to CHATTY</h1>
            <div className="col-12 col-lg-4 offset-lg-4 offset-md-3 col-md-6">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                        <br />
                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate('/login')
                            }}
                        >
                            Logout
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
