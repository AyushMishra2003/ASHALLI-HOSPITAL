import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const HomeAbout = () => {
    const primaryColor = "#18978d";
    const secondaryColor = "#ed8022";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white font-sans lg:py-10 py-4 sm:py-6 md:py-8">
            {/* Main content */}
            <main className=" mx-auto px-12 container">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left side with images */}
                    <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                        {/* Main image */}
                        <div className="relative">
                            <img
                                src={"https://picsum.photos/1920/1080?random=1"}
                                alt="Ashaali Hospital - Premier Healthcare Services"
                                className="rounded-lg shadow-lg w-full h-auto md:h-96 object-cover"
                            />
                        </div>

                        {/* Decorative stars */}
                        <div className="absolute top-1/4 left-0 transform -translate-x-1/2 text-orange-200 text-4xl">
                            ✦
                        </div>
                        <div className="absolute bottom-1/4 left-1/4 text-orange-200 text-4xl">
                            ✦
                        </div>
                    </div>

                    {/* Right side with text content */}
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <div className="flex items-center mb-2" style={{ color: secondaryColor }}>
                            <span className="mr-2 font-medium">+</span>
                            <span className="font-medium">ABOUT ASHAALI HOSPITAL</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-800 mb-3">
                            Comprehensive Healthcare Excellence & Advanced Medical Solutions
                        </h1>
                        <p className="text-gray-600 mb-2 text-justify">
                            <strong>Ashaali Hospital</strong> is a leading multi-specialty healthcare institution committed to delivering <strong>World-Class Medical Care</strong> across all departments. We provide comprehensive services including <strong>Emergency Care</strong>, <strong>Advanced Surgical Procedures</strong>, <strong>Diagnostic Imaging</strong>, and <strong>Specialized Treatment</strong> programs. Our state-of-the-art facility combines <strong>Modern Technology</strong> with <strong>Compassionate Care</strong>, ensuring every patient receives <strong>Personalized Attention</strong> and <strong>Excellence in Treatment</strong>. From <strong>Cardiology</strong> and <strong>Orthopedics</strong> to <strong>Pediatrics</strong> and <strong>Critical Care</strong>, we are your trusted partner in health and healing.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div className="flex items-center">
                                <div 
                                    className="rounded-full p-1 mr-3"
                                    style={{ 
                                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` 
                                    }}
                                >
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">24/7 Emergency & Critical Care Services</span>
                            </div>

                            <div className="flex items-center">
                                <div 
                                    className="rounded-full p-1 mr-3"
                                    style={{ 
                                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` 
                                    }}
                                >
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Advanced Surgical & Diagnostic Facilities</span>
                            </div>

                            <div className="flex items-center">
                                <div 
                                    className="rounded-full p-1 mr-3"
                                    style={{ 
                                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` 
                                    }}
                                >
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Multi-specialty Medical Expertise</span>
                            </div>

                            <div className="flex items-center">
                                <div 
                                    className="rounded-full p-1 mr-3"
                                    style={{ 
                                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` 
                                    }}
                                >
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Patient-centered care with modern technology</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeAbout;