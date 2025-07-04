import React, { useState } from 'react';
import { Search, User, Phone, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';
import {
  FaProcedures, FaAmbulance, FaXRay, FaBed, FaClinicMedical, FaStethoscope,
  FaTooth, FaWheelchair, FaHospitalAlt, FaEye, FaChild, FaBrain,
  FaHeartbeat, FaUserMd, FaSyringe, FaMicroscope, FaTeeth, FaLungs,
  FaAllergies, FaNotesMedical
} from 'react-icons/fa';
import { MdPsychology } from 'react-icons/md';




const SahyadriHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isFacilityOpen, setIsFacility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  const specialties = [
    // Column 1
    [
      { name: 'Orthopaedics', icon: <FaHospitalAlt /> },
      { name: 'Ophthalmology', icon: <FaEye /> },
      { name: 'Pediatrics', icon: <FaChild /> },
      { name: 'Neurology', icon: <FaBrain /> },
      { name: 'General Medicine', icon: <FaHeartbeat /> },
      { name: 'ENT', icon: <FaUserMd /> },
      { name: 'Gastrology', icon: <FaSyringe /> },
    ],
    // Column 2
    [
      { name: 'General Surgery', icon: <FaMicroscope /> },
      { name: 'Obstetrics & Gynaecology', icon: <FaHeartbeat /> },
      { name: 'Urology', icon: <FaUserMd /> },
      { name: 'Nephrology', icon: <FaTeeth /> },
      { name: 'Dental', icon: <FaTeeth /> },
      { name: 'Hematology', icon: <FaSyringe /> },
      { name: 'Pulmonology', icon: <FaLungs /> },
    ],
    // Column 3
    [
      { name: 'Dermatology', icon: <FaAllergies /> },
      { name: 'Psychiatry', icon: <MdPsychology /> },
      { name: 'Cardiology', icon: <FaHeartbeat /> },
      { name: 'Oncology', icon: <FaNotesMedical /> },
      { name: 'ICU and Critical Care', icon: <FaHospitalAlt /> },
      { name: 'Rheumatology', icon: <FaUserMd /> },
      { name: 'Endocrinology', icon: <FaUserMd /> },
    ]
  ];

  const facilities = [
    // Column 1
    [
      { name: 'ICU', icon: <FaProcedures /> },
      { name: 'NICU', icon: <FaHeartbeat /> },
      { name: 'Emergency', icon: <FaAmbulance /> },
      { name: 'Ventilator', icon: <FaStethoscope /> },
      { name: 'Ambulance', icon: <FaAmbulance /> },
      { name: 'XRay', icon: <FaXRay /> },
      { name: 'Pathology', icon: <FaClinicMedical /> }
    ],
    // Column 2
    [
      { name: 'General Ward', icon: <FaBed /> },
      { name: 'Private', icon: <FaUserMd /> },
      { name: 'Semi Private', icon: <FaUserMd /> },
      { name: 'Deluxe', icon: <FaBed /> },
      { name: 'Physiotherapy', icon: <FaWheelchair /> },
      { name: 'Canteen', icon: <FaTooth /> }
    ]
  ];


  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100  py-[0.3rem] text-sm">
        <div className="container mx-auto ">
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-2 md:hidden">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-xs">Emergency/Appointment</span>
              <a href="tel:+917897934949" className="text-red-600 font-semibold hover:underline">
                +91 7897934949
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="text-white w-3 h-3" />
              </div>
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white w-3 h-3" />
              </div>
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <User className="text-white w-3 h-3" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              {/* <button className="px-4 py-1.5 border border-[#18978d] text-[#18978d] rounded-md hover:bg-red-50 transition-colors text-xs">
                Home Care
              </button> */}
              <button className="px-4 py-1.5 bg-[#18978d] text-white rounded-md transition-colors text-xs w-full">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden md:flex items-center justify-between px-10">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="hidden lg:inline">For Emergency Ambulance/Appointment</span>
              <span className="lg:hidden">Emergency</span>
                  <a href="tel:+917897934949" className="text-red-600 font-semibold hover:underline">
                +91 7897934949
              </a>
              {/* <span className="hidden lg:inline">Second Opinion</span> */}
            </div>

            <div className="flex items-center gap-4">

              <div className="relative xl:block hidden">
                <input
                  type="text"
                  placeholder="Search doctor here"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              {/* Emergency Contacts */}
<div className="flex items-center gap-2">
  {/* Email */}
  <a href="mailto:ashaalihospital@gmail.com" className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
    <User className="text-white w-4 h-4" />
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/917897934949" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
    <MessageSquare className="text-white w-4 h-4" />
  </a>

  {/* Phone Call */}
  <a href="tel:+917897934949" className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
    <Phone className="text-white w-4 h-4" />
  </a>
</div>


              {/* Action Buttons */}
              <div className="flex gap-2">
                {/* <button className="px-4 py-1.5 border border-[#18978d] text-[#18978d] rounded-md hover:bg-red-50 transition-colors text-sm">
                  Home Care
                </button> */}
                <Link className="px-4 py-1.5 bg-[#18978d] lg:block xl:hidden text-white rounded-md transition-colors text-sm">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between px-10">
            {/* Logo */}
            <Link to={"/"}>
              <div className="w-[20rem]">
                <img src={logo} alt="Ashaali-hospital" />
              </div>
            </Link>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 cursor-pointer font-medium">
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-1 text-gray-700 hover:text-teal-600 cursor-pointer">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </div>

                {isOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                    <ul className="py-2 text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-teal-100 cursor-pointer">
                        <Link to="/about/ashaali-hospitals">About Ashaali Hospital</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-teal-100 cursor-pointer">
                        <Link to="/about/team">Find A Doctor</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="relative flex items-center gap-1 text-gray-700 hover:text-teal-600 cursor-pointer"
                onMouseEnter={() => setIsSpecialtiesOpen(true)}
                onMouseLeave={() => setIsSpecialtiesOpen(false)}
              >
                <span className="text-gray-700 font-medium">Specialties</span>
                <ChevronDown className="w-4 h-4" />

                {/* Specialties Dropdown */}
                {isSpecialtiesOpen && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl  rounded-lg px-4 py-2 z-50 w-screen max-w-2xl ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                      {specialties.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2 ">
                          {column.map((specialty, index) => (
                            <Link
                              key={index}
                              to={`/department/${specialty.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-sm text-black hover:text-red-500 transition-colors py-1"
                            >
                              <span style={{ color: '#18978d' }}>{specialty.icon}</span>
                              <span>{specialty.name}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative flex items-center gap-1 text-gray-700 hover:text-teal-600 cursor-pointer"
                onMouseEnter={() => setIsFacility(true)}
                onMouseLeave={() => setIsFacility(false)}
              >
                <span className="text-gray-700 font-medium">Facility</span>
                <ChevronDown className="w-4 h-4" />

                {isFacilityOpen && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl border rounded-lg px-2 py-2 z-50 w-screen max-w-[20rem]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                      {facilities.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-1">
                          {column.map((facility, index) => (
                            <Link
                              key={index}
                              to={`/facility/${facility.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 transition-colors py-1"
                            >
                              <span style={{ color: '#18978d' }} className="text-base">{facility.icon}</span>
                              <span>{facility.name}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>





              <Link to="/gallery" className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Gallery
              </Link>

              <Link to="/blogs" className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Blogs
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Contact Us
              </Link>

              {/* <Link to="/about/team" className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Find A Doctor
              </Link> */}
            </nav>

            <Link to={"/contact"} className="px-4 hidden xl:block   py-1.5 bg-[#18978d] text-white rounded-md transition-colors text-sm">
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctor here"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <nav className="py-4 space-y-2">

                {/* Home */}
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                >
                  Home
                </Link>

                {/* About Section */}
                <div>
                  <div
                    className="flex items-center justify-between text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>About</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  {isOpen && (
                    <div className="pl-6">
                      <Link to="/about/ashaali-hospitals" className="block py-1 text-gray-600 hover:text-teal-600">
                        About Ashaali Hospital
                      </Link>
                      <Link to="/about/team" className="block py-1 text-gray-600 hover:text-teal-600">
                        Find A Doctor
                      </Link>
                    </div>
                  )}
                </div>

                {/* Specialties Section */}
                <div>
                  <div
                    className="flex items-center justify-between text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                    onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                  >
                    <span>Specialties</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  {isSpecialtiesOpen && (
                    <div className="pl-6 space-y-1">
                      {specialties.flat().map((specialty, index) => (
                        <Link
                          key={index}
                          to={`/department/${specialty.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-600 hover:text-teal-600"
                        >
                          {specialty.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Facility Section */}
                <div>
                  <div
                    className="flex items-center justify-between text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                    onClick={() => setIsFacilityOpen(!isFacilityOpen)}
                  >
                    <span>Facility</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  {isFacilityOpen && (
                    <div className="pl-6 space-y-1">
                      {facilities.flat().map((facility, index) => (
                        <Link
                          key={index}
                          to={`/facility/${facility.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-600 hover:text-teal-600"
                        >
                          {facility.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Static Links */}
                <Link
                  to="/gallery"
                  className="block text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                >
                  Gallery
                </Link>
                <Link
                  to="/blogs"
                  className="block text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SahyadriHeader;