
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-barber-dark border-b border-barber-gold/30 sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center">
            <img src="/lovable-uploads/logo.png" alt="Salon Logo" className="h-8 w-8" />
          </div>
          <NavLink to="/" className="text-2xl font-cairo font-bold text-barber-gold">
            صالون السوداني الأنيق
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-barber-gold" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            الرئيسية
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            نبذة عنا
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            خدماتنا
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            معرض الأعمال
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            الأسئلة الشائعة
          </NavLink>
          <NavLink to="/reviews" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`}>
            مراجعات العملاء
          </NavLink>
          <a 
            href="https://wa.me/966530640121" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-button"
          >
            احجز الآن
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-barber-dark z-40 lg:hidden animate-fade-in">
            <div className="container py-20">
              <nav className="flex flex-col items-center gap-6 text-lg">
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  الرئيسية
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  نبذة عنا
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  خدماتنا
                </NavLink>
                <NavLink to="/gallery" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  معرض الأعمال
                </NavLink>
                <NavLink to="/faq" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  الأسئلة الشائعة
                </NavLink>
                <NavLink to="/reviews" className={({ isActive }) => `${isActive ? 'text-barber-gold' : 'text-white'} hover:text-barber-gold transition-colors`} onClick={toggleMenu}>
                  مراجعات العملاء
                </NavLink>
                <a 
                  href="https://wa.me/966530640121" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-button mt-4"
                  onClick={toggleMenu}
                >
                  احجز الآن
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
