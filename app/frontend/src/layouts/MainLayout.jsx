import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout() {

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#020617"
            }}
        >

            <Sidebar />

            <div
                style={{
                    flex: 1,
                    padding: "30px",
                    color: "white",
                    width:"280px",
                    background: "#111827"
                }}
            >

                <Outlet />

            </div>

        </div>

    );

}

export default MainLayout;