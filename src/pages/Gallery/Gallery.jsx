import { useEffect, useRef, useState } from 'react';
import BreadcrumbComponent from '../../components/Breadcums';


import img1 from '../../assets/gallery/gallery1.jpg'
import img2 from '../../assets/gallery/gallery2.jpg'
import img3 from '../../assets/gallery/gallery3.jpg'
import img4 from '../../assets/gallery/gallery4.jpg'
import img5 from '../../assets/gallery/gallery5.jpg'
import img6 from '../../assets/gallery/gallery6.jpg'
import img7 from '../../assets/gallery/gallery7.jpg'
import img8 from '../../assets/gallery/gallery8.jpg'
import img9 from '../../assets/gallery/gallery9.jpg'
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';




const Gallery = () => {
  const [images, setImages] = useState(() => {
    // Initially generate 12 random images
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      url: `https://fastly.picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/300.jpg?hmac=tVnuf6ipAChaHIb960DGsjMuB1Ph3LdohKK5HaC1mig`,
      alt: `Random image ${i + 1}`
    }));
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const addMoreImages = () => {
    const newImages = Array.from({ length: 4 }, (_, i) => ({
      id: images.length + i,
      url: `https://fastly.picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/300.jpg?hmac=tVnuf6ipAChaHIb960DGsjMuB1Ph3LdohKK5HaC1mig`,
      alt: `Random image ${images.length + i + 1}`
    }));
    setImages([...images, ...newImages]);
  };

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === currentImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setCurrentImage(images[newIndex]);
  };


  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ]


  const gallery=[
    {
      "image":img1
    },
    {
      "image":img2
    },
    {
      "image":img3
    },
    {
      "image":img4
    },
    {
      "image":img5
    },

    {
      "image":img7
    },

  ]




  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const sliderRef = useRef(null); // Ref for Slider component

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
    arrows: false, // Disable default arrows since we're using custom ones
  };



  return (
    <section>
      <BreadcrumbComponent headerText='Gallery' items={breadcrumbItems} />
      <div className="relative">
      <div className="bg-white py-6 sm:py-8 lg:py-16">
        <div className="mx-auto container px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
            {gallery.slice().reverse().map((data, index) => (
              <a
                href="#"
                className="group relative flex h-[20rem] items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(index);
                }}
              >
                <img
                  src={data.image}
                  loading="lazy"
                  alt={`Gallery ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="relative w-full max-w-xl p-4 bg-white rounded-lg overflow-hidden">
            <div
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl font-bold cursor-pointer z-10"
            >
              &#10005;
            </div>

            {/* Custom Arrows */}
            <button
              onClick={() => sliderRef.current.slickPrev()} // Use slickPrev()
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black z-50 text-4xl"
            >
              &#10094;
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()} // Use slickNext()
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black z-50 text-4xl"
            >
              &#10095;
            </button>

            <Slider ref={sliderRef} {...settings}>
              {gallery.slice().reverse().map((data, index) => (
                <div key={index}>
                  <img
                    src={data.image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[400px] object-contain rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>

    </section>
  );
}


export default Gallery