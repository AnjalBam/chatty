import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="container-fluid">
            <nav class="navbar bg-light">
                <div class="container-fluid align-self-center">
                    <a class="navbar-brand" href="#">
                        Bootstrap
                    </a>
                </div>
            </nav>
            <Outlet />
        </main>
    );
};

export default Layout;
