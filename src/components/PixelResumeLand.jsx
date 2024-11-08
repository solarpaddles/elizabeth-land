import React, { useState, useEffect } from 'react';
import { User, Briefcase, Book, Award } from 'lucide-react';
import CatSprite from './CatSprite';
import ExperienceModal from './ExperienceModal';
import AboutModal from './AboutModal';
import EducationModal from './EducationModal';
import SkillsModal from './SkillsModal';

const PixelResumeLand = () => {
  const [position, setPosition] = useState({ x: 50, y: 66 });
  const [activeSection, setActiveSection] = useState(null);
  const [nearbyIcon, setNearbyIcon] = useState(null);
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);
  const [movementDirection, setMovementDirection] = useState(null);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const setInitialPosition = () => {
      const isMobile = window.innerWidth <= 768; // Standard mobile breakpoint
      setPosition({
        x: 50,
        y: isMobile ? 35 : 66
      });
    };

    setInitialPosition(); // Set on mount
    window.addEventListener('resize', setInitialPosition); // Update on resize

    return () => window.removeEventListener('resize', setInitialPosition);
  }, []);

  const iconPositions = {
    about: { x: 85, y: 85 },      // Bottom right
    experience: { x: 50, y: 45 },  // Middle village
    education: { x: 80, y: 20 },   // Top right
    skills: { x: 10, y: 45 }       // Top left
  };

  const handleMove = (dir) => {
    if (activeSection) return;

    setDirection(dir.toLowerCase());
    setMovementDirection(dir.toLowerCase());
    setIsMoving(true);
    setIdle(false);
  };

  const stopMove = () => {
    setIsMoving(false);
    setMovementDirection(null);
  };

  useEffect(() => {
    if (!isMoving || !movementDirection) return;

    const speed = .5;
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPos = { ...prev };
        switch (movementDirection) {
          case 'w':
            newPos.y = Math.max(10, prev.y - speed);
            break;
          case 's':
            newPos.y = Math.min(90, prev.y + speed);
            break;
          case 'a':
            newPos.x = Math.max(10, prev.x - speed);
            break;
          case 'd':
            newPos.x = Math.min(90, prev.x + speed);
            break;
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isMoving, movementDirection]);

  useEffect(() => {
    const idleTimer = setTimeout(() => {
      if (!isMoving) {
        setIdle(true);
      }
    }, 3000);

    return () => clearTimeout(idleTimer);
  }, [isMoving]);

  const ControlPanel = () => (
    <div className="fixed bottom-0 left-0 z-40 p-2 sm:p-4 flex flex-col items-start">
      <div className="bg-black bg-opacity-75 rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="flex justify-center">
            <button
              className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg 
                        flex items-center justify-center font-bold text-base sm:text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('w')}
              onTouchStart={() => handleMove('w')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              W
            </button>
          </div>

          <div className="flex gap-1.5 sm:gap-2 justify-center">
            <button
              className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-base sm:text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('a')}
              onTouchStart={() => handleMove('a')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              A
            </button>
            <button
              className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-base sm:text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('s')}
              onTouchStart={() => handleMove('s')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              S
            </button>
            <button
              className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-base sm:text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('d')}
              onTouchStart={() => handleMove('d')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              D
            </button>
          </div>

          <button
            className="mt-1.5 sm:mt-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                      flex items-center justify-center font-bold text-sm sm:text-base shadow-lg
                      active:transform active:scale-95 transition-all duration-150"
            onClick={() => {
              if (activeSection) {
                setActiveSection(null);
              } else if (nearbyIcon) {
                setActiveSection(nearbyIcon);
              }
            }}
          >
            ENTER
          </button>
        </div>

        <div className="mt-3 sm:mt-4 text-white text-xs sm:text-sm space-y-0.5 sm:space-y-1">
          <p className="font-medium">Use controls to explore the village</p>
          <p className="text-white text-opacity-80">Visit each location to learn more</p>
          <p className="text-white text-opacity-80">Press ENTER when near a location</p>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        if (activeSection) {
          setActiveSection(null);
        } else if (nearbyIcon) {
          setActiveSection(nearbyIcon);
        }
        return;
      }

      const keyMap = {
        'w': 'w',
        's': 's',
        'a': 'a',
        'd': 'd'
      };

      if (keyMap[e.key.toLowerCase()]) {
        handleMove(keyMap[e.key.toLowerCase()]);
      }
    };

    const handleKeyUp = () => {
      stopMove();
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [position, activeSection, nearbyIcon]);

  useEffect(() => {
    const proximityThreshold = 8;
    let foundIcon = null;

    Object.entries(iconPositions).forEach(([section, pos]) => {
      const distance = Math.sqrt(
        Math.pow(position.x - pos.x, 2) +
        Math.pow(position.y - pos.y, 2)
      );
      if (distance < proximityThreshold) {
        foundIcon = section;
      }
    });

    setNearbyIcon(foundIcon);
  }, [position]);

  const InfoCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <img
        src="/metaland.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Village background"
      />
      {/* New Header Section */}
      <div
        className="absolute top-0 left-0 w-full h-2/3 
             bg-gradient-to-br from-black/70 via-black/40 via-black/20 via-black/5 to-transparent z-20"
      />
      {/* Then update the header section */}
      <div className="absolute top-4 sm:top-20 left-4 sm:left-20 z-30 max-w-[280px] sm:max-w-md">
        <h1
          className="text-3xl sm:text-5xl mb-1 sm:mb-2 text-white drop-shadow-lg"
          style={{ fontFamily: 'GintoBlack' }}
        >
          Welcome to Elizabeth Land
        </h1>
        <p
          className="text-sm sm:text-[16px] text-white/90 leading-snug drop-shadow-md"
          style={{ fontFamily: 'HubotSans' }}
        >
          Navigate through a curated journey of marketing innovation and brand strategy.
        </p>
      </div>

      {Object.entries(iconPositions).map(([section, pos]) => {
        const Icon = {
          about: User,
          experience: Briefcase,
          education: Book,
          skills: Award
        }[section];

        const isNearIcon = section === nearbyIcon;

        return (
          <div
            key={section}
            className="absolute z-30" // Updated z-index to be above background but below modal
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div
              className={`p-4 rounded-full transition-all duration-300 cursor-pointer ${isNearIcon
                ? 'bg-white bg-opacity-90 scale-105'
                : 'bg-white bg-opacity-75 hover:bg-opacity-90'
                }`}
              onClick={() => setActiveSection(section)}
            >
              <Icon
                size={24}
                className={`transition-colors duration-300 ${isNearIcon ? 'text-blue-600' : 'text-gray-800'
                  }`}
              />
              {isNearIcon && !activeSection && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                  text-sm font-medium whitespace-nowrap 
                  bg-black bg-opacity-75 text-white
                  px-3 py-1.5 rounded-full shadow-lg">
                  Press Enter
                </div>
              )}
            </div>
          </div>
        );
      })}
      <CatSprite
        direction={idle ? 'idle' : direction}
        isMoving={isMoving}
        idle={idle}  // Add this line
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`
        }}
      />
      <ControlPanel />
      {activeSection && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-hidden touch-auto" 
    onClick={() => setActiveSection(null)}
  >
    <div
      className="h-full w-full overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch" // Added webkit touch scrolling
      style={{ WebkitOverflowScrolling: 'touch' }} // Added for iOS momentum scrolling
      onClick={e => e.stopPropagation()}
    >
      <div className="min-h-full"> {/* Added wrapper for better mobile scroll */}
        {activeSection === 'experience' ? (
          <ExperienceModal onClose={() => setActiveSection(null)} />
        ) : activeSection === 'about' ? (
          <AboutModal onClose={() => setActiveSection(null)} />
        ) : activeSection === 'education' ? (
          <EducationModal onClose={() => setActiveSection(null)} />
        ) : activeSection === 'skills' ? (
          <SkillsModal onClose={() => setActiveSection(null)} />
        ) : null}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default PixelResumeLand;
