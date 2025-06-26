 "use client";
import Image from "next/image";
import { FaCheckCircle, FaCalendarAlt, FaPlus, FaMinus, FaClock, FaChevronDown } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from 'lucide-react';
 import Head from "next/head";

export default function BusinessIntelligencePage() {
 
const faqs = [
  {
    question: "What does business intelligence software do?",
    answer:
      "Business intelligence software collects, analyzes, and visualizes data from various sources to help businesses make data-driven decisions, optimize operations, and identify trends and insights.",
  },
  {
    question: "Is SQL a business intelligence tool?",
    answer:
      "SQL itself is not a BI tool, but it is a foundational language used within many BI tools to query databases and extract relevant data for analysis.",
  },
  {
    question: "Is Microsoft Excel a business intelligence tool?",
    answer:
      "Microsoft Excel is not a full BI tool but is widely used for data analysis and visualization. It integrates with BI platforms like Power BI to enhance reporting capabilities.",
  },
  {
    question: "What is the main purpose of business intelligence?",
    answer:
      "The primary goal of BI is to help organizations make better strategic, tactical, and operational decisions through data insights and performance monitoring.",
  },
];
  const tocItems = [
    "What is business intelligence software?",
    "My top picks for business intelligence software",
    "Find your new BI software",
    "Business intelligence software benefits",
    "What is the business impact of business intelligence software?",
    "Choosing the best software for business intelligence platform",
    "Frequently Asked Questions (FAQ)",
    "More business intelligence resources",
  ];
const [openTableauDetails, setOpenTableauDetails] = useState(false);
  const [openTableauFeatures, setOpenTableauFeatures] = useState(false);
  const [openTableauPricing, setOpenTableauPricing] = useState(false);
  const [openSisenseDetails, setOpenSisenseDetails] = useState(false);
const [openSisenseFeatures, setOpenSisenseFeatures] = useState(false);
const [openSisensePricing, setOpenSisensePricing] = useState(false);
const [openQlikDetails, setOpenQlikDetails] = useState(false);
const [openQlikFeatures, setOpenQlikFeatures] = useState(false);
const [openQlikPricing, setOpenQlikPricing] = useState(false);
const [openZohoDetails, setOpenZohoDetails] = useState(false);
const [openZohoFeatures, setOpenZohoFeatures] = useState(false);
const [openZohoPricing, setOpenZohoPricing] = useState(false);
const [openIBMCognosDetails, setOpenIBMCognosDetails] = useState(false);
const [openIBMCognosFeatures, setOpenIBMCognosFeatures] = useState(false);
const [openIBMCognosPricing, setOpenIBMCognosPricing] = useState(false);
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = 0;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = index;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <Head>
  <title>Business Intelligence Software Guide 2025 | Technology Advice</title>
  <meta name="description" content="Explore the best business intelligence software tools of 2025. Compare top BI platforms, features, pricing, and implementation strategies for data-driven decision making." />  
</Head>

      {/* Hero Section */}
      <section className="bg-[#0E1F1C] text-white py-12 px-4 sm:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-white/80 mb-6 gap-2">
            <HiHome className="text-lg" />
            <span>/</span>
            <span className="font-semibold text-white">Business Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Business Intelligence (BI) Software Guide 2025
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/aron.png"
                alt="Aron Vaughan"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-300">Written by</p>
                <p className="font-semibold text-lg">Aron Vaughan</p>
                <p className="text-sm text-gray-400">Staff Writer</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <p className="font-semibold text-base">Reviewed by</p>
            <Image
              src="/images/corey.png"
              alt="Corey Noles"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="text-base">Corey Noles</p>
          </div>

          <div className="flex items-start gap-4 text-white/90 text-sm mb-8">
            <FaCheckCircle className="text-green-400 mt-1 text-xl" />
            <p className="leading-relaxed">
              Technology Advice is able to offer our services for free because some vendors may pay us
              for web traffic or other sales opportunities. Our mission is to help technology buyers make
              better purchasing decisions, so we provide you with information for all vendors — even those
              that don't pay us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>Last Updated: December 23, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>Published Date: November 13, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 py-8">
          {/* TOC Sidebar - Fixed Position */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 p-4 border rounded-xl shadow-sm bg-gray-50 h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="font-semibold text-lg mb-4">Table of contents</h3>
              <ul className="space-y-3 text-sm text-gray-800">
                 {tocItems.map((item, i) => (
  <li
    key={i}
    className={`border-l-4 ${
      activeSection === i ? "border-green-500 font-medium text-green-600" : "border-transparent"
    } pl-3 hover:text-green-500 cursor-pointer transition-colors`}
    onClick={() => {
      const section = document.getElementById(`section-${i}`);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 120,
          behavior: "smooth"
        });
      }
    }}
  >
    {item}
  </li>
))}
              </ul>

              <div className="mt-8">
                <p className="text-sm font-semibold mb-3">Share this article</p>
                <div className="flex gap-3">
                  <button className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-green-100 transition-colors">
                    <FaFacebookF className="text-green-600 text-sm" />
                  </button>
                  <button className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-green-100 transition-colors">
                    <FaLinkedinIn className="text-green-600 text-sm" />
                  </button>
                  <button className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-green-100 transition-colors">
                    <FaXTwitter className="text-green-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Article - Scrollable Content */}
          <div className="lg:w-3/4" ref={contentRef}>
            {/* Section 1 */}
            <section id="1" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What is business intelligence software?
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <Link href="#" className="text-green-600 font-medium underline">
                    Business intelligence (BI) software
                  </Link>{" "}
                  is any application that collects and processes large amounts of unstructured data from
                  internal and external systems and prepares data for analysis...
                </p>

                <p>
                  Business intelligence tools gather data from various sources, such as databases, spreadsheets...
                </p>

                <p>Check out my picks for the top business intelligence software below.</p>

                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    <Link href="#" className="text-green-600 font-medium">Tableau</Link>: Best for data visualization
                  </li>
                  <li>
                    <Link href="#" className="text-green-600 font-medium">Sisense</Link>: Best for embedded analytics
                  </li>
                  <li>
                    <Link href="#" className="text-green-600 font-medium">Qlik Sense</Link>: Best mobile BI software
                  </li>
                  <li>
                    <Link href="#" className="text-green-600 font-medium">Zoho Analytics</Link>: Best self-service BI software
                  </li>
                  <li>
                    <Link href="#" className="text-green-600 font-medium">IBM Cognos Analytics</Link>: Best for reporting
                  </li>
                </ul>
                  {/* Collapsible Sections */}
            <div className="mt-12 space-y-6">
              <div className="border-b">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('updates')}>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold text-base">
                    <FaClock className="text-gray-500" />
                    Update notes
                  </div>
                  <button className="w-6 h-6 flex items-center justify-center rounded bg-green-600 text-white text-sm">
                    {openSection === 'updates' ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {openSection === 'updates' && (
                  <div className="pt-6 text-sm text-gray-800 space-y-2">
                    <p><strong>December 23, 2024:</strong> A few minor updates...</p>
                    <p><strong>November 13, 2024:</strong> Updated all vendors...</p>
                  </div>
                )}
              </div>

              <div className="border-b">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('methodology')}>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold text-base">
                    <FaClock className="text-gray-500" />
                    Methodology
                  </div>
                  <button className="w-6 h-6 flex items-center justify-center rounded bg-green-600 text-white text-sm">
                    {openSection === 'methodology' ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {openSection === 'methodology' && (
                  <div className="pt-6 text-sm text-gray-800 space-y-3">
                    <p>At TechnologyAdvice, we assess a wide range of factors before selecting our top choices...</p>
                  </div>
                )}
              </div>
            </div>
              </div>
            </section>

            {/* Section 2 - Tableau Pick Card */}
            <section id="section-2" className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                My top picks for business intelligence software
              </h2>
              
        
       <div className="bg-white rounded-xl shadow-md border overflow-hidden mt-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Tableau: Best for data visualization
            </h3>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Visit Website
          </a>
        </div>

        <div className="px-6 py-4 border-b">
          <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
            <span>Overall Score</span>
            <span className="font-semibold text-lg text-gray-800">4.3/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: "86%" }}></div>
          </div>
        </div>

        <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Pros</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">+</span>
                Quick, attractive data visualization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">+</span>
                Drag-and-drop interface good for beginners
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">+</span>
                Real-time data reflection
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Cons</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">–</span>
                Can be expensive
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">–</span>
                Experience needed to fully leverage capabilities
              </li>
            </ul>
          </div>
        </div>

        <div className="px-6 pb-6">
          <h4 className="font-semibold text-gray-800 text-base mb-2">Why I picked Tableau</h4>
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              Tableau's data visualization capabilities and easy-to-use interface have always been this software's greatest strengths.
            </p>
            
            <p>
              With the recent 2024.3 update, I'm seeing Tableau reinforce its position as a top player in the analytics space. The update introduces Tableau Cloud Manager, which allows me to manage licenses centrally without needing to license each user individually. This is a significant time-saver for enterprise clients, especially with data governance requirements. New features like the table viz extension, spatial parameters, and integration with Microsoft Teams further streamline Tableau's usability.
            </p>
            
            <p>
              The 'Embedding Playground' is a nice addition, giving greater flexibility and creativity when embedding analytics—something I haven't found in other BI tools like Microsoft Power BI or Qlik. I also appreciate the new 'Custom Data Labels,' which improve data management with advanced categorization and discovery options that stand out compared to competitors.
            </p>
            
            <p>
              Tableau's 'Dynamic Axis Ranges' bring impressive customization to visualizations, allowing me to adapt views to different datasets with ease—a level of flexibility that many other platforms don't match. Integration with Salesforce through the 'Native Lightning Web Component for Tableau' and the 'Tableau Cloud add-on for Google Workspace' enhances the analytics experience across platforms. This level of seamless integration is particularly valuable, especially when compared to Power BI, which, while strong within Microsoft's ecosystem, may not offer the same flexibility across different platforms.
            </p>
            
            <p>
              The software's focus on enhancing user experience and customization, coupled with strategic integrations, positions it as a comprehensive tool for data-driven decision-making. In comparison to its key competitors, Tableau offers a unique combination of versatility, innovation, and user-centric design, making it an strong asset in any data-driven organization's toolkit.
            </p>
            
            <a href="#" className="text-green-600 font-medium inline-block mt-4">
              Also read: Top Tableau Alternatives For Visualizing & Analyzing Data
            </a>
          </div>

          {/* About Tableau Collapsible Section */}
          <div className="mt-8 border-t pt-6">
            <button 
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
              onClick={() => setOpenTableauDetails(!openTableauDetails)}
            >
              <span>About Tableau</span>
              <ChevronDown className={`transition-transform ${openTableauDetails ? 'rotate-180' : ''}`} />
            </button>
            
            {openTableauDetails && (
              <div className="mt-4 text-sm text-gray-700 space-y-4">
                <p>
                  Tableau, a leading data visualization BI tool, is designed to help businesses turn raw data into actionable insights. Its standout features include an intuitive drag-and-drop interface, real-time data analytics, and interactive dashboards that empower users to explore data in a user-friendly environment. Tableau's Data Blending and Cross-Database Joins enable the combination of data from multiple sources, and its Tableau Public allows the sharing of data visualizations to a wider audience.
                </p>
                <p>
                  Users can present data in the form of charts, graphs, and other visual representations with dashboards and visualization tools. It also allows users to identify trends and patterns in data and make more informed decisions.
                </p>
              </div>
            )}
          </div>

          {/* Key Features Collapsible Section */}
          <div className="mt-6 border-t pt-6">
            <button 
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
              onClick={() => setOpenTableauFeatures(!openTableauFeatures)}
            >
              <span>Key Features</span>
              <ChevronDown className={`transition-transform ${openTableauFeatures ? 'rotate-180' : ''}`} />
            </button>
            
            {openTableauFeatures && (
              <div className="mt-4 text-sm text-gray-700 space-y-6">
                <div>
                  <h5 className="font-medium mb-1">Tableau Public</h5>
                  <p>
                    This proprietary feature allows users to publish their data visualizations to the public, providing a platform for sharing and collaboration. It promotes transparency and broadens the reach of your insights, making data storytelling accessible to a wide audience.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Tableau Pulse AI Insights</h5>
                  <p>
                    This system allows for AI insights garnered from your data appearing throughout the Tableau system. Being tied to Salesforce, a leader in AI among B2B software vendors, has undoubtedly benefited Tableau as it brings forward its own AI tools.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Data Blending</h5>
                  <p>
                    Data blending allows users to combine data from multiple sources without the need for complex data warehouse solutions. This feature simplifies the process of analyzing disparate data, providing a comprehensive view of insights.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Hyper Engine</h5>
                  <p>
                    Tableau's Hyper Engine is a high-performance in-memory data engine technology that helps businesses analyze large datasets at impressive speed. This feature ensures efficient data exploration and rapid extraction of insights, enhancing the overall user experience.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Mobile Optimized</h5>
                  <p>
                    Tableau offers robust mobile support, allowing users to access, interact with, and explore their data visualizations on mobile devices. The platform provides a seamless experience across desktop and mobile, enabling decision-makers to access insights anywhere and anytime.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Advanced Analytics</h5>
                  <p>
                    Tableau includes advanced analytics capabilities, such as predictive modeling and statistical analysis. Users can leverage these tools to delve deeper into their data, identify trends, and make predictions based on historical data, enhancing strategic decision-making.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Extensive Customization Options</h5>
                  <p>
                    Tableau allows extensive customization of dashboards and reports with its powerful scripting capabilities using Tableau's Calculation Language. Users can manipulate data, customize visualizations, and fine-tune analytics to meet specific business requirements, enabling precise and meaningful data representation.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Ratings Collapsible Section */}
          <div className="mt-6 border-t pt-6">
            <button 
              className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
              onClick={() => setOpenTableauPricing(!openTableauPricing)}
            >
              <span>Pricing & Ratings</span>
              <ChevronDown className={`transition-transform ${openTableauPricing ? 'rotate-180' : ''}`} />
            </button>
            
            {openTableauPricing && (
              <div className="mt-4 text-sm text-gray-700 space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Pricing</h5>
                  <ul className="space-y-2">
                    <li>Free trial available</li>
                    <li>Free version available</li>
                    <li>Tableau Viewer: $15/user/month</li>
                    <li>Tableau Explorer: $40/user/month</li>
                    <li>Tableau Creator: $70/user/month</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Our Ratings</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Pricing:</span>
                      <span>4.2/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General features and interface:</span>
                      <span>4.3/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Core features:</span>
                      <span>5/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advanced features:</span>
                      <span>4.5/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Integration and compatibility:</span>
                      <span>4.7/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UX:</span>
                      <span>3.6/5</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
           
          </div>
            <a 
                href="#" 
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Read our full review
              </a>
        </div>
         
      </div>
           
    
                              {/* Sisense Card */}
  <div className="bg-white rounded-xl shadow-md border overflow-hidden mt-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Sisense: Best for embedded analytics
        </h3>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Visit Website
      </a>
    </div>

    {/* Overall Score */}
    <div className="px-6 py-4 border-b">
      <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
        <span>Overall Score</span>
        <span className="font-semibold text-lg text-gray-800">4.1/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: "82%" }}></div>
      </div>
    </div>

    {/* Pros & Cons */}
    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      {/* Pros */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Pros</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Embedded analytics
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            AI-powered Ask Data feature
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            In-Chip technology
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Good customer support
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Handles large datasets well
          </li>
        </ul>
      </div>

      {/* Cons */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Cons</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Learning curve
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Resource intensive
          </li>
        </ul>
      </div>
    </div>

    {/* Why I picked Sisense */}
    <div className="px-6 pb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Why I picked Sisense</h4>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">
        <p>
          Sisense's recent updates and features, particularly in embedded analytics, make it a compelling choice for businesses seeking a BI solution that offers deep integration capabilities, efficient data handling, and user-friendly interfaces. Unlike Power BI, Sisense provides distinct advantages in embedded analytics and data manipulation, although it may require stronger IT support for implementation and advanced analytics setup.
        </p>
        
        <p>
          In Sisense's 2024.3 update, I found several enhancements that make it stand out as an embedded analytics solution. The new AI-powered "Ask Data" feature allows me to interact with data using natural language, instantly generating visualizations and making data exploration incredibly intuitive. The improved dashboard customization options also let me tailor views to specific needs, offering a flexible and personalized experience. Additionally, the expanded data connectivity means I can seamlessly pull data from more sources, which simplifies integrations. With faster load times and enhanced security measures, Sisense has proven to be both powerful and secure, making it an ideal choice for our analytics needs.
        </p>
        
        <p>
          In a head-to-head comparison with Microsoft Power BI, Sisense stands out for its ability to "infuse analytics everywhere", including within customer and employee applications and workflows. While both platforms offer robust data visualization and AI analytics, Sisense's Elasticube technology is notable for its fast query returns on large datasets. In my opinion, that's a critical feature for businesses handling vast amounts of data.
        </p>
        
        <p>
          Sisense also fares well in its data integration capabilities, offering over 100 data connectors. While Power BI surpasses this with over 500 connectors, Sisense's Elasticube technology compensates by enabling efficient manipulation of diverse data sources. Sisense's drag-and-drop interface and interactive visualizations provide an easy-to-use platform for building custom BI dashboards, a feature well-received by its users.
        </p>
        
        <p>
          The software's 'Fusion Embed' solution is designed specifically for building white-labeled analytic experiences in apps, a testament to its strong embedded analytics capabilities. This feature, along with Sisense's scalability and customization options with minimal coding, makes it an ideal choice for businesses looking to integrate analytics seamlessly into their products or services.
        </p>
        
        <Link href="#" className="text-green-600 font-medium inline-block mt-4">
          Also read: Top Sisense Alternatives For Embedded Analytics
        </Link>
      </div>

      {/* About Sisense Collapsible Section */}
      <div className="mt-8 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenSisenseDetails(!openSisenseDetails)}
        >
          <span>About Sisense</span>
          <FaChevronDown className={`transition-transform ${openSisenseDetails ? 'rotate-180' : ''}`} />
        </button>
        
        {openSisenseDetails && (
          <div className="mt-4 text-sm text-gray-700 space-y-4">
            <p>
              Sisense is a business intelligence platform specializing in embedded analytics. It enables organizations to integrate analytics into their applications and products, providing end-users with data insights directly within their workflow. Known for its powerful data processing capabilities and intuitive interface, Sisense helps businesses transform complex data into actionable insights.
            </p>
            <p>
              The platform is particularly strong in handling large datasets and offers a unique In-Chip technology that accelerates data processing. Sisense serves a wide range of industries including healthcare, finance, retail, and technology, helping them make data-driven decisions.
            </p>
          </div>
        )}
      </div>

      {/* Key Features Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenSisenseFeatures(!openSisenseFeatures)}
        >
          <span>Key Features</span>
          <FaChevronDown className={`transition-transform ${openSisenseFeatures ? 'rotate-180' : ''}`} />
        </button>
        
        {openSisenseFeatures && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-1">Embedded Analytics</h5>
              <p>
                Sisense's core strength lies in its ability to embed analytics directly into applications and workflows, enabling seamless data experiences for end-users without leaving their primary applications.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Elasticube Technology</h5>
              <p>
                This proprietary technology enables fast querying of large datasets by creating optimized data models that can be shared across an organization.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">AI-Powered Ask Data</h5>
              <p>
                Natural language processing allows users to query data using everyday language, with the system automatically generating relevant visualizations.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">In-Chip Technology</h5>
              <p>
                Accelerates data processing by leveraging CPU cache memory rather than traditional RAM, resulting in faster performance with large datasets.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Fusion Embed</h5>
              <p>
                A comprehensive solution for building white-labeled analytic experiences within applications with minimal coding requirements.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Extensive Data Connectivity</h5>
              <p>
                Supports connections to over 100 data sources including databases, cloud services, and spreadsheets.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pricing & Ratings Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenSisensePricing(!openSisensePricing)}
        >
          <span>Pricing & Ratings</span>
          <FaChevronDown className={`transition-transform ${openSisensePricing ? 'rotate-180' : ''}`} />
        </button>
        
        {openSisensePricing && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-2">Pricing</h5>
              <ul className="space-y-2">
                <li>Custom pricing based on deployment needs</li>
                <li>Free trial available</li>
                <li>Contact sales for specific pricing tiers</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Our Ratings</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Pricing:</span>
                  <span>3.9/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Embedded Analytics:</span>
                  <span>4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Processing:</span>
                  <span>4.6/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Customization:</span>
                  <span>4.4/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration:</span>
                  <span>4.3/5</span>
                </div>
                <div className="flex justify-between">
                  <span>UX:</span>
                  <span>3.8/5</span>
                </div>
              </div>
            </div>
            
            
                   </div>
        )}
         <Link 
              href="#" 
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Read our full review
            </Link>
      </div>
    </div>
  </div>
   <div className="bg-white rounded-xl shadow-md border overflow-hidden mt-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Qlik Sense: Best mobile BI software
        </h3>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Visit Website
      </a>
    </div>

    {/* Overall Score */}
    <div className="px-6 py-4 border-b">
      <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
        <span>Overall Score</span>
        <span className="font-semibold text-lg text-gray-800">4.0/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
      </div>
    </div>

    {/* Pros & Cons */}
    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Pros</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Lower entry price
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Powerful visualization tools
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Associative data model
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Self-service analytics
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Quality Mobile BI
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Cons</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Slower with larger data sets
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Extra cost for add-ons
          </li>
        </ul>
      </div>
    </div>

    {/* Why I picked Qlik Sense */}
    <div className="px-6 pb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Why I picked Qlik Sense</h4>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">
        <p>
          One of the key upgrades includes the introduction of a flexible text object in the Dashboard bundle, allowing advanced styling of text, the addition of measures, and the incorporation of tables. This flexibility is vital for mobile users who need to tailor their dashboards on-the-go. Additionally, the Natural Language Insights object has been updated for better functionality and insights, with native support for all Qlik Cloud features. This enhancement significantly boosts data literacy, a crucial aspect for mobile users who often require quick and comprehensible data insights.
        </p>
        
        <p>
          The updates also encompass improved font handling, ensuring consistent rendering across devices, which is critical for mobile interfaces, and a new line object that adds customization and detail to sheets, enhancing the mobile user experience. Moreover, the introduction of complex calculations in data tables and the ability to download images for straight table visualization in the Nebula-based straight table are particularly beneficial for mobile users who work with large datasets and require efficient data manipulation and reporting capabilities.
        </p>
        
        <p>
          In comparison to its major competitors, Microsoft Power BI and Tableau, Qlik Sense holds its ground well. While Power BI is lauded for its integration with Microsoft solutions and dynamic report creation, it faces challenges with user accessibility and training. Similarly, Tableau, known for its powerful data visualization and flexibility, struggles with functionality and user-friendliness. In contrast, Qlik Sense's recent enhancements, particularly in mobile capabilities such as responsive design, a mobile application, and interactive dashboards, provide it with a competitive edge.
        </p>
        
        <p>
          When considering Qlik Sense's comprehensive updates and its standing against Power BI and Tableau, it's evident that Qlik Sense offers a well-rounded and increasingly user-friendly experience for mobile users.
        </p>
        
        <Link href="#" className="text-green-600 font-medium inline-block mt-4">
          Also read: Top Qlik Sense Alternatives For Mobile BI
        </Link>
      </div>

      {/* About Qlik Sense Collapsible Section */}
      <div className="mt-8 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenQlikDetails(!openQlikDetails)}
        >
          <span>About Qlik Sense</span>
          <FaChevronDown className={`transition-transform ${openQlikDetails ? 'rotate-180' : ''}`} />
        </button>
        
        {openQlikDetails && (
          <div className="mt-4 text-sm text-gray-700 space-y-4">
            <p>
              Qlik Sense is a modern business intelligence platform known for its associative analytics engine and mobile-first approach. It enables users to explore data freely across all devices while maintaining enterprise-grade security and governance.
            </p>
            <p>
              The platform is designed with a strong focus on self-service visualization and discovery, allowing users to create personalized, interactive dashboards that work seamlessly on mobile devices.
            </p>
          </div>
        )}
      </div>

      {/* Key Features Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenQlikFeatures(!openQlikFeatures)}
        >
          <span>Key Features</span>
          <FaChevronDown className={`transition-transform ${openQlikFeatures ? 'rotate-180' : ''}`} />
        </button>
        
        {openQlikFeatures && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-1">Associative Analytics Engine</h5>
              <p>
                Unique data indexing technology that reveals hidden insights by maintaining all possible data relationships.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Mobile-First Design</h5>
              <p>
                Responsive interfaces and dedicated mobile apps that provide full functionality on smartphones and tablets.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Natural Language Processing</h5>
              <p>
                AI-powered insights through conversational queries in plain language.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Augmented Analytics</h5>
              <p>
                Automated insights and suggestions that highlight important trends and outliers.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Multi-Cloud Architecture</h5>
              <p>
                Flexible deployment options across public and private clouds with centralized management.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pricing & Ratings Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenQlikPricing(!openQlikPricing)}
        >
          <span>Pricing & Ratings</span>
          <FaChevronDown className={`transition-transform ${openQlikPricing ? 'rotate-180' : ''}`} />
        </button>
        
        {openQlikPricing && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-2">Pricing</h5>
              <ul className="space-y-2">
                <li>Business: $30/user/month</li>
                <li>Enterprise: Custom pricing</li>
                <li>Free trial available</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Our Ratings</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Mobile Experience:</span>
                  <span>4.7/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Visualization:</span>
                  <span>4.5/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Performance:</span>
                  <span>4.0/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Ease of Use:</span>
                  <span>3.9/5</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="#" 
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Read our full review
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
  {/* Section 5 - Zoho Analytics Pick Card */}
  <div className="bg-white rounded-xl shadow-md border overflow-hidden mt-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Zoho Analytics: Best self-service BI software
        </h3>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Visit Website
      </a>
    </div>

    {/* Overall Score */}
    <div className="px-6 py-4 border-b">
      <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
        <span>Overall Score</span>
        <span className="font-semibold text-lg text-gray-800">4.0/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
      </div>
    </div>

    {/* Pros & Cons */}
    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Pros</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Generative AI-Infused BI
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Top-notch collaboration tools
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Advanced analytics
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Scalability
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Competitive pricing
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Cons</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Bit of a learning curve
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Inconsistencies in reporting
          </li>
        </ul>
      </div>
    </div>

    {/* Why I picked Zoho Analytics */}
    <div className="px-6 pb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Why I picked Zoho Analytics</h4>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">
        <p>
          Zoho Analytics makes it easy for non-technical users to analyze complex data and create insightful reports without needing assistance from IT or data experts.
        </p>
        
        <p>
          The platform's AI assistant, Zia, allows users to ask data-related questions in natural language, making data analysis more accessible. In my opinion, it's one of the better assistants available right now within BI applications. Its capabilities alongside their Generative AI-Infused BI approach and a constantly improving platform, make it one of my favorite choices.
        </p>
        
        <p>
          Additionally, features like data blending, smart data alerts, and the ability to merge data from various sources further enhance its self-service functionality, making it an excellent choice for businesses looking for a comprehensive, easy-to-use BI solution. It's not the most simple, but I'd argue it's a good substitution for someone who considers a Sisense or IBM option to be a bit too daunting.
        </p>
        
        <p>
          In a September 2024 product update, Zoho Analytics added a variety of new features including unified metrics to eliminate duplication, audit and sync history for data import, and multi-server architecture. The latter will allow for better load distribution, and addresses past user concerns surrounding struggles with larger data sets.
        </p>
        
        <p>
          Zoho Analytics has recently enhanced its capabilities with Advanced Analytics for Jotform, allowing deeper insights into audience preferences and engagement. The integration of the "Notes" modules from multiple CRM modules in the Advanced Analytics Connector for Zoho CRM is a significant upgrade, offering users richer customer interaction insights.
        </p>
        
        <Link href="#" className="text-green-600 font-medium inline-block mt-4">
          Also read: Top Zoho Analytics Alternatives For Self-Service BI
        </Link>
      </div>

      {/* About Zoho Analytics Collapsible Section */}
      <div className="mt-8 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenZohoDetails(!openZohoDetails)}
        >
          <span>About Zoho Analytics</span>
          <FaChevronDown className={`transition-transform ${openZohoDetails ? 'rotate-180' : ''}`} />
        </button>
        
        {openZohoDetails && (
          <div className="mt-4 text-sm text-gray-700 space-y-4">
            <p>
              Zoho Analytics is part of the Zoho suite of business applications, offering powerful yet affordable business intelligence and analytics capabilities. It's particularly strong in self-service analytics for small to medium businesses.
            </p>
            <p>
              The platform integrates seamlessly with other Zoho applications as well as numerous third-party services, making it ideal for organizations already using Zoho's ecosystem.
            </p>
          </div>
        )}
      </div>

      {/* Key Features Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenZohoFeatures(!openZohoFeatures)}
        >
          <span>Key Features</span>
          <FaChevronDown className={`transition-transform ${openZohoFeatures ? 'rotate-180' : ''}`} />
        </button>
        
        {openZohoFeatures && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-1">Zia AI Assistant</h5>
              <p>
                Advanced natural language processing that allows users to query data conversationally and get automated insights.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Unified Business Analytics</h5>
              <p>
                Combine data from multiple Zoho apps and external sources into a single analytics platform.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Collaborative Analytics</h5>
              <p>
                Share reports and dashboards with team members and collaborate in real-time with comments and annotations.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">White Labeling</h5>
              <p>
                Custom branding options for agencies and consultants who want to offer analytics as part of their services.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Data Alerting</h5>
              <p>
                Set up automated alerts when data meets certain conditions or thresholds.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pricing & Ratings Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenZohoPricing(!openZohoPricing)}
        >
          <span>Pricing & Ratings</span>
          <FaChevronDown className={`transition-transform ${openZohoPricing ? 'rotate-180' : ''}`} />
        </button>
        
        {openZohoPricing && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-2">Pricing</h5>
              <ul className="space-y-2">
                <li>Basic: $24/month (2 users)</li>
                <li>Standard: $48/month (5 users)</li>
                <li>Premium: $115/month (15 users)</li>
                <li>Enterprise: $455/month (50 users)</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Our Ratings</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Self-Service Capabilities:</span>
                  <span>4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Features:</span>
                  <span>4.5/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Value for Money:</span>
                  <span>4.7/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration:</span>
                  <span>4.3/5</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="#" 
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Read our full review
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
  {/* Section 6 - IBM Cognos Analytics Pick Card */}
   <div className="bg-white rounded-xl shadow-md border overflow-hidden mt-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b bg-[#F5F8F7]">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          IBM Cognos Analytics: Best for reporting
        </h3>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Visit Website
      </a>
    </div>

    {/* Overall Score */}
    <div className="px-6 py-4 border-b">
      <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
        <span>Overall Score</span>
        <span className="font-semibold text-lg text-gray-800">4.0/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
      </div>
    </div>

    {/* Pros & Cons */}
    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Pros</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Full-featured BI suite
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Effective dashboards and reports
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            AI-enabled exploration
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">+</span>
            Top-notch customer support
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Cons</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Complexity of use
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">–</span>
            Expensive compared to competitors
          </li>
        </ul>
      </div>
    </div>

    {/* Why I picked IBM Cognos Analytics */}
    <div className="px-6 pb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Why I picked IBM Cognos Analytics</h4>
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">
        <p>
          IBM Cognos Analytics offers a powerful AI Assistant that simplifies data querying through natural language processing, enabling users to easily retrieve information and discover data patterns.
        </p>
        
        <p>
          A key strength of Cognos Analytics is its self-service capabilities, which are emphasized through features such as AI-assisted data arrangement and automated dashboards. These tools empower users to build their own reports and scorecards in an intuitive manner, facilitating both basic and advanced data analysis. The platform's AI assistant enhances this experience by allowing users to ask questions in natural language and receive suggested visualizations, making it accessible to users of varying skill levels.
        </p>
        
        <p>
          In the latest IBM Cognos Analytics release (11.2.4 FP4), I noticed several improvements that make my workflow smoother and more efficient. The update enhances dashboard functionality with new customization options and a more responsive layout, which helps me create visually appealing and informative dashboards faster. The data module editor has also been improved, making data prep easier with enhanced navigation and editing capabilities. Additionally, the performance boost in loading times and overall system responsiveness means I can access my insights more quickly, helping me make data-driven decisions without delay. These updates collectively make IBM Cognos Analytics a more powerful and user-friendly tool for my analytics needs.
        </p>
        
        <p>
          Data security and quality are other critical aspects where Cognos Analytics excels. It provides an environment with multiple levels of administrative permissions, enabling tailored access control and improving individual performance across different departments. This focus on security is a significant consideration for organizations dealing with sensitive or proprietary data.
        </p>
        
        <p>
          Compared to alternatives like Sisense and Zoho Analytics, which focus on ease of use through natural language querying and conversational interfaces, I find that IBM Cognos offers more depth for complex data modeling and advanced visual customization. This makes Cognos a better fit for organizations with skilled data teams or those, like us, who need high customization and control over data processes. The recent enhancements to data module editing and faster loading are especially valuable to me when managing large datasets, as I rely on both reliability and performance—something that some lighter, more user-friendly BI tools may not fully provide.
        </p>
        
        <Link href="#" className="text-green-600 font-medium inline-block mt-4">
          Also read: What Is Data Governance?
        </Link>
      </div>

      {/* About IBM Cognos Analytics Collapsible Section */}
      <div className="mt-8 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenIBMCognosDetails(!openIBMCognosDetails)}
        >
          <span>About IBM Cognos Analytics</span>
          <FaChevronDown className={`transition-transform ${openIBMCognosDetails ? 'rotate-180' : ''}`} />
        </button>
        
        {openIBMCognosDetails && (
          <div className="mt-4 text-sm text-gray-700 space-y-4">
            <p>
              IBM Cognos Analytics is an enterprise-grade business intelligence platform that combines AI-powered automation with robust reporting capabilities. It's designed for large organizations that need to deliver consistent, governed reporting across multiple departments.
            </p>
            <p>
              The platform is known for its deep integration with IBM's data and AI ecosystem, making it particularly strong for organizations invested in IBM's technology stack.
            </p>
          </div>
        )}
      </div>

      {/* Key Features Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenIBMCognosFeatures(!openIBMCognosFeatures)}
        >
          <span>Key Features</span>
          <FaChevronDown className={`transition-transform ${openIBMCognosFeatures ? 'rotate-180' : ''}`} />
        </button>
        
        {openIBMCognosFeatures && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-1">AI-Powered Reporting</h5>
              <p>
                Automated report generation with natural language explanations of key insights and trends.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Enterprise Governance</h5>
              <p>
                Robust security and data governance features for large organizations with complex compliance requirements.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Dynamic Dashboards</h5>
              <p>
                Interactive dashboards that can be personalized by end-users while maintaining data governance.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Advanced Data Modules</h5>
              <p>
                Powerful data modeling capabilities that allow business users to create sophisticated data models without IT assistance.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-1">Multi-Cloud Deployment</h5>
              <p>
                Flexible deployment options including IBM Cloud, AWS, Azure, and on-premises installations.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pricing & Ratings Collapsible Section */}
      <div className="mt-6 border-t pt-6">
        <button 
          className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
          onClick={() => setOpenIBMCognosPricing(!openIBMCognosPricing)}
        >
          <span>Pricing & Ratings</span>
          <FaChevronDown className={`transition-transform ${openIBMCognosPricing ? 'rotate-180' : ''}`} />
        </button>
        
        {openIBMCognosPricing && (
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div>
              <h5 className="font-medium mb-2">Pricing</h5>
              <ul className="space-y-2">
                <li>Starts at $10.60/user/month (annual billing)</li>
                <li>Enterprise pricing available</li>
                <li>Free trial available</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Our Ratings</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Reporting Capabilities:</span>
                  <span>4.9/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise Features:</span>
                  <span>4.7/5</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Integration:</span>
                  <span>4.5/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Ease of Use:</span>
                  <span>3.8/5</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="#" 
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Read our full review
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
     {/* Reporting and Querying Tools Section */}
          <div className="mt-8 pt-6 ">
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                <a href="#" className="text-green-600 font-medium underline">Reporting tools</a> let businesses generate reports and run queries on data. Users can access data from multiple sources, including databases and spreadsheets, to analyze and summarize data through these tools. Reporting tools give users pre-designed report templates for quicker report generation. These templates are often customizable. Users can add or remove fields, change the layout, or modify the formatting to suit their needs.
              </p>
              
              <p>
                Querying tools, on the other hand, enable users to extract specific data from a database or spreadsheet by running SQL queries. These tools offer users a way to construct queries without writing code.
              </p>
            </div>
          </div>
            </section>

            
            {/* Find your new BI software Section */}
      <section id="3" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Find your new BI software
        </h2>
        
       <div className="bg-gray-200 rounded-2xl p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Filter Products</h3>
            
            {/* Search Section */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Search Products</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search product name"
                  className="w-full px-4 py-3 pr-12 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full  transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Filter by Section */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Filter by</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Reviews</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                    <option>2+ Stars</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Pricing</option>
                    <option>Free</option>
                    <option>Under $50/month</option>
                    <option>$50-$200/month</option>
                    <option>$200+/month</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Company Size</option>
                    <option>Small (1-50)</option>
                    <option>Medium (51-200)</option>
                    <option>Large (201-1000)</option>
                    <option>Enterprise (1000+)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Sort by Section */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Sort by</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>Featured</option>
                    <option>Highest Rated</option>
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>10 per page</option>
                    <option>25 per page</option>
                    <option>50 per page</option>
                    <option>100 per page</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Cards */}
<div className="mt-10 space-y-6">
  {/* Angles Enterprise for SAP */}
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between">
      <img src="/images/angles-logo.jpg" alt="Angles logo" className="h-6" />
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Compare</a>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-2">Angles Enterprise for SAP <span className="text-sm text-blue-500 ml-2">Leave a Review</span></h3>
    <p className="text-sm text-gray-600 mt-1"><strong>Good for:</strong> Medium (250–999 Employees), Enterprise (5,000+ Employees), Large (1,000–4,999 Employees)</p>
    <p className="text-gray-700 text-sm mt-3">
      Angles for SAP works “plug-and-play” on any SAP ERP, including both ECC and S/4HANA, to collect and prepare data so it is suitable to analyze. It understands context, connections, and integrations, and it simplifies data for business users. It then creates insights into what is happening at an operational level now and in the foreseeable future by enriching the data with pre-built supply chain and finance calculations, on a transaction level and in the form of operational KPIs. 
      <a href="#" className="text-blue-600 font-medium ml-1">Learn More About Angles Enterprise for SAP</a>
    </p>
    <button className="mt-4 inline-block px-5 py-2 bg-gray-100 text-sm font-medium text-gray-800 rounded-full border hover:bg-gray-200 transition">Visit Product Profile</button>
  </div>

  {/* Angles Professional */}
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between">
      <img src="/images/angles-logo.jpg" alt="Angles logo" className="h-6" />
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Compare</a>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-2">Angles Professional <span className="text-sm text-blue-500 ml-2">Leave a Review</span></h3>
    <p className="text-sm text-gray-600 mt-1"><strong>Good for:</strong> Micro (0–49 Employees), Small (50–249 Employees), Medium (250–999 Employees), Large (1,000–4,999 Employees), Enterprise (5,000+ Employees)</p>
    <p className="text-gray-700 text-sm mt-3">
      Angles Professional helps businesses generate operational reports using pre-built content and templates. The platform includes direct, multi-source connectivity and a drag-and-drop editor that allows teams to create self-serve interactive reports to support the decision-making process across departments. Give your team a head start with pre-built content packs. Solve common financial and operational reporting needs with interactive reports, visualizations, and dashboards built for your ERP. 
      <a href="#" className="text-blue-600 font-medium ml-1">Learn More About Angles Professional</a>
    </p>
    <button className="mt-4 inline-block px-5 py-2 bg-gray-100 text-sm font-medium text-gray-800 rounded-full border hover:bg-gray-200 transition">Visit Product Profile</button>
  </div>
</div>
{/* More Product Cards */}
<div className="mt-10 space-y-6">
  {/* APISCRAPY */}
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between">
      <img src="/images/apiscrapy-logo.png" alt="APISCRAPY logo" className="h-6" />
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Compare</a>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-2">
      APISCRAPY 
      <span className="text-green-600 text-sm font-medium ml-2">★★★★★</span>
      <span className="text-sm text-gray-500 ml-1">(1 review)</span>
    </h3>
    <p className="text-sm text-gray-600 mt-1"><strong>Good for:</strong> Small (50–249 Employees)</p>
    <p className="text-gray-700 text-sm mt-3">
      APISCRAPY is an AI-driven web scraping and automation platform that converts any web data into ready-to-use data. The platform is capable to extract data from websites, process data, automate workflows, classify data and integrate ready to consume data into databases or deliver data in any desired format.
      <a href="#" className="text-blue-600 font-medium ml-1">Learn More About APISCRAPY</a>
    </p>
    <button className="mt-4 inline-block px-5 py-2 bg-gray-100 text-sm font-medium text-gray-800 rounded-full border hover:bg-gray-200 transition">Visit Product Profile</button>
  </div>

  {/* Ayata */}
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between">
      <img src="/images/ayata-logo.png" alt="Ayata logo" className="h-6" />
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Compare</a>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-2">
      Ayata <span className="text-sm text-blue-500 ml-2">Leave a Review</span>
    </h3>
    <p className="text-sm text-gray-600 mt-1"><strong>Good for:</strong> Enterprise (5,000+ Employees)</p>
    <p className="text-gray-700 text-sm mt-3">
      Ayata is software company on a global scale that offers fully functional software for prescriptive analytics. With their software, they help corporations in making better business decisions by predicting future outcomes. Ayata primarily serves the oil and gas, healthcare, high tech, and telecom and cable industries. They boast a deep client list that includes companies such as Dell, Cisco, Microsoft, and Apache Corp.
      <a href="#" className="text-blue-600 font-medium ml-1">Learn More About Ayata</a>
    </p>
    <button className="mt-4 inline-block px-5 py-2 bg-gray-100 text-sm font-medium text-gray-800 rounded-full border hover:bg-gray-200 transition">Visit Product Profile</button>
  </div>

  {/* BigBI Software */}
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between">
      <img src="/images/bigbi-logo.png" alt="BigBI Software logo" className="h-6" />
      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Compare</a>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-2">
      BigBI Software <span className="text-sm text-blue-500 ml-2">Leave a Review</span>
    </h3>
    <p className="text-sm text-gray-600 mt-1"><strong>Good for:</strong> All Company Sizes</p>
    <p className="text-gray-700 text-sm mt-3">
      BigBI enables data specialists to build their own powerful big data pipelines interactively & efficiently, with their no-code drag-and-drop editor powered by Apache Spark. Scalable processing of real big data (up to 10x TB+) across multiple sources and formats (CSV, SQL, JSON, NoSQL, DBs, files, video, audio, etc.). Includes ML & Graphs.
      <a href="#" className="text-blue-600 font-medium ml-1">Learn More About BigBI Software</a>
    </p>
    <button className="mt-4 inline-block px-5 py-2 bg-gray-100 text-sm font-medium text-gray-800 rounded-full border hover:bg-gray-200 transition">Visit Product Profile</button>
  </div>
</div>
<div className="bg-[#1E2E2B] rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center text-white shadow-md mt-10">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Interested in seeing your product here?</h2>
    <button className="bg-[#ffd800]   text-black font-semibold text-lg px-6 py-3 rounded-full flex items-center gap-2 transition">
      List Your Product
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
    {/* Bilbeo Analytics Card */}
  <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4 mt-10">
    <div className="flex justify-between items-start">
      <img src="/images/bilbeo-logo.png" alt="Bilbeo Logo" className="h-8" />
      <div className="flex items-center gap-4">
        <a href="#" className="text-green-600 text-sm">Leave a Review</a>
        <a href="#" className="text-blue-700 font-semibold text-sm">Compare</a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Bilbeo Analytics</h3>
      <p className="text-sm text-gray-700"><strong>Good for:</strong> Any Company Size</p>
      <a href="#" className="text-green-700 font-semibold text-sm mt-2 inline-block">Learn More About Bilbeo Analytics</a>
    </div>
    <div>
      <button className="mt-2 px-6 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
        Visit Product Profile
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V7a1 1 0 112 0v8a1 1 0 01-1 1h-8a1 1 0 110-2h5.586l-3.293-3.293a1 1 0 010-1.414z" />
        </svg>
      </button>
    </div>
  </div>

  {/* BIME Card */}
  <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4 mt-10">
    <div className="flex justify-between items-start">
      <img src="/images/bime-logo.png" alt="BIME Logo" className="h-6" />
      <div className="flex items-center gap-4">
        <a href="#" className="text-green-600 text-sm">Leave a Review</a>
        <a href="#" className="text-blue-700 font-semibold text-sm">Compare</a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">BIME</h3>
      <p className="text-sm text-gray-700"><strong>Good for:</strong> Medium (250–999 Employees), Enterprise (5,000+ Employees), Large (1,000–4,999 Employees)</p>
      <a href="#" className="text-green-700 font-semibold text-sm mt-2 inline-block">Learn More About BIME</a>
    </div>
    <div>
      <button className="mt-2 px-6 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
        Visit Product Profile
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V7a1 1 0 112 0v8a1 1 0 01-1 1h-8a1 1 0 110-2h5.586l-3.293-3.293a1 1 0 010-1.414z" />
        </svg>
      </button>
    </div>
  </div>

  {/* bipp Analytics Card */}
  <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4 mt-10">
    <div className="flex justify-between items-start">
      <img src="/images/bipp-logo.jpg" alt="bipp Logo" className="h-6" />
      <div className="flex items-center gap-4">
        <a href="#" className="text-green-600 text-sm">Leave a Review</a>
        <a href="#" className="text-blue-700 font-semibold text-sm">Compare</a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">bipp Analytics</h3>
      <p className="text-sm text-gray-700"><strong>Good for:</strong> Medium (250–999 Employees), Large (1,000–4,999 Employees)</p>
      <a href="#" className="text-green-700 font-semibold text-sm mt-2 inline-block">Learn More About bipp Analytics</a>
    </div>
    <div>
      <button className="mt-2 px-6 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
        Visit Product Profile
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V7a1 1 0 112 0v8a1 1 0 01-1 1h-8a1 1 0 110-2h5.586l-3.293-3.293a1 1 0 010-1.414z" />
        </svg>
      </button>
    </div>
  </div>
  {/* Birst Card */}
<div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4 mt-10">
  <div className="flex justify-between items-start">
    <img src="/images/birst-logo.png" alt="Birst Logo" className="h-6" />
    <div className="flex items-center gap-4">
      <span className="text-green-700 text-sm font-semibold">4.5 (1 review)</span>
      <a href="#" className="text-blue-700 font-semibold text-sm">Compare</a>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-gray-900">Birst</h3>
    <p className="text-sm text-gray-700"><strong>Good for:</strong> Enterprise (5,000+ Employees)</p>
    <p className="text-sm text-gray-700 mt-2">Birst takes what they call a "networked approach" to BI and Analytics, enabling a single view of data, and eliminating data silos.</p>
    <a href="#" className="text-green-700 font-semibold text-sm mt-2 inline-block">Learn More About Birst</a>
  </div>
  <div>
    <button className="mt-2 px-6 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
      Visit Product Profile
      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V7a1 1 0 112 0v8a1 1 0 01-1 1h-8a1 1 0 110-2h5.586l-3.293-3.293a1 1 0 010-1.414z" />
      </svg>
    </button>
  </div>
</div>

{/* Birt Analytics - Actuate Card */}
<div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4 mt-10">
  <div className="flex justify-between items-start">
    <img src="/images/birt-logo.jpg" alt="Birt Analytics Logo" className="h-6" />
    <div className="flex items-center gap-4">
      <a href="#" className="text-green-600 text-sm">Leave a Review</a>
      <a href="#" className="text-blue-700 font-semibold text-sm">Compare</a>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-gray-900">Birt Analytics - Actuate</h3>
    <p className="text-sm text-gray-700"><strong>Good for:</strong> Medium (250–999 Employees), Enterprise (5,000+ Employees), Large (1,000–4,999 Employees)</p>
    <a href="#" className="text-green-700 font-semibold text-sm mt-2 inline-block">Learn More About Birt Analytics - Actuate</a>
  </div>
  <div>
    <button className="mt-2 px-6 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2">
      Visit Product Profile
      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586V7a1 1 0 112 0v8a1 1 0 01-1 1h-8a1 1 0 110-2h5.586l-3.293-3.293a1 1 0 010-1.414z" />
      </svg>
    </button>
  </div>
</div>

      </section>
            {/*Business intelligence software benefits*/} 
         <section id="4" className="mb-12">
  <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
      Business intelligence software benefits
    </h2>

    {/* Benefit: Improved data quality */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Improved data quality
      </h3>
      <p className="text-gray-700">
        The best BI tools automatically identifies and cleans up inaccurate, incomplete, or duplicated data,
        ensuring that only high-quality data is used for analysis. Additionally, it enforces data standards and rules
        across different systems, ensuring data consistency and accuracy while reducing the risk of errors that can
        arise from manual data entry. Moreover, companies can gain a fuller picture of what is happening with
        their business by aggregating different data sources through business intelligence solutions.
      </p>
    </div>

    {/* Benefit: Greater transparency */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Greater transparency
      </h3>
      <p className="text-gray-700">
        Business intelligence tools give real-time visibility into business operations and performance. This enables
        organizations to monitor progress and identify potential issues in real time. By providing a thorough view of
        key metrics, BI software empowers businesses to identify areas for improvement and take corrective action
        when necessary.
      </p>
    </div>

    {/* Benefit: Better decision-making */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Better decision-making
      </h3>
      <p className="text-gray-700 mb-3">
        The software equips organizations with valuable insights into their operations, informing strategic decisions
        across product development, marketing, sales, and other critical areas. Business intelligence tools also
        show useful information on employee productivity, revenue, and department-specific performance,
        allowing organizations to understand their strengths and weaknesses.
      </p>
      <p className="text-gray-700">
        By analyzing large volumes of data from different sources, BI software can identify trends and patterns and
        uncover opportunities. With competitors moving quickly, companies must expedite making accurate
        decisions to avoid losing customers and revenue.
      </p>
    </div>

    {/* Benefit: Increased efficiency */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Increased efficiency
      </h3>
      <p className="text-gray-700">
        Companies can optimize resources and streamline processes with business intelligence software,
        decreasing costs and increasing efficiency. The software lets businesses make data-driven decisions to
        reduce waste by providing information on inventory management, supply chain optimization, and
        production planning.
      </p>
    </div>
    {/* Enhanced business margins */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Enhanced business margins
      </h3>
      <p className="text-gray-700">
        Business intelligence software improves business margins by identifying areas where costs can be
        reduced, such as streamlining supply chains and optimizing inventory management. It can also determine
        opportunities for revenue growth, like finding high-value customers, analyzing sales trends, and developing
        marketing strategies. BI software enables organizations to better understand their competitors, market
        trends, and customer preferences, so they can promptly respond to changing market conditions.
      </p>
    </div>

    {/* Integration */}
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration</h3>
      <p className="text-gray-700">
        It’s important to note many BI software solutions integrate with other software systems, including{" "}
        <a href="#" className="text-green-600 font-medium underline">
          customer relationship management (CRM)
        </a>
        ,{" "}
        <a href="#" className="text-green-600 font-medium underline">
          enterprise resource planning (ERP)
        </a>
        , and{" "}
        <a href="#" className="text-green-600 font-medium underline">
          accounting software
        </a>
        . By doing so, companies obtain a more comprehensive view of their operations and performance by combining data
        from multiple sources. Business intelligence software is crucial for those seeking competitive advantage by
        utilizing data-driven insights to make better-informed decisions and adapt to shifting market conditions.
      </p>
    </div>
  </div>
</section>

 
{/*  What is the business impact of business intelligence software?*/}
<section id="5" className ="mb-12">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
      What is the business impact of business intelligence software?
    </h2>

    <p className="mb-4 text-gray-700">
      <a href="#" className="text-green-600 font-medium underline">
        Business intelligence software
      </a>{" "}
      has a significant impact on businesses by providing valuable insights into customer behavior, market trends,
      and operational inefficiencies, which directly affect a company’s bottom line. It assists organizations
      in increasing revenue, reducing costs, and improving overall performance.
    </p>

    <p className="mb-4 text-gray-700">
      Today, investing in business intelligence software rather than relying solely on spreadsheets is a logical
      decision for companies of any kind. BI software handles large volumes of data more efficiently, minimizes
      the risk of errors, offers a range of analytical tools and visualizations, and brings real-time data updates,
      which are crucial in fast-paced business environments.
    </p>

    <p className="mb-4 text-gray-700">
      BI software supports businesses better understanding their clients by analyzing customer data to identify
      trends and preferences. This, in turn, allows organizations to tailor their products and services to meet
      customer needs, leading to greater customer satisfaction, loyalty, sales, and revenue.
    </p>

    <p className="mb-4 text-gray-700">
      The software also helps businesses uncover operational inefficiencies and bottlenecks by analyzing
      production processes, supply chains, and employee performance data. Such analysis helps to determine
      underutilized resources and streamline operations, boosting efficiency and decreasing costs, eventually
      resulting in higher profitability.
    </p>

    <p className="mb-4 text-gray-700">
      Business intelligence tools facilitate more effective decision-making by presenting accurate and timely
      data on sales trends, supply chain performance, and other key business metrics. This data allows business
      leaders to make informed decisions, driving growth and keeping the business ahead of its competition. As
      a result, companies will respond to constantly changing market conditions and have better chances of
      achieving financial success.
    </p>
  </div>
</section>
<section id="6" className="mb-12">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
      Choosing the best software for business intelligence platform
    </h2>
    <p className="text-gray-700 text-base">
      Ready to start your business intelligence software comparison? Our Technology Advisors are here to help
      you find the perfect tool for your company’s projects. Call for a free 5-minute consultation, or complete
      the form at the bottom of this page for fast, free recommendations based on your needs.
    </p>
  </div>
</section>

{/*   Frequently Asked Questions (FAQ)*/}
   <section id="7" className ="mb-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-green-600" />
                ) : (
                  <FaPlus className="text-green-600" />
                )}
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-700 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div> 
    </section>  

 
 

            {/* Collapsible Sections */}
            
          </div>
        </div>
      </div>
    </>
  );
}