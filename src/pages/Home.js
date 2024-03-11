import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-55">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
