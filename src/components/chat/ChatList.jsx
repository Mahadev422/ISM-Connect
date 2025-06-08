import React from "react";

const ChatList = ({ activeTab, privateChats, groupChats, selectedChat, setSelectedChat, setShowMobileMenu }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {(activeTab === "private" ? privateChats : groupChats)
        .map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50
                      ${selectedChat?.id === chat.id ? "bg-blue-50" : ""}`}
            onClick={() => {
              setSelectedChat(chat);
              setShowMobileMenu(false);
            }}
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-3 overflow-hidden">
              <div className="font-medium text-gray-900 truncate">
                {chat.name}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {chat.lastMessage}
              </div>
            </div>
            <div className="ml-auto text-xs text-gray-500 whitespace-nowrap">
              {chat.timestamp}
              {chat.unread > 0 && (
                <span className="ml-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {chat.unread}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatList;
