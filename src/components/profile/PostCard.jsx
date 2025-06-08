import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

const PostCard = ({profileData, post}) => {
  
 
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <img 
            src={profileData.profileImage} 
            alt={profileData.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{profileData.name}</h3>
              <span className="text-gray-500 text-sm">{profileData.username}</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-800 mb-4 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
        
        {post.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt="Post content"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button 
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              false 
                ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                : 'text-gray-600 hover:text-red-500 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${true ? 'fill-current' : ''}`} />
            <span className="font-medium">422</span>
          </button>
          
          <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-all duration-200">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{post.comments}</span>
          </button>
          
          <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-500 hover:bg-gray-50 transition-all duration-200">
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
