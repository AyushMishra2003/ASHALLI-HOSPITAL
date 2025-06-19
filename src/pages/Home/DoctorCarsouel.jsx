import React from 'react';
import Slider from 'react-slick';

const DoctorCarousel = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Abhimanyu Rao Kadapathri",
      department: "Oncology",
      degree: "MBBS, MD Oncology",
      experience: "7+ years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Dr. Abhishek Gautam",
      department: "Gastroenterology & Hepatology",
      degree: "MBBS, DM Gastro",
      experience: "8+ years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Dr. Abhishek Verma",
      department: "Pulmonology",
      degree: "MBBS, MD Pulmonology",
      experience: "7+ years experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Dr. Ajay Bahadur",
      department: "Cardiology",
      degree: "MBBS, DM Cardiology",
      experience: "35+ years experience",
      image: "https://images.unsplash.com/photo-1594824375852-3572c6a8b808?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      department: "Pediatrics",
      degree: "MBBS, MD Pediatrics",
      experience: "14+ years experience",
      image: "https://images.unsplash.com/photo-1600804889194-e2803aee5ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Dr. Anjali Gupta",
      department: "Gynecology",
      degree: "MBBS, MS Gynecology",
      experience: "16+ years experience",
      image: "https://images.unsplash.com/photo-1614790950153-aaf12670e6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 relative">
      {/* Heading */}
      <div className="text-start pt-8 pb-10 px-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  text-[#18978d] font-bold">
          Our Specialists at Ashalli Hospitals
        </h2>
      </div>

      {/* Doctor Carousel */}
      <div className="pb-16 carousel-container">
        <Slider {...settings} className='px-10'>
          {doctors.map((doctor) => (
            <div key={doctor.id} className="px-0">
              <div className="bg-white h-96 flex flex-col shadow-md">
                {/* Doctor Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Doctor Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium mb-1" style={{color: '#18978d'}}>
                      {doctor.department}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      {doctor.degree}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      {doctor.experience}
                    </p>
                  </div>

                  {/* View Profile Button */}
                  <button 
                    className="border-2 text-sm font-medium px-4 py-2 rounded transition-colors duration-300 self-start hover:text-white"
                    style={{
                      borderColor: '#18978d',
                      color: '#18978d'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#18978d';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#18978d';
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .carousel-container .slick-slide {
          padding: 10px !important;
        }
        
        .carousel-container .slick-track {
          display: flex !important;
        }
        
        .carousel-container .slick-slide > div {
          height: 100%;
        }
        
        .carousel-container .slick-dots {
          bottom: 20px !important;
        }
        
        .carousel-container .slick-dots li {
          margin: 0 3px;
        }
        
        .carousel-container .slick-dots li button:before {
          color: #18978d !important;
          font-size: 8px !important;
        }
        
        .carousel-container .slick-dots li.slick-active button:before {
          color: #18978d !important;
        }
        
        .carousel-container .slick-prev,
        .carousel-container .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
        }
        
        .carousel-container .slick-prev:before,
        .carousel-container .slick-next:before {
          color: #18978d !important;
          font-size: 20px !important;
        }
        
        .carousel-container .slick-prev {
          left: 10px;
        }
        
        .carousel-container .slick-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default DoctorCarousel;