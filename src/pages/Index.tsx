
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Palette, Scissors, Heart, Sparkles, ChevronDown, ChevronLeft, ChevronRight, Eye, MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  // --- NavBar state ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // --- Hero refs ---
  const imageRef = useRef<HTMLDivElement>(null);

  // --- Gallery state ---
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // --- Testimonials state ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef<number | null>(null);

  // --- Contact state ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  // --- Services data ---
  const services = [
    {
      id: 1,
      title: "Classic Manicure",
      description: "A timeless treatment that shapes the nails, cares for cuticles, and finishes with a polish of your choice.",
      price: "$35",
      duration: "45 min",
      icon: <Scissors className="w-10 h-10 text-primary/80" />
    },
    {
      id: 2,
      title: "Gel Extensions",
      description: "Extend the length of your natural nails with durable gel for a beautiful, natural-looking enhancement.",
      price: "$65",
      duration: "75 min",
      icon: <Palette className="w-10 h-10 text-primary/80" />
    },
    {
      id: 3,
      title: "Luxury Spa Pedicure",
      description: "Indulge in a relaxing foot soak, exfoliation, massage, and perfect polish for rejuvenated feet.",
      price: "$55",
      duration: "60 min",
      icon: <Heart className="w-10 h-10 text-primary/80" />
    },
    {
      id: 4,
      title: "Nail Art Design",
      description: "Express your style with custom nail art, from subtle accents to elaborate designs by our skilled artists.",
      price: "from $20",
      duration: "30+ min",
      icon: <Sparkles className="w-10 h-10 text-primary/80" />
    }
  ];

  // --- Gallery images ---
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1000&auto=format",
      alt: "Pink gel manicure with flowers",
      category: "Gel"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format",
      alt: "French tip manicure design",
      category: "French"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600014770603-0fd6989ee83e?q=80&w=1000&auto=format",
      alt: "Artistic nail design",
      category: "Art"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1610992235683-e42ab16aca8c?q=80&w=1000&auto=format",
      alt: "Minimal nude manicure",
      category: "Minimal"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format",
      alt: "Colorful summer nail art",
      category: "Art"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format",
      alt: "Classic red manicure",
      category: "Classic"
    },
  ];

  // --- Testimonials data ---
  const testimonials = [
    {
      id: 1,
      name: "Sophia Rodriguez",
      role: "Fashion Designer",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      quote: "Elegance Nails transformed my simple ideas into stunning nail art. Their attention to detail and creativity exceeded my expectations."
    },
    {
      id: 2,
      name: "Emma Thompson",
      role: "Marketing Executive",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The luxury pedicure was divine! It's not just a nail service, it's a complete relaxation experience that I look forward to every month."
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Photographer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As someone who works with my hands constantly, I appreciate the durability of their gel extensions. Professional, friendly, and incredibly skilled."
    },
    {
      id: 4,
      name: "Olivia Chen",
      role: "Art Director",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      quote: "The nail artists at Elegance are true masters of their craft. My wedding nails were absolutely perfect and lasted through the honeymoon!"
    }
  ];

  // --- Effects ---
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });

    // Add classes to animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Scroll handler for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Hero image parallax effect
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

    // Testimonials auto-advance
    timerRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, testimonials.length]);

  // --- Handlers ---
  const handlePrevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      handleNextTestimonial();
    }
    if (touchStart - touchEnd < -50) {
      // swipe right
      handlePrevTestimonial();
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    toast.success('Thank you! Your booking request has been received. We will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  // Get current year for footer copyright
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== NAVBAR ===== */}
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

      <main>
        {/* ===== HERO SECTION ===== */}
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

        {/* ===== SERVICES SECTION ===== */}
        <section id="services" className="section bg-neutral-50">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block bg-white text-primary text-sm py-1 px-4 rounded-full mb-4 shadow-sm">
                Our Services
              </div>
              <h2 className="mb-4">Premium Nail Services</h2>
              <p className="section-subtitle">
                Choose from our range of luxury nail treatments, each performed with exceptional care and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(service => (
                <div key={service.id} className="service-card group animate-slide-up opacity-0" style={{ animationDelay: `${0.1 * service.id}s`, animationFillMode: "forwards" }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 mb-4">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-semibold text-lg">{service.price}</div>
                      <div className="text-neutral-500 text-sm">{service.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <a href="#contact" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    Book Now
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="#contact" className="btn btn-primary btn-md">
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* ===== GALLERY SECTION ===== */}
        <section id="gallery" className="section">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-full mb-4">
                Our Work
              </div>
              <h2 className="mb-4">Nail Art Gallery</h2>
              <p className="section-subtitle">
                Browse our collection of stunning nail designs created by our talented artists.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {['All', 'Gel', 'French', 'Art', 'Minimal', 'Classic'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === filter 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeFilter === 'All' 
                ? galleryImages 
                : galleryImages.filter(img => img.category === activeFilter)).map((image, index) => (
                <div 
                  key={image.id} 
                  className="gallery-item animate-scale-in opacity-0 rounded-xl overflow-hidden shadow-md border border-neutral-100"
                  style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <button 
                        onClick={() => setSelectedImage(image.id)}
                        className="btn btn-primary rounded-full p-3"
                        aria-label="View larger image"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{image.alt}</h3>
                    <span className="text-sm text-neutral-500">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="relative max-w-4xl w-full">
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-white hover:text-primary"
                    aria-label="Close lightbox"
                  >
                    <X size={24} />
                  </button>
                  <img 
                    src={galleryImages.find(img => img.id === selectedImage)?.src} 
                    alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className="section relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative animate-slide-in opacity-0" style={{ animationFillMode: "forwards" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format" 
                    alt="Nail artist at work" 
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="text-lg italic font-serif text-neutral-700">
                    "Beauty begins the moment you decide to be yourself."
                  </p>
                  <p className="text-right text-sm text-neutral-500 mt-2">— Coco Chanel</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <div className="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-full mb-4">
                  Our Story
                </div>
                <h2 className="mb-6">Committed to Nail Artistry</h2>
                <p className="mb-4 text-neutral-700">
                  Elegance Nails was founded with a singular vision: to elevate nail care from a routine service to an art form. With over 15 years of experience in the beauty industry, our founder Sophie built a team of passionate nail artists who share her commitment to excellence.
                </p>
                <p className="mb-6 text-neutral-700">
                  We believe that everyone deserves a moment of luxury in their busy lives. Our salon provides not just nail services, but an experience of tranquility and personal care where you can rejuvenate both your nails and your spirit.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-serif text-primary font-medium mb-1">15+</div>
                    <p className="text-neutral-600">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-primary font-medium mb-1">5,000+</div>
                    <p className="text-neutral-600">Happy Clients</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-primary font-medium mb-1">20+</div>
                    <p className="text-neutral-600">Nail Artists</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-primary font-medium mb-1">100+</div>
                    <p className="text-neutral-600">Unique Designs</p>
                  </div>
                </div>
                
                <a href="#contact" className="btn btn-primary btn-md">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section id="testimonials" className="section bg-neutral-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block bg-white text-primary text-sm py-1 px-4 rounded-full mb-4 shadow-sm">
                Client Love
              </div>
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="section-subtitle">
                Our customers' experiences speak volumes about our commitment to excellence.
              </p>
            </div>
            
            <div 
              className="max-w-4xl mx-auto relative" 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Testimonial Carousel */}
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)`, display: 'flex' }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="min-w-full px-4">
                      <div className="testimonial-card">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="mb-4 text-primary">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-primary">★</span>
                              ))}
                            </div>
                            <p className="text-lg md:text-xl italic mb-6 text-neutral-700">
                              "{testimonial.quote}"
                            </p>
                            <div>
                              <h4 className="font-medium text-lg">{testimonial.name}</h4>
                              <p className="text-neutral-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-center mt-8 gap-2">
                <button 
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white border border-neutral-200 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      activeIndex === index ? 'bg-primary' : 'bg-neutral-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
                
                <button 
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white border border-neutral-200 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-full mb-4">
                Get In Touch
              </div>
              <h2 className="mb-4">Book Your Appointment</h2>
              <p className="section-subtitle">
                Schedule your nail session today and experience the artistry and care that sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-neutral-100">
                  <h3 className="text-2xl mb-6">Request an Appointment</h3>
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your phone"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                          Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="">Select a service</option>
                          <option value="Classic Manicure">Classic Manicure</option>
                          <option value="Gel Extensions">Gel Extensions</option>
                          <option value="Luxury Spa Pedicure">Luxury Spa Pedicure</option>
                          <option value="Nail Art Design">Nail Art Design</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                        Preferred Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tell us about any special requests or concerns"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn btn-primary btn-md font-medium"
                    >
                      Request Appointment
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-neutral-100 h-full">
                  <h3 className="text-2xl mb-6">Contact Information</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="contact-info">
                      <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Visit Our Salon</h4>
                        <p className="text-neutral-600">123 Beauty Lane, Suite 45<br />New York, NY 10001</p>
                      </div>
                    </div>
                    
                    <div className="contact-info">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Call Us</h4>
                        <p className="text-neutral-600">(212) 555-7890</p>
                      </div>
                    </div>
                    
                    <div className="contact-info">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email Us</h4>
                        <p className="text-neutral-600">appointments@elegancenails.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-info">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Clock className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Our Hours</h4>
                        <p className="text-neutral-600">
                          Monday - Friday: 9:00 AM - 7:00 PM<br />
                          Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map or Image */}
                  <div className="rounded-lg overflow-hidden h-64 relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30589520445!2d-74.25986630089809!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1713385941021!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Salon Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
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
    </div>
  );
};

export default Index;
