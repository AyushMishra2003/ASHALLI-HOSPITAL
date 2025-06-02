import React from 'react';
import { 
  Heart, 
  Shield, 
  Award, 
  Users,
  User,
  Stethoscope
} from 'lucide-react';

const SimpleAboutSection = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Doctors' }
  ];

  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with empathy and respect'
    },
    {
      icon: Shield,
      title: 'Medical Excellence',
      description: 'Highest standards of medical practice and safety'
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Skilled professionals with years of expertise'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Ashaali Hospital</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing exceptional healthcare services for over 15 years with advanced medical technology and compassionate care.
          </p>
        </div>

      

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health, Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">Priority</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Ashaali Hospital, we combine cutting-edge medical technology with personalized care to deliver the best healthcare experience. Our team of experienced doctors and healthcare professionals are committed to your well-being.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From routine check-ups to complex surgeries, we provide comprehensive medical services across multiple specialties, ensuring you receive the right care at the right time.
              </p>
            </div>
            
            {/* Features */}
            {/* <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          {/* Enhanced Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-14 h-14 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
                <p className="text-white/95 leading-relaxed text-lg">
                  To provide exceptional, compassionate healthcare services that enhance the quality of life for our patients and community through advanced medical care and personalized attention.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl rotate-12 shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-teal-300 to-teal-400 rounded-xl -rotate-12 shadow-lg"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-orange-300 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SimpleAboutSection;