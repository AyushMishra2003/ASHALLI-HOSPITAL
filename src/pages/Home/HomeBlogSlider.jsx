import React from 'react';
import { Calendar, User, MessageCircle, Heart, Share2, BookOpen, TrendingUp, Award, Users, Globe, Lightbulb, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const HomeBlogSlider = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const blogPosts = [
        {
            id: 1,
            title: "The Future of Healthcare Technology",
            excerpt: "Exploring how artificial intelligence and machine learning are revolutionizing patient care and medical diagnosis in modern healthcare systems.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Sarah Johnson",
            date: "June 10, 2025",
            readTime: "5 min read",
            likes: 142,
            comments: 28,
            category: "Technology",
            icon: <TrendingUp className="w-6 h-6 text-white" />
        },
        {
            id: 2,
            title: "Mental Health Awareness in Modern Society",
            excerpt: "Understanding the importance of mental health support and breaking the stigma surrounding mental wellness in our communities.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Michael Chen",
            date: "June 8, 2025",
            readTime: "7 min read",
            likes: 89,
            comments: 15,
            category: "Mental Health",
            icon: <Heart className="w-6 h-6 text-white" />
        },
        {
            id: 3,
            title: "Emergency Response: Best Practices",
            excerpt: "Essential guidelines and protocols for effective emergency medical response that can save lives during critical situations.",
            image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Emily Davis",
            date: "June 6, 2025",
            readTime: "4 min read",
            likes: 156,
            comments: 42,
            category: "Emergency Care",
            icon: <Award className="w-6 h-6 text-white" />
        },
        {
            id: 4,
            title: "Advances in Respiratory Care",
            excerpt: "Latest developments in ventilator technology and respiratory therapy techniques improving patient outcomes worldwide.",
            image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Robert Kim",
            date: "June 4, 2025",
            readTime: "6 min read",
            likes: 73,
            comments: 19,
            category: "Respiratory",
            icon: <Lightbulb className="w-6 h-6 text-white" />
        },
        {
            id: 5,
            title: "Mobile Healthcare Solutions",
            excerpt: "How ambulance services and mobile medical units are bridging healthcare gaps in remote and underserved communities.",
            image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Lisa Martinez",
            date: "June 2, 2025",
            readTime: "8 min read",
            likes: 201,
            comments: 55,
            category: "Mobile Health",
            icon: <Globe className="w-6 h-6 text-white" />
        },
        {
            id: 6,
            title: "Diagnostic Imaging Innovations",
            excerpt: "Revolutionary imaging technologies including AI-powered diagnostics that are transforming medical detection and treatment planning.",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. James Wilson",
            date: "May 31, 2025",
            readTime: "5 min read",
            likes: 118,
            comments: 33,
            category: "Diagnostics",
            icon: <Target className="w-6 h-6 text-white" />
        },
        {
            id: 7,
            title: "Laboratory Medicine Revolution",
            excerpt: "Cutting-edge pathology techniques and automated testing systems that are enhancing accuracy and speed in medical diagnosis.",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Amanda Brown",
            date: "May 29, 2025",
            readTime: "6 min read",
            likes: 94,
            comments: 21,
            category: "Laboratory",
            icon: <BookOpen className="w-6 h-6 text-white" />
        },
        {
            id: 8,
            title: "Patient-Centered Ward Design",
            excerpt: "Modern hospital ward layouts and design principles that prioritize patient comfort, safety, and optimal healing environments.",
            image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            author: "Dr. Kevin Lee",
            date: "May 27, 2025",
            readTime: "4 min read",
            likes: 167,
            comments: 38,
            category: "Hospital Design",
            icon: <Users className="w-6 h-6 text-white" />
        }
    ];

    const primaryColor = "#18978d";
    const secondaryColor = "#ed8022";

    // Function to truncate text to a specific character limit
    const truncateText = (text, maxLength = 120) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    const handleReadMore = (title) => {
        alert(`Navigating to: ${title}`);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
    };

    // Get visible posts based on screen size
    const getVisiblePosts = () => {
        const posts = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentSlide + i) % blogPosts.length;
            posts.push(blogPosts[index]);
        }
        return posts;
    };

    // Auto-slide functionality
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='bg-gray-100 '>
            <div className="px-4 lg:px-2 py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Blog Posts</h2>
                
                {/* Custom Slider */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                        style={{ color: primaryColor }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                        style={{ color: primaryColor }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards Container */}
                    <div className="mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getVisiblePosts().map((post, index) => (
                            <div key={`${post.id}-${index}`} className="group">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {/* Icon */}
                                        {/* <div className="absolute top-4 right-4">
                                            <div
                                                className="p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: `${primaryColor}CC` }}
                                            >
                                                {post.icon}
                                            </div>
                                        </div> */}

                                        {/* Category Badge */}
                                        {/* <div className="absolute top-4 left-4">
                                            <span
                                                className="text-xs font-semibold px-3 py-1 rounded-full text-white backdrop-blur-sm"
                                                style={{ backgroundColor: `${primaryColor}E6` }}
                                            >
                                                {post.category}
                                            </span>
                                        </div> */}
                                    </div>

                                    {/* Content Section - Flex grow to push button to bottom */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight min-h-[3.5rem] flex items-start">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt - Fixed height area */}
                                        <div className="flex-grow mb-4">
                                            <p className="text-gray-600 text-sm leading-relaxed min-h-[4.5rem]">
                                                {truncateText(post.excerpt, 120)}
                                            </p>
                                        </div>

                                        {/* Meta Information */}
                                        {/* <div className="border-t pt-4 mb-4">
                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    {post.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <BookOpen className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center gap-1">
                                                        <Heart className="w-3 h-3" />
                                                        {post.likes}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MessageCircle className="w-3 h-3" />
                                                        {post.comments}
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* Read More Button - Always at bottom */}
                                        <button
                                            onClick={() => handleReadMore(post.title)}
                                            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 mt-auto"
                                            style={{ 
                                                backgroundColor: primaryColor,
                                                boxShadow: `0 4px 15px ${primaryColor}40`
                                            }}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 gap-2">
                        {blogPosts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'w-8' 
                                        : 'hover:opacity-75'
                                }`}
                                style={{ 
                                    backgroundColor: index === currentSlide ? primaryColor : '#CBD5E1'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSlider;