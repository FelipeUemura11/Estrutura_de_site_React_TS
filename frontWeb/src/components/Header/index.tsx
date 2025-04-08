import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-black to-gray-800 shadow-lg">
      <nav className="container mx-auto px-5 py-5 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-blue-100 transition-colors"
          >
            <img src={logo} alt="Logo" className="w-50 h-auto" />
          </Link>

          {/* Menu de navegação */}
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;