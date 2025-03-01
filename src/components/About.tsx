
import React from 'react';

const About = () => {
  return (
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
  );
};

export default About;
