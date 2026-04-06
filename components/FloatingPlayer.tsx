import React, { useState, useEffect } from 'react';

const FloatingPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show player after scrolling down 100vh (past the hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-50 w-[calc(100vw-3rem)] md:w-80 shadow-2xl rounded-xl overflow-hidden border border-border bg-surface3 p-2 hover:border-border-hover transition-colors animate-fade-in-up">
      <iframe 
        style={{ border: 0, width: '100%', height: '42px' }} 
        src="https://bandcamp.com/EmbeddedPlayer/album=185457229/size=small/bgcol=1a1a1a/linkcol=ec4899/transparent=true/" 
        seamless
        loading="lazy"
        title="Ode à Felicidade de Pedro Lago"
      >
        <a href="https://oforno.bandcamp.com/album/ode-felicidade">Ode à Felicidade de Pedro Lago</a>
      </iframe>
    </div>
  );
};

export default FloatingPlayer;
