
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate percentage from the center
      const moveX = (clientX - innerWidth / 2) / innerWidth * 10;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 10;
      
      // Apply the transform with a dampened effect
      imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-neutral-50 opacity-60"></div>
      
      {/* Floating image */}
      <div 
        ref={imageRef} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/4 transition-transform duration-300 ease-out image-glow opacity-80 md:opacity-100 pointer-events-none select-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "300px 0 0 300px",
          filter: "saturate(0.9)",
          zIndex: 0
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-20 md:mt-0">
        <div className="max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <div className="bg-white/20 text-primary text-sm py-1 px-4 rounded-full inline-block mb-6 backdrop-blur-sm border border-primary/20">
            Premium Nail Art & Care
          </div>
          <h1 className="mb-6">
            Elevate Your <br />
            <span className="text-primary">Personal Style</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-700 max-w-md">
            Experience luxury nail services crafted with precision and creativity. Your hands deserve the finest care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn btn-primary btn-lg">
              Explore Services
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-soft-bounce">
        <a href="#services" className="flex flex-col items-center text-neutral-500 hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
