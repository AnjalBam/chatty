import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

import axios from "../utils/axios";

const Home = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/").then((res) => {
            console.log(res);
            setMessage(res.data.message);
        });
    }, []);
    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-2">Welcome to CHATTY</h1>
            <div className="col-12 col-lg-4 offset-lg-4 offset-md-3 col-md-6">
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <br />
                <Link to="/register">
                    <Button>Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
