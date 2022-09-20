import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Home from "./pages";
import Register from "./pages/Register";

import Protected from "./components/protected";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <Protected>
                            <Home />
                        </Protected>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
