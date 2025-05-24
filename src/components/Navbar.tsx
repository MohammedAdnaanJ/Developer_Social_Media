import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { signInWithGitHub, signOut, user } = useAuth();

  const displayName = user?.user_metadata.user_name || user?.email;
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white transform hover:scale-105 transition-all duration-300"
          >
            Developer<span className="text-purple-500">.app</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Create Post
            </Link>
            <Link
              to="/communities"
              className="text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Communities
            </Link>
            <Link
              to="/community/create"
              className="text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Create Community
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                {user?.user_metadata?.avatar_url && (
                  <img
                    src={user?.user_metadata.avatar_url}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
                  />
                )}
                <span className="text-gray-300 transition-colors duration-300">
                  {displayName}
                </span>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGitHub}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Sign in with GitHub
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex justify-end text-right fixed inset-x-0 top-16 md:hidden bg-[rgba(10,10,10,0.9)] transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            Create Post
          </Link>
          <Link
            to="/communities"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            Communities
          </Link>
          <Link
            to="/community/create"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
          >
            Create Community
          </Link>
          <div className="flex justify-center mt-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {user?.user_metadata?.avatar_url && (
                  <img
                    src={user?.user_metadata.avatar_url}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
                  />
                )}
                <span className="text-gray-300 transition-colors duration-300">
                  {displayName}
                </span>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGitHub}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Sign in with GitHub
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
