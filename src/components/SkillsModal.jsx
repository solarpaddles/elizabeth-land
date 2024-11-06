import React from 'react';
import { X, TrendingUp, BarChart2, Zap, Users, Calendar, Target, Mail, Award } from 'lucide-react';

const BrandCard = ({ brand }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
    {/* Header with Logo */}
    <div className="relative p-8 border-b border-gray-100">
      <img
        src={brand.logo}
        alt={`${brand.company} logo`}
        className="w-20 h-20 rounded-xl object-cover shadow-sm"
      />
    </div>

    {/* Main Content Section */}
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Description Section */}
        <div className="flex-1 border border-gray-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{brand.company}</h3>
          <p className="text-gray-600 text-lg">
            {brand.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex-1 border border-gray-100 rounded-xl p-6">
          <div className="grid gap-4">
            {brand.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {achievement.icon}
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 block">
                    {achievement.stat}
                  </span>
                  <span className="text-sm text-gray-600">
                    {achievement.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Gallery Section */}
    <div className="px-8 pb-8">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {brand.gallery.map((image, i) => (
          <div
            key={i}
            className="flex-none w-72 aspect-video rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SkillsModal = ({ onClose }) => {
  const brandShowcase = [
    {
      company: "7Diamonds",
      logo: "/brands/7diamonds_logo.jpg",
      description: "Managed and transformed 7Diamonds' email marketing and retention program, implementing streamlined processes across email, SMS, and paid advertising channels. Through automated reporting solutions and a unified design workflow, drove operational efficiency while achieving 300% growth in average campaign revenue over two years.",
      achievements: [
        {
          icon: <Users className="w-5 h-5 text-blue-500" />,
          stat: "35%",
          label: "LTV Increase"
        },
        {
          icon: <BarChart2 className="w-5 h-5 text-emerald-500" />,
          stat: "30%",
          label: "Reporting Efficiency"
        },
        {
          icon: <Calendar className="w-5 h-5 text-amber-500" />,
          stat: "2.5mo",
          label: "Extended Retention"
        }
      ],
      gallery: [
        {
          src: "/brands/7diamonds_01.jpg",
          alt: "Retention Program Interface"
        },
        {
          src: "/brands/7diamonds_02.jpg",
          alt: "Analytics Dashboard"
        },
        {
          src: "/brands/7diamonds_03.jpg",
          alt: "Automated Reports"
        },
        {
          src: "/brands/7diamonds_04.jpg",
          alt: "Loyalty Program Design"
        }
      ]
    },
    {
      company: "Ghost Golf",
      logo: "/brands/GhostGolf_Logo.jpg",
      description: "Scaled advertising technology solutions and managed partnerships with major automotive industry players, driving significant revenue growth and platform adoption while improving operational efficiency.",
      achievements: [
        {
          icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
          stat: "$610K",
          label: "Revenue Generated"
        },
        {
          icon: <Users className="w-5 h-5 text-blue-500" />,
          stat: "6,900+",
          label: "Active Advertisers"
        },
        {
          icon: <Award className="w-5 h-5 text-purple-500" />,
          stat: "2017",
          label: "Bing Partner Award"
        }
      ],
      gallery: [
        {
          src: "/brands/ghostgolf_01.jpg",
          alt: "Advertising Platform Interface"
        },
        {
          src: "/brands/ghostgolf_02.jpg",
          alt: "Partner Integration Dashboard"
        },
        {
          src: "/brands/ghostgolf_03.jpg",
          alt: "Performance Metrics"
        },
        {
          src: "/brands/ghostgolf_04.jpg",
          alt: "Campaign Management"
        }
      ]
    },
    {
      company: "Bracketsync",
      logo: "/brands/bracketsync_logo.jpg",
      description: "Founded and scaled the first female-led beach tennis brand, pioneering innovative product development and establishing industry-leading standards for equity in sports equipment manufacturing.",
      achievements: [
        {
          icon: <Award className="w-5 h-5 text-amber-500" />,
          stat: "#1",
          label: "Female Founder in Industry"
        },
        {
          icon: <Target className="w-5 h-5 text-purple-500" />,
          stat: "1st",
          label: "USAP Approved Brand"
        },
        {
          icon: <Users className="w-5 h-5 text-blue-500" />,
          stat: "50/50",
          label: "Gender Pay Equity"
        }
      ],
      gallery: [
        {
          src: "/liz_banner.jpg",
          alt: "Product Lineup"
        },
        {
          src: "/brands/bracketsync_01.jpg",
          alt: "Manufacturing Process"
        },
        {
          src: "/brands/bracketsync_02.jpg",
          alt: "Sponsored Athletes"
        },
        {
          src: "/brands/bracketsync_03.jpg",
          alt: "Tournament Coverage"
        }
      ]
    },
    {
      company: "DryWater",
      logo: "/brands/drywater_logo.jpeg",
      description: "Led cross-functional teams to develop and execute comprehensive marketing strategies across multiple channels, focusing on driving growth and improving operational efficiency through innovative automation and strategic planning.",
      achievements: [
        {
          icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
          stat: "80%",
          label: "YoY Revenue Growth"
        },
        {
          icon: <Mail className="w-5 h-5 text-blue-500" />,
          stat: "2.5M",
          label: "Emails Automated"
        },
        {
          icon: <Target className="w-5 h-5 text-purple-500" />,
          stat: "$419K",
          label: "SMS Revenue"
        }
      ],
      gallery: [
        {
          src: "/brands/drywater_background.jpg",
          alt: "Custom Marketing Dashboard"
        },
        {
          src: "/brands/drywater_02.jpg",
          alt: "Email Campaign Analytics"
        },
        {
          src: "/brands/drywater_03.jpg",
          alt: "Performance Reports"
        },
        {
          src: "/brands/drywater_04.jpg",
          alt: "Marketing Automation Flow"
        }
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
    <div className="fixed inset-4 bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-400">Skills & Experience</div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="h-[calc(100%-4rem)] overflow-y-auto px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Technical Skills Through Brand Work
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of projects and achievements across different technologies and platforms.
            </p>
          </header>

          <div className="space-y-8">
            {brandShowcase.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;