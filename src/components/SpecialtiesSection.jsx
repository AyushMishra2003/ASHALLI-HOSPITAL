import React from 'react';
import { ArrowRight, Heart, Brain, Eye, Bone, Baby, Stethoscope, Activity, UserCheck } from 'lucide-react';

const specialties = [
  {
    id: 1,
    title: "Cardiology",
    description: "Expert care for heart conditions and cardiovascular health with state-of-the-art diagnostic equipment.",
    icon: <Heart className="w-8 h-8 text-white" />
  },
  {
    id: 2,
    title: "Neurology",
    description: "Specialized treatment for neurological disorders and brain health with advanced imaging technology.",
    icon: <Brain className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Ophthalmology",
    description: "Comprehensive eye care services including surgery, vision correction, and preventive treatments.",
    icon: <Eye className="w-8 h-8 text-white" />
  },
  {
    id: 4,
    title: "Orthopedics",
    description: "Advanced bone and joint care with minimally invasive surgical techniques and rehabilitation.",
    icon: <Bone className="w-8 h-8 text-white" />
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents with family-centered approach.",
    icon: <Baby className="w-8 h-8 text-white" />
  },
  {
    id: 6,
    title: "Internal Medicine",
    description: "Comprehensive primary care and management of chronic conditions for adult patients.",
    icon: <Stethoscope className="w-8 h-8 text-white" />
  },
  {
    id: 7,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and critical care capabilities.",
    icon: <Activity className="w-8 h-8 text-white" />
  },
  {
    id: 8,
    title: "Geriatrics",
    description: "Specialized care for elderly patients focusing on healthy aging and quality of life.",
    icon: <UserCheck className="w-8 h-8 text-white" />
  }
];

export default function MedicalSpecialties() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.sanjeevinihospital.com/wp-content/uploads/2022/10/background.jpg')`
        }}
      >
        {/* Enhanced Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#18978d]/70 to-black/20"></div>
        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Elegant Decorative Elements */}
      <div className="absolute inset-0 opacity-15">
        {/* Medical cross pattern */}
        {/* <div className="absolute top-20 left-16 w-8 h-24 bg-white/30 rounded-full transform rotate-45"></div>
        <div className="absolute top-32 left-28 w-24 h-8 bg-white/30 rounded-full transform rotate-45"></div> */}
        
        {/* Floating circles with pulse animation */}
        {/* <div className="absolute top-10 right-20 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-10 w-20 h-20 bg-[#ed8022]/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div> */}
        
        {/* Subtle geometric shapes */}
        <div className="absolute bottom-20 left-1/3 w-32 h-32 border-2 border-white/15 rounded-full"></div>
        <div className="absolute top-1/2 right-12 w-24 h-24 border-2 border-[#ed8022]/20 rounded-lg transform rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 py-12 lg:py-20">
        {/* Header with enhanced styling */}
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            {/* <div className="w-16 h-1 bg-[#ed8022] mx-auto mb-4 rounded-full"></div> */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Medical 
              <span className="block text-[#ed8022] bg-gradient-to-r from-[#ed8022] to-[#f4a145] bg-clip-text text-transparent">
                Specialties
              </span>
            </h1>
            {/* <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div> */}
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive healthcare services with expert specialists and 
            <span className="text-[#ed8022] font-medium"> advanced medical technology</span>
          </p>
        </div>

        {/* Enhanced Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 px-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.id}
              className="group relative bg-white/15 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border border-white/30 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#18978d]/0 to-[#ed8022]/0 group-hover:from-[#18978d]/20 group-hover:to-[#ed8022]/20 transition-all duration-500 rounded-2xl"></div>
              
              {/* Icon with enhanced styling */}
              <div className="relative flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/25 group-hover:bg-gradient-to-br group-hover:from-[#18978d] group-hover:to-[#ed8022] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  {specialty.icon}
                </div>
              </div>

              {/* Title with gradient effect */}
              <h3 className="relative text-2xl lg:text-3xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ed8022] group-hover:to-[#f4a145] group-hover:bg-clip-text transition-all duration-500">
                {specialty.title}
              </h3>

              {/* Description with better spacing */}
              <p className="relative text-white/80 text-base lg:text-lg leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-300">
                {specialty.description}
              </p>

              {/* Enhanced button */}
              <button className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#ed8022] to-[#f4a145] hover:from-[#d96d1a] hover:to-[#ed8022] text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform group-hover:scale-105 text-base lg:text-lg shadow-lg hover:shadow-xl group-hover:shadow-[#ed8022]/25">
                <span className="relative z-10">View Details</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ed8022] to-[#f4a145] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <button className="relative group bg-gradient-to-r from-[#18978d] via-[#18978d] to-[#ed8022] hover:from-[#157068] hover:via-[#18978d] hover:to-[#d96d1a] text-white font-bold py-4 px-12 lg:py-5 lg:px-16 rounded-full text-xl lg:text-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[#18978d]/30 overflow-hidden">
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                View All Specialties
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ed8022] to-[#18978d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#18978d] to-[#ed8022] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 transform scale-110"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}