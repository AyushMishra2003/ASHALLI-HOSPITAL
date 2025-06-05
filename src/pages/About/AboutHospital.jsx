import React, { useState } from 'react';
import { Heart, Users, Award, Eye, Target, Phone, Mail, MapPin, Calendar, Clock, Stethoscope, UserCheck, Building, Star } from 'lucide-react';
import BreadCrumbsComponent from '../../components/Breadcums';

const AshaaliHospitalAbout = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    { name: 'Emergency Care', icon: '🚑', description: '24/7 emergency medical services' },
    { name: 'Cardiology', icon: '❤️', description: 'Comprehensive heart care' },
    { name: 'Orthopedics', icon: '🦴', description: 'Bone and joint specialists' },
    { name: 'Pediatrics', icon: '👶', description: 'Child healthcare services' },
    { name: 'Surgery', icon: '⚕️', description: 'Advanced surgical procedures' },
    { name: 'Radiology', icon: '📊', description: 'Medical imaging services' }
  ];

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: Calendar },
    { number: '50+', label: 'Expert Doctors', icon: UserCheck },
    { number: '200+', label: 'Beds Available', icon: Building },
    { number: '24/7', label: 'Emergency Care', icon: Clock }
  ];

  const doctors = [
    { name: 'Dr. Rajesh Kumar', specialty: 'Chief Cardiologist', experience: '20+ years', image: '👨‍⚕️' },
    { name: 'Dr. Priya Sharma', specialty: 'Head of Pediatrics', experience: '15+ years', image: '👩‍⚕️' },
    { name: 'Dr. Amit Patel', specialty: 'Orthopedic Surgeon', experience: '18+ years', image: '👨‍⚕️' },
    { name: 'Dr. Sunita Gupta', specialty: 'Emergency Medicine', experience: '12+ years', image: '👩‍⚕️' }
  ];

          const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
       
    ];

  return (
    <div className="min-h-screen bg-gray-50">
        <BreadCrumbsComponent  items={breadcrumbItems} headText={"About Ashaali Hospitals"}/>
      {/* Header Section */}
      {/* <div className="relative bg-gradient-to-r from-teal-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Ashaali Hospitals
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Committed to Excellence in Healthcare - Serving Our Community with Compassion and Advanced Medical Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Phone className="inline-block w-5 h-5 mr-2" />
                Contact Us
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Find Us
              </button>
            </div>
          </div>
        </div>
      </div> */}

   

      {/* Navigation Tabs */}
      {/* <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'vision', label: 'Vision & Mission' },
              { id: 'services', label: 'Services' },
              { id: 'team', label: 'Our Team' },
              { id: 'facilities', label: 'Facilities' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Overview Section */}
        {activeTab  && (
          <div className="space-y-12 py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Ashaali Hospitals
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Established in 2009, Ashaali Hospitals has been a beacon of hope and healing in our community. 
                We are a multi-specialty healthcare institution dedicated to providing world-class medical care 
                with a personal touch. Our state-of-the-art facility combines cutting-edge technology with 
                compassionate care to ensure the best possible outcomes for our patients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4" 
                     style={{ borderLeftColor: index % 2 === 0 ? '#18978d' : '#ed8022' }}>
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-teal-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* About Hospital Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">About Ashaali Hospitals</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Ashaali Hospitals stands as a testament to medical excellence and patient-centered care. 
                    Our journey began with a simple yet profound vision: to make quality healthcare accessible 
                    to everyone in our community.
                  </p>
                  <p>
                    Over the years, we have grown from a small clinic to a comprehensive healthcare facility, 
                    always maintaining our core values of compassion, integrity, and clinical excellence. 
                    Our team of highly qualified medical professionals works tirelessly to ensure that every 
                    patient receives personalized care tailored to their unique needs.
                  </p>
                  <p>
                    We believe that healing is not just about treating illness, but about caring for the whole 
                    person - body, mind, and spirit. This holistic approach sets us apart and makes us a trusted 
                    partner in your healthcare journey.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-8 rounded-2xl">
                <div className="text-center">
                  <Heart className="w-20 h-20 text-teal-600 mx-auto mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h4>
                  <p className="text-gray-700">
                    Every patient who walks through our doors receives the highest standard of care, 
                    delivered with compassion and respect. We are committed to healing, hope, and health for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vision & Mission Section */}
        {activeTab  && (
          <div className="space-y-12  bg-gray-100 py-10">
            <div className="text-center  mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-600">
                <div className="text-center mb-6">
                  <Eye className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our commitment to 
                  clinical excellence, innovative treatments, and compassionate care. We envision a future 
                  where every individual has access to world-class healthcare services that promote healing, 
                  wellness, and a better quality of life.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
                <div className="text-center mb-6">
                  <Target className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide comprehensive, patient-centered healthcare services with the highest standards 
                  of medical excellence. We are dedicated to improving the health and well-being of our 
                  community through innovative treatments, preventive care, and continuous medical education, 
                  all delivered with compassion and integrity.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Compassion</h4>
                  <p className="text-gray-700">We treat every patient with empathy, kindness, and respect.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-gray-700">We strive for the highest standards in everything we do.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Integrity</h4>
                  <p className="text-gray-700">We maintain the highest ethical standards in all our interactions.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        {activeTab && (
          <div className="space-y-12 bg-white py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Medical Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare services delivered by experienced professionals using state-of-the-art equipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4"
                     style={{ borderLeftColor: index % 2 === 0 ? '#18978d' : '#ed8022' }}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab && (
          <div className="space-y-12  bg-gray-100 py-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedicated team of healthcare professionals brings years of experience and expertise to provide you with the best possible care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-6xl mb-4">{doctor.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600">{doctor.experience}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {activeTab === 'facilities' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                World-Class Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our modern infrastructure and advanced medical equipment ensure the highest quality of care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Infrastructure & Equipment</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced ICU Units</h4>
                      <p className="text-gray-700">State-of-the-art intensive care units with 24/7 monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Modern Operation Theaters</h4>
                      <p className="text-gray-700">Fully equipped surgical suites with latest technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Digital Imaging Center</h4>
                      <p className="text-gray-700">Advanced radiology and diagnostic imaging services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Emergency Department</h4>
                      <p className="text-gray-700">Round-the-clock emergency care and trauma services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-8 rounded-2xl">
                <Stethoscope className="w-16 h-16 text-teal-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient-Centered Care</h3>
                <p className="text-gray-700 mb-6">
                  Our facilities are designed with patient comfort and healing in mind. From spacious private rooms 
                  to peaceful healing gardens, every aspect of our environment promotes recovery and well-being.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Private patient rooms with modern amenities</li>
                  <li>✓ Family waiting areas and consultation rooms</li>
                  <li>✓ Pharmacy and laboratory services on-site</li>
                  <li>✓ Ample parking and easy accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      {/* <div className="bg-gradient-to-r from-teal-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl">We're here to help you with all your healthcare needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p>+91 9876543210</p>
              <p>+91 9876543211</p>
            </div>
            <div>
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p>info@ashaalihospitals.com</p>
              <p>emergency@ashaalihospitals.com</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p>123 Medical Center Drive</p>
              <p>Healthcare District, City 123456</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Ashaali Hospitals. All rights reserved. | Committed to Excellence in Healthcare</p>
        </div>
      </footer> */}


    </div>
  );
};

export default AshaaliHospitalAbout;