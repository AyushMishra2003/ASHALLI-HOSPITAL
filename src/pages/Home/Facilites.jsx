import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Stethoscope, Bed, Heart, Activity, Truck, Camera, TestTube, Building, User, Crown, Dumbbell, Coffee, Shield, Zap } from 'lucide-react';

import img1 from '../../assets/facility/ambulance.png'
import img2 from '../../assets/facility/Canteen.png'
import img3 from '../../assets/facility/Diagnostic.png'
import img4 from '../../assets/facility/emergency.png'
import img5 from '../../assets/facility/genral.png'
import img6 from '../../assets/facility/ICU.png'
import img7 from '../../assets/facility/room.png'
import img8 from '../../assets/facility/NICU.png'
import img9 from '../../assets/facility/Pathology.png'
import img10 from '../../assets/facility/Pshyiotherapy.png'
import img11 from '../../assets/facility/semi.png'
import img12 from '../../assets/facility/Ventilator.png'
import { useNavigate } from 'react-router-dom';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white rounded-full p-3 transition-all duration-200 shadow-lg"
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white rounded-full p-3 transition-all duration-200 shadow-lg"
  >
    <ChevronRight size={24} />
  </button>
);

const MedicalFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "ICU",
      description: "Advanced intensive care with 24/7 monitoring and specialized medical equipment for critical patients requiring continuous supervision.",
      icon: <Heart className="w-8 h-8 text-white" />,
      image:img6
    },
    {
      id: 2,
      title: "NICU",
      description: "Specialized neonatal intensive care unit with state-of-the-art equipment for comprehensive newborn care and monitoring systems.",
      icon: <Activity className="w-8 h-8 text-white" />,
      image:img8
    },
    {
      id: 3,
      title: "Emergency Services",
      description: "Immediate medical assistance available round-the-clock for urgent healthcare needs with rapid response capabilities and expert staff.",
      icon: <Shield className="w-8 h-8 text-white" />,
      image: img4
    },
    {
      id: 4,
      title: "Ventilator",
      description: "Advanced respiratory support systems with modern ventilation technology for patients requiring assisted breathing and critical care.",
      icon: <Zap className="w-8 h-8 text-white" />,
      image: img12
    },
    {
      id: 5,
      title: "Ambulance",
      description: "Emergency transportation services equipped with life-saving medical equipment and trained paramedical staff for immediate care.",
      icon: <Truck className="w-8 h-8 text-white" />,
      image: img1
    },
    {
      id: 6,
      title: "Diagnostics",
      description: "Cutting-edge diagnostic tools and expert analysis including X-ray, CT scan, and MRI for accurate medical diagnosis and treatment.",
      icon: <Camera className="w-8 h-8 text-white" />,
      image: img3
    },
    {
      id: 7,
      title: "Pathology",
      description: "Comprehensive laboratory services for accurate diagnostic testing, blood work, and detailed medical analysis with expert pathologists.",
      icon: <TestTube className="w-8 h-8 text-white" />,
      image: img9
    },
    {
      id: 8,
      title: "General Ward",
      description: "Comfortable shared accommodation with essential medical care, nursing support, and patient monitoring services for recovery.",
      icon: <Building className="w-8 h-8 text-white" />,
      image: img5
    },
    {
      id: 9,
      title: "Inpatient Rooms",
      description: "Comfortable, private rooms equipped for extended care and recovery with modern amenities and dedicated medical facilities.",
      icon: <User className="w-8 h-8 text-white" />,
      image:img7
    },
    {
      id: 10,
      title: "Semi Private",
      description: "Shared private rooms offering enhanced comfort and privacy with quality healthcare and personalized medical attention.",
      icon: <Bed className="w-8 h-8 text-white" />,
      image: img11
    },
    {
      id: 11,
      title: "Deluxe",
      description: "Premium accommodation with luxury amenities, personalized medical care, and superior comfort for discerning patients.",
      icon: <Crown className="w-8 h-8 text-white" />,
      image: img7
    },
    {
      id: 12,
      title: "Physiotherapy",
      description: "Rehabilitation services with modern equipment and expert therapists for physical recovery and comprehensive wellness programs.",
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      image: img10
    },
    {
      id: 13,
      title: "Canteen",
      description: "Nutritious meals and refreshments available 24/7 for patients, visitors, and staff with hygienic food preparation standards.",
      icon: <Coffee className="w-8 h-8 text-white" />,
      image: img2
    }
  ];

  const primaryColor = "#18978d";
  const secondaryColor = "#ed8022";

  const navigate=useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
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
    ],
    customPaging: function () {
      return (
        <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-black transition-colors duration-300"></div>
      );
    },
    dotsClass: "slick-dots !bottom-[-60px] !flex !justify-center !gap-3"
  };


  

  return (
    <div className="py-8 md:py-10 lg:py-12 bg-gray-100 lg:px-12 px-4 sm:px-6 md:px-8 ">
      <div className="container  mx-auto  ">


        <div className="lg:text-center text-start mb-10 md:mb-12 px-4 mx-auto">
          {/* Small colored heading at top */}
          <div className="mb-3 md:mb-4 md:text-center text-start">
            <span
              className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wider inline-block px-3 py-1 rounded-full border-2"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
                backgroundColor: `${primaryColor}10` // Light background
              }}
            >
              Our Medical Facilities
            </span>
          </div>

          {/* Main SEO heading */}
          {/* <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 leading-tight md:text-center text-start">
            <span style={{ color: primaryColor }}>Best Specialists</span>
            <span className="text-gray-800"> in </span>
            <span style={{ color: primaryColor }}>Lucknow</span>
          </h1> */}

          {/* Optional subtitle for better SEO */}
          {/* <p className="text-gray-600 text-base md:text-lg mt-4  mx-auto text-start md:text-center">
            State-of-the-art medical facilities designed to provide comprehensive healthcare services with cutting-edge technology and expert care.
          </p> */}
        </div>

        <div className="relative mb-4">
          <Slider {...settings}>
            {facilities.map((facility) => (
              <div key={facility.id} className="px-4">
                <div className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full" onClick={()=>navigate(`/facility/${facility.title.toLowerCase().replace(/\s+/g, '-')}`)}>
                  {/* Image Section */}
                  <div className="relative  overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-bold text-black mb-0 line-clamp-1">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm ">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          background-color: black !important;
          transform: scale(1.2);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MedicalFacilities;