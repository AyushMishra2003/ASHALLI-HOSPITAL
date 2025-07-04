import React from 'react'

const TruestedAshaali = () => {
    const primaryColor = "#18978d";
    const secondaryColor = "#ed8022";
    
    const features = [
        {
            title: "Expert Medical Team",
            description: "Highly experienced doctors, surgeons, and support staff committed to your well-being."
        },
        {
            title: "Advanced Infrastructure", 
            description: "State-of-the-art operation theatres, ICUs, and diagnostic labs built to global standards."
        },
        {
            title: "24/7 Emergency & Ambulance Support",
            description: "Round-the-clock services that ensure you're never alone in a medical crisis."
        },
        {
            title: "Patient-Centric Approach",
            description: "Personalized care plans and counseling that prioritize your comfort and recovery."
        },
        {
            title: "Transparent & Ethical Practices",
            description: "Honest communication, fair pricing, and trust at every step."
        },
        {
            title: "Comprehensive Specialties Under One Roof",
            description: "From pediatrics to cardiology — all departments, all experts, all at one place."
        }
    ];

    return (
        <div className="lg:px-12 px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14 lg:py-16 bg-white container mx-auto">
                  <div className="text-center mb-10 md:mb-12 p= max-w-5xl mx-auto">
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
                         Why Trust Ashaali 
                        </span>
                    </div>

                    {/* Main SEO heading */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  " >
                  You Deserve Care That’s Advanced, Accessible, and Always Compassionate
                    </h1>


                </div>

            <div className= "mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 hover:transform hover:-translate-y-1"
                            style={{ borderLeftColor: primaryColor }}
                        >
                            <h4 
                                className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight"
                                style={{ color: primaryColor }}
                            >
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TruestedAshaali