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
              About Ashaali Hospitals
            </span>
          </div>

          {/* Main SEO heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 leading-tight">
            <span style={{ color: primaryColor }}>Best Hospital</span>
            <span className="text-gray-800"> in </span>
            <span style={{ color: primaryColor }}>Lucknow</span>
          </h1>

        </div>

        {/* Content Section */}
        <div className=" px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              For the first time in Lucknow, healthcare reaches new heights with an unparalleled blend of world-class expertise,
              advanced infrastructure, and compassionate care at Ashaali Hospitals, Lucknow.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lgtext-justify lg:text-center">
              As a premier hospital in Lucknow for super-specialty services, this state-of-the-art multispecialty hospital is
              designed to become a prominent healthcare destination in Uttar Pradesh. With modern facilities, it serves key
              residential areas across Lucknow, Kanpur, Allahabad, and the surrounding regions. Its strategic location
              ensures seamless accessibility for patients from nearby districts and states.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              Ashaali Hospitals, Lucknow, offers 24/7 Emergency & Critical Care with a fully equipped facility including
              advanced diagnostic services, modern operation theaters, and round-the-clock medical support, ensuring prompt
              medical attention at all times.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-justify lg:text-center">
              The hospital stands out for its Excellence in comprehensive medical care, providing services in Cardiology,
              Oncology, Neurosurgery, Orthopedics, Gastroenterology, Internal Medicine, Pediatrics, and more. Additionally,
              it excels in surgical specialties and offers top-tier medical services with advanced technology and expert care.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg text-justify lg:text-center">
              Setting new benchmarks in patient care, Ashaali Hospitals, Lucknow, is committed to delivering exceptional
              healthcare with precision, expertise, and warmth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;