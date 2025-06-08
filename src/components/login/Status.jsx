import { BookOpen, GraduationCap, Trophy, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Status = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Connect with Peers",
      description:
        "Find and connect with students from your department and batch",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Study Together",
      description:
        "Join study groups and share academic resources with classmates",
    },
    {
      icon: <Trophy className="h-8 w-8 text-purple-500" />,
      title: "Campus Events",
      description:
        "Stay updated with competitions, festivals, and campus activities",
    },
  ];

  const stats = [
    { number: "5000+", label: "Active Students" },
    { number: "200+", label: "Study Groups" },
    { number: "50+", label: "Campus Events" },
    { number: "15+", label: "Departments" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex flex-col bg-black/50 rounded-2xl justify-center text-white p-8">
      <div className="mb-8 transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
          <img src="/logo.png" className="h-25 w-25 bg-white/90 p-3 rounded-3xl" alt="" />
          <div>
            <h1 className="text-4xl font-bold">ISM Connect</h1>
            <p className="text-xl text-blue-200">IIT Dhanbad Social Network</p>
          </div>
        </div>
      </div>

      {/* Animated Feature Showcase */}
      <div className="mb-8 h-48 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 transform ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-2xl font-bold text-white">{stat.number}</div>
            <div className="text-blue-200 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
