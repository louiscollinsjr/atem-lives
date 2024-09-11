import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Uh-oh, you're lost!</h2>
      <p className="text-lg text-gray-500 mb-8">
        It looks like this page has wandered off into the digital abyss.
      </p>
      
      <button
        onClick={goBackHome}
        className="px-6 py-3 bg-black text-white text-lg font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
        Go Back Home
      </button>
      
      {/* <div className="mt-8">
        <p className="text-gray-500">Or, you can explore:</p>
        <ul className="flex space-x-6 mt-4">
          <li>
            <a href="/about" className="text-blue-600 hover:underline">About Us</a>
          </li>
          <li>
            <a href="/services" className="text-blue-600 hover:underline">Our Services</a>
          </li>
          <li>
            <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default NotFoundPage;