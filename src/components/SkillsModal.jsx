import React from 'react';
import { X, TrendingUp, BarChart2, Zap, Users, Calendar, Target, Mail, Award, Code, GitBranch } from 'lucide-react';

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
          stat: "233%",
          label: "Avg Campaign Increase"
        },
        {
          icon: <BarChart2 className="w-5 h-5 text-emerald-500" />,
          stat: "30%",
          label: "Reporting Efficiency"
        },
        {
          icon: <Calendar className="w-5 h-5 text-amber-500" />,
          stat: "2 week",
          label: "Content Sprint Planning"
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
      description: "Pioneered our segmenting and promotional process to move away from discount messaging and increase revenue by curating educational content that inspired full price purchases.",
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
      description: "Self-taught full-stack developer who mastered TypeScript and Vue.js, leveraging AI to architect and engineer a comprehensive tournament management platform. Wearing multiple hats as lead engineer, product manager, and marketing strategist while actively running tournaments to deeply understand user needs.",
      achievements: [
        {
          icon: <Code className="w-5 h-5 text-emerald-500" />,
          stat: "2K+",
          label: "Events Processed"
        },
        {
          icon: <GitBranch className="w-5 h-5 text-blue-500" />,
          stat: "v1.0",
          label: "Rating Algorithm"
        },
        // {
        //   icon: <Users className="w-5 h-5 text-purple-500" />,
        //   stat: "700+",
        //   label: "Active Players"
        // },
        {
          icon: <Zap className="w-5 h-5 text-amber-500" />,
          stat: "3 button click",
          label: "Bracket Generation"
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
      company: "Solar Paddles",
      logo: "/brands/solar_logo.jpg",
      background: "/brand_background.jpg",
      description: "Custom manufacturing of a beach tennis paddle line, including carbon fiber composition, EVA foam density, weight + balance. Established strategic international distribution in Brazil, Italy, and Puerto Rico. Built a marketing strategy based on an equitable pro athlete program.",
      achievements: [
        {
          icon: <Zap className="w-5 h-5 text-amber-500" />,
          stat: "#1",
          label: "First Female Founder in Industry",
        },
        {
          icon: <Target className="w-5 h-5 text-purple-500" />,
          stat: "1st",
          label: "USAP Approved Beach Tennis Brand",
        },
        {
          icon: <Users className="w-5 h-5 text-blue-500" />,
          stat: "50/50",
          label: "Gender Pay Equity Achievement",
        }
      ],
      gallery: [
        {
          src: "/brands/solar_04.jpg",
          alt: "Product Lineup"
        },
        {
          src: "/brands/solar_01.jpg",
          alt: "Manufacturing Process"
        },
        {
          src: "/brands/solar_03.jpg",
          alt: "Sponsored Athletes"
        },
        {
          src: "/brands/solar_02.jpg",
          alt: "Tournament Coverage"
        }
      ]
    },
    {
      company: "DryWater",
      logo: "/brands/drywater_logo.jpeg",
      description: "Brought formalized design process to streamline retention program assets. Worked to develop baseline stats for LTV goals + retention.",
      achievements: [
        {
          icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
          stat: "30%",
          label: "Efficiency in Design"
        },
        {
          icon: <Mail className="w-5 h-5 text-blue-500" />,
          stat: "15%",
          label: "Increase in Rev/Rec"
        },
        {
          icon: <Target className="w-5 h-5 text-purple-500" />,
          stat: "Educational",
          label: "Content focus shift"
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
              A closer look at how brand work comes to life through different technologies and platforms.
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