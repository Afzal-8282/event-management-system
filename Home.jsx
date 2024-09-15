import React from 'react';
import { FaCalendarAlt, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-4">Event Management System</h1>
          <p className="text-xl text-white">Plan, Organize, and Execute Unforgettable Events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-30 rounded-lg p-6 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40 hover:shadow-lg">
            <FaCalendarAlt className="text-5xl text-white mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-white mb-2">Upcoming Events</h2>
            <p className="text-white">Discover and join exciting events happening near you.</p>
          </div>

          <div className="bg-white bg-opacity-30 rounded-lg p-6 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40 hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Event" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">Create Your Event</h2>
            <p className="text-white">Organize and manage your own events with ease.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="/register" className="flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300">
            <FaUserPlus className="mr-2" />
            Register
          </a>
          <a href="/login" className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
            <FaSignInAlt className="mr-2" />
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
