import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Heart,
  Shield,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Emergency', path: '/emergency' },
    { name: 'Health Checkup', path: '/health-checkup' },
    { name: 'Insurance', path: '/insurance' }
  ];

  const specialties = [
    { name: 'Cardiology', path: '/specialties/cardiology' },
    { name: 'Neurology', path: '/specialties/neurology' },
    { name: 'Orthopedics', path: '/specialties/orthopedics' },
    { name: 'Pediatrics', path: '/specialties/pediatrics' },
    { name: 'Oncology', path: '/specialties/oncology' },
    { name: 'Emergency Care', path: '/specialties/emergency' }
  ];

  const patientServices = [
    { name: 'Patient Portal', path: '/patient-portal' },
    { name: 'Medical Records', path: '/medical-records' },
    { name: 'Lab Reports', path: '/lab-reports' },
    { name: 'Billing & Payment', path: '/billing' },
    { name: 'Pharmacy', path: '/pharmacy' },
    { name: 'Cafeteria', path: '/cafeteria' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-500' }
  ];

  const features = [
    { icon: Heart, title: '24/7 Emergency', desc: 'Round-the-clock care' },
    { icon: Shield, title: 'Advanced Technology', desc: 'State-of-art equipment' },
    { icon: Award, title: 'Expert Doctors', desc: 'Experienced specialists' },
    { icon: Users, title: 'Patient Care', desc: 'Compassionate service' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" >
      {/* Top Section with Features */}
      {/* <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-teal-400">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Links and Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hospital Info */}
            <div className="md:col-span-3 mb-8">
              <a href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12">
                  <img 
                    src="/path-to-your-logo.png" 
                    alt="Ashaali Hospital" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    <span className="text-teal-400">ASHAALI</span>
                    <span className="text-orange-400 ml-2">HOSPITAL</span>
                  </h2>
                  <p className="text-gray-400 text-sm">"Partnership for Health"</p>
                </div>
              </a>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Providing comprehensive healthcare services with compassion, excellence, and innovation. 
                Your health and well-being are our top priorities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-teal-400 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-gray-300">123 Healthcare Avenue, Medical District</p>
                    <p className="text-gray-300">Lucknow, Uttar Pradesh 226001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <a href="tel:+911234567890" className="text-gray-300 hover:text-teal-400 transition-colors">
                      +91 123 456 7890
                    </a>
                    <span className="text-gray-500 ml-2">(24/7 Emergency)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:info@ashaalihospital.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                    info@ashaalihospital.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Clock className="w-5 h-5 text-teal-400 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-gray-300">Emergency: 24/7</p>
                    <p className="text-gray-300">OPD: Mon - Sat, 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-400 flex items-center">
                <ChevronRight className="w-5 h-5 mr-2" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-400 flex items-center">
                <ChevronRight className="w-5 h-5 mr-2" />
                Specialties
              </h3>
              <ul className="space-y-3">
                {specialties.map((specialty, index) => (
                  <li key={index}>
                    <Link 
                      to={specialty.path} 
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{specialty.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-400 flex items-center">
                <ChevronRight className="w-5 h-5 mr-2" />
                Patient Services
              </h3>
              <ul className="space-y-3">
                {patientServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Find Us
            </h3>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-orange-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7267611113967!2d80.94634631504043!3d26.84648998314708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635784954123!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Ashaali Hospital Location"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-gray-800 text-sm font-medium">📍 Ashaali Hospital</p>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact Card */}
            <div className="mt-6 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 shadow-xl">
              <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                24/7 Emergency
              </h4>
              <p className="text-red-100 mb-3">Need immediate medical attention?</p>
              <a 
                href="tel:+911234567890" 
                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ashaali Hospital. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 text-xs text-gray-500">
                <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
                <Link to="/sitemap" className="hover:text-teal-400 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;