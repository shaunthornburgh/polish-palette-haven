
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
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
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      // swipe right
      handlePrev();
    }
  };

  useEffect(() => {
    // Auto-advance testimonials
    timerRef.current = window.setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex]);

  return (
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
              onClick={handlePrev}
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
              onClick={handleNext}
              className="p-2 rounded-full bg-white border border-neutral-200 hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
