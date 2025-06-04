import React, { useEffect } from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import BreadcrumbComponent from '../../components/Breadcums';
import { Link, useNavigate } from 'react-router-dom';

const BlogPage = () => {
    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "Normal Delivery and Natural Birth Care",
            excerpt: "Normal delivery is the natural way of childbirth. Learn about the benefits of natural birth, preparation techniques, and how Dr. Monika Pandey ensures safe delivery for mother and baby.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr. Monika Pandey",
            date: "April 15, 2025",
            category: "Maternity Care"
        },
        {
            id: 2,
            title: "C-Section Surgery: When and Why It's Needed",
            excerpt: "Cesarean section is sometimes necessary for safe delivery. Understand the indications, procedure, and post-operative care provided by Dr. Monika Pandey for C-section deliveries.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr. ASHAALI",
            date: "April 10, 2025",
            category: "Surgical Care"
        },
        {
            id: 3,
            title: "Comprehensive Prenatal and Antenatal Care",
            excerpt: "Regular prenatal checkups are essential for healthy pregnancy. Discover the comprehensive antenatal care services and monitoring provided throughout your pregnancy journey.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr.ASHAALI",
            date: "April 5, 2025",
            category: "Pregnancy Care"
        },
        {
            id: 4,
            title: "High-Risk Pregnancy Management and Care",
            excerpt: "Some pregnancies require special attention and monitoring. Learn about high-risk pregnancy conditions and the specialized care provided to ensure safe outcomes for both mother and baby.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr. ASHAALI",
            date: "March 30, 2025",
            category: "Specialized Care"
        },
        {
            id: 5,
            title: "Gynecological Problems and Women's Health",
            excerpt: "Common gynecological issues affect many women. Understand various conditions like PCOS, irregular periods, and infections, along with effective treatment options available.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr.ASHAALI",
            date: "March 25, 2025",
            category: "Women's Health"
        },
        {
            id: 6,
            title: "Infertility Treatment and Fertility Solutions",
            excerpt: "Infertility affects many couples today. Explore the various fertility treatments, diagnostic procedures, and personalized solutions available to help you achieve parenthood.",
            image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            author: "Dr. ASHAALI",
            date: "March 20, 2025",
            category: "Fertility Care"
        }
    ];

    const navigate = useNavigate()

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
            .replace(/^-+|-+$/g, '');

    const handleReadMore = (title) => {
        const slug = slugify(title);
        console.log("slug",slug);
        
        navigate(`/blog/${slug}`);
    };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blogs ' },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <BreadcrumbComponent headText='Our Blogs' items={breadcrumbItems} />
            {/* Blog Content */}
            <div className="container mx-auto xl:px-10 lg:px-6 px-4 py-12">

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="px-2 h-full ">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                {/* Image Container with Fixed Height */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-[#18978d] text-white text-xs px-3 py-1 m-2 rounded-full">
                                        {post.date}
                                    </div>
                                </div>

                                {/* Content Container with Fixed Height */}
                                <div className="p-5 flex flex-col h-48">
                                    {/* Title with Fixed Height */}
                                    <h2 className="text-lg font-bold text-[#ed8022] mb-2 line-clamp-2 h-20">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt with Fixed Height and Line Clamp */}
                                    <p className="text-sm text-[#18978d] line-clamp-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Button - Optional */}
                                    <button
                                        onClick={() => handleReadMore(post.title)}
                                        className="mt-4 text-[#18978d] font-medium flex items-center text-sm hover:underline"
                                    >
                                        Read More
                                        <ArrowRight size={16} className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogPage