"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function ProjectManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Reviews");
  const [sortBy, setSortBy] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState("10 per page");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "what-is-pm-software",
      title: "What is project management software?",
      active: false,
    },
    {
      id: "best-pm-software",
      title: "What is the best project management software?",
      active: false,
    },
    {
      id: "find-new-software",
      title: "Find your new project management software",
      active: false,
    },
    {
      id: "common-features",
      title: "Common project management software features",
      active: false,
    },
    {
      id: "how-to-choose",
      title: "How to choose the right PM software for your project",
      active: false,
    },
    { id: "pm-faqs", title: "Project management software FAQs", active: false },
  ]);

  const toggleSection = (sectionKey, labelKey) => {
  setExpandedSections(prev => ({
    ...prev,
    [sectionKey]: !prev[sectionKey],
  }));

  setActiveSection(prev => (prev === sectionKey ? null : sectionKey));
  setOpenSection(prev => (prev === labelKey ? null : labelKey));
};
 const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
    

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setTableOfContents((prev) =>
            prev.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    title: "monday.com: Best overall project management software",
    logo: "/images/monday.png",
    button: {
      text: "Visit Website",
      link: "#",
    },
    scores: [
      { label: "User reviews", score: "4.62/5" },
      { label: "General features", score: "4.38/5" },
      { label: "Pricing", score: "4.01/5" },
      { label: "Interface", score: "4.52/5" },
      { label: "Task management", score: "4.5/5" },
      { label: "Integrations", score: "4.5/5" },
      { label: "Automation", score: "4.9/5" },
      { label: "Project planning and scheduling", score: "4.9/5" },
      { label: "Collaboration tools", score: "4.25/5" },
      { label: "Resource management", score: "3.75/5" },
      { label: "Reporting and analytics", score: "4.9/5" },
      { label: "User security and permissions", score: "4.9/5" },
    ],
    pros: [
      "Can accommodate large-scale organizations.",
      "Straightforward communication and collaboration features.",
      "Advanced automation capabilities.",
    ],
    cons: [
      "May not be ideal for small teams due to its cost and complexity.",
      "Steep learning curve.",
      "Mobile app’s limitations on generating and viewing reports.",
    ],
    why: {
      intro: `I chose monday.com for its essential features that efficiently support project management. It offers functionalities that streamline processes and help secure effective project oversight and coordination. Its highly customizable workflow will allow you to tailor the software to your needs:`,
      bullets: [
        "Make informed decisions by leveraging its powerful visualization, with which you can view real-time data in ten different ways.",
        "Save time and avoid human error by automating tasks.",
        "Collaborate, share files, and update stakeholders through its neat cards and tagging system.",
      ],
      outro: `Compared with other project management tools, monday.com has fewer integrations. Despite this minor disadvantage, monday.com is still the best PM software overall because it allows you to perform multiple project management tasks in one platform.`,
      extras: {
        "About monday.com":
          "monday.com can help you streamline tasks, deadlines, and deliverables. It was initially created as a collaboration tool and eventually evolved into a comprehensive platform that can perform various project management functions. Nowadays, it is a leading tool for managing workflows, monitoring project progress, and improving communication. monday.com also offers other products including a CRM, making it one of the best CRM and project management software on the market today.",
      },
    },
  };


  const faqData = [
  {
    question: "What are the benefits of using project management tools?",
    answer:
      "The benefits of using project management tools include improved organization, increased efficiency, enhanced collaboration, and better visibility into project progress.",
  },
  {
    question: "How does project management software improve productivity?",
    answer:
      "It streamlines task coordination and resource management, provides real-time data and analytics, and helps complete projects efficiently and within budget.",
  },
  {
    question:
      "What are the cost considerations when choosing project management software?",
    answer:
      "Costs for project management software can vary based on features, the number of users, and the deployment type. It’s essential to consider both upfront costs and long-term value when selecting a tool.",
  },
  {
    question: "What is the job of a project manager?",
    answer:
      "Project managers are responsible for the entire project from beginning to end and coordinate between different teams or departments. Project managers handle all aspects of the project, such as setting goals and timelines, creating budgets, delegating tasks, and communicating with stakeholders.",
  },
  {
    question: "What are the five basics of project management?",
    answer: `
      There are five basic principles of success that you should follow to avoid project management mistakes:
      <ol>
        <li>Address questions and concerns at the beginning of the project.</li>
        <li>Create project goals that spell out details such as deadlines and deliverables.</li>
        <li>Define each person’s role(s) and communicate them clearly to your team.</li>
        <li>Track progress over time and proactively look for risks and roadblocks.</li>
        <li>Double-check that all deliverables have been met before finalizing the project.</li>
      </ol>
    `,
  },
  {
    question: "What tools do project managers use?",
    answer:
      "Project managers use many tools to ensure their projects stay on track, such as time trackers, budgeting tools, meeting agendas, calendars, email, and more. The best project management software combines all these tools into one centralized platform so that project managers only have to use one login to access them all.",
  },
   {
    question: "How many phases are there in project management?",
    answer:
      "There are five phases in the project management life cycle: initiation, planning, execution, monitoring, and closure five phases of project management.",
  
  },
];


  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Best Project Management Software for 2025";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

  const evaluationCriteria = [
    { criteria: "User scores", weight: "5%" },
    { criteria: "General features", weight: "8%" },
    { criteria: "Pricing", weight: "10.5%" },
    { criteria: "Interface", weight: "10.5%" },
    { criteria: "Task management", weight: "10%" },
    { criteria: "Integrations", weight: "10%" },
    { criteria: "Automation", weight: "10%" },
    { criteria: "Project planning and scheduling", weight: "10%" },
    { criteria: "Collaboration tools", weight: "10%" },
    { criteria: "Resource management", weight: "7%" },
    { criteria: "Reporting and analysis", weight: "5%" },
    { criteria: "User security and permissions", weight: "4%" },
    { criteria: "TOTAL", weight: "100%" },
  ];

  return (
    <>
      <Head>
        <title>
          Best Project Management Software for 2025 | Complete Guide
        </title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Project Management Software for 2025"
        />
        <meta
          property="og:description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/project-management"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Technology Advice" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Project Management Software for 2025"
        />
        <meta
          name="twitter:description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/project-management"
        />
      </Head>

      <div className="min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Breadcrumb Navigation */}
          <nav
            className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16"
            aria-label="Breadcrumb"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Go to homepage"
              >
                <span>Home</span>
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white font-medium">
                Best Project Management Software for 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Best Project Management Software for
              <span className="block mt-2 sm:mt-4">2025</span>
            </h1>
          </div>

          {/* Author and Reviewer Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
            {/* Author */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/project1.png"
                  alt="Kara Sherrer - Author"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                  Written by
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  Kara Sherrer
                </p>
              </div>
            </div>

            {/* Reviewer */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-sm sm:text-base lg:text-lg text-white/80 hidden sm:block">
                Reviewed by
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src="/images/project2.png"
                    alt="Web Webster - Reviewer"
                    fill
                    sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 sm:hidden mb-1">
                    Reviewed by
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-medium">
                    Web Webster
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                <p>
                  <span className="font-semibold text-white">
                    Technology Advice
                  </span>{" "}
                  is able to offer our services for free because some vendors
                  may pay us for web traffic or other sales opportunities. Our
                  mission is to help technology buyers make better purchasing
                  decisions, so we provide you with information for all vendors
                  — even those that don't pay us.
                </p>
              </div>
            </div>
          </div>

          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: December 18, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - Left Sidebar */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div
                className="bg-white rounded-4xl shadow-sm border border-gray-200 p-6"
                style={{ scrollBehavior: "smooth" }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${
                        item.active
                          ? "bg-green-50 text-green-700 border-l-4 border-green-500 font-medium"
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={shareOnFacebook}
                      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="flex-1 max-w-4xl">
              <section id="what-is-pm-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What is project management software?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Project management (PM) software helps businesses and
                      organizations achieve their goals and objectives more
                      efficiently and effectively. It guides project managers
                      and stakeholders through different{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        phases of the project management life cycle
                      </a>
                      , especially during{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        project planning
                      </a>
                      , execution, and monitoring.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      With functions that include{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        project planning
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        scheduling
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        task management
                      </a>
                      , and resource allocation, the right{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        project management
                      </a>{" "}
                      tool enables teams to streamline the intricate project
                      management process. Furthermore, these PM software
                      solutions help stakeholders stay on the same page through
                      features that enhance file sharing, communication, and{" "}
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        collaboration
                      </a>
                      .
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      I reviewed seven project management software solutions and
                      narrowed my list of recommendations to the best of the
                      best:
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            monday.com
                          </a>{" "}
                          is the best overall project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Asana
                          </a>{" "}
                          is the best project management software for ease of
                          use.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Wrike
                          </a>{" "}
                          is the most versatile project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Jira
                          </a>{" "}
                          is the best Agile project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            ClickUp
                          </a>{" "}
                          is the best project management software for resource
                          management.
                        </p>
                      </div>
                    </div>

                    {/* Expandable Sections */}
                    <div className="space-y-4">
                      {/* Update Notes Section */}
                      <div className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection("update-notes")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">
                            Update notes
                          </h3>
                          <div className="text-green-600">
                            {expandedSections["update-notes"] ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </div>
                        </button>
                        {expandedSections["update-notes"] && (
                          <div className="px-4 pb-4 border-t border-gray-200">
                            <div className="pt-4">
                              <p className="text-gray-700 mb-4">
                                Last updated: June 2025 - Updated with the
                                latest features and pricing information for all
                                recommended project management tools.
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li>
                                  • Added new integration capabilities for
                                  Monday.com
                                </li>
                                <li>• Updated Asana's pricing structure</li>
                                <li>
                                  • Included latest Jira automation features
                                </li>
                                <li>
                                  • Enhanced comparison criteria based on user
                                  feedback
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Our Methodology Section */}
                      <div className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection("methodology")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">
                            Our methodology
                          </h3>
                          <div className="text-green-600">
                            {expandedSections["methodology"] ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </div>
                        </button>
                        {expandedSections["methodology"] && (
                          <div className="px-4 pb-4 border-t border-gray-200">
                            <div className="pt-4 space-y-4">
                              <p className="text-gray-700">
                                I picked my recommendations with you in mind.
                              </p>
                              <p className="text-gray-700">
                                First, I evaluated seven of the leading project
                                management software options available today. To
                                compile my research, I reviewed vendor demos,
                                technical documentation, and user reviews from
                                customers like you.
                              </p>
                              <p className="text-gray-700">
                                I then narrowed my selections to the platforms
                                that best addressed the usual concerns among
                                project management software users: task
                                management, automation capabilities,
                                integration, collaboration, scalability, project
                                planning, and resource management.
                              </p>
                              <p className="text-gray-700 mb-4">
                                During our research, I evaluated the following
                                vendors:
                              </p>
                              <ol className="space-y-2 text-gray-700">
                                <li>
                                  1.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    monday.com
                                  </a>
                                </li>
                                <li>
                                  2.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    Jira
                                  </a>
                                </li>
                                <li>
                                  3.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    Trello
                                  </a>
                                </li>
                                <li>
                                  4.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    Asana
                                  </a>
                                </li>
                                <li>
                                  5.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    Airtable
                                  </a>
                                </li>
                                <li>
                                  6.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    Wrike
                                  </a>
                                </li>
                                <li>
                                  7.{" "}
                                  <a
                                    href="#"
                                    className="text-green-600 hover:text-green-700 underline"
                                  >
                                    ClickUp
                                  </a>
                                </li>
                              </ol>
                              <p className="text-gray-700 mt-4">
                                As the market evolves, I continually reevaluate
                                my choices so you always receive the best
                                insight for purchasing decisions.
                              </p>

                              {/* Evaluation Rubric */}
                              <div className="mt-6">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                  Evaluation rubric
                                </h4>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse border border-gray-300">
                                    <tbody>
                                      {evaluationCriteria.map((item, index) => (
                                        <tr
                                          key={index}
                                          className={
                                            index ===
                                            evaluationCriteria.length - 1
                                              ? "bg-gray-50 font-semibold"
                                              : ""
                                          }
                                        >
                                          <td className="border border-gray-300 px-4 py-3 text-gray-900">
                                            {item.criteria}
                                          </td>
                                          <td className="border border-gray-300 px-4 py-3 text-gray-900">
                                            {item.weight}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Featured partners
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white  font-bold">i</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex  space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            Z
                          </span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Zoho
                          <br />
                          <span className="text-lg">Projects</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Any Company Size
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Agile Development, Analytics / Reports, API, and 15 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        BitBucket, GitHub, Google Calendar, and 7 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* what are best project management tools */}
              <section id="best-pm-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                      What is the best project management software?
                    </h1>
                  </header>

                  {/* Sticky Heading */}
                  <div className="sticky top-0 z-10 bg-white pb-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={content.logo}
                          alt={`${content.title} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold text-black">
                          {content.title}
                        </h2>
                      </div>
                      <a
                        href={content.button.link}
                        className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700"
                      >
                        {content.button.text}
                      </a>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="mt-10 space-y-4 mb-10">
                    {content.scores.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-black text-sm font-medium mb-1">
                          <span>{item.label}</span>
                          <span>{item.score}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{
                              width: `${(parseFloat(item.score) / 5) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pros and Cons */}
                  <div className="flex flex-col gap-6 mb-8">
                    <div>
                      <h3 className="text-xl text-black font-semibold mb-2">
                        Pros
                      </h3>
                      <ul className="list-disc pl-5 text-black space-y-1">
                        {content.pros.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl text-black font-semibold mb-2">
                        Cons
                      </h3>
                      <ul className="list-disc pl-5 text-black space-y-1">
                        {content.cons.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Why I chose monday.com */}
                  <div>
                    <h3 className="text-xl text-black font-semibold mb-2">
                      Why I chose monday.com
                    </h3>
                    <p className="text-black mb-4">{content.why.intro}</p>
                    <ul className="list-disc pl-5 text-black space-y-1 mb-4">
                      {content.why.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-black mb-6">{content.why.outro}</p>

                    {/* Expandable Sections */}
                    {[
                      {
                        label: "About monday.com",
                        content: (
                          <>
                            <p className="text-black mb-4">
                              monday.com is a cloud-based work operating system
                              that helps teams manage tasks, projects, and
                              workflows. It provides visual tools to plan,
                              track, and collaborate, making it easier to stay
                              organized and on schedule.
                            </p>
                            <p className="text-black">
                              The platform is known for its flexibility,
                              allowing users to customize their boards and
                              processes for various use cases — from software
                              development to HR and marketing.
                            </p>
                          </>
                        ),
                      },
                      {
                        label: "Key Features",
                        content: (
                          <>
                            <h4 className="text-lg font-bold mb-2">
                              Customizable workflows and boards
                            </h4>
                            <p className="text-black mb-4">
                              With monday.com, you can fine-tune your workflows,
                              views, and boards to align them with your
                              project’s needs. This level of adaptability
                              provides a well-organized visual representation of
                              tasks and projects. It also simplifies workflow
                              comprehension for stakeholders and helps project
                              managers to easily identify bottlenecks and track
                              progress.
                            </p>
                            <h4 className="text-lg font-bold mb-2">
                              Automation capabilities
                            </h4>
                            <p className="text-black mb-4">
                              monday.com’s no-code automation builder is quite
                              intuitive; even those without technical expertise
                              can easily set up automation rules. The platform
                              also provides a variety of predefined automation
                              recipes that cover common project management
                              needs, such as:
                            </p>
                            <ul className="list-disc pl-5 text-black space-y-1 mb-4">
                              <li>Sending email notifications.</li>
                              <li>Updating item statuses.</li>
                              <li>
                                Creating new items based on specific triggers or
                                customized automation rules.
                              </li>
                            </ul>
                            <p className="text-black mb-4">
                              By automating repetitive tasks, you can focus on
                              the critical aspects of your work, thereby
                              increasing overall productivity. Automation also
                              helps maintain consistency in task management.
                            </p>
                            <h4 className="text-lg font-bold mb-2">
                              Collaborative platform
                            </h4>
                            <p className="text-black">
                              monday.com stands out as a collaboration and
                              communication tool because of functionalities such
                              as shared boards, commenting on tasks, sharing
                              files, and updating statuses. Each task or item
                              has its own conversation thread, allowing members
                              to add updates, ask questions, and provide
                              feedback directly. Having a definitive flow of
                              communication encourages accountability, reduces
                              miscommunication, and enhances team synergy.
                            </p>
                          </>
                        ),
                      },
                      {
                        label: "Pricing",
                        content: (
                          <>
                            <p className="text-black mb-4">
                              monday.com’s pricing can vary to scale with the
                              team’s size, and the cost may adjust based on the
                              number of seats required. The pricing structure
                              below (except for the Free plan) is based on a
                              team of three.
                            </p>
                            <p className="text-black mb-4">
                              monday.com has a visually intuitive platform and
                              offers a wide range of features. However, adding
                              more users and requiring more advanced features
                              for your business can become costly. monday.com’s
                              pricing is suitable for mid-sized organizations,
                              as its mid-tier plans balance features and
                              usability.
                            </p>
                            <h4 className="text-lg font-bold mb-2">
                              Free plan
                            </h4>
                            <ul className="list-disc pl-5 text-black mb-4">
                              <li>Free forever with up to two seats.</li>
                              <li>Includes basic features for personal use.</li>
                            </ul>
                            <h4 className="text-lg font-bold mb-2">
                              Basic plan
                            </h4>
                            <ul className="list-disc pl-5 text-black mb-4">
                              <li>
                                $27 per month (three seats, billed annually).
                              </li>
                              <li>
                                14-day free trial available, no credit card
                                required.
                              </li>
                              <li>Prioritized customer support.</li>
                              <li>5 GB file storage.</li>
                              <li>Create a dashboard based on one board.</li>
                            </ul>
                            <h4 className="text-lg font-bold mb-2">
                              Standard plan
                            </h4>
                            <ul className="list-disc pl-5 text-black">
                              <li>
                                $36 per month (three seats, billed annually).
                              </li>
                              <li>
                                14-day free trial available, no credit card
                                required.
                              </li>
                              <li>
                                Includes Basic plan features, plus:
                                <ul className="list-disc pl-5">
                                  <li>Timeline, Calendar, and Gantt views.</li>
                                  <li>Automations (250 actions per month).</li>
                                  <li>Integrations (250 actions per month).</li>
                                  <li>
                                    Create a dashboard that combines five
                                    boards.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <h4 className="text-lg font-bold mb-2">Pro plan</h4>
                            <ul className="list-disc pl-5 text-black">
                              <li>
                                $57 per month (three seats, billed annually).
                              </li>
                              <li>
                                14-day free trial available, no credit card
                                required.
                              </li>
                              <li>
                                Includes Standard plan features, plus:
                                <ul className="list-disc pl-5">
                                  <li>
                                    Automations (25,000 actions per month)
                                  </li>
                                  <li>
                                    Integrations (25,000 actions per month).
                                  </li>
                                  <li>Time tracking.</li>
                                  <li>Formula column.</li>
                                  <li>
                                    Create a dashboard that combines 10 boards.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <h4 className="text-lg font-bold mb-2">
                              Enterprise plan
                            </h4>
                            <ul className="list-disc pl-5 text-black">
                              <li>Requires custom pricing.</li>

                              <li>
                                Includes Pro plan features, plus:
                                <ul className="list-disc pl-5">
                                  <li>
                                    Enterprise-scale automations and
                                    integrations.
                                  </li>
                                  <li>
                                    Enterprise-grade security and governance.
                                  </li>
                                  <li>Multi-level permissions.</li>
                                  <li>Enterprise support.</li>
                                  <li>Advanced reporting and analytics.</li>
                                  <li>
                                    Create a dashboard that combines 50 boards.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </>
                        ),
                      },

                      {
                        label: "Gallery",
                        content: (
                          <ul className="list-disc pl-5 text-black space-y-2">
                            <li>
                              Visually appealing interface with drag-and-drop
                              features.
                            </li>
                            <li>
                              Color-coded statuses for quick understanding.
                            </li>
                            <li>Expandable task cards with rich content.</li>
                            <li>
                              Clean dashboard layout with charts and metrics.
                            </li>
                          </ul>
                        ),
                      },
                    ].map(({ label, content: sectionContent }) => (
                      <div key={label} className="border-t pt-4">
                        <button
                          onClick={() => toggleSection(label, label)}
                          className="w-full flex justify-between items-center text-black font-medium text-lg focus:outline-none"
                        >
                          <span>{label}</span>
                          <span className="text-green-600 text-xl">
                            {openSection === label ? <Minus /> : <Plus />}
                          </span>
                        </button>
                        {openSection === label && (
                          <div className="mt-2 text-black text-sm">
                            {sectionContent}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full text-sm hover:bg-green-50">
                        Read our full review
                      </button>
                      <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full text-sm hover:bg-green-50">
                        Submit your review
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* find your prodoct management software */}
              <section
                id="find-new-software"
                className="mt-8 max-w-7xl mx-auto"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                      Find your new project management software
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Discover the perfect tool to streamline your workflow and
                      boost productivity
                    </p>
                  </div>

                  {/* Filter Products & Search Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Filter Products */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Filter className="w-4 h-4 text-blue-600" />
                          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Filter Products
                          </h3>
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md"
                          />
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Products Search */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Search className="w-4 h-4 text-green-600" />
                          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            Search Products
                          </h3>
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            placeholder="Search product name"
                            value={productSearch}
                            onChange={(e) => setProductSearch(e.target.value)}
                            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md text-lg"
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                              <Search className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Filter Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Filter by */}
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Filter by
                        </h3>
                      </div>
                      <div className="relative">
                        <select
                          value={filterBy}
                          onChange={(e) => setFilterBy(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                        >
                          <option>Reviews</option>
                          <option>Pricing</option>
                          <option>Company Size</option>
                          <option>Features</option>
                          <option>Industry</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Sort by */}
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Sort by
                        </h3>
                      </div>
                      <div className="relative">
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                        >
                          <option>Featured</option>
                          <option>Most Reviews</option>
                          <option>Highest Rated</option>
                          <option>Lowest Price</option>
                          <option>Most Popular</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Items per page */}
                    <div className="group">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-indigo-500" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Items per page
                        </h3>
                      </div>
                      <div className="relative">
                        <select
                          value={itemsPerPage}
                          onChange={(e) => setItemsPerPage(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                        >
                          <option>10 per page</option>
                          <option>25 per page</option>
                          <option>50 per page</option>
                          <option>100 per page</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* products details */}

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/project3.jpg" // Replace with your actual logo path
                          alt="Zoho Projects Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Zoho Projects
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Micro (0-49 Employees),
                        </span>
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Small (50-249 Employees),
                        </span>
                        <span className="text-gray-600">Any Company Size</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Zoho Projects is an online project management software
                      that helps teams plan projects and track them efficiently
                      to the finish line. By intuitive reporting of project
                      progress and budget health, the solution enables teams to
                      make quick decisions. Catering to all kinds of teams, Zoho
                      Projects facilitates automating tasks, workflows, and
                      project notifications in a bid to improve productivity.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Zoho Projects
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.zoho.com/projects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Common Features Section */}
              <section id="common-features" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Common project management software features
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Project management software covers a range of platforms,
                      each with a slightly different mix of functionality. The
                      best software for project management offers features that
                      help the team build a project plan, track tasks through
                      the different stages of the project, and collaborate on
                      tasks to ensure on-time completion.
                    </p>
                  </div>

                  {/* Second Paragraph with Links */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Not every project management system will include all these
                      features, but many solutions are designed to help a{" "}
                      <Link
                        href="/small-team-project-management"
                        className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        small team
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/enterprise-project-management"
                        className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        enterprise
                      </Link>{" "}
                      corporation equally. When you prioritize the features you
                      need from your project software, you'll be better equipped
                      to find the right project management app for the projects
                      you manage.
                    </p>
                  </div>

                  {/* Scheduling Section */}
                  <div>
                    {/* Scheduling Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Scheduling
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Scheduling a project involves constructing a project
                      timeline, delegating tasks, and outlining the known
                      checkpoints within the project. Project management
                      software includes different types of scheduling features
                      that give teams alternative ways to visualize their
                      projects. While some project management tools use a
                      traditional calendar view, more complex solutions like
                      Gantt charts and horizontal project timelines help teams
                      break large or complicated projects into manageable tasks.
                      Scheduling features in a project management tool will help
                      your team go from a mind map to a project plan quickly by
                      giving insight into both time and resource management.
                    </p>
                  </div>
                </div>
              </section>

              {/* How-to-choose */}

              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    How to choose the right PM software for your project
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Selecting the best software for your project management
                      needs is crucial because it directly impacts a project’s
                      efficiency, productivity, and success. Selecting the right
                      project management tool is all about understanding your
                      project’s needs, picking out must-have features, knowing
                      your team, and ensuring it provides excellent value for
                      your money.
                    </p>
                  </div>

                  {/* Understand project requirements */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Understand project requirements
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Clearly define your project’s scope, complexity, and
                      specific needs. This understanding helps you identify a
                      tool that aligns with the project’s goals and challenges.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="pm-faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Project management software FAQs
                  </h1>

                  {/* FAQ Accordion */}
                  <div className="space-y-0 -mt-8">
                    {faqData.map((item, index) => (
                      <div key={index} className="border-b border-gray-200">
                        {/* Question Button */}
                       <button
  onClick={() => toggleItem(index)}
  className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
>
  <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
    {item.question}
  </h3>

  {/* Plus/Minus Icon */}
  <div
    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
      openItems[index]
        ? "bg-green-600 hover:bg-green-700"
        : "bg-green-600 hover:bg-green-700"
    }`}
  >
    {openItems[index] ? (
      <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
    ) : (
      <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
    )}
  </div>
</button>


                        {/* Answer Content */}
                        {openItems[index] && (
                          <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
