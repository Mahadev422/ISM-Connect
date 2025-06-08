import React, { useState } from "react";
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  Bell,
  Search,
  Settings,
  User,
  GraduationCap,
  MapPin,
  Coffee,
  FileText,
  Trophy,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import HomePage from './HomePage'
import { Outlet } from "react-router-dom";

const SocialMediaPlatform = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
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
