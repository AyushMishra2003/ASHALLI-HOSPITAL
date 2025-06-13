import React from 'react';
import { Calendar, Heart, Users, Percent, Award, Building2 } from 'lucide-react';

const HomeFeatures = () => {
  return (
    <div className=" bg-white">
      {/* Main Hero Section */}
      <section className="py-8" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#18978d] mb-4">
             ASHAALI 
          </h1>
          <p className="text-xl md:text-2xl text-[#18978d] font-medium">
            Best Multi Speciality Hospital In Lucknow
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-3" style={{ backgroundColor: '#f0fffe' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <Calendar className="w-12 h-12" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-700" >Book an</h3>
              <p className="text-sm font-medium text-gray-700" >Appointment</p>
            </div>

            <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-700" >Health Check</h3>
              <p className="text-sm font-medium text-gray-700">Packages</p>
            </div>

               <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-700" >Our</h3>
              <p className="text-sm font-medium text-gray-700" >Doctors</p>
            </div>

              <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Percent className="w-12 h-12" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-700" >Exciting</h3>
              <p className="text-sm font-medium text-gray-700" >Offers</p>
            </div>

                   <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-700" >Our</h3>
              <p className="text-sm font-medium text-gray-700" >Accolades</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-2 text-center shadow-sm hover:shadow-md transition-shadow b0 h-fit">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-8 h-8" style={{ color: '#18978d' }} />
              </div>
              <h3 className="font-medium text-gray-700 text-sm mb-1">Our</h3>
              <p className="text-gray-700 text-sm font-medium">Facilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFeatures;