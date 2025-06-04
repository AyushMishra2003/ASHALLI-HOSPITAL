import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Microscope, 
  Truck, 
  Cross, 
  Monitor, 
  Users,
  ChevronRight,
  Phone,
  Clock
} from 'lucide-react';

const HospitalFacilities = () => {
  const [selectedFacility, setSelectedFacility] = useState('emergency');

  const facilities = {
    emergency: {
      id: 'emergency',
      title: 'Emergency',
      icon: AlertTriangle,
      description: 'The hospital is well-equipped with state-of-the-art emergency equipment and a vastly experienced team of multidisciplinary doctors and nurses, capable of handling any type of emergency cases.',
      image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['24/7 Emergency Services', 'Advanced Life Support', 'Trauma Care Unit', 'Emergency Surgery'],
      available: '24/7'
    },
    laboratory: {
      id: 'laboratory',
      title: 'Laboratory Services',
      icon: Microscope,
      description: 'Our state-of-the-art laboratory provides comprehensive diagnostic services with advanced equipment and experienced technicians to ensure accurate and timely results.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Blood Tests', 'Pathology', 'Microbiology', 'Biochemistry Analysis'],
      available: '6 AM - 10 PM'
    },
    ambulance: {
      id: 'ambulance',
      title: 'Ambulance',
      icon: Truck,
      description: 'Our fully equipped ambulance service provides immediate emergency transportation with trained paramedics and advanced life support systems.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Emergency Transportation', 'Trained Paramedics', 'Advanced Life Support', 'GPS Tracking'],
      available: '24/7'
    },
    pharmacy: {
      id: 'pharmacy',
      title: 'Pharmacy',
      icon: Cross,
      description: 'Our in-house pharmacy stocks a comprehensive range of medications and medical supplies, ensuring patients have access to prescribed treatments.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Prescription Medications', 'Over-the-counter Drugs', 'Medical Supplies', 'Home Delivery'],
      available: '8 AM - 8 PM'
    },
    xray: {
      id: 'xray',
      title: 'Digital X-Ray',
      icon: Monitor,
      description: 'Advanced digital X-ray technology provides high-quality imaging with reduced radiation exposure for accurate diagnosis and treatment planning.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Digital Radiography', 'CT Scan', 'MRI Services', 'Ultrasound'],
      available: '24/7'
    },
    specialist: {
      id: 'specialist',
      title: 'Specialist Medical Team',
      icon: Users,
      description: 'Our team of experienced specialists across various medical fields provides comprehensive healthcare services with personalized treatment plans.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics'],
      available: '9 AM - 6 PM'
    }
  };

  const facilityList = Object.values(facilities);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-10 py-8 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Facilities at the Hospital 
            <span className="text-[#18978d]"> (24/7)</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            During your stay at Sanjeevini, we ensure that you get the best medical facilities combined with personal attention. Our Facilities include:
          </p>
        </div>

        {/* Main Facility Display */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-96">
                <img
                  src={facilities[selectedFacility].image}
                  alt={facilities[selectedFacility].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  {React.createElement(facilities[selectedFacility].icon, {
                    className: "w-8 h-8 text-[#ed8022] mr-4"
                  })}
                  <h2 className="text-3xl font-bold text-gray-800">
                    {facilities[selectedFacility].title}
                  </h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {facilities[selectedFacility].description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-[#18978d]">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Available: {facilities[selectedFacility].available}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facilities[selectedFacility].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-[#ed8022] mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {facilityList.map((facility) => {
            const IconComponent = facility.icon;
            const isSelected = selectedFacility === facility.id;
            
            return (
              <button
                key={facility.id}
                onClick={() => setSelectedFacility(facility.id)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isSelected 
                    ? 'bg-[#ed8022] text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-[#18978d] hover:text-white shadow-md'
                }`}
              >
                <div className="p-4 lg:p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <IconComponent className={`w-8 h-8 lg:w-12 lg:h-12 transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-[#18978d] group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className="font-bold text-xs lg:text-sm leading-tight">
                    {facility.title}
                  </h3>
                </div>
                
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#18978d] to-[#ed8022] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6 text-lg opacity-90">Our medical team is available 24/7 for emergencies</p>
            <button className="bg-white text-[#18978d] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 24/7 Helpline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFacilities;