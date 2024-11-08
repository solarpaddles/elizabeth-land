import React from 'react';
import { X } from 'lucide-react';

const ExperienceModal = ({ onClose }) => {
    const experiences = [
        {
            title: "Senior Lifecycle Marketing Manager",
            company: "Playbook for Growth",
            location: "Los Angeles, CA",
            period: "October 2022 - Present",
            achievements: [
                "Spearheaded lifecycle marketing programs for multiple clients, coordinating email, SMS, and review strategies; led content creation across platforms including paid advertising, resulting in a 20-30% reduction in content development time and increased consistency in deployments.",
                "Implemented a novel design process modeled after a 2-week sprint methodology, involving a cross-functional team from photography, copywriting, social media, web, email, and ad trafficking, which streamlined content production and review phases.",
                "Developed and refined email marketing best practices, enhancing segmentation, design, A/B testing and flow strategies; boosting campaign and flow revenue for clients year-over-year by 80%.",
                "Directed comprehensive Black Friday/Cyber Monday campaigns for e-commerce brands",
                "Initiated and successfully launched an SMS marketing strategy that generated $419K in revenue during holiday season.",
                "Innovated and managed a cross-functional review process to optimize content production cycles"
            ]
        },
        {
            title: "Lifecycle Marketing Manager",
            company: "Giant Propeller",
            location: "Los Angeles, CA",
            period: "Jun 2021 - Oct 2022",
            achievements: [
                "Engineered and executed comprehensive retention programs, including loyalty and rewards, specifically for online subscription-based and ecomm clients, which increased average customer lifetime value (LTV) by 35% and lengthened retention duration by 2.5 months.",
                "Developed proficiency in key e-commerce platforms and tools such as Klaviyo, Yotpo, Shopify, Figma and Asana.",
                "Created and differentiated business models for the agency, distinguishing between one-time and recurring services",
                "Designed and implemented auditing best practices to enhance service scoping and delivery",
                "Designed and implemented live reporting dashboards for clients, reducing manual reporting hours by 30%"
            ]
        },
        {
            title: "Product Manager",
            company: "Dealer.com",
            location: "Burlington, VT",
            period: "Mar 2016 - Oct 2018",
            achievements: [
                "Lead an integrated platform of Advertising, Website and Managed Services products",
                "Built automotive-focused product suites partnering with Google, Bing, Facebook, Auto Trader",
                "Scaled technology solutions and enhancements to over 6,900 advertisers",
                "Achieved $610k in additional revenue in less than two weeks through effective project management",
                "Increased operations team efficiency by 30% through product design and product innovation",
                "Named Bing Partner of the Year in 2017"
            ]
        }
    ];

    const entrepreneurial = [
        {
            title: "Co-Founder",
            company: "Bracketsync",
            location: "Los Angeles, CA",
            period: "2023-present",
            achievements: [
                "Building a tournament and league registration website for paddle sports",
                "Leading front-end development using JavaScript/TypeScript and CSS",
                "Spearheading product management using JIRA for detailed mapping",
                "Collaborating closely with event organizers to conduct real-life user testing",
                "Developing and refining an automated email marketing strategy"
            ]
        },
        {
          title: "Founder",
          company: "Solar Paddles",
          location: "Los Angeles, CA",
          period: "2020-present",
          achievements: [
              "Pioneered as the first female founder in the beach tennis industry",
              "Conducted extensive quality testing with multiple manufacturers",
              "Launched equitable athlete programs for men and women based on rankings",
              "Developed wholesale and academy programs to facilitate offline sales",
              "Became the first beach tennis brand to become a USA Pickleball approved manufacturer"
          ]
      },
        {
          title: "Co-Founder",
          company: "Yams Media",
          location: "Los Angeles, CA",
          period: "Oct 2018 - Jun 2021",
          achievements: [
              "Focused on collaborating with women-owned and environmentally friendly brands; successfully launched and managed branding, website building, and email marketing for 15 clients.",
              "Led the development of strong visual identities, establishing distinct voice and tone guidelines",
              "Mastered and employed a comprehensive suite of digital advertising tools, including Google Analytics, AdWords",
              "Implemented innovative branding strategies that aligned with client values and market demands"
          ]
      },
    ];

    React.useEffect(() => {
        const handleEsc = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
      }, [onClose]);
    
      return (
        <div className="fixed inset-0 sm:inset-4 bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Modal header - adjusted padding */}
          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-8 py-4 flex justify-between items-center">
            <div className="text-sm font-medium text-gray-400">Resume</div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
      
          {/* Scrollable content - adjusted padding and added better mobile scroll handling */}
          <div className="h-[calc(100%-4rem)] overflow-y-auto overscroll-contain px-4 sm:px-8 py-6 sm:py-10">
            <div className="max-w-4xl mx-auto">
              {/* Header - improved mobile layout */}
              <header className="mb-8 sm:mb-16">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                    Elizabeth Brown
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-x-3 text-sm text-gray-500">
                    <p>Hermosa Beach, CA</p>
                    <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                    <p>310-913-3479</p>
                    <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                    <p>elizabethcarolb@gmail.com</p>
                  </div>
                </div>
              </header>
      
              {/* Experience sections - adjusted spacing */}
              <section className="mb-8 sm:mb-16">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6 sm:mb-8">
                  Professional Experience
                </h2>
                <div className="space-y-8 sm:space-y-12">
                  {experiences.map((exp, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                          <p className="text-sm font-medium text-blue-600">{exp.company}</p>
                        </div>
                        <div className="text-sm sm:text-right">
                          <p className="text-gray-900">{exp.location}</p>
                          <p className="text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm sm:text-[15px] leading-relaxed">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 flex items-start gap-3 group-hover:text-gray-900 transition-colors duration-200">
                            <span className="text-blue-500/50 group-hover:text-blue-500 transition-colors duration-200">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
    
              {/* Entrepreneurial Experience */}
              <section className="mb-16">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8">
                  Entrepreneurial Experience
                </h2>
                <div className="space-y-12">
                  {entrepreneurial.map((exp, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                          <p className="text-sm font-medium text-blue-600">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-gray-900">{exp.location}</p>
                          <p className="text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-[15px] leading-relaxed">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 flex items-start gap-3 group-hover:text-gray-900 transition-colors duration-200">
                            <span className="text-blue-500/50 group-hover:text-blue-500 transition-colors duration-200">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
    
              {/* Education */}
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8">
                  Education
                </h2>
                <div className="group">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-900">Bachelor of Science in Business Administration</h3>
                    <p className="text-sm font-medium text-blue-600">University of Vermont | Burlington, VT</p>
                    <p className="text-[15px] text-gray-600 mt-2">Information Systems + Environmental Business | Minor in Mandarin</p>
                    <p className="text-sm text-gray-500">GPA: 3.6</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    };
    
    export default ExperienceModal;