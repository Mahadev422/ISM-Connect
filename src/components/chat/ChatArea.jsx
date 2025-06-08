import { ChevronLeft, Info, Paperclip, Phone, Send, Smile, Video } from "lucide-react";
import { useEffect, useRef } from "react";

const ChatArea = ({ selectedChat, setSelectedChat }) => {
  
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white sticky p-3 border-b border-gray-200 flex items-center">
        <div className="flex items-center flex-1">
          {selectedChat && (
            <button
              onClick={() => setSelectedChat(null)}
              className="md:hidden p-1 rounded-full hover:bg-blue-500"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="font-medium">{selectedChat.name}</div>
            <div className="text-xs text-gray-500">
              {selectedChat.online ? "Online" : "Offline"}
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Phone size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Video size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Info size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {selectedChat.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                message.isMe
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white border border-gray-200 rounded-bl-none"
              }`}
            >
              {!message.isMe && (
                <div className="font-medium text-sm text-gray-700 mb-1">
                  {message.sender}
                </div>
              )}
              <div>{message.content}</div>
              <div
                className={`text-xs mt-1 ${
                  message.isMe ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white p-3 border-t border-gray-200">
        <div className="flex items-center">
          <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Smile size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 mx-2 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            className="p-2 text-blue-600 hover:text-blue-700 rounded-full hover:bg-blue-50 disabled:text-gray-400"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
