import React from 'react';
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone,
  Baby,
  Users,
  Stethoscope,
  Zap,
  Scissors,
  Activity,
  Shield,
  Pill,
  Smile,
  UserCheck,
  Waves,
  Sun,
  Camera,
  Thermometer,
  Headphones,
  Flower
} from 'lucide-react';

const SpecialtiesSection = () => {
  const specialties = [
    {
      name: 'Cardiology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      description: 'Heart & Cardiovascular Care'
    },
    {
      name: 'Neurology',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Brain & Nervous System'
    },
    {
      name: 'Orthopedics',
      icon: Bone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Bone & Joint Care'
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      description: 'Child Healthcare'
    },
    {
      name: 'Ophthalmology',
      icon: Eye,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      description: 'Eye Care & Vision'
    },
    {
      name: 'General Surgery',
      icon: Scissors,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      description: 'Surgical Procedures'
    },
    {
      name: 'Internal Medicine',
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      description: 'General Medical Care'
    },
    {
      name: 'Emergency Medicine',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      description: '24/7 Emergency Care'
    },
    {
      name: 'Oncology',
      icon: Shield,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      description: 'Cancer Treatment'
    },
    {
      name: 'Gynecology',
      icon: Flower,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      description: "Women's Health"
    },
    {
      name: 'Pulmonology',
      icon: Activity,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      description: 'Lung & Respiratory Care'
    },
    {
      name: 'Gastroenterology',
      icon: Pill,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      description: 'Digestive System Care'
    },
    {
      name: 'Dermatology',
      icon: Sun,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
      description: 'Skin Care & Treatment'
    },
    {
      name: 'Psychiatry',
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      description: 'Mental Health Care'
    },
    {
      name: 'Dentistry',
      icon: Smile,
      color: 'from-lime-500 to-green-500',
      bgColor: 'bg-lime-50',
      description: 'Dental Care & Treatment'
    },
    {
      name: 'Radiology',
      icon: Camera,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-50',
      description: 'Medical Imaging'
    },
    {
      name: 'Anesthesiology',
      icon: Thermometer,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      description: 'Anesthesia & Pain Management'
    },
    {
      name: 'ENT',
      icon: Headphones,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      description: 'Ear, Nose & Throat'
    },
    {
      name: 'Nephrology',
      icon: Waves,
      color: 'from-blue-500 to-teal-500',
      bgColor: 'bg-blue-50',
      description: 'Kidney Care'
    },
    {
      name: 'Endocrinology',
      icon: UserCheck,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      description: 'Hormone & Diabetes Care'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">Specialties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services across multiple medical specialties with expert doctors and advanced technology
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div 
                key={index} 
                className={`${specialty.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border border-white/50 hover:scale-105`}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${specialty.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Expert Medical Care?
            </h3>
            <p className="text-gray-600 mb-6">
              Our specialists are here to provide you with the best possible care across all medical fields
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
              <button className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
                View All Doctors
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialtiesSection;