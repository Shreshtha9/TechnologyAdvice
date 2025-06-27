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
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "what-is-sales-software",
      title: "What is sales software?",
      active: false,
    },
    {
      id: "best-sales",
      title: "WOur choices for the best sales software in 2024",
      active: false,
    },
    {
      id: "our-choices",
      title: "Our choices for the best sales software in 2024",
      active: false,
    },
    {
      id: "find-new-software",
      title: "Find your new sales software",
      active: false,
    },
    {
      id: "Key-components",
      title: "Key components of sales software",
      active: false,
    },
    {
       id: "some-trends ",
      title: "What are some trends in sales software?",
      active: false,
    },
    { id: "sales-faqs", title: "Frequently Asked Questions (FAQ)", active: false },
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
      title: "HubSpot Sales Hub: Best CRM for ease of use",
      logo: "/images/hubspot.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "4.8/5" },
        { label: "General features and interface", score: "4.4/5" },
       
        { label: "Core features", score: "4.5/5" },
        { label: "Advanced features", score: "3.8/5" },
        { label: "Integration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4.8/5" },
       
      ],
      pros: [
        "Comprehensive free version",
        "Intuitive for non-experts",
        "Vast app marketplace",
        "Top-tier sales and automation tools",
      ],
      cons: [
        "Scaling can be expensive as tools are added",
        "Free versions of some tools come branded with HubSpot name",
       
      ],
      why: {
         intro: `The greatest CRM for integration possibilities is HubSpot Sales Hub, which is endorsed because of its unmatched integration simplicity, free services, and an intuitive platform that streamlines intricate procedures. For companies that like having a unified, integrated set of tools to optimize their processes, this is the best option`,

  body: `With scores of 95.83/100 for API availability and simplicity of connection as well as 100/100 for the variety of native add-ons and third-party connectors, HubSpot CRM achieves almost flawless ratings in every category.`,
  content:`Among rival platforms, the “no contract required” approach and free plan set the platform apart. You can choose a monthly subscription or an annual contract. There is a discount for the annual subscription and there are no cancellation fees associated with terminating your subscription early, but keep in mind you will not be refunded for the remaining time on your contract. This strategy makes it an appealing choice for companies of all sizes by democratizing access to its CRM. `,

  outro: `Unlike Salesforce, which is known for its scalability and extensive ecosystem but at a higher complexity and cost, HubSpot provides a simpler, more intuitive experience that’s accessible to businesses of any size. Its free plan is particularly attractive, offering unlimited users and contacts, AI tools for task automation and content generation, mass emailing, and advanced features not commonly found in other freemium CRMs.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                HubSpot is a comprehensive cloud-based CRM solution launched in 2006 that aids businesses in bringing in leads, closing deals, and attracting visitors. Its user-friendly interface (UI) lowers the learning curve and makes it simple to operate. Because of its comprehensive free plan that offers a wide variety of functionalities, HubSpot is a well-liked CRM choice for startups and small businesses.
              </p>
              <p className="text-black">
               The platform is a leader in sales and marketing automation. Its products automate tedious tasks so businesses can put strategy ahead of day-to-day operations. Even in the free tier, reporting and analytics tools provide deep insights into sales KPIs and performance.
              </p>
               <p className="text-black">
               HubSpot’s emphasis on inbound marketing is seen in its email management and marketing automation products. By connecting with more than 200 technologies, HubSpot’s extensive integration capabilities assist businesses in building a cohesive tech stack.
              </p>
               <p className="text-black">
               Another important callout is its native capability and ecosystem coherence, particularly in content management and marketing automation. Scalability may be expensive, but its free features, ease of use, and marketing support make it a great choice for businesses looking for effective online growth and sales.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Lead management and prospecting:
              </h4>
              <p className="text-black mb-4">
                Automates the process of tracking and nurturing leads through the stages of the sales funnel​​.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Deal pipelines: 
              </h4>
              <p className="text-black mb-4">
                Enables customization and visualization of sales pipelines to manage deals and forecast revenue.
              </p>
              <h4 className="text-lg font-bold mb-2">Email templates and tracking:</h4>
              <p className="text-black">
            Offers customizable email templates and tracking features to monitor engagement.
              </p>
               <h4 className="text-lg font-bold mb-2">HubSpot AI:</h4>
              <p className="text-black">
            Utilizes artificial intelligence for predictive lead scoring, content recommendations, and sales forecasting.
              </p>
               <h4 className="text-lg font-bold mb-2">Sales analytics and reporting: </h4>
              <p className="text-black">
           Provides detailed analytics and reporting tools to analyze sales activities and performance metrics​​.
              </p>
               <h4 className="text-lg font-bold mb-2">Extensive integration capabilities:</h4>
              <p className="text-black">
            In many cases, users do not have to pay for third-party app integrations.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
               Free trial available
              </p>
              <p className="text-black mb-4">
                Free plan available
              </p>
               <p className="text-black font-bold mb-4">
               Starter: <span classmate="font-light">$15/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Professional: <span classmate="font-light"> $90/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Enterprise: <span classmate="font-light"> $150/user/month</span>
              </p>
              
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     Salesforce: {
      title: "Salesforce Sales Hub: Best CRM for enterprises",
      logo: "/images/salesforce.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "3.5/5" },
        { label: "General features and interface", score: "4.5/5" },
       
        { label: "Advanced features", score: "4.5/5" },
        { label: "Integration and compatibility", score: "3.5/5" },
        { label: "UX", score: "3.5/5" },
       
      ],
      pros: [
        "Extensive customization",
        "Broad integration capabilities with external apps and systems through AppExchange and APIs​​​​​​",
        "Powerful analytics and reporting",
        "Comprehensive mobile functionality​​",
        "Large ecosystem of apps, components, and partners",
        "AI-powered Insights with Einstein Copilot",
      ],
      cons: [
        "Complex for new users, requires training to operate to its fullest potential",
        "High cost",
       
      ],
      why: {
         intro: `Salesforce is regarded as one of the best CRMs for enterprises mainly because of its scalability, ecosystem, and innovation. With a set of features that are always at the forefront of CRM technology, such as Einstein Copilot, it’s a platform that expands along with your organization and helps it develop.`,

  body: `The recently released Einstein Copilot allows Salesforce clients to create replies using their own secure data while upholding rigorous data governance without costly AI model training. Einstein Copilot can do various activities such as answering questions, summarizing material, generating new content, interpreting difficult discussions, and automating tasks across Salesforce’s products, providing users with a more unified experience.`,
  content:`Salesforce has very high ratings for customization, integration, and scalability when compared to rivals Pipedrive, for example, is suited to smaller businesses focused on sales pipeline management, whereas Zoho CRM offers more free features but lacks the level of customizability of Salesforce. Its customer service is good (and becomes better at higher levels), and its user interface is rather intuitive. `,

  outro: `Salesforce is unique because of its ecosystem. Salesforce offers a dynamic platform that expands with your company, in contrast to rivals that only provide a static solution. With hundreds of third-party apps available in its AppExchange marketplace, there is a great deal of customization and extension possible.

Salesforce also wins in several other areas compared to similar enterprise level competitors. With more regular upgrades, a wider app marketplace, and a more vibrant user and developer community, Salesforce sets itself apart from rival CRMs like Oracle.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                For many years, Salesforce CRM has dominated the business space, and much of its influence is warranted. It is a formidable competitor in the market thanks to its extensive feature set, scalability, and creative approach to customer relationship management.
              </p>
              <p className="text-black">
               Although many large-scale enterprises benefit greatly from Salesforce’s many capabilities and customization choices, novice users may find the platform to have a high learning curve. Because of the platform’s depth and ability to be extensively tailored, using it may need a high level of skill and training. Organizations may have to pay more as a result of the time and materials needed for training.
              </p>
               <p className="text-black">
               Salesforce’s strong feature is its integration capabilities, which provide links to a wide range of business apps. However, there are occasions when this connectivity can become complicated, especially when handling and debugging cross-system integrations.
              </p>
               <p className="text-black">
    In general, the user experience is easy to use, and new features are added often. However, some users could find it difficult to stay up to speed with the regular upgrades, which might cause disruptions to workflows as teams adjust to the new capabilities.
              </p>
               <p className="text-black">
Although Salesforce’s Einstein Copilot AI additions and mobile experience improvements are impressive and put the platform at the forefront of innovation, keep in mind that there is a significant cost involved in using these state-of-the-art features.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
               Customization and flexibility:
              </h4>
              <p className="text-black mb-4">
                Allows companies to tailor the CRM to their needs. Users can create fields, processes, and apps.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Sales and marketing: 
              </h4>
              <p className="text-black mb-4">
                Lead management, opportunity management, email marketing, and campaign management capabilities.
              </p>
              <h4 className="text-lg font-bold mb-2">Reporting:</h4>
              <p className="text-black">
            Lets companies create detailed reports and dashboards to track sales, customer interactions, and other key metrics. Strong native tools within the platform include Weflow, Tableau, Klipfolio, and many more. 
              </p>
               <h4 className="text-lg font-bold mb-2">AI insights</h4>
              <p className="text-black">
           Salesforce’s Einstein Copilot AI improves decision-making and customer interactions via predictive analytics, lead scoring, and recommendation systems.
              </p>
               <h4 className="text-lg font-bold mb-2">AppExchange: </h4>
              <p className="text-black">
           Has hundreds of pre-built CRM apps and interfaces for varied enterprise needs.
              </p>
               <h4 className="text-lg font-bold mb-2">Strong integration:</h4>
              <p className="text-black">
         Interfaces with productivity, email, marketing, and finance technologies to improve operational efficiency and data coherence.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
               Free trial available
              </p>
              
               <p className="text-black font-bold mb-4">
               Essentials: <span classmate="font-light"> $25/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Professional: <span classmate="font-light"> $75/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Enterprise: <span classmate="font-light"> $150/user/month</span>
              </p>
              <p className="text-black font-bold mb-4">
               Unlimited: <span classmate="font-light"> $300/user/month</span>
              </p>
              <p className="text-black mb-4">
                *All plans billed annually
              </p>
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     Seismic: {
      title: "Seismic: Best sales enablement software for enterprises",
      logo: "/images/seismic.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "2.5/5" },
   
       
        { label: "Core features", score: "4.5/5" },
        { label: "Advanced features", score: "4.5/5" },
        { label: "Integration and compatibility", score: "4.4/5" },
          { label: "Usability and interface: ", score: "4.1/5" },
        { label: "Support and training", score: "4.2/5" },
        { label: "Security and innovation", score: "4.4/5" },
    
       
      ],
      pros: [
        "Extensive and customizable content library",
        "User-friendly interface",
        "VUnified dashboard that centralizes various functionalities",
        "AI analytics suite",
        "70+ integrations",
      ],
      cons: [
        "Some users find the micro-site/digital sales room features weak",
        "Some integrations may require additional third-party tools for optimal functionality",
       
      ],
      why: {
         intro: `Seismic stands out from the competition thanks to its feature-rich content management system. This system is excellent at efficiently arranging, updating, and distributing sales materials, guaranteeing that sales teams have quick access to pertinent and up-to-date information. In contrast to many of its competitors, it offers exceptional integration capabilities and enables a smooth workflow between sales by integrating with a broad range of CRM systems, marketing tools, and productivity applications.`,



  outro: `Seismic excels in another area as well: using AI to deliver useful insights about the performance of content. This allows sales teams to rank and customize their strategies according to the most influential content, providing a degree of insight and customization that distinguishes Seismic from rivals. Seismic’s acquisition of SAVO has also strengthened its coaching and training programs for salespeople, offering adaptable learning pathways that promote their ongoing development. Personalized learning and development is emphasized, which gives this platform a major advantage over many others.`,
        extras: {
          "About monday.com": (
            <>
              <p className="text-black mb-4">
                Seismic is a sales enablement platform designed to support customer-facing teams by providing them with the necessary skills, content, tools, and insights to enhance client engagement and business growth. Its key features include sales content management, learning and coaching, buyer engagement, content automation, strategy and planning, and enablement intelligence.
              </p>
            
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Sales content management
              </h4>
              <p className="text-black mb-4">
               Organize and manage sales materials for easy access and distribution.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Learning and coaching: 
              </h4>
              <p className="text-black mb-4">
                Provides tools for sales training and performance coaching.
              </p>
              <h4 className="text-lg font-bold mb-2">Buyer engagement: </h4>
              <p className="text-black">
          Enhances interactions with buyers through targeted content.
              </p>
               <h4 className="text-lg font-bold mb-2">Content automation: </h4>
              <p className="text-black">
Streamlines content creation and customization for sales teams.
              </p>
               <h4 className="text-lg font-bold mb-2">Strategy and planning: </h4>
              <p className="text-black">
           Assists in aligning sales strategies with business goals.
              </p>
               <h4 className="text-lg font-bold mb-2">Enablement intelligence: </h4>
              <p className="text-black">
         Offers insights and analytics for sales enablement activities.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
           Starting from $32/month
              </p>
             
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     LevelEleven: {
      title: "LevelEleven: Best sales gamification software",
      logo: "/images/LevelEleven.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "3.2/5" },
        { label: " Features and engagement", score: "4.6/5" },
       
        { label: "Analytics and scalability: ", score: "4.2/5" },
        { label: "Integration and usability:", score: "4.4/5" },
        { label: "Security and support", score: "4.2/5" },
        
       
      ],
      pros: [
        "Real-time metrics display",
        "High visibility into team metrics",
        "High degree of customization including custom sales contests",
        "Exists as a native application in Salesforce",
      ],
      cons: [
        "Complex setup and maintenance",
        "Limitations in casting to multiple TV screens via Chromecast",
       
      ],
      why: {
         intro: `LevelEleven’s specific focus on sales gamification, combined with its comprehensive features and seamless Salesforce integration, makes it a compelling choice over competitors like Pointagram, Ambition, and Zoho Motivator for sales teams looking to drive performance and motivation through a data-driven, gamified approach.

It has developed into a full suite of tools intended to inspire, involve, and mentor sales teams in order to produce outcomes. This evolution sets it apart from competitors by providing a metric-driven sales approach that sales leaders who want to boost performance through data insights greatly value.`,

  body: `However, while it is no longer just a tool for gamifying sales procedures, it is important to note it is still primarily gamification software, adding and improving upon its gamification features regularly.

When contrasting LevelEleven with other gamification choices like Pointagram, Ambition, and Zoho Motivator, several benefits become apparent. LevelEleven specializes in sales gamification and has features designed especially for sales teams, in contrast to Pointagram, which offers a free plan with limited competition capabilities and focuses on a wide range of applications outside of sales. For businesses that prioritize sales, this focus makes sure that the functionalities are in line with KPIs and sales targets, increasing its effectiveness.`,
  content:`Another rival that provides a comprehensive sales management platform with KPI analysis, coaching, and gamification is Ambition. But LevelEleven sets itself apart with its extensive Salesforce integration, which makes it a great option for businesses with significant Salesforce ecosystem investments. The smooth integration guarantees that sales teams have instant access to vital performance metrics on a well-known platform, optimizing data flow. `,

  outro: `Because of its native integration, Zoho Motivator may seem like a logical choice for companies that currently use Zoho CRM, but that is not necessarily the case. For teams seeking more than just basic gamification integrated with their CRM system, LevelEleven’s wider feature set and emphasis on sales gamification provide a more complete solution..`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
          LevelEleven is a complete sales performance management solution that boosts sales team productivity and engagement. Gamification creates a competitive but collaborative environment to motivate teams to meet goals. Personalized scorecards track sales performance, real-time TV broadcasts celebrate successes and create a competitive atmosphere, and data-driven coaching tools offer actionable feedback for sales improvement.
              </p>
              <p className="text-black">
LevelEleven is updated to maximize user benefits. Recent updates have improved user experience and feature functionality. The platform now has better data visualization and integration tools to help sales teams track progress and managers find coaching insights.
              </p>
               <p className="text-black">
       LevelEleven promotes sales habits through contests, leaderboards, and Channel11 broadcasts, encouraging friendly competition and celebrating success. Its engagement tools help teams focus on key metrics, and its coaching features help every team member succeed. Goal Engine allows goal adjustments and provides realistic target-setting insights.
              </p>
             
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
              Personalized scorecards: 
              </h4>
              <p className="text-black mb-4">
Sales reps receive personalized scorecards that track their performance against key behaviors that drive sales and customer retention.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Real-time TV broadcasts:  
              </h4>
              <p className="text-black mb-4">
                Includes a feature for broadcasting sales contests and leaderboards in real-time​​.
              </p>
              <h4 className="text-lg font-bold mb-2">Data-driven coaching:</h4>
              <p className="text-black">
          Offers both out-of-the-box and customizable templates for sales coaching.
              </p>
               <h4 className="text-lg font-bold mb-2">Competition amplification:</h4>
              <p className="text-black">
          Utilizing competitions to tap into sales reps’ natural competitive nature​​.
              </p>
               <h4 className="text-lg font-bold mb-2">Mentorship opportunities:  </h4>
              <p className="text-black">
      Opens up opportunities for mentorship and coaching by making individual rankings visible on leaderboards, encouraging lower-performing reps to seek advice and guidance from top performers​​.
              </p>
             
            </>
          ),
          Pricing: (
            <>
             
               <p className="text-black font-bold mb-4">
               Motivate <span classmate="font-light">$40/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Coach: <span classmate="font-light"> $50/user/month</span>
              </p>
              
              
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     MindTickle: {
      title: "MindTickle: Best sales training software",
      logo: "/images/mindtickle.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "4/5" },
        { label: "Training content quality:", score: "4.2/5" },
       
        { label: "UX and engagement", score: "4/5" },
        { label: "Customization and integration", score: "5/5" },
        { label: "Analytics and performance tracking", score: "4.3/5" },
        
       
      ],
      pros: [
        "Enhanced engagement through gamification and interactive content",
        "Customizable training programs (learning paths)",
        "Analytics identify skill gaps and measure improvement",
        "Highly scalable",
      ],
      cons: [
        "High dependence on user input to be effective",
        "Significant learning curve for new users",
       
      ],
      why: {
         intro: `MindTickle’s ability to boost user engagement through gamification and personalized learning paths sets it apart from its competitors. MindTickle customizes its training to each sales rep’s needs and performance level, addressing their gaps and strengths. This personalized approach is crucial in a dynamic and varied field like sales, where training effectiveness can greatly impact business success.`,

  body: `MindTickle’s powerful analytics and reporting tools give sales reps actionable insights into their progress, strengths, and weaknesses. It allows managers to make informed decisions about future training initiatives and individual coaching needs, which many competitors lack or offer in limited capacity. Sales reps can access training materials on their phones, which is essential in today’s fast-paced workplaces.`,
  
  outro: `Its focus on sales readiness through role-play scenarios and real-time feedback prepares sales reps for real-world interactions better than competitors that focus on theory. MindTickle’s blend of practical readiness, personalized learning, and actionable analytics makes it a top choice for companies looking to improve sales training to create a more engaged, informed, and prepared sales force.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
               A comprehensive platform for sales training and readiness, MindTickle aims to improve the abilities and productivity of sales teams. It promises to improve performance through dynamic, tailored training experiences and acts as a link between traditional learning management systems and the specific needs of sales organizations. In order to motivate and engage users, MindTickle uses gamification, which incorporates competitive elements like points, badges, and leaderboards into the learning process. In order to guarantee that training is pertinent and focused, the platform also provides customized learning paths based on the unique requirements and performance levels of each sales representative.
              </p>
              <p className="text-black">
   Important characteristics include the ability to create interactive training materials, tests, and role-play scenarios. Managers can identify areas where learners excel or need improvement by using analytics and reporting tools, which give them insights into team performance. Sales representatives can interact with training materials anytime, anywhere thanks to mobile accessibility, which helps them fit learning into their hectic schedules.
              </p>
               <p className="text-black">
              With recent updates, MindTickle’s user experience has been improved, and it can now integrate with more sales and productivity tools, giving sales teams easy access to training within their current workflows.
              </p>
              
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Gamification:
              </h4>
              <p className="text-black mb-4">
              Uses competitive elements like points and badges to engage and motivate users.
              </p>
              <h4 className="text-lg font-bold mb-2">
               Personalized learning paths: 
              </h4>
              <p className="text-black mb-4">
               Tailors learning experiences to individual user needs and performance levels.
              </p>
              <h4 className="text-lg font-bold mb-2">Interactive content:</h4>
              <p className="text-black">
           Offers interactive training materials, including videos and quizzes, to enhance learning engagement.
              </p>
               <h4 className="text-lg font-bold mb-2">Analytics and reporting: </h4>
              <p className="text-black">
           Provides insights into user performance and progress through detailed analytics and role-based dashboards.
              </p>
               <h4 className="text-lg font-bold mb-2">Mobile learning:  </h4>
              <p className="text-black">
       Accessible on mobile devices, allowing users to learn anytime, anywhere.
              </p>
               <h4 className="text-lg font-bold mb-2">Sales readiness and coaching tools:</h4>
              <p className="text-black">
           Includes role-play scenarios and feedback mechanisms to prepare users for real-world sales situations.
              </p>
            </>
          ),
          Pricing: (
            <>
               <p className="text-black font-bold mb-4">
               Annual cost for 30 licenses at $360 per year:  <span classmate="font-light">$10,800*</span>
              </p>
               <p className="text-black font-bold mb-4">
              Annual cost for 30 licenses at $600 per year: <span classmate="font-light"> $18,000</span>
              </p>
               <p className="text-black font-bold mb-4">
              Minimum contract term<span classmate="font-light">  Generally 3 years</span>
              </p>
                <p className="text-black font-bold mb-4">
              One-time implementation fee<span classmate="font-light">  $3,000 to $5,000</span>
              </p>
                <p className="text-black font-bold mb-4">
              Contract term:<span classmate="font-light">  Annual basis, with an average contract duration of 36 months. Shorter contract terms are negotiable but result in a higher price per person.</span>
              </p>
                <p className="text-black font-bold mb-4">
              Average price per person:<span classmate="font-light"> Between $30 and $50 per month, or $360 to $600 per year.</span>
              </p>
                <p className="text-black font-bold mb-4">
              One-time implementation fee<span classmate="font-light">  Between $3,000 and $5,000, covering the setup of the software for a company.</span>
              </p>
                <p className="text-black font-bold mb-4">
              Implementation duration:<span classmate="font-light">  Approximately 6 to 8 weeks.</span>
              </p>
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     Zoominfo: {
      title: "Zoominfo Sales OS: Best sales intelligence software",
      logo: "/images/Zoominfo.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "3/5" },
        { label: "Data quality and coverage", score: "4.6/5" },
       
        { label: "Advanced features", score: "4.6/5" },
        { label: "Usability and interface", score: "4.1/5" },
        { label: "Support and training", score: "4.2/5" },
        { label: "Security and innovation", score: "4.6/5" },
       
      ],
      pros: [
        "Extensive contact database",
        "Advanced search filters",
        "Intent data insights",
        "Provides information on organizations tech stacks, news, and trends",
        "Bulk data builds are easy",
      ],
      cons: [
        "Obsolete data exists within platform, which is a constant battle for all sales intelligence solutions",
        "Needs better customization options for Salesforce and HubSpot",
       
      ],
      why: {
         intro: `Sales intelligence software ZoomInfo SalesOS is unmatched in its ability to enrich sales strategies with deep insights. ZoomInfo SalesOS’s core feature is segmentation, which provides demographic, firmographic, technographic, and psychographic data. Intent data helps sales teams prioritize outreach by identifying prospects interested in relevant products or services. This level of targeting precision proves vital for sales process optimization and efficiency.`,

  body: `It provides accurate contact and company data, helping sales teams to conduct outreach. However, users have reported some contact information is outdated—a reality most sales intelligence solutions face.`,
  content:`Having said this, SMBs and mid-market companies looking to improve their go-to-market strategies will undoubtedly benefit from the platform’s advanced search and unique employee role data sets. `,

  outro: `ZoomInfo SalesOS outperforms LinkedIn Sales Navigator and Apollo.io in data quality and insights. ZoomInfo’s large database and frequent updates give users the latest and most complete information, even though competitors offer similar features. ZoomInfo SalesOS’s rich workflow features and ability to identify lookalike companies make it a top choice for companies wanting to simplify sales intelligence and boost conversion rates.`,
        extras: {
          "About monday.com": (
            <>
              <p className="text-black mb-4">
              ZoomInfo SalesOS, a sales intelligence platform, gives sales and marketing professionals powerful insights and tools to boost lead generation and engagement. It offers a wide contact database allowing sales teams to search for potential clients directly. In the 2023 release notes, ZoomInfo SalesOS included some essential features to improve its B2B functionality.
              </p>
          
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Segmentation:
              </h4>
              <p className="text-black mb-4">
Offers detailed insights on demographics, firmographics, technographics, and psychographics.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Intent data:
              </h4>
              <p className="text-black mb-4">
              Prioritizes outbound prospecting efficiently.
              </p>
              <h4 className="text-lg font-bold mb-2">Targeted go-to-market strategies</h4>
              <p className="text-black">
            Uses various filters.
              </p>
               <h4 className="text-lg font-bold mb-2">Unique data sets:</h4>
              <p className="text-black">
           Information on employee roles and advanced search functionalities that are particularly useful in SMB and mid-market segments​​
              </p>
           
            </>
          ),
          Pricing: (
            <>
             
               <p className="text-black font-bold mb-4">
              Professional plan: <span classmate="font-light">$8,000+ per year</span>
              </p>
               <p className="text-black font-bold mb-4">
               Advanced plan: <span classmate="font-light"> $12,000+ per year</span>
              </p>
               <p className="text-black font-bold mb-4">
               Elite plan: <span classmate="font-light"> $40,000+ per year</span>
              </p>
              
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
    LeadSquared: {
      title: "LeadSquared: Best lead management software",
      logo: "/images/LeadSquared.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "3.3/5" },
        { label: "General features and interface", score: "3.8/5" },
       
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "4.3/5" },
        { label: "Integration and compatibility", score: "4.4/5" },
        { label: "UX", score: "4/5" },
       
      ],
      pros: [
        "High value for the price point",
        "Customized and personal service",
        "Call history paired with data sorting",
        "Daily lead reports",
        "Marketing automation tools",
      ],
      cons: [
        "Delays in catching call history reported",
        "Landing page feature can be improved",
       
      ],
      why: {
         intro: `Quality scoring, engagement scoring, and lead scoring make LeadSquared a popular lead scoring software as it evaluates leads in several dimensions. This method is essential for assessing a lead’s potential by considering activity frequency and recency, avoiding obsolete data. LeadSquared offers total customization of lead scores, automates funnel movement depending on score thresholds, and notifies sales teams of pertinent activity. These features aid in finding sales-ready leads, nurturing engagement-needed prospects, and recognizing upsell chances.`,



  outro: `LeadSquared is simpler than HubSpot, especially for drip marketing campaigns. HubSpot’s email and landing page features come with restrictions that may limit options for openness on price and customization for experienced users. In contrast, customers praise LeadSquared for its effective lead management, extensive integration capabilities, and excellent customer service. The platform is popular for its versatility, customization, and affordability, making it ideal for startups and small enterprises.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                LeadSquared is a SaaS platform that automates sales, marketing, and onboarding for firms with large lead volumes across many sales channels and teams. As a lead management software, it captures, tracks, and nurtures prospects along the sales funnel, automates marketing, and provides thorough insights to enhance sales operations. Lead management, task management, automation, and organization settings have been improved in recent platform versions. 
              </p>
              <p className="text-black">
    To improve security, attachments posted to activities and lead notes, for example, are automatically tagged private. Additionally, new features have been introduced to allow for more flexible task management and automation. LeadSquared features enhanced lead, user, activity, task, and platform settings, including new user fields, team creation possibilities, and task filtering options. 
              </p>
               <p className="text-black">
         LeadSquared also caters to a wide range of industries, including education, healthcare, financial services, real estate, and more, showcasing its versatility and ability to meet diverse business needs​​. Its strong capabilities in lead management are reflected in its overall rating of 4.3 out of 5, with high marks for ease of use, customer support, and functionality​​.
              </p>
            
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Lead capture automation:
              </h4>
              <p className="text-black mb-4">
              Centralizes leads from various sources like websites, social media, and referrals onto one platform.
              </p>
              <h4 className="text-lg font-bold mb-2">
               Quality and engagement scoring: 
              </h4>
              <p className="text-black mb-4">
               Automatically qualifies leads and assigns scores based on their engagement.
              </p>
              <h4 className="text-lg font-bold mb-2">Lead distribution: </h4>
              <p className="text-black">
            Tracks and allocates leads among teams based on dynamic criteria.
              </p>
               <h4 className="text-lg font-bold mb-2">Sales and marketing automation:</h4>
              <p className="text-black">
            Streamlines communication across multiple channels, including WhatsApp, SMS, email, and phone.
              </p>
               <h4 className="text-lg font-bold mb-2">Built-in dialer: </h4>
              <p className="text-black">
 Enables one-click calling to prospects and records conversations for compliance and productivity.
              </p>
               <h4 className="text-lg font-bold mb-2">Real-time dashboards and reports:</h4>
              <p className="text-black">
        Provides over 135 reports for comprehensive analysis of campaign spending and sales closure rates.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
               For sales + mobile CRM:
              </p>
                 <p className="text-black font-bold mb-4">
               LITE: <span classmate="font-light">$25/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               PPRO:<span classmate="font-light"> $50/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               SUPER: <span classmate="font-light"> $100/user/month</span>
              </p>
              <p className="text-black mb-4">
               For marketing automation:
              </p>
               <p className="text-black font-bold mb-4">
              ESSENTIAL: <span classmate="font-light">$150/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               BASIC:  <span classmate="font-light">$400/month</span>
              </p>
               <p className="text-black font-bold mb-4">
              STANDARD:<span classmate="font-light">  $1,200/month</span>
              </p>
               <p className="text-black font-bold mb-4">
              ENTERPRISE:<span classmate="font-light">  $2,500/month</span>
              </p>
              
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
     Pipedrive: {
      title: "Pipedrive: Best pipeline management software",
      logo: "/images/Pipedrive.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        
        { label: "Pricing", score: "3.5/5" },
        { label: "General features and interface", score: "4.3/5" },
       
        { label: "Core features", score: "4.6/5" },
        { label: "Advanced features", score: "3.5/5" },
        { label: "Integration and compatibility", score: "4.8/5" },
        { label: "UX", score: "4/5" },
       
      ],
      pros: [
        "Automated lead follow up including emails",
        "Simple to navigate and easily customizable",
        "Provides unlimited contact records and smart contact data enrichment from various platforms",
        "AI-powered sales assistant",
      ],
      cons: [
        "Property and workflow setups can be time consuming",
        "Compatibility issues reported",
       
      ],
      why: {
         intro: `Pipedrive is great for sales process optimizers. The straightforward design, strong automation, and analytics make it perfect for sales teams to simplify operations.`,

  body: `Pipedrive’s visual sales pipeline simplifies transaction advancement in a consumable style. Users learn performance patterns with complete sales reporting. Email integration makes tracking and automating follow-ups easy. Pipedrive’s activity and goal-tracking features optimize funnel progress by aligning sales efforts. Pipedrive is a top CRM suggestion for firms wanting a clear perspective and management over their sales funnel.`,
  content:`Pipedrive’s balanced performance across categories earned it an 83.3 out of 100 score and 4.2 stars. Sales pipeline (100), task automation (100), email integration (100), and essential CRM tools are just a few of its many strengths. `,

  outro: `Pipedrive is easier to use than Salesforce or HubSpot, making it perfect for small to medium-sized enterprises or teams that need a simple, effective sales process without substantial customization or complex connections..`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
         Pipedrive is known for being an easy-to-use CRM system with a pipeline management focus. The primary features that set it apart from the competition are its user-friendly design, customizable pipelines, extensive contact management, effective deal tracking, and strong interaction possibilities with several applications
              </p>
              <p className="text-black">
       Pipedrive’s AI-powered Sales Assistant, launched in 2023, is the company’s first AI feature. It analyzes sales pipelines and actions to recommend the best course of action for deals. A new Power price category for bigger teams, email multi-sync for managing multiple email accounts, automated assignment for lead distribution, booster add-on packs for increasing feature restrictions, and the Projects add-on for project administration are among the other noteworthy improvements. The Insights feature also has upgrades for 2024, now including percentage breakdowns, increased segment size, and the option to filter out deactivated users on reports and dashboards.
              </p>
              
             
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Task automation:
              </h4>
              <p className="text-black mb-4">
            Offers task automation, one-click contact data collection, and an AI-powered sales assistant.​.
              </p>
              <h4 className="text-lg font-bold mb-2">
                AI assistant:
              </h4>
              <p className="text-black mb-4">
           Analyzes sales pipelines and actions to suggest deal strategies
              </p>
              <h4 className="text-lg font-bold mb-2">CRM included: </h4>
              <p className="text-black">
           Enhances workflows and sales productivity.
              </p>
               <h4 className="text-lg font-bold mb-2">Broad customization:</h4>
              <p className="text-black">
           Allows customization of pipelines for specific business needs.
              </p>
               <h4 className="text-lg font-bold mb-2">Email and communications: </h4>
              <p className="text-black">
Centralizes communication efforts and advances leads through the sales funnel.
              </p>
               <h4 className="text-lg font-bold mb-2">Insights and reports</h4>
              <p className="text-black">
Provides customizable sales reports for optimizing workflows.
              </p>
               <h4 className="text-lg font-bold mb-2">Variety of native integrations integrations:</h4>
              <p className="text-black">
 Enables synchronization with various tools for enhanced functionality​​.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
               Free trial available
              </p>
             
               <p className="text-black font-bold mb-4">
               Essential: <span classmate="font-light">$24/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
              Advanced: <span classmate="font-light"> $44/user/month</span>
              </p>
               <p className="text-black font-bold mb-4">
               Professional:  <span classmate="font-light"> $64/user/month</span>
              </p>
                 <p className="text-black font-bold mb-4">
               Power:   <span classmate="font-light"> $79/user/month</span>
              </p>
                 <p className="text-black font-bold mb-4">
               Enterprise:  <span classmate="font-light"> $64/user/month</span>
              </p>
              
             
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
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
      question: "What softare do salespeople use?",
      answer:
        "Salesforce’s biggest competitor is Microsoft Dynamics 365, which offers a comprehensive suite of CRM and ERP solutions, closely rivaling Salesforce in features, integrations, and market presence.",
    },
    {
      question: "How do I keep track of my sales?",
      answer:
        "Salespeople commonly use CRM software like Salesforce, HubSpot, and Zoho CRM, along with sales automation tools like Pipedrive, and email tracking software like SalesLoft and Outreach.",
    },
    {
      question:
        "What technology do salespeople use?",
      answer:
        "You can keep track of your sales using CRM software, which helps manage customer interactions, track sales activities, and monitor the progress of sales opportunities through detailed reporting and analytics.",
    },
    {
      question: "What is the best app for sales reps?",
      answer:
        "The best app for sales reps often cited is Salesforce Mobile, which provides comprehensive CRM functionalities, real-time updates, and powerful integrations, enabling sales reps to manage their tasks and customer interactions on the go.",
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

 

  return (
    <>
      <Head>
        <title>
          Best Sales Software of 2024 | Complete Guide
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
               Best Sales Software of 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
             Best Sales Software of 
              <span className="block mt-2 sm:mt-4">2025</span>
            </h1>
          </div>

          {/* Author and Reviewer Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
            {/* Author */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/saless1.png"
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
                    src="/images/saless2.png"
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
          {/* Last updated */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Last Updated: August 7, 2024</span>
            </div>
          </div>
          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: April 24, 2024</span>
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
              <section id="what-is-sales-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                     What is sales software?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Sales software is a digital tool designed to streamline sales operations, enhance efficiency, and improve revenue generation by automating tasks and providing valuable insights into customer relationships and sales processes. This guide will walk readers through the different kinds of software available to sales departments, examine current industry trends, and provide a case study of a market-leading solution.
                      
                    </p>

               

                    <p className="text-gray-700 leading-relaxed mb-6">
                     Based on our evaluation of more than 30 titles, here are our recommendations for the top sales software in 2024: 
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            HubSpot Sales Hub:
                          </Link>{" "}
                          Best CRM for ease of use
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Salesforce Sales Hub:
                          </Link>{" "}
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Seismic:
                          </Link>{" "}
                         Best sales enablement software for enterprises
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
                            LevelEleven:
                          </a>{" "}
                         Best sales gamification software
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            MindTickle: 
                          </Link>{" "}
                          Best sales training software
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                           Zoominfo Sales OS:
                          </Link>{" "}
                          Best sales intelligence software
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            LeadSquared: 
                          </Link>{" "}
                          Best lead management software
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
                          <Link
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Pipedrive:  
                          </Link>{" "}
                          est pipeline management software
                        </p>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </section>

             

              {/* what are best project management tools */}
              <section id="our-choices">
                {/* Common Heading */}

                <h1 className="text-3xl font-bold mt-4 text-black mb-2">
                 Our choices for the best sales software in 2024
                </h1>
               

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
              

              {/* 1CRM  products details */}

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/1CRM.png" // Replace with your actual logo path
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
                          Z1CRM
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
                     Founded in 1997 and headquartered in Victoria, Canada, 1CRM develops an eponymous customer relationship management (CRM) tool. The 1CRM system helps its clients provide better online information to their customers while streamlining internal business processes and improving their cost model. 1CRM offers both an on-premise solution and a cloud-based service.
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

              {/* 3Dsellers products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/3D.png" // Replace with your actual logo path
                          alt="2-Plan Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          3Dsellers
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
                          Micro (0-99 Employees),
                        </span>
                        <span className="text-gray-600">
                          Small (50-249 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    Part eBay listing software and part selling manager, 3Dsellers is a complete eBay selling tool that enables eBay sellers to more easily manage and grow their business. A one-stop-shop for listing creation, product data optimization, and order management, 3Dsellers enables eBay sellers to manage their business more efficiently. 3Dsellers is a comprehensive multichannel eBay selling manager, designed to help eBay sellers sell more and grow their business.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 3Dsellers
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.3dsellers.com/"
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

              {/* Abaav  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/Abaav.png" // Replace with your actual logo path
                          alt=" 24SevenOffice Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                        Abaav
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
                          Any Company Size
                        </span>
                       
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Abaav is a Sales Performance Management (SPM) application for Salesforce.com. The application is used to motivate, track, and communicate sales activity and results for individuals, teams, and organizations. The application is available on the Salesforce AppExchange. The Abaav Sales Performance Management application is used by field sales, inside sales, sales managers, account managers, and leadership to boost sales and improve customer relationships.
                    </p>

                    <Link
                      href="/learn-more/24SevenOffice"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Abaav
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.abaav.com/"
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

              {/* Affinity  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/Affinity.jpg" // Replace with your actual logo path
                          alt="4castplus Logo"
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
                          Any Company Size
                        </span>
                        
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Affinity is a relationship intelligence platform enabling teams to leverage their network and close deals. Using patent-pending technology, Affinity allows teams to manage relationships by auto-populating the pipeline and allowing introductions to decision makers.
                    </p>

                    <Link
                      href="/learn-more/4castplus"
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

              {/* Ambition products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/Ambition.png" // Replace with your actual logo path
                          alt="Ambition Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                         Ambition
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
                         Any Company Size
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Ambition makes it easy for sales leaders to draw smart insights from data, and to create a culture of success on the sales floor — so that every rep can drive revenue in a measurable, meaningful way. Ambition's platform gives companies actionable data, which executives can use to make informed, strategic decisions — and sales leaders can leverage to inspire long-term behavior change on their sales teams.
                    </p>

                    <Link
                      href="/learn-more/5day-io"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Ambition
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.ambition.com/"
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

              {/* amoCRM products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/amoCRM.png" // Replace with your actual logo path
                          alt="amoCRM Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          amoCRM
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
                  

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About amoCRM
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.amocrm.com/"
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

              {/* Apptivo  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/Apptivo.png" // Replace with your actual logo path
                          alt="Apptivo Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Apptivo
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
                          Any Company Size
                        </span>
                        
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    Apptivo’s cloud-based CRM software enables companies to attract, engage, and retain customers. It delivers a series of apps that allow businesses to thrive through an intuitive interface and scalable functionality. Apptivo provides advanced features to appeal to businesses of all sizes. It offers tools such as lead management, opportunity pipeline with intuitive dashboards, campaign management, and flexible workflow tools, including marketing automation.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Apptivo
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.apptivo.com/"
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

              {/* Azurepath  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/Azurepath.png" // Replace with your actual logo path
                          alt="Azurepath Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Azurepath
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
                          Any Company Size
                        </span>
                        
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Azurepath
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.azurepath.com/"
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

              {/* B2B Rocket  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/B2B.png" // Replace with your actual logo path
                          alt="AB2B Rocket Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          B2B Rocket
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
                      Experience the future of sales with B2B Rocket, the game-changing sales automation software that will skyrocket your business to success! Get ready for an out-of-this-world journey, powered by AI-driven agents that masterfully navigate the entire sales process.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About B2B Rocket
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.b2brocket.com/"
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

              {/* Badger Maps  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/aBadger.jpg" // Replace with your actual logo path
                          alt="Badger Maps Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Badger Maps
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
                          Any Company Size
                        </span>
                        
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                  

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Badger Maps
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.badgermapping.com/"
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
              <section id="Key-components" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Key components of sales software
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Sales software, developed to expedite and improve the sales process, includes several tools for sales operations. From lead generation to completing transactions and post-sale customer management, sales software covers the complete sales lifecycle. These crucial elements are listed below:
                    </p>
                  </div>

                  

                  {/* CRM Section */}
                  <div>
                    {/* CRM Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      CRM
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      CRM’s monitor all interactions and sales progress using lead and contact management, ensuring no opportunity is missed. Opportunity management in CRMs lets sales teams find, monitor, and evaluate sales possibilities for real-time strategic decision-making. A comprehensive perspective of client contacts and sales prospects lets firms customize sales tactics to consumer demands.
                    </p>
                  </div>
                </div>
                {/* Automating sales Section */}
                <div>
                  {/* Automating salesHeading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Automating sales
                  </h2>

                  {/* Forecasting Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Automation of routine duties like email follow-ups, work assignments, and event alerts frees up salespeople to concentrate on more strategic responsibilities. Sales procedure management ensures consistency and efficiency by guiding sales teams through a standardized process. Automation improves efficiency and customer experience by assuring timely and appropriate interactions. Artificial intelligence tools have significantly improved automation within CRM systems. 
                  </p>
                </div>
                {/* Data analysis and reporting Section */}
                <div>
                  {/* Data analysis and reporting Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Data analysis and reporting
                  </h2>

                  {/* RData analysis and reporting Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    This component predicts sales patterns using past data, improving strategic planning and decision-making. The detailed monitoring of sales activities, outcomes, and team performance against defined objectives reveals which techniques are succeeding and which require improvement. 
                  </p>
                </div>
              </section>

              {/* What are some trends in sales software? */}

              <section id="some-trends" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    What are some trends in sales software?
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                     There are a number of trends currently shaping the sales software market. Factoring these trends into your buying decision will help you select products that offer the most long-term value. Here are a few of the most prominent:
                    </p>
                  </div>

                  {/* Software-as-a-Service*/}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Software-as-a-Service
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Cloud technology has made strong inroads in almost every business IT vertical, and sales software is no exception. Cloud solutions are hosted on a remote server and accessed via web applications, which means they require very little IT maintenance. It also means they can save businesses thousands of dollars in upfront expenses through software-as-a-service (SaaS) pricing models. Unlike on-premise software, SaaS is licensed on a monthly subscription basis — typically based on the number of users. In 2013, cloud solutions accounted for 41% of all CRM purchases. That percentage will likely continue to rise as companies realize the advantages of virtual infrastructure and pay-as-you-go pricing.
                    </p>
                  </div>
                  
                  {/* Mobile*/}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Mobile
                    </h2>

                    {/* Mobile */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      As the need for anytime access to software increases, vendors are increasingly directing their efforts to mobile development. Many modern sales solutions—whether CRM, business intelligence, or marketing automation—give users access to back-end systems, communication tools, and customer data from their mobile devices. That can mean a native application for a particular device platform (iOS, Android, Windows Phone) or a basic mobile web interface that optimizes for smaller displays and touch navigation. According to Forbes, 12.7% of full-time employees worked from home, while 28.2% worked a hybrid model in 2023. This means mobility in business software will soon shift from a luxury to a prerequisite.
                    </p>
                  </div>
                  
                  {/* Social integration */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                     Social integration
                    </h2>

                    {/* Social integration Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      In recent years, social media has transformed the way businesses interact with their customers. Instead of waiting passively at the other end of a phone line or on the other side of a POS counter, brands can now court their target audiences online in a personally engaging way. 

A recent Statista study shows 97% of internet customers utilize social media monthly. Thus, it is most customers’ main product information source. Additionally, 67% of customers expect brands and corporations to provide customer assistance on social media.Sales software that integrates with social media (such as Social CRM) lets businesses sell products, conduct marketing campaigns, deliver service solutions, and capture valuable data in a way that’s more personal than ever before.
                    </p>
                  </div>
                  
                  
                </div>
              </section>
                  {/* Choosing the right sales software */}
              <section id=" right-sales-software" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                   Choosing the right sales software
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                     In order to increase income, improve efficiency, and optimize sales operations, companies now find that sales software is an essential tool. 

These systems provide the tools required to adjust to the changing sales environment, from configurable pipelines and extensive analytics to AI-powered sales help. Selecting sales software that is capable of growing alongside your business is even more crucial in light of recent upgrades that include the incorporation of AI and project management capabilities. Investing in a strong sales software solution is more important than ever for achieving sales success and being competitive as the sales environment changes.
                    </p>
                  </div>
                  </div>
                  </section>

              {/* FAQs */}
              <section id="sales-faqs" className="mt-8 max-w-7xl mx-auto">
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
