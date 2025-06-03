import React, { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadcrumbComponent = ({ headerText = "Page", items = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  console.log(items);
  

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(https://html.awaikenthemes.com/dentaire/images/page-header-bg.svg)`,
          filter: 'brightness(0.65)'
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#18978d] z-0"></div>

      {/* Content */}
      <div className="relative z-0 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col space-y-3">
          <h1 className="text-md sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {headerText}
          </h1>

          <nav className="flex items-center relative z-20 space-x-1  text-gray-300 text-sm lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-white">
                <MdKeyboardArrowRight className="text-md sm:text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors"
                data-aos="fade-left" // Add AOS effect here
                data-aos-delay={index * 100} // Stagger effects
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white" data-aos="fade-right">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
