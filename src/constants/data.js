/*
    File: data.js
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    {
        id: 'Services',
        href: '/services',
    },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'Airport Rentals',
        src: '/assets/images/projects/airport-rentals.png',
        altText: 'Screenshot of Airport Rental home page',
        ariaLabel: "Opens modal window with more information about Airport Rental",
        details: {
            description: "Airport Rentals is an Australian-based car rental comparison and booking platform. It is designed to simplify the booking process by aggregating options and allowing users to compare prices to find the best deal.",
            technologies: [
                { title: 'React' },
                { title: 'JavaScript' },
                { title: 'MongoDB' },
                { title: 'jQuery' },
                { title: 'API' },
            ],
            url: 'https://www.airportrentals.com.au',
            githubUrl: null,
        },
    },
    {
        title: 'TheirCare',
        src: '/assets/images/projects/their-care.png',
        altText: 'Screenshot of TheirCare home page',
        ariaLabel: "Opens modal window with more information about the ThereCare",
        details: {
            description: "TheirCare provides a stimulating and safe environment for all children and young people, an environment where children come and enjoy their time in their program.",
            technologies: [
                { title: 'WordPress' },
                { title: 'PHP' },
                { title: 'mySQL' },
                { title: 'jQuery' }
            ],
            url: 'https://theircare.com.au',
            githubUrl: null,
        },
    },
    {
        title: 'Frank Green',
        src: '/assets/images/projects/frank-green.png',
        altText: 'Screenshot of FrankGreen home page',
        ariaLabel: "Opens modal window with more information about the FrankGreen",
        details: {
            description: "Frank Green is an Australian brand redefining reusable essentials with sleek design, premium materials and sustainability at its core.",
            technologies: [
                { title: 'Shopify' },
                { title: 'React' },
                { title: 'Bootstrap' },
                { title: 'jQuery' },
                { title: 'PostgreSQL' },
            ],
            url: "https://frankgreen.com.au",
            githubUrl: null,
        },
    },
]

const VECTORLOGO = 'https://www.vectorlogo.zone/logos';

export const socialMedias = [
    {
        href: 'mailto:virakar99@gmail.com',
        ariaLabel: 'Compose an email',
        title: 'Email',
        Icon: Icons.EmailIcon,
    },
    {
        href: 'https://github.com/virakar99',
        ariaLabel: 'GitHub profile',
        title: 'GitHub',
        iconUrl: `${VECTORLOGO}/github/github-icon.svg`,
    },
    {
        href: 'https://www.freelancer.com/u/virakar99',
        ariaLabel: 'Freelancer profile',
        title: 'Freelancer',
        iconUrl: `${VECTORLOGO}/freelancer/freelancer-icon.svg`,
    },
];

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            { title: 'HTML' },
            { title: 'CSS' },
            { title: 'Tailwind' },
            { title: 'SASS' },
            { title: 'JavaScript' },
            { title: 'React' },
            { title: 'jQuery' },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            { title: 'PHP' },
            { title: 'NodeJS' },
            { title: 'Express' },
            { title: 'PostgreSQL' },
            { title: 'MongoDB' },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            { title: 'TypeScript' },
            { title: 'Python' },
            { title: 'C++' },
        ],
    },
    {
        category: 'Content Management Systems',
        skills: [
            { title: 'WordPress' },
        ],
    },
    {
        category: 'Build Tools & Versioning',
        skills: [
            { title: 'Vite' },
            { title: 'Git' },
            { title: 'GitHub' },
        ],
    },
    {
        category: 'Design & Prototyping',
        skills: [
            { title: 'Figma' },
        ],
    },
    {
        category: 'Others',
        skills: [
            { title: 'API' },
            { title: 'GraphQL' },
            { title: 'Docker' },
            { title: 'Linux' },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Lingopal AI',
        location: 'US',
        positions: [
            {
                title: 'AI Integration Engineer',
                startDate: new Date(2024, 8),
                endDate: new Date(2025, 7),
            },
        ],
        tasks: [
            "Engineered multilingual real-time speech-to-speech translation features using OpenAI and voice cloning AI platforms.",
            "Integrated third-party voice APIs and custom pipelines to support low-latency, natural-sounding output across multiple languages.",
            "Collaborated with product and design teams to define requirements and iterate on user experience for real-time translation flows.",
            "Documented integration patterns and contributed to internal standards for AI feature development.",
        ],
    },
    {
        company: 'OziShield',
        location: 'Sydney, Australia (Remote)',
        positions: [
            {
                title: 'SaaS Development Specialist (AI Trust & Safety)',
                startDate: new Date(2024, 0), // Adjust dates as needed
                endDate: new Date(2024, 8),
            },
        ],
        tasks: [
            "Architected and implemented the core message analysis logic to identify phishing patterns and fraudulent intent in SMS and emails.",
            "Developed on-device text processing features using OCR and AI to ensure high-speed scam detection while maintaining user privacy.",
            "Built the full-stack web interface with React and Node.js, focusing on a seamless user experience for scanning suspicious links and screenshots.",
            "Integrated global threat intelligence databases to provide real-time domain reputation checks and typosquatting protection.",
        ],
    },
    {
        company: 'Artrya',
        location: 'Australia',
        positions: [
            {
                title: 'Full Stack Engineer',
                startDate: new Date(2021, 3),
                endDate: new Date(2022, 1),
            },
        ],
        tasks: [
            "Developed secure AI-powered diagnostic SaaS tools for the healthcare industry, contributing to clinical-grade software.",
            "Built and maintained backend services and APIs that handled sensitive medical data with strict compliance and audit requirements.",
            "Worked in an agile team to ship features on schedule and support clinicians with reliable, performant tooling.",
            "Participated in code reviews, testing, and documentation to ensure quality and long-term maintainability.",
        ],
    },
    {
        company: 'Dovetail',
        location: 'Australia',
        positions: [
            {
                title: 'Web Developer',
                startDate: new Date(2019, 10),
                endDate: new Date(2021, 2),
            },
        ],
        tasks: [
            "Built dynamic frontend features and internal tools, and improved product usability as the company scaled toward its first funding round.",
            "Implemented responsive UI components and workflows that increased efficiency for research and customer insight teams.",
            "Integrated with existing design systems and contributed to shared component libraries used across the product.",
            "Collaborated with designers and product managers to refine UX and prioritize technical improvements.",
        ],
    },
];

export const educations = [
    {
        degree: 'B.S. Computer Engineering',
        school: 'University of Western Sydney',
        startDate: new Date(2017, 3),
        endDate: new Date(2019, 9),
        location: 'NSW, Australia',
    },
];

export const dessertImages = [
    {
        src: '/assets/images/desserts/oreo-cupcakes.webp',
        altText: 'Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper',
        value: 'oreo-cupcakes',
        label: 'Oreo cupcakes',
    },
    {
        src: '/assets/images/desserts/bagel-cake.webp',
        altText: 'Large cake decorated to look like an everything bagel',
        value: 'bagel-cake',
        label: 'Everything bagel cake',
    },
    {
        src: '/assets/images/desserts/souffle.webp',
        altText: 'Cheese souffle in a ramekin',
        value: 'souffle',
        label: 'Cheese souffle',
    },
    {
        src: '/assets/images/desserts/cookies.webp',
        altText: 'Plate of chocolate chip cookies',
        value: 'cookies',
        label: 'Chocolate chip cookies',
    },
    {
        src: '/assets/images/desserts/macaron-cupcake.webp',
        altText: 'Red velvet cupcake with cream cheese frosting with a strawberry macaron on top',
        value: 'macaron-cupcakes',
        label: 'Red velvet cupcake',
    },
    {
        src: '/assets/images/desserts/cannoli-cupcakes.webp',
        altText: 'Cannoli cupcakes with chocolate chips on top',
        value: 'cannoli-cupcakes',
        label: 'Cannoli cupcakes',
    },
];

export const generalServices = [
    {
        title: 'Consulting and Strategy',
        description: "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
        Icon: Icons.DesktopMobileIcon,
    },
];

export const specialties = [
    {
        title: 'Web Hosting and Deployment',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'API Development and Integration',
        Icon: Icons.APIIcon,
    },
    {
        title: 'Custom Web Applications',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'CMS Development and Customization',
        Icon: Icons.WebContentIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];