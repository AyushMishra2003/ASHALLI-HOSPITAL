import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hospital Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <h2 className="text-xl font-bold text-white">Ashali</h2>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-semibold text-white">Hospital name</p>
                  <p className="text-sm">Ashali Hospitals, Private Limited</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-semibold text-white">Emergency & Appointment</p>
                  <p className="text-sm">+91 88888 22222</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-semibold text-white">General Enquiry</p>
                  <p className="text-sm">+91 88888 22222</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-sm">feedback@ashalihospitals.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <div>
                  <p className="font-semibold text-white">FAX No.</p>
                  <p className="text-sm">+91 20 6721 5098</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                <div>
                  <p className="font-semibold text-white">Registered Office</p>
                  <p className="text-sm">S.N. 89 & 90, Plot No. 54, Lokmanya Colony, Kothrud, Lucknow 411038, Uttar Pradesh, India</p>
                  <p className="text-sm mt-1">Corporate Identity Number (CIN): U85110PN1996PTC099499</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Specialties</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Orthopaedics</li>
              <li>Ophthalmology</li>
              <li>Pediatrics</li>
              <li>Neurology</li>
              <li>General Medicine</li>
              <li>ENT</li>
              <li>Cardiology</li>
              <li>General Surgery</li>
              <li>Obstetrics & Gynaecology</li>
              <li>Urology & Andrology</li>
              <li>Nephrology</li>
              <li>Dental</li>
              <li>Rheumatology</li>
              <li>Pulmonology</li>
              <li>Dermatology</li>
            </ul>
          </div>

          {/* Facilities & Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Facilities & Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Find A Doctor</li>
              <li>Book Appointment</li>
              <li>Medical Services</li>
              <li>Patient Testimonials</li>
              <li>Pay Online</li>
              <li>Advance Cancer Treatment</li>
              <li>Laser Angioplasty</li>
              <li>Minimally Invasive Cardiac Surgery</li>
              <li>Joint Replacement Surgery</li>
              <li>Robotic Surgery</li>
              <li>International Patients</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Ashali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patients Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consult Doctors Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund and Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-4 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ashali Hospitals Developed By  Code Crafter Web Solutions
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;