import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Home from "./pages";
import Register from "./pages/Register";
import Chats from "./pages/Chats";

import Protected from "./components/protected";
import ContainerLayout from "./components/layout/ContainerLayout";

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

                <Route element={<ContainerLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/chats" element={protectMe(Chats)} />
            </Route>
        </Routes>
    );
}

export default App;
