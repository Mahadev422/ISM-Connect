import { MessageSquare } from "lucide-react";

const EmptyChat = () => {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-md">
        <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
          <MessageSquare size={64} className="mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          No chat selected
        </h3>
        <p className="text-gray-500">
          Choose a conversation from the list to start messaging
        </p>
      </div>
    </div>
  );
};

export default EmptyChat;
