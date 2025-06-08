import React, { useState } from "react";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const SocialMediaPlatform = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex flex-1">
          <div className="sticky top-13 h-screen z-10 bg-blue-50">
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
          
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SocialMediaPlatform;
