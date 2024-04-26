import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from './firebase'; // Adjust the path to your firebase configuration file

function NavList({ isAuthenticated }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/about" className={`flex items-center hover:text-blue-500 transition-colors ${isAuthenticated ? '' : 'hidden'}`}>
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/chatbot" className={`flex items-center hover:text-blue-500 transition-colors ${isAuthenticated ? '' : 'hidden'}`}>
          Chatbot
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setIsAuthenticated(true);
      } else {
        // No user is signed in.
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleLogin = async () => {
    try {
      // Trigger Google authentication pop-up
      await signInWithPopup(auth, googleAuthProvider);
      // Redirect to home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth.signOut();
      // Update authentication state
      setIsAuthenticated(false);
      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Lawhiz
          </Typography>
          <div className="hidden lg:block">
            <NavList isAuthenticated={isAuthenticated} />
          </div>
          <div className="hidden lg:block">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-red-500 px-4 py-2 rounded-md shadow-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login with Google
              </button>
            )}
          </div>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </button>
        </div>
        <Collapse open={openNav}>
          <div className="flex flex-col items-center">
            {isAuthenticated && (
              <React.Fragment>
                <button
                  onClick={() => navigate('/about')}
                  className="text-blue-500 hover:text-blue-700 transition-colors my-2"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigate('/chatbot')}
                  className="text-blue-500 hover:text-blue-700 transition-colors my-2"
                >
                  Chatbot
                </button>
              </React.Fragment>
            )}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-red-500 my-2"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 my-2"
              >
                Login with Google
              </button>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}




