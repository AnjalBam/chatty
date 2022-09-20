import { useState } from "react";
import { useEffect } from "react";

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
        <div className="App">
            <h1>Hello</h1>
            <p>{message}</p>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
};

export default Home;
