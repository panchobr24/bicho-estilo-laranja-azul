
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/banho-tosa', label: 'Banho e Tosa' },
    { path: '/contate-nos', label: 'Contate-nos' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/504ac006-59be-4f6a-9f1a-9a4035026ae5.png" 
              alt="Estilo de Bicho" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors relative py-2 ${
                  isActive(item.path)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity animate-fade-in" onClick={() => setIsMenuOpen(false)}></div>
            {/* Mobile Navigation Drawer */}
            <nav className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-lg transform transition-transform duration-300 translate-x-0 animate-slide-in flex flex-col py-8 px-6">
              <button className="self-end mb-6" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors mb-2 ${
                    isActive(item.path)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
