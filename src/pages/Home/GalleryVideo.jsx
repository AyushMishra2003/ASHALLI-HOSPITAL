import React, { useState } from 'react';
import { Play, Users, Award, Zap, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

const YouTubeChannelShowcase = () => {
    const [activeInfluencer, setActiveInfluencer] = useState(0);

    // Sample influencer data - replace with your actual data
    // Video data with YouTube thumbnails
    const influencers = [
        {
            id: 1,
            name: "My Vintage Craft",
            handle: "@myvintagecraft",
            timeAgo: "2 days ago",
            videoId: "TXeGd52gkb8",
            videoUrl: "https://youtube.com/shorts/TXeGd52gkb8?si=19eWfLmcHNQpq8AT",



            channelUrl: "https://www.youtube.com/@AshaaliHospital",
            views: "125K",
            likes: "8.5K",
            comments: "234"
        },
        {
            id: 2,
            name: "My Vintage Craft",
            handle: "@myvintagecraft",
            timeAgo: "2 days ago",
            videoId: "uInMp6Lx__U",
            videoUrl: "https://youtube.com/shorts/uInMp6Lx__U?si=EXycwIWUaKowa0UE",
            channelUrl: "https://www.youtube.com/@AshaaliHospital",
            views: "125K",
            likes: "8.5K",
            comments: "234"
        },
        {
            id: 1,
            name: "My Vintage Craft",
            handle: "@myvintagecraft",
            timeAgo: "2 days ago",
            videoId: "TXeGd52gkb8",
            videoUrl: "https://youtube.com/shorts/TXeGd52gkb8?si=19eWfLmcHNQpq8AT",



            channelUrl: "https://www.youtube.com/@AshaaliHospital",
            views: "125K",
            likes: "8.5K",
            comments: "234"
        },
        {
            id: 2,
            name: "My Vintage Craft",
            handle: "@myvintagecraft",
            timeAgo: "2 days ago",
            videoId: "uInMp6Lx__U",
            videoUrl: "https://youtube.com/shorts/uInMp6Lx__U?si=EXycwIWUaKowa0UE",
            channelUrl: "https://www.youtube.com/@AshaaliHospital",
            views: "125K",
            likes: "8.5K",
            comments: "234"
        }, {
            id: 1,
            name: "My Vintage Craft",
            handle: "@myvintagecraft",
            timeAgo: "2 days ago",
            videoId: "TXeGd52gkb8",
            videoUrl: "https://youtube.com/shorts/TXeGd52gkb8?si=19eWfLmcHNQpq8AT",



            channelUrl: "https://www.youtube.com/@AshaaliHospital",
            views: "125K",
            likes: "8.5K",
            comments: "234"
        },

    ];

    const whyChooseUs = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Massive Reach",
            description: "Connect with millions of viewers across our diverse creator network and expand your brand's visibility."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality Content",
            description: "Our creators produce high-quality, engaging content that resonates with audiences and drives results."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Fast Delivery",
            description: "Quick turnaround times ensure your campaigns launch when you need them, keeping you ahead of trends."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Authentic Engagement",
            description: "Build genuine connections with audiences through authentic storytelling and trusted creator partnerships."
        }
    ];

      const primaryColor = "#18978d";
  const secondaryColor = "#ed8022";

    return (
        <div className=" bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="w-full mx-auto  py-8 sm:py-12 lg:py-16 lg:px-12 px-4 sm:px-6 md:px-8">
     


              <div className="text-center mb-10 md:mb-12 px-4 max-w-5xl mx-auto">
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
           Watch Our Story in Motion
            </span>
          </div>

          {/* Main SEO heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  " >
              Real Stories, Real Care — Discover Ashaali Through Videos
          </h1>


        </div>




                    {/* Our Influencers Section */}

                    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                        {influencers.map((influencer) => (

                            <div key={influencer.videoId} className="rounded-xl overflow-hidden relative  ">
                                <iframe
                                    src={`https://www.youtube.com/embed/${influencer.videoId}?autoplay=1&mute=1&loop=1&playlist=${influencer.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={influencer.name}
                                    className="w-full h-[70vh]"
                                // style={{
                                //   aspectRatio: '9/16',
                                //   background: 'transparent'
                                // }}
                                />
                            </div>
                        ))}

                    </div>



                </div>
            </div>
            );
};

            export default YouTubeChannelShowcase;