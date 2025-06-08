import React from "react";
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

const PostCard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to ISM Connect
          </h2>
          <p className="text-gray-600">
            Your campus social network for IIT Dhanbad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-lg">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">
              Connect with Peers
            </h3>
            <p className="text-sm text-gray-600">
              Find and connect with students from your department and batch
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Study Together</h3>
            <p className="text-sm text-gray-600">
              Join study groups and share academic resources
            </p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Campus Events</h3>
            <p className="text-sm text-gray-600">
              Stay updated with all campus activities and events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
