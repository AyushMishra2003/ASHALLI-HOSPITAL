import React from 'react';
import { User, Building, Shield, Stethoscope, Search } from 'lucide-react';

const AshaaliComponent = () => {
    return (
        <div className=" bg-gray-100  "       style={{ backgroundColor: '#e8f4f8' }}>


            {/* Main Content */}
            <div className="container mx-auto px-6 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="space-y-4">
                        {/* Logo */}
                        <div className="mb-2">
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-full" style={{ backgroundColor: '#18978d' }}></div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                                </div>
                                <div>
                                    <span className="text-xl font-bold" style={{ color: '#18978d' }}>Ashaali Hospitals</span>
                                    <br />
                                    <span className="text-lg font-semibold text-gray-700">ProHealth</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
                                Meet Our Expert Medical
                                <br />
                                <span style={{ color: '#18978d' }}>Specialists!</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-base leading-relaxed">
                            Ashaali ProHealth is the world's most advanced health check, crafted by expert
                            doctors and AI. Answer a few questions so we can design an individualized health
                            plan for you with free doctor and specialist consultations included!
                        </p>

                        {/* Subheading */}
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                            Customise Your Best Specialists
                        </h2>

                        {/* CTA Button */}
                        <button className="bg-transparent border-2 text-gray-800 px-6 py-2 rounded-full font-semibold hover:text-white transition-all duration-300 flex items-center space-x-2 group border-gray-800 cursor-pointer hover:border-gray-800"
                            style={{ '--hover-bg': '#18978d' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#18978d'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                            <span>View Our Specialists </span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative mx-auto max-w-md lg:max-w-2xl">
                            <img
                                src="https://www.apollohospitals.com/sites/default/files/styles/prohealth_featured/public/2025-06/yoga-girl1.png?h=cd2a7045&itok=iWYpubyP"
                                alt="Woman in yoga pose"
                                className="w-full h-auto object-contain"
                                onError={(e) => {
                                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='16'%3EYoga Image%3C/text%3E%3C/svg%3E";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Icons */}
            <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white rounded-full px-3 py-2 shadow-lg border">
                <div className="rounded-full p-2" style={{ backgroundColor: '#18978d10' }}>
                    <User className="w-4 h-4" style={{ color: '#18978d' }} />
                </div>
                <div className="rounded-full p-2" style={{ backgroundColor: '#18978d10' }}>
                    <Building className="w-4 h-4" style={{ color: '#18978d' }} />
                </div>
                <div className="rounded-full p-2" style={{ backgroundColor: '#18978d10' }}>
                    <Shield className="w-4 h-4" style={{ color: '#18978d' }} />
                </div>
                <div className="rounded-full p-2" style={{ backgroundColor: '#18978d10' }}>
                    <Stethoscope className="w-4 h-4" style={{ color: '#18978d' }} />
                </div>
                <div className="rounded-full p-2" style={{ backgroundColor: '#18978d' }}>
                    <Search className="w-4 h-4 text-white" />
                </div>
            </div>
        </div>
    );
};

export default AshaaliComponent;