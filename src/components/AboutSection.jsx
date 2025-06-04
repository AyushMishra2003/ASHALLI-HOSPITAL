import React from 'react';
import { Shield } from 'lucide-react';

const AboutComponent = () => {
  return (
    <div className="bg-white py-12 px-4 ">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Hospital Image */}
          <div className="order-2 lg:order-1 ">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://www.sanjeevinihospital.com/wp-content/uploads/2022/10/about.jpg" 
                alt="Ashaali Hospital Building" 
                className="w-full h-90 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2  ">
           <div className="inline-block bg-gradient-to-r from-[#18978d] to-[#ed8022] text-white px-4 py-2 rounded-full mb-6">
              <h1 className="text-2xl md:text-1xl font-bold">About Ashaali Hospitals</h1>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ashaali Hospital, rated as the best hospital in Bangalore, is a Multispeciality and super 
              speciality hospital conceived with an aim to deliver advanced and affordable healthcare to 
              the community at large. Its deep-rooted commitment to imparting quality service at every 
              stage continues to be its strong point in achieving success.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The hospital adds a new dimension to healthcare with a state-of-the-art facility, specially 
              designed to ensure the comfort of our patients and their families. Because your life is 
              most important to us, we at Ashaali have taken all the requisite steps to ensure that 
              our medical and administrative staffs serve you with attention to every minute detail.
            </p>
          </div>
        </div>

        {/* Bottom Image Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'Reception Area',
            'Emergency Ward', 
            'ICU',
            'Surgery Theater',
            'Laboratory',
            'Pharmacy'
          ].map((facility, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://www.sanjeevinihospital.com/wp-content/uploads/2022/10/about1.jpg" 
                alt={facility}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;