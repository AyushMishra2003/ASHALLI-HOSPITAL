import { useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const WhyWeChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Advanced Neurosurgical Care",
      description:
        "Specialized in brain, spine and peripheral nerve surgeries with a highly qualified and experienced neurosurgical team.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5A2.5 2.5 0 0 1 14.5 2c1.1 0 2 .9 2 2v7.5A5.5 5.5 0 0 1 11 17H9a5.5 5.5 0 0 1-5.5-5.5V2c0-1.1.9-2 2-2Z" />
          <path d="M12 4.5V17" />
          <path d="M8 17h8" />
        </svg>
      ),
      bgColor: "bg-blue-950",
    },
    {
      id: 2,
      title: "Global Recognition",
      description:
        "Recognized internationally for maintaining global standards and medical excellence in neurosurgical procedures.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      bgColor: "bg-red-500",
    },
    {
      id: 3,
      title: "Highly Trained Team",
      description:
        "Backed by doctors with MS General Surgery and MBBS from reputed institutions offering comprehensive medical care.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      bgColor: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Trusted Associations",
      description:
        "Affiliated with esteemed national and international neurological societies ensuring continual excellence.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgColor: "bg-cyan-500",
    },
  ];

  return (
    <div className="w-full bg-gray-50 lg:py-12 py-8 px-4 md:px-12">
      <div className="container mx-auto lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <button className="bg-gradient-to-r from-[#02B3A8] to-[#FF8904] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium mb-6 transition-all">
              Why Choose Ashalli Hospital
            </button>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#13335b] mb-4">
              Leading Neurosurgical Hospital in Lucknow
            </h2>

            <p className="text-gray-700 mb-8 text-justify md:text-center">
              Ashalli Hospital is dedicated to delivering advanced care in neurosurgery, including brain, spine, and nerve procedures. Our team brings together deep expertise and compassionate care to serve patients with world-class standards in Lucknow.
            </p>

            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`${feature.bgColor} p-3 rounded-full text-white transition-all duration-300 ${hoveredCard === feature.id ? 'scale-110' : ''}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-950 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Credentials */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#3b628b]">
              <h4 className="font-bold text-blue-950 mb-3">Hospital Credentials</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Advanced Neurosurgery Facilities with Modern Equipment</li>
                <li>• Highly Qualified Team with MS, MCh & MBBS Specializations</li>
                <li>• Recognized by National and International Medical Bodies</li>
                <li>• Patient-Centered Approach with 24/7 Emergency Care</li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ashalli Hospital"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeChooseUs;
