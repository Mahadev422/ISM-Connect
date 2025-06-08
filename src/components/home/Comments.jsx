import { Send, Smile } from "lucide-react";
import { useEffect, useRef } from "react";

const Comments = ({dummyComments, post}) => {

  const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [dummyComments]);
  
  return (
    <div className="border-t border-gray-100 h-75 scroll overflow-x-auto bg-gray-50">
      {/* Existing Comments */}
      {dummyComments[post.id] && (
        <div className="px-6 py-4 space-y-4">
          {dummyComments[post.id].map((comment) => (
            <div
              key={comment.id}
              className="flex items-start space-x-3 animate-fadeIn"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-xs">
                  {comment.avatar}
                </span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm text-gray-800">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 ml-3">
                  <button className="text-xs text-gray-500 hover:text-blue-500 transition-colors">
                    Like
                  </button>
                  <button className="text-xs text-gray-500 hover:text-blue-500 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Comment */}
      <div className="p-4 border-t border-gray-200 sticky bottom-0 z-5 bg-white">
        <div className="flex items-center space-x-3">
          <div className="flex-1 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Smile className="h-5 w-5" />
            </button>
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-110">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
