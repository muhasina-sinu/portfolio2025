// Portfolio Chatbot for Muhasina Mujeeb
// Rule-based chatbot with predefined responses about services and skills

const ChatBot = {
    // Portfolio Knowledge Base
    knowledge: {
        name: "Muhasina Mujeeb",
        title: "Freelance Full-Stack Developer",
        email: "sinujalal@gmail.com",
        phone: "+91 9946967067",
        linkedin: "https://www.linkedin.com/in/muhasina-jalal",
        whatsapp: "https://wa.me/919946967067",
        
        skills: {
            backend: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript", "REST APIs", "Microservices"],
            frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
            databases: ["PostgreSQL", "MongoDB", "Azure Cosmos DB", "Database Design"],
            tools: ["Git & GitHub", "Docker", "CI/CD", "GitHub Actions", "Postman", "VS Code"]
        },
        
        services: [
            { name: "Web Application Development", desc: "Full-stack development of custom web applications from idea to deployment" },
            { name: "Backend & API Development", desc: "Robust backend systems and REST APIs with clean architecture and secure authentication" },
            { name: "Business Website Development", desc: "Modern, responsive websites that represent your brand professionally" },
            { name: "System Design & Integration", desc: "Architecting systems that connect multiple services, databases, and third-party tools" }
        ],
        
        projects: [
            { name: "Sweet Crumbs Bakery", tech: "Next.js, Tailwind CSS, TypeScript", desc: "A modern responsive website built for a small bakery to showcase products, menu items, and business information", link: "https://bakery-site-omega.vercel.app/" },
            { name: "E-commerce Platform", tech: "Node.js, PostgreSQL, REST APIs", desc: "Comprehensive e-commerce backend with scalable architecture and secure transaction processing" },
            { name: "HRMS (Human Resource Management System)", tech: "NestJS, PostgreSQL, TypeScript", desc: "Enterprise HR system with attendance tracking, recruitment workflows, payroll processing, and role-based access control" },
            { name: "Healthcare Application", tech: "Node.js, Azure Cosmos DB, REST APIs", desc: "Secure healthcare backend with patient management, consultation scheduling, and HIPAA-compliant data handling" }
        ]
    },

    // Response patterns with keywords and responses
    patterns: [
        // Greetings
        {
            keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "greetings"],
            response: () => `Hello! I'm Muhasina's portfolio assistant. I can help you learn about her services, skills, and projects. What would you like to know?`
        },
        
        // About
        {
            keywords: ["who is", "about", "tell me about", "introduce", "yourself", "muhasina"],
            response: () => `Muhasina Mujeeb is a freelance full-stack developer with a strong backend foundation. She builds scalable web applications, robust backend systems, and modern business websites for startups and businesses.\n\nShe's experienced in shipping real production systems — from e-commerce platforms and HR management systems to healthcare applications and client websites.\n\nAvailable for freelance projects!`
        },

        // Website/Web App Development - Common questions
        {
            keywords: ["website", "web site", "web app", "webapp", "design", "build a site", "create a website", "develop a website", "make a website", "need a website"],
            response: () => `**Website & Web App Development**\n\nYes! Muhasina builds websites and web applications:\n\n**What She Can Build:**\n• Business websites & portfolios\n• Web applications (SaaS, dashboards, portals)\n• Full-stack applications\n• REST APIs & backend systems\n\n**Tech Stack:**\n• Frontend: React, Next.js, Tailwind CSS\n• Backend: Node.js, NestJS, Express\n• Database: MongoDB, PostgreSQL\n• DevOps: Docker, CI/CD\n\n**Recent Work:**\nCheck out the Sweet Crumbs Bakery website — a live example of her work!\nhttps://bakery-site-omega.vercel.app/\n\nReady to discuss your project? Reach out via the contact form or email!`
        },
        
        // Skills - General
        {
            keywords: ["skills", "expertise", "what can", "capable", "know", "technologies", "tech stack"],
            response: () => {
                const backend = ChatBot.knowledge.skills.backend.slice(0, 4).join(", ");
                const frontend = ChatBot.knowledge.skills.frontend.slice(0, 3).join(", ");
                const db = ChatBot.knowledge.skills.databases.slice(0, 2).join(", ");
                return `Muhasina has expertise in:\n\n**Backend:** ${backend}, and more\n**Frontend:** ${frontend}\n**Databases:** ${db}\n**Tools:** ${ChatBot.knowledge.skills.tools.slice(0, 3).join(", ")}\n\nWant details about a specific skill?`;
            }
        },
        
        // Development Skills Specific
        {
            keywords: ["node", "nodejs", "node.js"],
            response: () => `**Node.js Expertise**\n\nMuhasina is highly proficient in Node.js backend development:\n\n**What She Builds:**\n• Scalable REST APIs\n• Real-time applications\n• Microservices architecture\n• Backend for web & mobile apps\n\n**Experience:**\n• E-commerce platform backend\n• Healthcare application with HIPAA compliance\n• High-performance API development\n\n**Related Skills:**\nExpress.js, TypeScript, MongoDB, PostgreSQL, Docker\n\nNode.js is her primary backend technology for building fast, scalable server-side applications!`
        },
        {
            keywords: ["nestjs", "nest.js", "nest"],
            response: () => `**NestJS Expertise**\n\nMuhasina specializes in NestJS for enterprise-grade applications:\n\n**What She Builds:**\n• Enterprise backend systems\n• Modular, maintainable APIs\n• TypeScript-first applications\n• Scalable microservices\n\n**Experience:**\nBuilt a complete HRMS (Human Resource Management System) with:\n• Attendance tracking\n• Recruitment workflows\n• Payroll processing\n• Role-based access control\n\n**Why NestJS:**\n• Clean architecture patterns\n• Built-in dependency injection\n• Great for large-scale applications\n\nPerfect for businesses needing robust, well-structured backend systems!`
        },
        {
            keywords: ["react", "next.js", "nextjs", "frontend", "front-end"],
            response: () => `**React & Next.js Skills**\n\nMuhasina works with React ecosystem for frontend development:\n\n**Technologies:**\n• React.js - Component-based UIs\n• Next.js - Full-stack React framework\n• TypeScript - Type-safe development\n\n**What She Builds:**\n• Single Page Applications (SPAs)\n• Server-side rendered apps\n• Static websites\n• Full-stack MERN applications\n\n**Approach:**\n• Responsive, mobile-first design\n• Clean component architecture\n• State management best practices\n\nCombined with her backend expertise, she delivers complete full-stack solutions!`
        },
        {
            keywords: ["mern", "full stack", "fullstack", "full-stack"],
            response: () => `**Full-Stack MERN Development**\n\nMuhasina offers complete web application development:\n\n**The MERN Stack:**\n• **M**ongoDB - NoSQL database\n• **E**xpress.js - Backend framework\n• **R**eact - Frontend library\n• **N**ode.js - Runtime environment\n\n**What's Included:**\n• Database design & modeling\n• REST API development\n• User authentication & authorization\n• Responsive frontend UI\n• Admin dashboards\n• Deployment & DevOps\n\n**Best For:**\n• Startups building MVPs\n• SaaS applications\n• Web portals & dashboards\n• E-commerce platforms\n\nEnd-to-end development from concept to deployment!`
        },
        {
            keywords: ["database", "mongodb", "postgresql", "postgres", "cosmos"],
            response: () => `**Database Expertise**\n\nMuhasina works with multiple database technologies:\n\n**MongoDB (NoSQL)**\n• Flexible document structure\n• Great for rapid development\n• Used in MERN stack projects\n\n**PostgreSQL (SQL)**\n• Complex relational queries\n• Data integrity & transactions\n• Used in HRMS & e-commerce\n\n**Azure Cosmos DB**\n• Cloud-native database\n• Used in healthcare applications\n• Global distribution support\n\n**Skills:**\n• Database schema design\n• Query optimization\n• Data modeling\n• Migration & seeding\n\nShe chooses the right database based on your project requirements!`
        },
        {
            keywords: ["docker", "devops", "ci/cd", "cicd", "deployment", "deploy"],
            response: () => `**Deployment & DevOps Service**\n\nMuhasina helps get your application production-ready:\n\n**What's Included:**\n• Docker containerization\n• CI/CD pipeline setup\n• Cloud deployment\n• Environment configuration\n\n**Technologies:**\n• Docker & Docker Compose\n• GitHub Actions\n• Cloud platforms (AWS, Azure, DigitalOcean)\n• Nginx configuration\n\n**CI/CD Pipeline:**\n• Automated testing\n• Build automation\n• Deployment workflows\n• Environment management\n\n**Best For:**\n• Startups needing deployment setup\n• Teams wanting automated workflows\n• Projects requiring containerization\n\nFrom development to production with modern DevOps practices!`
        },
        {
            keywords: ["microservice", "microservices"],
            response: () => `**Microservices Architecture**\n\nMuhasina designs and implements distributed systems:\n\n**What She Builds:**\n• Service decomposition & boundaries\n• Inter-service communication\n• API gateways\n• Event-driven architecture\n\n**Technologies:**\n• Node.js & NestJS\n• Docker containerization\n• Message queues\n• REST & event-based communication\n\n**Benefits:**\n• Independent deployment\n• Technology flexibility\n• Better scalability\n• Easier maintenance\n\n**Best For:**\n• Large-scale applications\n• Teams needing independent services\n• Systems requiring high availability\n\nBuilding systems that scale with your business!`
        },
        
        // Technical Writing Skills - SPECIFIC patterns first (before general patterns)
        {
            keywords: ["api documentation", "api doc", "document api", "swagger", "openapi"],
            response: () => `**API Documentation Service**\n\nMuhasina creates comprehensive, developer-friendly API documentation:\n\n**What's Included:**\n• Complete endpoint specifications (methods, URLs, parameters)\n• Request/response schemas with examples\n• Authentication & authorization guides\n• Error handling documentation\n• Rate limiting & pagination details\n• OpenAPI/Swagger specifications\n• Postman collection setup\n\n**Experience:**\nDocumented APIs for e-commerce platforms, HRMS systems, and healthcare applications with focus on accuracy and developer experience.\n\n**Formats:**\nMarkdown, OpenAPI 3.0, Swagger, ReadMe, GitBook, or your preferred platform.\n\nPerfect for startups and teams needing clear API references for internal or public APIs!`
        },
        {
            keywords: ["technical blog", "blog writing", "tech blog", "blog", "article", "content writing", "write article", "write blog"],
            response: () => `**Technical Blog Writing Service**\n\nMuhasina writes engaging technical content for developer audiences:\n\n**What's Included:**\n• In-depth technical tutorials\n• How-to articles with code examples\n• Technology comparison posts\n• Best practices & tips articles\n• Framework/library guides\n• Thought leadership content\n\n**Topics She Covers:**\n• Node.js, NestJS, Express\n• React, Next.js\n• REST APIs & Microservices\n• Database design (MongoDB, PostgreSQL)\n• DevOps, Docker, CI/CD\n\n**Approach:**\n• SEO-optimized content\n• Clear code examples that work\n• Engaging writing style\n• Technically accurate & tested\n\n**Deliverables:**\n• Well-researched articles (1000-3000 words)\n• Code samples tested and working\n• Images/diagrams where needed\n• SEO meta descriptions\n\nGreat for developer blogs, company engineering blogs, or tech publications!`
        },
        {
            keywords: ["developer documentation", "developer doc", "dev doc", "code doc", "sdk doc", "library doc", "readme"],
            response: () => `**Developer Documentation Service**\n\nMuhasina creates documentation that helps developers integrate and build faster:\n\n**What's Included:**\n• SDK & library documentation\n• README files & quick starts\n• Code comments & inline docs\n• Architecture documentation\n• Setup & installation guides\n• Configuration references\n• Troubleshooting guides\n• Contributing guidelines (CONTRIBUTING.md)\n\n**Documentation Types:**\n• Getting Started guides\n• API integration examples\n• Code walkthroughs\n• Migration guides\n• Changelog maintenance\n\n**Best For:**\n• Open source projects\n• Internal developer tools\n• SDKs and libraries\n• Microservices documentation\n\n**Approach:**\n• Developer-first perspective\n• Practical code examples in multiple languages\n• Clear structure & navigation\n• Keeps docs in sync with code\n• Uses docs-as-code workflow\n\nHelps reduce onboarding time and support requests!`
        },
        {
            keywords: ["product documentation", "product doc", "product manual", "release note", "release notes", "changelog", "help center", "knowledge base"],
            response: () => `**Product Documentation Service**\n\nMuhasina creates professional documentation for software products:\n\n**What's Included:**\n• Product manuals & overviews\n• Feature documentation\n• Release notes & changelogs\n• System requirements docs\n• Admin & configuration guides\n• Knowledge base articles\n• Help center content\n• In-app help text & tooltips\n\n**Documentation Types:**\n• End-user documentation\n• Admin guides\n• Installation & upgrade guides\n• Troubleshooting articles\n• FAQ sections\n• Video script writing\n\n**Approach:**\n• User-centered writing\n• Consistent terminology & style\n• Version-controlled documentation\n• Easy to maintain & update\n• Structured for searchability\n\n**Formats & Platforms:**\n• Markdown, HTML, PDF\n• Help center platforms (Zendesk, Freshdesk, Intercom)\n• Documentation sites (GitBook, Docusaurus, ReadMe, Notion)\n\nIdeal for SaaS companies, software vendors, and product teams!`
        },
        {
            keywords: ["tutorial", "guide", "user guide", "manual"],
            response: () => `**User Guides & Tutorials Service**\n\nMuhasina creates clear, actionable documentation for end-users and developers:\n\n**What's Included:**\n• Step-by-step tutorials with screenshots\n• Getting started guides\n• User manuals for software products\n• How-to guides and walkthroughs\n• FAQ documentation\n• Onboarding documentation\n\n**Approach:**\n• Breaks down complex processes into simple steps\n• Uses clear language accessible to non-technical users\n• Includes practical examples and use cases\n• Tests instructions for accuracy\n\nPerfect for SaaS products, developer tools, or any software needing user-friendly documentation!`
        },
        // General Technical Writing overview - MUST be AFTER all specific writing services
        {
            keywords: ["writing service", "writing", "technical writer", "writer", "docs"],
            response: () => `Muhasina's Technical Writing services include:\n\n• API Documentation\n• Developer Documentation\n• User Guides & Tutorials\n• Technical Blog Writing\n• Product Documentation\n\nShe excels at breaking down complex technical concepts into simple, actionable content. Which type interests you?`
        },

        // API Development (general "api" keyword - placed AFTER api documentation)
        {
            keywords: ["api", "rest", "restful", "apis", "build api", "create api", "develop api"],
            response: () => `**API Development Service**\n\nMuhasina designs and builds robust REST APIs:\n\n**What's Included:**\n• RESTful endpoint design\n• Request validation & error handling\n• Authentication (JWT, OAuth)\n• Rate limiting & security\n• Versioning strategies\n• Comprehensive documentation\n\n**API Features:**\n• Clean, consistent response formats\n• Proper HTTP status codes\n• Pagination & filtering\n• File upload handling\n\n**Documentation:**\n• OpenAPI/Swagger specs\n• Postman collections\n• Integration guides\n\n**Experience:**\nBuilt APIs for e-commerce, HRMS, and healthcare systems.\n\nWell-documented, secure, and scalable APIs for your applications!`
        },
        
        // Services
        {
            keywords: ["service", "offer", "provide", "help with", "work", "hire"],
            response: () => `Muhasina offers these services:\n\n**Web Application Development** — Custom apps from idea to deployment\n**Backend & API Development** — Robust systems and REST APIs\n**Business Website Development** — Modern, responsive websites\n**System Design & Integration** — Connecting services and databases\n\nWhich service would you like to know more about?`
        },
        
        // Projects
        {
            keywords: ["project", "portfolio", "worked on", "experience", "built"],
            response: () => {
                let projectList = ChatBot.knowledge.projects.map(p => 
                    `**${p.name}**\nTech: ${p.tech}`
                ).join("\n\n");
                return `Muhasina has worked on these projects:\n\n${projectList}\n\nThe Sweet Crumbs Bakery site has a live demo! Want details about any specific project?`;
            }
        },
        {
            keywords: ["bakery", "sweet crumbs", "sweetcrumbs"],
            response: () => `**Sweet Crumbs Bakery**\n\nA modern, responsive website built for a small bakery business:\n\n**Features:**\n• Fully responsive layout for all devices\n• Product and menu showcase\n• Modern UI with smooth interactions\n• Contact form for customer inquiries\n• Mobile-first, fast-loading design\n\n**Tech:** Next.js, Tailwind CSS, TypeScript\n\n**Live Demo:** https://bakery-site-omega.vercel.app/\n\nA great example of Muhasina's business website development work!`
        },
        {
            keywords: ["hrms", "hr", "human resource", "attendance"],
            response: () => `**HRMS (Human Resource Management System)**\n\nDesigned and implemented comprehensive HR modules for enterprise-level human resource management:\n\n• Attendance tracking and management system\n• Recruitment workflow and candidate management\n• Payroll processing and salary calculations\n• Role-based access control and authentication\n• Structured database design for HR data\n\n**Tech:** NestJS, PostgreSQL, TypeScript\n\n**Documentation:** System documentation including user manuals, admin guides, API references, and workflow diagrams.`
        },
        {
            keywords: ["ecommerce", "e-commerce", "online store", "shop", "commerce"],
            response: () => `**E-commerce Platform**\n\nLed backend development of a comprehensive e-commerce platform with focus on scalability and secure transactions:\n\n• RESTful APIs for orders, inventory management, and customer feedback\n• System scalability and real-time performance optimization\n• Secure customer transaction processing\n• Database design for efficient data handling\n\n**Tech:** Node.js, PostgreSQL, REST APIs\n\n**Documentation:** Comprehensive API documentation including endpoint specifications, request/response schemas, authentication flows, and integration guides.`
        },
        {
            keywords: ["healthcare", "health", "patient", "medical", "hipaa"],
            response: () => `**Healthcare Application**\n\nDeveloped secure backend modules for healthcare management with focus on patient data privacy and medical compliance:\n\n• Patient registration and profile management\n• Consultation scheduling and medical records\n• Prescription management and medication tracking\n• Diagnosis history and medical timeline\n• Vitals tracking and health monitoring\n• Secure data handling with HIPAA compliance\n\n**Tech:** Node.js, Azure Cosmos DB, REST APIs\n\n**Documentation:** Healthcare API documentation including data models, validation rules, security protocols, and integration guides for medical devices.`
        },
        
        // Contact
        {
            keywords: ["contact", "reach", "email", "phone", "call", "message", "connect", "get in touch"],
            response: () => `You can reach Muhasina through:\n\nEmail: ${ChatBot.knowledge.email}\nPhone: ${ChatBot.knowledge.phone}\nLinkedIn: linkedin.com/in/muhasina-jalal\nWhatsApp: Available\n\nOr use the contact form on this page!`
        },
        {
            keywords: ["linkedin", "social"],
            response: () => `Connect with Muhasina on LinkedIn:\n${ChatBot.knowledge.linkedin}`
        },
        {
            keywords: ["whatsapp", "chat"],
            response: () => `You can message Muhasina on WhatsApp:\n${ChatBot.knowledge.whatsapp}`
        },
        
        // Availability & Hiring
        {
            keywords: ["available", "freelance", "hire", "cost", "price", "rate", "quote", "budget"],
            response: () => `Yes, Muhasina is available for freelance projects!\n\nShe works with startups and businesses on:\n• Web applications\n• Backend systems & APIs\n• Business websites\n• System design & integration\n\nFor project discussions and pricing, please reach out:\nEmail: ${ChatBot.knowledge.email}\nPhone: ${ChatBot.knowledge.phone}\n\nShe typically responds within 24 hours!`
        },
        
        // Gratitude
        {
            keywords: ["thank", "thanks", "appreciate", "helpful"],
            response: () => `You're welcome! If you have more questions about Muhasina's services or skills, feel free to ask. You can also reach out directly through the contact section!`
        },
        
        // Goodbye
        {
            keywords: ["bye", "goodbye", "see you", "later", "exit", "close"],
            response: () => `Goodbye! Thanks for visiting Muhasina's portfolio. Feel free to come back anytime or reach out through the contact form. Have a great day!`
        }
    ],

    // Suggested topics for out-of-scope questions
    suggestedTopics: [
        "What services does Muhasina offer?",
        "What are her technical skills?",
        "Tell me about her projects",
        "Can I see a live demo?",
        "How can I contact Muhasina?",
        "Is she available for freelance work?"
    ],

    // Find best matching response
    findResponse(input) {
        const normalizedInput = input.toLowerCase().trim();
        
        // Check each pattern for keyword matches
        for (const pattern of this.patterns) {
            for (const keyword of pattern.keywords) {
                if (normalizedInput.includes(keyword.toLowerCase())) {
                    return pattern.response();
                }
            }
        }
        
        // No match found - return out-of-scope response with suggestions
        return this.getOutOfScopeResponse();
    },

    // Response for out-of-scope questions
    getOutOfScopeResponse() {
        const randomTopics = this.suggestedTopics
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        return `I'm specifically designed to answer questions about Muhasina's portfolio, services, and skills. I can't help with that particular question.\n\n**Here are some things you can ask me:**\n• ${randomTopics.join("\n• ")}\n\nOr feel free to contact Muhasina directly for other inquiries!`;
    },

    // Initialize chatbot UI
    init() {
        this.createChatWidget();
        this.attachEventListeners();
    },

    // Create chat widget HTML
    createChatWidget() {
        const chatHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chat">
                    <span class="chat-icon">💬</span>
                    <span class="close-icon">✕</span>
                </button>
                
                <div id="chatbot-window" class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <span class="chatbot-avatar">🤖</span>
                            <div>
                                <h4>Portfolio Assistant</h4>
                                <span class="chatbot-status">Online</span>
                            </div>
                        </div>
                        <button id="chatbot-close" class="chatbot-close" aria-label="Close chat">✕</button>
                    </div>
                    
                    <div id="chatbot-messages" class="chatbot-messages">
                        <div class="chat-message bot-message">
                            <span class="message-avatar">🤖</span>
                            <div class="message-content">
                                <p>Hi there! I'm Muhasina's portfolio assistant. I can help you learn about:</p>
                                <ul>
                                    <li>Development Services</li>
                                    <li>Technical Skills</li>
                                    <li>Projects & Live Demos</li>
                                    <li>Contact & Availability</li>
                                </ul>
                                <p>What would you like to know?</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chatbot-quick-replies">
                        <button class="quick-reply" data-message="What services do you offer?">Services</button>
                        <button class="quick-reply" data-message="What are your skills?">Skills</button>
                        <button class="quick-reply" data-message="Show me your projects">Projects</button>
                        <button class="quick-reply" data-message="How can I contact you?">Contact</button>
                    </div>
                    
                    <div class="chatbot-input-container">
                        <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Type your question..." autocomplete="off">
                        <button id="chatbot-send" class="chatbot-send" aria-label="Send message">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatHTML);
    },

    // Attach event listeners
    attachEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');
        const container = document.getElementById('chatbot-container');
        const quickReplies = document.querySelectorAll('.quick-reply');

        // Toggle chat window
        toggle.addEventListener('click', () => {
            container.classList.toggle('open');
            if (container.classList.contains('open')) {
                input.focus();
            }
        });

        // Close chat window
        close.addEventListener('click', () => {
            container.classList.remove('open');
        });

        // Send message on button click
        send.addEventListener('click', () => this.handleUserInput());

        // Send message on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });

        // Quick reply buttons
        quickReplies.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                input.value = message;
                this.handleUserInput();
            });
        });
    },

    // Handle user input
    handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear input
        input.value = '';
        
        // Get and display bot response with typing delay
        setTimeout(() => {
            const response = this.findResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    },

    // Add message to chat window
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        const avatar = sender === 'bot' ? '🤖' : '👤';
        
        // Convert markdown-style formatting to HTML
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/• /g, '&bull; ');
        
        messageDiv.innerHTML = `
            <span class="message-avatar">${avatar}</span>
            <div class="message-content">
                <p>${formattedText}</p>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
};

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    ChatBot.init();
});
