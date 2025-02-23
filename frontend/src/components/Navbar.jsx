import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                FreelancerApp
              </Link>
            </div>
          </div>

          {/* Middle Section - Main Links */}
          <div className="flex items-center">
            <Link to="/jobs" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Find Jobs
            </Link>
            <Link to="/dashboard" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Dashboard
            </Link>
            <Link to="/notifications" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Notifications
            </Link>
            <Link to="/settings" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Settings
            </Link>
          </div>

          {/* Right Section - Auth Buttons */}
          <div className="flex items-center">
            <Link to="/login" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Sign In
            </Link>
            <Link to="/signup" className="ml-4 px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
