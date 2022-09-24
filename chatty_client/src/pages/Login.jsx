import React from "react";
import axios from "../utils/axios";

import { useNavigate, Link } from "react-router-dom";
import {toast} from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            toast('You are already logged in', {icon: '👋'})
            navigate("/");
        }
    }, [navigate]);

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/auth/login/", formData)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                toast(res.data?.message || 'Logged in successfully', {icon: '👏'})
                navigate("/");
            })
            .catch((err) => {
                toast(err.response?.data?.message || err.toString(), {icon: '🤯'})
            });
    };

    return (
        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-md-4 mt-4">
            <div className="title text-center">
                <h3>Login to</h3>
                <h1 className="nav-title">Chatty</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData((fData) => ({
                                    ...fData,
                                    username: e.target.value,
                                }))
                            }
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData((fData) => ({
                                    ...fData,
                                    password: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Login
                    </button>
                    <div className="mt-3">
                        <p>Or <Link to='/register'>register</Link>?</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
