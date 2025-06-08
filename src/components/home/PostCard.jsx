import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Send,
  Smile,
  MapPin,
  Clock,
} from 'lucide-react';

const PostCard = ({index, post, activeComments, toggleComments, dummyComments, newComments, handleLike}) => {
  
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      style={{
        animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.avatar}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                {post.author.name}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                {post.author.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{post.author.location}</span>
                    </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{post.timestamp}</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="px-6 pb-4">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLike(post.id)}
              className={`flex items-center space-x-2 transition-all duration-200 transform hover:scale-110 ${
                post.isLiked
                  ? "text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart
                className={`h-5 w-5 ${post.isLiked ? "fill-current" : ""}`}
              />
              <span className="font-medium">{post.likes}</span>
            </button>

            <button
              onClick={() => toggleComments(post.id)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">{post.comments}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-all duration-200 transform hover:scale-110">
              <Share2 className="h-5 w-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {activeComments[post.id] && (
        <div className="border-t border-gray-100 bg-gray-50">
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
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-xs">YU</span>
              </div>
              <div className="flex-1 flex items-center space-x-2">
                <input
                  type="text"
                  value={newComments[post.id] || ""}
                  onChange={(e) =>
                    setNewComments((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Smile className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
