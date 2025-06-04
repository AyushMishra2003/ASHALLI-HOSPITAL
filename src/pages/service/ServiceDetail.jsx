import React from 'react';
import { Activity, Users, Calendar, MapPin, Phone, Stethoscope } from 'lucide-react';
import BreadCrumbsComponent from '../../components/Breadcums';

const ServiceDetail = () => {
  const facilities = [
    {
      title: "Echocardiogram",
      description: "Also called a Diagnostic Cardiac Ultrasound, this test uses high-frequency sound waves to take pictures of your heart. The type of echocardiogram needed depends upon the nature of the symptom and data required by your cardiologist for evaluation.",
      types: [
        "Transthoracic Echocardiogram (TTE)",
        "Doppler Echocardiogram", 
        "3D- Echo",
        "Intracardiac Echocardiogram (ITE)",
        "M-mode Echocardiogram",
        "Stress Echocardiogram",
        "Transoesophageal Echocardiogram (TEE)"
      ]
    },
    {
      title: "Holter Monitoring",
      description: "This is a method used by doctors to continuously monitor the electrical activity of your heart over an extended period to detect irregular heart rhythms."
    },
    {
      title: "Cath Lab",
      description: "The hospital is well-equipped with a higher cutting-edge technology Cath lab to cater to life-saving procedures and advanced cardiac interventions with precision and safety."
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
      {/* Hero Image Section */}
      {/* <section className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white py-12" style={{background: `linear-gradient(135deg, #18978d 0%, #16a085 100%)`}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Cardiology Hospital in Mumbai
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Advanced cardiac care with state-of-the-art facilities and experienced specialists
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Stethoscope className="w-32 h-32 text-teal-600" style={{color: '#18978d'}} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <BreadCrumbsComponent items={breadcrumbItems} headText={"Service Detail"}/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Activity className="w-8 h-8 mr-3 text-orange-500" style={{color: '#ed8022'}} />
                Cardiology Hospital in Mumbai
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  One of the most critical and key branches of your healthcare system is Cardiology. The department assumes 
                  extreme significance as it deals with the most important organ of your body – your Heart. Hence, by default, the role 
                  of Cardiologists in ensuring your good health through a healthy heart becomes that much more priceless.
                </p>
                
                <p>
                  The Department of Cardiology at MedCare Hospital, the <span className="font-semibold text-teal-700" style={{color: '#18978d'}}>best multispeciality hospital in Mumbai</span>, is designed and 
                  built by keeping the criticality of the sector in mind. The Hospital has left no stone unturned in investing in some of 
                  the latest diagnostic and medical equipment connected with Cardiology with a firm objective to offer Cardiac 
                  services of the highest Quality. A supremely designed Cath Lab with some of the best cardiac evaluation facilities 
                  has been recently added to our list of state-of-the-art infrastructure at the hospital.
                </p>
                
                <p>
                  The Cardiology Department is led by a vastly experienced <span className="font-semibold text-orange-600" style={{color: '#ed8022'}}>Cardiothoracic surgeon in Mumbai</span> with more than three 
                  decades of experience and ably supported by some of the best and most seasoned <span className="font-semibold text-orange-600" style={{color: '#ed8022'}}>cardiologists in Mumbai</span>, with 
                  extensive experience having worked in hospitals of repute.
                </p>
                
                <p>
                  We are well-set with the necessary diagnostic tests connected with Cardiology to ensure that no time is lost in 
                  administering immediate care to patients in distress.
                </p>
              </div>
            </section>

            {/* Facilities */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Facilities Available:</h3>
              
              <p className="text-gray-700 mb-6">
                At MedCare Hospital, your trusted <span className="font-semibold text-teal-700" style={{color: '#18978d'}}>cardiac hospital in Mumbai</span>, uncompromising patient care is all that we focus 
                upon. The Department of Cardiology reflects our commitment to our patients as we have all key facilities under one 
                roof to diagnose and treat different types of heart diseases.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-4">The Key Facilities at the Hospital Include:</h4>
              
              <div className="space-y-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-6" style={{borderColor: '#18978d'}}>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-3" style={{backgroundColor: '#ed8022'}}></div>
                      {facility.title}
                    </h5>
                    <p className="text-gray-700 mb-4">{facility.description}</p>
                    
                    {facility.types && (
                      <div className="ml-6">
                        <p className="text-sm font-medium text-gray-600 mb-2">The types included:</p>
                        <ul className="space-y-1">
                          {facility.types.map((type, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                              {type}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                    style={{':hover': {backgroundColor: '#f0fdfa', color: '#18978d'}}}
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
                Our expert medical team is available 24/7 to provide you with the best healthcare services.
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
                <span className="text-red-800 font-bold text-lg">+91 98765 43210</span>
                <Phone className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;