import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, MapPin, Calendar, Mail, GraduationCap, Users, Camera, Settings } from 'lucide-react';
import PostCard from '../components/profile/PostCard';
import About from '../components/profile/About';

const SocialMediaProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const profileData = {
    name: "Alex Johnson",
    username: "@alexj_dev",
    branch: "Computer Science Engineering",
    year: "Final Year (2024)",
    email: "alex.johnson@university.edu",
    location: "San Francisco, CA",
    joinedDate: "March 2021",
    followers: 1247,
    following: 834,
    posts: 156,
    bio: "🚀 CS Student | Full-Stack Developer | Tech Enthusiast\n💡 Building the future, one line of code at a time\n🎯 Open to internship opportunities",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=300&fit=crop"
  };

  const posts = [
    {
      id: 1,
      content: "Just finished building my first React Native app! 📱 The journey from web development to mobile has been incredible. Can't wait to share it with everyone soon! #ReactNative #MobileDev",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      likes: 34,
      comments: 8,
      timestamp: "2 hours ago",
      type: "project"
    },
    {
      id: 2,
      content: "Attending the Tech Innovation Summit today! 🎉 Amazing speakers and networking opportunities. The future of AI looks incredibly promising! #TechSummit #AI #Innovation",
      likes: 67,
      comments: 15,
      timestamp: "1 day ago",
      type: "event"
    },
    {
      id: 3,
      content: "Weekend coding session complete! ✅ Implemented a new authentication system using JWT tokens. Security first! 🔐 Here's what I learned about token-based authentication...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      likes: 89,
      comments: 23,
      timestamp: "3 days ago",
      type: "learning"
    },
    {
      id: 4,
      content: "Coffee + Code = Perfect Sunday ☕️👨‍💻 Working on my capstone project and loving every minute of it. Sometimes the best ideas come when you least expect them!",
      likes: 45,
      comments: 12,
      timestamp: "5 days ago",
      type: "lifestyle"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Cover & Profile Section */}
        <div className="bg-white rounded-b-2xl shadow-sm overflow-hidden">
          {/* Cover Image */}
          <div 
            className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 relative"
            style={{
              backgroundImage: `url(${profileData.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <button className="absolute top-4 right-4 bg-indigo-400 p-2 rounded-full hover:bg-opacity-30 transition-all">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          
          {/* Profile Info */}
         <About profileData={profileData} />
        </div>

         {/* Navigation Tabs */}
        <div className="mt-6 bg-white rounded-xl shadow-sm">
          <nav className="flex space-x-8 px-6">
            {['posts', 'about', 'photos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Content */}
        <div className="mt-6 p-3">
              {posts.map(post => (
                <PostCard key={post.id} profileData={profileData} post={post} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProfile;