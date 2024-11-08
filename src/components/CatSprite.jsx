import React, { useState, useEffect } from 'react';

const CatSprite = ({ direction, isMoving, idle, style }) => {
  const [frame, setFrame] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const spriteSize = { width: 32.1, height: 32.1 };

  useEffect(() => {
    if (isMoving && showWelcome) {
      setShowWelcome(false);
    }
  }, [isMoving]);

  useEffect(() => {
    if (!isMoving) {
      setFrame(0);
      return;
    }

    const animation = setInterval(() => {
      setFrame(prev => (prev + 1) % 4);
    }, 150);

    return () => clearInterval(animation);
  }, [isMoving]);

  const getSpritePosition = () => {
    const directions = {
      'idle': 2,
      'w': 4,
      'up': 4,
      'd': 1,
      'right': 1,
      's': 2,
      'down': 2,
      'a': 3,
      'left': 3
    };

    const row = idle ? 0 : directions[direction.toLowerCase()];
    return {
      backgroundPosition: `-${frame * spriteSize.width}px -${row * spriteSize.height}px`
    };
  };

  return (
    <div 
      style={{
        ...style,
        position: 'absolute',
      }}
      className="z-20"
    >
      {/* Welcome Message */}
      {showWelcome && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 -translate-y-16
                     bg-black/75 text-white text-sm px-4 py-2 rounded-xl
                     whitespace-nowrap backdrop-blur-sm"
        >
          <div className="relative">
           👋  Hi! I'm Lui! Ready to explore!
            <div className="absolute top-full left-1/2 -translate-x-1/2
                          w-0 h-0 border-8 border-transparent border-t-black/75" 
            />
          </div>
        </div>
      )}

      {/* Sprite */}
      <div
        className="w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `url('/husky.png')`,
          backgroundSize: '128px 160px',
          ...getSpritePosition(),
          filter: idle ? 'drop-shadow(0 0 20px white) drop-shadow(0 0 40px blue)' : 'none',
          transition: 'filter 0.3s ease-in-out',
          animation: idle ? 'gentleBounce 1s ease-in-out infinite' : 'none',
        }}
      >
        <style jsx>{`
          @keyframes gentleBounce {
            0%, 100% {
              transform: translate(-50%, -50%);
            }
            50% {
              transform: translate(-50%, calc(-50% - 4px));
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CatSprite;