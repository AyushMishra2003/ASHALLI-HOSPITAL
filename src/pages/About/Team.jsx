import React from 'react'
import BreadCrumbsComponent from '../../components/Breadcums'
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      qualification: "MD, FACC",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized in interventional cardiology with expertise in complex cardiac procedures.",
      phone: "+1 (555) 123-4567",
      email: "dr.sarah@hospital.com"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      qualification: "MD, PhD",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in neurosurgery and treatment of complex neurological disorders.",
      phone: "+1 (555) 234-5678",
      email: "dr.michael@hospital.com"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      qualification: "MD, FAAP",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1594824804732-5f670d7a5569?w=400&h=400&fit=crop&crop=face",
      bio: "Dedicated to providing comprehensive healthcare for children and adolescents.",
      phone: "+1 (555) 345-6789",
      email: "dr.emily@hospital.com"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Orthopedic Surgeon",
      qualification: "MD, FAAOS",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in joint replacement surgery and sports medicine injuries.",
      phone: "+1 (555) 456-7890",
      email: "dr.james@hospital.com"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialization: "Dermatologist",
      qualification: "MD, FAAD",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in cosmetic and medical dermatology with focus on skin cancer prevention.",
      phone: "+1 (555) 567-8901",
      email: "dr.lisa@hospital.com"
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialization: "General Surgeon",
      qualification: "MD, FACS",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced in minimally invasive surgical techniques and emergency surgery.",
      phone: "+1 (555) 678-9012",
      email: "dr.robert@hospital.com"
    },
        {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      qualification: "MD, FACC",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized in interventional cardiology with expertise in complex cardiac procedures.",
      phone: "+1 (555) 123-4567",
      email: "dr.sarah@hospital.com"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      qualification: "MD, PhD",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in neurosurgery and treatment of complex neurological disorders.",
      phone: "+1 (555) 234-5678",
      email: "dr.michael@hospital.com"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      qualification: "MD, FAAP",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1594824804732-5f670d7a5569?w=400&h=400&fit=crop&crop=face",
      bio: "Dedicated to providing comprehensive healthcare for children and adolescents.",
      phone: "+1 (555) 345-6789",
      email: "dr.emily@hospital.com"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Orthopedic Surgeon",
      qualification: "MD, FAAOS",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in joint replacement surgery and sports medicine injuries.",
      phone: "+1 (555) 456-7890",
      email: "dr.james@hospital.com"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialization: "Dermatologist",
      qualification: "MD, FAAD",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in cosmetic and medical dermatology with focus on skin cancer prevention.",
      phone: "+1 (555) 567-8901",
      email: "dr.lisa@hospital.com"
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialization: "General Surgeon",
      qualification: "MD, FACS",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced in minimally invasive surgical techniques and emergency surgery.",
      phone: "+1 (555) 678-9012",
      email: "dr.robert@hospital.com"
    }
  ];

  
  const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumbsComponent items={breadcrumbItems} headText={"About Team"} />




      {/* Team Members Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Medical Professionals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#18978d] to-[#ed8022] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings years of experience and specialized knowledge 
              to ensure you receive the highest quality healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 cursor-pointer"
                onClick={()=>navigate("/about/team/name")}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social/Contact Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <button className="bg-[#18978d] hover:bg-[#ed8022] text-white p-3 rounded-full transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </button>
                      <button className="bg-[#18978d] hover:bg-[#ed8022] text-white p-3 rounded-full transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#ed8022] font-semibold text-lg mb-1">
                      {member.specialization}
                    </p>
                    <p className="text-[#18978d] font-medium">
                      {member.qualification}
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-center">
                      <span className="bg-[#18978d]/10 text-[#18978d] px-3 py-1 rounded-full text-sm font-medium">
                        {member.experience} Experience
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#18978d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      {member.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#18978d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      {member.email}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button   onClick={()=>navigate("/about/team/name")}   className="w-full mt-4 bg-gradient-to-r from-[#18978d] to-[#ed8022] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Team