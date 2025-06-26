import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import image2 from "../assets/testbread.jpg"


const ServiceBreadcums = ({ items, headText ,image}) => {

  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1478745519/photo/close-up-of-physiotherapist-working-with-patient-on-the-bed.jpg?s=2048x2048&w=is&k=20&c=viH1nbkn6tMvE49vwoJD-AcFpaDi19PlNqtGO2qbz9Y="})` }} // Background image
      data-aos="fade-in" // Add AOS effect here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-10"></div>

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
                className="hover:text-white text-gray-900 font-semibold transition-colors"
                data-aos="fade-left" // Add AOS effect here
                data-aos-delay={index * 100} // Stagger effects
              >
                {item.label}
              </Link>
            ) : (
              <span className=" text-gray-900 font-semibold" data-aos="fade-right">
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
