import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <main className="container-fluid">
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                gutter={6}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    duration: 5000,
                }}
            />
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </main>
    );
};

export default Layout;
