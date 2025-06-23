import React from 'react';

const AboutSection = () => {

  const primaryColor = "#18978d";
  const secondaryColor = "#ed8022";
  return (


    <div className="bg-gray-100 py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto lg:px-8 text-center">

        <div className="md:text-center text-start mb-3 md:mb-4 px-6 md:px-8">
          {/* Small colored heading at top */}
          <div className="mb-3 md:mb-4">
            <span
              className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wider inline-block px-3 py-1 rounded-full border-2"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
                backgroundColor: `${primaryColor}10` // Light background
              }}
            >
              About Ashaali Hospital
            </span>
          </div>

          {/* Main SEO heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-2 leading-tight">

            <span style={{ color: primaryColor }}> Your Trusted Destination </span>
            <span className="text-gray-800"> For </span>
            <span style={{ color: primaryColor }}>Comprehensive Medical Care</span>
          </h1>

        </div>

        {/* Content Section */}
        <div className=" px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              Ashaali Hospital is a premier Super Specialty Hospital, committed to delivering comprehensive, compassionate, and world-class medical care—all under one roof. Backed by a team of highly experienced doctors and surgeons, cutting-edge technology, and state-of-the-art infrastructure, we strive to meet every healthcare need with precision and personalized attention.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              Our hospital offers an extensive range of specialties, including <strong>Orthopedics</strong>, <strong>Ophthalmology</strong>, <strong>Pediatrics</strong>, <strong>Neurology</strong>, <strong>General Medicine</strong>, <strong>ENT</strong>, <strong>Gastroenterology</strong>, <strong>General Surgery</strong>, <strong>Urology</strong>, <strong>Nephrology</strong>, <strong>Dental Care</strong>, <strong>Hematology</strong>, <strong>Pulmonology</strong>, <strong>Dermatology</strong>, <strong>Psychiatry</strong>, <strong>Cardiology</strong>, <strong>Oncology</strong>, <strong>ICU & Critical Care</strong>, <strong>Rheumatology</strong>, and <strong>Endocrinology</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              At Ashaali Hospital, we embrace a patient-centric approach, placing your health, well-being, and recovery at the heart of everything we do. From routine check-ups to the most complex treatments, we are dedicated to delivering holistic and high-quality care tailored to each individual.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              Our mission is to emerge as a trusted center of excellence, known for clinical expertise, compassionate service, and exceptional outcomes.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg text-justify lg:text-center">
              Whatever your health journey, Ashaali Hospital is here to walk with you—every step of the way.
            </p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default AboutSection;