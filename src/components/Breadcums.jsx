import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';


const BreadCrumbsComponent = ({ items, headText ,image}) => {

  console.log(headText);
  
  
  // Initialize AOS
  useEffect(() => {
  
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${"https://drmanasaggarwal.com/assets/doctorbg-ZBek6QDT.jpg"})` }} // Background image
 
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black  bg-opacity-80 z-10"></div> */}

      {/* Heading */}
      <h1 className="text-black text-center relative  sora-600 px-4 mb-4 text-3xl" >
        {headText}
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex items-center relative  space-x-1 px-4 text-black text-2xl lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-black">
                <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors"
          
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-black" >
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumbsComponent;
