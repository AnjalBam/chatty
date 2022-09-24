import React from "react";
import axios from "../utils/axios";
import { toast } from "react-hot-toast";

import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            toast("You are already logged in", { icon: "👋" });
            navigate("/");
        }
    }, [navigate]);

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        fullName: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/auth/register/", formData)
            .then((res) => {
                toast(res.data?.message || "Registered successfully", {
                    icon: "👏",
                });
                navigate("/login");
            })
            .catch((err) => {
                toast(err.response?.data?.message || err.toString(), {
                    icon: "🤯",
                });
            });
    };

    return (
        <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-md-4 mt-4">
            <div className="title text-center">
                <h3>Register to</h3>
                <h1 className="nav-title">Chatty</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">fullName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={(e) =>
                                setFormData((fData) => ({
                                    ...fData,
                                    fullName: e.target.value,
                                }))
                            }
                            placeholder="Enter full name."
                        />
                    </div>
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
                        Register
                    </button>

                    <div className="mt-3">
                        <p>Or <Link to='/login'>login</Link>?</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
