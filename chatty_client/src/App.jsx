import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Home from "./pages";
import Register from "./pages/Register";

import Protected from "./components/protected";

function protectMe(Component) {
    return (
        <Protected>
            <Component />
        </Protected>
    );
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={protectMe(Home)} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
