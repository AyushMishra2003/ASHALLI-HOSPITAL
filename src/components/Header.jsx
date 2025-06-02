import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Baby, 
  User, 
  Zap,
  Activity,
  Shield,
  Users,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const specialties = [
    { name: 'Cardiology', icon: Heart, path: '/specialties/cardiology' },
    { name: 'Neurology', icon: Brain, path: '/specialties/neurology' },
    { name: 'Orthopedics', icon: Bone, path: '/specialties/orthopedics' },
    { name: 'Ophthalmology', icon: Eye, path: '/specialties/ophthalmology' },
    { name: 'General Medicine', icon: Stethoscope, path: '/specialties/general-medicine' },
    { name: 'Pediatrics', icon: Baby, path: '/specialties/pediatrics' },
    { name: 'Dermatology', icon: User, path: '/specialties/dermatology' },
    { name: 'Emergency Care', icon: Zap, path: '/specialties/emergency-care' },
    { name: 'Radiology', icon: Activity, path: '/specialties/radiology' },
    { name: 'Oncology', icon: Shield, path: '/specialties/oncology' },
    { name: 'Physiotherapy', icon: Users, path: '/specialties/physiotherapy' }
  ];

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'About Us',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Ashaali Hospital', path: '/about/hospital' },
        { name: 'Our Team', path: '/about/team' }
      ]
    },
    {
      name: 'Specialties',
      path: '/specialties',
      hasDropdown: true,
      dropdownItems: specialties
    },
    {
      name: 'Cases',
      path: '/cases',
      hasDropdown: false
    },
    {
      name: 'Blog',
      path: '/blog',
      hasDropdown: false
    },
    {
      name: 'Gallery',
      path: '/gallery',
      hasDropdown: false
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      hasDropdown: false
    }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12">
              <img 
                src="/path-to-your-logo.png" 
                alt="Ashaali Hospital" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-teal-600">ASHAALI</span>
                <span className="text-orange-400 ml-2">HOSPITAL</span>
              </h1>
              <p className="text-gray-500 text-xs">"Partnership for Health"</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name.toLowerCase().replace(' ', '-'))}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                        isActive(item.path)
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-700 hover:text-teal-600'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                        activeDropdown === item.name.toLowerCase().replace(' ', '-') ? 'rotate-180' : 'group-hover:rotate-180'
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name.toLowerCase().replace(' ', '-') && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 min-w-64 animate-in slide-in-from-top-2 duration-200">
                        {item.name === 'Specialties' ? (
                          <div className="grid grid-cols-2 gap-1 px-2">
                            {item.dropdownItems.map((specialty) => {
                              const IconComponent = specialty.icon;
                              return (
                                <Link
                                  key={specialty.name}
                                  to={specialty.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-600 rounded-lg transition-all duration-200 group"
                                >
                                  <IconComponent className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                                  <span className="text-sm font-medium">{specialty.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="px-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-600 rounded-lg transition-all duration-200 font-medium"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      isActive(item.path)
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${item.name.toLowerCase().replace(' ', '-')}`)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'text-teal-600 bg-teal-50'
                            : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.name.toLowerCase().replace(' ', '-')}` ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === `mobile-${item.name.toLowerCase().replace(' ', '-')}` && (
                        <div className="mt-2 ml-4 space-y-1">
                          {item.dropdownItems.map((dropdownItem) => {
                            const IconComponent = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
                              >
                                {IconComponent && <IconComponent className="w-4 h-4 text-orange-400" />}
                                <span className="text-sm">{dropdownItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Us Button */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg text-center hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;