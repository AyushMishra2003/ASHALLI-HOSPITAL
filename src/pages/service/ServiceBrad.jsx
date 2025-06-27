import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
// Fix the import path - check if this is correct
import defaultImage from '../../assets/service-breas/icu.jpg' // Fixed typo in folder name

const ServiceBreadcums = ({ items, headText, image: propImage }) => {
  // Use prop image or fallback to imported image
  const backgroundImage = propImage || defaultImage;
  
  // Debug log to check if image is loaded
  console.log('Background image URL:', backgroundImage);
  
  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        // minHeight: '300px' // Ensure minimum height
      }}
    >
      {/* Light overlay for better image visibility */}
      <div className="absolute inset-0  bg-opacity-50 z-10"></div>
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center relative z-20 sora-600 px-4 mb-4 text-gray-900" data-aos="fade-up">
        {headText}
      </h1>
      
      {/* Breadcrumb navigation */}
      <nav className="flex items-center relative z-20 space-x-1 px-4 text-gray-900 font-semibold text-sm lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-gray-900 font-semibold">
                <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-gray-300 text-gray-900 font-semibold transition-colors"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-semibold" data-aos="fade-right">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default ServiceBreadcums;