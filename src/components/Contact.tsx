
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
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
              <form onSubmit={handleSubmit}>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
  );
};

export default Contact;
