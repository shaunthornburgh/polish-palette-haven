
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-6">
              Elegance<span className="text-primary">.</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Premium nail care and artistry services to elevate your personal style and boost your confidence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-neutral-400 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Classic Manicure</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Gel Extensions</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Luxury Spa Pedicure</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Nail Art Design</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Paraffin Treatments</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Nail Repair</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <address className="not-italic text-neutral-400">
              <p className="mb-3">123 Beauty Lane, Suite 45<br />New York, NY 10001</p>
              <p className="mb-3">
                <a href="tel:2125557890" className="hover:text-primary transition-colors">(212) 555-7890</a>
              </p>
              <p className="mb-3">
                <a href="mailto:appointments@elegancenails.com" className="hover:text-primary transition-colors">appointments@elegancenails.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {currentYear} Elegance Nails. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
