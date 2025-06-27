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
  Check,
  X,
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
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "CRM-recommendations",
      title: "Our top 11 CRM recommendations",
      active: false,
    },
    {
      id: " new-CRM-software",
      title: "Find your new CRM software",
      active: false,
    },
    {
      id: "key-features",
      title: "Key CRM features to consider for your use case",
      active: false,
    },
    {
      id: "how-to-choose",
      title: "Choosing the right CRM and sales software",
      active: false,
    },

    {
      id: "crm-faqs",
      title: "Frequently Asked Questions (FAQ)",
      active: false,
    },
  ]);

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
      setOpenSection((prev) => (prev === labelKey ? null : labelKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
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

  const toolsContent = {
    HubSpot: {
      title: "HubSpot Sales Hub- Best for integrations",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.5/5" },

        { label: "Pricing", score: "4.8/5" },
        { label: "General features and Interface", score: "4.4/5" },
        { label: "Core features", score: "4.5/5" },
        { label: "Advanced features", score: "3.8/5" },
        { label: "Inegration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4.8/5" },
      ],
      pros: [
        "One of the most trusted names in the industry",
        "First-class automation and integration options",
        "CRM, email marketing, and website management in one place",
        "Free plan",
      ],
      cons: [
        "Higher-end cost structure for paid plans and added tools",
        "Best for use cases that need more than just CRM software",
      ],
      why: {
        intro: `HubSpot Sales Hub is recommended as the best CRM for integration options due to its unparalleled ease of integration, free offerings, and a user-friendly platform that simplifies complex processes. It’s the ideal choice for businesses that value a cohesive, interconnected suite of tools to streamline their operations.`,
        bullets: [
          "HubSpot’s CRM earned near-perfect scores across the board, boasting a 95.83/100 for both API availability and integration ease, and a 100/100 for the breadth of native add-ons and third-party integrations. ",
          "The ‘no contract required’ policy and free plan make the platform a rarity among competitors. This approach democratizes access to powerful CRM tools, and makes it an attractive option for businesses of all sizes.",
        ],
        outro: `While Salesforce is often lauded for its extensive feature set and scalability, HubSpot Sales Hub is the go-to for businesses prioritizing ease of integration and user-friendly experiences. It’s particularly well-suited for companies that leverage a wide array of tools and require a CRM that can integrate with them.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HubSpot CRM is designed to help you streamline your business
                operations by integrating marketing, sales, and customer service
                into one seamless platform.
              </p>
              <p className="text-black">
                Known for its user-friendly interface and comprehensive sales
                and marketing features, HubSpot CRM provides tools for contact
                management, email tracking, deal pipelines, and marketing
                automation. Its integration capabilities with popular business
                apps ensure you can manage all your customer interactions and
                data from a single platform. HubSpot’s free tier offers
                comprehensive functionalities, making it accessible for small
                businesses and startups, while scalable options are available
                for larger enterprises needing advanced features and
                customizations. Its extensive training resources also help to
                speed up adoption of the software.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Contact management:</h4>
              <p className="text-black mb-4">
                Provides a detailed view of contacts, tracking every interaction
                automatically and allowing users to easily manage customer
                relationships.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Email tracking and notifications
              </h4>
              <p className="text-black mb-4">
                Enables real-time notifications when a contact opens an email,
                allowing sales teams to follow up effectively.
              </p>

              <h4 className="text-lg font-bold mb-2">Pipeline management:</h4>
              <p className="text-black">
                Offers a visual dashboard for managing sales pipelines, helping
                teams to track deals and stages effectively.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">
                AI-driven lead scoring:
              </h4>
              <p className="text-black">
                Uses predictive analytics and behavioral data to prioritize
                leads, helping sales teams focus on high-potential
                opportunities.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Bidirectional integration:{" "}
              </h4>
              <p className="text-black">
                Supports seamless integration with hundreds of third-party
                applications through a robust API, enhancing workflow automation
                and data synchronization.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <p className="font-bold  text-black mb-4">
                Price: <span classname="font-light">$0/month</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Contact management</li>
                <li>Deal pipeline</li>
                <li>Quotes</li>
                <li>Live chat</li>
                <li>Meeting scheduling</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Starter Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $20/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light"> Everything in Free, plus:</span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Sales automation</li>
                <li>Goals</li>
                <li>Sales content analytics</li>
                <li>Payments</li>
                <li>Task queues</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $100/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:{" "}
                <span classname="font-light">Everything in Starter, plus:</span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Prospecting and lead management</li>
                <li>Sequences</li>
                <li>Forecasting</li>
                <li>Custom Reporting</li>
                <li>Sales Analytics</li>
                <li>Playbooks</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:{" "}
                <span classname="font-light">
                  $150/seat/month billed monthly
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything in Professional, plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Custom objects</li>
                <li>Predictive lead scoring</li>
                <li>Conversation intelligence</li>
                <li>Recurring revenue tracking</li>
                <li>Deal Journey Analytics</li>
              </ul>
              <p className="text-black">
                For more detailed pricing and features, visit HubSpot Sales Hub
                Pricing.
              </p>
            </>
          ),
        },
      },
    },
    Zoho: {
      title: "Zoho CRM – Best for decentralized teams",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.5/5" },

        { label: "Pricing", score: "4.2/5" },
        { label: "General features and Interface", score: "4.3/5" },
        { label: "Core features", score: "4.8/5" },
        { label: "Advanced features", score: "4.4/5" },
        { label: "Inegration and compatibility", score: "5/5" },
        { label: "UX", score: "4.3/5" },
      ],
      pros: [
        "Remote-first functionality and support",
        "Amble collaboration tools for decentralized teams",
        "Additional tool sets for other critical business needs",
      ],
      cons: ["Free/low-cost plans have reduced functionality"],
      why: {
        intro: `Zoho CRM is best for decentralized teams because it delivers a combination of flexibility, connectivity, and comprehensive features that are unmatched in the market. Its high scores in collaboration tools and mobile app functionality are not just numbers—they reflect a real-world efficacy that decentralized teams can rely on..`,
        bullets: [
          "Zoho CRM scores an impressive 96/100 in advanced features, with perfect scores in multi-channel support and collaboration tools, essential for decentralized teams. Its ability to provide customer geo-location features and VOIP support further cements its position as the go-to CRM for teams operating remotely. ",
          "TAdditionally, Zoho offers a more seamless experience across all devices compared to competitors.",
        ],
        outro: `Zoho’s AI-powered Sales Assistant, Zia, offers smart sales forecasting, crucial for coordinating dispersed teams. SalesSignals keeps teams in sync with real-time, multi-channel notifications. Blueprint guides remote teams through each deal stage, providing process clarity. Zoho’s unique multi-channel support covers everything from email to social media, ensuring all team interactions are captured, irrespective of location..`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Zoho CRM is part of a larger platform that includes HR,
                accounting, operations, and more, placing it in a similar
                bracket to NetSuite. It’s accomplished this while still
                maintaining low overhead costs, thanks to its remote-first work
                environment.
              </p>
              <p className="text-black">
                That prioritization of decentralized collaboration carries over
                to their suite of software solutions, including their CRM. With
                features and tools comparable to its peers in this list, but
                with the added bonus of designing the platform to function
                across time zones and national boundaries.
              </p>
              <p className="text-black mb-4">
                The software is tailored to meet the needs of businesses of all
                sizes, with a free plan and no contract requirement. Its pricing
                structure is competitive, offering value for money and
                reflecting an understanding of diverse business models.
              </p>
              <p className="text-black mb-4">
                Zoho CRM’s interface is intuitive, scoring a 75/100 in design,
                and it supports a mild learning curve, ensuring new users can
                quickly adapt. The platform’s customizability is a standout
                feature, allowing businesses to tailor the CRM to their unique
                processes.
              </p>
              <p className="text-black mb-4">
                In terms of product design, Zoho CRM has been crafted with the
                user in mind, offering a balance between functionality and
                simplicity. This balance is critical for user adoption and
                long-term engagement with the platform.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                AI-Powered Sales Assistant (Zia):
              </h4>
              <p className="text-black mb-4">
                Zoho CRM offers an AI-powered sales assistant called Zia that
                can predict trends, anomalies, and conversions, making sales
                forecasting smarter.
              </p>
              <h4 className="text-lg font-bold mb-2">SalesSignals:</h4>
              <p className="text-black mb-4">
                This feature provides real-time notifications from across
                multiple channels like phone, email, social media, and live
                chat, ensuring you never miss an interaction.
              </p>

              <h4 className="text-lg font-bold mb-2">Blueprint:</h4>
              <p className="text-black">
                Zoho’s Blueprint feature helps businesses design and automate
                their sales processes, ensuring that salespeople know exactly
                what to do at each stage of the deal.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">Multi-Channel Support:</h4>
              <p className="text-black">
                Zoho CRM offers multi-channel support for phone, email, live
                chat, social media, and in-person meetings, keeping your team
                connected no matter how you communicate.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Advanced analytics and forecasting:{" "}
              </h4>
              <p className="text-black">
                Offers customizable reports and dashboards with advanced
                analytics capabilities, enabling precise sales forecasting and
                performance tracking.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <p className="font-bold  text-black mb-4">
                Price:<span classname="font-light"> $0 (for 3 users)</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Basic CRM functionalities</li>
                <li>Limited to 3 users</li>
                <li>Lead and contact management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Standard Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $20/user/month billed monthly or $14/user/month billed
                  annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Sales tracking</li>
                <li>Custom dashboards</li>
                <li>Multiple pipelines</li>
                <li>Sales forecasting</li>
                <li>Social media management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $35/user/month billed monthly or $23/user/month billed
                  annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Everything in Standard, plus:t</li>
                <li>Advanced customizations</li>
                <li>Process management</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $52/user/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Advanced customization</li>
                <li>Territory management</li>
                <li>
                  More extensive analytics and business intelligence tools
                </li>
                <li>AI-driven sales insights</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Ultimate Edition:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  {" "}
                  $52/user/month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  All Enterprise features, plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Higher storage</li>
                <li>Enhanced customization</li>
                <li>Advanced automation capabilities</li>
              </ul>
              <p className="text-black">
                For more detailed information on pricing and features, visit the
                Zoho CRM Pricing page.
              </p>
            </>
          ),
        },
      },
    },
    Shapecrm: {
      title: "Shape CRM – Best for flexibility",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.4/5" },

        { label: "Pricing", score: "4.4/5" },
        { label: "General features and Interface", score: "4.1/5" },
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "4.4/5" },
        { label: "Inegration and compatibility", score: "4/5" },
        { label: "UX", score: "4.5/5" },
      ],
      pros: [
        "User-friendly interface",
        "Onboarding and training webinars offered daily",
        "Prioritized list views",
        "Industry-specific modules",
        "Flat fee",
      ],
      cons: [
        "eSignature functionality could be improved",
        "Higher price point",
      ],
      why: {
        intro: `Shape CRM’s design philosophy centers around user-driven customization. This approach is evident in its intuitive interface, which allows users to easily modify and adapt the platform to their specific needs, enhancing the overall user experience beyond standard CRM offerings.`,
        bullets: [
          "It offers a compelling blend of industry-specific features, making it a top pick for businesses with specialized needs. And, it has all the bells and whistles. Scoring high in advanced features (not an easy feat), it offers a dedicated dialer that can be considered a full VoIP system, an AI chatbot and assistant, and geo-location integration options. ",
          "Its flexibility also makes it a top choice for specific industries. Unlike many CRM systems that offer rigid, one-size-fits-all solutions, Shape CRM provides a highly customizable platform.",
          "Shape CRM’s flexibility extends to its comprehensive automation tools for sales and marketing processes. These tools help automate repetitive tasks, increase productivity, and focus on high-quality leads. Its customizable workflows and task management capabilities make it easier to keep track of customer interactions and internal operations, ensuring efficient resource allocation and improved business outcomes.",
        ],
        outro: `Comparatively, Zoho CRM also offers significant flexibility with its extensive customization options and a wide range of integrations. However, Shape CRM provides a more specialized approach with industry-specific templates and features designed to meet the unique needs of different sectors. Additionally, Shape CRM’s integration of communication tools, such as built-in call, text, and email functionalities, streamlines customer interactions and reduces the need for multiple systems.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Shape CRM has carved a niche for itself by offering highly
                customizable solutions tailored to various industries.
                Originating as a tool to simplify complex business processes, it
                has evolved to include features like AI lead scoring and
                bi-directional texting. The platform is lauded for its
                scalability and extensive features.
              </p>
              <p className="text-black">
                Recently, they’ve added bulk texting capabilities and enhanced
                payment options, further streamlining business communication and
                transactions. However, the cost could be a consideration for
                smaller enterprises.
              </p>
              <p classname="text-black mb-4">
                One of the few gripes I have about Shape is its pricing
                structure. At $99/month if billed annually, it is on the higher
                end per user. However, the platform does include about
                everything a sales team needs. A tiered pricing structure in the
                future could fix this, allowing customers to choose their
                optimal level features for the price.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Lead engine:</h4>
              <p className="text-black mb-4">
                Offers landing pages, lead distribution, automated scheduling,
                and more.
              </p>
              <h4 className="text-lg font-bold mb-2">Built-in phone dialer:</h4>
              <p className="text-black mb-4">
                Call tracking, live monitoring, and intelligent call routing.
              </p>

              <h4 className="text-lg font-bold mb-2">AI chatbot:</h4>
              <p className="text-black">
                Transcription assistant, and text and image generator.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Dynamic data enrichment:
              </h4>
              <p className="text-black">
                Automatically enriches contact and lead profiles with relevant
                data from various sources, ensuring up-to-date and comprehensive
                customer information.
              </p>
              <h4 className="text-lg font-bold mb-2">Predictive analytics: </h4>
              <p className="text-black">
                Utilizes machine learning algorithms to predict customer
                behavior and sales outcomes, helping businesses make data-driven
                decisions and optimize their sales strategies.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">$99/month when billed annually.</p>
            </>
          ),
        },
      },
    },
    Pipedrive: {
      title: "Pipedrive – Best for pipeline management and optimization",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4.2/5" },

        { label: "Pricing", score: "3.5/5" },
        { label: "General features and Interface", score: "4.3/5" },
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "3.5/5" },
        { label: "Inegration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4/5" },
      ],
      pros: [
        "AI-powered lead tracking",
        "Helps teams focus their energy on more effective efforts",
        "Approachable interface",
      ],
      cons: [
        "Not as valuable for teams with existing, well-refined lead pipelines",
      ],
      why: {
        intro: `Pipedrive is best for businesses that prioritize sales process optimization. Its intuitive design, combined with powerful automation and analytics, makes it an ideal tool for sales teams to streamline their workflows.

Pipedrive’s visual sales pipeline breathes life into deal progression, streamlining the sales process in a digestible, visual format. Complemented by comprehensive Sales Reporting, users glean valuable insights into performance trends. With seamless Email Integration, tracking correspondence and automating follow-ups becomes effortless. Pipedrive’s Activity and Goal Tracking further keep sales efforts aligned, optimizing pipeline progress. For businesses seeking a clear view and control over their sales pipeline, Pipedrive has the right formula, making it a top recommendation in the CRM domain.`,
        bullets: [
          "Pipedrive’s overall score of 83.3 out of 100, with a 4.2-star rating, is a testament to its balanced performance across various criteria. It excels in core features like sales pipeline, task automation, and email integration, which are pivotal for effective CRM functionality. ",
          "Compared to other CRMs like Salesforce or HubSpot, Pipedrive is more accessible and less complex, making it ideal for small to medium-sized businesses or teams that require a straightforward, efficient sales process without the need for extensive customization or complex integrations.",
          "Pipedrive is designed to help teams make the most of their leads, and focus on the ones most likely to convert. It does this through a variety of non-conventional CRM capabilities, including AI analytics, intelligence software, and prescriptive data insights. ",
          "The interface is also carefully crafted to present the most relevant information in a visual, easy-to-digest manner. Properly implemented, Pipedrive can dramatically reduce the number of leads that slip through the cracks, and the number of dead ends chased by sales staff.",
          "Recent additions include improved AI analytics and more third-party integrations.",
        ],
        outro: `For more information on Pipedrive, check out Pipedrive Product Updates and Pipedrive Community.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HubSpot CRM is designed to help you streamline your business
                operations by integrating marketing, sales, and customer service
                into one seamless platform.
              </p>
              <p className="text-black">
                Known for its user-friendly interface and comprehensive sales
                and marketing features, HubSpot CRM provides tools for contact
                management, email tracking, deal pipelines, and marketing
                automation. Its integration capabilities with popular business
                apps ensure you can manage all your customer interactions and
                data from a single platform. HubSpot’s free tier offers
                comprehensive functionalities, making it accessible for small
                businesses and startups, while scalable options are available
                for larger enterprises needing advanced features and
                customizations. Its extensive training resources also help to
                speed up adoption of the software.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Pipeline management:</h4>
              <p className="text-black mb-4">
                Pipedrive offers a visual sales pipeline which allows users to
                effectively manage deals at different stages and streamline the
                sales process.
              </p>
              <h4 className="text-lg font-bold mb-2">Sales reporting:</h4>
              <p className="text-black mb-4">
                Pipedrive includes comprehensive sales reporting features to
                provide insights and monitor sales performance over time.
              </p>

              <h4 className="text-lg font-bold mb-2">Email integration:</h4>
              <p className="text-black">
                O: Pipedrive provides seamless email integration, allowing users
                to send and receive emails directly from the CRM, track
                correspondence and automate follow-ups.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Activity and goal tracking:
              </h4>
              <p className="text-black">
                Pipedrive allows users to set and monitor goals and activities,
                keeping sales efforts aligned with business objectives.
              </p>
              <h4 className="text-lg font-bold mb-2">Sales automation:</h4>
              <p className="text-black">
                Pipedrive’s workflow automation feature enables users to
                automate repetitive tasks, such as sending emails or updating
                deal stages, to save time and ensure consistency in sales
                processes
              </p>
              <h4 className="text-lg font-bold mb-2">Smart contact data: </h4>
              <p className="text-black">
                Pipedrive enriches contact profiles by pulling in data from
                social media and other online sources, providing users with
                comprehensive and up-to-date information about their contacts.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Essential:</h4>
              <p className="font-bold  text-black mb-4">
                Price:{" "}
                <span classname="font-light">
                  $24 per seat per month billed monthly or $14 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Lead and pipeline management</li>
                <li>Data import</li>
                <li>400+ integrations</li>
                <li>Contact reports</li>
                <li>Personalized onboarding</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Advanced:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  $49 per seat per month billed monthly or $39 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything from previous tier plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Full email sync</li>
                <li>Automations builder, including email sequences</li>
                <li>Call and email scheduling</li>
                <li>Live chat support</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Professional :</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light">
                  $69 per seat per month billed monthly or $49 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classname="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>AI Sales Assistant</li>
                <li>Contract management</li>
                <li>Lead routing</li>
                <li>Team management</li>
                <li>Revenue forecasts</li>
                <li>Extra data entry and data quality settings</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Power:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classmate="font-light">
                  {" "}
                  $79 per seat per month billed monthly or $64 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classmate="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Project planning</li>
                <li>More control of account permissions and visibilities</li>
                <li>24/7 live chat support</li>
                <li>Phone support</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classmate="font-light">
                  $129 per seat per month billed monthly or $99 per seat per
                  month billed annually
                </span>
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features:
                <span classmate="font-light">
                  Everything from previous tiers plus:
                </span>
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Unlimited reports and customizations</li>
                <li>Enhanced security preferences</li>
                <li>
                  Maximize the number of automations and email syncs per seatt
                </li>
              </ul>
              <p className="text-black">
                For more detailed information on pricing and features, visit the
                Pipedrive Pricing page.
              </p>
            </>
          ),
        },
      },
    },
    Salesforce: {
      title: "Salesforce Sales Cloud – Best for enterprises",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4/5" },

        { label: "Pricing", score: "2.7/5" },
        { label: "General features and Interface", score: "4.5/5" },

        { label: "Advanced features", score: "4.5/5" },
        { label: "Inegration and compatibility", score: "3.5/5" },
        { label: "UX", score: "3.5/5" },
      ],
      pros: [
        "Extensive integrations",
        "Enterprise-level software functionality for small teams",
        "Can be configured to almost any situation",
      ],
      cons: ["Mid-to-high pricing", "Complex implementation"],
      why: {
        intro: `Salesforce is a market leader for a reason: it offers a comprehensive suite of advanced tools designed to adapt and grow alongside businesses. While the company offers solutions for businesses at every level, it is particularly well suited in areas crucial for enterprise-level operation. The AppExchange marketplace further enhances this flexibility, providing access to thousands of third-party applications that extend functionality beyond native features. This dynamic ecosystem, coupled with frequent updates and a large community of users and developers, helps Salesforce maintain its competitive edge.`,
        body: `Salesforce Sales Cloud is a top pick for enterprises because of its superior customization, integration options, and advanced features. With the Lightning App Builder, you can create custom applications without needing to code. Plus, the Salesforce AppExchange offers over 7,000 third-party apps, significantly enhancing your CRM’s functionality. While NetSuite also allows for customization and integrations, Salesforce’s broader ecosystem is much more user-friendly.`,
        content: `And with Salesforce’s Einstein AI tools, you get predictive analytics, lead scoring, and automated workflows that streamline your sales processes. These AI features are more advanced than what NetSuite offers, making Salesforce particularly effective for enhancing CRM activities. Salesforce’s real-time dashboards and customizable reports make it easy to access and understand key metrics, helping you make informed decisions quickly.`,
        outro: `NetSuite does integrate CRM with ERP, financials, and e-commerce capabilities, making it a solid choice for product-driven companies. However, Salesforce’s cloud-first approach means you benefit from frequent updates and a dynamic platform that evolves with your business. Salesforce’s clear and flexible pricing tiers also simplify budgeting and planning, unlike NetSuite’s less transparent pricing.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Salesforce CRM, included in Salesforce Sales Cloud, has been a
                titan in the enterprise arena for years, and it has largely
                gained its clout on merit. Its comprehensive suite of features,
                scalability, and innovative approach to customer relationship
                management all serve to make it a strong contender in the space.
              </p>
              <p className="text-black">
                While Salesforce’s comprehensive features and customization
                options are a boon for many large-scale businesses, they can
                also present a steep learning curve for new users. The
                platform’s depth, which allows for extensive tailoring, may
                require significant training and expertise to navigate
                effectively. This could lead to additional costs for
                organizations in terms of time and resources spent on training.
              </p>
              <p className="text-black mb-4">
                <p className="text-black mb-4">
                  Integration capabilities are a strong point for Salesforce,
                  offering connections with a multitude of business
                  applications. Yet, this interconnectedness can sometimes lead
                  to complexity, particularly when managing and troubleshooting
                  integrations across various systems.
                </p>
                <p className="text-black">
                  The user experience is generally user-friendly and is
                  regularly updated to introduce new functionalities.
                  Nonetheless, some users may find the frequent updates
                  challenging to keep up with, potentially disrupting workflows
                  as teams adapt to new features.
                </p>
              </p>
              <p className="text-black">
                Salesforce’s AI enhancements with Einstein and mobile experience
                improvements are commendable, positioning the platform at the
                forefront of innovation, but remember the cost associated with
                accessing these cutting-edge tools should be considered.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                360-degree customer view:
              </h4>
              <p className="text-black mb-4">
                Brings together every interaction and piece of customer data,
                presenting a complete view of each client’s journey. This
                holistic perspective enables businesses to understand their
                customers better, enhancing relationship-building.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Einstein AI-powered analytics:
              </h4>
              <p className="text-black mb-4">
                elivers insightful predictive analytics. This technology
                provides proactive lead scoring, trend analysis, and accurate
                sales forecasts, driving strategic, data-informed
                decision-making.
              </p>

              <h4 className="text-lg font-bold mb-2">
                Extensive customization and integration:{" "}
              </h4>
              <p className="text-black">
                Offers a range of modules and a flexible API for seamless
                integration with other tools, ensuring Salesforce adapts to your
                specific business needs and tech stack, not vice versa.
              </p>
              <h4 className="text-lg font-bold mb-2">Meeting scheduling:</h4>
              <p className="text-black">
                Provides a tool to simplify meeting scheduling by syncing with
                your calendar and allowing contacts to book time directly.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Scalability and cloud-based structure:
              </h4>
              <p className="text-black">
                Cloud-based architecture enables secure, anywhere-access to your
                CRM data, facilitating collaboration and boosting productivity
                across your team.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                <a herf="/">Free Trial </a>Available
              </p>

              <h4 className="text-lg font-bold mb-2">Starter Suite:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $25/user/month billed monthly or annually
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Setup and onboarding</li>
                <li>lead, account, contact, and opportunity management</li>
                <li>email integration</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Pro Suite:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $100/user/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features: All Starter Suite features, plus:
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Greater customization and automation</li>
                <li>Sales quoting and forecasting</li>
                <li>Real-time chat</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $165/user/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features: All Pro Suite features, plus:
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Advanced pipeline management</li>
                <li>Deal insights</li>
                <li>Conversation intelligence</li>
                <li>Workflow and approvals automation</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Unlimited:</h4>
              <p className="font-bold  text-black mb-4">
                Price: $330/user/month billed annually
              </p>
              <h6 className="text-lg font-bold mb-2">
                Features: All Enterprise features, plus::
              </h6>
              <ul className="list-disc pl-5 text-black">
                <li>Predictive AI</li>
                <li>Conversation intelligence</li>
                <li>Sales engagement</li>
                <li>Full sandbox</li>
              </ul>
            </>
          ),
        },
      },
    },
    Oracle: {
      title: "Oracle NetSuite CRM – Best all-in-one solution",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "4/5" },

        { label: "Pricing", score: "2.5/5" },
        { label: "General features and Interface", score: "3.8/5" },
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "4/5" },
        { label: "Inegration and compatibility", score: "4.8/5" },
        { label: "UX", score: "3.8/5" },
      ],
      pros: [
        "Most comprehensive business tool on the list",
        "Full-fledged ERP capabilities",
        "360-degree customer view",
        "Scalability and flexibility",
      ],
      cons: ["Higher-end pricing", "No standalone CRM option"],
      why: {
        intro: `HOracle NetSuite CRM is as comprehensive as it gets. It’s a remarkably versatile tool, particularly for businesses seeking an all-in-one cloud solution that integrates CRM with financials, e-commerce, and more..`,
        body: `This powerhouse, cloud-based solution provides a 360-degree customer view, enabling businesses to see a full spectrum of customer interactions in real-time. Its advanced features, particularly in AI analytics and collaboration tools, make the platform stand out and clinch a spot in the 4 star range.`,
        content: `One of the key advantages of NetSuite over competitors like Salesforce and Pipedrive is its comprehensive nature. While Salesforce excels in its CRM-specific functionalities, offering features like customizable dashboards, opportunity scoring, and a wide range of integrations, NetSuite provides a more holistic approach by integrating CRM with enterprise resource planning (ERP), accounting, and e-commerce capabilities. This makes NetSuite particularly well-suited for businesses that require extensive operational management alongside customer relationship management​.`,
        outro: `Compared with Pipedrive, NetSuite offers far better functionality. Pipedrive is favored for its ease of use and value for money, particularly for small to medium-sized businesses focusing on sales pipeline management. However, it lacks the depth of features offered by NetSuite, particularly in areas like inventory management and financials, which are crucial for larger or more complex businesses​ ​.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Rounding out the 4-star range on our list is NetSuite CRM from
                Oracle. If that name sounds familiar, it should: NetSuite was an
                internet pioneer back when the internet still ran on dial-up.
                These days, the brand (now owned by Oracle) continues to offer
                advanced software and digital technology solutions to businesses
                around the world.
              </p>
              <p className="text-black">
                NetSuite is noteworthy for numerous reasons, but above all else,
                they are a comprehensive solution. The CRM portion is only a
                fraction of the platform—the suite handles enterprise resource
                planning (ERP), accounting and financials, inventory tracking,
                and more. Organizations looking to use a single system to manage
                and optimize their entire business infrastructure need look no
                further.
              </p>
              <p className="text-black mb-4">
                The overall design of Oracle NetSuite CRM also focuses on
                providing a comprehensive view of the customer lifecycle. While
                its interface and usability score moderately, the CRM’s strength
                lies in its ability to offer a 360-degree view of customers,
                integrating sales, customer service, and marketing effectively.
              </p>
              <p className="text-black mb-4">
                This evolution into a comprehensive ecosystem addresses the
                growing need for interconnected business systems, offering a
                more efficient and unified approach to managing various business
                processes.
              </p>
              <p className="text-black mb-4">
                That said, its greatest strength is also its biggest caveat.
                NetSuite is a package deal. Signing up for the CRM (or any
                individual business function) means signing up for the whole
                platform, so it works best for brands that stand to benefit from
                an entire workflow overhaul.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                360-Degree customer view:
              </h4>
              <p className="text-black mb-4">
                Provides a comprehensive, real-time view of customer
                interactions across all channels, enhancing customer insight and
                service.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Sales force automation (SFA):
              </h4>
              <p className="text-black mb-4">
                Automates and streamlines the entire sales process, reducing
                errors and saving time..
              </p>

              <h4 className="text-lg font-bold mb-2">Marketing automation</h4>
              <p className="text-black">
                Enables businesses to streamline campaign management and track
                marketing ROI effectively.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Customer service Management: :
              </h4>
              <p className="text-black">
                Enhances customer satisfaction by providing tools for managing
                customer support and improving service delivery.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Advanced order management:
              </h4>
              <p className="text-black">
                NetSuite offers order management capabilities that streamline
                the order-to-cash process.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Real-time analytics and reporting{" "}
              </h4>
              <p className="text-black">
                Provides powerful, customizable dashboards and reports that
                deliver real-time insights into business performance.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black">Starting from $499/user/year</p>
            </>
          ),
        },
      },
    },
  };

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const faqData = [
    {
      question: "What is an example of a CRM program?",
      answer:
        "TSalesforce is a widely recognized CRM program that offers a variety of customer relationship management services.",
    },
    {
      question: "What is the most popular CRM software?",
      answer:
        "ISalesforce is often considered the most popular CRM software due to its extensive features and widespread adoption across industries. But don’t let popularity keep you from checking out their competitors like Pipedrive and HubSpot. At a fraction of the cost and with a lot less work, they can provide a robust CRM system that will serve your business well.",
    },
    {
      question: "What is CRM mainly used for?",
      answer:
        "CRM is primarily used for managing interactions with current and potential customers, streamlining processes, and improving profitability through organizing customer information and automating sales and marketing interactions.",
    },
    {
      question: "Is Excel a CRM tool?",
      answer:
        "Excel is not a dedicated CRM tool; it is a spreadsheet application that can be used for basic data management but lacks the automation, integration, and analytics capabilities of specialized CRM software.",
    },
    {
      question: "What is the point of having a CRM?",
      answer: `A CRM system helps businesses manage customer data, track interactions, and automate various marketing, sales, and customer service processes, leading to improved customer relationships and increased efficiency.`,
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

  const crmData = [
    {
      id: 1,
      name: "HubSpot Sales Hub",
      image: "/images/hubspot.jpg",
      alt: "HubSpot Sales Hub",
      expertScore: 4.5,
      bestFor: "Best for integrations",
      visitUrl: "hubspot",
      keyFeatures: [
        "AI-driven lead scoring",
        "Bidirectional scoring",
        "Pipeline management",
      ],
      freeTrial: true,
      freeVersion: true,
    },
    {
      id: 2,
      name: "Zoho CRM",
      image: "/images/zoho.jpg",
      alt: "Zoho CRM",
      expertScore: 4.5,
      bestFor: "Best for decentralized teams",
      visitUrl: "zoho",
      keyFeatures: [
        "SalesSignals",
        "Blueprint",
        "AI-powered sales assistant Zia",
      ],
      freeTrial: true,
      freeVersion: true,
    },
    {
      id: 3,
      name: "Shape CRM",
      image: "/images/shapecrm.png",
      alt: "Shape CRM",
      expertScore: 4.4,
      bestFor: "Best for flexibility",
      visitUrl: "shape",
      keyFeatures: [
        "Industry-specific modules",
        "Dynamic data modeling",
        "Custom workflow automation",
      ],
      freeTrial: true,
      freeVersion: false,
    },
    {
      id: 4,
      name: "Pipedrive",
      image: "/images/shapecrm.png",
      alt: "Pipedrive",
      expertScore: 4.2,
      bestFor: "Best for pipeline management and optimization",
      visitUrl: "shape",
      keyFeatures: [
        "Streamlined lead routing",
        "Revenue Forecasting",
        "Smart contact management",
      ],
      freeTrial: true,
      freeVersion: false,
    },
    {
      id: 5,
      name: "Salesforce Sales Cloud",
      image: "/images/shapecrm.png",
      alt: "Salesforce Sales Cloud",
      expertScore: 4.0,
      bestFor: "Best CRM for enterprises",
      visitUrl: "shape",
      keyFeatures: [
        "360-degree customer view",
        "Einstein AI analytics",
        "Broad scalability",
      ],
      freeTrial: true,
      freeVersion: false,
    },
  ];

  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <>
      <Head>
        <title>Best CRM Software for 2025 | Complete Guide</title>
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
              <span className="text-white font-medium">CRM</span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Best CRM Software
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
                  Aron Vaughan
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                  Staff Writer
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
                    Corey Noles
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
          {/* lasted updated */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Last Updated: October 15, 2024</span>
            </div>
          </div>
          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: August 12, 2024</span>
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
                      CRM Software
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      CRM software manages and analyzes business contact and
                      customer information by storing and organizing it
                      effectively. Sales, marketing, and customer service teams
                      use the CRM platform to automate the gathering and
                      structuring of data related to customers, leads, partners,
                      and crucial business relationships.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      The processes and systems that help .
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Below, we have scored and ranked some of the top CRM
                      solutions in the market. Each has its own unique features
                      and functions that make them best suited to various use
                      cases.
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
                            HubSpot Sales Hub:
                          </a>{" "}
                          Best for integrations
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
                            Zoho CRM:
                          </a>{" "}
                          Best for decentralized teams
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
                            Shape CRM:
                          </a>{" "}
                          Best for flexibility
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
                            Pipedrive:
                          </a>{" "}
                          Best for pipeline management and optimization
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
                            Salesforce Sales Cloud:
                          </a>{" "}
                          Best CRM for enterprises
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
                            Oracle NetSuite CRM:
                          </a>{" "}
                          Best all-in-one solution
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
                            Insightly CRM:
                          </a>{" "}
                          Best for easy-to-read analytics and reporting
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
                            Keap CRM:
                          </a>{" "}
                          Best for sales and marketing synergy
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
                            Copper CRM
                          </a>{" "}
                          Best for security
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
                            ClickUp:
                          </a>{" "}
                          Best for project management
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
                            Less Annoying CRM:
                          </a>{" "}
                          BBest for simplicity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              Featured Partners Section
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
              <section id="CRM-recommendations" className="mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Our top 11 CRM recommendations
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                              CRM Platform
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Expert Score
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Best for
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Key Features
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Free Trial
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Free Version
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {crmData.map((crm, index) => (
                            <tr
                              key={crm.id}
                              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }`}
                            >
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <div className="w-16 h-8 sm:w-32 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                      src={crm.image}
                                      alt={crm.alt}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="text-center sm:text-left">
                                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                                      {crm.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                  <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                    {crm.expertScore}
                                  </span>
                                  <div className="flex space-x-1 scale-75 sm:scale-100">
                                    {renderStars(crm.expertScore)}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {crm.bestFor}
                                </span>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6">
                                <ul className="space-y-1 sm:space-y-2">
                                  {crm.keyFeatures.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center"
                                    >
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                                      <span className="leading-tight sm:leading-normal">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex justify-center">
                                  {crm.freeTrial ? (
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                      <Check className="w-3 h-3 sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                                      <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex justify-center">
                                  {crm.freeVersion ? (
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                      <Check className="w-3 h-3 sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                                      <X className="w-3 h-3 sm:w-5 sm:h-5 text-red-600" />
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2 mx-auto text-xs sm:text-sm">
                                  <span>Visit Website</span>
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-gray-600 text-sm">
                      * Scores and recommendations are based on expert analysis
                      and user reviews
                    </p>
                  </div>
                </div>
              </section>
              {/* what are best project management tools */}
              
                {/* Common Heading

                <h1 className="text-3xl font-bold mt-4 text-black mb-2">
                  What is the best project management software?
                </h1>
                <p className="text-gray-700 mt-2">
                  Here are our top recommendations for project management
                  software in 2025.
                </p> */}

                {/* Map through the tools array */}
                {toolsArray.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
                  >
                    {/* Tool Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Image
                            src={tool.logo}
                            alt={`${tool.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-black">
                          {tool.title}
                        </h2>
                      </div>
                      <a
                        href={tool.button.link}
                        className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                      >
                        {tool.button.text}
                      </a>
                    </div>

                    {/* Scores */}
                    <div className="space-y-4 text-black mb-6">
                      {tool.scores.map((score, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm font-medium mb-1">
                            <span>{score.label}</span>
                            <span>{score.score}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{
                                width: `${
                                  (parseFloat(score.score) / 5) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pros</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cons</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Why I Chose Section */}
                    <div className="mb-6 text-black">
                      <h3 className="text-lg font-semibold mb-2">
                        Why I chose {tool.title.split(":")[0]}
                      </h3>
                      <p className="mb-4">{tool.why.intro}</p>
                      {tool.why.bullets && (
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {tool.why.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <p>{tool.why.outro}</p>
                    </div>

                    {/* Expandable Sections */}
                    {tool.why.extras &&
                      Object.entries(tool.why.extras).map(
                        ([label, content]) => {
                          const sectionKey = `${tool.id}-${label}`;
                          return (
                            <div
                              key={sectionKey}
                              className="border-t text-black pt-4 mb-4"
                            >
                              <button
                                onClick={() => toggleSection(sectionKey)}
                                className="w-full flex justify-between items-center font-medium"
                              >
                                <span>{label}</span>
                                <span className="text-green-600">
                                  {openSections[sectionKey] ? (
                                    <Minus className="w-5 h-5" />
                                  ) : (
                                    <Plus className="w-5 h-5" />
                                  )}
                                </span>
                              </button>
                              {openSections[sectionKey] && (
                                <div className="mt-2 text-gray-700">
                                  {typeof content === "string" ? (
                                    <p>{content}</p>
                                  ) : (
                                    content
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }
                      )}
                  </div>
                ))}
             
              {/* find your prodoct management software */}
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
              {/* 1CRM products details */}
              <section id="new-CRM-software" className="mt-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/1CRM.png" // Replace with your actual logo path
                            alt="1CRM Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            1CRM
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
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Founded in 1997 and headquartered in Victoria, Canada,
                        1CRM develops an eponymous customer relationship
                        management (CRM) tool. The 1CRM system helps its clients
                        provide better online information to their customers
                        while streamlining internal business processes and
                        improving their cost model. 1CRM offers both an
                        on-premise solution and a cloud-based service
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About 1CRM
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.1crm.com/"
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

                {/* 4Degrees products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/4Degrees.png" // Replace with your actual logo path
                            alt="4Degrees Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            4Degrees
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
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        4Degrees is a cloud-based customer relationship
                        management (CRM) solution, which helps businesses
                        leverage their relationships. 4Degrees integrates into
                        email, calendar, and a number of third party data
                        sources to automatically populate a team's relationship
                        network, minimize data entry about the people and
                        companies in that network, and suggests ways to engage
                        that network over time.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About 4Degrees
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.4degrees.com/"
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

                {/* Aarialife Technologies - A Zoho CRM Provider products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Aarialife.png" // Replace with your actual logo path
                            alt=" 2Aarialife Technologies Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Aarialife Technologies - A Zoho CRM Provider
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
                            Medium (250-999 Employees),
                          </span>

                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Aarialife is a Zoho Premium Partner and has the
                        knowledge, skills, and competency to consult and help
                        implement a highly-customized solution to meet various
                        customer's business and sales automation needs, while
                        suggesting leading practices.
                      </p>

                      <Link
                        href="/learn-more/24SevenOffice"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Aarialife Technologies
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.aarialife.com/"
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

                {/*Accelo  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/accelo.png" // Replace with your actual logo path
                            alt="Accelo Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Accelo
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
                            Medium (250-999 Employees),
                          </span>

                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Small (50-249 Employees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Accelo is a comprehensive Professional Services
                        Automation (PSA) platform designed to help service
                        organizations streamline operations, manage projects,
                        and improve profitability. By centralizing business
                        processes, it provides full visibility, real-time
                        insights, and automation, helping teams deliver work
                        more efficiently and detect issues early. Accelo
                        supports scalability and enables growth with integrated
                        solutions for project, client, and financial management
                        from quote-to-cash.
                      </p>

                      <Link
                        href="/learn-more/4castplus"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Accelo
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.accelo.com/"
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

                {/* Affinaquest products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Affinaquest.png" // Replace with your actual logo path
                            alt="Affinaquest Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            5day.io
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
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Affinaquest is a full-featured customer relationship
                        management (CRM) system built specifically for nonprofit
                        organizations.
                      </p>

                      <Link
                        href="/learn-more/5day-io"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Affinaquest
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.affinaquest.com/"
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

                {/* 5Affinity products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Affinity.jpg" // Replace with your actual logo path
                            alt="Affinity Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Affinity
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
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Affinity is a relationship intelligence platform
                        enabling teams to leverage their network and close
                        deals. Using patent-pending technology, Affinity allows
                        teams to manage relationships by auto-populating the
                        pipeline and allowing introductions to decision makers.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Affinity
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.affinity.co/"
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

                {/* AgencyBloc  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgencyBloc.png" // Replace with your actual logo path
                            alt="AgencyBloc Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            AgencyBloc
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
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        AgencyBloc is an agency management system that helps
                        life and health insurance agencies grow their business
                        by organizing and automating their operations using a
                        combination of an industry-specific CRM, commissions
                        processing, and integrated marketing automation.
                        AgencyBloc’s mission is to provide powerful solutions by
                        making the convoluted straightforward.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About AgencyBloc
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agencybloc.com/"
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

                {/*AgentCubed products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgentCubed.jpg" // Replace with your actual logo path
                            alt="AgentCubed Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            AgentCubed
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
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        AgentCubed was developed as a lead management tool as
                        well as a customer relationship management (CRM)
                        solution for the insurance industry. It offers three
                        different cloud-based products that cater to the needs
                        of either agents, agencies, or call centers. AgentCubed
                        provides free product demos, and its agency and call
                        center solutions can be customized to the specific needs
                        of the client depending on how many individuals will be
                        using the system.
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About AgentCubed
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agentcubed.com/"
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

                {/* Agile CRM  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/AgileCRM.png" // Replace with your actual logo path
                            alt="Agile CRM Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Agile CRM
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
                            Any company size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        With Agile CRM, it is possible to engage your sales
                        force like never before by treating sales like a game.
                        Features include custom leader boards, real-time alerts
                        and advanced sales metrics. Track each and every key
                        performance indicator (KPI) with cohort analysis,
                        conversion reports and advanced analytics. Know your
                        customer’s profile, social presence, web activity and
                        track every interaction through a neatly arranged
                        timeline tracking the customer’s journey
                      </p>

                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Agile CRM
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.agilecrm.com/"
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

                {/* Amity  products details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/Amity.jpg" // Replace with your actual logo path
                            alt="Amity Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Amity
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

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <Link
                        href="/learn-more/zoho-projects"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Amity
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.amity.co/"
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
              </section>
              {/* Common Features Section */}
              <section id="key-features" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Key CRM features to consider for your use case
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      While there are certainly software solutions that are
                      objectively “bad,” the majority of options in any given
                      vertical will be valued by how well they satisfy the
                      intended use case. Trying to apply the tool outside the
                      parameters it was designed for may fail to meet
                      expectations, but that does not necessarily mean the
                      software itself is of poor quality. It’s just a bad match.
                    </p>
                  </div>

                  {/* Second Paragraph with Links */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Below are some core areas of concern for CRM consumers to
                      consider when shopping around to help them find a tool
                      that aligns with their needs.{" "}
                      <Link
                        href="/enterprise-project-management"
                        className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        The Different Types of Roles & Responsibilities in a CRM
                      </Link>{" "}
                    </p>
                  </div>

                  {/* Contact management Section */}
                  <div>
                    {/* Contact management Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Contact management
                    </h2>

                    {/*Contact management Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      For CRM tools, the most foundational functionality is that
                      of collecting and organizing contact information. At the
                      very least, it needs to be a step up from simply dumping
                      leads into a spreadsheet only to immediately be forgotten.
                      Spreadsheets have their place, but they aren’t optimized
                      for automation or to serve as living records. If a CRM
                      can’t improve on manual data entry, manual data scrubbing,
                      and manual retrieval, then it’s just Excel with extra
                      steps.
                    </p>
                  </div>
                </div>
                {/*Communication recordsSection */}
                <div>
                  {/*Communication records Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Scheduling
                  </h2>

                  {/*Communication records Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    By now, nearly everyone is familiar with the “This call may
                    be recorded for quality assurance purposes” line spoken to
                    customers calling in to a business for support. Having a
                    record of customer/client/lead interactions can be
                    indispensable. And not just for maintaining excellent
                    service, either.
                  </p>
                </div>
                {/* Integrations Section */}
                <div>
                  {/*Integrations Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Integrations
                  </h2>

                  {/* Resource mangement Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Implementing new software systems can be difficult, and
                    onboarding users only becomes more problematic when the
                    system doesn’t play well with existing solutions in the
                    workflow. Some CRMs are built as part of a larger platform
                    of business solutions, and are intended to be used as a
                    holistic unit. This is a bit of a trade-off, and some
                    cost-benefit evaluations will be needed to determine if a
                    complete workflow overhaul will net positive or negative
                    returns for the trouble. However, if maintaining the
                    stability and functionality of other systems is of equal
                    importance, then finding a CRM software that can integrate
                    with them successfully. Depending on what integrations are
                    needed, there may be plug-ins or add-ons available already
                    to users of the tool.
                  </p>
                </div>
              </section>
              {/* How-to-choose */}
              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Choosing the right CRM and sales software
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      After diving into the world of CRM solutions, you’ve
                      likely noticed there’s no shortage of options. This
                      abundance is actually a good thing – it means you have the
                      flexibility to find a CRM that fits your business like a
                      glove, whether you’re running a small startup or managing
                      a large company. If you’re a small business owner, you
                      might be looking for something straightforward and
                      budget-friendly. On the other hand, if you’re at the helm
                      of a larger company, you might need a CRM with all the
                      bells and whistles – think advanced features and seamless
                      integrations with your existing tech stack.
                    </p>
                  </div>
                </div>
              </section>
              {/* FAQs */}
              <section id="crm-faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Frequently Asked Questions (FAQ)
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
