import React, { useState } from 'react';
import { ExternalLink, Play, Music, Youtube } from 'lucide-react';

interface EmbedCardProps {
  type?: 'youtube' | 'soundcloud' | 'website' | 'video' | 'vimeo' | 'image';
  url?: string;
  directLink: string;
  title: string;
  customThumbnail?: string;
  customLinkLabel?: string;
  customEmbedTitle?: string;
  onImageClick?: (imageUrl: string) => void;
}

const EmbedCard: React.FC<EmbedCardProps> = ({ type, url, directLink, title, customThumbnail, customLinkLabel, customEmbedTitle, onImageClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // Helper function to extract YouTube ID
  const getYoutubeId = (link: string) => {
    if (!link) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const derivedThumbnailUrl = (type === 'youtube' || type === 'video') ? 
    `https://img.youtube.com/vi/${getYoutubeId(url || directLink)}/maxresdefault.jpg` : '';

  const [fallbackThumbnailUrl, setFallbackThumbnailUrl] = useState('');

  const thumbnailUrl = fallbackThumbnailUrl || derivedThumbnailUrl;

  const handleImageError = () => {
    // Fallback to hqdefault if maxresdefault fails (404)
    if (thumbnailUrl.includes('maxresdefault')) {
      setFallbackThumbnailUrl(thumbnailUrl.replace('maxresdefault', 'hqdefault'));
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // YouTube sometimes returns a 120x90 grey placeholder image instead of a 404
    // when maxresdefault is not available. We detect this by checking the naturalWidth.
    if (e.currentTarget.naturalWidth === 120 && thumbnailUrl.includes('maxresdefault')) {
      setFallbackThumbnailUrl(thumbnailUrl.replace('maxresdefault', 'hqdefault'));
    }
  };

  if (type === 'youtube' || type === 'video') {
    const videoId = getYoutubeId(url || directLink);

    if (videoId) {
      return (
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border my-4 bg-black relative group">
          {!isPlaying ? (
            /* FACADE: Show Thumbnail + Play Button */
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
              aria-label={`Reproduzir vídeo: ${title}`}
            >
              {/* Thumbnail Image */}
              {thumbnailUrl && (
                <img 
                  src={thumbnailUrl}
                  alt={`Thumbnail de ${title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              )}
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

              <div className="relative z-10 w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-xl">
                <Play size={32} className="text-white fill-white ml-1" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                 <p className="text-primary font-sans text-sm font-medium truncate pr-4">{title}</p>
              </div>
            </button>
          ) : (
            /* ACTUAL VIDEO: Uses youtube-nocookie and origin param to fix Error 153 */
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${origin}`}
              title={title}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          )}
        </div>
      );
    }
  }

  if (type === 'vimeo' && url) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border my-4 bg-black relative">
        <iframe
          src={url}
          frameBorder="0"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full"
          title={title}
        ></iframe>
      </div>
    );
  }

  if (type === 'image' && customThumbnail) {
    return (
      <div 
        className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border my-4 bg-black relative group cursor-pointer"
        onClick={() => onImageClick && onImageClick(customThumbnail)}
      >
        <img 
          src={customThumbnail}
          alt={`Thumbnail de ${title}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback for SoundCloud or Websites
  // Check if link is valid (not empty and not just a placeholder '#')
  const isValidLink = directLink && directLink !== '#';

  if (customThumbnail && isValidLink) {
    return (
      <a 
        href={directLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border my-4 bg-black relative group"
      >
        <img 
          src={customThumbnail}
          alt={`Thumbnail de ${title}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-xl">
            <Play size={32} className="text-white fill-white ml-1" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
           <p className="text-primary font-sans text-sm font-medium truncate pr-4">{title}</p>
           <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-80 group-hover:opacity-100 flex items-center gap-1 whitespace-nowrap">
             {customLinkLabel || 'Assistir'} <ExternalLink size={14} />
           </span>
        </div>
      </a>
    );
  }

  const cardContent = (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-border rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
          {type === 'soundcloud' ? <Music size={20} /> : type === 'youtube' ? <Youtube size={20} /> : <ExternalLink size={20} />}
        </div>
        <div>
          <p className="text-xs text-muted uppercase tracking-wider mb-1">
            {customLinkLabel || (type === 'soundcloud' ? 'Ouvir no SoundCloud' : type === 'youtube' ? 'Assistir no YouTube' : 'Visitar Projeto')}
          </p>
          <h4 className="font-semibold text-primary">{customEmbedTitle || title}</h4>
        </div>
      </div>
      {isValidLink && <ExternalLink className="text-muted group-hover:text-primary transition-colors" size={18} />}
    </div>
  );

  if (isValidLink) {
    return (
      <a 
        href={directLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block w-full bg-surface3 border border-border hover:border-primary hover:border-opacity-50 rounded-xl p-6 my-4 transition-all duration-300"
      >
        {cardContent}
      </a>
    );
  }

  // Non-clickable card if link is missing/dead
  return (
    <div className="group block w-full bg-surface3 border border-border rounded-xl p-6 my-4 opacity-70">
       {cardContent}
    </div>
  );
};

export default EmbedCard;