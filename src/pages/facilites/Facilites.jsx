import React, { useState, useEffect } from 'react';
import { Activity, Users, Calendar, MapPin, Phone, Building2, Heart, Shield, Truck, Camera, FlaskConical, Bed, Utensils, Waves } from 'lucide-react';

// Mock BreadCrumbs Component
const BreadCrumbsComponent = ({ items, headText }) => (
  <div className="bg-gray-100 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <span key={index}>
            {item.href ? (
              <a href={item.href} className="hover:text-teal-600">{item.label}</a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mt-2">{headText}</h1>
    </div>
  </div>
);

const FacilitiesComponent = () => {
  // State for dynamic data
  const [featuredFacility, setFeaturedFacility] = useState(null);
  const [loading, setLoading] = useState(true);
  // ICU Detailed Data
  const icuData = {
    id: 1,
    title: "ICU (Intensive Care Unit)",
    shortDescription: "State-of-the-art Intensive Care Unit equipped with advanced life support systems, continuous monitoring equipment, and specialized medical staff to provide critical care for patients requiring intensive medical attention.",
    icon: "Heart",
    url: "/facilities/icu",
    capacity: "20 beds",
    availability: "24/7",
    equipment: [
      { id: 1, name: "Mechanical Ventilators", count: 15, status: "Available" },
      { id: 2, name: "Cardiac Monitors", count: 20, status: "Available" },
      { id: 3, name: "Defibrillators", count: 8, status: "Available" },
      { id: 4, name: "Infusion Pumps", count: 25, status: "Available" },
      { id: 5, name: "Central Monitoring System", count: 1, status: "Active" },
      { id: 6, name: "Dialysis Machines", count: 3, status: "Available" },
      { id: 7, name: "X-Ray Machines (Portable)", count: 2, status: "Available" },
      { id: 8, name: "Ultrasound Machines", count: 2, status: "Available" }
    ],
    staff: [
      { id: 1, role: "ICU Specialists", count: 6, shift: "24/7 Coverage" },
      { id: 2, role: "Critical Care Nurses", count: 24, shift: "Round the Clock" },
      { id: 3, role: "Respiratory Therapists", count: 8, shift: "24/7 Available" },
      { id: 4, role: "Physiotherapists", count: 4, shift: "Day & Evening" }
    ],
    services: [
      { id: 1, service: "Post-Operative Care", available: true },
      { id: 2, service: "Trauma Care", available: true },
      { id: 3, service: "Cardiac Emergency Care", available: true },
      { id: 4, service: "Neurological Critical Care", available: true },
      { id: 5, service: "Respiratory Support", available: true },
      { id: 6, service: "Continuous Renal Replacement", available: true },
      { id: 7, service: "Hemodynamic Monitoring", available: true }
    ],
    features: [
      { id: 1, feature: "Individual Patient Rooms", description: "Private ICU rooms with glass partitions" },
      { id: 2, feature: "Advanced Air Filtration", description: "HEPA filtered air circulation system" },
      { id: 3, feature: "Family Consultation Areas", description: "Dedicated spaces for family meetings" },
      { id: 4, feature: "Emergency Response System", description: "Immediate alert and response protocols" }
    ]
  };

  // NICU Detailed Data
const nicuData = 
  {
    id: 2,
    title: "NICU (Neonatal Intensive Care Unit)",
    shortDescription:
      "Specialized unit designed to provide intensive medical attention and support to newborns with critical health conditions, including premature birth, respiratory issues, and congenital disorders.",
    icon: "Baby",
    url: "/facilities/nicu",
    capacity: "15 beds",
    availability: "24/7",
    equipment: [
      { id: 1, name: "Incubators", count: 12, status: "Available" },
      { id: 2, name: "Neonatal Ventilators", count: 10, status: "Available" },
      { id: 3, name: "Phototherapy Units", count: 6, status: "Available" },
      { id: 4, name: "Cardio-Respiratory Monitors", count: 15, status: "Available" },
      { id: 5, name: "Infusion Pumps", count: 20, status: "Available" },
      { id: 6, name: "Central Monitoring System", count: 1, status: "Active" },
      { id: 7, name: "Portable X-Ray Machine", count: 1, status: "Available" },
      { id: 8, name: "CPAP Machines", count: 5, status: "Available" }
    ],
    staff: [
      { id: 1, role: "Neonatologists", count: 4, shift: "24/7 Coverage" },
      { id: 2, role: "NICU Nurses", count: 20, shift: "Round the Clock" },
      { id: 3, role: "Respiratory Therapists", count: 6, shift: "24/7 Available" },
      { id: 4, role: "Pediatric Nutritionists", count: 2, shift: "Day Shift" }
    ],
    services: [
      { id: 1, service: "Preterm Birth Care", available: true },
      { id: 2, service: "Respiratory Distress Treatment", available: true },
      { id: 3, service: "Neonatal Jaundice Therapy", available: true },
      { id: 4, service: "Sepsis Management", available: true },
      { id: 5, service: "Congenital Disorder Monitoring", available: true },
      { id: 6, service: "Nutritional Support", available: true },
      { id: 7, service: "Neonatal Surgery Support", available: true }
    ],
    features: [
      { id: 1, feature: "Temperature-Controlled Incubators", description: "Maintains optimal environment for newborns" },
      { id: 2, feature: "Infection Control Protocols", description: "Strict hygiene and sanitation procedures" },
      { id: 3, feature: "24x7 Parental Access", description: "Dedicated spaces for parents to be near their newborns" },
      { id: 4, feature: "Real-time Monitoring", description: "Continuous observation with alert systems" }
    ]
  }

  
const emergencyData = 
  {
    id: 3,
    title: "Emergency Department (Casualty)",
    shortDescription:
      "24/7 emergency care unit equipped to handle trauma, critical injuries, and acute medical conditions with rapid response and stabilization.",
    icon: "AlertCircle",
    url: "/facilities/emergency",
    capacity: "20 beds",
    availability: "24/7",
    equipment: [
      { id: 1, name: "Defibrillators", count: 5, status: "Available" },
      { id: 2, name: "Cardiac Monitors", count: 10, status: "Available" },
      { id: 3, name: "Ventilators", count: 6, status: "Available" },
      { id: 4, name: "Suction Devices", count: 8, status: "Available" },
      { id: 5, name: "ECG Machines", count: 4, status: "Available" },
      { id: 6, name: "Crash Carts", count: 3, status: "Available" },
      { id: 7, name: "Infusion Pumps", count: 10, status: "Available" },
      { id: 8, name: "Portable X-Ray Unit", count: 1, status: "Available" }
    ],
    staff: [
      { id: 1, role: "Emergency Physicians", count: 6, shift: "24/7 Coverage" },
      { id: 2, role: "Trauma Nurses", count: 15, shift: "Round the Clock" },
      { id: 3, role: "Paramedics", count: 10, shift: "24/7 Available" },
      { id: 4, role: "Surgeons On-Call", count: 3, shift: "As Needed" }
    ],
    services: [
      { id: 1, service: "Trauma Care", available: true },
      { id: 2, service: "Cardiac Emergency Response", available: true },
      { id: 3, service: "Stroke Management", available: true },
      { id: 4, service: "Poisoning Treatment", available: true },
      { id: 5, service: "Burn Treatment", available: true },
      { id: 6, service: "Road Accident Response", available: true },
      { id: 7, service: "Emergency Surgery Prep", available: true }
    ],
    features: [
      { id: 1, feature: "Rapid Triage System", description: "Quick evaluation and categorization of patient urgency" },
      { id: 2, feature: "Ambulance Bay", description: "Dedicated access for emergency vehicle drop-off" },
      { id: 3, feature: "Immediate Resuscitation Area", description: "Equipped for life-saving interventions" },
      { id: 4, feature: "24x7 Medical Imaging Support", description: "X-ray, CT, and ultrasound available round the clock" }
    ]
  }



  // Facilities data array with URLs
  const facilitiesData = [
    {
      id: 1,
      title: icuData.title,
      description: icuData.shortDescription,
      icon: icuData.icon,
      url: icuData.url,
      detailedData: icuData
    },
    {
      id: 2,
      title: nicuData.title,
      description: nicuData.shortDescription,
      icon: nicuData.icon,
      url: nicuData.url,
      detailedData: nicuData
    },
        {
      id: 3,
      title: emergencyData.title,
      description: emergencyData.shortDescription,
      icon: emergencyData.icon,
      url: emergencyData.url,
      detailedData: emergencyData
    },
   
  ];

  // Specialties data array with URLs
  const specialtiesData = [
    { id: 1, name: "PAEDIATRICS & NEONATOLOGY", url: "/specialties/paediatrics" },
    { id: 2, name: "GYNAECOLOGY AND OBSTETRICS", url: "/specialties/gynaecology" },
    { id: 3, name: "ORTHOPEDICS", url: "/specialties/orthopedics" },
    { id: 4, name: "GENERAL MEDICINE", url: "/specialties/general-medicine" },
    { id: 5, name: "GENERAL SURGERY", url: "/specialties/general-surgery" },
    { id: 6, name: "CARDIOLOGY", url: "/specialties/cardiology" },
    { id: 7, name: "ICU", url: "/specialties/icu" },
    { id: 8, name: "GASTROENTEROLOGY", url: "/specialties/gastroenterology" }
  ];

  // Quick facilities overview data
  const quickFacilitiesData = [
    { id: 1, text: "24/7 Emergency & ICU Services" },
    { id: 2, text: "Advanced Diagnostic Services" },
    { id: 3, text: "Multiple Accommodation Options" },
    { id: 4, text: "Rehabilitation Services" }
  ];

  // Breadcrumb data
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      Heart: <Heart className="w-6 h-6" />,
      Shield: <Shield className="w-6 h-6" />,
      Activity: <Activity className="w-6 h-6" />,
      Waves: <Waves className="w-6 h-6" />,
      Truck: <Truck className="w-6 h-6" />,
      Camera: <Camera className="w-6 h-6" />,
      FlaskConical: <FlaskConical className="w-6 h-6" />,
      Bed: <Bed className="w-6 h-6" />,
      Building2: <Building2 className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Utensils: <Utensils className="w-6 h-6" />
    };
    return iconMap[iconName] || <Activity className="w-6 h-6" />;
  };

  // useEffect to dynamically load first index data
  useEffect(() => {
    const loadFeaturedFacility = () => {
      setLoading(true);
      
      // Simulate API call or data loading
      setTimeout(() => {
        // Get first index (0) facility data
        const firstFacility = facilitiesData[2];
        if (firstFacility && firstFacility.detailedData) {
          setFeaturedFacility(firstFacility.detailedData);
        }
        setLoading(false);
      }, 500); // Simulate loading delay
    };

    loadFeaturedFacility();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumbsComponent items={breadcrumbItems} headText={"Facilities"} />

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

            {/* Featured Facility - ICU (First Index) - Dynamic */}
            {loading ? (
              <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </section>
            ) : featuredFacility ? (
              <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg shadow-sm p-6 md:p-8 mb-8 border border-teal-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="text-teal-600 mr-3" style={{color: '#18978d'}}>
                      {getIcon(featuredFacility.icon)}
                    </div>
                    <span>{featuredFacility.title}</span>
                    <span className="ml-3 text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                      Featured Facility
                    </span>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {featuredFacility.capacity}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {featuredFacility.availability}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{featuredFacility.shortDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {/* Equipment Summary */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-orange-500 mr-2" style={{color: '#ed8022'}}>🏥</span>
                      Equipment
                    </h4>
                    <div className="space-y-2">
                      {featuredFacility.equipment.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="text-green-600 font-medium">{item.count}</span>
                        </div>
                      ))}
                      {featuredFacility.equipment.length > 3 && (
                        <div className="text-xs text-gray-500 mt-2">
                          +{featuredFacility.equipment.length - 3} more equipment types
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Staff Summary */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-teal-500 mr-2" style={{color: '#18978d'}}>👨‍⚕️</span>
                      Staff
                    </h4>
                    <div className="space-y-2">
                      {featuredFacility.staff.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.role}</span>
                          <span className="text-blue-600 font-medium">{item.count}</span>
                        </div>
                      ))}
                      {featuredFacility.staff.length > 3 && (
                        <div className="text-xs text-gray-500 mt-2">
                          +{featuredFacility.staff.length - 3} more staff categories
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Services Summary */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-purple-500 mr-2">🔬</span>
                      Services
                    </h4>
                    <div className="space-y-2">
                      {featuredFacility.services.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full mr-2 ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-gray-600">{item.service}</span>
                        </div>
                      ))}
                      {featuredFacility.services.length > 3 && (
                        <div className="text-xs text-gray-500 mt-2">
                          +{featuredFacility.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features Summary */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-indigo-500 mr-2">✨</span>
                      Features
                    </h4>
                    <div className="space-y-2">
                      {featuredFacility.features.slice(0, 3).map((item) => (
                        <div key={item.id} className="text-sm">
                          <div className="text-gray-700 font-medium">{item.feature}</div>
                        </div>
                      ))}
                      {featuredFacility.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-2">
                          +{featuredFacility.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    style={{backgroundColor: '#18978d'}}
                    onClick={() => console.log(`Navigate to: ${featuredFacility.url}`)}
                  >
                    View Full Details
                  </button>
                  <div className="text-sm text-gray-500">
                    Data loaded dynamically from index: 0
                  </div>
                </div>
              </section>
            ) : null}

            {/* Facilities */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Range of Medical Facilities:</h3>
              
              <p className="text-gray-700 mb-6">
                Our hospital offers a comprehensive range of medical facilities and services designed to meet all your healthcare needs. 
                From critical care units to comfortable accommodation and support services, we ensure that every aspect of your 
                medical care is handled with utmost professionalism and care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilitiesData.map((facility, index) => (
                  <div key={facility.id} className="border-l-4 border-teal-500 bg-gray-50 rounded-r-lg p-4 hover:shadow-md transition-shadow cursor-pointer" 
                       style={{borderColor: '#18978d'}}
                       onClick={() => {
                         console.log(`Navigate to: ${facility.url}`);
                         if (facility.detailedData) {
                           console.log('Detailed Data:', facility.detailedData);
                         }
                       }}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center" style={{backgroundColor: '#fef3e2'}}>
                        <div className="text-orange-600" style={{color: '#ed8022'}}>
                          {getIcon(facility.icon)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-800 mb-2">
                          {facility.title}
                          {facility.detailedData && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {facility.detailedData.capacity} • {facility.detailedData.availability}
                            </span>
                          )}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                        {facility.detailedData && (
                          <div className="mt-3 text-xs text-gray-500">
                            <span className="inline-block mr-4">
                              🏥 {facility.detailedData.equipment?.length || 0} Equipment Types
                            </span>
                            <span className="inline-block mr-4">
                              👨‍⚕️ {facility.detailedData.staff?.length || 0} Staff Categories
                            </span>
                            <span className="inline-block">
                              🔬 {facility.detailedData.services?.length || 0} Services
                            </span>
                          </div>
                        )}
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
                {specialtiesData.map((specialty, index) => (
                  <a
                    key={specialty.id}
                    href={specialty.url}
                    className="block py-3 px-4 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Navigate to: ${specialty.url}`);
                    }}
                  >
                    {specialty.name}
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
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center mb-4" 
                      style={{backgroundColor: '#ed8022'}}
                      onClick={() => console.log('Navigate to: /book-appointment')}>
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
                {quickFacilitiesData.map((item) => (
                  <div key={item.id} className="flex items-center text-sm text-blue-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesComponent;