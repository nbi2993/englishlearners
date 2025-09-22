
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 sm:px-8 py-5 flex justify-between items-center z-20 bg-slate-950/50 backdrop-blur-md sticky top-0">
      <Link to="/" className="flex items-center space-x-3">
        <img src="/assets/logo.png" alt="IVS English Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-white">IVS English</span>
      </Link>
      <Link to="/signin">
        <button className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
          <LogIn size={16}/>
          <span>Đăng nhập</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
