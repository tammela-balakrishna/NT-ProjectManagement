import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // 🔁 Auto-redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // 📨 Login API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/accounts/login/", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.error || "Login failed");
      } else {
        setErrorMsg("Network error");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-white">NannyTech Dashboard</h2>

        {errorMsg && (
          <div className="p-3 text-sm text-red-400 bg-red-800 rounded-lg">
            {errorMsg}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          Don't have an account?{" "}
         <Link to="/register" className="text-blue-500 hover:underline">sinup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
