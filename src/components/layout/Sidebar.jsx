import {
  Home,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  Settings,
  MapPin,
  Trophy,
} from "lucide-react";

const Sidebar = ({ sidebarOpen}) => {

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:relative z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out h-full`}
    >
      <div className="p-4 h-full overflow-y-auto scroll">
       
        {/* Navigation */}
        <nav className="space-y-2">
          
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
          >
            <Home className="h-5 w-5" />
            <span>Home Feed</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Students</span>
          </a>
           <a
            href="/chat"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span>Study Groups</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </a>

          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 mt-6">
            Campus Life
          </h3>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span>Campus Map</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Trophy className="h-5 w-5" />
            <span>Competitions</span>
          </a>

          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 mt-6">
            Resources
          </h3>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Academic Calender</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </a>
        </nav>

        {/* Campus Stats */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-2">Campus Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Online Students</span>
              <span className="font-semibold text-blue-700">1,247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Groups</span>
              <span className="font-semibold text-blue-700">89</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Upcoming Events</span>
              <span className="font-semibold text-blue-700">12</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
