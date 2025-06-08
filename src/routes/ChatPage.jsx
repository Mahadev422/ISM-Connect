import { useState, useRef, useEffect } from "react";
import {
  Send,
  Search,
  MoreVertical,
  Phone,
  Video,
  Info,
  Users,
  Hash,
  Lock,
  Smile,
  Paperclip,
  Mic,
  ChevronLeft,
  LogOut,
  Menu,
  MessageSquare,
} from "lucide-react";
import ChatList from "../components/chat/ChatList";
import ChatArea from "../components/chat/ChatArea";
import EmptyChat from "../components/chat/EmptyChat";
import ChatTab from "../components/chat/ChatTab";
import Header from "../components/layout/Header";

const ChatPage = () => {
  // Chat state
  const [activeTab, setActiveTab] = useState("private");
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mock user data
  const currentUser = {
    id: 0,
    name: "You",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face",
    online: true,
  };

  // Mock chats data (same as before)
  const privateChats = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hey, are you free for lunch tomorrow?",
      timestamp: "2:30 PM",
      unread: 2,
      online: true,
      messages: [
        {
          id: 1,
          sender: "Sarah Johnson",
          content: "Hey! How's your day going?",
          timestamp: "2:15 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Me",
          content: "Pretty good! Just finished my project presentation.",
          timestamp: "2:18 PM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Sarah Johnson",
          content: "That's awesome! How did it go?",
          timestamp: "2:20 PM",
          isMe: false,
        },
        {
          id: 4,
          sender: "Me",
          content: "Better than expected actually. The team loved the design!",
          timestamp: "2:25 PM",
          isMe: true,
        },
        {
          id: 5,
          sender: "Sarah Johnson",
          content: "Hey, are you free for lunch tomorrow?",
          timestamp: "2:30 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Sure thing! I'll send the files over.",
      timestamp: "1:45 PM",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "Me",
          content: "Hey Mike, do you have the project files?",
          timestamp: "1:30 PM",
          isMe: true,
        },
        {
          id: 2,
          sender: "Mike Chen",
          content: "Yeah! Which ones do you need?",
          timestamp: "1:35 PM",
          isMe: false,
        },
        {
          id: 3,
          sender: "Me",
          content: "The React components and the API documentation",
          timestamp: "1:40 PM",
          isMe: true,
        },
        {
          id: 4,
          sender: "Mike Chen",
          content: "Sure thing! I'll send the files over.",
          timestamp: "1:45 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Thanks for the help with the code review!",
      timestamp: "12:20 PM",
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          sender: "Emma Wilson",
          content: "Could you review my pull request when you have time?",
          timestamp: "11:30 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Me",
          content: "Of course! I'll take a look right now.",
          timestamp: "11:45 AM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Me",
          content: "Looks good! Just a few minor suggestions in the comments.",
          timestamp: "12:15 PM",
          isMe: true,
        },
        {
          id: 4,
          sender: "Emma Wilson",
          content: "Thanks for the help with the code review!",
          timestamp: "12:20 PM",
          isMe: false,
        },
      ],
    },
  ];

  // Mock data for group chats
  const groupChats = [
    {
      id: 1,
      name: "Development Team",
      avatar:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=40&h=40&fit=crop",
      lastMessage: "Alex: Sprint planning meeting at 3 PM",
      timestamp: "3:15 PM",
      unread: 5,
      members: 12,
      messages: [
        {
          id: 1,
          sender: "Alex Rodriguez",
          content: "Good morning team! Ready for today's standup?",
          timestamp: "9:00 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Jennifer Kim",
          content: "Yes! I've completed the user authentication module.",
          timestamp: "9:05 AM",
          isMe: false,
        },
        {
          id: 3,
          sender: "Me",
          content: "Great work Jen! I'm working on the API integration today.",
          timestamp: "9:10 AM",
          isMe: true,
        },
        {
          id: 4,
          sender: "David Park",
          content: "I'll be focusing on the frontend components.",
          timestamp: "9:15 AM",
          isMe: false,
        },
        {
          id: 5,
          sender: "Alex Rodriguez",
          content: "Sprint planning meeting at 3 PM",
          timestamp: "3:15 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Jennifer Kim",
          content: "Yes! I've completed the user authentication module.",
          timestamp: "9:05 AM",
          isMe: false,
        },
        {
          id: 3,
          sender: "Me",
          content: "Great work Jen! I'm working on the API integration today.",
          timestamp: "9:10 AM",
          isMe: true,
        },
        {
          id: 4,
          sender: "David Park",
          content: "I'll be focusing on the frontend components.",
          timestamp: "9:15 AM",
          isMe: false,
        },
        {
          id: 5,
          sender: "Alex Rodriguez",
          content: "Sprint planning meeting at 3 PM",
          timestamp: "3:15 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 2,
      name: "Design Squad",
      avatar:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=40&h=40&fit=crop",
      lastMessage: "Lisa: New mockups are ready for review",
      timestamp: "2:50 PM",
      unread: 3,
      members: 8,
      messages: [
        {
          id: 1,
          sender: "Lisa Chang",
          content: "Working on the new landing page design",
          timestamp: "1:00 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Me",
          content: "Looking forward to seeing it!",
          timestamp: "1:15 PM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Tom Wilson",
          content: "Should we stick with the current color scheme?",
          timestamp: "2:30 PM",
          isMe: false,
        },
        {
          id: 4,
          sender: "Lisa Chang",
          content: "New mockups are ready for review",
          timestamp: "2:50 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 3,
      name: "Random Chat",
      avatar:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=40&h=40&fit=crop",
      lastMessage: "Maya: Anyone up for coffee later?",
      timestamp: "11:30 AM",
      unread: 1,
      members: 25,
      messages: [
        {
          id: 1,
          sender: "John Smith",
          content: "Beautiful weather today! ☀️",
          timestamp: "10:00 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Maya Patel",
          content: "Perfect day for a walk!",
          timestamp: "10:30 AM",
          isMe: false,
        },
        {
          id: 3,
          sender: "Me",
          content: "Definitely! Might go for a run after work.",
          timestamp: "11:00 AM",
          isMe: true,
        },
        {
          id: 4,
          sender: "Maya Patel",
          content: "Anyone up for coffee later?",
          timestamp: "11:30 AM",
          isMe: false,
        },
      ],
    },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
        {(!selectedChat || !showMobileMenu) && <Header />}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Hidden on mobile when chat is selected */}
        {(!selectedChat || !showMobileMenu) && (
          <div
            className={`bg-white border-r border-gray-200 flex flex-col w-full md:w-80
            ${selectedChat ? "hidden md:flex" : "flex"}`}
          >
            {/* Search */}
            <div className="p-3 border-b border-gray-200">
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Tab Navigation */}
            <ChatTab activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Chat List */}
            <ChatList
              activeTab={activeTab}
              privateChats={privateChats}
              groupChats={groupChats}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              setShowMobileMenu={setShowMobileMenu}
            />
          </div>
        )}

        {/* Chat Area */}
        {selectedChat ? (
          <ChatArea
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        ) : (
          <EmptyChat />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
