import React from 'react';

const FloatingPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-50 w-[calc(100vw-3rem)] md:w-80 shadow-2xl rounded-xl overflow-hidden border border-border bg-surface3 p-2 hover:border-border-hover transition-colors">
      <iframe 
        style={{ border: 0, width: '100%', height: '42px' }} 
        src="https://bandcamp.com/EmbeddedPlayer/album=185457229/size=small/bgcol=1a1a1a/linkcol=ec4899/transparent=true/" 
        seamless
        title="Ode à Felicidade de Pedro Lago"
      >
        <a href="https://oforno.bandcamp.com/album/ode-felicidade">Ode à Felicidade de Pedro Lago</a>
      </iframe>
    </div>
  );
};

export default FloatingPlayer;
