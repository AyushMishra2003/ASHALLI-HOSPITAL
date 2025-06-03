import React from 'react';
import { 
  Bone, 
  Eye, 
  Baby, 
  Brain, 
  Stethoscope, 
  Activity, 
  Heart, 
  Scissors, 
  Users, 
  Shield,
  ArrowRight
} from 'lucide-react';

const HomeServices = () => {
  const primaryColor = "#00B4A8";
  const secondaryColor = "#FF8904"

  const services = [
    {
      name: 'Orthopaedics',
      icon: Bone,
      description: 'Comprehensive bone, joint, and musculoskeletal care with advanced treatment options for fractures and injuries.',
      readMore: true,
      link: '/department/orthopaedics',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ophthalmology',
      icon: Eye,
      description: 'Complete eye care services including vision correction, cataract surgery, and retinal treatments.',
      readMore: true,
      link: '/department/ophthalmology',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      description: 'Specialized healthcare for infants, children, and adolescents with comprehensive pediatric services.',
      readMore: true,
      link: '/department/pediatrics',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Neurology',
      icon: Brain,
      description: 'Expert diagnosis and treatment of brain, spine, and nervous system disorders using advanced technology.',
      readMore: true,
      link: '/department/neurology',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isSpecial: true
    },
    {
      name: 'General Medicine',
      icon: Stethoscope,
      description: 'Comprehensive primary healthcare services for adults with focus on prevention and wellness.',
      readMore: true,
      link: '/department/generalmedicine',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'ENT',
      icon: Activity,
      description: 'Specialized care for ear, nose, and throat conditions with modern diagnostic and surgical techniques.',
      readMore: true,
      link: '/department/ent',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Cardiology',
      icon: Heart,
      description: 'Advanced heart care including diagnosis, treatment, and prevention of cardiovascular diseases.',
      readMore: true,
      link: '/department/cardiology',
      image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'General Surgery',
      icon: Scissors,
      description: 'Comprehensive surgical services using minimally invasive techniques for optimal patient outcomes.',
      readMore: true,
      link: '/department/generalsurgery',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleViewDetails = (link) => {
    console.log(`Navigating to: ${link}`);
  };

  const handleViewMore = () => {
    console.log('View more departments clicked');
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className=" mx-auto container px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Quality You Can Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing that grows with you. Try and plan free for 30 days.
          </p>
        </div>

        {/* Services Grid - First 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isSpecial = service.isSpecial;
            
            return (
              <div 
                key={index}
                className={`rounded-3xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer ${
                  isSpecial 
                    ? 'bg-gradient-to-br from-[#00B4A8] via-[#00B4A8] to-[#FF8904] text-white hover:from-purple-800 hover:to-purple-700' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {/* Header with Title and Icon */}
                <div className="px-4 py-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold leading-tight pr-4 ${
                      isSpecial ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.name}
                    </h3>
                    <div className={`p-3 rounded-2xl flex-shrink-0 transition-all duration-300 ${
                      isSpecial 
                        ? 'bg-[#00B4A8] group-hover:bg-[#293c3b]' 
                        : 'bg-[#00B4A8] group-hover:bg-[#293c3b]'
                    }`}>
                      <IconComponent 
                        size={24} 
                        className={isSpecial ? 'text-white' : 'text-[#fff] '} 
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="px-4 pb-6">
                  <p className={`text-sm leading-relaxed ${
                    isSpecial ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="px-4 pb-6">
                  <div className="relative overflow-hidden rounded-2xl h-40">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* View All Details Link */}
                <div className="px-6 pb-6">
                  <button 
                    onClick={() => handleViewDetails(service.link)}
                    className={`text-sm font-medium flex items-center gap-2 transition-all duration-300 group/button ${
                      isSpecial 
                        ? 'text-white hover:text-pink-200' 
                        : 'text-[#00B4A8] '
                    }`}
                  >
                    View All Details
                    <ArrowRight size={14} className="group-hover/button:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>



        {/* View More Departments Button */}
        <div className="text-center">
          <button 
            onClick={handleViewMore}
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#00B4A8] hover:text-[#6fe3dc] flex items-center gap-3 mx-auto group"
          >
            View More Departments
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;