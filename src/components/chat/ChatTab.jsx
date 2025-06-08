import { MessageSquare, Users } from "lucide-react";

const ChatTab = ({ setActiveTab, activeTab}) => {
  return (
    <div className="flex border-b border-gray-200">
      <button
        onClick={() => setActiveTab("private")}
        className={`flex-1 py-3 text-sm font-medium transition-colors ${
          activeTab === "private"
            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center justify-center space-x-2">
          <MessageSquare className="w-4 h-4" />
          <span className="hidden md:inline">Private</span>
        </div>
      </button>
      <button
        onClick={() => setActiveTab("group")}
        className={`flex-1 py-3 text-sm font-medium transition-colors ${
          activeTab === "group"
            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center justify-center space-x-2">
          <Users className="w-4 h-4" />
          <span className="hidden md:inline">Groups</span>
        </div>
      </button>
    </div>
  );
};

export default ChatTab;
