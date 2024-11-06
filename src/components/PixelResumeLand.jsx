import React, { useState, useEffect } from 'react';
import { User, Briefcase, Book, Award } from 'lucide-react';
import CatSprite from './CatSprite';
import ExperienceModal from './ExperienceModal';
import AboutModal from './AboutModal';
import EducationModal from './EducationModal';
import SkillsModal from './SkillsModal';

const PixelResumeLand = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState(null);
  const [nearbyIcon, setNearbyIcon] = useState(null);
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);
  const [movementDirection, setMovementDirection] = useState(null);
  const [idle, setIdle] = useState(false);

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
    <div className="fixed bottom-0 left-0 z-40 p-4 flex flex-col items-start">
      <div className="bg-black bg-opacity-75 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <button
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg 
                        flex items-center justify-center font-bold text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('w')}
              onTouchStart={() => handleMove('w')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              W
            </button>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('a')}
              onTouchStart={() => handleMove('a')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              A
            </button>
            <button
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-xl
                        active:transform active:scale-95 transition-all duration-150"
              onMouseDown={() => handleMove('s')}
              onTouchStart={() => handleMove('s')}
              onMouseUp={stopMove}
              onTouchEnd={stopMove}
            >
              S
            </button>
            <button
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg
                        flex items-center justify-center font-bold text-xl
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
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                      flex items-center justify-center font-bold shadow-lg
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

        <div className="mt-4 text-white text-sm space-y-1">
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
            className="absolute z-10"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div
              className={`p-4 rounded-full transition-all duration-300 cursor-pointer ${isNearIcon
                ? 'bg-white bg-opacity-90 scale-105'
                : 'bg-white bg-opacity-75 hover:bg-opacity-90'
                }`}
              onClick={() => setActiveSection(section)}  // Simply open the modal on click
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
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`
        }}
      />

      <ControlPanel />
      {activeSection && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="relative w-full h-full"
            onClick={e => e.stopPropagation()}
          >
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
      )}
    </div>
  );
};

export default PixelResumeLand;
