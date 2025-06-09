import React from 'react';
import { Activity, Users, Calendar, MapPin, Phone, Building2, Heart, Shield, Truck, Camera, FlaskConical, Bed, Utensils, Waves } from 'lucide-react';
import BreadCrumbsComponent from '../../components/Breadcums';

const FacilitiesComponent = () => {
  const facilities = [
    {
      title: "ICU (Intensive Care Unit)",
      description: "State-of-the-art Intensive Care Unit equipped with advanced life support systems, continuous monitoring equipment, and specialized medical staff to provide critical care for patients requiring intensive medical attention.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "NICU (Neonatal Intensive Care Unit)",
      description: "Specialized care unit designed for newborns and premature babies requiring intensive medical care. Equipped with incubators, ventilators, and specialized monitoring equipment for neonatal care.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency medical services with fully equipped trauma care facilities, emergency response team, and immediate medical intervention capabilities for all types of medical emergencies.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Ventilator Support",
      description: "Advanced mechanical ventilation systems to assist patients with breathing difficulties. Our ventilators are equipped with the latest technology for both invasive and non-invasive ventilation support.",
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: "Ambulance Services",
      description: "Fully equipped mobile ICU ambulances available 24/7 for emergency transportation. Our ambulances are staffed with trained paramedics and equipped with life-saving medical equipment.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "X-Ray Services",
      description: "Digital X-ray imaging services with advanced radiographic equipment for accurate diagnosis. Our radiology department provides high-quality imaging services for various medical conditions.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Pathology Laboratory",
      description: "Comprehensive pathology services with advanced laboratory equipment for accurate diagnosis. We offer a wide range of blood tests, urine tests, and other diagnostic laboratory services.",
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      title: "General Ward",
      description: "Comfortable general ward facilities with essential medical care and nursing services. Our general wards provide a healing environment with proper ventilation and hygiene standards.",
      icon: <Bed className="w-6 h-6" />
    },
    {
      title: "Private Rooms",
      description: "Luxurious private rooms with attached bathrooms, individual air conditioning, TV, and dedicated nursing care. Designed for patients who prefer privacy and premium comfort during their stay.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Semi-Private Rooms",
      description: "Comfortable semi-private accommodation with shared facilities, air conditioning, and quality nursing care. An ideal balance between comfort and affordability for patient care.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Deluxe Rooms",
      description: "Premium deluxe accommodation with modern amenities, spacious rooms, premium furnishing, and personalized care services for an enhanced hospital experience.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Physiotherapy",
      description: "Comprehensive physiotherapy and rehabilitation services with modern equipment and experienced therapists. We provide treatment for musculoskeletal disorders and post-operative rehabilitation.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Canteen Services",
      description: "Well-maintained canteen facility providing nutritious meals, snacks, and beverages for patients, visitors, and staff. We ensure hygienic food preparation and healthy meal options.",
      icon: <Utensils className="w-6 h-6" />
    }
  ];

  const specialties = [
    "PAEDIATRICS & NEONATOLOGY",
    "GYNAECOLOGY AND OBSTETRICS", 
    "ORTHOPEDICS",
    "GENERAL MEDICINE",
    "GENERAL SURGERY",
    "CARDIOLOGY",
    "ICU",
    "GASTROENTEROLOGY"
  ];

        const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
       
    ];

  return (
    <div className="min-h-screen bg-gray-50">
  

  <BreadCrumbsComponent items={breadcrumbItems} headText={"Facilites"}/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Activity className="w-8 h-8 mr-3 text-orange-500" style={{color: '#ed8022'}} />
                Our Hospital Facilities
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  At MedCare Hospital, we are committed to providing comprehensive healthcare services with state-of-the-art facilities 
                  and advanced medical infrastructure. Our hospital is equipped with modern medical technology and amenities designed 
                  to ensure the highest standards of patient care and comfort.
                </p>
                
                <p>
                  Our facility houses specialized departments and services that cater to various medical needs, from emergency care to 
                  specialized treatments. We have invested in cutting-edge medical equipment and technology to deliver accurate 
                  diagnosis and effective treatment options for our patients.
                </p>
                
                <p>
                  The hospital infrastructure is designed with patient comfort and safety in mind, featuring modern accommodation 
                  options, advanced medical equipment, and support services that ensure a comprehensive healthcare experience 
                  under one roof.
                </p>
              </div>
            </section>

            {/* Facilities */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Range of Medical Facilities:</h3>
              
              <p className="text-gray-700 mb-6">
                Our hospital offers a comprehensive range of medical facilities and services designed to meet all your healthcare needs. 
                From critical care units to comfortable accommodation and support services, we ensure that every aspect of your 
                medical care is handled with utmost professionalism and care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="border-l-4 border-teal-500 bg-gray-50 rounded-r-lg p-4 hover:shadow-md transition-shadow" style={{borderColor: '#18978d'}}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center" style={{backgroundColor: '#fef3e2'}}>
                        <div className="text-orange-600" style={{color: '#ed8022'}}>
                          {facility.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-800 mb-2">
                          {facility.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specialties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-teal-600" style={{color: '#18978d'}} />
                Our Specialities
              </h3>
              <div className="space-y-2">
                {specialties.map((specialty, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block py-3 px-4 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {specialty}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg shadow-lg p-6 text-white" style={{background: `linear-gradient(135deg, #18978d 0%, #16a085 100%)`}}>
              <h3 className="text-xl font-bold mb-4">Need Medical Assistance?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our expert medical team is available 24/7 to provide you with the best healthcare services and facility guidance.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center mb-4" style={{backgroundColor: '#ed8022'}}>
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
              <div className="pt-4 border-t border-teal-400">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Mumbai, Maharashtra
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h3>
              <p className="text-red-700 text-sm mb-3">For immediate medical assistance</p>
              <div className="flex items-center justify-between">
                    <span className="text-red-800 font-bold text-lg">+91 7897934949</span>
                <Phone className="w-5 h-5 text-red-600" />
              </div>
            </div>

            {/* Quick Facilities Overview */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Quick Facilities Overview</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  24/7 Emergency & ICU Services
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Advanced Diagnostic Services
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Multiple Accommodation Options
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Rehabilitation Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesComponent;