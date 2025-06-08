import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Status from "../components/login/Status";
import MobileLogo from "../components/login/MobileLogo";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(
      () => setNotification({ show: false, type: "", message: "" }),
      3000
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      showNotification(
        "success",
        "Login successful! Welcome back to ISM Connect."
      );
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[url('/iitism.png')] bg-cover bg-center flex items-center justify-center p-4 relative overflow-hidden bg-url">
      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center space-x-2">
            {notification.type === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Branding & Features */}
        <Status />

        {/* Right Side - Login/Signup Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="backdrop-blur-sm rounded-2xl shadow-2xl bg-white/70 p-8 transform transition-all duration-300 hover:shadow-3xl">
              {/* Mobile Logo */}
              <MobileLogo />

              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h2>
              </div>

              {/* Form */}
              <div className="space-y-6 text-black">
                <form action="" onSubmit={handleSubmit}>
                  {/* Login Form */}
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                        <input
                          required
                          type="email"
                          name="email"
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                        <input
                          required
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="m-2 text-sm">Remember me</span>
                      </label>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </>
                  {/* Submit Button */}
                  <button className="w-full mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
