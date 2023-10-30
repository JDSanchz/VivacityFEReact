import React, { useState, useEffect } from 'react';

interface HelloCardProps {
  helloIn7Languages: Record<string, string>;
}

const HelloCard: React.FC<HelloCardProps> = ({ helloIn7Languages }) => {
  const [currentHello, setCurrentHello] = useState('Click to generate greeting');
  const [isShaking, setIsShaking] = useState(false);

  const getRandomHello = () => {
    const keys = Object.keys(helloIn7Languages);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentHello(`${randomKey}: ${helloIn7Languages[randomKey]}`);
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
    }, 500);  // Remove shaking class after 0.5s
  };

  return (
    <div className={`hello-card ${isShaking ? 'shake-element' : ''}`} onClick={getRandomHello}>
      <div className="card-content">
        {currentHello}
      </div>
    </div>
  );
};

export default HelloCard;
