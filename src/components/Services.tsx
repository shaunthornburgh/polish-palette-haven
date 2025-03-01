
import React from 'react';
import { Palette, Scissors, Heart, Sparkles } from 'lucide-react';

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

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className="service-card group animate-slide-up opacity-0" style={{ animationDelay: `${0.1 * service.id}s`, animationFillMode: "forwards" }}>
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
  );
};

const Services = () => {
  return (
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-primary btn-md">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
