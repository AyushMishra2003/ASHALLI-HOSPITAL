import React from 'react';

const Testinomial = () => {
    const primaryColor = "#13335b"; // Rose/pink
    const secondaryColor = "#18978d"; // Deep purple

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 text-center" style={{ color: secondaryColor }}>
                    Our Testimonial
                </h2>
                <p className="text-lg max-w-3xl mx-auto mb-10 text-justify md:text-center" style={{ color: primaryColor }}>
                   Ashalli Hospital is a skilled  based in Lucknow. His expertise and compassionate care make patients feel truly supported throughout their treatment journey.
                </p>

                <div className="shadow-lg rounded-lg overflow-hidden ">
                    <iframe
                        src="https://widgets.sociablekit.com/google-reviews/iframe/25558445"
                        frameBorder="0"
                        width="100%"
                        height="400"

                        title="Customer Testimonials"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Testinomial;
