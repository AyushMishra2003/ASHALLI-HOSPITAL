import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiClock, FiMapPin, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/cclogo.png'


const Footer = () => {
  const facilities = [
    "ICU", "NICU", "Emergency", "Ventilator", "Ambulance", "XRay", "Pathology", "General Ward", "Private",
    "Semi Private", "Deluxe", "Physiotherapy", "Canteen"
  ];

  const specialties = [
    "Orthopaedics", "Ophthalmology", "Pediatrics", "Neurology", "General Medicine", "ENT", "Gastrology",
    "General Surgery", "Obstetrics & Gynaecology", "Urology", "Nephrology", "Dental", "Hematology"
    // "Pulmonology", "Dermatology", "Psychiatry", "Cardiology", "Oncology", "ICU and Critical Care",
    // "Rheumatology", "Endocrinology"
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hospital Info Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white">Ashali Hospital</h2>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-1" />
                <p>
                  E2/PH-7, Amrapali Yojana Joggers Park Chauraha, <br />
                  Lucknow, Uttar Pradesh 226003
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone />
                <Link to="/">+91-978977934948, 0522-3503390, 3503566</Link>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <p>(Monday-Sunday) 10:00-1:30PM & 6:00-8:30PM</p>
              </div>
              <div className="flex items-center gap-2">
                <FiMail />
                <Link to="/">ashaalihospital@gmail.com</Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Home", "About Ashali", "About Team", "Gallery", "Blogs", "Contact Us",
                "Patients Story", "Career", "Consult Doctors Online",
                "Terms & Conditions", "Privacy Policy", "Refund and Cancellation Policy"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to="/" className="flex items-center gap-0 hover:text-white transition">
                    <FiChevronRight /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Facilities</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {facilities.map((item, idx) => (
                <li key={idx}>
                  <Link to="/" className="flex items-center gap-0 hover:text-white transition">
                    <FiChevronRight /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Specialties</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {specialties.map((item, idx) => (
                <li key={idx}>
                  <Link to="/" className="flex items-center gap-0 hover:text-white transition">
                    <FiChevronRight /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


             <div className="  border-t border-gray-700 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-center flex-wrap gap-2 ">
          <p className="text-sm text-white text-center sm:text-left">
            Copyright © 2025 <span className="font-semibold">Ashaali Hospital</span> || All Rights Reserved ||
          </p>
          <a
            href="https://www.codecrafter.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base text-gray-400 hover:text-main"
          >
            <span className="ml-1 text-white">Developed By:</span>
            <img
              src={logo}
              alt="Code Crafter Web Solutions"
              className="w-24 sm:w-32 max-w-full h-auto object-contain ml-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
