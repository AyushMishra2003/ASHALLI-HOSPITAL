import React, { useState } from 'react';
import { Search, User, Phone, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg'


const SahyadriHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
    const [isFacilityOpen, setIsFacility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const specialties = [
    // Column 1
    ['Orthopaedics', 'Ophthalmology', 'Pediatrics', 'Neurology', 'General Medicine'],
    // Column 2  
    ['ENT', 'Cardiology', 'General Surgery', 'Obstetrics & Gynaecology', 'Urology & Andrology'],
    // Column 3
    ['Nephrology', 'Dental', 'Rheumatology', 'Pulmonology', 'Dermatology'],
    // Column 4
    ['Psychiatry', 'Oncology', 'ICU and Critical Care']
  ];

const facilites = [
  // Column 1
  ['ICU', 'NICU', 'Emergency', 'Ventilator', 'Ambulance'],
  // Column 2
  ['Xray', 'Pathology', 'General Ward', 'Private', 'Semi Private'],
  // Column 3
  ['Deluxe', 'Physiotherapy', 'Canteen']
];



  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100  py-2 text-sm">
        <div className="container mx-auto ">
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-2 md:hidden">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-xs">Emergency/Appointment</span>
              <span className="text-red-600 font-semibold">+91 88888 22222</span>
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
              <span className="text-red-600 font-semibold">+91 88888 22222</span>
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
                <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                  <User className="text-white w-4 h-4" />
                </div>
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white w-4 h-4" />
                </div>
                <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white w-4 h-4" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {/* <button className="px-4 py-1.5 border border-[#18978d] text-[#18978d] rounded-md hover:bg-red-50 transition-colors text-sm">
                  Home Care
                </button> */}
                <button className="px-4 py-1.5 bg-[#18978d] lg:block xl:hidden text-white rounded-md transition-colors text-sm">
                  Book Appointment
                </button>
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
            <div className="">
              <img src={logo} alt="ashalli-hospital" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="text-gray-700 hover:text-teal-600 cursor-pointer font-medium">
                Home
              </div>
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
                        About Ashalli Hospital
                      </li>
                      <li className="px-4 py-2 hover:bg-teal-100 cursor-pointer">
                        About Team
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
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl border rounded-lg px-4 py-2 z-50 w-screen max-w-3xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {specialties.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                          {column.map((specialty, index) => (
                            <div
                              key={index}
                              className={`text-sm cursor-pointer hover:text-red-500 transition-colors py-1 ${specialty === 'MomStory' ? 'text-red-500 font-medium' : 'text-gray-700'
                                }`}
                            >
                              {specialty}
                            </div>
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

                {/* Specialties Dropdown */}
                {isFacilityOpen && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl border rounded-lg px-4 py-2 z-50 w-screen max-w-3xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {facilites.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                          {column.map((specialty, index) => (
                            <div
                              key={index}
                              className={`text-sm cursor-pointer hover:text-red-500 transition-colors py-1 ${specialty === 'MomStory' ? 'text-red-500 font-medium' : 'text-gray-700'
                                }`}
                            >
                              {specialty}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>




              <div className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Gallery
              </div>
              <div className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Blogs
              </div>
              <div className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Contact Us
              </div>
              {/* <div className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Patients Story
              </div> */}
              <div className="text-gray-700 hover:text-teal-600 cursor-pointer">
                Find A Doctor
              </div>
            </nav>

            <button className="px-4 hidden xl:block   py-1.5 bg-[#18978d] text-white rounded-md transition-colors text-sm">
              Book Appointment
            </button>

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
              <nav className="py-4 space-y-3">
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Home
                </div>
                <div className="flex items-center justify-between text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between text-gray-700  font-medium cursor-pointer py-2 px-4 hover:bg-gray-50">
                  <span>Specialties</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Gallery
                </div>
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Blogs
                </div>
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Contact Us
                </div>
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Patients Story
                </div>
                <div className="text-gray-700 hover:text-teal-600 cursor-pointer py-2 px-4 hover:bg-gray-50">
                  Find A Doctor
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SahyadriHeader;