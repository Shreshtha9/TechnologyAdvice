'use client';

import Image from 'next/image';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const categories = [
  {
    title: 'HR Software',
    description: 'Solutions for human resource management.',
    logos: ['adp', 'workday', 'bamboohr', 'gusto', 'paycom'],
  },
  {
    title: 'EHR-EMR Software',
    description: 'Electronic health record and medical record systems.',
    logos: ['epic', 'cerner', 'athenahealth', 'allscripts', 'ge1'],
  },
  {
    title: 'Project Management Software',
    description: 'Tools to plan and manage projects effectively.',
    logos: ['monday', 'asana', 'wrike', 'trello', 'jira'],
  },
  {
    title: 'CRM Software',
    description: 'Customer relationship management platforms.',
    logos: ['hubspot', 'zoho', 'pipedrive', 'salesforce', 'freshsales'],
  },
  {
    title: 'ERP Software',
    description: 'Enterprise resource planning platforms.',
    logos: ['sap', 'oracle', 'netsuite', 'ms365', 'odoo'],
  },
];

const techItems = [
  {
    name: 'BambooHR',
    desc: 'Best HR software for small businesses',
    img: '/images/bamboohr1.jpg',
  },
  {
    name: 'Wrike',
    desc: 'Most versatile project management software',
    img: '/images/Wrike.jpg',
  },
  {
    name: 'Zoho CRM',
    desc: 'Best CRM for decentralized teams',
    img: '/images/zoho.jpg',
  },
  {
    name: 'Rippling',
    desc: 'Best HR software for midsize companies',
    img: '/images/rippling.jpeg',
  },
  {
    name: 'monday work OS',
    desc: 'Best overall project management software',
    img: '/images/monday.png',
  },
  {
    name: 'Hubspot',
    desc: 'Best CRM for integrations',
    img: '/images/hubspot.jpg',
  },
  {
    name: 'Paycor',
    desc: 'Best payroll software for midsize businesses',
    img: '/images/paycor.png',
  },
];

export default function Page() {
  const guideRef = useRef(null);
  const techRef = useRef(null);

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = ref.current.offsetWidth * 0.8;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>B2B Technology Advice From Industry Experts</title>
        <meta 
          name="description" 
          content="Get the latest B2B technology and software advice, trends, and guidance from experts who work with it every day." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="B2B Technology Advice From Industry Experts" />
        <meta 
          property="og:description" 
          content="Expert advice on B2B technology and software from professionals who use it daily." 
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#0E1F1C] text-white px-6 sm:px-8 lg:px-12 py-16  md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              B2B Technology Advice <br className="hidden sm:block" />
              From <span className="text-[#8BC34A]">Experts Who Use It</span>
            </h1>
            <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl">
              The latest B2B technology and software advice, trends, and guidance coming to you from the experts who work with it every day.
            </p>

            {/* Search Bar */}
            <div className="mt-8 flex items-center max-w-xl bg-white rounded-full shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for an article or software product"
                className="flex-1 px-4 sm:px-5 py-2 sm:py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
              />
              <button className="bg-[#8BC34A] px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold hover:bg-[#7FB839] transition-colors text-sm sm:text-base">
                Search
              </button>
            </div>

            {/* Example Tags */}
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best HR Software</span>
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best PM Software</span>
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best CRM Software</span>
            </div>
          </div>

          {/* Overlapping Images */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center order-1 md:order-2">
            {/* Bottom circle */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-[#0D1B2A] z-10">
              <Image 
                src="/images/group3.png" 
                alt="Team Meeting" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>
            
            {/* Top left circle */}
            <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-[#0D1B2A] z-20">
              <Image 
                src="/images/group1.png" 
                alt="Team Collaboration" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
              />
            </div>
            
            {/* Top right circle */}
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-[#0D1B2A] z-30">
              <Image 
                src="/images/group2.png" 
                alt="Individual Work" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
              />
            </div>
          </div>
        </div>
      </section>
 {/* Buyer's Guide Section */}
<section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our most popular buyer's guides
      </h2>
      <p className="text-lg text-gray-600">
        Get started with our expert reviews and buying guidance for 163 categories of B2B technology.
      </p>
    </div>

    {/* Card Scroll Container */}
    <div className="relative">
      <div
        ref={guideRef}
        className="flex overflow-x-hidden gap-6 pl-1 pr-1"  // Reduced side padding
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[320px] sm:w-[380px] h-[320px] bg-white rounded-2xl p-8 border border-gray-200 shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-400 flex flex-col"
          >
            {/* Logos */}
            <div className="flex items-center mb-6 -space-x-8 group-hover-space-x-0.5 transition-all duration-500 ease-in-out">
              {category.logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-16 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-[1] group-hover:scale-110 transition-all duration-300 ease-in-out"
                  style={{ zIndex: 10 + i }}
                >
                  <Image
                    src={`/images/${logo}.gif`}
                    alt={logo}
                    width={50}
                    height={48}
                    className="rounded-full object-contain w-3/4 h-3/4"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons Centered Below */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={() => scroll(guideRef, 'left')}
          className="w-14 h-14 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll(guideRef, 'right')}
          className="w-14 h-14 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  </div>
</section>

{/* Trending B2B Tech Section */}
<section className="py-16 px-6 sm:px-8 lg:px-12 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trending B2B technology</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Our experts use data-driven analysis to determine the best software and technology solutions for countless use cases.
      </p>
    </div>

    <div className="relative">
      <div
        ref={techRef}
        className="flex overflow-x-hidden gap-6 pl-1 pr-1"  // Reduced side padding
      >
        {techItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[240px] sm:w-[280px] h-[280px] bg-white hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-2xl p-6 shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center"
          >
            <div className="w-full h-40 mb-4 flex items-center justify-center">
              <Image 
                src={item.img} 
                alt={item.name} 
                width={160} 
                height={120} 
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => scroll(techRef, 'left')}
          className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => scroll(techRef, 'right')}
          className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}