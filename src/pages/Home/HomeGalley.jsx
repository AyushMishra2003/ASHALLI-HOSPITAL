import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Mountain landscape'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      alt: 'Forest path'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=800&h=600&fit=crop',
      alt: 'Ocean waves'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      alt: 'Desert sunset'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
      alt: 'City skyline'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedImageIndex(0);
  };

  const goToPrevious = () => {
    const prevIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryImages.length - 1;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = selectedImageIndex < galleryImages.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isModalOpen) return;

    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px',
          arrows: false
        }
      }
    ]
  };
        const primaryColor = "#18978d";
  const secondaryColor = "#ed8022";

  return (
    <div className="w-full container mx-auto py-8 lg:py-12 lg:px-12 px-4 sm:px-6 md:px-8">

              <div className="text-center mb-10 md:mb-12 px-4 max-w-5xl mx-auto">
          {/* Small colored heading at top */}
          <div className="mb-3 md:mb-4">
            <span
              className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wider inline-block px-3 py-1 rounded-full border-2"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
                backgroundColor: `${primaryColor}10` // Light background
              }}
            >
         Explore Our Gallery
            </span>
          </div>

          {/* Main SEO heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  " >
           A Glimpse Into Ashaali Hospital’s World-Class Facilities and Care
          </h1>


        </div>
      <div className="gallery-carousel">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={image.id} className="px-1">
              <div
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-60 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-black hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-black rounded-full p-2 transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-black rounded-full p-2 transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .gallery-carousel .slick-dots {
          bottom: -40px;
        }
        
        .gallery-carousel .slick-dots li button:before {
          font-size: 12px;
          color: #18978d;
          opacity: 0.5;
        }
        
        .gallery-carousel .slick-dots li.slick-active button:before {
          color: #18978d;
          opacity: 1;
        }
        
        .gallery-carousel .slick-prev,
        .gallery-carousel .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        
        .gallery-carousel .slick-prev {
          left: 10px;
        }
        
        .gallery-carousel .slick-next {
          right: 10px;
        }
        
        .gallery-carousel .slick-prev:before,
        .gallery-carousel .slick-next:before {
          font-size: 24px;
          color: #18978d;
          text-shadow: 0 0 3px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
          .gallery-carousel .slick-dots {
            bottom: -30px;
          }
          
          .gallery-carousel .slick-dots li button:before {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeGallery;