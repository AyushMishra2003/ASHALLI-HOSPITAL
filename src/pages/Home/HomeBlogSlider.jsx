import React from 'react';
import Slider from 'react-slick';
import { Calendar, User, MessageCircle, Heart, Share2, BookOpen, TrendingUp, Award, Users, Globe, Lightbulb, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogSlider = () => {
    const navigate = useNavigate();

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


    const slugify = (text) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const handleReadMore = (title) => {
        const slug = slugify(title);
        navigate(`/blogs/${slug}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className='bg-gray-100'>
            <div className="px-4 lg:px-2 py-10 sm:py-12 md:py-14 lg:py-12 bg-gray-100 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Blog Posts</h2>
                <div className="slick-equal-height px-4 ">
                    <Slider {...settings} >
                        {blogPosts.map(post => (
                            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-fit">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Category Badge */}
                                    {/* <div className="absolute top-4 left-4">
                                        <span
                                            className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                                            style={{ backgroundColor: primaryColor }}
                                        >
                                            {post.category}
                                        </span>
                                    </div> */}

                                    {/* Icon */}
                                    <div className="absolute top-4 right-4">
                                        <div
                                            className="p-2 rounded-full"
                                            style={{ backgroundColor: `${primaryColor}CC` }}
                                        >
                                            {post.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                                        {post.excerpt}
                                    </p>


            

                                    {/* Read More Button */}
                                    <button
                                        className="mt-4 w-full py-2 px-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                                        style={{ backgroundColor: primaryColor }}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Add this CSS for equal height slick slides */}
<style jsx>{`
  .slick-equal-height .slick-track {
    display: flex !important;
  }
  .slick-equal-height .slick-slide {
    height: inherit !important;
    display: flex !important;
    padding: 0 12px; /* <-- This adds horizontal gap between cards */
  }
  .slick-equal-height .slick-slide > div {
    display: flex;
    height: 100%;
    width: 100%;
  }

  /* Optional: Fix for first/last slide overflow */
  .slick-equal-height {
    margin: 0 -12px;
  }
`}</style>

        </section>
    );
};

export default HomeBlogSlider;