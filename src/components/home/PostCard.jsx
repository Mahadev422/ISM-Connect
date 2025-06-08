import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Send,
  Smile,
  MapPin,
  Clock,
  X,
} from 'lucide-react';
import Comments from './Comments';

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

            {activeComments[post.id] ? <button
              onClick={() => toggleComments(post.id)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button> : <button
              onClick={() => toggleComments(post.id)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">{post.comments}</span>
            </button>}

            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-all duration-200 transform hover:scale-110">
              <Share2 className="h-5 w-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {activeComments[post.id] && (
        <Comments dummyComments={dummyComments} post={post} />
      )}
    </div>
  );
};

export default PostCard;
