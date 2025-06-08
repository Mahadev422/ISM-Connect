import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  MoreHorizontal,
  Send,
  Smile,
  Camera,
  MapPin,
  Clock,
  ChevronDown,
  ThumbsUp
} from 'lucide-react';
import PostCard from '../components/home/PostCard';
import CreatePost from '../components/home/CreatePost';

// Note: framer-motion would normally be imported, but we'll simulate animations with CSS transitions
// import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [activeComments, setActiveComments] = useState({});
  const [newComments, setNewComments] = useState({});

  // Dummy data for posts
  const dummyPosts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "PS",
        department: "Computer Science",
        year: "3rd Year",
        location: "Central Library"
      },
      content: "Just finished my Machine Learning assignment! The neural network finally converged after hours of debugging. Anyone else working on Prof. Kumar's assignment? #MachineLearning #IITDhanbad",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      author: {
        name: "Arjun Patel",
        avatar: "AP",
        department: "Mechanical Engineering",
        year: "4th Year",
        location: "Workshop Lab"
      },
      content: "Our robotics team just won the inter-college competition! 🏆 Months of hard work finally paid off. Special thanks to my teammates for the late-night coding sessions. #Robotics #TeamWork #Victory",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      timestamp: "4 hours ago",
      likes: 89,
      comments: 15,
      isLiked: true,
      isBookmarked: true
    },
    {
      id: 3,
      author: {
        name: "Sneha Gupta",
        avatar: "SG",
        department: "Chemical Engineering",
        year: "2nd Year",
        location: "Chemistry Lab"
      },
      content: "Beautiful sunset from the hostel terrace after a long day of experiments. Sometimes you need to pause and appreciate the simple moments. How's everyone's week going? 🌅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      timestamp: "6 hours ago",
      likes: 156,
      comments: 23,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 4,
      author: {
        name: "Rahul Singh",
        avatar: "RS",
        department: "Electrical Engineering",
        year: "3rd Year",
        location: "Innovation Hub"
      },
      content: "Working on an IoT project for smart campus lighting. The prototype is finally working! Next step is to scale it up for the entire campus. Any EE students interested in collaborating?",
      timestamp: "8 hours ago",
      likes: 34,
      comments: 12,
      isLiked: true,
      isBookmarked: false
    },
    {
      id: 5,
      author: {
        name: "Kavya Reddy",
        avatar: "KR",
        department: "Mining Engineering",
        year: "4th Year",
        location: "Campus Cafeteria"
      },
      content: "Study group session at the cafeteria! Nothing beats good food and great discussions about thermodynamics. Join us if you're struggling with heat transfer concepts! ☕📚",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      timestamp: "1 day ago",
      likes: 67,
      comments: 19,
      isLiked: false,
      isBookmarked: true
    }
  ];

  const dummyComments = {
    1: [
      { id: 1, author: "Amit Kumar", avatar: "AK", content: "Great job! I'm also stuck on the same assignment. Can we connect?", timestamp: "1h ago" },
      { id: 2, author: "Riya Jain", avatar: "RJ", content: "Your approach was really innovative. Well done! 👏", timestamp: "45m ago" }
    ],
    2: [
      { id: 1, author: "Prof. Mehta", avatar: "PM", content: "Congratulations to the entire team! Making the college proud.", timestamp: "3h ago" },
      { id: 2, author: "Neha Yadav", avatar: "NY", content: "So inspiring! Which competition was this?", timestamp: "2h ago" },
      { id: 3, author: "Vikash Sharma", avatar: "VS", content: "Amazing work guys! Can't wait to see what's next.", timestamp: "1h ago" }
    ],
    3: [
      { id: 1, author: "Deepak Roy", avatar: "DR", content: "Beautiful capture! The colors are amazing 📸", timestamp: "5h ago" },
      { id: 2, author: "Anita Singh", avatar: "AS", content: "This is why I love our campus! Thanks for sharing ❤️", timestamp: "4h ago" }
    ]
  };

  useEffect(() => {
    setPosts(dummyPosts);
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const toggleComments = (postId) => {
    setActiveComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleAddComment = (postId) => {
    if (newComments[postId]?.trim()) {
      // In a real app, this would make an API call
      console.log(`Adding comment to post ${postId}: ${newComments[postId]}`);
      setNewComments(prev => ({ ...prev, [postId]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Create Post Section */}
       <CreatePost />

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => <PostCard key={index} activeComments={activeComments} toggleComments={toggleComments} index={index} post={post} newComments={newComments} dummyComments={dummyComments} handleLike={handleLike} />)}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-white text-gray-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium">
            Load More Posts
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;