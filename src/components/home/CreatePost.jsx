import { Camera, MapPin } from "lucide-react";

const CreatePost = () => {
  
  const handleNewPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: {
          name: "You",
          avatar: "YU",
          department: "Your Department",
          year: "Your Year",
          location: "Current Location"
        },
        content: newPost,
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        isLiked: false,
        isBookmarked: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="bg-white h-20 rounded-xl shadow-lg p-6 mb-6 transform transition duration-300 hover:shadow-xl">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">YU</span>
            </div>
              <p
                className=" p-1 border-gray-200 rounded-lg truncate"
              > What's on your mind? Share with your IIT Dhanbad community...</p>
                <button
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  Post
                </button>
          </div>
        </div>
  )
}

export default CreatePost
