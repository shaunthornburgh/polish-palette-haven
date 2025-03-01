
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-medium">
          Elegance<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="btn btn-primary btn-md ml-4">Book Now</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col space-y-6 items-center py-10">
            <a href="#home" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#about" className="text-xl nav-link" onClick={() => setIsOpen(false)}>About</a>
            <a href="#testimonials" className="text-xl nav-link" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="btn btn-primary btn-lg mt-6" onClick={() => setIsOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
