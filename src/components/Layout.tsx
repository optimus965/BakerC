import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout() {
    return (
        <div className="Main">
        <Sidebar />
        <div className="ProjectSetup">
           <Outlet />
        </div>
    </div>
    )
}