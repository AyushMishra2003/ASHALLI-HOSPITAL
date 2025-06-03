import { useState } from 'react';
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="relative" style={{ background: 'linear-gradient(135deg, #18978d 0%, #3b628b 100%)' }}>
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-white via-blue-200 to-white"></div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                <div className="w-8 h-8 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#13335b' }}></div>
                </div>
                About Us
              </h2>

              {/* Logo placeholder */}
              <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="h-12 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">
                  ASHAALI HOSPITAL
                </div>
              </div>

              <p className="text-gray-200 text-sm leading-relaxed">
                Providing specialized  care with advanced techniques and compassionate service for all patients.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="group bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                  <Facebook size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                  <Youtube size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                  <Linkedin size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                  <Instagram size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center mr-3">
                <ChevronRight size={16} style={{ color: '#13335b' }} />
              </div>
              Navigate
            </h2>
            <ul className="space-y-3">
              {[
                { label: "About Dr. ASHAALI HOSPITAL", link: "/about" },
                { label: "Service 1", link: "/treatments/Service 1" },
                { label: "Service 1", link: "/treatments/Service 1" },
                { label: "NService 1", link: "/treatments/Service 1" },
                { label: "Photo Gallery", link: "/gallery/photos" },
                { label: "Video Gallery", link: "/gallery/videos" },
                { label: "Blog", link: "/blog" },

                { label: "Testimonial", link: "/testimonials" },
                { label: "Contact Us", link: "/contact" },


              ].map((item, index) => (
                <li key={index} className="group">
                  <a
                    href={item.link}
                    className="flex items-center text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Column 3: Connect */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center mr-3">
                <Phone size={16} style={{ color: '#13335b' }} />
              </div>
              Connect
            </h2>

            <div className="space-y-4">
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 w-full">
                <a
                  href="https://www.google.co.in/maps/place/Dr+Rahul+Singh,+Neurosurgeon+in+Lucknow+(Brain,+Spine+%26+Peripheral+nerve+Surgeon)/@26.9227029,80.9444065,17z/data=!3m1!4b1!4m6!3m5!1s0x399bff512d12f739:0x36467f3f86abd718!8m2!3d26.9226981!4d80.9469814!16s%2Fg%2F11rd2pc7wg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" className="flex items-start" >
                  <div className="mr-3 mt-1">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-gray-200 text-sm leading-relaxed">
                    Landmark Advance Neurospine Care Super Speciality Hospital
                  </span>
                </a>
              </div>

              <div className="space-y-3">
                <a href="tel:+918400136465" className="flex items-center group bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Phone size={18} className="mr-3 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-gray-200">+91-8400136465</span>
                </a>


                
                <a href="mailto:info@drrahulneurosurgeon.com" className="flex items-center flex-wrap group bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300 w-full">
                  <Mail size={18} className="mr-3 text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-gray-200 text-sm break-all">
                    info@drrahulneurosurgeon.com
                  </span>
                </a>



                <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <Clock size={18} className="mr-3 text-white" />
                  <span className="text-gray-200">10AM - 8PM</span>
                </div>
              </div>
            </div>
            {/* 
            <div className="mt-6">
              <a href="#" className="inline-block bg-white hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#13335b' }}>
                Admin Login
              </a>
            </div> */}
          </div>

          {/* Column 4: Map & Rating */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center mr-3">
                <MapPin size={16} style={{ color: '#13335b' }} />
              </div>
              Find Us
            </h2>

            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden h-48 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3945773634146!2d80.94440647489535!3d26.922702859662163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff512d12f739%3A0x36467f3f86abd718!2sDr%20Rahul%20Singh%2C%20Neurosurgeon%20in%20Lucknow%20(Brain%2C%20Spine%20%26%20Peripheral%20nerve%20Surgeon)!5e0!3m2!1sen!2sin!4v1748343420506!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


            {/* Google Rating */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <p className="text-gray-200 text-sm mb-2">Google Rating</p>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-white mr-2">5.0</span>
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-300">Based on patient reviews</p>
            </div> */}


          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm">
            <div className="mb-3 md:mb-0 text-gray-200">
              © {year} Dr. Rahul Singh Neurosurgeon || All rights Reserved
            </div>
            <div className="flex items-center text-gray-200 ml-1" >
              <span> Powered by: </span>
              <span className="ml-2 font-semibold text-white">
                <a href='https://www.codecrafter.co.in/'>
                  Code Crafter Web Solution
                </a>

              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}