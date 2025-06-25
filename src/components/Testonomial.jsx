import React, { useEffect } from 'react';

const Testinomial = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);


      const primaryColor = "#18978d";
    const secondaryColor = "#ed8022";

  return (
    <div>
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
                           What Our Patients Say
                        </span>
                    </div>

                    {/* Main SEO heading */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  " >
                      Voices of Trust, Care, and Healing
                    </h1>


                </div>
   
    <div
      className="elfsight-app-58722eb1-6c41-4cda-8e64-d289b7410521  container mx-auto"
      data-elfsight-app-lazy
    ></div>
     </div>
  );
};

export default Testinomial;
