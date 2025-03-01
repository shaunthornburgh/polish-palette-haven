
import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

// Gallery images - normally these would be from your actual images
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Gel', 'French', 'Art', 'Minimal', 'Classic'];
  
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
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
          {filters.map(filter => (
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
          {filteredImages.map((image, index) => (
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
  );
};

export default Gallery;
