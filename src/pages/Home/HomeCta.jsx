import React from "react";
import { FaStethoscope } from "react-icons/fa";

const HospitalDoctorsCTA = () => {
  return (
    <section
      className="relative py-[4rem] flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${"https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"})` }}
    >
              <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
        
        {/* Header Section */}
        <div className="mb-4">
          <div className="flex justify-center mb-6">
            <FaStethoscope className="text-white h-16 w-16" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Meet Our Most <span className="text-[#18978d]">Experienced</span> Doctors
          </h2>
          <p className="text-xl sm:text-2xl text-gray-100 mb-4 max-w-4xl mx-auto leading-relaxed">
            Our Experienced Medical Team: Your Partners in Health
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Dedicated professionals with decades of combined experience, committed to providing exceptional healthcare and personalized treatment for every patient.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
          <button className="bg-[#18978d] hover:bg-[#18978d] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 min-w-[200px]">
            Meet Our Team
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px]">
            Book Consultation
          </button>
        </div>

      </div>


    </section>
  );
};

export default HospitalDoctorsCTA;