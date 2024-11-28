import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import Sidebar from "../components/core/Dashboard/Sidebar";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 p-2 text-richblack-300 bg-richblack-800 rounded-md focus:outline-none"
      >
        {isSidebarOpen ? <VscChevronLeft /> : <VscChevronRight />}
      </button>
      {
        isSidebarOpen && <Sidebar/>
      }
      <div className={`h-[calc(100vh-3.5rem)] flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen ? 'ml-[220px]' : 'ml-0'}`}>
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
