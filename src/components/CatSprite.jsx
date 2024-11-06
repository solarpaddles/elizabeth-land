import React, { useState, useEffect } from 'react';

const CatSprite = ({ direction, isMoving, idle, style }) => {
  const [frame, setFrame] = useState(0);
  const spriteSize = { width: 32.1, height: 32.1 };
  
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
      className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ 
        ...style,
        background: `url('/husky.png')`,
        backgroundSize: '128px 160px',
        ...getSpritePosition()
      }}
    />
  );
};

export default CatSprite;
